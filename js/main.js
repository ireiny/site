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
async function submitContactByEmail(event) {
  // Prevent the default HTML form submission page refresh
  event.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const statusText = document.getElementById('formStatus');
  
  // Grab the security verification token from Turnstile
  const turnstileToken = document.querySelector('[name="cf-turnstile-response"]')?.value;

  if (!turnstileToken) {
    statusText.style.color = "#ef4444"; // Tailwind red-500
    statusText.textContent = "Por favor, complete a verificação de segurança.";
    return false;
  }

  // Update button interface state
  submitBtn.disabled = true;
  statusText.style.color = "#4a4846"; // Charcoal light color from your design palette
  statusText.textContent = "A enviar...";

  // Collect the values using your explicit input field IDs
  const formData = {
    name: document.getElementById('form-name-input').value,
    phone: document.getElementById('form-phone-input').value,
    email: document.getElementById('form-email-input').value,
    service: document.getElementById('form-service-select').value,
    message: document.getElementById('form-message-input').value,
    turnstileToken: turnstileToken
  };

  try {
    // Replace with your real live Cloudflare Worker URL
    const response = await fetch('https://workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      statusText.style.color = "#9a7b39"; // Matching your gold-dark layout style
      statusText.textContent = "Mensagem enviada com sucesso!";
      document.getElementById('contact-form').reset();
      
      // Clear security challenge token value locally
      if (typeof turnstile !== 'undefined') turnstile.reset();
    } else {
      statusText.style.color = "#ef4444";
      statusText.textContent = "Erro no servidor. Por favor, tente novamente mais tarde.";
    }
  } catch (error) {
    statusText.style.color = "#ef4444";
    statusText.textContent = "Erro de rede. Verifique a sua ligação à internet.";
  } finally {
    submitBtn.disabled = false;
  }

  return false;
}
