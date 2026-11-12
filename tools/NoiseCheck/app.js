const COPY = {
  pt: {
    eyebrow:'LISBOA + SEIXAL · CONSULTA POR MORADA', title:'Antes de escolher a casa, ouça o bairro.', intro:'Descubra a zona de ruído exterior de uma morada e os cuidados a ter durante a visita. Dados municipais, explicados de forma simples.',
    city:'Município', address:'Rua e número de porta', search:'Procurar', placeholder:'Ex. Avenida Almirante Reis, 20', addressHint:'Escreva pelo menos 3 caracteres para ver sugestões. Escolha um resultado e confirme a localização no mapa. Também pode clicar diretamente no mapa.', mapHint:'Clique no local exato do imóvel', legendHint:'As cores mostram o ruído junto do ponto escolhido. Lden e Ln usam a mesma escala numérica; representam períodos diferentes.',
    emptyTitle:'Como será viver aqui?', emptyText:'Escolha uma morada ou um ponto no mapa para consultar os dois indicadores de ruído.',
    meaningTitle:'Dois indicadores, duas perguntas', meaning:'Lden é um indicador médio anual de 24 horas, com maior peso para a tarde e a noite. Ln representa a média noturna, das 23h às 7h. Os valores são exteriores; uma passagem de avião ou uma mota pode atingir picos superiores.',
    healthTitle:'O descanso também conta', health:'A exposição prolongada a ruído pode perturbar o sono, causar incómodo e afetar a saúde cardiovascular. A OMS tem recomendações específicas para cada fonte. Estes mapas combinam fontes e não permitem calcular o risco individual de uma pessoa.', who:'Ler as recomendações da OMS',
    limitsTitle:'A casa faz diferença', limits:'A orientação dos quartos, o piso, a fachada, as janelas e a ventilação alteram o som que chega ao interior. Confirme o local à noite e com as janelas abertas e fechadas. A classificação desta ferramenta é orientativa, sem verificação de conformidade legal.',
    sourcesTitle:'Fontes, datas e como ler os resultados', contactTitle:'Está a escolher casa?', contactText:'Ajudo a analisar a localização e o imóvel com atenção aos detalhes do dia a dia.', contact:'Fale comigo', back:'Voltar aos artigos', privacy:'O texto introduzido para obter sugestões é enviado ao Photon (Komoot / OpenStreetMap). O mapa utiliza mosaicos OpenStreetMap. As sugestões ficam apenas na memória desta página; não há armazenamento permanente das pesquisas. A ferramenta não guarda as moradas pesquisadas nem envia os resultados à consultora.',
    searching:'A procurar a morada…', loading:'A carregar as zonas municipais de ruído…', choose:'Escolha a morada correspondente.', noMatches:'Não encontrei a morada. Experimente acrescentar o número ou escolha o ponto no mapa.', error:'Não foi possível carregar os dados. Verifique a ligação e tente novamente.', outside:'Este ponto não tem cobertura nas duas camadas deste município. Confirme o município e a localização. A ausência de dados não significa silêncio.', selected:'PONTO SELECIONADO', pin:'Local escolhido no mapa', day:'Indicador de 24 horas', night:'Indicador noturno', unit:'dB(A), no exterior', range:'Intervalo da zona modelada', assessment:'O que verificar nesta zona', classes:['Menor carga de ruído noturno','Carga de ruído noturno intermédia','Carga de ruído noturno elevada','Carga de ruído noturno muito elevada'],
    levels:['Há menor carga de ruído noturno no modelo. Verifique ainda fontes locais, vizinhos e equipamentos do edifício.','A zona merece uma visita noturna. O conforto depende bastante da orientação dos quartos e das características do edifício.','Dê prioridade ao conforto acústico do quarto. A avaliação das janelas, da ventilação e da fachada merece atenção antes de decidir.','A carga de ruído exterior noturno é muito elevada nesta categoria. Considere uma avaliação acústica do imóvel antes de assumir compromissos.'],
    tips:['Compare o som no quarto com as janelas abertas e fechadas.','Verifique vedantes, montagem das janelas, caixas de estore e entradas de ventilação.','Pergunte se existem dados de desempenho acústico do conjunto da janela, e não apenas do vidro.','Visite à noite e observe se os quartos estão voltados para a rua ou para uma fachada mais protegida.'],
    compare:'Comparação territorial', benchmark:(lower,same)=>`Na área coberta por esta camada, cerca de ${lower}% fica em classes inferiores de ruído noturno e ${same}% na mesma classe. É uma comparação de área, não de moradores ou de ruas.`, caution:'Junto a uma fronteira entre zonas, pequenos ajustes no ponto podem mudar o intervalo.', sourceLisboa:'Lisboa · conjunto aberto “Mapa do Ruído”, identificado no catálogo como 2020. Existe um mapa municipal mais recente, de referência 2022, ainda não integrado nesta versão.', sourceSeixal:'Seixal · camadas digitais municipais, consultadas em 12/11/2026. O relatório publicado descreve 2018, com revisão em 2022; o serviço digital não identifica expressamente o ano do modelo.', boundary:'Perto das fronteiras e em ruas compridas, confirme sempre o número de porta.', noAverage:'O comparador usa a distribuição da área cartografada por classes. Não apresenta uma “média da cidade” nem permite comparar diretamente cidades com anos de referência diferentes.',
    sourceDetails:'São apresentadas classes da modelação municipal, com geometria simplificada em menos de aproximadamente 1 m para facilitar a consulta. A precisão acústica depende do modelo original. Os mapas não avaliam o interior, ruído dos vizinhos ou todas as fontes temporárias. Os indicadores e a data de publicação não equivalem a medições atuais.', localOnly:'Primeira versão · dados de referência', missing:'Sem dados', toolsTitle:'Ruído perto de casa', bounds:'Ajuste o ponto ao edifício para uma leitura mais útil.'
  },
  en: {
    eyebrow:'LISBON + SEIXAL · ADDRESS LOOKUP', title:'Before choosing a home, listen to the neighbourhood.', intro:'Check the outdoor noise zone around an address and what to look for during a viewing. Municipal data, explained simply.',
    city:'Municipality', address:'Street and house number', search:'Search', placeholder:'E.g. Avenida Almirante Reis, 20', addressHint:'Type at least 3 characters for suggestions. Choose a result and confirm its position on the map. You can also click directly on the map.', mapHint:'Click the exact location of the property', legendHint:'Colours show noise around your selected point. Lden and Ln share a numerical colour scale but describe different periods.',
    emptyTitle:'What would living here sound like?', emptyText:'Choose an address or a point on the map to check both noise indicators.', meaningTitle:'Two indicators, two questions', meaning:'Lden is an annual average indicator over 24 hours, with extra weighting for evening and night. Ln is the night average, 11 pm to 7 am. These are outdoor levels; an individual aircraft or motorbike can create higher peaks.',
    healthTitle:'Rest matters too', health:'Long-term noise exposure can disturb sleep, cause annoyance and affect cardiovascular health. WHO recommendations are source-specific. These combined-source maps cannot calculate an individual person’s health risk.', who:'Read the WHO guidelines', limitsTitle:'The building makes a difference', limits:'Bedroom orientation, floor, façade, windows and ventilation affect indoor sound. Visit at night and listen with windows open and closed. This tool’s classification is indicative and does not establish legal compliance.',
    sourcesTitle:'Sources, dates and how to read the results', contactTitle:'Choosing your next home?', contactText:'I help you assess the location and the property with attention to everyday details.', contact:'Get in touch', back:'Back to articles', privacy:'Text entered for address suggestions is sent to Photon (Komoot / OpenStreetMap). The map uses OpenStreetMap tiles. Suggestions are cached only in this page’s memory. This tool does not permanently save searched addresses or send your results to the consultant.',
    searching:'Searching for the address…', loading:'Loading the municipal noise zones…', choose:'Select the matching address.', noMatches:'No address found. Add the house number or select a point on the map.', error:'Unable to load the data. Check your connection and try again.', outside:'This point is not covered by both layers for this municipality. Check the municipality and location. Missing data does not mean quiet.', selected:'SELECTED LOCATION', pin:'Location selected on the map', day:'24-hour indicator', night:'Night indicator', unit:'dB(A), outdoors', range:'Modelled zone range', assessment:'What to check here', classes:['Lower night noise load','Intermediate night noise load','Elevated night noise load','Very high night noise load'],
    levels:['The model shows a lower night noise load. Still check local sources, neighbours and building equipment.','Visit this location at night. Comfort depends substantially on bedroom orientation and the building.','Prioritise bedroom acoustic comfort. Examine the windows, ventilation and façade before deciding.','This category has a very high outdoor night noise load. Consider an acoustic assessment of the property before committing.'],
    tips:['Compare bedroom sound with windows open and closed.','Check window seals, installation, shutter boxes and ventilation openings.','Ask for acoustic performance information for the whole window assembly, as well as the glass.','Visit at night and check whether bedrooms face the street or a more sheltered façade.'], compare:'A geographical comparison', benchmark:(lower,same)=>`Within this layer’s mapped area, around ${lower}% is in lower night noise classes and ${same}% in the same class. This compares area, not residents or streets.`, caution:'Near a zone boundary, a small change in the selected position can change the range.', sourceLisboa:'Lisbon · open “Mapa do Ruído” dataset, labelled 2020 in the catalogue. A newer municipal map refers to 2022 and is not yet integrated into this version.', sourceSeixal:'Seixal · municipal digital layers, retrieved 12 November 2026. The published report describes 2018, revised in 2022; the digital service does not explicitly state its model year.', boundary:'Near zone boundaries and on long streets, always confirm the house number.', noAverage:'The comparison uses the distribution of mapped area across classes. It does not show a city average or support direct comparisons between cities with different reference years.', sourceDetails:'Results are municipal model classes, with geometry simplified by less than approximately 1 m for browsing. Acoustic accuracy depends on the original model. Maps do not assess indoor sound, neighbours or every temporary source. The indicators and publication date are not current measurements.', localOnly:'First version · reference data', missing:'No data', toolsTitle:'Noise near your home', bounds:'Place the point on the building for a more useful reading.'
  },
  ru: {
    eyebrow:'ЛИССАБОН + SEIXAL · ПОИСК ПО АДРЕСУ', title:'Прежде чем выбрать дом, послушайте район.', intro:'Проверьте зону внешнего шума по адресу и узнайте, на что обратить внимание на просмотре. Муниципальные данные простым языком.',
    city:'Муниципалитет', address:'Улица и номер дома', search:'Найти', placeholder:'Например, Avenida Almirante Reis, 20', addressHint:'Введите минимум 3 символа, чтобы увидеть подсказки. Выберите результат и проверьте точку на карте. Можно сразу нажать на нужный дом на карте.', mapHint:'Нажмите на точное расположение дома', legendHint:'Цвета показывают шум вокруг выбранной точки. У Lden и Ln одна числовая шкала цветов, но разные периоды.', emptyTitle:'Как здесь будет жить?', emptyText:'Выберите адрес или точку на карте, чтобы посмотреть оба показателя шума.',
    meaningTitle:'Два показателя для разных задач', meaning:'Lden — среднегодовой показатель за сутки с повышенным весом вечера и ночи. Ln — средний ночной уровень с 23:00 до 07:00. Это внешний шум. Отдельный самолёт или мотоцикл может создавать более высокие пики.',
    healthTitle:'Сон тоже имеет значение', health:'Длительное воздействие шума может нарушать сон, вызывать раздражение и влиять на здоровье сердца и сосудов. Рекомендации ВОЗ зависят от источника шума. По этим картам с суммой источников нельзя рассчитать индивидуальный риск для человека.', who:'Рекомендации ВОЗ', limitsTitle:'Многое зависит от дома', limits:'Сторона спальни, этаж, фасад, окна и вентиляция влияют на звук внутри. Придите вечером и послушайте с открытыми и закрытыми окнами. Категории инструмента ориентировочные и не устанавливают соответствие закону.',
    sourcesTitle:'Источники, даты и пояснения', contactTitle:'Выбираете жильё?', contactText:'Помогу оценить расположение и сам объект с вниманием к деталям повседневной жизни.', contact:'Связаться со мной', back:'Вернуться к статьям', privacy:'Вводимый для подсказок текст передаётся в Photon (Komoot / OpenStreetMap). Карта использует тайлы OpenStreetMap. Подсказки временно хранятся только в памяти страницы. Инструмент не сохраняет адреса постоянно и не отправляет ваши результаты риелтору.', searching:'Ищу адрес…', loading:'Загружаю муниципальные зоны шума…', choose:'Выберите нужный адрес.', noMatches:'Адрес не найден. Добавьте номер дома или выберите точку на карте.', error:'Не удалось загрузить данные. Проверьте соединение и попробуйте снова.', outside:'Для этой точки нет покрытия в обеих картах выбранного муниципалитета. Проверьте город и расположение. Отсутствие данных не означает тишину.', selected:'ВЫБРАННАЯ ТОЧКА', pin:'Место, выбранное на карте', day:'Суточный показатель', night:'Ночной показатель', unit:'дБ(A), снаружи', range:'Диапазон расчётной зоны', assessment:'Что проверить здесь', classes:['Меньшая ночная шумовая нагрузка','Средняя ночная шумовая нагрузка','Повышенная ночная шумовая нагрузка','Очень высокая ночная шумовая нагрузка'],
    levels:['Модель показывает меньшую ночную нагрузку. Всё равно проверьте локальные источники, соседей и оборудование дома.','Стоит приехать сюда вечером. Комфорт во многом зависит от стороны спальни и характеристик здания.','Уделите особое внимание тишине в спальне. До решения о покупке или аренде проверьте окна, вентиляцию и фасад.','Эта категория соответствует очень высокой внешней ночной нагрузке. Перед обязательствами стоит рассмотреть акустическое обследование квартиры.'],
    tips:['Сравните звук в спальне с открытыми и закрытыми окнами.','Проверьте уплотнители, монтаж окон, короба рольставней и вентиляционные отверстия.','Спросите про акустические характеристики всего оконного блока, а также стеклопакета.','Придите вечером и посмотрите, выходят ли спальни на улицу или на более защищённый фасад.'], compare:'Сравнение по территории', benchmark:(lower,same)=>`В пределах этой карты около ${lower}% площади находится в более низких категориях ночного шума, а ${same}% — в такой же. Сравнивается площадь, а не жители или количество улиц.`, caution:'У границы зон небольшой сдвиг точки может изменить диапазон.', sourceLisboa:'Лиссабон · открытый набор «Mapa do Ruído», в каталоге обозначен 2020 год. Есть более новая муниципальная карта за 2022 год, она пока не подключена к этой версии.', sourceSeixal:'Seixal · цифровые муниципальные слои, получены 12.11.2026. Опубликованный отчёт описывает 2018 год, редакция 2022 года. В цифровом сервисе год модели явно не указан.', boundary:'У границы зон и на длинных улицах обязательно уточняйте номер дома.', noAverage:'Сравнение использует распределение площади карты по категориям. Это не среднее по городу. Карты разных лет не позволяют напрямую сравнивать города.', sourceDetails:'Результат показывает категории муниципальной модели. Геометрия упрощена менее чем примерно на 1 м для быстрой загрузки. Точность акустики зависит от исходной модели. Карты не оценивают звук внутри, соседей и все временные источники. Дата публикации и показатели не являются сегодняшними измерениями.', localOnly:'Первая версия · справочные данные', missing:'Нет данных', toolsTitle:'Шум возле дома', bounds:'Установите точку на дом, чтобы получить более полезный результат.'
  }
};

