if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),a={module:{uri:r},exports:t,require:o};s[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(l(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.7dd03d07.js",revision:null},{url:"assets/index.9b7cd237.css",revision:null},{url:"assets/ListView.16d57f67.css",revision:null},{url:"assets/ListView.60edc19f.js",revision:null},{url:"assets/materialdesignicons-webfont.48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont.861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont.bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont.e52d60f6.woff2",revision:null},{url:"assets/SettingsView.03bbe683.js",revision:null},{url:"assets/SettingsView.8b736ac7.css",revision:null},{url:"assets/VTable.41a8559d.css",revision:null},{url:"assets/VTable.831bf751.js",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon.ico",revision:"25e23892d1b98272cdeb2d655319c3eb"},{url:"index.html",revision:"44050f96639ada110bf8476f108b60bc"},{url:"manifest.webmanifest",revision:"abbee9bbfb676fb652cc59380e8a89ca"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
