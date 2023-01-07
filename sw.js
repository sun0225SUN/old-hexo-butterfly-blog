const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9cdf201b5f9b55b50f0b9d28198fdae5","url":"./404.html"},{"revision":"04aca1f4cd3ec3c05a75a879f3be75a3","url":"./404/bootstrap.min.css"},{"revision":"663fd753cae2b462cf8ed119c3f991ab","url":"./404/gsap.min.js"},{"revision":"322da3240076a9673646598b1a962381","url":"./404/script.js"},{"revision":"ba5ab7a5b108fdc823eb241ded49405d","url":"./404/style.css"},{"revision":"5b9d62c906342ed42d46b0cd33d13bdb","url":"./about/css/h.9c69ed6c.css"},{"revision":"6061a9571d6031ab8513e41edd7c15b3","url":"./about/css/nekotora.99cf6f8c.css"},{"revision":"a848ec0371063474b5f3c88841c02592","url":"./about/fonts/nekotora.4ea5ebe6.woff2"},{"revision":"e5a3682daebe417753630e007ca16ff6","url":"./about/index.html"},{"revision":"aae8aaf9c067b5643de9d7dfbe89e77d","url":"./about/js/page.3a0791a3.js"},{"revision":"a68df6b6b38288b6273808b011d71b15","url":"./about/js/stats.js"},{"revision":"46fd80b141eff143dc2c456dcb40efd5","url":"./archives/2021/02/index.html"},{"revision":"934a0cdeca278228ea607d818d610ad7","url":"./archives/2021/02/page/2/index.html"},{"revision":"68ca3ab6ee94706d23b2d02d1bb63ec1","url":"./archives/2021/03/index.html"},{"revision":"717b72237813dd3a60e1d9ec45edf078","url":"./archives/2021/03/page/2/index.html"},{"revision":"a663ad2577d29d36aa099fe6cdbaecac","url":"./archives/2021/04/index.html"},{"revision":"398d46f49e01ea9ca17505e563321304","url":"./archives/2021/04/page/2/index.html"},{"revision":"9a8651b62272cd28ad82b271cdec7356","url":"./archives/2021/05/index.html"},{"revision":"ac04199e58a80124f2543f4f28bee1c2","url":"./archives/2021/08/index.html"},{"revision":"99a98c2cfee25b1dfbeecf59a4cdaab0","url":"./archives/2021/09/index.html"},{"revision":"4e1ec6cbd67e2afc7b2fd6869d537e2c","url":"./archives/2021/10/index.html"},{"revision":"da7a3cf2db05ad17e7915b3f71f184dd","url":"./archives/2021/11/index.html"},{"revision":"24d57fc2de4af86dc434b1e4761f96df","url":"./archives/2021/12/index.html"},{"revision":"a3475fa5b29c6698a6feefdab577dfe3","url":"./archives/2021/index.html"},{"revision":"220b56dfbbd341d37cd289a40f1a2613","url":"./archives/2021/page/2/index.html"},{"revision":"6b76ab37d09267c420375693822e36ba","url":"./archives/2021/page/3/index.html"},{"revision":"f9be5faf4566972f52539a15e947d029","url":"./archives/2021/page/4/index.html"},{"revision":"c4f73335e84360921d5e4b632539e677","url":"./archives/2021/page/5/index.html"},{"revision":"9713570fcadee108bc3b1fba3e09626f","url":"./archives/2021/page/6/index.html"},{"revision":"269354ae2b94a44d993236f0853ec84c","url":"./archives/2022/01/index.html"},{"revision":"0f044161034a3317a538732529490657","url":"./archives/2022/02/index.html"},{"revision":"9c883148e4447169b8d3b25dbbedcc2a","url":"./archives/2022/08/index.html"},{"revision":"24d8e6a3b0060f19dda4b807e2b084da","url":"./archives/2022/index.html"},{"revision":"18274c679409970dedc82cc1769e3c4b","url":"./archives/index.html"},{"revision":"18a72737c39e6cb3d84948d71bf9ec06","url":"./archives/page/2/index.html"},{"revision":"40e15a480eb979e7bf28f20277e07de4","url":"./archives/page/3/index.html"},{"revision":"3eabff6efb90b9b781c7b869a9ffb483","url":"./archives/page/4/index.html"},{"revision":"dc063cdca3ce69c49cfe407e07ab3be3","url":"./archives/page/5/index.html"},{"revision":"bbac6b28bbbac5d40960a466f21e5ca8","url":"./archives/page/6/index.html"},{"revision":"3aa18e1c2b14618c0604903753dea342","url":"./artitalk/index.html"},{"revision":"4f2bc049b7e3903ab05a76be8179d738","url":"./atom.xml"},{"revision":"7542d28e37e61b87d15a19b46ac2e350","url":"./bb/index.html"},{"revision":"cd9366498ba8fea53ad4c3003cfa7ea2","url":"./books/index.html"},{"revision":"6b68c3e8abc1d2823fbb51b0b4b6e06b","url":"./categories/ArcGIS软件应用/index.html"},{"revision":"5548005c53464fd9f738f4681c6f649b","url":"./categories/C-学习笔记/index.html"},{"revision":"0dc85504df0ca29fec9e2e05e3454e67","url":"./categories/C语言学习笔记/index.html"},{"revision":"00f37f33bdb21c6b6498b1b0057882c5","url":"./categories/C语言学习笔记/page/2/index.html"},{"revision":"3f64f8d3286702d607b2f0bd4e0833d4","url":"./categories/Django-学习笔记/index.html"},{"revision":"5bc118089861022170d2e2a7fc92b791","url":"./categories/index.html"},{"revision":"2f6902b38007644d8a8cd196cd032872","url":"./categories/Linux基础学习笔记/index.html"},{"revision":"e6766c64a0b048bd2334ea96e90179d5","url":"./categories/个人网站/index.html"},{"revision":"0374428d8df7bf75a63e4dff3381d07d","url":"./categories/生活杂谈/index.html"},{"revision":"1fd0d052d9353fb3659c9f65953f8c9e","url":"./categories/经验技巧/index.html"},{"revision":"3b950ad877f6689f3f663b611c9db4a9","url":"./categories/网络爬虫学习笔记/index.html"},{"revision":"6a3467e0355c39699dbe66436e44f744","url":"./charts/index.html"},{"revision":"61391317c45242834005cf5bd672549d","url":"./comments/index.html"},{"revision":"a224f8294a089a0320129f1ccdb34edc","url":"./css/custom.css"},{"revision":"ec6fca9add6373e732e0e6471c3f8966","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f57cb767848636cd9cdbc15b56ecb198","url":"./images/siteicon/browserconfig.xml"},{"revision":"47d0285fdf6c1103ebd5df5488b1a462","url":"./index.html"},{"revision":"65ae3051e290853a38b89f33ff3d1241","url":"./js/card_weibo.js"},{"revision":"c606be973823079b9030dcaa52da7f13","url":"./js/diytitle.js"},{"revision":"ee09a57b1c9130fed7012ed03b80bcd2","url":"./js/grayscale.js"},{"revision":"240e062def7897dd4c03a12bf07fdc65","url":"./js/main.js"},{"revision":"2e82cc6348e1dcabfa0398d5ce981d51","url":"./js/randombg.js"},{"revision":"e6bb13e046a302375c68397325e3ae70","url":"./js/runtime.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"33b3c0e197c029d5b198059220bbd5ab","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"6474403a9a1788d37b83901755882a8b","url":"./js/weather.js"},{"revision":"bd5917427d4a365e7bda9682a746b394","url":"./link/index.html"},{"revision":"864a3e598bd47c726a5174342ce69b67","url":"./live2d-widget/autoload.js"},{"revision":"3212cb7567167f8cacb17c3fed8bbba3","url":"./live2d-widget/demo/demo.html"},{"revision":"acbf089cd65e600b4f387659b86ad0e4","url":"./live2d-widget/demo/login.html"},{"revision":"ee7efff8ff5d1d4bd4a0ff99affd3ec7","url":"./live2d-widget/live2d.min.js"},{"revision":"71e15b3bd88370ca665b0aa7b481f7cf","url":"./live2d-widget/README.html"},{"revision":"92c1268d766f4e5c7b2e91d021e86a36","url":"./live2d-widget/waifu-tips.js"},{"revision":"82dd286dffdad4cbbcda80352aca97ec","url":"./live2d-widget/waifu-tips.json"},{"revision":"387786b514bc838917b060706fd22601","url":"./live2d-widget/waifu.css"},{"revision":"3e77ba54f0147409e2f0e683b1180378","url":"./manifest.json"},{"revision":"598daef937ca1a5c7755afedc9c496d0","url":"./movies/index.html"},{"revision":"4d254294e5a142debdf7da4d585abf77","url":"./music/index.html"},{"revision":"c1492fc58f1e32e48812479ce546974a","url":"./page/2/index.html"},{"revision":"508d5f33ac2b32374653d9cb028dff86","url":"./page/3/index.html"},{"revision":"c105491cb265af226ef55f2b16d6e57b","url":"./page/4/index.html"},{"revision":"25cf61ac50689fe1310930c8ee096c9c","url":"./page/5/index.html"},{"revision":"e22a974b449ffcbb6f6c6f3780a9bc6b","url":"./page/6/index.html"},{"revision":"657fb8f50f4d71f53099eac93ec92e02","url":"./page/7/index.html"},{"revision":"4c19cc6537a0cc6aa661d203e804e558","url":"./posts/13824.html"},{"revision":"1a489d78fab315b34dcb6476da46480d","url":"./posts/15065.html"},{"revision":"01e2a389e7ffe1cd97b73ef0fa373986","url":"./posts/15318.html"},{"revision":"aa4fed0607ee5ec4b57bddcc40cce9b3","url":"./posts/16393.html"},{"revision":"48d47709f4f5f81f4515681459d2c82c","url":"./posts/16567.html"},{"revision":"d42537f36625104577345f854384e231","url":"./posts/16693.html"},{"revision":"f1a926f924d12833ff72d50b7290f45d","url":"./posts/17846.html"},{"revision":"bcb35b4ea896a5787b72c9e9b46501db","url":"./posts/18417.html"},{"revision":"5cc2ec7fa386c6856bd6db10b969e541","url":"./posts/18755.html"},{"revision":"14ec9e565f28abdfc12d06664daf5280","url":"./posts/19630.html"},{"revision":"973b06b6bbc0b317997571662d842732","url":"./posts/20220225.html"},{"revision":"85d8ade68c27be984ad31a00cc7fec38","url":"./posts/2022811.html"},{"revision":"de87b88fa8b47c02e7144700c43d7f2a","url":"./posts/20843.html"},{"revision":"1c6fc0ff1b6cb707b5d70fc246895add","url":"./posts/21009.html"},{"revision":"7e0f41800b93a52b13752ce6b559024e","url":"./posts/26252.html"},{"revision":"3f20b6cfbf984af70113180ba8c36439","url":"./posts/27414.html"},{"revision":"88b0bd6d196ac283ab2d0f33fec4bf51","url":"./posts/28271.html"},{"revision":"b920064e78f0c62a66bae5668e3541b7","url":"./posts/28877.html"},{"revision":"cdfd46ee103a456fdc36078245fb883c","url":"./posts/30211.html"},{"revision":"25df077f44130871047269345f5f6cbb","url":"./posts/31032.html"},{"revision":"9b2bffa28b9834f4efd70ec75f6ddd8b","url":"./posts/31034.html"},{"revision":"be59ef65cb1d1a0a832235056656a7a4","url":"./posts/31911.html"},{"revision":"2802994af5f6f93d459719e32be0fa28","url":"./posts/32121.html"},{"revision":"9edb3b57e96de92439836ad094f3c9ff","url":"./posts/32824.html"},{"revision":"50d90a3c4c38d477dbb4c119169b8510","url":"./posts/33414.html"},{"revision":"8e09d9ca0aefe1d9127a69833faa9e95","url":"./posts/34712.html"},{"revision":"8f6f7faa042ceb06cdd4c2c2753cbe66","url":"./posts/35809.html"},{"revision":"6df825f22771fde8d0321889939c7eaa","url":"./posts/36473.html"},{"revision":"e3c03f2c26c231aeb4f542515f03f09a","url":"./posts/38126.html"},{"revision":"29bf6ea4ee338dc312dc3d9b670ab41f","url":"./posts/39739.html"},{"revision":"6d452452c9ddd90bba277715a82f4209","url":"./posts/41653.html"},{"revision":"0e6947e29f492f983174d14127304646","url":"./posts/42028.html"},{"revision":"b959e2f104ad5161c5531582fb610c0d","url":"./posts/4243.html"},{"revision":"71b7bad8a7f3882688d67ed279afa901","url":"./posts/42620.html"},{"revision":"d5a529da8c1d37a4215e7863a1928759","url":"./posts/46320.html"},{"revision":"516bb0100875b49a8639f446490f8822","url":"./posts/4644.html"},{"revision":"abb99b8f24b3bc982a279ba32e088ba8","url":"./posts/46901.html"},{"revision":"700845d9cdc628f93b2d9def78aa6c27","url":"./posts/48112.html"},{"revision":"5fdde1b44da4441a5f81a544aa5163f9","url":"./posts/4904.html"},{"revision":"4936d3708c2dcf38c7a46ea4a1a34b7d","url":"./posts/51599.html"},{"revision":"6c3c39282d82ee094c3679fb2f2e3e60","url":"./posts/52563.html"},{"revision":"215f105442036821e59b444d4f50119f","url":"./posts/52771.html"},{"revision":"361e44c588a223d9f92c4dc9b01ff021","url":"./posts/52835.html"},{"revision":"b48091a7e5fbef91a1a72e4e558b1c08","url":"./posts/52963.html"},{"revision":"85ddec94e9286e49381cf90256a6f9b3","url":"./posts/53443.html"},{"revision":"fac8c77d98cc2b2b5771b1f8cb0fcb9c","url":"./posts/54163.html"},{"revision":"5df3fdedb60ede7683cb3b860a8a7260","url":"./posts/57083.html"},{"revision":"16335b867d40088af26257996008d830","url":"./posts/57119.html"},{"revision":"8fe6e125a69bd2dd07a8d54e03f2bf9e","url":"./posts/60965.html"},{"revision":"4d47f8617910acc6fe1374d1df901997","url":"./posts/64684.html"},{"revision":"02062e1d8ee993ae5ebff56a5c8705c5","url":"./posts/7723.html"},{"revision":"be3e5822d1235d4df4f02cbaa4e0a400","url":"./posts/839.html"},{"revision":"efdaf40fddedcc87ef492649b4ef586c","url":"./posts/8833.html"},{"revision":"642b5435dc2228b1e0a249b4318ed2e5","url":"./posts/9766.html"},{"revision":"b263eb917c9c31bc39df1c1080ab1a4e","url":"./posts/cuiqingcai.html"},{"revision":"0bad53cab5ed473551412a3676400db4","url":"./posts/fiddler.html"},{"revision":"c9b4cb1a35b2200104664a8a7526fca9","url":"./tags/ArcGIS/index.html"},{"revision":"d4a3d793a508081038393fdb9a518239","url":"./tags/Butterfly/index.html"},{"revision":"aebccc7b0c1664d7523794b0de6b43d6","url":"./tags/C/index.html"},{"revision":"18d5c4e5b59d77951c1045db6acec26e","url":"./tags/C语言/index.html"},{"revision":"c6d322811182d46ef3f1def424c0f7ab","url":"./tags/Django/index.html"},{"revision":"6a4cd3148ad74ed712d23ed9b496579a","url":"./tags/Fiddler/index.html"},{"revision":"663747dfc00c8ec5d9b30fad403417fb","url":"./tags/Github/index.html"},{"revision":"0131105e0ef50b8a2ec0c169dd94c15e","url":"./tags/index.html"},{"revision":"77c3a8a06bc9f96050cde935d47b8bbe","url":"./tags/Linux/index.html"},{"revision":"a6c2128b6cf3ca3cbdcaf28676cc6ea4","url":"./tags/PWA/index.html"},{"revision":"1454f0bca1d27a0ad5714defaa240604","url":"./tags/Python/index.html"},{"revision":"32db7a5e269391bc3d96bfab9a47d919","url":"./tags/Web-开发/index.html"},{"revision":"0774ecbeb5564412fc1bfb7c86fe851e","url":"./tags/个人网站/index.html"},{"revision":"1d984856c1dd1034bcd8cb5909c1a0c0","url":"./tags/冒泡排序/index.html"},{"revision":"2e3d4ac7a37733afeb2172268535389b","url":"./tags/圣诞树/index.html"},{"revision":"2e64d18948d94007ea7eb207f88c9095","url":"./tags/崔庆才/index.html"},{"revision":"53f5d7912fc8e2089667ff1347ca2768","url":"./tags/抓包/index.html"},{"revision":"43bdcef9f5a8f1f18d34c6de9ffdc028","url":"./tags/浏览器/index.html"},{"revision":"b9fa992dcc6973b72f7401224f81c805","url":"./tags/爬虫/index.html"},{"revision":"e599fc3a7f7568b8a6b6f907b585d0c2","url":"./tags/生日快乐/index.html"},{"revision":"8c12c0a9bb571c50c4a233261e7ce201","url":"./tags/电脑技巧/index.html"},{"revision":"630535cfa8af9fb71508ea6ef6f6fd6e","url":"./tags/考研/index.html"},{"revision":"bc0eabb2b7213e2e8825afff761467a8","url":"./tags/表白代码/index.html"},{"revision":"cd82e0e8eaf01f518be1e66c655aec5f","url":"./tags/表白程序/index.html"},{"revision":"48d6037d2e5dde1035451990594a3af8","url":"./tags/项目部署/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();