if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TDVJM4O1CcfHuEJBL3YnG/_buildManifest.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/TDVJM4O1CcfHuEJBL3YnG/_ssgManifest.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/675-23653c1b51e0ee9e96e3.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/main-40601842c0369aa4de36.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/_app-2c8534b24101ba2c2e88.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/cart-4b5776ee36b58dc9d328.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/carts-0289d62df75156ad72f9.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/category-b92a64438352bd2780f1.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/category/%5Bcategory%5D-6d32e739bc3dc616b74f.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/fallback-185a2e2f6aa473d287a9.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/index-6dc4c618639613343c30.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/product-b46da988affa5c174174.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/product/%5B...slug%5D-e6322c159242c2da9501.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/pages/shop-88ba03cce8487f8cfed1.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/chunks/webpack-61095c13c5984b221292.js",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/_next/static/css/e6cff2fa2f1eaaa60e7f.css",revision:"TDVJM4O1CcfHuEJBL3YnG"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons-shop.png",revision:"3b6f156174cde1a4833da47b7f2cc9f1"},{url:"/icons-toolbox.svg",revision:"97510112d47f89014ddc575519ac47e1"},{url:"/manifest.json",revision:"d4d2fdb1c59d487e1fc5941e2d3a5921"},{url:"/robots.txt",revision:"cce8bab66586fa95788f1c75871e7723"},{url:"/sitemap.xml",revision:"ab5a54090e380d1e10086ef51397e60e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
