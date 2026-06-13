const CACHE = "vocab-v1";
const FILES = [
  "/english-vocab/",
  "/english-vocab/index.html",
  "/english-vocab/manifest.json",
  "/english-vocab/icon-192.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
