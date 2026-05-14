window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
  if (scrollTop) scrollTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });
}

const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function filterIkan(kat, el) {
  document.querySelectorAll('.pi-kat-badge').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');

  document.querySelectorAll('.pi-item').forEach(item => {
    const show = kat === 'semua' || item.dataset.kat === kat;
    item.classList.toggle('hidden', !show);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function handleSubmit(e) {
  e.preventDefault();
  showToast('✅ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
  e.target.reset();
}

(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 3;
    p.style.cssText = `
      left:${Math.random() * 100}%;
      width:${size}px;
      height:${size}px;
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 8}s;
      opacity:${Math.random() * 0.5 + 0.2};
    `;
    container.appendChild(p);
  }
})();