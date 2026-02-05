const CACHE_NAME = 'pos-system-v1';
const ASSETS = [
  './',
  './index.html',
  './register.html',
  './dashboard.html',
  './firebase.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js',
  'https://js.stripe.com/v3/'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event (Cache First, Network Fallback)
self.addEventListener('fetch', (e) => {
  // Ignore Firestore/Firebase requests (let the SDK handle those)
  if (e.request.url.includes('firestore.googleapis.com') || 
      e.request.url.includes('firebase')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
