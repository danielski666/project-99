if(!self.define){let e,r={};const o=(o,i)=>(o=new URL(o+".js",i).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let s={};const c=e=>o(e,l),t={module:{uri:l},exports:s,require:c};r[l]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"README"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"project-99/404.html",revision:"401cbbe3722dbb4138f6de797634dbbe"},{url:"project-99/css/app.0d5337c2.css",revision:null},{url:"project-99/css/chunk-vendors.55f06684.css",revision:null},{url:"project-99/img/banner.c8434f2e.jpg",revision:null},{url:"project-99/img/banner2.75c2a326.jpg",revision:null},{url:"project-99/img/banner3.358f6d4f.jpg",revision:null},{url:"project-99/img/book1.2e17c8f9.jpg",revision:null},{url:"project-99/img/book2.4b73d6a8.jpg",revision:null},{url:"project-99/img/book3.79298d14.jpg",revision:null},{url:"project-99/img/book4.3cbe0e09.jpg",revision:null},{url:"project-99/img/book5.d34dbba2.jpg",revision:null},{url:"project-99/img/book6.68e22387.jpg",revision:null},{url:"project-99/img/book7.97d814bb.jpg",revision:null},{url:"project-99/img/book8.62be8fd0.jpg",revision:null},{url:"project-99/index.html",revision:"e99f0f75fd699061a52101b323da73af"},{url:"project-99/js/app.1534a7b3.js",revision:null},{url:"project-99/manifest.json",revision:"0b7248018d68c7cc4169f8a478aae35d"},{url:"project-99/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map