importScripts('workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'My-awesome-cache',
    precache: 'precache',
    runtime: 'runtime',
});
  
// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);

// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. music
workbox.routing.registerRoute(
  new RegExp('\.(mp3)$'),
  workbox.strategies.cacheFirst({
      cacheName: 'My-awesome-cache-music',
      plugins: [
          new workbox.expiration.Plugin({
              maxAgeSeconds: 60 * 60 * 24 * 7,
              maxEntries: 50,
              purgeOnQuotaError: true
          })
      ]
  })
);
  
// 4. font
workbox.routing.registerRoute(
    new RegExp('\.(woff|woff2|ttf|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-font',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
  );

workbox.precaching.precacheAndRoute([]);