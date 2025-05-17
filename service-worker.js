self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-pwa-cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/images/android-launchericon-48-48.png',
          '/images/android-launchericon-72-72.png',
          '/images/android-launchericon-96-96.png',
          '/images/android-launchericon-144-144.png',
          '/images/android-launchericon-192-192.png',
          '/images/android-launchericon-512-512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });