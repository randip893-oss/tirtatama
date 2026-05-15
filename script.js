document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');
  const scrollTopBtn = document.getElementById('scrollTop');
  const toast = document.getElementById('toast');
  const particlesContainer = document.getElementById('particles');
  const katalogGrid = document.getElementById('katalog-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const sections = document.querySelectorAll('section[id]');

  const showToast = (message, duration = 3000) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
  };

  const setNavbarState = () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  };

  const setActiveNav = () => {
    let current = '';
    const top = window.scrollY + 140;

    sections.forEach((section) => {
      if (top >= section.offsetTop) current = section.getAttribute('id');
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute('href');
      link.classList.toggle('active', target === `#${current}`);
    });
  };

  const createParticles = () => {
    if (!particlesContainer) return;
    particlesContainer.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 3;
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${Math.random() * 12 + 8}s;
        animation-delay: ${Math.random() * 8}s;
        opacity: ${Math.random() * 0.5 + 0.18};
      `;
      particlesContainer.appendChild(p);
    }
  };

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      navMobile.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navMobile.classList.contains('open') ? 'true' : 'false');
    });

    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navMobile.classList.remove('open'));
    });
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  window.addEventListener('scroll', setNavbarState, { passive: true });
  window.addEventListener('scroll', setActiveNav, { passive: true });

  createParticles();
  setNavbarState();
  setActiveNav();

  window.showDetail = function (type) {
    if (type === 'lele') showToast('Detail Ikan Lele Jumbo sedang disiapkan.');
    else if (type === 'koi') showToast('Detail Ikan Koi Premium sedang disiapkan.');
    else showToast('Detail produk sedang disiapkan.');
  };

  window.handleSubmit = function (event) {
    event.preventDefault();

    const nama = document.getElementById('nama')?.value.trim() || 'Tidak diisi';
    const email = document.getElementById('email')?.value.trim() || 'Tidak diisi';
    const produk = document.getElementById('produk')?.value.trim() || 'Tidak dipilih';
    const pesan = document.getElementById('pesan')?.value.trim() || 'Tidak ada pesan';

    const nomorWA = '6287881482307';
    const textWA =
      `🌊 *Konsultasi Tirtatama*\n\n` +
      `👤 Nama: ${nama}\n` +
      `📧 Email: ${email}\n` +
      `🎯 Produk: ${produk}\n` +
      `💬 Pesan: ${pesan}`;

    const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(textWA)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
    showToast('✅ Pesan berhasil disiapkan untuk WhatsApp');
  };

  window.filterKatalog = function (kategori) {
    if (!katalogGrid) return;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    const activeBtn = Array.from(filterButtons).find((btn) =>
      btn.getAttribute('onclick')?.includes(`filterKatalog('${kategori}')`)
    );
    if (activeBtn) activeBtn.classList.add('active');

    const cards = katalogGrid.querySelectorAll('.card-katalog');
    cards.forEach((card) => {
      const cardKategori = card.dataset.kategori || '';
      card.style.display = kategori === 'all' || cardKategori === kategori ? '' : 'none';
    });

    showToast(`Filter: ${kategori === 'all' ? 'Semua Produk' : kategori}`);
  };

  window.loadMore = function () {
    showToast('Fitur muat lebih banyak belum dihubungkan ke data tambahan.');
  };
});