// Frontend/sw.js

const SOLUMA_ACTIVE_CACHE = 'soluma-core-cache-v1';
const APPLICATION_ASSET_MANIFEST = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/src/app.js',
    '/src/router.js',
    '/components/navbar.html',
    '/images/soluma-logo.png.jpeg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(SOLUMA_ACTIVE_CACHE).then((cache) => {
            return cache.addAll(APPLICATION_ASSET_MANIFEST);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((hit) => {
            return hit || fetch(event.request).catch(() => caches.match('/index.html'));
        })
    );
});