Object.assign(COPY.pt, {
  eyebrow:'LISBOA · SEIXAL · MONTIJO · SETÚBAL · ALCOCHETE',
  intro:'Consulte zonas de ruído e mapas municipais. Lisboa e Seixal têm consulta automática por ponto; Montijo, Setúbal e Alcochete dispõem, nesta versão, de mapas históricos para consulta.',
  toolsMenu:'Ferramentas', historical:'DADOS HISTÓRICOS', automatic:'Consulta automática', archiveMode:'Consulta dos mapas oficiais',
  localWarning:'Este ficheiro foi aberto diretamente no computador. Para a consulta automática funcionar, carregue o conteúdo do arquivo no seu site ou utilize um servidor HTTP local. Depois abra tools/NoiseCheck/ no site. Os links para os mapas oficiais continuam disponíveis.',
  archiveTitle:'Mapas históricos de ruído', archiveExplanation:'A morada serve para localizar o imóvel no mapa de base. Ainda não estão integradas as zonas digitais necessárias para calcular Lden e Ln neste ponto. Consulte os documentos oficiais abaixo.',
  archiveNoReading:'Não foi calculado um nível de ruído para esta morada.', archiveAdvice:'Use o mapa para identificar a zona e confirme a situação no local. Estes dados antigos podem não refletir novas vias, edifícios ou alterações de tráfego.', originalMap:'Abrir o mapa original', technicalReport:'Relatório técnico', west:'Zona oeste', east:'Zona este', yearReport:'Ano do relatório', reference:'Referência do modelo', mapReading:'Localize o imóvel no PDF e consulte a legenda. A imagem abaixo é apenas uma pré-visualização.',
  cityDates:{lisboa:'2020 · existe uma versão municipal mais recente, de referência 2022.',seixal:'Relatório de referência 2018, revisto em 2022. O ano da camada digital não está confirmado.',montijo:'Relatório de setembro de 2010. Mapas das zonas este e oeste.',setubal:'Modelo de referência 2018. Relatório de janeiro de 2020; plantas publicadas com o PDM.',alcochete:'Relatório de agosto de 2020. Dados rodoviários de 2019.'},
  sourceDetails:'Os resultados automáticos são classes da modelação municipal, com geometria simplificada em menos de aproximadamente 1 m. A precisão depende do modelo original. Para as outras cidades, estão disponíveis links para os mapas oficiais, sem cálculo automático. Os mapas não avaliam o interior nem todas as fontes temporárias.',
  emptyText:'Em Lisboa e no Seixal, escolha uma morada ou ponto para consultar os indicadores. Nas outras cidades, consulte os mapas históricos.'
});
Object.assign(COPY.en, {
  eyebrow:'LISBON · SEIXAL · MONTIJO · SETÚBAL · ALCOCHETE',
  intro:'Explore municipal noise zones and maps. Lisbon and Seixal support automatic point lookup; Montijo, Setúbal and Alcochete have historical maps to consult in this version.',
  toolsMenu:'Tools', historical:'HISTORICAL DATA', automatic:'Automatic lookup', archiveMode:'Official map consultation',
  localWarning:'This file was opened directly on your computer. For automatic lookup, upload the archive contents to your website or use a local HTTP server. Then open tools/NoiseCheck/ on the website. Official map links remain available.',
  archiveTitle:'Historical noise maps', archiveExplanation:'The address locates the property on the base map. Digital noise zones for automatic Lden and Ln lookup are not yet integrated for this municipality. Consult the official documents below.',
  archiveNoReading:'No noise level has been calculated for this address.', archiveAdvice:'Use the map to identify the zone and check conditions on site. Older data may not reflect new roads, buildings or traffic changes.', originalMap:'Open the original map', technicalReport:'Technical report', west:'Western area', east:'Eastern area', yearReport:'Report year', reference:'Model reference', mapReading:'Locate the property in the PDF and read its legend. The image below is a preview only.',
  cityDates:{lisboa:'2020 · a newer municipal version refers to 2022.',seixal:'Published report refers to 2018, revised in 2022. The digital layer year is unconfirmed.',montijo:'September 2010 report. Eastern and western map sheets.',setubal:'2018 reference model. January 2020 report; map sheets published with the municipal plan.',alcochete:'August 2020 report. Road traffic data from 2019.'},
  sourceDetails:'Automatic results are municipal model classes, with geometry simplified by less than approximately 1 m. Accuracy depends on the original model. The other cities have links to official maps without automatic calculation. Maps do not assess indoor sound or every temporary source.',
  emptyText:'In Lisbon and Seixal, choose an address or point to check the indicators. For the other cities, consult the historical maps.'
});
Object.assign(COPY.ru, {
  eyebrow:'LISBOA · SEIXAL · MONTIJO · SETÚBAL · ALCOCHETE',
  intro:'Муниципальные зоны шума и карты. Для Лиссабона и Seixal работает автоматический поиск по точке. Для Montijo, Setúbal и Alcochete в этой версии доступны исторические карты.',
  toolsMenu:'Инструменты', historical:'ИСТОРИЧЕСКИЕ ДАННЫЕ', automatic:'Автоматическая оценка', archiveMode:'Просмотр официальных карт',
  localWarning:'Вы открыли файл прямо с компьютера. Для автоматического расчёта загрузите содержимое архива на сайт или запустите локальный HTTP-сервер. Затем откройте tools/NoiseCheck/ на сайте. Ссылки на официальные карты доступны и сейчас.',
  archiveTitle:'Исторические карты шума', archiveExplanation:'Адрес позволяет найти дом на базовой карте. Цифровые зоны для автоматического определения Lden и Ln в этом муниципалитете пока не подключены. Ниже можно открыть официальные документы.',
  archiveNoReading:'Уровень шума для этого адреса не рассчитан.', archiveAdvice:'Найдите зону на карте и проверьте ситуацию на месте. Старые данные могут не учитывать новые дороги, здания и изменения движения.', originalMap:'Открыть оригинальную карту', technicalReport:'Технический отчёт', west:'Западная часть', east:'Восточная часть', yearReport:'Год отчёта', reference:'Период модели', mapReading:'Найдите дом в PDF и посмотрите легенду. Изображение ниже служит только для предварительного просмотра.',
  cityDates:{lisboa:'2020 год. Есть более новая муниципальная версия за 2022 год.',seixal:'Опубликованный отчёт описывает 2018 год, редакция 2022 года. Год цифрового слоя не подтверждён.',montijo:'Отчёт сентября 2010 года. Карты восточной и западной частей.',setubal:'Модель 2018 года, отчёт января 2020 года. Карты опубликованы с PDM.',alcochete:'Отчёт августа 2020 года. Дорожные данные за 2019 год.'},
  sourceDetails:'Автоматические результаты — категории муниципальной модели. Геометрия упрощена менее чем примерно на 1 м. Точность зависит от исходной модели. Для остальных городов даны ссылки на официальные карты без автоматического расчёта. Карты не оценивают шум внутри и все временные источники.',
  emptyText:'В Лиссабоне и Seixal выберите адрес или точку для расчёта. Для остальных городов можно открыть исторические карты.'
});

