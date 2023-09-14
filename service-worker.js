var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './css/styles.css',

        './js/scripts.js',

        './assets/img/icons/120.png',

        './assets/img/icons/128.png',

        './assets/img/icons/144.png',

        './assets/img/icons/152.png',

        './assets/img/icons/167.png',

        './assets/img/icons/172.png',

        './assets/img/icons/180.png',

        './assets/img/icons/196.png',

        './assets/img/icons/216.png',

        './assets/img/icons/256.png',

        './assets/img/icons/512.png',
        
        './assets/img/icons/1024.png'
        
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});