/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa10072e1277e1e489ba5b4d4ee32afb"
  },
  {
    "url": "assets/css/0.styles.26047e9a.css",
    "revision": "0740bbc65e24bcec9fe967a4604ac700"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ee4ed3c6.js",
    "revision": "b417954b05230e8defe9d5f900773ba4"
  },
  {
    "url": "assets/js/11.467615b9.js",
    "revision": "f84aed8c91449c00862afd54561a8f1a"
  },
  {
    "url": "assets/js/12.6022d75e.js",
    "revision": "b4bac8bd010ae67c416b0127fe9af262"
  },
  {
    "url": "assets/js/13.b74f4730.js",
    "revision": "338c2951c5d9381737b4ad63954a00c0"
  },
  {
    "url": "assets/js/14.16bc6703.js",
    "revision": "2e76770a5eb1224a865f1d95f38b606f"
  },
  {
    "url": "assets/js/15.b2a2c70a.js",
    "revision": "617241eaf0373189d0350f43516d880c"
  },
  {
    "url": "assets/js/16.16aff3dd.js",
    "revision": "c7c71aca44892f7a47bd00c5b731a533"
  },
  {
    "url": "assets/js/17.e92fb19a.js",
    "revision": "1c43ac6c7fa233207fa33f7988fb8af9"
  },
  {
    "url": "assets/js/18.029f34a1.js",
    "revision": "6aea71561250aab46af5b6144808f2b6"
  },
  {
    "url": "assets/js/19.05cb4c74.js",
    "revision": "b467ac6c4826ee434755c68b75e5dec5"
  },
  {
    "url": "assets/js/2.9c83fda1.js",
    "revision": "7e52085c8378f1b93b54da31975c8a91"
  },
  {
    "url": "assets/js/20.269187c7.js",
    "revision": "c25869b6c46284ab1103365ed6f35818"
  },
  {
    "url": "assets/js/21.bb8ba48a.js",
    "revision": "1f9bedeca6b8bec8eabf730aab1e94d8"
  },
  {
    "url": "assets/js/22.3ae550ed.js",
    "revision": "3c71a0dc7c9b0f9e8f03a0ba2af5092f"
  },
  {
    "url": "assets/js/23.fd1aa42f.js",
    "revision": "18bd7891693a72af61b7b3f6d09810d4"
  },
  {
    "url": "assets/js/24.da208f76.js",
    "revision": "9ebd0b2df2d75c5d9ca9dd6468624d7e"
  },
  {
    "url": "assets/js/25.0da14ab4.js",
    "revision": "b702e65901a5a4d5c151d6e496c806be"
  },
  {
    "url": "assets/js/26.db8227de.js",
    "revision": "d36f849037da34cded694cc8ddecad55"
  },
  {
    "url": "assets/js/27.4c9e9654.js",
    "revision": "91b8d03ebe6787fc1abb64eefbebf7be"
  },
  {
    "url": "assets/js/28.54a222e6.js",
    "revision": "bf34caca2b65bc76dd3b6a4a9b2d2f11"
  },
  {
    "url": "assets/js/29.bf2a75a3.js",
    "revision": "c3b28ae4cc750a56762a2810d19ad976"
  },
  {
    "url": "assets/js/3.6456fe17.js",
    "revision": "f76b69c660ec553a5f8f5660c1789a42"
  },
  {
    "url": "assets/js/30.1a834a5c.js",
    "revision": "b10466163ce1734b12c37694fe164f51"
  },
  {
    "url": "assets/js/31.e898f5f2.js",
    "revision": "28e72028814a2e612def028f0cf0d78f"
  },
  {
    "url": "assets/js/32.1235ec14.js",
    "revision": "328cb1505726aec70de3d62c5776eb72"
  },
  {
    "url": "assets/js/33.abbed48e.js",
    "revision": "018f8b97f44b57a747ed0b55b94bb328"
  },
  {
    "url": "assets/js/34.4b01380f.js",
    "revision": "9c394ad6c9ada6bf6e0800d83a8490cc"
  },
  {
    "url": "assets/js/35.3d8d8b6b.js",
    "revision": "93057f46145cf412fc3cec58b5cfca93"
  },
  {
    "url": "assets/js/36.6466eb8a.js",
    "revision": "43ad28ed13a18603790300617d2b68c1"
  },
  {
    "url": "assets/js/37.d63216a3.js",
    "revision": "24d2d5eb82c1c514dda03eb9e4239c4b"
  },
  {
    "url": "assets/js/38.5f244a36.js",
    "revision": "304e5e67bf94eb42ceb4de096b9b107e"
  },
  {
    "url": "assets/js/39.292a3e39.js",
    "revision": "6e0fc3649c760c1a4a2795198a64c621"
  },
  {
    "url": "assets/js/4.54ba1511.js",
    "revision": "569fd4ef7d56ebae9ed40e78314093f0"
  },
  {
    "url": "assets/js/40.feb4961e.js",
    "revision": "2b04417a92323081b34b7b470e801a68"
  },
  {
    "url": "assets/js/5.d4e734fc.js",
    "revision": "c0548c75b741aa2509982ce8afd72ebb"
  },
  {
    "url": "assets/js/6.dd985d23.js",
    "revision": "faf5d630b815f7e252d87773ed1b66e5"
  },
  {
    "url": "assets/js/7.98d61040.js",
    "revision": "90f40f18601d0604376fc0bd74d4efeb"
  },
  {
    "url": "assets/js/8.86f42866.js",
    "revision": "21f8c66da0396cb34033c19a1f6b74c2"
  },
  {
    "url": "assets/js/9.5dff1e2d.js",
    "revision": "5f678933e0c5d8036d07dca7ec7ba3cc"
  },
  {
    "url": "assets/js/app.9947d21f.js",
    "revision": "ef981671c8ee11dfb835f7144a4f93ce"
  },
  {
    "url": "grax/api.html",
    "revision": "922ec7efb1e03472d9b021af85aacd9e"
  },
  {
    "url": "grax/bak/links.bak.html",
    "revision": "b3e903a9f0bcac48d57ac89525049583"
  },
  {
    "url": "grax/bak/links.html",
    "revision": "0b396c3394e14263e525b1c682390979"
  },
  {
    "url": "grax/bak/schema.bak.html",
    "revision": "d3984357fa736b04570cb4aa33a9944c"
  },
  {
    "url": "grax/ids.html",
    "revision": "ce7a12dd781ab62a36f30352c579d336"
  },
  {
    "url": "grax/index.html",
    "revision": "ddb6709addbf092eb1101751572e37ab"
  },
  {
    "url": "grax/installation.html",
    "revision": "6101badba970ccb80fb29c138256527c"
  },
  {
    "url": "grax/schemas.html",
    "revision": "64bd349c464190cc24ecaecd87eef3f3"
  },
  {
    "url": "hero.png",
    "revision": "e6d40cb4de8bd46acaf93421780b02e4"
  },
  {
    "url": "icons/favicon-114-precomposed.png",
    "revision": "0b28ad63392e42e335a2844606dbd483"
  },
  {
    "url": "icons/favicon-120-precomposed.png",
    "revision": "37778f591ab5fecac37b832107765713"
  },
  {
    "url": "icons/favicon-144-precomposed.png",
    "revision": "3468b4fe60f74af6e657ff4ce6f511d2"
  },
  {
    "url": "icons/favicon-152-precomposed.png",
    "revision": "b24ece2db369a2dd5c127bf0e2efe948"
  },
  {
    "url": "icons/favicon-180-precomposed.png",
    "revision": "22e5617d034ae7589b907ac907ccb8e6"
  },
  {
    "url": "icons/favicon-192.png",
    "revision": "f42d1bd9195bf70245060cab9356adc5"
  },
  {
    "url": "icons/favicon-32.png",
    "revision": "0b2d8c1bea1c7c129fc5266b939a47c3"
  },
  {
    "url": "icons/favicon-36.png",
    "revision": "417b07e996b1ae5e871f26a7639f4192"
  },
  {
    "url": "icons/favicon-48.png",
    "revision": "9cb53cb26f9241d1a045499ccd1a6767"
  },
  {
    "url": "icons/favicon-57.png",
    "revision": "d030c1daa05dc053cbe2c83a32d30216"
  },
  {
    "url": "icons/favicon-60.png",
    "revision": "be896a64c9470a3be4dc7c051620bf5a"
  },
  {
    "url": "icons/favicon-72-precomposed.png",
    "revision": "f1d84226665a08108aef297053e4ec2b"
  },
  {
    "url": "icons/favicon-72.png",
    "revision": "f1d84226665a08108aef297053e4ec2b"
  },
  {
    "url": "icons/favicon-76.png",
    "revision": "17b172f92698bc7e99b8268090122a18"
  },
  {
    "url": "icons/favicon-96.png",
    "revision": "88dd1d695a4df741073b0579ba9850cb"
  },
  {
    "url": "index.html",
    "revision": "95394c5b58abd139a8ecf33a0ab716ce"
  },
  {
    "url": "links.html",
    "revision": "c3401c40fb8ed94283a94f1fc1d8978f"
  },
  {
    "url": "rdf-ex/blank-nodes.html",
    "revision": "1f66946822ab0f99c1865f822f5606d9"
  },
  {
    "url": "rdf-ex/data-structures.html",
    "revision": "3bee0d49c8cf94bbfa8ff4d0b9d29f44"
  },
  {
    "url": "rdf-ex/index.html",
    "revision": "73b214dcfc6b4269dc72dc4ecbf661e8"
  },
  {
    "url": "rdf-ex/installation.html",
    "revision": "e9836c737bc344a6f48779032ab9db1f"
  },
  {
    "url": "rdf-ex/iris.html",
    "revision": "79e6a913e404db06b49c39d0bb7605a9"
  },
  {
    "url": "rdf-ex/lists.html",
    "revision": "d77b2ecc286f91e2ebee69ba20441c1b"
  },
  {
    "url": "rdf-ex/literals.html",
    "revision": "ad41ba410d051f3f8e25c18ecf66f4c7"
  },
  {
    "url": "rdf-ex/mapping-between-rdf-and-elixir.html",
    "revision": "dc5aca37c96633081ef2d01727fd2eac"
  },
  {
    "url": "rdf-ex/serializations.html",
    "revision": "9348e95095bb381d9c15e1a790392b2b"
  },
  {
    "url": "rdf-ex/statements.html",
    "revision": "1544ad9f3a2260e843c9c72dbdbc74b7"
  },
  {
    "url": "rdf-ex/vocabularies.html",
    "revision": "9d6e0bfbdb5e477752209d6237e14550"
  },
  {
    "url": "shex-ex/index.html",
    "revision": "c8a2f6cd2cc2b405c437375b40683631"
  },
  {
    "url": "shex-ex/installation.html",
    "revision": "a87d895aae1463d567c528cc46650901"
  },
  {
    "url": "shex-ex/limitations.html",
    "revision": "7b782e3cbcaa42dca6f063bd9b6f1907"
  },
  {
    "url": "shex-ex/shape-maps.html",
    "revision": "a3d5e5012ce46bda5d3efb923854b5c0"
  },
  {
    "url": "shex-ex/validation.html",
    "revision": "f89f7f798cbbb5003769ed7062179c78"
  },
  {
    "url": "sparql-ex/default-prefixes.html",
    "revision": "da4843e72f0f45bdefc10373bb499ce2"
  },
  {
    "url": "sparql-ex/defining-extension-functions.html",
    "revision": "502259ca1182b0566a6b10f0f7310213"
  },
  {
    "url": "sparql-ex/executing-queries.html",
    "revision": "4a57b1aa3d8c3ecaa1b029d356e6dedc"
  },
  {
    "url": "sparql-ex/index.html",
    "revision": "fadfd763f465c269ba83c5fea5f59dfd"
  },
  {
    "url": "sparql-ex/installation.html",
    "revision": "4f5a0ef5c931a3f5670cd4c23c729530"
  },
  {
    "url": "sparql-ex/limitations.html",
    "revision": "f2e3cb3f5e02d3fd8d627cee53c909e5"
  },
  {
    "url": "sparql-ex/sparql-client-configuration.html",
    "revision": "e1278e1264477149ea7e423419fcc5b5"
  },
  {
    "url": "sparql-ex/sparql-client.html",
    "revision": "2405381f24866d5d3bcc27a28d585a90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