const archiveSources = {
  montijo: {
    report:'https://www.mun-montijo.pt/cmmontijo/uploads/writer_file/document/2972/08_419_MRPM01.pdf',
    maps:[['Lden','west','https://www.mun-montijo.pt/cmmontijo/uploads/writer_file/document/2984/Carta2.1_Lden_ZO.pdf'],['Ln','west','https://www.mun-montijo.pt/cmmontijo/uploads/writer_file/document/2986/Carta2.2_Ln_ZO.pdf'],['Lden','east','https://www.mun-montijo.pt/cmmontijo/uploads/writer_file/document/2983/Carta2.1_Lden_ZE.pdf'],['Ln','east','https://www.mun-montijo.pt/cmmontijo/uploads/writer_file/document/2985/Carta2.2_Ln_ZE.pdf']]
  },
  setubal: {
    report:'https://www.mun-setubal.pt/wp-content/uploads/2020/02/PDM_A_Memoria_Descritiva_Ruido.pdf',
    maps:[['Lden','','https://www.mun-setubal.pt/wp-content/uploads/2024/11/A11.1-Situacao-Atual-Lden.pdf'],['Ln','','https://www.mun-setubal.pt/wp-content/uploads/2024/11/A11.2-Situacao-Atual-Ln.pdf']]
  },
  alcochete: {
    report:'https://bo.cm-alcochete.pt/FileUploads/municipio/camara-municipal/documentos/revisao-do-pdm-2026/mapa-de-ruido/pecas-escritas/dbw_mrrm_0104_20.pdf',
    maps:[['Lden','','https://bo.cm-alcochete.pt/FileUploads/municipio/camara-municipal/documentos/revisao-do-pdm-2026/mapa-de-ruido/pecas-desenhadas/anexoii-1_mr_alcochete_lden.pdf'],['Ln','','https://bo.cm-alcochete.pt/FileUploads/municipio/camara-municipal/documentos/revisao-do-pdm-2026/mapa-de-ruido/pecas-desenhadas/anexoii-2_mr_alcochete_ln.pdf']]
  }
};

