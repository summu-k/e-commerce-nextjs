if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/106.86da9a4bb63298a1b375.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/416.a1eb19e977ccbf58634b.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/655-9ff6dff29dc1113fb1ed.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/675-23653c1b51e0ee9e96e3.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/701-ab69083f44bbda0c1355.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/79.015b68603dfe9389dcc6.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/88.87e059e63759a44d95db.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/d7eeaac4-3fa10d340ef3f282247f.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/framework-c93ed74a065331c4bd75.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/main-40601842c0369aa4de36.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/_app-7b73cd564109a528ae49.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/cart-e34bbb080dc80c14a998.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/category-2e6a4d41fa6e02f9925f.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/category/%5Bcategory%5D-44ee1c63de9204538101.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/fallback-7d9d06c89a1942eade69.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/index-e93b55aa3747a2b26cbf.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/product/%5B...slug%5D-d978cec596b5606bed44.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/shop-97a464c060018c160447.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/slideCompare-4d214023bcc37a65456b.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/pages/wishlist-1d8759f8883a54864335.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/chunks/webpack-eadc96003b164792e44d.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/css/d884cc2672b07adc95b6.css",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/gnjY3JtdpVPy-vYKdLIFr/_buildManifest.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/_next/static/gnjY3JtdpVPy-vYKdLIFr/_ssgManifest.js",revision:"gnjY3JtdpVPy-vYKdLIFr"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons-shop.png",revision:"3b6f156174cde1a4833da47b7f2cc9f1"},{url:"/icons-toolbox.svg",revision:"97510112d47f89014ddc575519ac47e1"},{url:"/manifest.json",revision:"d4d2fdb1c59d487e1fc5941e2d3a5921"},{url:"/robots.txt",revision:"fd26b6524922d2815e5fc1b348714a3d"},{url:"/sitemap.xml",revision:"f1bc9f113e80d90b1aa0c49037b72117"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
