code_fixed = """
// Kode script.js LENGKAP & SIAP PAKAI untuk Tirtatama

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

// SATU FUNGSI showToast SAJA
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

// FUNGSI handleSubmit SIAP KIRIM WA - GANTI NOMOR INI!
function handleSubmit(event) {
  event.preventDefault();
  console.log("🚀 handleSubmit DIPANGGIL!");

  const nama = document.getElementById('nama').value.trim() || 'Tidak diisi';
  const email = document.getElementById('email').value.trim() || 'Tidak diisi';
  const layanan = document.getElementById('layanan').value || 'Tidak dipilih';
  const pesan = document.getElementById('pesan').value.trim() || 'Tidak ada pesan';

  console.log("📋 Data Form:", {nama, email, layanan, pesan});

  // GANTI NOMOR INI DENGAN NOMOR WA KAMU!
  const nomorWA = '6287881482307'; 
  
  const textWA = `🌊 *KONSULTASI TIRTATAMA* 🌊%0A%0A` +
                 `👤 *Nama:* ${nama}%0A` +
                 `📧 *Email:* ${email}%0A` +
                 `🎯 *Layanan:* ${layanan}%0A` +
                 `💬 *Pesan:* ${pesan}%0A%0A` +
                 `⏰ Dikirim: ${new Date().toLocaleString('id-ID')}%0A` +
                 `💻 Dari: tirtatama.id`;

  const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(textWA)}`;
  console.log("🔗 WA Link:", waLink);

  // BUK A WHATSAPP
  const waWindow = window.open(waLink, '_blank');
  
  if (waWindow) {
    showToast('✅ WhatsApp terbuka! Tekan KIRIM di WA');
    console.log('✅ WA berhasil dibuka');
  } else {
    showToast('❌ Popup diblokir! Izinkan popup browser');
    console.log('❌ Popup diblokir');
  }

  // Reset form
  document.getElementById('kontak-form').reset();
}

// Particles hero
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

// Active nav on scroll
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

console.log('🐟 script.js Tirtatama SIAP PAKAI!');
""";

print("Kode script.js LENGKAP sudah dibuat")
print("GANTI NOMOR WA di baris: const nomorWA = '6287881482307';")
print("SAVE ke file script.js -> REFRESH halaman -> TEST!")