const cityConfig = {
  lisboa: { center:[38.735,-9.145], zoom:12, viewbox:'-9.24,38.81,-9.085,38.69' },
  seixal: { center:[38.61,-9.10], zoom:12, viewbox:'-9.20,38.66,-9.02,38.53' },
  montijo: { center:[38.704,-8.97], zoom:12, viewbox:'-9.08,38.84,-8.45,38.48' },
  setubal: { center:[38.524,-8.893], zoom:12, viewbox:'-9.12,38.61,-8.59,38.38' },
  alcochete: { center:[38.753,-8.96], zoom:12, viewbox:'-9.03,38.86,-8.67,38.66' }
};
const $ = id => document.getElementById(id);
let language = new URLSearchParams(location.search).get('lang') || 'pt';
if (!COPY[language]) language = 'pt';
let city = new URLSearchParams(location.search).get('city') || 'lisboa';
if (!cityConfig[city]) city = 'lisboa';
$('city').value = city;
let metric = 'ln', requestId = 0, currentPoint = null, currentResult = null;
let searchAbort, lastSearchTime = 0, overlay, marker;
let searchTimer, searchVersion=0, activeMatch=-1, suggestions=[];
const addressCache=new Map();
const map = L.map('map', { preferCanvas:true }).setView(cityConfig[city].center, cityConfig[city].zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19, attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
const localFile = location.protocol === 'file:';
const worker = localFile ? null : new Worker('noise-worker.js');

function textElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}
function colour(high) {
  if (high <= 45) return '#72a18a';
  if (high <= 55) return '#b5b574';
  if (high <= 65) return '#d89d61';
  return '#b66b63';
}
function band(value) {
  if (!value) return COPY[language].missing;
  if (value.low === 0) return `≤ ${value.high}`;
  return `${value.low}–${value.high}`;
}
function category(night) {
  if (night.high <= 45) return 0;
  if (night.high <= 55) return 1;
  if (night.high <= 65) return 2;
  return 3;
}

