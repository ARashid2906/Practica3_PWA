self.addEventListener('install', (event) => {
    console.log("SW si funciona ");
    const promiseCache = caches.open('cache-v1.1').then((cache) => {
        return cache.addAll(
            [
                '/',
                '/home.html',
                '/images/halo.jpg',
                'css/style.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                '/js/app.js'

            ]
        );
    })
    //espera hasta que termine
    event.waitUntil(promiseCache)
})

self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
})