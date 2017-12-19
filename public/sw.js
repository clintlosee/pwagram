self.addEventListener('install', function(e) {
    console.log('[Service Worker] Installing Service Worker ...', e);
});

self.addEventListener('activate', function(e) {
    console.log('[Service Worker] Activating Service Worker ...', e);
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(fetch(e.request));
});