function renderResult() {
  const t = COPY[language];
  $('result').replaceChildren();
  if (archiveSources[city]) {
    renderArchive();
    return;
  }
  if (!currentResult || !currentPoint) {
    const empty = textElement('div', '', 'empty');
    empty.append(textElement('span','◌','sound-icon'), textElement('h2',t.emptyTitle), textElement('p',t.emptyText));
    $('result').append(empty);
    return;
  }
  if (!currentResult.day || !currentResult.night) {
    $('result').append(textElement('h2',t.missing), textElement('p',t.outside));
    return;
  }
  const { day, night } = currentResult;
  $('result').append(textElement('span',t.selected,'kicker'),textElement('h2',currentPoint.name || t.pin),textElement('p',`${currentPoint.lat.toFixed(5)}, ${currentPoint.lon.toFixed(5)}`,'coordinates'));
  const values = textElement('div','','values');
  for (const [name,value] of [[`${t.day} · Lden`,day],[`${t.night} · Ln`,night]]) {
    const item = textElement('div','','value');
    item.append(textElement('small',name),textElement('strong',band(value)),textElement('span',t.unit));
    values.append(item);
  }
  $('result').append(values,textElement('p',t.range,'hint'));
  const level = category(night);
  const assessment = textElement('div','','assessment');
  assessment.style.borderColor = colour(night.high);
  assessment.append(textElement('h3',t.classes[level]),textElement('p',t.levels[level]));
  $('result').append(assessment,textElement('h3',t.assessment));
  const list = document.createElement('ul');
  for (const tip of t.tips) list.append(textElement('li',tip));
  $('result').append(list);
  if (night.quieterArea !== null) $('result').append(textElement('p',t.benchmark(night.quieterArea,night.sameArea),'benchmark'));
  $('result').append(textElement('p',t.caution,'hint'),textElement('p',city === 'lisboa' ? t.sourceLisboa : t.sourceSeixal,'source-note'));
}

