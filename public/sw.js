if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/E71-vbbxKFwH7z3xsLPu_/_buildManifest.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/E71-vbbxKFwH7z3xsLPu_/_ssgManifest.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/106.5375e7244ecb15d2e6a0.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/416.76bc5a3f4e4cc04466ea.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/655-9ff6dff29dc1113fb1ed.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/675-23653c1b51e0ee9e96e3.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/79.015b68603dfe9389dcc6.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/88.87e059e63759a44d95db.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/framework-c93ed74a065331c4bd75.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/main-40601842c0369aa4de36.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/_app-da2b7d24ca7460321fa6.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/cart-e34bbb080dc80c14a998.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/category-2e6a4d41fa6e02f9925f.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/category/%5Bcategory%5D-44ee1c63de9204538101.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/fallback-7d9d06c89a1942eade69.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/index-91e40a5ec87793492a56.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/product/%5B...slug%5D-d978cec596b5606bed44.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/pages/shop-6daa0013239bf4f2c33d.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/chunks/webpack-14f16b0b377d2ec5df1e.js",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/_next/static/css/9854da7a9328130d8a18.css",revision:"E71-vbbxKFwH7z3xsLPu_"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons-shop.png",revision:"3b6f156174cde1a4833da47b7f2cc9f1"},{url:"/icons-toolbox.svg",revision:"97510112d47f89014ddc575519ac47e1"},{url:"/manifest.json",revision:"d4d2fdb1c59d487e1fc5941e2d3a5921"},{url:"/robots.txt",revision:"fd26b6524922d2815e5fc1b348714a3d"},{url:"/sitemap.xml",revision:"93c68c3067f8b7e4f705d05236b3f05a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
