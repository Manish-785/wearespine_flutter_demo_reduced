'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "28a5d271c78db66a6970e5c676f38fdc",
".git/config": "e24b9c57b00c53222318cc2266393886",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9107cc09fd6796e7542df08c56de5e8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0d2f43119991d40e4f8f3fc31da62b3",
".git/logs/refs/heads/main": "404cd19aca9b60056af1faebb3044471",
".git/logs/refs/remotes/origin/main": "bd52f59a5cd1f779b520af286804531b",
".git/objects/05/dd45e4be7c71163173aae569bf3bf40e4c4c4a": "d3a38163ed81224324b87368e24b9ffb",
".git/objects/08/238d2997b732d21e4548f94a986273de2053e3": "5da70f33aa66a9c5a3903fa8d03507fd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/5f570ddca40b50a8ab93a4fcfba89615e14f19": "e75956dba1886e06cbc577dcde399c1e",
".git/objects/12/56d9a9c938ab51969188bca0f9618625060767": "040d5af7c0ba74f5aa9ed1e62d3780b5",
".git/objects/16/65a840e76b118a88f772cff862635d686c9f2b": "8fcd43d3a6dbb0609015c470f4d3bed5",
".git/objects/16/99e3982048fe1fac9d50a18cb48c54cdde3e7f": "2a8919c330163b8d7f4ec0ad399c6ac4",
".git/objects/1d/c84ae752f2597afa940226dc36b41fe9c3dbc9": "e7e2367f525683bb46f6636214b09875",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/6c162e7c61dc07cb35b625a08afd5a63bb83af": "566beed81ed2f10ebaa3cda692f7d14a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/4e89e573f01ac0e4278b8c5f130fe8b6ee8a87": "6b72ff06acdc06f492040cc025c6c54f",
".git/objects/26/7358026bdc0777b8c265e49792fc9b3de29b50": "bd5449d59071145c7efd322d1afd7d86",
".git/objects/27/a3a95f50cb6f10fbf670f212a36e04284454a1": "444d9e787aae27d2ec6d9e23ccef492a",
".git/objects/2a/260561e00da773c93051b05bbcf93822dcbeac": "7baafe82cc3446a567b234531acad57e",
".git/objects/2d/e11a2671fd4c959f2ac06714b0c6dc004ff125": "668541d8297be7caf1536f4338e5db9f",
".git/objects/2e/c424570644cdab17b9e0140b903dadab710518": "51b1e7a6789502b40d3ed7f98d27b75f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/62014008ff45fd14dd0db583badbe3b14c6a20": "58b329fa2bf4f3a5df014c4b3bc5b699",
".git/objects/37/348bca0bbb2d990f76ed73f4642bc730c8a909": "15491b1daaaa6e7f9f80e67de04213db",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/476c48883631e4b47722956cbaa896de9f75fd": "ffa22c3b74a944fd5d1169bf94a640e6",
".git/objects/3e/61be2ec926cc8dc5f74bd495a22b8144d5d373": "ded1f93fbde4b294464dac945a45d62a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/aca0f17939eba974e0dc1b1be4534f815c7ba5": "f748cdbde9f9f7e7bb959e3f8f2a797f",
".git/objects/40/e315a85ea9b928b40d121e03d6a63749cb84f1": "8230025af6f35a5cdaf7c359e391d127",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4a365bbffbfd0102b4902621274d370e1f9cc6": "f088d68d1a7489179ff309cb8869511b",
".git/objects/48/0b44c190f05576a76f5f744a040ab0893b4d1f": "cde89f56745e0b30e0d0c45b29ebf662",
".git/objects/4a/41f6b256d36480ffae257b241c51d21139a385": "6da83a2ad0e3351c0e666f948fb13092",
".git/objects/4a/68dc04ad579df7bc55f2ef04fd162fc1186df2": "66dff48f925108b2eac31a74fa13a855",
".git/objects/4b/913ead5742673fd3ff1e0d306c8362598caf6d": "c92323d64e6959305707dc0fe4d6c257",
".git/objects/51/79bb45bd0abd17dbde9e74bfbb0fafd39d6b49": "a05cdfc3ed8337fbba1f4bb78dcdc2a7",
".git/objects/52/3f8e9eae2cc6a3a7c7c91e4f6084b802943349": "5436439336a5e56aa20a3b590ee8894f",
".git/objects/53/724f447eb10c091b9a9e81540634577f3eab9a": "6b6c3ca9f54415793b239e4500f62f2d",
".git/objects/55/2e08782ca3476d581972eaaa4b0d9c6998ccc2": "ba1730d55c1e2919e7ab9b7dcd2c5038",
".git/objects/59/36cf697dff84b19fb0f7ec38d692d3146d1b0f": "4feef457423d2cbcd38bdccb33f1c8e0",
".git/objects/60/8cf6a791b4c97ddb614b34332ec304079369fe": "e0649d06435d3dfd794842ca163d59c9",
".git/objects/66/b62348dc3b1badb5ed0abaf7e737ffd7aee4cf": "c3cd74549f25bd3ff2328f05c4c15c32",
".git/objects/69/e910e50337a295cd82e14a6134c8dfe74d8923": "1d7cb3fce2e392c78d28f7c31470394b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/7f2e1c12c207996d270f45bd5175de550b006f": "c14a95d45c66b0fdae1ca532625ac7c4",
".git/objects/74/592e9f9f925a6e545f9de6e16cd97c259a3587": "3608f8fde766acc37883f11762429731",
".git/objects/74/6a642e878024d9c5f9ba6a8169944b656dbd3c": "8ec7f22f9383b99ed20763bb4ed3b8e5",
".git/objects/74/84229bb4e14716259c005bd1269e03cc9c5545": "19a3e2800bb1a34f7bcd8cf404ea19f5",
".git/objects/75/4b94d49073a3e9c4460f5d2856d6c5ffeca183": "98dab012164fb15e7b2508bbef9ced81",
".git/objects/76/d9aa758e13a54da32f41242956c70a8dcf06f9": "db882036cb3f5ab0e73fca9fb7aa45c8",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/ca45f29c58fe715756dfaab5e6056e75386614": "12ba5924fb392e737c9551d73e0151b6",
".git/objects/81/32329ce6bc44031f8f1163295862bd9e1ec1b0": "9ef2007ef0cd846d8cc70b4faf9f5b95",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/c64f23b6121e021045c5c668b181eab43ca66d": "4110c1bcc39ad2ee4791a82cf7d51a3b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/687df59cafc0588b94e8fc25eaceab7eefb329": "8ea19d9d4cc422379dcc37c2ef6a9475",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/fcf4380d7003be8cb4dfd6c9668a3f989f1b84": "3b8e776b6a98114047049d5fe2f8839a",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/4dd10b9b519a92b4700f1c976b00121b9081e7": "8e2ae470fe8d83d2f2762f87e53a2476",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/7b4b9cda7ddba5f250c6ec8a61d372f6cbfe5b": "bfd9d7c0d474ea8959cb640ea3a75152",
".git/objects/9b/5f3e2c70ec96b854b23290745b502f40ec8771": "623dd1dabf03b365ceb5ec673271a368",
".git/objects/9f/85cc277a23488cfb984c0cb8f998d532bed356": "1406908d317166c56a2d754311a6ca4e",
".git/objects/a0/3c42fa067ced8edaa4461b77b3c1d46dd61399": "4f6f01f9b359a490879cc37837c201ef",
".git/objects/a2/3ac3e0355e58492fa9beed9316206f50a125ac": "6c30766ce1362432bc80357ef1b30c5f",
".git/objects/a4/9a0b536aaeb9c2fc2410d14afbb3fc7098952c": "2b7be4cb01d8e99e1793f631e49256d7",
".git/objects/aa/12594cc6bbb2e89eeab0fe7d95e4a01ac5562d": "c8bd74998fff36eb66aee66f5a8aee42",
".git/objects/ac/56968abf32e42256c591ea25efcec28673f304": "18e94cb852c555ef9f47ca297df689f5",
".git/objects/b0/b3208e7aca09aefa3ce759aed87b792c440df7": "a028db7059d519c6f710f391b593e4e4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/dc5b485e3315b4b518ad718c68e22c9afb8c92": "9b477b104aaf9379e71040b261d2cdda",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/d058b3ee955de5d8e67c5ae68695a9619b8de3": "e2d83494af8613fa7930d5c4133d9f0c",
".git/objects/c0/e48464d0439ae4e27c1b159f38a2b43b04e02b": "f2194cbcf4a543f04acdeb96a76974ae",
".git/objects/c4/8d046eafa191051bea43f81904348ca2893630": "ecae7128af6fd5950348d9599a08b4e8",
".git/objects/c5/dfb9373412e3ed6ad4339fc027faf8548899a2": "aa5361abeba53a602af9a6a37200c80d",
".git/objects/c8/0e1ed3e1c27d7073783f010101be1880422685": "20465523e6eeee8c3438c6aad271cae1",
".git/objects/c8/765090eabfb41fe603f887d07fc77ae21efb52": "98f899884bb0d165a7f9e444fa44b5ce",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/5f702e15c6b15ac2f353554b640992a0348aa0": "511eea1b9683a6d40d854a5616ac988f",
".git/objects/dd/692701cbfd3601fee743f46fca6e9c96841e8f": "eebf352113dd4e7bab2ed5064753a7b2",
".git/objects/e0/72f7a6962d15742bc43b88c354c9aaed8ed95f": "eb281ab8ab601611c900ce569bcea31a",
".git/objects/e3/eb157eb74dd2c1851a54d47e948efee7c0b5d1": "0f11f9425a8722668b6b435a3743d713",
".git/objects/e6/0e55913e9da72af62f69717f5fbdb7d5e982c7": "6ccae8152ca8a4160474e4766d02f3d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7275fa0547772cff27d9080d087c5d33cd01e2": "a54bc2a74fb5dd39884957cad4d976de",
".git/objects/ee/d59171485ef6a48f8727945509d5707d401635": "dc176f4e1508bd6d344226b6cb8cf32b",
".git/objects/ef/9a785f44604d65575bb2cdc2279ad502d7bae9": "0a2522f08eb913f2f21f7cf90dcc4fdb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/180c2156620c5ebfb36cb1de1caf741711d4c7": "96004b43015bddd4daec356fdd129ca5",
".git/objects/fc/0c38342ca06d585e040ae9dc2331850dbc5c6f": "78bbef5d313b9b5beacb456a1a055f89",
".git/objects/fc/6a2a67b1d3de8b43923c080accf962df46d73a": "33b9a8448d8ad628fac26807c322ab7a",
".git/objects/fd/aacb041ed4024062ecd3a07b9db9d6d4837ae9": "eb4567cfbc5de908ac1139bc22695f2e",
".git/refs/heads/main": "77c33f81edc84b9358ae0245c36c2fa5",
".git/refs/remotes/origin/main": "77c33f81edc84b9358ae0245c36c2fa5",
"assets/AssetManifest.bin": "e241d1a98295a2a82389c81a36ba7eb6",
"assets/AssetManifest.bin.json": "dbc377f820e928d1632b1cde4ca22c66",
"assets/AssetManifest.json": "da97263550c936bdc8afc79f12884f3e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c651d472a3950a4232ac5307d193c17f",
"assets/lib/assets/back.png": "92934be798f0f8cd9212c2bc7bbe1252",
"assets/lib/assets/back_movement.jpg": "520d2b5da52ca6b968622e96ac21f0b2",
"assets/lib/assets/fnst_test.jpg": "e54f984dfd9fe4782d2d1671e2283af4",
"assets/lib/assets/front.png": "2651fa48b059ca0cb3466484cd80b0fa",
"assets/lib/assets/Gait.png": "e5dc2245f1b037efd8a02563dc1471f3",
"assets/lib/assets/hip_movement.png": "1dd46591387a751060f3e4fc6b149d5d",
"assets/lib/assets/leg_raising_test.png": "2ae2cae4f0033f9b7909ef16612ad118",
"assets/lib/assets/neck.webp": "778346f9e99aefba08b7af2f84d73192",
"assets/lib/assets/shoulder_test.png": "ec4c9d17247afd05fc5bc71e6f8a9555",
"assets/lib/assets/spurling.jpg": "8bf4befd67b8e0fc7278d7d52a4c5570",
"assets/lib/assets/tandom_walking.png": "608e38aef44af7ac6d4fd5dab91e21fa",
"assets/lib/assets/trendlenburg.jpeg": "60b17df3b7790bad8529f71a21373f79",
"assets/lib/assets/walking-technique-hip-1.jpeg": "9524c84ae012ba8d6784b9eb42339bf3",
"assets/NOTICES": "db2ffd45d78bd3e33c5033d340acc99c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e716feb26c9f8b892f15de4572ffb258",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "798e14a1de1cb6ad5251a074f8e64269",
"/": "798e14a1de1cb6ad5251a074f8e64269",
"main.dart.js": "1a88be78497f37d66bf5692508a10cac",
"manifest.json": "4cf61e32a25a15568192f62cbdf570a6",
"version.json": "c3295c602b276d0d16d67129af2b7a23"};
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
