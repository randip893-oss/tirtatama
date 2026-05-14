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
    item.classList.toggle('hidden', kat !== 'semua' && item.dataset.kat !== kat);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add('show');

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function handleSubmit(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const layanan = document.getElementById('layanan').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  const text = `Halo Tirtatama,%0A
Nama: ${nama}%0A
Email: ${email}%0A
Layanan: ${layanan || '-'}%0A
Pesan: ${pesan || '-'}`;

  const nomorWA = '6287881482307';
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(`Halo Tirtatama,\nNama: ${nama}\nEmail: ${email}\nLayanan: ${layanan || '-'}\nPesan: ${pesan || '-'}`)}`;

  window.open(url, '_blank');
}

(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  container.innerHTML = '';
  const count = 18;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 3;

    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.5 + 0.2};
    `;

    container.appendChild(p);
  }
})();

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? '#90e0ef' : '';
  });
}, { passive: true });