function renderArchive() {
  const t=COPY[language], source=archiveSources[city];
  $('result').append(textElement('span',t.historical,'archive-year'),textElement('h2',`${$('city').selectedOptions[0].textContent} · ${t.archiveTitle}`),textElement('p',t.cityDates[city],'archive-note'));
  if (currentPoint) $('result').append(textElement('p',currentPoint.name || `${currentPoint.lat.toFixed(5)}, ${currentPoint.lon.toFixed(5)}`),textElement('strong',t.archiveNoReading,'archive-note'));
  $('result').append(textElement('p',t.archiveExplanation,'archive-note'));
  const list=document.createElement('ul');list.className='archive-links';
  for (const [indicator,area,url] of source.maps) {
    const li=document.createElement('li');li.append(sourceLink(url,`${indicator}${area ? ` · ${t[area]}` : ''} · PDF`));list.append(li);
  }
  const li=document.createElement('li');li.append(sourceLink(source.report,t.technicalReport));list.append(li);
  $('result').append(list,textElement('p',t.mapReading,'hint'));
  const image=document.createElement('img');image.className='archive-cover';image.src=`images/${city}-preview.jpg`;image.alt=`${$('city').selectedOptions[0].textContent} · Lden`;image.loading='lazy';
  const previewLink=sourceLink(source.maps[0][2], '');previewLink.append(image);$('result').append(previewLink,textElement('p',t.archiveAdvice,'source-note'));
}

