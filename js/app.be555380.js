(function(e){function t(t){for(var a,o,i=t[0],l=t[1],s=t[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},u=[];function i(e){return l.p+"js/"+({About:"About",Home:"Home"}[e]||e)+"."+{About:"0d85934e",Home:"5b593131"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={Home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({About:"About",Home:"Home"}[e]||e)+"."+{About:"31d6cfe0",Home:"7e3bdf34"}[e]+".css",r=l.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],c=s.getAttribute("data-href");if(c===a||c===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=u);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var f=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2216:function(e,t,n){},"49f8":function(e,t,n){var a={"./en-US.json":"e0e1","./zh-TW.json":"9ea5"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("0fae");var a=n("9e2f"),o=n.n(a),r=(n("e623"),n("e379"),n("5dc8"),n("37e1"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("common-header"),n("router-view"),n("common-footer")],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("link_home")))]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v(e._s(e.$t("link_about")))])],1),n("div",{staticClass:"language"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.language=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"zh-TW"}},[e._v(e._s(e.$t("language_chinese")))]),n("option",{attrs:{value:"en-US"}},[e._v(e._s(e.$t("language_english")))])])])])},s=[],c=(n("ac1f"),n("1276"),{langRegex:/^\/[a-z]{2}-[A-Z]{2}/}),f={data:function(){return{language:c.langRegex.test(location.pathname)?location.pathname.split("/")[1]:"zh-TW"}},watch:{language:function(e){this.changeLang(e)}}},p=f,d=(n("f2ec"),n("2877")),h=Object(d["a"])(p,l,s,!1,null,"56ceb522",null),g=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("footer")])},v=[],b={},_=Object(d["a"])(b,m,v,!1,null,null,null),y=_.exports,w={components:{commonHeader:g,commonFooter:y}},O=w,k=(n("777b"),n("5c64"),Object(d["a"])(O,u,i,!1,null,"16718c05",null)),x=k.exports,j=(n("d3b7"),n("8c4f"));r["default"].use(j["a"]);var A=[{path:"/:lang",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/:lang/about",name:"About",component:function(){return n.e("About").then(n.bind(null,"f820"))}}],E=new j["a"]({mode:"history",base:"/",routes:A});E.beforeEach((function(e,t,n){"/"===e.path?n({path:"/"+(location.pathname.split("/")[1]||"zh-TW")}):c.langRegex.test(e.fullPath)?n():n({path:"/"+(c.langRegex.test(location.pathname)?location.pathname.split("/")[1]||t.params.lang:"zh-TW")+e.path})}));var T=E,S=n("2f62");r["default"].use(S["a"]);var H=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=n("a925");n("4160"),n("466d"),n("159b"),n("ddb0");function P(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];t[o]=e(n)}})),t}r["default"].use(C["a"]);var N=new C["a"]({locale:location.pathname.split("/")[1]||"zh-TW",fallbackLocale:"zh-TW",messages:P()}),$=(n("a15b"),{methods:{changeLang:function(e){var t=this.$route.path.split("/");t[1]=this.$i18n.locale=e,t=t.join("/"),history.replaceState({},document.head.title,t)}}});n("4989"),n("ab8b");r["default"].use(o.a),r["default"].mixin($),r["default"].use(C["a"]),r["default"].config.productionTip=!1,new r["default"]({router:T,store:H,i18n:N,render:function(e){return e(x)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";var a=n("d32a"),o=n.n(a);o.a},"6ab6":function(e,t,n){},"777b":function(e,t,n){"use strict";var a=n("2216"),o=n.n(a);o.a},"9ea5":function(e){e.exports=JSON.parse('{"message":"哈囉世界！","aboutpage":"這是關於頁面","link_home":"首頁","link_about":"關於","language_chinese":"中文","language_english":"English"}')},d32a:function(e,t,n){},e0e1:function(e){e.exports=JSON.parse('{"message":"Hello World !","aboutpage":"This is an about page","link_home":"Home","link_about":"About","language_chinese":"中文","language_english":"English"}')},f2ec:function(e,t,n){"use strict";var a=n("6ab6"),o=n.n(a);o.a}});
//# sourceMappingURL=app.be555380.js.map