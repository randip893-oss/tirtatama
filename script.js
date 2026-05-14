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

function handleSubmit(event) {
  event.preventDefault();
  console.log("handleSubmit DIPANGGIL!"); 
  
  const nama = document.getElementById('nama').value || 'Tidak diisi';
  const email = document.getElementById('email').value || 'Tidak diisi';
  const layanan = document.getElementById('layanan').value || 'Tidak dipilih';
  const pesan = document.getElementById('pesan').value || 'Tidak ada pesan';

  console.log("Data:", {nama, email, layanan, pesan});
  
  const nomorWA = '6287881482307'; // GANTI NOMOR INI DENGAN NOMOR KAMU!
  
  const textWA = `🌊 *Konsultasi Tirtatama*\n\n` +
                 `👤 Nama: ${nama}\n` +
                 `📧 Email: ${email}\n` +
                 `🎯 Layanan: ${layanan}\n` +
                 `💬 Pesan: ${pesan}`;

  const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(textWA)}`;
  console.log("WA Link:", waLink);
  
  window.open(waLink, '_blank');
  
  // Toast
  const toast = document.getElementById('toast');
  toast.textContent = '✅ WhatsApp terbuka dengan data!';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 3000);
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