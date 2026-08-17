// QCShop SW release — alterar em cada publicação (obrigatório para o browser detetar o update).
const SW_RELEASE = '1.0.3';

importScripts('./app-info.js');

const CACHE_NAME = QCSHOP_APP_INFO?.swCacheName || `qcshop-v${SW_RELEASE}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './procurement-hub-v5.html',
  './manifest.json',
  './supabase.js',
  './inventory.js',
  './icon-192.png',
  './icon-512.png'
];

function isVersionSensitiveRequest(url) {
  const file = url.pathname.split('/').pop() || '';
  return file === 'service-worker.js' || file === 'app-info.js';
}

async function fetchFresh(input) {
  return fetch(input, { cache: 'no-store' });
}

async function precacheUrl(cache, url) {
  try {
    const response = await fetchFresh(url);
    if (response.ok) {
      await cache.put(url, response);
    }
  } catch (_) {
    // Offline durante install — o activate limpa caches antigos na próxima visita online.
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(PRECACHE_URLS.map((url) => precacheUrl(cache, url)));
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  if (event.data?.type === 'GET_APP_INFO' && event.source) {
    event.source.postMessage({
      type: 'APP_INFO',
      version: QCSHOP_APP_INFO.version,
      appName: QCSHOP_APP_INFO.appName
    });
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isVersionSensitiveRequest(url)) {
    event.respondWith(fetchFresh(request));
    return;
  }

  event.respondWith((async () => {
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        return (await caches.match('./'))
          || (await caches.match('./index.html'))
          || (await caches.match('./procurement-hub-v5.html'));
      }
      throw error;
    }
  })());
});