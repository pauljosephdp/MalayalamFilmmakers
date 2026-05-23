// Nav scroll effect
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Join form — basic client-side feedback (swap with real backend/Formspree/etc.)
const form = document.getElementById('join-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name || !email) return;
  btn.textContent = 'Sending…';
  btn.disabled = true;
  // Simulate async — replace with fetch() to your endpoint
  setTimeout(() => {
    form.innerHTML = `
      <p style="text-align:center;padding:2rem;color:var(--color-accent);font-family:var(--font-serif);font-size:1.2rem;">
        Thanks, ${name}!<br>
        <span style="font-size:0.95rem;color:var(--color-muted);font-family:var(--font-sans)">We'll be in touch at ${email} within 48 hours.</span>
      </p>`;
  }, 800);
});
