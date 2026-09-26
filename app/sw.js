// Service Worker ligero para ITNEWS Express PWA
const CACHE_NAME = 'itnews-pwa-v3';
const STATIC_ASSETS = [
  '/app/',
  '/app/index.html',
  '/app/styles.css',
  '/app/app.js',
  '/app/manifest.json',
  'https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/mosca-g.jpg',
  'https://itnews.lat/assets/imagenes/logo_large_red.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA cache prefetch aviso:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia Network First con fallback a Cache para datos dinámicos
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Para navegación y assets de la app
  event.respondWith(
    fetch(req)
      .then((networkRes) => {
        // Almacenar copia en caché si es recurso válido
        if (networkRes && networkRes.status === 200 && req.url.startsWith('http')) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return networkRes;
      })
      .catch(() => {
        return caches.match(req).then((cachedRes) => {
          if (cachedRes) return cachedRes;
          if (req.mode === 'navigate') {
            return caches.match('/app/index.html');
          }
        });
      })
  );
});
