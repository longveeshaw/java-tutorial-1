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
    "revision": "e47ebbe6378bac3cae7cb2d6f74ba5ab"
  },
  {
    "url": "assets/css/0.styles.34a47730.css",
    "revision": "34d40aaa9f48dbe923641b80871eda00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0df1e44a.js",
    "revision": "42c6256e61b4c3cbfd9c371921367347"
  },
  {
    "url": "assets/js/11.0220e92b.js",
    "revision": "71e87280a12b3e82a69c7d4b7503516b"
  },
  {
    "url": "assets/js/12.7d70f912.js",
    "revision": "5c6086ce971c3c23c46dec1c2891e9af"
  },
  {
    "url": "assets/js/13.3e2e9ccc.js",
    "revision": "fad987e4d2c6926c38a9e9cd1ae78956"
  },
  {
    "url": "assets/js/14.ddb7e9a6.js",
    "revision": "8d6ce24f171051d71639881ff60fd75b"
  },
  {
    "url": "assets/js/15.0f33ceb0.js",
    "revision": "c6427a7b85e7ff578045136c60c26833"
  },
  {
    "url": "assets/js/16.f1d826a0.js",
    "revision": "54b2c283b2b2fa950a00d639cb263b4a"
  },
  {
    "url": "assets/js/17.cc39bf54.js",
    "revision": "46aa499e631182135dd02ea7f86d381e"
  },
  {
    "url": "assets/js/18.6a89f356.js",
    "revision": "d4c43eb669eccfcb9271e4e46a8d41a2"
  },
  {
    "url": "assets/js/19.b563868d.js",
    "revision": "00764e57fcdfab1245f18f2cd894d2ec"
  },
  {
    "url": "assets/js/20.d32e019d.js",
    "revision": "79fff88f8ff92a22c32797e3d1fafe72"
  },
  {
    "url": "assets/js/21.96f4f13f.js",
    "revision": "9048f38393fbd7bc774712b1d925d391"
  },
  {
    "url": "assets/js/22.9109e167.js",
    "revision": "bba26ac7884c64a70327f2a30fe26c54"
  },
  {
    "url": "assets/js/23.a48a27a0.js",
    "revision": "2c910d1bcfb653437755ce6711f93be0"
  },
  {
    "url": "assets/js/24.448d2d8e.js",
    "revision": "8cb36f00236edaaea0afa7e682c9b43d"
  },
  {
    "url": "assets/js/25.8ad99008.js",
    "revision": "a968cd3f1a092fe541537e67915a0150"
  },
  {
    "url": "assets/js/26.38604c96.js",
    "revision": "d63a187875251cc9943f266b94b26dff"
  },
  {
    "url": "assets/js/27.e2ff3a71.js",
    "revision": "2aa49062d3d475806728d4deb645410b"
  },
  {
    "url": "assets/js/28.fd06ca74.js",
    "revision": "a33cdc099ab40c2b8a45635c96dd1238"
  },
  {
    "url": "assets/js/29.87d7926e.js",
    "revision": "db60dadcb2ad3441572d69dc69f13cf4"
  },
  {
    "url": "assets/js/30.5938850b.js",
    "revision": "ff41ba70211b5840a5f6270efe15a131"
  },
  {
    "url": "assets/js/31.c8c8ab47.js",
    "revision": "fcf44d9bac937457f4974b9dc6c7b3a0"
  },
  {
    "url": "assets/js/32.abf46c9d.js",
    "revision": "1dbfcf05e48baaa575bf226a948d59b0"
  },
  {
    "url": "assets/js/33.a2b069c5.js",
    "revision": "9a7fd65d0f60471de3b881cb8f1ff9fb"
  },
  {
    "url": "assets/js/34.220e5e41.js",
    "revision": "17c17117266b15a8514258aea4b03f4f"
  },
  {
    "url": "assets/js/35.323dfd25.js",
    "revision": "b142a7e829124954447412e15be48a17"
  },
  {
    "url": "assets/js/4.885bf8b1.js",
    "revision": "bb62972cdaa977785e85a5f0fcd87971"
  },
  {
    "url": "assets/js/5.125e51f4.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/6.1ffb608f.js",
    "revision": "ea9e79bda5684504822949f1aa98c27a"
  },
  {
    "url": "assets/js/7.9d3f0238.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.6f56d7fe.js",
    "revision": "2836e687581ebff6f7e662d8147d724c"
  },
  {
    "url": "assets/js/9.20328517.js",
    "revision": "2f06a341d22bb96cb01ecb33c6319948"
  },
  {
    "url": "assets/js/app.5e122519.js",
    "revision": "f78de3c137e0f73b89dc5e1015059dfa"
  },
  {
    "url": "assets/js/vendors~flowchart.9febe83d.js",
    "revision": "f9158ce3d1979db8d5760695c48b8602"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "9ce8519efeebba26be7064d2391e620b"
  },
  {
    "url": "javaee/index.html",
    "revision": "6246f04e2eb8dff72efd8ecab9374b97"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "03f7dfc4f169544663a18a7d8e2a67f2"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "d736cd75158798044a2b76ac86620b73"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "97afc0aa890502d0e60c33a0f0130646"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "a0bf7833a98751bd3ac8e5914d049215"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "53125660414fc1024a9885c0a96f8cba"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "0f9a67d3e4c058753b3b8099cd6d29f8"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "27e49fb3bd995e145954522d171bcd09"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "b83565a84aef307ff746a877995877fb"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "1e50e504de2d42deed4641042d21d907"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "9bcdf117af06c4000763df1261c9188d"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "35f44c60d2754d2284defdf1fa8aba97"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "e62dbad57a4d19b1981e196f2daed23f"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "2e860efc5256a1dc048807bedf8c9506"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "1d19a5e3a5abd8d611e477a5460b7fe9"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "232eadf586f5db040279551337a443ae"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "f2f36580114e820364bb2959c38974cb"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "a53dbea3a2e3b1f3db629cd253e5196a"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "d2aa5b7b913b2bb150521b39a0eefaa2"
  },
  {
    "url": "javatool/index.html",
    "revision": "55ca49e9d573f654a35780b14dd85d95"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "7909f4a41c81435495d4acddb7481881"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "7feedc144b16550515e0718d865b3221"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "efe75a42b2e9e7c530b6b3425b7a7656"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "4a65d2b3742455a75352c1ca391afae8"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "97bbcf89a2b1e1e3b3a3d22106e40ed5"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "6eda77091f8b291adf7ec05c7e53cd7c"
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