'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/user2.png": "59661c958f314341da63325202c39a4f",
"/assets/assets/images/post0.jpg": "fde62c16c21a6db9d20c116703c9c17c",
"/assets/assets/images/user4.png": "c493c679eb7382e54160c84e6f90b7d0",
"/assets/assets/images/user1.png": "5567488fefc04bd4510a61da0cf3753a",
"/assets/assets/images/post1.jpg": "91e1ed08ebdfd131d3fd7023bcdf3f28",
"/assets/assets/images/user3.png": "d691ddef6e2fc876b19c284da0b502fd",
"/assets/assets/images/user0.png": "c10bb680826cc20c82140915a33521a7",
"/assets/assets/fonts/Billabong.ttf": "52b04f1c2bd73f240b4ad620924a40c9",
"/assets/FontManifest.json": "a6a7485e0d125a3132d69ad667cb05ec",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "240ef5499c0cb7c307a791f185dba50d",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "e1c80ff600d6d73c59977b223915bafd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
