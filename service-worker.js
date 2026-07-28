const CACHE_NAME = 'academic-encyclopedia-v2';

// Assets to precache immediately on install
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/js/my_data.js',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Readex+Pro:wght@300;400;500;600;700&family=Tajawal:wght@400;500;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Precaching core assets');
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => {
          console.log('[ServiceWorker] Deleting old cache:', name);
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Stale-While-Revalidate Strategy for dynamic routes, images, posts, and books
  if (
    url.pathname.startsWith('/posts/') || 
    url.pathname.startsWith('/books/') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('unsplash.com') ||
    url.hostname.includes('ui-avatars.com')
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cachedResponse = await cache.match(event.request);
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Cache the fresh response dynamically
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        }).catch(err => {
          console.warn('[ServiceWorker] Network fetch failed, using cached fallback for:', url.pathname);
          return cachedResponse;
        });
        
        return cachedResponse || fetchPromise;
      })
    );
  } else {
    // Cache-First strategy for everything else
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(networkResponse => {
          if (event.request.method === 'GET' && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse.clone();
        }).catch(() => {
          console.warn('[ServiceWorker] Request failed and not in cache:', url.pathname);
        });
      })
    );
  }
});
