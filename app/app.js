/**
 * ITNEWS Reader - Interactive Logic & Live Feed Sync
 */

(function () {
  'use strict';

  // State
  let allPosts = [];
  let filteredPosts = [];
  let currentCountry = 'all';
  let currentTag = 'all';
  let searchQuery = '';
  let sortBy = 'newest';
  let displayedCount = 18;
  const PAGE_SIZE = 12;

  // DOM Elements
  const newsGrid = document.getElementById('newsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyState');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const paginationWrapper = document.getElementById('paginationWrapper');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const countryChips = document.getElementById('countryChips');
  const tagChips = document.getElementById('tagChips');
  const sortSelect = document.getElementById('sortSelect');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const refreshFeedBtn = document.getElementById('refreshFeedBtn');
  const statusText = document.getElementById('statusText');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Reader Modal Elements
  const readerModal = document.getElementById('readerModal');
  const closeReaderBtn = document.getElementById('closeReaderBtn');
  const closeFooterBtn = document.getElementById('closeFooterBtn');
  const readerTitle = document.getElementById('readerTitle');
  const readerDate = document.getElementById('readerDate');
  const readerCategories = document.getElementById('readerCategories');
  const readerTags = document.getElementById('readerTags');
  const readerTagsWrapper = document.getElementById('readerTagsWrapper');
  const readerImage = document.getElementById('readerImage');
  const readerContent = document.getElementById('readerContent');
  const readerExternalLink = document.getElementById('readerExternalLink');
  const readerFooterAction = document.getElementById('readerFooterAction');

  // Country Flags dictionary
  const COUNTRY_FLAGS = {
    'Venezuela': '🇻🇪 Venezuela',
    'Colombia': '🇨🇴 Colombia',
    'México': '🇲🇽 México',
    'Panamá': '🇵🇦 Panamá',
    'Chile': '🇨🇱 Chile',
    'Argentina': '🇦🇷 Argentina',
    'Ecuador': '🇪🇨 Ecuador',
    'Perú': '🇵🇪 Perú',
    'Brasil': '🇧🇷 Brasil',
    'Costa Rica': '🇨🇷 Costa Rica'
  };

  // Init Theme
  const savedTheme = localStorage.getItem('itnews_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('itnews_theme', next);
  });

  // Load Data
  async function loadData() {
    statusText.textContent = 'Sincronizando...';
    try {
      // 1. Cargar el catálogo completo generado localmente
      const localRes = await fetch('posts_data.json');
      if (localRes.ok) {
        allPosts = await localRes.json();
      }

      // 2. Intentar obtener noticias en vivo desde search.json de itnews.lat
      try {
        const liveRes = await fetch('https://itnews.lat/search.json', { cache: 'no-cache' });
        if (liveRes.ok) {
          const livePosts = await liveRes.json();
          mergeLivePosts(livePosts);
        }
      } catch (err) {
        console.warn('Live API search.json fetch fallback to local:', err);
      }

      statusText.textContent = 'En línea';
      applyFiltersAndSort();
    } catch (error) {
      console.error('Error cargando noticias:', error);
      statusText.textContent = 'Modo Local';
      newsGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <i class="ri-error-warning-line"></i>
          <h3>Error al cargar los artículos</h3>
          <p>No se pudo conectar al repositorio de noticias. Revisa la conexión de red.</p>
        </div>
      `;
    }
  }

  // Merge live search posts if any newer
  function mergeLivePosts(livePosts) {
    if (!Array.isArray(livePosts) || livePosts.length === 0) return;
    
    // Map existing URLs
    const existingUrls = new Set(allPosts.map(p => p.url.toLowerCase()));

    livePosts.forEach(lp => {
      const url = lp.url.startsWith('http') ? lp.url : `https://itnews.lat${lp.url}`;
      if (!existingUrls.has(url.toLowerCase())) {
        allPosts.unshift({
          id: url.split('/').pop().replace('.html', ''),
          title: lp.title || 'Publicación reciente',
          date: lp.date || new Date().toISOString(),
          image: 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/itnewslat-p.jpg',
          detailImage: 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/itnewslat-g.jpg',
          categories: lp.category ? [lp.category] : ['Latinoamérica'],
          tags: lp.tags ? lp.tags.split(',').map(t => t.trim()) : ['Actualidad'],
          url: url,
          snippet: 'Consulta el artículo completo en el portal oficial de ITNEWS.LAT.',
          body: ''
        });
        existingUrls.add(url.toLowerCase());
      }
    });
  }

  // Filter & Sort Engine
  function applyFiltersAndSort() {
    const q = searchQuery.toLowerCase().trim();

    filteredPosts = allPosts.filter(post => {
      // 1. Country Filter
      if (currentCountry !== 'all') {
        const hasCountry = post.categories && post.categories.some(c => 
          c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === 
          currentCountry.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        );
        if (!hasCountry) return false;
      }

      // 2. Tag Filter
      if (currentTag !== 'all') {
        const hasTag = post.tags && post.tags.some(t => 
          t.toLowerCase().includes(currentTag.toLowerCase()) || 
          currentTag.toLowerCase().includes(t.toLowerCase())
        );
        if (!hasTag) return false;
      }

      // 3. Search Query
      if (q) {
        const inTitle = post.title && post.title.toLowerCase().includes(q);
        const inSnippet = post.snippet && post.snippet.toLowerCase().includes(q);
        const inBody = post.body && post.body.toLowerCase().includes(q);
        const inTags = post.tags && post.tags.some(t => t.toLowerCase().includes(q));
        const inCategories = post.categories && post.categories.some(c => c.toLowerCase().includes(q));
        if (!inTitle && !inSnippet && !inBody && !inTags && !inCategories) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    filteredPosts.sort((a, b) => {
      if (sortBy === 'newest') {
        return (b.date || '').localeCompare(a.date || '');
      } else if (sortBy === 'oldest') {
        return (a.date || '').localeCompare(b.date || '');
      } else if (sortBy === 'title') {
        return (a.title || '').localeCompare(b.title || '');
      }
      return 0;
    });

    displayedCount = 18;
    renderPosts();
  }

  // Render Grid
  function renderPosts() {
    resultsCount.textContent = `${filteredPosts.length} publicaciones encontradas`;

    if (filteredPosts.length === 0) {
      newsGrid.innerHTML = '';
      emptyState.style.display = 'block';
      paginationWrapper.style.display = 'none';
      return;
    }

    emptyState.style.display = 'none';
    const toShow = filteredPosts.slice(0, displayedCount);

    newsGrid.innerHTML = toShow.map(post => {
      const primaryCountry = (post.categories && post.categories[0]) || 'LatAm';
      const flagText = COUNTRY_FLAGS[primaryCountry] || primaryCountry;
      const displayImage = post.image || post.detailImage || 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/itnewslat-p.jpg';
      const tagsList = (post.tags || []).slice(0, 2);

      return `
        <article class="news-card" data-id="${post.id}">
          <div class="card-media">
            <img src="${displayImage}" alt="${escapeHtml(post.title)}" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/itnewslat-p.jpg'">
            <span class="card-country-badge">${escapeHtml(flagText)}</span>
          </div>
          <div class="card-content">
            ${tagsList.length ? `
              <div class="card-tags">
                ${tagsList.map(t => `<span class="tag-badge">#${escapeHtml(t)}</span>`).join('')}
              </div>
            ` : ''}
            <h3 class="card-title">${escapeHtml(post.title)}</h3>
            <p class="card-snippet">${escapeHtml(post.snippet)}</p>
            <div class="card-footer">
              <span class="card-date"><i class="ri-time-line"></i> ${formatDate(post.date)}</span>
              <span class="card-read-action">Leer artículo <i class="ri-arrow-right-line"></i></span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Pagination Button
    if (displayedCount < filteredPosts.length) {
      paginationWrapper.style.display = 'flex';
    } else {
      paginationWrapper.style.display = 'none';
    }

    // Attach Click Events to Cards
    newsGrid.querySelectorAll('.news-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const post = allPosts.find(p => p.id === id);
        if (post) openReader(post);
      });
    });
  }

  // Open In-App Reader Modal
  function openReader(post) {
    readerTitle.textContent = post.title;
    readerDate.textContent = formatDate(post.date);

    // Categories (Countries)
    if (post.categories && post.categories.length) {
      readerCategories.innerHTML = post.categories.map(c => 
        `<span class="reader-country-tag">${escapeHtml(COUNTRY_FLAGS[c] || c)}</span>`
      ).join('');
    } else {
      readerCategories.innerHTML = '';
    }

    // Tags
    if (post.tags && post.tags.length) {
      readerTagsWrapper.style.display = 'inline-flex';
      readerTags.textContent = post.tags.map(t => `#${t}`).join(' ');
    } else {
      readerTagsWrapper.style.display = 'none';
    }

    // Images
    const modalImage = post.detailImage || post.image || '';
    if (modalImage) {
      readerImage.src = modalImage;
      readerImage.parentElement.style.display = 'block';
    } else {
      readerImage.parentElement.style.display = 'none';
    }

    // External Link
    readerExternalLink.href = post.url;
    readerFooterAction.href = post.url;

    // Content Parsing (Markdown to HTML)
    readerContent.innerHTML = formatMarkdownBody(post.body || post.snippet);

    readerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReader() {
    readerModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeReaderBtn.addEventListener('click', closeReader);
  closeFooterBtn.addEventListener('click', closeReader);
  readerModal.addEventListener('click', (e) => {
    if (e.target === readerModal) closeReader();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && readerModal.classList.contains('active')) {
      closeReader();
    }
  });

  // Event Listeners
  loadMoreBtn.addEventListener('click', () => {
    displayedCount += PAGE_SIZE;
    renderPosts();
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    applyFiltersAndSort();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    applyFiltersAndSort();
  });

  countryChips.addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    countryChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    currentCountry = e.target.getAttribute('data-value');
    applyFiltersAndSort();
  });

  tagChips.addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    tagChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    currentTag = e.target.getAttribute('data-value');
    applyFiltersAndSort();
  });

  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    applyFiltersAndSort();
  });

  refreshFeedBtn.addEventListener('click', () => {
    refreshFeedBtn.style.transform = 'rotate(360deg)';
    refreshFeedBtn.style.transition = 'transform 0.5s ease';
    loadData().then(() => {
      setTimeout(() => {
        refreshFeedBtn.style.transform = '';
        refreshFeedBtn.style.transition = '';
      }, 500);
    });
  });

  resetFiltersBtn.addEventListener('click', () => {
    currentCountry = 'all';
    currentTag = 'all';
    searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';

    countryChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    countryChips.querySelector('[data-value="all"]').classList.add('active');

    tagChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    tagChips.querySelector('[data-value="all"]').classList.add('active');

    applyFiltersAndSort();
  });

  // Utilities
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!parts) return dateStr;
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const month = months[parseInt(parts[2], 10) - 1] || parts[2];
    return `${parts[3]} ${month} ${parts[1]}`;
  }

  function formatMarkdownBody(text) {
    if (!text) return '';
    // Strip footer widgets
    let clean = text
      .replace(/<table[\s\S]*?<\/table>/gi, '')
      .replace(/<img[\s\S]*?metricool[\s\S]*?>/gi, '')
      .replace(/!\[.*?\]\((.*?)\)/g, ''); // We feature the detail image at the top

    // Headers
    clean = clean.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    clean = clean.replace(/^## (.*$)/gim, '<h3>$1</h3>');

    // Bold & Italics
    clean = clean.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    clean = clean.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Blockquotes
    clean = clean.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Unordered lists
    clean = clean.replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>');

    // Paragraphs
    const blocks = clean.split(/\r?\n\r?\n/);
    const htmlBlocks = blocks.map(b => {
      b = b.trim();
      if (!b) return '';
      if (b.startsWith('<h3>') || b.startsWith('<blockquote>') || b.startsWith('<li>')) {
        if (b.startsWith('<li>')) return `<ul>${b}</ul>`;
        return b;
      }
      return `<p>${b}</p>`;
    });

    return htmlBlocks.join('');
  }

  // Initial Execution
  loadData();
})();
