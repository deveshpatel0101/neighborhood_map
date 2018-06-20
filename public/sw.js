const cacheVersion = 'nhbrhd_map_v2'
//cache all static files during sw installation.
self.addEventListener('install', function(event) {
    console.log('Service worker installed');
    event.waitUntil(
        caches.open(cacheVersion).then(function(cache) {
            //pre-caching few required files
            cache.addAll(['/',
                '/index.html',
                '/css/styles.css',
                '/static/js/bundle.js'
            ]);
        })
    );
});

//deleting previous versions of cache from storage during activation of sw.
self.addEventListener('activate', function(event) {
    console.log('Service worker activated', event);
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys.map(function(key) {
                if(key !== cacheVersion) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

//dynamic caching of files during fetch.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            } else {
                //caching dynamically as user visits pages for future offline use.
                return fetch(event.request).then(function(res) {
                    return caches.open(cacheVersion).then(function(cache) {
                        cache.put(event.request.url, res.clone());
                        return res;
                    });
                });
            }
        })
    );
});