if(!self.define){let e,r={};const o=(o,i)=>(o=new URL(o+".js",i).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let c={};const s=e=>o(e,l),t={module:{uri:l},exports:c,require:s};r[l]=Promise.all(i.map((e=>t[e]||s(e)))).then((e=>(n(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ecommercevuefirestore"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/project-99/404.html",revision:"401cbbe3722dbb4138f6de797634dbbe"},{url:"/project-99/css/app.2b13946e.css",revision:null},{url:"/project-99/css/chunk-vendors.55f06684.css",revision:null},{url:"/project-99/img/banner.05207f99.jpg",revision:null},{url:"/project-99/img/banner2.16591f91.jpg",revision:null},{url:"/project-99/img/banner3.0588b5fb.jpg",revision:null},{url:"/project-99/img/book1.2e17c8f9.jpg",revision:null},{url:"/project-99/img/book2.f583b865.jpg",revision:null},{url:"/project-99/img/book3.79298d14.jpg",revision:null},{url:"/project-99/img/book4.ef88cc5a.jpg",revision:null},{url:"/project-99/img/book5.6aedac67.jpg",revision:null},{url:"/project-99/img/book6.50474c29.jpg",revision:null},{url:"/project-99/img/book7.f2000d46.jpg",revision:null},{url:"/project-99/img/book8.9fd617d1.jpg",revision:null},{url:"/project-99/index.html",revision:"813d6b6f99dc7c8c4e1c7bf3fb0e8e44"},{url:"/project-99/js/app.5e8c6075.js",revision:null},{url:"/project-99/manifest.json",revision:"220c384cf7732157e30977a33624d0a0"},{url:"/project-99/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
