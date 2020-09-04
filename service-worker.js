importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

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
  
workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.png",
    "revision": "70548e214a42f1b54221ed2c1f757e42"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "32418e55eeab53d89f451189032196e5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "0a74124a45f0419e4bfcf4b1e409132f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "bcaf41e37ba54a3f6f887da33e29c425"
  },
  {
    "url": "images/icons/icon-168x168.png",
    "revision": "604edc7754c3db4d2e20ce7fe517ae0e"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d3ed840ac444493f7978bcdceb2f87bf"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "93012638cf3a7f142d6ac32046b9026e"
  },
  {
    "url": "images/icons/icon-48x48.png",
    "revision": "df7323759ba57b1cd54245e7956a2fc6"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "17ce26f01364a397e7f935733eb8275c"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0db7a34fb4e410a34d29d85a06478f7e"
  },
  {
    "url": "images/no-image-icon.png",
    "revision": "f98b32ceb4e65ec11ae685fc4b6d5a15"
  },
  {
    "url": "img/123 Don't Cry  - Pipo.png",
    "revision": "f766002fe011ad0f8bd854bf19272335"
  },
  {
    "url": "img/Bun Phum - Khmeng Khmer.png",
    "revision": "7360704565043b0f7e517917027cd574"
  },
  {
    "url": "img/kado kmean ney.png",
    "revision": "b5f3e57087a2b8b1069b6c4ef8120689"
  },
  {
    "url": "img/Khos Chum Nann - Tena.png",
    "revision": "a4948ccfcfc0503f872ec6586aff78a8"
  },
  {
    "url": "img/Kong SaKur - Tena.png",
    "revision": "975b5384ed82cf7e0aea980fb055623d"
  },
  {
    "url": "img/Kromom 3 - Vuthea ft MC JR.png",
    "revision": "ed65d5c5892d14d362ade11a8375a3ad"
  },
  {
    "url": "img/mean nek thea re nov.png",
    "revision": "0588e694f68a733828ef2a719e9ee8d5"
  },
  {
    "url": "img/mek kom pong pleang huey - Hak Record.png",
    "revision": "917243879afbb571c5b46731d9c21757"
  },
  {
    "url": "img/Min srolanh oun min ban - Chan samai.png",
    "revision": "27dfe631dc0267419a1a3ef9fea1b4c5"
  },
  {
    "url": "img/Nek oun ban trem sromai - Soria Oung.png",
    "revision": "db88406e19e72e7b2adf0d607aade269"
  },
  {
    "url": "img/Pel velea min sak som- Nam bunnarath.png",
    "revision": "0e7756914cf4ddbafa7d25edfa5562b1"
  },
  {
    "url": "img/Songsa leng leng- Nob panharith.png",
    "revision": "0e4b3c5bc05da85afc108bb5eb3474c3"
  },
  {
    "url": "img/Su Kleat - Vong DaraRotana.png",
    "revision": "86dc6066261561f75e8b6efaaa232552"
  },
  {
    "url": "index.html",
    "revision": "63539d1bc5a55698f43d8e8da631c1e4"
  },
  {
    "url": "manifest.json",
    "revision": "50b98b4bd5acf1321c9f263d058f8b85"
  },
  {
    "url": "music/123 Don't Cry  - Pipo.mp3",
    "revision": "757c00d64ea55771b68b6dcddacf20e1"
  },
  {
    "url": "music/Ah Krobey - Mustache Band.mp3",
    "revision": "7cd1d2644e021f2cd0831d3c391a5fb9"
  },
  {
    "url": "music/Bros Mneak Nis Somkhan Nov Pel Na.mp3",
    "revision": "ab3f70b94d4483adc1a77a96afd750ce"
  },
  {
    "url": "music/Bun Phum - Khmeng Khmer.mp3",
    "revision": "492c3de46ff97bcd763ab8cc29a7c1ff"
  },
  {
    "url": "music/Far Away - Khmeng Khmer.mp3",
    "revision": "2dcf7c9626bf89ea8b884a12c0a2d696"
  },
  {
    "url": "music/Heartbroken - Khmeng Khmer.mp3",
    "revision": "9e113c3ee9da4b402120be637f9122ce"
  },
  {
    "url": "music/I'm Married! - Vin Vitou.mp3",
    "revision": "fc39b20e302ac76574ec9826ce6f7e4a"
  },
  {
    "url": "music/Just The Two of Us - Adda & Noly.mp3",
    "revision": "d662ca904a0a1aea833531ad0508bcf2"
  },
  {
    "url": "music/kado kmean ney.mp3",
    "revision": "3df24314cea81973437a8429f859fef7"
  },
  {
    "url": "music/Khos Chum Nann - Tena.mp3",
    "revision": "99196cfe53ff9b98f36cdf883e33f812"
  },
  {
    "url": "music/Komlos Tang 3 - Khmeng Khmer ft. PEACE CHONG.mp3",
    "revision": "7d3e627fc19305de3bde3066ae8056bf"
  },
  {
    "url": "music/Kong SaKur - Tena.mp3",
    "revision": "fb2a77a059292e9ca216647bc6d33939"
  },
  {
    "url": "music/Kromom 3 - Vuthea ft MC JR.mp3",
    "revision": "d5e2d60b036c3519b70a73fc9004ee00"
  },
  {
    "url": "music/mean nek thea re nov.mp3",
    "revision": "bc053ae01aca24c959f1e1810e2e1066"
  },
  {
    "url": "music/mek kom pong pleang huey - Hak Record.mp3",
    "revision": "2dbfbb821c0be0edbd38cf4fc567ec99"
  },
  {
    "url": "music/Min srolanh oun min ban - Chan samai.mp3",
    "revision": "454ee49cd091c868aa0286bdf21c2928"
  },
  {
    "url": "music/Nek oun ban trem sromai - Soria Oung.mp3",
    "revision": "2b59809266d46a548de844090f789364"
  },
  {
    "url": "music/Nhom Deng - Vitou ft. DJ Chee.mp3",
    "revision": "9f629248b731ee7e0cb68323ff097c09"
  },
  {
    "url": "music/Oun Kom Yum - Khmeng Khmer.mp3",
    "revision": "ce573e4f5787461965cce29f7e68be34"
  },
  {
    "url": "music/Pel velea min sak som- Nam bunnarath.mp3",
    "revision": "8ee49e08bb8ec8958c56c776a159ea39"
  },
  {
    "url": "music/PUBG Song Parody - Vitou.mp3",
    "revision": "5fad618a010eec5f9f5ca897a05b8661"
  },
  {
    "url": "music/Reezy - 019 -  KmengKhmer, PEACECHONG & DJ Chee.mp3",
    "revision": "3e88d68af7c2c74298fed46f06e64a67"
  },
  {
    "url": "music/Songsa leng leng- Nob panharith.mp3",
    "revision": "0e239f3166bf86af77ed91f0881f69b9"
  },
  {
    "url": "music/Su Kleat - Vong DaraRotana.mp3",
    "revision": "57f7752286c0b13dc2eb8a663fa0ae4b"
  },
  {
    "url": "package-lock.json",
    "revision": "03b478d2105a853d5cc3d74dc737e42e"
  },
  {
    "url": "package.json",
    "revision": "5cd712d8fb8e4e7f677759c1759c3fee"
  },
  {
    "url": "script.js",
    "revision": "4f99c0b6cf9810035d4e99f89029062d"
  },
  {
    "url": "service-worker-src.js",
    "revision": "db82d9d283a203115a82a074b5320343"
  },
  {
    "url": "style.css",
    "revision": "c870647fa178f67227c7845bf4797825"
  },
  {
    "url": "workbox-config.js",
    "revision": "2a6348b01a2cec0f860e45b24de9b27a"
  }
]);