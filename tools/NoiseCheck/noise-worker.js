/* Local point-in-polygon lookup. Keeps large municipal geometries off the UI thread. */
const cache = new Map();

function ringContains(ring, x, y) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function polygonContains(rings, x, y) {
  return ringContains(rings[0], x, y) && !rings.slice(1).some(ring => ringContains(ring, x, y));
}

function ringArea(ring) {
  let sum = 0;
  for (let i = 1; i < ring.length; i++) sum += ring[i - 1][0] * ring[i][1] - ring[i][0] * ring[i - 1][1];
  return Math.abs(sum / 2);
}

function indexFeatures(collection) {
  const entries = [];
  for (const feature of collection.features) {
    const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    for (const rings of polygons) {
      if (!rings.length || rings[0].length < 4) continue;
      let west = Infinity, east = -Infinity, south = Infinity, north = -Infinity;
      for (const [x, y] of rings[0]) {
        west = Math.min(west, x); east = Math.max(east, x);
        south = Math.min(south, y); north = Math.max(north, y);
      }
      entries.push({ rings, west, east, south, north, low: Number(feature.properties.DB_LO), high: Number(feature.properties.DB_HI), area: Math.max(0, ringArea(rings[0]) - rings.slice(1).reduce((s, r) => s + ringArea(r), 0)) });
    }
  }
  return entries;
}

async function load(city, metric) {
  const key = `${city}-${metric}`;
  if (!cache.has(key)) {
    const promise = fetch(`data/${key}.json`).then(response => {
      if (!response.ok) throw new Error('Data unavailable');
      return response.json();
    }).then(indexFeatures).catch(error => { cache.delete(key); throw error; });
    cache.set(key, promise);
  }
  return cache.get(key);
}

function lookup(entries, x, y) {
  const matches = entries.filter(p => x >= p.west && x <= p.east && y >= p.south && y <= p.north && polygonContains(p.rings, x, y));
  if (!matches.length) return null;
  const low = Math.min(...matches.map(p => p.low));
  const high = Math.max(...matches.map(p => p.high));
  const total = entries.reduce((s, p) => s + p.area, 0);
  const lower = entries.filter(p => p.high <= low).reduce((s, p) => s + p.area, 0);
  const same = entries.filter(p => p.low === low && p.high === high).reduce((s, p) => s + p.area, 0);
  // An areal comparison, not a population-weighted exposure statistic.
  return { low, high, quieterArea: total ? Math.round(lower / total * 100) : null, sameArea: total ? Math.round(same / total * 100) : null, multiple: matches.length > 1 };
}

function nearby(entries, x, y) {
  return { type: 'FeatureCollection', features: entries.filter(p => p.west <= x + .008 && p.east >= x - .008 && p.south <= y + .006 && p.north >= y - .006).map(p => ({ type: 'Feature', properties: { DB_LO: p.low, DB_HI: p.high }, geometry: { type: 'Polygon', coordinates: p.rings } })) };
}

if (typeof self !== 'undefined') self.onmessage = async ({ data }) => {
  const { id, city, lat, lon, metric } = data;
  try {
    const [day, night] = await Promise.all([load(city, 'lden'), load(city, 'ln')]);
    self.postMessage({ id, day: lookup(day, lon, lat), night: lookup(night, lon, lat), overlay: nearby(metric === 'ln' ? night : day, lon, lat) });
  } catch (error) {
    self.postMessage({ id, error: error.message });
  }
};

if (typeof module !== 'undefined') module.exports = { ringContains, polygonContains, lookup, indexFeatures };
