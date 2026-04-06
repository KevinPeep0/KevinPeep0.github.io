// ─── MENÚ HAMBURGUESA (YOUTUBE-STYLE) ───
const burger = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('mobile-menu');
const backdrop = document.querySelector('.mobile-menu-backdrop');

if (burger && navMenu && backdrop) {

  function openMenu() {
    navMenu.classList.add('open');
    navMenu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    burger.classList.add('active');
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navMenu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    burger.classList.remove('active');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { backdrop.style.display = 'none'; }, 250);
  }

  burger.addEventListener('click', () => {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  backdrop.addEventListener('click', closeMenu);

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ─── FILTRO DE PROYECTOS ───
const btns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const countEl = document.getElementById('count');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        // Forzar reflow para reiniciar la animación
        void card.offsetWidth;
        card.style.animationDelay = `${visible * 0.06}s`;
        card.style.animation = 'cardIn 0.35s ease forwards';
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    countEl.textContent = visible;
  });
});
