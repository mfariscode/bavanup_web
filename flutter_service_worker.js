'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "60172b39e96c1ee4f335c2fbcb7215a1",
"version.json": "df36989b4e68288bf82a074b293fbb44",
"index.html": "de86f144b26fe6f9dee6314e5fcde0bd",
"/": "de86f144b26fe6f9dee6314e5fcde0bd",
"main.dart.js": "5824c93dee99f783f81def13fe88e45a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d51c2cace96c235f33f84099d5ee4be",
"assets/AssetManifest.json": "2c97bad421e5578af92556e834118418",
"assets/NOTICES": "04a666674f1f95045b74c8332f4cb710",
"assets/FontManifest.json": "d08b3a235e4f148320684cf25db43088",
"assets/AssetManifest.bin.json": "09a0cc979020b60d88461fda6c7589c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f0bc73aa62ad37110978ed06d1b8ac00",
"assets/fonts/MaterialIcons-Regular.otf": "1f1b47f4d929653b6c1f30869c126f0f",
"assets/assets/svg/notes.svg": "7d02e0a7f90eb4ddd1be2acb05444e62",
"assets/assets/svg/expense.svg": "71055ac267ae67aa0af93f01005e1673",
"assets/assets/svg/image_gallery.svg": "d496d88282ff866e1b770c1aa2f4afe8",
"assets/assets/svg/silver_medal.svg": "838517923272e22d19defcf0f8c6eb8e",
"assets/assets/svg/user.svg": "0603ceabe178c182a85513fb314c07c7",
"assets/assets/svg/home.svg": "95dc7d6f5c06ad4841c7bf38e00d94a1",
"assets/assets/svg/share_work.svg": "142e05f3c3feb26631ae44c3688ede75",
"assets/assets/svg/gold_medal.svg": "2db88f2fde57597184269905e4d8fca3",
"assets/assets/svg/advance.svg": "b920f4c4c1e5c236efaae894115b2081",
"assets/assets/svg/rupee_file.svg": "b1db7fb51f78d629c2c207cb6641dfca",
"assets/assets/svg/slide_menu/invite.svg": "b26d8c1e4ed4aba7aeceae277dd54d99",
"assets/assets/svg/slide_menu/my_employees.svg": "5e539b50929de5c7b8621fae5ab44abf",
"assets/assets/svg/slide_menu/finished_works.svg": "6345a79906b471633ff55e2ee2fd09e3",
"assets/assets/svg/slide_menu/logout.svg": "6999cd4a48bbbe4b7bc5b0204fc5c846",
"assets/assets/svg/slide_menu/my_assets.svg": "e88525d08e7ada9f56693369c033e2e4",
"assets/assets/svg/slide_menu/reminder.svg": "bfc611fbe85e7fb580cfa754830d622c",
"assets/assets/svg/slide_menu/site_tools.svg": "198dd256ed544800bf3edd19d7fb9d0d",
"assets/assets/svg/slide_menu/my_plan.svg": "598ccbcc2cbad1a3cab5bc77c8a02538",
"assets/assets/svg/slide_menu/star.svg": "5bb6cce0ab72b4ddc11e1c8a8912783c",
"assets/assets/svg/slide_menu/my_labour.svg": "477316067bad7fdccd790abd1496e815",
"assets/assets/svg/slide_menu/profile.svg": "0defc717ef1e0b85e7501551b736d58b",
"assets/assets/svg/slide_menu/Help.svg": "dd56eac1dfd4670c5accf45a1487b8bc",
"assets/assets/svg/slide_menu/company_reports.svg": "79704ea11f0f9fdbe15e535a25521724",
"assets/assets/svg/slide_menu/paused_works.svg": "9f731297148d66d9a937ef2314370ee6",
"assets/assets/svg/download.svg": "c1f3830cb67ccb88ceb29b3e326aa8d5",
"assets/assets/svg/rupee-svg.svg": "5cef2616a0f4d85fba69ca97e2c95721",
"assets/assets/svg/login.svg": "831dfafa032943c91f039112dfb98cfe",
"assets/assets/svg/green_medal.svg": "ba627e5fce9b0063bd224fd2e1f359a6",
"assets/assets/svg/add.svg": "076d514e6fb6e36b396eb08734ea6025",
"assets/assets/svg/assets.svg": "f104d29c1abebd39c8b92fd9a336db64",
"assets/assets/svg/report.svg": "b6440c95ab08b94e73a1891d44332a82",
"assets/assets/svg/notification.svg": "e0c9b10954d3058578492d0c2e077eaa",
"assets/assets/svg/remaining_days.svg": "f6c2e43363929a8f26be71af3af1e1da",
"assets/assets/svg/no_data.svg": "96fdbbe389ed1fe83a801906c6c3e7ae",
"assets/assets/svg/whatsapp.svg": "41851e377aaaa084aa68cc47aa483200",
"assets/assets/svg/income.svg": "844a89cffbdf00a71763fe9a0a6c3729",
"assets/assets/svg/edit.svg": "4e4fbb46a8ad63d48c0db77556657e94",
"assets/assets/svg/delete.svg": "4e68c20a11146c008eb0fa05540f841b",
"assets/assets/svg/location.svg": "b3a87d61d6d0d76ba827c18d989cd10e",
"assets/assets/svg/money.svg": "e95d209c8b9879533b31a4c17423c82e",
"assets/assets/svg/calendar.svg": "9b91d26feb93b8fb607363cc37b74ac3",
"assets/assets/svg/menu.svg": "1cdca280f1afdef277ece4b9264673ba",
"assets/assets/svg/tools_outline.svg": "3edf1609163dc4ec71d1dc44aa9d5799",
"assets/assets/svg/bronze_medal.svg": "f0260c60ceb847d8885f96da1daa2193",
"assets/assets/png/logo.png": "56e73de6de6b9bb1cf24d4c562ef2071",
"assets/assets/png/profile.png": "4f52944ca79c6b661d9477b22087a104",
"assets/assets/png/assets.png": "24938cd6369a0db9d3d602faa2414e2b",
"assets/assets/jpg/bg1.jpg": "3daf29c6f9a75637ba6459aabae0fcbe",
"assets/assets/jpg/cached_image.jpg": "e7c235592e62e4f048ab1128ed25e9f9",
"assets/assets/jpg/get_started_image.jpg": "daeeb9d17f4bbbd1f8e81397798cb020",
"assets/assets/giff/hammer.gif": "f1f524ef9ea1236fcdac82812bc810fc",
"assets/assets/fonts/TitilliumWeb-Black.ttf": "8d8d73518f2f1d36654af1b92fbfba99",
"assets/assets/fonts/TitilliumWeb-Bold.ttf": "d49a8ee8f1baee082909ab2e7c4062d1",
"assets/assets/fonts/TitilliumWeb-Regular.ttf": "57e937e4eef39e324bd4f26745053687",
"assets/assets/fonts/TitilliumWeb-semibold.ttf": "c21564022e51245ca150237eeb23a2bb",
"assets/assets/fonts/TitilliumWeb-ExtraLight.ttf": "6a9cdf9fdee47c63bc9c6c9ac284b32f",
"assets/assets/fonts/TitilliumWeb-Light.ttf": "71d53d9506f88f09a25f326f29de4201",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
