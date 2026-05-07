/* ── 1. CUSTOM CURSOR ── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  let mx = 0, my = 0;
  let rx = 0, ry = 0; 

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top  = my - 6 + 'px';
  });

  function animateRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const interactables = 'a, button, .chip, .soft-chip, .proj-card, .exp-card';
  document.querySelectorAll(interactables).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform   = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform   = 'scale(1)';
    });
  });
})();


/* ── 2. SCROLL REVEAL ── */
(function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i * 0.05) + 's';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
})();