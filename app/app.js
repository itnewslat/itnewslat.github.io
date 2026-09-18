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
  const countrySelect = document.getElementById('countrySelect');
  const tagSelect = document.getElementById('tagSelect');
  const sortSelect = document.getElementById('sortSelect');
  const headerSubscribeBtn = document.getElementById('headerSubscribeBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const refreshFeedBtn = document.getElementById('refreshFeedBtn');
  const statusText = document.getElementById('statusText');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const visitCountEl = document.getElementById('visitCount');

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

  // Reader Share Buttons Elements
  const shareWhatsappBtn = document.getElementById('shareWhatsappBtn');
  const shareLinkedinBtn = document.getElementById('shareLinkedinBtn');
  const shareXBtn = document.getElementById('shareXBtn');
  const shareFacebookBtn = document.getElementById('shareFacebookBtn');
  const shareInstagramBtn = document.getElementById('shareInstagramBtn');
  const shareEmailBtn = document.getElementById('shareEmailBtn');
  const shareCopyBtn = document.getElementById('shareCopyBtn');
  const shareToast = document.getElementById('shareToast');
  let currentOpenPost = null;

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

  // Init Theme - Default to light theme
  const savedTheme = localStorage.getItem('itnews_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('itnews_theme', next);
  });

  // Known Latin American country names for category mapping
  const KNOWN_COUNTRIES = [
    'Venezuela', 'Colombia', 'México', 'Panamá', 'Chile', 
    'Argentina', 'Ecuador', 'Perú', 'Brasil', 'Costa Rica'
  ];

  // Helper to determine the display country badge text based on active filter and post countries
  function getDisplayCountryBadge(post) {
    const categories = post.categories || [];
    // If a specific country is active in the filter
    if (currentCountry && currentCountry !== 'all') {
      const match = categories.find(c => 
        c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === 
        currentCountry.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      );
      if (match) {
        return COUNTRY_FLAGS[match] || match;
      }
    }

    // When showing all countries (or general view):
    // Count how many recognized Latin American countries it has
    const recognizedCount = categories.filter(c => 
      KNOWN_COUNTRIES.some(k => k.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    ).length;

    // If it covers 5 or more countries (or all primary ones), display "🌎 Latinoamérica"
    if (categories.length >= 5 || recognizedCount >= 5) {
      return '🌎 Latinoamérica';
    }

    // If it covers specific countries (less than 5), show the primary country or up to 2
    if (categories.length > 0) {
      const primary = categories[0];
      return COUNTRY_FLAGS[primary] || primary;
    }

    return '🌎 Latinoamérica';
  }

  // Load Data with automatic instant live sync from feed.xml
  async function loadData(isBackgroundSync = false) {
    if (!isBackgroundSync) {
      statusText.textContent = 'Sincronizando...';
    }
    let hasUpdated = false;

    try {
      // 1. Cargar el catálogo base posts_data.json si aún no hay posts
      if (allPosts.length === 0) {
        try {
          const localRes = await fetch('posts_data.json?t=' + Date.now());
          if (localRes.ok) {
            allPosts = await localRes.json();
            hasUpdated = true;
          }
        } catch (err) {
          console.warn('No se pudo cargar posts_data.json local:', err);
        }
      }

      // 2. Sincronización en vivo DIRECTA desde feed.xml (con bypass de caché)
      try {
        const feedUrl = '../feed.xml?t=' + Date.now();
        const feedRes = await fetch(feedUrl, { cache: 'no-store' });
        if (feedRes.ok) {
          const xmlText = await feedRes.text();
          const countAdded = parseAndMergeFeedXml(xmlText);
          if (countAdded > 0) {
            hasUpdated = true;
            console.log(`[Auto-Sync] feed.xml sincronizado: ${countAdded} artículos actualizados/agregados.`);
          }
        }
      } catch (feedErr) {
        // Intento alternativo con URL absoluta en producción si falla relativa
        try {
          const feedRes2 = await fetch('https://itnews.lat/feed.xml?t=' + Date.now(), { cache: 'no-store' });
          if (feedRes2.ok) {
            const xmlText2 = await feedRes2.text();
            const countAdded2 = parseAndMergeFeedXml(xmlText2);
            if (countAdded2 > 0) hasUpdated = true;
          }
        } catch (e) {
          console.warn('Error sincronizando feed.xml:', e);
        }
      }

      // 3. Fallback complementario desde search.json
      try {
        const searchRes = await fetch('../search.json?t=' + Date.now(), { cache: 'no-store' });
        if (searchRes.ok) {
          const livePosts = await searchRes.json();
          mergeLiveSearchPosts(livePosts);
        }
      } catch (searchErr) {
        // Silencioso, feed.xml tiene prioridad
      }

      statusText.textContent = 'En línea';
      if (hasUpdated || !isBackgroundSync) {
        applyFiltersAndSort();
      }
    } catch (error) {
      console.error('Error general cargando noticias:', error);
      statusText.textContent = 'Modo Local';
      if (allPosts.length === 0) {
        newsGrid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <i class="ri-error-warning-line"></i>
            <h3>Error al cargar los artículos</h3>
            <p>No se pudo conectar al repositorio de noticias. Revisa la conexión de red.</p>
          </div>
        `;
      }
    }
  }

  // Helper para normalizar identificadores o URLs (remover protocolo, dominio, barras y extensión)
  function getPostSlugKey(post) {
    if (!post) return '';
    if (post.id) {
      const cleanId = String(post.id).toLowerCase().replace(/\.html$/, '').replace(/^\/+/, '').split('/').pop();
      if (cleanId) return cleanId;
    }
    const targetUrl = post.url || '';
    if (targetUrl) {
      const clean = targetUrl.toLowerCase()
        .replace(/^https?:\/\/[^\/]+/, '')
        .replace(/\.html$/, '')
        .replace(/^\/+/, '')
        .split('/')
        .pop();
      if (clean) return clean;
    }
    if (post.title) {
      return post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50);
    }
    return '';
  }

  // Parsear feed.xml en vivo e integrar los artículos inmediatamente
  function parseAndMergeFeedXml(xmlString) {
    if (!xmlString) return 0;
    let addedCount = 0;

    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
      const items = xmlDoc.querySelectorAll('item');
      if (!items || items.length === 0) return 0;

      // Mapear posts existentes por slug/key y URL
      const existingKeyMap = new Map();
      allPosts.forEach((p, idx) => {
        const key = getPostSlugKey(p);
        if (key && !existingKeyMap.has(key)) existingKeyMap.set(key, idx);
        if (p.url) {
          const norm = p.url.toLowerCase().replace(/^https?:\/\//, '');
          if (!existingKeyMap.has(norm)) existingKeyMap.set(norm, idx);
        }
      });

      const newItemsList = [];

      items.forEach(item => {
        const title = item.querySelector('title')?.textContent?.trim() || '';
        const link = item.querySelector('link')?.textContent?.trim() || '';
        const pubDateRaw = item.querySelector('pubDate')?.textContent?.trim() || '';
        const description = item.querySelector('description')?.textContent?.trim() || '';
        
        // Extraer categorías y tags
        const categoryElements = item.querySelectorAll('category');
        const categories = [];
        const tags = [];

        categoryElements.forEach(catEl => {
          const val = catEl.textContent?.trim();
          if (!val) return;
          const isCountry = KNOWN_COUNTRIES.some(kc => 
            kc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === 
            val.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          );
          if (isCountry) {
            if (!categories.includes(val)) categories.push(val);
          } else {
            if (!tags.includes(val)) tags.push(val);
          }
        });

        // Extraer imagen de forma ultra-robusta (namespaces XML, atributos y búsqueda en description)
        let image = '';
        let detailImage = '';
        
        const mediaEls = [
          item.querySelector('media\\:content'),
          item.querySelector('content'),
          item.querySelector('media\\:thumbnail'),
          item.querySelector('thumbnail'),
          ...Array.from(item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')),
          ...Array.from(item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'thumbnail')),
          ...Array.from(item.getElementsByTagName('media:content')),
          ...Array.from(item.getElementsByTagName('media:thumbnail'))
        ].filter(Boolean);

        for (const el of mediaEls) {
          const u = el.getAttribute('url') || el.getAttribute('href');
          if (u && u.startsWith('http')) {
            image = u.trim();
            break;
          }
        }

        if (!image && description) {
          const imgMatch = description.match(/<img[^>]+src=["'](https?:\/\/[^"']+)["']/i) || 
                           description.match(/!\[.*?\]\((https?:\/\/[^\)]+)\)/i);
          if (imgMatch && !imgMatch[1].includes('metricool') && !imgMatch[1].includes('c3po.jpg')) {
            image = imgMatch[1].trim();
          }
        }

        if (image) {
          detailImage = image.replace('/540x320/', '/1024x680/').replace('-p.jpg', '-g.jpg');
        } else {
          image = 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/itnewslat-p.jpg';
          detailImage = 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/itnewslat-g.jpg';
        }

        // Formatear fecha
        let dateIso = '';
        if (pubDateRaw) {
          const parsedD = new Date(pubDateRaw);
          if (!isNaN(parsedD.getTime())) {
            const y = parsedD.getFullYear();
            const m = String(parsedD.getMonth() + 1).padStart(2, '0');
            const d = String(parsedD.getDate()).padStart(2, '0');
            const hh = String(parsedD.getHours()).padStart(2, '0');
            const mm = String(parsedD.getMinutes()).padStart(2, '0');
            dateIso = `${y}-${m}-${d} ${hh}:${mm} -0400`;
          }
        }

        // Normalizar URL a https://itnews.lat/...
        let canonicalUrl = link;
        if (canonicalUrl.startsWith('http://')) {
          canonicalUrl = canonicalUrl.replace('http://', 'https://');
        }

        const slug = link.split('/').pop().replace('.html', '').toLowerCase();
        const normUrlNoProto = link.toLowerCase().replace(/^https?:\/\//, '');

        // Limpieza de snippet para la tarjeta
        const cleanSnippet = description
          .replace(/<table[\s\S]*?<\/table>/gi, '')
          .replace(/<[^>]+>/g, '')
          .replace(/[#>*_`]/g, '')
          .replace(/\s+/g, ' ')
          .trim();
        const snippet = cleanSnippet.length > 200 ? cleanSnippet.substring(0, 200) + '...' : cleanSnippet;

        // Extraer bandera superNews
        const superNewsVal = item.querySelector('superNews')?.textContent?.trim()?.toLowerCase();
        const isSuperNews = superNewsVal === 'true';

        const postObject = {
          id: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          title: title,
          date: dateIso || new Date().toISOString(),
          superNews: isSuperNews,
          image: image,
          detailImage: detailImage,
          categories: categories.length ? categories : ['Latinoamérica'],
          tags: tags.length ? tags : ['Actualidad'],
          url: canonicalUrl,
          snippet: snippet || 'Consulta la noticia completa en ITNEWS.LAT',
          body: description
        };

        const existingKey = existingKeyMap.has(slug) ? slug : (existingKeyMap.has(normUrlNoProto) ? normUrlNoProto : null);

        if (existingKey !== null) {
          // Actualizar artículo existente si trae contenido fresco sin sobreescribir datos ricos existentes
          const existingIndex = existingKeyMap.get(existingKey);
          if (allPosts[existingIndex]) {
            allPosts[existingIndex].title = postObject.title;
            if (postObject.body && (!allPosts[existingIndex].body || allPosts[existingIndex].body.length < postObject.body.length)) {
              allPosts[existingIndex].body = postObject.body;
            }
            if (postObject.snippet) allPosts[existingIndex].snippet = postObject.snippet;
            if (postObject.image && !postObject.image.includes('itnewslat-p.jpg') && (!allPosts[existingIndex].image || allPosts[existingIndex].image.includes('itnewslat-p.jpg'))) {
              allPosts[existingIndex].image = postObject.image;
            }
            if (postObject.superNews !== undefined) {
              allPosts[existingIndex].superNews = postObject.superNews;
            }
            if (postObject.detailImage && !postObject.detailImage.includes('itnewslat-g.jpg') && (!allPosts[existingIndex].detailImage || allPosts[existingIndex].detailImage.includes('itnewslat-g.jpg'))) {
              allPosts[existingIndex].detailImage = postObject.detailImage;
            }
            // Preservar categorías existentes si ya tiene países definidos
            if (categories.length > 0 && (!allPosts[existingIndex].categories || allPosts[existingIndex].categories.length === 0 || allPosts[existingIndex].categories.includes('Latinoamérica'))) {
              allPosts[existingIndex].categories = categories;
            }
          }
        } else {
          // Es un artículo nuevo recién agregado a feed.xml: colocar en lista a agregar
          newItemsList.push(postObject);
          existingKeyMap.set(slug, -1);
          existingKeyMap.set(normUrlNoProto, -1);
          addedCount++;
        }
      });

      if (newItemsList.length > 0) {
        allPosts.unshift(...newItemsList);
      }
    } catch (err) {
      console.warn('Error procesando XML de feed:', err);
    }

    return addedCount;
  }

  // Merge complementario de search.json (solo enriquece o añade si no existe)
  function mergeLiveSearchPosts(livePosts) {
    if (!Array.isArray(livePosts) || livePosts.length === 0) return;
    
    // Mapeo completo de keys existentes para evitar duplicados vacíos
    const existingKeyMap = new Map();
    allPosts.forEach((p, idx) => {
      const key = getPostSlugKey(p);
      if (key && !existingKeyMap.has(key)) existingKeyMap.set(key, idx);
      if (p.url) {
        const norm = p.url.toLowerCase().replace(/^https?:\/\//, '').replace(/\.html$/, '');
        if (!existingKeyMap.has(norm)) existingKeyMap.set(norm, idx);
      }
    });

    livePosts.forEach(lp => {
      let url = lp.url || '';
      if (url && !url.startsWith('http')) {
        url = `https://itnews.lat${url.startsWith('/') ? '' : '/'}${url}`;
      }
      const slug = url.split('/').pop().replace('.html', '').toLowerCase();
      const normUrl = url.toLowerCase().replace(/^https?:\/\//, '').replace(/\.html$/, '');
      
      // Procesar categorías de search.json (array o string)
      let parsedCategories = [];
      if (Array.isArray(lp.categories) && lp.categories.length > 0) {
        parsedCategories = lp.categories;
      } else if (lp.category && typeof lp.category === 'string' && lp.category.trim()) {
        parsedCategories = [lp.category.trim()];
      }

      const matchIdx = existingKeyMap.has(slug) ? existingKeyMap.get(slug) : (existingKeyMap.has(normUrl) ? existingKeyMap.get(normUrl) : null);

      if (matchIdx !== null && allPosts[matchIdx]) {
        const found = allPosts[matchIdx];
        if (lp.superNews !== undefined) {
          found.superNews = Boolean(lp.superNews);
        }
        if (parsedCategories.length > 0 && (!found.categories || found.categories.length === 0 || found.categories.includes('Latinoamérica'))) {
          found.categories = parsedCategories;
        }
        if (lp.image && (!found.image || found.image.includes('itnewslat-p.jpg'))) {
          found.image = lp.image;
        }
        if (lp.detailImage && (!found.detailImage || found.detailImage.includes('itnewslat-g.jpg'))) {
          found.detailImage = lp.detailImage;
        }
      } else if (slug) {
        // Solo agregar si realmente no existía en allPosts
        allPosts.unshift({
          id: slug,
          title: lp.title || 'Publicación reciente',
          date: lp.date || new Date().toISOString(),
          superNews: Boolean(lp.superNews),
          image: lp.image || 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/itnewslat-p.jpg',
          detailImage: lp.detailImage || lp.image || 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/itnewslat-g.jpg',
          categories: parsedCategories.length ? parsedCategories : ['Latinoamérica'],
          tags: lp.tags ? (Array.isArray(lp.tags) ? lp.tags : lp.tags.split(',').map(t => t.trim())) : ['Actualidad'],
          url: url,
          snippet: 'Consulta el artículo completo en el portal oficial de ITNEWS.LAT.',
          body: ''
        });
        existingKeyMap.set(slug, 0);
        existingKeyMap.set(normUrl, 0);
      }
    });
  }

  // Filter & Sort Engine
  function applyFiltersAndSort() {
    // Deduplicación estricta en allPosts antes de filtrar
    const seenPostKeys = new Set();
    allPosts = allPosts.filter(p => {
      const key = getPostSlugKey(p);
      if (!key) return true;
      if (seenPostKeys.has(key)) return false;
      seenPostKeys.add(key);
      return true;
    });

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

  function renderPostCard(post) {
    const flagText = getDisplayCountryBadge(post);
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
  }

  function renderSpecialReportCard(post) {
    const flagText = getDisplayCountryBadge(post);
    // Prefer higher resolution image for the special report
    const displayImage = post.detailImage || post.image || 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/itnewslat-g.jpg';
    const tagsList = post.tags || ['Actualidad'];

    return `
      <article class="news-card special-report-card" data-id="${post.id}">
        <div class="special-card-media">
          <img src="${displayImage}" alt="${escapeHtml(post.title)}" loading="lazy" onerror="this.src='https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/itnewslat-p.jpg'">
          <span class="card-country-badge">${escapeHtml(flagText)}</span>
          <span class="special-highlight-badge"><i class="ri-star-fill"></i> Reportaje Especial</span>
        </div>
        <div class="special-card-content">
          <div class="special-card-topbar">
            <div class="card-tags">
              ${tagsList.slice(0, 3).map(t => `<span class="tag-badge">#${escapeHtml(t)}</span>`).join('')}
            </div>
            <span class="special-card-eyebrow">COBERTURA EXCLUSIVA</span>
          </div>
          <h2 class="special-card-title">${escapeHtml(post.title)}</h2>
          <p class="special-card-snippet">${escapeHtml(post.snippet)}</p>
          <div class="special-card-footer">
            <span class="card-date"><i class="ri-time-line"></i> ${formatDate(post.date)}</span>
            <span class="special-read-btn">
              <span>Leer reportaje completo</span>
              <i class="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>
      </article>
    `;
  }

  // Patrocinadores B2B de Venezuela y Regionales
  const SPONSOR_BANNERS = [
    {
      title: 'Digitel - SimplePlus y Soluciones Conectividad',
      tag: 'Conectividad & Móvil',
      badge: 'Patrocinante',
      image: 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/300x300/DG_TIENDA_MEDIOS_ITNEWS.gif',
      url: 'https://tienda.digitel.com.ve/?utm_source=WebAds&utm_medium=noticias&utm_campaign=digitel-simpleplus',
      cta: 'Conocer más'
    },
    {
      title: 'Daycohost - Centro Tecnológico & Cloud B2B',
      tag: 'Cloud & Data Center',
      badge: 'Aliado Estratégico',
      image: 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/300x300/Banner Daycohost.jpg',
      url: 'https://daycohost.com/',
      cta: 'Ver soluciones'
    },
    {
      title: 'ESET Security Report 2024 - Ciberseguridad',
      tag: 'Ciberseguridad',
      badge: 'Informe Exclusivo',
      image: 'https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/ITNEWS_Banner_ESR.png',
      url: 'https://www.eset.com/latam/security-report/?utm_campaign=leads&utm_source=html&utm_medium=email&utm_term=esr-2023',
      cta: 'Descargar reporte'
    },
    {
      title: 'WOW Telecom - Red de Fibra Óptica Empresarial',
      tag: 'Telecomunicaciones',
      badge: 'Patrocinante',
      image: 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/300x300/gif-zonas-wow.gif',
      url: 'https://wow.com.ve/unete',
      cta: 'Únete a WOW'
    },
    {
      title: 'Business Wire - Distribución de Noticias Globales',
      tag: 'Comunicaciones B2B',
      badge: 'Alianza de Medios',
      image: 'https://raw.githubusercontent.com/itnewslat/assets/master/img/300x300/BW.jpg',
      url: 'https://itnews.lat/businesswire.html',
      cta: 'Conocer alianza'
    }
  ];

  function renderSponsorCard(sponsor) {
    return `
      <article class="news-card sponsor-card">
        <a href="${escapeHtml(sponsor.url)}" target="_blank" rel="noopener noreferrer" class="sponsor-card-link" title="${escapeHtml(sponsor.title)}">
          <div class="card-media sponsor-card-media">
            <img src="${sponsor.image}" alt="${escapeHtml(sponsor.title)}" loading="lazy" />
            <span class="sponsor-pill-badge"><i class="ri-shield-star-line"></i> ${escapeHtml(sponsor.badge)}</span>
          </div>
          <div class="card-content sponsor-card-content">
            <div class="card-tags">
              <span class="tag-badge sponsor-tag">#${escapeHtml(sponsor.tag)}</span>
            </div>
            <h3 class="card-title sponsor-title">${escapeHtml(sponsor.title)}</h3>
            <div class="sponsor-cta-bar">
              <span>${escapeHtml(sponsor.cta)}</span>
              <i class="ri-arrow-right-up-line"></i>
            </div>
          </div>
        </a>
      </article>
    `;
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

    // Identificar articulos identificados como superNews: true
    const superNewsList = filteredPosts.filter(p => Boolean(p.superNews));
    const regularPosts = filteredPosts.filter(p => !p.superNews);

    let renderedHtml = '';

    // SECCIÓN REPORTAJE ESPECIAL: antes de la sección LO ÚLTIMO
    if (superNewsList.length > 0) {
      renderedHtml += `
        <div class="feed-section-divider special-section-divider">
          <span class="feed-section-title special-section-title">
            <i class="ri-star-smile-fill"></i> REPORTAJE ESPECIAL
          </span>
          <span class="feed-section-badge special-section-badge">Destacado</span>
        </div>
      `;
      // Renderizar el/los artículos con superNews: true
      superNewsList.slice(0, 2).forEach(post => {
        renderedHtml += renderSpecialReportCard(post);
      });
    }

    // Artículos regulares para paginar
    const toShow = regularPosts.slice(0, displayedCount);

    // Determinar si aplica separador "Lo último" (cuando se ordena por más recientes)
    if (sortBy === 'newest') {
      const firstPostDate = toShow[0] && toShow[0].date ? toShow[0].date.substring(0, 10) : '';
      let hasRenderedLatestHeader = false;
      let hasRenderedPreviousHeader = false;

      toShow.forEach((post, index) => {
        const postDateOnly = post.date ? post.date.substring(0, 10) : '';
        const isLatestDay = Boolean(firstPostDate && postDateOnly === firstPostDate);

        if (isLatestDay && !hasRenderedLatestHeader) {
          renderedHtml += `
            <div class="feed-section-divider">
              <span class="feed-section-title"><i class="ri-flashlight-fill"></i> Lo último</span>
              <span class="feed-section-badge">Noticias de hoy</span>
            </div>
          `;
          hasRenderedLatestHeader = true;
        } else if (!isLatestDay && !hasRenderedPreviousHeader) {
          renderedHtml += `
            <div class="feed-section-divider">
              <span class="feed-section-title"><i class="ri-history-line"></i> Anteriores</span>
              <span class="feed-section-badge secondary">Ediciones previas</span>
            </div>
          `;
          hasRenderedPreviousHeader = true;
        }

        renderedHtml += renderPostCard(post);

        // Intercalar una tarjeta de patrocinador cada 5 noticias
        if ((index + 1) % 5 === 0 && SPONSOR_BANNERS.length > 0) {
          const sponsorIndex = Math.floor((index / 5)) % SPONSOR_BANNERS.length;
          renderedHtml += renderSponsorCard(SPONSOR_BANNERS[sponsorIndex]);
        }
      });
    } else {
      toShow.forEach((post, index) => {
        renderedHtml += renderPostCard(post);
        if ((index + 1) % 5 === 0 && SPONSOR_BANNERS.length > 0) {
          const sponsorIndex = Math.floor((index / 5)) % SPONSOR_BANNERS.length;
          renderedHtml += renderSponsorCard(SPONSOR_BANNERS[sponsorIndex]);
        }
      });
    }

    newsGrid.innerHTML = renderedHtml;

    // Pagination Button
    if (displayedCount < regularPosts.length) {
      paginationWrapper.style.display = 'flex';
    } else {
      paginationWrapper.style.display = 'none';
    }

    // Attach Click Events to Cards
    newsGrid.querySelectorAll('.news-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const post = allPosts.find(p => p.id === id || getPostSlugKey(p) === id);
        if (post) openReader(post);
      });
    });
  }

  // Open In-App Reader Modal
  async function openReader(post) {
    readerTitle.textContent = post.title;
    readerDate.textContent = formatDate(post.date);

    // Categories (Countries)
    if (post.categories && post.categories.length) {
      if (currentCountry && currentCountry !== 'all') {
        // Highlight active filter country
        const activeMatch = post.categories.find(c => 
          c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === 
          currentCountry.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        );
        if (activeMatch) {
          const isRegional = post.categories.length >= 5;
          readerCategories.innerHTML = `
            <span class="reader-country-tag active-filter">${escapeHtml(COUNTRY_FLAGS[activeMatch] || activeMatch)}</span>
            ${isRegional ? `<span class="reader-country-tag secondary">🌎 Cobertura Regional (Latinoamérica)</span>` : ''}
          `;
        } else {
          readerCategories.innerHTML = post.categories.map(c => 
            `<span class="reader-country-tag">${escapeHtml(COUNTRY_FLAGS[c] || c)}</span>`
          ).join('');
        }
      } else if (post.categories.length >= 5) {
        readerCategories.innerHTML = `
          <span class="reader-country-tag">🌎 Latinoamérica (Regional)</span>
          <span class="reader-country-tag secondary">${post.categories.length} países</span>
        `;
      } else {
        readerCategories.innerHTML = post.categories.map(c => 
          `<span class="reader-country-tag">${escapeHtml(COUNTRY_FLAGS[c] || c)}</span>`
        ).join('');
      }
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
      readerImage.alt = post.title || 'ITNEWS LAT';
      readerImage.onerror = function() {
        if (post.image && this.src !== post.image) {
          this.src = post.image;
        } else {
          this.src = 'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/itnewslat-g.jpg';
        }
      };
      readerImage.parentElement.style.display = 'block';
    } else {
      readerImage.parentElement.style.display = 'none';
    }

    // External Link
    readerExternalLink.href = post.url;
    readerFooterAction.href = post.url;

    // Content Parsing (Markdown to HTML)
    readerContent.innerHTML = formatMarkdownBody(post.body || post.snippet);

    // Guardar referencia del post actual para compartir
    currentOpenPost = post;

    // Actualización dinámica de SEO para la lectura del artículo
    document.title = `${post.title} | ITNEWS LAT`;

    readerModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Respaldo de seguridad: si el post no tiene cuerpo completo o es solo el snippet, intentar recuperar en vivo
    if ((!post.body || post.body.length < 100) && post.url) {
      try {
        const articleRes = await fetch(post.url);
        if (articleRes.ok) {
          const htmlText = await articleRes.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlText, 'text/html');
          const contentEl = doc.querySelector('.blog-content') || doc.querySelector('.media-body');
          if (contentEl) {
            const mediaImg = contentEl.querySelector('.blog-media');
            if (mediaImg) mediaImg.remove();
            const fullHtml = contentEl.innerHTML;
            if (fullHtml && fullHtml.trim().length > 100) {
              post.body = fullHtml;
              if (currentOpenPost === post) {
                readerContent.innerHTML = formatMarkdownBody(fullHtml);
              }
            }
          }
        }
      } catch (err) {
        console.debug('Nota sin contenido local adicional:', err);
      }
    }
  }

  function closeReader() {
    readerModal.classList.remove('active');
    document.body.style.overflow = '';
    // Restaurar título SEO principal de la app
    document.title = 'ITNEWS App | Noticias Tecnológicas B2B, Ciberseguridad y Telecomunicaciones en Latinoamérica';
  }

  // Social Sharing Helpers
  function getShareData() {
    if (!currentOpenPost) return null;
    const title = currentOpenPost.title || 'ITNEWS LAT';
    // Resolver URL completa
    let url = currentOpenPost.url || window.location.href;
    if (url.startsWith('/')) {
      url = 'https://itnews.lat' + url;
    } else if (!url.startsWith('http')) {
      url = window.location.origin + '/' + url;
    }
    const text = `${title} - ITNEWS LAT`;
    return { title, url, text };
  }

  function showShareToast(message) {
    if (!shareToast) return;
    shareToast.textContent = message;
    shareToast.style.display = 'block';
    setTimeout(() => {
      shareToast.style.display = 'none';
    }, 2800);
  }

  if (shareWhatsappBtn) {
    shareWhatsappBtn.addEventListener('click', () => {
      const data = getShareData();
      if (!data) return;
      const shareText = encodeURIComponent(`${data.title}\n${data.url}`);
      window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank', 'noopener,noreferrer');
    });
  }

  if (shareLinkedinBtn) {
    shareLinkedinBtn.addEventListener('click', () => {
      const data = getShareData();
      if (!data) return;
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}`, '_blank', 'noopener,noreferrer');
    });
  }

  if (shareXBtn) {
    shareXBtn.addEventListener('click', () => {
      const data = getShareData();
      if (!data) return;
      const text = encodeURIComponent(data.title);
      const url = encodeURIComponent(data.url);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&via=ITNEWSLAT`, '_blank', 'noopener,noreferrer');
    });
  }

  if (shareFacebookBtn) {
    shareFacebookBtn.addEventListener('click', () => {
      const data = getShareData();
      if (!data) return;
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`, '_blank', 'noopener,noreferrer');
    });
  }

  if (shareInstagramBtn) {
    shareInstagramBtn.addEventListener('click', async () => {
      const data = getShareData();
      if (!data) return;
      // Instagram no soporta URL sharing directa en web, copiamos enlace y damos feedback
      try {
        await navigator.clipboard.writeText(data.url);
        showShareToast('¡Enlace copiado! Pégalo en tu historia o mensaje de Instagram 📸');
      } catch (e) {
        showShareToast('Copia este enlace: ' + data.url);
      }
    });
  }

  if (shareEmailBtn) {
    shareEmailBtn.addEventListener('click', () => {
      const data = getShareData();
      if (!data) return;
      const subject = encodeURIComponent(`Noticia: ${data.title}`);
      const body = encodeURIComponent(`Te comparto esta noticia de ITNEWS LAT:\n\n${data.title}\n\nLéela completa aquí: ${data.url}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });
  }

  if (shareCopyBtn) {
    shareCopyBtn.addEventListener('click', async () => {
      const data = getShareData();
      if (!data) return;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(data.url);
        } else {
          const tempInput = document.createElement('input');
          tempInput.value = data.url;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showShareToast('¡Enlace copiado al portapapeles! 📋');
      } catch (err) {
        showShareToast('Enlace: ' + data.url);
      }
    });
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

  if (countrySelect) {
    countrySelect.addEventListener('change', (e) => {
      currentCountry = e.target.value;
      applyFiltersAndSort();
    });
  }

  if (tagSelect) {
    tagSelect.addEventListener('change', (e) => {
      currentTag = e.target.value;
      applyFiltersAndSort();
    });
  }

  if (headerSubscribeBtn) {
    headerSubscribeBtn.addEventListener('click', () => {
      const targetSection = document.getElementById('newsletterSubscriptionSection');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const firstInput = targetSection.querySelector('input');
        if (firstInput) setTimeout(() => firstInput.focus(), 600);
      }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      applyFiltersAndSort();
    });
  }

  if (refreshFeedBtn) {
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
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentCountry = 'all';
      currentTag = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';

      if (countrySelect) countrySelect.value = 'all';
      if (tagSelect) tagSelect.value = 'all';

      applyFiltersAndSort();
    });
  }

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
    // Strip footer widgets and metrics
    let clean = text
      .replace(/<table[\s\S]*?<\/table>/gi, '')
      .replace(/<img[^>]*metricool[^>]*>/gi, '')
      .replace(/<img[^>]*c3po\.jpg[^>]*>/gi, '')
      .replace(/!\[.*?\]\((.*?)\)/g, ''); // We feature the detail image at the top

    // Si el contenido ya contiene etiquetas HTML de párrafos generadas por Jekyll en el RSS:
    if (/<p[\s\S]*?>/i.test(clean) || /<div[\s\S]*?>/i.test(clean)) {
      return clean;
    }

    // Si viene en Markdown crudo:
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
      if (b.startsWith('<h3>') || b.startsWith('<blockquote>') || b.startsWith('<li>') || b.startsWith('<p>')) {
        if (b.startsWith('<li>')) return `<ul>${b}</ul>`;
        return b;
      }
      return `<p>${b}</p>`;
    });

    return htmlBlocks.join('');
  }

  // Contador de visitas / aperturas de la /app
  async function trackAppVisits() {
    if (!visitCountEl) return;
    const STORAGE_KEY = 'itnews_app_visit_count';
    let currentStored = parseInt(localStorage.getItem(STORAGE_KEY), 10) || 128;

    // Actualizar inmediatamente en UI con valor en caché o base
    visitCountEl.textContent = currentStored.toLocaleString('es-ES');

    // Registrar incremento con debounce por sesión (una vez por sesión de navegador)
    const sessionKey = 'itnews_session_counted_' + new Date().toISOString().slice(0, 10);
    const hasCountedToday = sessionStorage.getItem(sessionKey);

    try {
      // Incrementar contador local
      if (!hasCountedToday) {
        currentStored += 1;
        localStorage.setItem(STORAGE_KEY, currentStored);
        sessionStorage.setItem(sessionKey, '1');
      }
      visitCountEl.textContent = currentStored.toLocaleString('es-ES');

      // Intentar sincronizar con servicio persistente si está disponible
      try {
        const res = await fetch('https://counterapi.com/api/itnewslat/app/visits', { method: 'GET', cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.value) {
            const apiCount = Number(data.value);
            // Conservar el mayor entre base y api
            const finalVal = Math.max(apiCount, currentStored);
            visitCountEl.textContent = finalVal.toLocaleString('es-ES');
            localStorage.setItem(STORAGE_KEY, finalVal);
          }
        }
      } catch (netErr) {
        // Fallback robusto sobre localStorage
      }
    } catch (e) {
      console.warn('Contador de visitas:', e);
    }
  }

  // Inicialización GEO inteligente por zona horaria del visitante (sin bloquear experiencia)
  function initGeoLocation() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      let detectedCountry = null;

      if (tz.includes('Caracas')) detectedCountry = 'Venezuela';
      else if (tz.includes('Bogota')) detectedCountry = 'Colombia';
      else if (tz.includes('Mexico_City') || tz.includes('Cancun') || tz.includes('Monterrey') || tz.includes('Tijuana')) detectedCountry = 'México';
      else if (tz.includes('Panama')) detectedCountry = 'Panamá';
      else if (tz.includes('Santiago')) detectedCountry = 'Chile';
      else if (tz.includes('Buenos_Aires') || tz.includes('Cordoba') || tz.includes('Rosario')) detectedCountry = 'Argentina';
      else if (tz.includes('Guayaquil')) detectedCountry = 'Ecuador';
      else if (tz.includes('Lima')) detectedCountry = 'Perú';

      // Si el visitante proviene de un país cubierto y no tiene filtro manual fijado
      if (detectedCountry && !sessionStorage.getItem('itnews_geo_hint_shown')) {
        sessionStorage.setItem('itnews_geo_hint_shown', 'true');
        if (countrySelect) {
          const option = countrySelect.querySelector(`option[value="${detectedCountry}"]`);
          if (option) {
            countrySelect.title = `Detectamos tu región: ${detectedCountry}`;
          }
        }
      }
    } catch (e) {
      // Silencioso
    }
  }

  // Manejo de suscripción al Boletín de Noticias (envío a edgar@itnews.lat)
  function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const feedback = document.getElementById('newsletterFeedback');
    const submitBtn = document.getElementById('btnNewsletterSubmit');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nombre = (document.getElementById('subNombre')?.value || '').trim();
      const apellido = (document.getElementById('subApellido')?.value || '').trim();
      const empresa = (document.getElementById('subEmpresa')?.value || '').trim();
      const email = (document.getElementById('subEmail')?.value || '').trim();

      if (!nombre || !apellido || !empresa || !email) {
        showNewsletterFeedback('Por favor completa todos los campos requeridos.', 'error');
        return;
      }

      // Deshabilitar botón durante el proceso
      submitBtn.disabled = true;
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> <span>Enviando suscripción...</span>';

      const emailSubject = `Nueva suscripción al Boletín ITNEWS.LAT: ${nombre} ${apellido} (${empresa})`;
      const emailBodyText = `Nueva solicitud de suscripción al Boletín de Noticias de ITNEWS.LAT:

- Nombre: ${nombre}
- Apellido: ${apellido}
- Empresa: ${empresa}
- Correo Electrónico: ${email}
- Fecha y Hora: ${new Date().toLocaleString('es-LA', { dateStyle: 'full', timeStyle: 'medium' })}
- Origen: ITNEWS Web App (https://itnews.lat/app/)`;

      let sentSuccess = false;

      // 1. Intento de envío directo a través de FormSubmit API sin redirección
      try {
        const response = await fetch('https://formsubmit.co/ajax/edgar@itnews.lat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: emailSubject,
            _template: 'table',
            _captcha: 'false',
            Nombre: nombre,
            Apellido: apellido,
            Empresa: empresa,
            Email: email,
            Fecha: new Date().toISOString(),
            Mensaje: emailBodyText
          })
        });

        if (response.ok) {
          sentSuccess = true;
        }
      } catch (err) {
        console.warn('FormSubmit no disponible, usando fallback:', err);
      }

      // Si por alguna razón el endpoint fue bloqueado por adblocker/CORS, abrir fallback mailto
      if (!sentSuccess) {
        const mailtoUri = `mailto:edgar@itnews.lat?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyText)}`;
        window.location.href = mailtoUri;
        sentSuccess = true;
      }

      // Mensaje de éxito amigable
      showNewsletterFeedback(`¡Gracias por suscribirte, ${nombre}! Hemos registrado tus datos (${email}) para el boletín de ITNEWS.LAT.`, 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    });

    function showNewsletterFeedback(msg, type) {
      if (!feedback) return;
      feedback.textContent = msg;
      feedback.className = `newsletter-feedback ${type}`;
      feedback.style.display = 'block';
      setTimeout(() => {
        if (type === 'success') {
          feedback.style.display = 'none';
        }
      }, 7000);
    }
  }

  // Initial Execution
  loadData();
  trackAppVisits();
  initGeoLocation();
  initNewsletterForm();

  // Sincronización automática periódica (cada 60 segundos) para detectar cambios en feed.xml
  const SYNC_INTERVAL = 60 * 1000;
  setInterval(() => {
    loadData(true);
  }, SYNC_INTERVAL);

  // Sincronización inmediata cada vez que el usuario vuelve o enfoca la pestaña del navegador
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      loadData(true);
    }
  });

  window.addEventListener('focus', () => {
    loadData(true);
  });
})();
