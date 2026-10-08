document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year-span');
  if (year) year.textContent = new Date().getFullYear();
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  const service = new URLSearchParams(location.search).get('service');
  const select = document.getElementById('form-service-select');
  if (select && new URLSearchParams(location.search).has('serviceIndex')) {
    const index = Number(new URLSearchParams(location.search).get('serviceIndex'));
    if (Number.isInteger(index) && index >= 0 && index < select.options.length) select.selectedIndex = index;
  } else if (service && select) {
    const match = [...select.options].find(o => o.text.toLowerCase().includes(service.toLowerCase()) || o.value.toLowerCase().includes(service.toLowerCase()));
    if (match) select.value = match.value;
  }
});
function submitContactByEmail(event) {
  event.preventDefault();
  const value = id => (document.getElementById(id)?.value || '').trim();
  const subject = 'Website enquiry: ' + value('form-service-select');
  const body = ['Name: '+value('form-name-input'),'Phone: '+value('form-phone-input'),'Email: '+value('form-email-input'),'Service: '+value('form-service-select'),'','Message: '+value('form-message-input')].join('\n');
  window.location.href = 'mailto:prohomeportugal@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  return false;
}