function sourceLink(url,label) {
  const a = textElement('a',label); a.href=url; a.target='_blank'; a.rel='noopener'; return a;
}
function translate() {
  const t = COPY[language]; document.documentElement.lang=language; document.title=`${t.toolsTitle} | Irina Abasheva`;
  document.querySelectorAll('[data-t]').forEach(element => { element.textContent = t[element.dataset.t]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
  $('address').placeholder = city === 'lisboa' ? t.placeholder : `Ex. Rua, 20, ${$('city').selectedOptions[0].textContent}`;
  const prefix = language === 'pt' ? '../../' : `../../${language}/`;
  $('contact-link').href=`${prefix}contact/`; $('back').href=`${prefix}articles/`;
  $('tools-link').href=language==='pt' ? '../' : `../../${language}/tools/`;
  $('local-warning').hidden=!localFile;$('local-warning').textContent=t.localWarning;
  $('source-status').replaceChildren(textElement('strong',t.historical),textElement('span',t.cityDates[city]),textElement('small',archiveSources[city] ? t.archiveMode : t.automatic,'source-status-label'));
  document.querySelectorAll('[data-metric]').forEach(button=>button.disabled=Boolean(archiveSources[city]));
  document.querySelector('.legend').hidden=Boolean(archiveSources[city]);
  document.querySelector('[data-t="legendHint"]').hidden=Boolean(archiveSources[city]);
  const list = document.createElement('ul');
  const sources = [
    [t.sourceLisboa,'https://dados.cm-lisboa.pt/dataset/mapa-do-ruido','Lisboa Aberta'],
    [t.sourceSeixal,'https://www.cm-seixal.pt/ruido/ruido-no-municipio-do-seixal','Câmara Municipal do Seixal']
  ];
  for (const [description,url,label] of sources) { const li=textElement('li',`${description} `);li.append(sourceLink(url,label));list.append(li); }
  for (const [key,source] of Object.entries(archiveSources)) {const li=textElement('li',`${t.cityDates[key]} `);li.append(sourceLink(source.report,`${key==='setubal'?'Setúbal':key==='montijo'?'Montijo':'Alcochete'} · ${t.technicalReport}`));list.append(li);}
  $('sources-content').replaceChildren(list,textElement('p',t.sourceDetails),textElement('p',t.noAverage),textElement('p',t.boundary));
  renderResult();
}

function reset() {
  requestId++; cancelSearch(); currentPoint=null; currentResult=null;
  $('matches').replaceChildren(); $('status').textContent=''; $('search').disabled=false;
  if (overlay) { map.removeLayer(overlay); overlay=null; }
  if (marker) { map.removeLayer(marker); marker=null; }
  renderResult();
}

function selectPoint(lat,lon,name='') {
  cancelSearch(); $('search').disabled=false; closeSuggestions();
  currentPoint={lat,lon,name};currentResult=null;renderResult();
  if (marker) map.removeLayer(marker);
  marker=L.marker([lat,lon],{icon:L.divIcon({className:'selection-pin',iconSize:[18,18],iconAnchor:[9,9]})}).addTo(map);
  map.setView([lat,lon],16);
  analyse();
}
function analyse() {
  if (!currentPoint) return;
  const id=++requestId;
  if (archiveSources[city]) {renderResult();$('status').textContent=COPY[language].archiveNoReading;return;}
  if (!worker) {$('status').textContent=COPY[language].localWarning;return;}
  $('status').textContent=COPY[language].loading;
  if (overlay) { map.removeLayer(overlay);overlay=null; }
  worker.postMessage({id,city,metric,...currentPoint});
}
if (worker) worker.onmessage=({data})=>{
  if (data.id!==requestId) return;
  if (data.error) { $('status').textContent=COPY[language].error;return; }
  currentResult=data;renderResult();
  if (!data.day || !data.night) { $('status').textContent=COPY[language].outside;return; }
  $('status').textContent=COPY[language].bounds;
  overlay=L.geoJSON(data.overlay,{interactive:false,style:feature=>({color:colour(feature.properties.DB_HI),fillColor:colour(feature.properties.DB_HI),fillOpacity:.34,weight:.3})}).addTo(map);
  marker?.setZIndexOffset(1000);
};
if (worker) worker.onerror=()=>{$('status').textContent=COPY[language].error;};
map.on('click',event=>selectPoint(event.latlng.lat,event.latlng.lng));
$('city').addEventListener('change',()=>{city=$('city').value;const url=new URL(location);url.searchParams.set('city',city);history.replaceState(null,'',url);reset();map.setView(cityConfig[city].center,cityConfig[city].zoom);translate();});
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{language=button.dataset.lang;const url=new URL(location);url.searchParams.set('lang',language);history.replaceState(null,'',url);translate();}));
document.querySelectorAll('[data-metric]').forEach(button=>button.addEventListener('click',()=>{metric=button.dataset.metric;document.querySelectorAll('[data-metric]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));analyse();}));
function closeSuggestions() {
  suggestions=[]; activeMatch=-1;
  $('matches').replaceChildren();
  $('address').setAttribute('aria-expanded','false');
  $('address').removeAttribute('aria-activedescendant');
}
function cancelSearch() {
  clearTimeout(searchTimer); searchVersion++; searchAbort?.abort();
  $('search').disabled=false; closeSuggestions();
}
function chooseSuggestion(item) {
  $('address').value=item.name;
  selectPoint(item.lat,item.lon,item.name);
}
function showSuggestions(items) {
  closeSuggestions(); suggestions=items;
  for (const [index,item] of items.entries()) {
    const option=textElement('button',item.name);
    option.type='button';option.id=`address-option-${index}`;
    option.setAttribute('role','option');option.setAttribute('aria-selected','false');
    option.tabIndex=-1;
    option.addEventListener('mousedown',event=>event.preventDefault());
    option.addEventListener('click',()=>chooseSuggestion(item));
    $('matches').append(option);
  }
  $('address').setAttribute('aria-expanded',String(items.length>0));
  $('status').textContent=items.length ? COPY[language].choose : COPY[language].noMatches;
}
async function searchAddress(version) {
  const query=$('address').value.trim(), searchCity=city;
  if (query.length<3 || version!==searchVersion) return;
  const key=`${searchCity}:${query.toLocaleLowerCase()}`;
  if (addressCache.has(key)) {showSuggestions(addressCache.get(key));return;}
  const delay=Math.max(0,1000-(Date.now()-lastSearchTime));
  if (delay) {searchTimer=setTimeout(()=>searchAddress(version),delay);return;}
  lastSearchTime=Date.now();searchAbort=new AbortController();
  $('search').disabled=true;$('status').textContent=COPY[language].searching;
  const [west,north,east,south]=cityConfig[city].viewbox.split(',');
  const [lat,lon]=cityConfig[city].center;
  const params=new URLSearchParams({q:query,lat,lon,limit:5,countrycode:'PT',bbox:[west,south,east,north].join(',')});
  try {
    const response=await fetch(`https://photon.komoot.io/api/?${params}`,{signal:searchAbort.signal});
    if (!response.ok) throw new Error('Geocoder unavailable');
    const data=await response.json();
    if (version!==searchVersion) return;
    const items=[];
    for (const feature of data.features || []) {
      const [lon,lat]=feature.geometry?.coordinates || [];
      if (!Number.isFinite(lat) || !Number.isFinite(lon) || lon<+west || lon>+east || lat<+south || lat>+north) continue;
      const p=feature.properties || {};
      const street=[p.street || p.name,p.housenumber].filter(Boolean).join(' ');
      const name=[...new Set([street,p.city || p.district,p.postcode].filter(Boolean))].join(', ');
      if (name) items.push({lat,lon,name});
    }
    if (addressCache.size>=100) addressCache.delete(addressCache.keys().next().value);
    addressCache.set(key,items);showSuggestions(items);
  } catch(error) {
    if (version===searchVersion && error.name!=='AbortError') $('status').textContent=COPY[language].error;
  } finally {if (version===searchVersion) $('search').disabled=false;}
}
$('address').addEventListener('input',()=>{
  cancelSearch();$('status').textContent='';
  if ($('address').value.trim().length>=3) {
    const version=searchVersion; searchTimer=setTimeout(()=>searchAddress(version),700);
  }
});
$('address').addEventListener('keydown',event=>{
  if (event.key==='Escape') {cancelSearch();return;}
  if (!suggestions.length) return;
  if (event.key==='ArrowDown' || event.key==='ArrowUp') {
    event.preventDefault();
    activeMatch=(activeMatch+(event.key==='ArrowDown'?1:-1)+suggestions.length)%suggestions.length;
    [...$('matches').children].forEach((option,index)=>option.setAttribute('aria-selected',String(index===activeMatch)));
    $('address').setAttribute('aria-activedescendant',`address-option-${activeMatch}`);
  } else if (event.key==='Enter' && activeMatch>=0) {
    event.preventDefault();chooseSuggestion(suggestions[activeMatch]);
  }
});
document.addEventListener('click',event=>{
  if (event.target!==$('address') && !$('matches').contains(event.target) && event.target!==$('search')) cancelSearch();
});
$('search-form').addEventListener('submit',event=>{
  event.preventDefault();cancelSearch();searchAddress(searchVersion);
});
translate();
