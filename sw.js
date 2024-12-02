const CACHE_NAME = 'stella-arinmis-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/plak.png',
    '/muzik_kutusu.mp3',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
