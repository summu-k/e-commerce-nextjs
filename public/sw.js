if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/main-40601842c0369aa4de36.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/_app-ea4eaf483ce78d705385.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/cart-54e787864cde196a9658.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/category/%5Bcategory%5D-0244fe09544ab5279691.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/fallback-185a2e2f6aa473d287a9.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/index-e439fe8e0de85053f113.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/product-b46da988affa5c174174.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/product/%5B...slug%5D-8a11b48a0c88b122eeee.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/pages/shop-f08fb533a7ca8be199d2.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/chunks/webpack-672781b4256b347cef75.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/css/94ba161b0e56fc219cfc.css",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/mA01cfyVSKfHrmYle6xhU/_buildManifest.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/_next/static/mA01cfyVSKfHrmYle6xhU/_ssgManifest.js",revision:"mA01cfyVSKfHrmYle6xhU"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons-shop.png",revision:"3b6f156174cde1a4833da47b7f2cc9f1"},{url:"/icons-toolbox.svg",revision:"97510112d47f89014ddc575519ac47e1"},{url:"/manifest.json",revision:"d4399a058f2765c0c572f897b4d4610c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
