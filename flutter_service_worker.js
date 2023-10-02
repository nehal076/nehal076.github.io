'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fd84357a99e813113a1fc6be17fd4aa7",
"index.html": "f62aed96f1d43c8b7667f823c2abba29",
"/": "f62aed96f1d43c8b7667f823c2abba29",
"main.dart.js": "0539d25689fec9e91f87431bc49d0b0b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8fac545692a44d54ddfc054cf78f2fbb",
"assets/AssetManifest.json": "b0a49530f43706e7a675c247292c3212",
"assets/NOTICES": "58ef2bf3536f9b8ed6b3da22c9a0e205",
"assets/FontManifest.json": "8f036bb4279e4857a966e259b818f8ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/certificates/freecodecamp.jpg": "b240e629043c3ab867b069a1b3734771",
"assets/assets/certificates/allaboutweb.jpg": "cedb456f7900667189380130dba3eaba",
"assets/assets/certificates/ezgif-4-806e842745b7.gif": "25168fbb21e5b9aea3df3b67a8216687",
"assets/assets/certificates/ngGirls.jpg": "7c525f7a296ad612dcc57085a063d274",
"assets/assets/certificates/yv1MXbph_400x400.jpg": "d035cfbc56a27db6330b9c035c961553",
"assets/assets/certificates/ducat.jpg": "133811e672b2c922c914d6c3ac151f77",
"assets/assets/certificates/aws.jpg": "ed9387b31b3b3438383f47a5a9c53c95",
"assets/assets/certificates/wscube.jpg": "80134d0f3f7e2e73b84c0dc8c222c00a",
"assets/assets/certificates/coursera.jpg": "1987a2fd0996062c03546ec233f9ae97",
"assets/assets/certificates/ezgif-4-ec127365072d.gif": "1c10c7aa4eead3d6206ab6456590a1ec",
"assets/assets/certificates/googlecloud.jpg": "2fdea4acce2c30cb63509d8eacd97e3e",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/avatar.jpg": "b504a57caeb035b6c3f89d7d12ddb4af",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/works/finder.png": "830b7573a31839334696104a55235b1a",
"assets/assets/works/wayforball.png": "b90c5f6c45ea1ea004e0bcf1a48967b3",
"assets/assets/works/bookstore.jpg": "947b111d410519870b9e733c2c3f55af",
"assets/assets/works/poke.jpg": "f1e333c73d02d6f06912c58abf61fc43",
"assets/assets/works/boom.png": "873f89ba285a0db9bc90aeef563b833c",
"assets/assets/works/winway.png": "8f39c0f1e15edc3c50fbb854eec5a1ba",
"assets/assets/works/sg.jpg": "a509e56acf4931bf2d8f78401550a516",
"assets/assets/works/medihelp.jpg": "307e6906c251d91bb6202b3dd4736d7a",
"assets/assets/works/jh.jpg": "e4a490f17f8fe8a1f7eb11e7eddc7a91",
"assets/assets/works/ristorante.png": "eb267f35256591eb7733b73c0455dbfe",
"assets/assets/works/cashkart.png": "226996aee4335129e3d15deaec9ad9ec",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/sun.png": "b24592b9951338710eeac6e07fe16fdc",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
