'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "41955dddc324d84bb5cf0b8ff36f3c38",
"assets/AssetManifest.json": "4b834770def118eca52c13624ce2fd7a",
"assets/FontManifest.json": "7d8271b8de53e478e07cdd404dbe939c",
"assets/fonts/MaterialIcons-Regular.otf": "44f2ff6bd4b23fc7cb30a48834a1e7b5",
"assets/NOTICES": "fee60013976801e44ee4da790e1dfffe",
"assets/packages/app_ui/assets/fonts/Montserrat-Medium.ttf": "735cdc3ba75463c090ce8e8a2662ecbd",
"assets/packages/app_ui/assets/fonts/NotoSansDisplay-Regular.ttf": "5182edb2a96aa973ef78b098afcd8780",
"assets/packages/app_ui/assets/fonts/NotoSansDisplay-SemiBold.ttf": "c74ff896adfed513fa90d2b90fbea812",
"assets/packages/app_ui/assets/fonts/NotoSerif-Bold.ttf": "42545055b878a78414480eedb9f001af",
"assets/packages/app_ui/assets/fonts/NotoSerif-Medium.ttf": "2977da1df6b14f51486a28f5cb0383cf",
"assets/packages/app_ui/assets/fonts/NotoSerif-Regular.ttf": "381f44aa9fc55e527456f9336582af5d",
"assets/packages/app_ui/assets/fonts/NotoSerif-SemiBold.ttf": "91d067e48b486ec325bd6bb0a30bfba6",
"assets/packages/app_ui/assets/icons/about_icon.svg": "1eb82fc36f630e098ffceb7fe73efe23",
"assets/packages/app_ui/assets/icons/apple.svg": "55487761ea840d5de230d2beb19e807e",
"assets/packages/app_ui/assets/icons/back_icon.svg": "cef6495ced8c9c80b8a9db7d5421ffb8",
"assets/packages/app_ui/assets/icons/best_value.svg": "65ad337e84d253e6c6fee043d5a081a5",
"assets/packages/app_ui/assets/icons/close_circle.svg": "815b5b14fb210ecfd47a474a4b2efdfd",
"assets/packages/app_ui/assets/icons/close_circle_filled.svg": "dadcc2af250ecece7bc5e20aeae5814a",
"assets/packages/app_ui/assets/icons/email_outline.svg": "6a367a2b8c929081730f972004bd8013",
"assets/packages/app_ui/assets/icons/envelope_open.svg": "13fe81f39224df05629ba837d31917de",
"assets/packages/app_ui/assets/icons/facebook.svg": "6199751b689a3ff62f0ef2c406c3e684",
"assets/packages/app_ui/assets/icons/google.svg": "dd5cd46210c2ddd8200ac4748ae82593",
"assets/packages/app_ui/assets/icons/log_in_icon.svg": "3c15df5dda7702e49f7fa30839501624",
"assets/packages/app_ui/assets/icons/log_out_icon.svg": "74fad2bdc7f479e6511137825ededd57",
"assets/packages/app_ui/assets/icons/notifications_icon.svg": "ea111d685f6480c69f2d84cc12ca7615",
"assets/packages/app_ui/assets/icons/profile_icon.svg": "46ca9bba937d379d094b89873e18acd1",
"assets/packages/app_ui/assets/icons/terms_of_use_icon.svg": "a4c991cdf1b2f2a71b5b2583b2bcab97",
"assets/packages/app_ui/assets/icons/twitter.svg": "d78759c8cde3f096bbc5b539993e6d5a",
"assets/packages/app_ui/assets/icons/video.svg": "2f6e52118f6abac5e5999c7726742918",
"assets/packages/app_ui/assets/images/continue_with_apple.svg": "65822ecd0c22d8e3519d8f7e22c4e3d8",
"assets/packages/app_ui/assets/images/continue_with_facebook.svg": "22908e6f0ca50d43335230d5b3298ed8",
"assets/packages/app_ui/assets/images/continue_with_google.svg": "e210d5ec6ba63b2b31064a44b2ad4165",
"assets/packages/app_ui/assets/images/continue_with_twitter.svg": "9df44c21d5f5af8644a8573a227241a8",
"assets/packages/app_ui/assets/images/logo_dark.png": "fbd7ef32db13b62c08f7443f6c26db74",
"assets/packages/app_ui/assets/images/logo_light.png": "74b5595ba27b700fd2e291969c9f825e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/news_blocks_ui/assets/icons/arrow_left_disable.svg": "d93039ede952f839b256b4edbd43867b",
"assets/packages/news_blocks_ui/assets/icons/arrow_left_enable.svg": "d93039ede952f839b256b4edbd43867b",
"assets/packages/news_blocks_ui/assets/icons/arrow_right_disable.svg": "347364379083f764f79107b9e8edcd54",
"assets/packages/news_blocks_ui/assets/icons/arrow_right_enable.svg": "347364379083f764f79107b9e8edcd54",
"assets/packages/news_blocks_ui/assets/icons/play_icon.svg": "4edb1e6094695545608fca842520e898",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85faae35de92b2a10f8561202089cc3d",
"/": "85faae35de92b2a10f8561202089cc3d",
"main.dart.js": "a3299aca091974b62c417ef120e3447c",
"manifest.json": "35dbf083c3e9b2a2a00f2e99b912bb87",
"version.json": "b259d26b22a002cbd97d32f2a54d717a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
