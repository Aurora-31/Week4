var cacheName = 'petstore-v1';
var cacheFiles = [
    'petDepot.html',
    'product.js',
    'petstore.webmanifest',
    'Images'
]

// on the current window, install on the event listener
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    // wait until below part is done
    e.waitUntil(
        // open cacheName and then (promise) in the cache return all cacheFiles
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles)
        })
    )
}) 