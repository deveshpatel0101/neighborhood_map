self.addEventListener('install', function(event) {
    console.log('Service worker installed');
    event.waitUntil(
        caches.open('nhbrhd_map').then(function(cache) {
            //pre-caching few required files
            cache.addAll(['/',
                '/index.html',
                '/css/styles.css',
                '/static/js/bundle.js'
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service worker activated', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            } else {
                //caching dynamically as user visits pages for future offline use.
                return fetch(event.request).then(function(res) {
                    return caches.open('nhbrhd_map').then(function(cache) {
                        cache.put(event.request.url, res.clone());
                        return res;
                    });
                });
            }
        })
    );
});