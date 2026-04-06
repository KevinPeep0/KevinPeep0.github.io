const toggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('mobile-menu');
const backdrop = document.querySelector('.mobile-menu-backdrop');

if (toggle && navMenu && backdrop) {

  function openMenu() {
    navMenu.classList.add('open');
    navMenu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.classList.add('active');
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navMenu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('active');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    // Esperar transición antes de ocultar backdrop
    setTimeout(() => { backdrop.style.display = 'none'; }, 250);
  }

  // Abrir
  toggle.addEventListener('click', () => {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Cerrar al hacer click en el backdrop
  backdrop.addEventListener('click', closeMenu);

  // Cerrar al hacer click en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
