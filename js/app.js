if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
}
/*
if (window.caches) {
    console.log("Si aguanta tu navegador");
    caches.open('cache-v1');
    caches.open('cache-v2');
    caches.keys().then(
        (keys) => {
            console.log("Prueba");
        }
    )
    //IDENTIFICA Y TE LO DEVUELVE
    caches.match('cache-v1').then((resp) => {
        console.log("si existe");
    });
    //Podemos usarlo para ver si existe ese cache te da un true o un false
    caches.has('cache-v4').then((resp) => {
        console.log(resp);
    });
    caches.open('cache').then((cache) => {
        cache.add('css/style.css');
        //Podemos agregar todos los recursos ademas es una promesa
        cache.addAll(
            [
                '/home.html',
                '/images/halo.jpg',
                'css/style.css',
            ]
        ).then(() => {
            cache.delete('/images/halo.jpg')
        })
        cache.match('/home.html').then((resp) => {
            resp.text().then((text) => {
                console.log('match',text);
            })
        })
    });

}*/