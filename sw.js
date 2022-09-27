importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
if (workbox) {
    console.log("Yay! Workbox is loaded !");
    // https://stackoverflow.com/questions/60310455/workbox-5-syntax-error-uncaught-typeerror-workbox-expiration-cacheablerespons
    workbox.precaching.precacheAndRoute([  
      {url: './index.html',revision: null}
    ]);
    /*  cache images in the e.g others folder; edit to other folders you got
        and config in the sw-config.js file
    */
    workbox.routing.registerRoute(
        /(.*)others(.*)\.(?:png|svg|gif|jpg)/,
        new workbox.strategies.CacheFirst({
            cacheName: "images",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 15 * 60, // [30 Days - 30 * 24 * 60 * 60]
                })
            ]
        })
    );
    /* Make your JS and CSS âš¡ fast by returning the assets from the cache,
      while making sure they are updated in the background for the next use.
    */
    workbox.routing.registerRoute(
    // cache js, css, scc files
        /.*\.(?:css|js|scss)/,
        // use cache but update in the background ASAP - Necessary for updating JS and CSS files
        // new workbox.strategies.StaleWhileRevalidate({ 
        new workbox.strategies.CacheFirst({
            // use a custom cache name
            cacheName: "assets",
        })
    );

    workbox.routing.registerRoute(
    // cache json
        /.*\.(?:json)/,
        // Try network first else use cache
        new workbox.strategies.NetworkFirst({
            // use a custom cache name
            cacheName: "json-ui",
        })
    );

    // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
    //https://stackoverflow.com/questions/52451678/caching-google-fonts-using-workbox
    workbox.routing.registerRoute(
      /^https:\/\/fonts\.googleapis\.com/,
      new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'google-fonts-stylesheets',
      })
  );

    // Cache the underlying font files with a cache-first strategy for 1 year.
    workbox.routing.registerRoute(
      /^https:\/\/fonts\.gstatic\.com/,
      new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
              maxAgeSeconds: 60 * 60,  //1 year 60 * 60 * 24 * 365,
              maxEntries: 30,
          }),
        ],
      })
    );


// add offline analytics
    // workbox.googleAnalytics.initialize();
/* Install a new service worker and have it update
and control a web page as soon as possible
*/
workbox.core.skipWaiting();
    workbox.core.clientsClaim();
} else {
    console.log("Oops! Workbox didn't load properly");
}
