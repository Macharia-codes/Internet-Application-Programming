const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formMessage.textContent = 'Please complete all fields with a valid email address.';
    contactForm.reportValidity();
    return;
  }

  const name = document.querySelector('#name').value.trim();
  formMessage.textContent = `Thank you, ${name}. Your message has been received locally.`;
  contactForm.reset();
});
