console.log("Service Worker Loaded...");

// // Listen for install event, set callback
// self.addEventListener('install', function(event) {
//     // Perform some task
// });

// // Listen for install event, set callback
// self.addEventListener('install', function(event) {
//     // Perform some task
// });

// self.addEventListener('activate', function(event) {
//     // Perform some task
//   });


const data = { title: "Help us" }
const url = 'http://localhost:3000/'
// const signed_in = localStorage.getItem("signed_in")

// console.log(window.localStorage.getItem('signedIn'))

setInterval(
  ()=>{

    var d = new Date()
    var n = d.getHours()

    if(n%6==0){

      self.registration.showNotification(data.title, {
        actions: [{action: "", title: "Update Now"}],
        body: "by updating your oxygen stock info",
        icon: "https://amardeephk.xyz/oxynet_utils/logo.png"
      })
      // console.log("Push Recieved...")
      self.addEventListener('notificationclick', function(event) {
        event.notification.close(); // Android needs explicit close.
        event.waitUntil(
            clients.matchAll({type: 'window'}).then( windowClients => {
                // Check if there is already a window/tab open with the target URL
                for (var i = 0; i < windowClients.length; i++) {
                    var client = windowClients[i];
                    // If so, just focus it.
                    if (client.url === url && 'focus' in client) {
                        return client.focus();
                    }
                }
                // If not, then open the target URL in a new window/tab.
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
        );
    });

    }
    self.addEventListener('fetch',() => console.log("fetch"))
  }
  ,6*60*60*1000
)

  const ASSETS =[
                  "/public/client.js",
                  "/public/favicon.ico",
                  "/public/index.html",
                  "/public/logo192.png",
                  "/public/logo512.png",
                  "/public/manifest.json",
                  "/public/og.png",
                  "/public/pp1.jpeg",
                  "/public/pp2.jpeg",
                  "/public/pp3.jpeg",
                  "/public/pp4.jpeg",
                  "/public/pp5.jpeg",
                  "/public/robots.txt",
                  "/public/worker.js",
                  "/src/App.css",
                  "/src/App.js",
                  "/src/App.test.js",
                  "/src/Profile.css",
                  "/src/ResetPassword.js",
                  "/src/index.css",
                  "/src/index.js",
                  "/src/logo.svg",
                  "/src/reportWebVitals.js",
                  "/src/setupTests.js",
                  "/src/components/Homepage.css",
                  "/src/components/Homepage.js",
                  "/src/components/about_us",
                  "/src/components/card.css",
                  "/src/components/card.js",
                  "/src/components/options.js",
                  "/src/components/about_us/about.css",
                  "/src/components/about_us/about.js"
                ]

// sw.js
let cache_name = "oxynet_chache"; // The string used to identify our cache
self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener("fetch", event => {
  if (event.request.url === "http://localhost:3000/") {
      // or whatever your app's URL is
      event.respondWith(
          fetch(event.request).catch(err =>
              self.cache.open(cache_name).then(cache => cache.match("/public/index.html"))
          )
      );
  } else {
      event.respondWith(
          fetch(event.request).catch(err =>
              caches.match(event.request).then(response => response)
          )
      );
  }
});