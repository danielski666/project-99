(self["webpackChunkecommercevuefirestore"]=self["webpackChunkecommercevuefirestore"]||[]).push([[998],{1001:function(t,e,n){"use strict";function a(t,e,n,a,i,r,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return a}})},9662:function(t,e,n){var a=n(7854),i=n(614),r=n(6330),o=a.TypeError;t.exports=function(t){if(i(t))return t;throw o(r(t)+" is not a function")}},6077:function(t,e,n){var a=n(7854),i=n(614),r=a.String,o=a.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+r(t)+" as a prototype")}},1223:function(t,e,n){var a=n(5112),i=n(30),r=n(3070),o=a("unscopables"),s=Array.prototype;void 0==s[o]&&r.f(s,o,{configurable:!0,value:i(null)}),t.exports=function(t){s[o][t]=!0}},5787:function(t,e,n){var a=n(7854),i=n(7976),r=a.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw r("Incorrect invocation")}},9670:function(t,e,n){var a=n(7854),i=n(111),r=a.String,o=a.TypeError;t.exports=function(t){if(i(t))return t;throw o(r(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var a,i,r,o=n(4019),s=n(9781),l=n(7854),c=n(614),h=n(111),u=n(2597),d=n(648),p=n(6330),f=n(8880),v=n(1320),m=n(3070).f,g=n(7976),y=n(9518),b=n(7674),I=n(5112),w=n(9711),_=l.Int8Array,z=_&&_.prototype,M=l.Uint8ClampedArray,A=M&&M.prototype,B=_&&y(_),V=z&&y(z),C=Object.prototype,H=l.TypeError,T=I("toStringTag"),O=w("TYPED_ARRAY_TAG"),L=w("TYPED_ARRAY_CONSTRUCTOR"),S=o&&!!b&&"Opera"!==d(l.opera),k=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},E={BigInt64Array:8,BigUint64Array:8},x=function(t){if(!h(t))return!1;var e=d(t);return"DataView"===e||u(P,e)||u(E,e)},F=function(t){if(!h(t))return!1;var e=d(t);return u(P,e)||u(E,e)},D=function(t){if(F(t))return t;throw H("Target is not a typed array")},R=function(t){if(c(t)&&(!b||g(B,t)))return t;throw H(p(t)+" is not a typed array constructor")},j=function(t,e,n,a){if(s){if(n)for(var i in P){var r=l[i];if(r&&u(r.prototype,t))try{delete r.prototype[t]}catch(o){try{r.prototype[t]=e}catch(c){}}}V[t]&&!n||v(V,t,n?e:S&&z[t]||e,a)}},N=function(t,e,n){var a,i;if(s){if(b){if(n)for(a in P)if(i=l[a],i&&u(i,t))try{delete i[t]}catch(r){}if(B[t]&&!n)return;try{return v(B,t,n?e:S&&B[t]||e)}catch(r){}}for(a in P)i=l[a],!i||i[t]&&!n||v(i,t,e)}};for(a in P)i=l[a],r=i&&i.prototype,r?f(r,L,i):S=!1;for(a in E)i=l[a],r=i&&i.prototype,r&&f(r,L,i);if((!S||!c(B)||B===Function.prototype)&&(B=function(){throw H("Incorrect invocation")},S))for(a in P)l[a]&&b(l[a],B);if((!S||!V||V===C)&&(V=B.prototype,S))for(a in P)l[a]&&b(l[a].prototype,V);if(S&&y(A)!==V&&b(A,V),s&&!u(V,T))for(a in k=!0,m(V,T,{get:function(){return h(this)?this[O]:void 0}}),P)l[a]&&f(l[a],O,a);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:S,TYPED_ARRAY_CONSTRUCTOR:L,TYPED_ARRAY_TAG:k&&O,aTypedArray:D,aTypedArrayConstructor:R,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:N,isView:x,isTypedArray:F,TypedArray:B,TypedArrayPrototype:V}},1318:function(t,e,n){var a=n(5656),i=n(1400),r=n(6244),o=function(t){return function(e,n,o){var s,l=a(e),c=r(l),h=i(o,c);if(t&&n!=n){while(c>h)if(s=l[h++],s!=s)return!0}else for(;c>h;h++)if((t||h in l)&&l[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},206:function(t,e,n){var a=n(1702);t.exports=a([].slice)},4326:function(t,e,n){var a=n(1702),i=a({}.toString),r=a("".slice);t.exports=function(t){return r(i(t),8,-1)}},648:function(t,e,n){var a=n(7854),i=n(1694),r=n(614),o=n(4326),s=n(5112),l=s("toStringTag"),c=a.Object,h="Arguments"==o(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=c(t),l))?n:h?o(e):"Object"==(a=o(e))&&r(e.callee)?"Arguments":a}},7741:function(t,e,n){var a=n(1702),i=Error,r=a("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(o);t.exports=function(t,e){if(l&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=r(t,s,"");return t}},9920:function(t,e,n){var a=n(2597),i=n(3887),r=n(1236),o=n(3070);t.exports=function(t,e,n){for(var s=i(e),l=o.f,c=r.f,h=0;h<s.length;h++){var u=s[h];a(t,u)||n&&a(n,u)||l(t,u,c(e,u))}}},8544:function(t,e,n){var a=n(7293);t.exports=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var a=n(9781),i=n(3070),r=n(9114);t.exports=a?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var a=n(7293);t.exports=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var a=n(7854),i=n(111),r=a.document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var a=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(a)},5268:function(t,e,n){var a=n(4326),i=n(7854);t.exports="process"==a(i.process)},8113:function(t,e,n){var a=n(5005);t.exports=a("navigator","userAgent")||""},7392:function(t,e,n){var a,i,r=n(7854),o=n(8113),s=r.process,l=r.Deno,c=s&&s.versions||l&&l.version,h=c&&c.v8;h&&(a=h.split("."),i=a[0]>0&&a[0]<4?1:+(a[0]+a[1])),!i&&o&&(a=o.match(/Edge\/(\d+)/),(!a||a[1]>=74)&&(a=o.match(/Chrome\/(\d+)/),a&&(i=+a[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var a=n(7293),i=n(9114);t.exports=!a((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var a=n(7854),i=n(1236).f,r=n(8880),o=n(1320),s=n(3505),l=n(9920),c=n(4705);t.exports=function(t,e){var n,h,u,d,p,f,v=t.target,m=t.global,g=t.stat;if(h=m?a:g?a[v]||s(v,{}):(a[v]||{}).prototype,h)for(u in e){if(p=e[u],t.noTargetGet?(f=i(h,u),d=f&&f.value):d=h[u],n=c(m?u:v+(g?".":"#")+u,t.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(t.sham||d&&d.sham)&&r(p,"sham",!0),o(h,u,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var a=n(4374),i=Function.prototype,r=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(a?o.bind(r):function(){return o.apply(r,arguments)})},9974:function(t,e,n){var a=n(1702),i=n(9662),r=n(4374),o=a(a.bind);t.exports=function(t,e){return i(t),void 0===e?t:r?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var a=n(7293);t.exports=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var a=n(4374),i=Function.prototype.call;t.exports=a?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var a=n(9781),i=n(2597),r=Function.prototype,o=a&&Object.getOwnPropertyDescriptor,s=i(r,"name"),l=s&&"something"===function(){}.name,c=s&&(!a||a&&o(r,"name").configurable);t.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var a=n(4374),i=Function.prototype,r=i.bind,o=i.call,s=a&&r.bind(o,o);t.exports=a?function(t){return t&&s(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var a=n(7854),i=n(614),r=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(a[t]):a[t]&&a[t][e]}},8173:function(t,e,n){var a=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:a(n)}},7854:function(t,e,n){var a=function(t){return t&&t.Math==Math&&t};t.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var a=n(1702),i=n(7908),r=a({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var a=n(5005);t.exports=a("document","documentElement")},4664:function(t,e,n){var a=n(9781),i=n(7293),r=n(317);t.exports=!a&&!i((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var a=n(7854),i=n(1702),r=n(7293),o=n(4326),s=a.Object,l=i("".split);t.exports=r((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?l(t,""):s(t)}:s},9587:function(t,e,n){var a=n(614),i=n(111),r=n(7674);t.exports=function(t,e,n){var o,s;return r&&a(o=e.constructor)&&o!==n&&i(s=o.prototype)&&s!==n.prototype&&r(t,s),t}},2788:function(t,e,n){var a=n(1702),i=n(614),r=n(5465),o=a(Function.toString);i(r.inspectSource)||(r.inspectSource=function(t){return o(t)}),t.exports=r.inspectSource},8340:function(t,e,n){var a=n(111),i=n(8880);t.exports=function(t,e){a(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var a,i,r,o=n(8536),s=n(7854),l=n(1702),c=n(111),h=n(8880),u=n(2597),d=n(5465),p=n(6200),f=n(3501),v="Object already initialized",m=s.TypeError,g=s.WeakMap,y=function(t){return r(t)?i(t):a(t,{})},b=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var I=d.state||(d.state=new g),w=l(I.get),_=l(I.has),z=l(I.set);a=function(t,e){if(_(I,t))throw new m(v);return e.facade=t,z(I,t,e),e},i=function(t){return w(I,t)||{}},r=function(t){return _(I,t)}}else{var M=p("state");f[M]=!0,a=function(t,e){if(u(t,M))throw new m(v);return e.facade=t,h(t,M,e),e},i=function(t){return u(t,M)?t[M]:{}},r=function(t){return u(t,M)}}t.exports={set:a,get:i,has:r,enforce:y,getterFor:b}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var a=n(7293),i=n(614),r=/#|\.prototype\./,o=function(t,e){var n=l[s(t)];return n==h||n!=c&&(i(e)?a(e):!!e)},s=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",h=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var a=n(614);t.exports=function(t){return"object"==typeof t?null!==t:a(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var a=n(7854),i=n(5005),r=n(614),o=n(7976),s=n(3307),l=a.Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&o(e.prototype,l(t))}},6244:function(t,e,n){var a=n(7466);t.exports=function(t){return a(t.length)}},133:function(t,e,n){var a=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&a&&a<41}))},8536:function(t,e,n){var a=n(7854),i=n(614),r=n(2788),o=a.WeakMap;t.exports=i(o)&&/native code/.test(r(o))},6277:function(t,e,n){var a=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:a(t)}},30:function(t,e,n){var a,i=n(9670),r=n(6048),o=n(748),s=n(3501),l=n(490),c=n(317),h=n(6200),u=">",d="<",p="prototype",f="script",v=h("IE_PROTO"),m=function(){},g=function(t){return d+f+u+t+d+"/"+f+u},y=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=c("iframe"),n="java"+f+":";return e.style.display="none",l.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},I=function(){try{a=new ActiveXObject("htmlfile")}catch(e){}I="undefined"!=typeof document?document.domain&&a?y(a):b():y(a);var t=o.length;while(t--)delete I[p][o[t]];return I()};s[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[p]=i(t),n=new m,m[p]=null,n[v]=t):n=I(),void 0===e?n:r.f(n,e)}},6048:function(t,e,n){var a=n(9781),i=n(3353),r=n(3070),o=n(9670),s=n(5656),l=n(1956);e.f=a&&!i?Object.defineProperties:function(t,e){o(t);var n,a=s(e),i=l(e),c=i.length,h=0;while(c>h)r.f(t,n=i[h++],a[n]);return t}},3070:function(t,e,n){var a=n(7854),i=n(9781),r=n(4664),o=n(3353),s=n(9670),l=n(4948),c=a.TypeError,h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",f="writable";e.f=i?o?function(t,e,n){if(s(t),e=l(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var a=u(t,e);a&&a[f]&&(t[e]=n.value,n={configurable:p in n?n[p]:a[p],enumerable:d in n?n[d]:a[d],writable:!1})}return h(t,e,n)}:h:function(t,e,n){if(s(t),e=l(e),s(n),r)try{return h(t,e,n)}catch(a){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var a=n(9781),i=n(6916),r=n(5296),o=n(9114),s=n(5656),l=n(4948),c=n(2597),h=n(4664),u=Object.getOwnPropertyDescriptor;e.f=a?u:function(t,e){if(t=s(t),e=l(e),h)try{return u(t,e)}catch(n){}if(c(t,e))return o(!i(r.f,t,e),t[e])}},8006:function(t,e,n){var a=n(6324),i=n(748),r=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var a=n(7854),i=n(2597),r=n(614),o=n(7908),s=n(6200),l=n(8544),c=s("IE_PROTO"),h=a.Object,u=h.prototype;t.exports=l?h.getPrototypeOf:function(t){var e=o(t);if(i(e,c))return e[c];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof h?u:null}},7976:function(t,e,n){var a=n(1702);t.exports=a({}.isPrototypeOf)},6324:function(t,e,n){var a=n(1702),i=n(2597),r=n(5656),o=n(1318).indexOf,s=n(3501),l=a([].push);t.exports=function(t,e){var n,a=r(t),c=0,h=[];for(n in a)!i(s,n)&&i(a,n)&&l(h,n);while(e.length>c)i(a,n=e[c++])&&(~o(h,n)||l(h,n));return h}},1956:function(t,e,n){var a=n(6324),i=n(748);t.exports=Object.keys||function(t){return a(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!n.call({1:2},1);e.f=i?function(t){var e=a(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var a=n(1702),i=n(9670),r=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=a(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,a){return i(n),r(a),e?t(n,a):n.__proto__=a,n}}():void 0)},2140:function(t,e,n){var a=n(7854),i=n(6916),r=n(614),o=n(111),s=a.TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!o(a=i(n,t)))return a;if(r(n=t.valueOf)&&!o(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!o(a=i(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var a=n(5005),i=n(1702),r=n(8006),o=n(5181),s=n(9670),l=i([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=r.f(s(t)),n=o.f;return n?l(e,n(t)):e}},2626:function(t,e,n){var a=n(3070).f;t.exports=function(t,e,n){n in t||a(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},1320:function(t,e,n){var a=n(7854),i=n(614),r=n(2597),o=n(8880),s=n(3505),l=n(2788),c=n(9909),h=n(6530).CONFIGURABLE,u=c.get,d=c.enforce,p=String(String).split("String");(t.exports=function(t,e,n,l){var c,u=!!l&&!!l.unsafe,f=!!l&&!!l.enumerable,v=!!l&&!!l.noTargetGet,m=l&&void 0!==l.name?l.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!r(n,"name")||h&&n.name!==m)&&o(n,"name",m),c=d(n),c.source||(c.source=p.join("string"==typeof m?m:""))),t!==a?(u?!v&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return i(this)&&u(this).source||l(this)}))},4488:function(t,e,n){var a=n(7854),i=a.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var a=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(a,t,{value:e,configurable:!0,writable:!0})}catch(n){a[t]=e}return e}},6200:function(t,e,n){var a=n(2309),i=n(9711),r=a("keys");t.exports=function(t){return r[t]||(r[t]=i(t))}},5465:function(t,e,n){var a=n(7854),i=n(3505),r="__core-js_shared__",o=a[r]||i(r,{});t.exports=o},2309:function(t,e,n){var a=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.0",mode:a?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE",source:"https://github.com/zloirock/core-js"})},261:function(t,e,n){var a,i,r,o,s=n(7854),l=n(2104),c=n(9974),h=n(614),u=n(2597),d=n(7293),p=n(490),f=n(206),v=n(317),m=n(8053),g=n(6833),y=n(5268),b=s.setImmediate,I=s.clearImmediate,w=s.process,_=s.Dispatch,z=s.Function,M=s.MessageChannel,A=s.String,B=0,V={},C="onreadystatechange";try{a=s.location}catch(S){}var H=function(t){if(u(V,t)){var e=V[t];delete V[t],e()}},T=function(t){return function(){H(t)}},O=function(t){H(t.data)},L=function(t){s.postMessage(A(t),a.protocol+"//"+a.host)};b&&I||(b=function(t){m(arguments.length,1);var e=h(t)?t:z(t),n=f(arguments,1);return V[++B]=function(){l(e,void 0,n)},i(B),B},I=function(t){delete V[t]},y?i=function(t){w.nextTick(T(t))}:_&&_.now?i=function(t){_.now(T(t))}:M&&!g?(r=new M,o=r.port2,r.port1.onmessage=O,i=c(o.postMessage,o)):s.addEventListener&&h(s.postMessage)&&!s.importScripts&&a&&"file:"!==a.protocol&&!d(L)?(i=L,s.addEventListener("message",O,!1)):i=C in v("script")?function(t){p.appendChild(v("script"))[C]=function(){p.removeChild(this),H(t)}}:function(t){setTimeout(T(t),0)}),t.exports={set:b,clear:I}},1400:function(t,e,n){var a=n(9303),i=Math.max,r=Math.min;t.exports=function(t,e){var n=a(t);return n<0?i(n+e,0):r(n,e)}},5656:function(t,e,n){var a=n(8361),i=n(4488);t.exports=function(t){return a(i(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var a=+t;return a!==a||0===a?0:(a>0?n:e)(a)}},7466:function(t,e,n){var a=n(9303),i=Math.min;t.exports=function(t){return t>0?i(a(t),9007199254740991):0}},7908:function(t,e,n){var a=n(7854),i=n(4488),r=a.Object;t.exports=function(t){return r(i(t))}},4590:function(t,e,n){var a=n(7854),i=n(3002),r=a.RangeError;t.exports=function(t,e){var n=i(t);if(n%e)throw r("Wrong offset");return n}},3002:function(t,e,n){var a=n(7854),i=n(9303),r=a.RangeError;t.exports=function(t){var e=i(t);if(e<0)throw r("The argument can't be less than 0");return e}},7593:function(t,e,n){var a=n(7854),i=n(6916),r=n(111),o=n(2190),s=n(8173),l=n(2140),c=n(5112),h=a.TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,a=s(t,u);if(a){if(void 0===e&&(e="default"),n=i(a,t,e),!r(n)||o(n))return n;throw h("Can't convert object to primitive value")}return void 0===e&&(e="number"),l(t,e)}},4948:function(t,e,n){var a=n(7593),i=n(2190);t.exports=function(t){var e=a(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var a=n(5112),i=a("toStringTag"),r={};r[i]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var a=n(7854),i=n(648),r=a.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},6330:function(t,e,n){var a=n(7854),i=a.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},9711:function(t,e,n){var a=n(1702),i=0,r=Math.random(),o=a(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+r,36)}},3307:function(t,e,n){var a=n(133);t.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var a=n(9781),i=n(7293);t.exports=a&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t,e,n){var a=n(7854),i=a.TypeError;t.exports=function(t,e){if(t<e)throw i("Not enough arguments");return t}},5112:function(t,e,n){var a=n(7854),i=n(2309),r=n(2597),o=n(9711),s=n(133),l=n(3307),c=i("wks"),h=a.Symbol,u=h&&h["for"],d=l?h:h&&h.withoutSetter||o;t.exports=function(t){if(!r(c,t)||!s&&"string"!=typeof c[t]){var e="Symbol."+t;s&&r(h,t)?c[t]=h[t]:c[t]=l&&u?u(e):d(e)}return c[t]}},9191:function(t,e,n){"use strict";var a=n(5005),i=n(2597),r=n(8880),o=n(7976),s=n(7674),l=n(9920),c=n(2626),h=n(9587),u=n(6277),d=n(8340),p=n(7741),f=n(2914),v=n(9781),m=n(1913);t.exports=function(t,e,n,g){var y="stackTraceLimit",b=g?2:1,I=t.split("."),w=I[I.length-1],_=a.apply(null,I);if(_){var z=_.prototype;if(!m&&i(z,"cause")&&delete z.cause,!n)return _;var M=a("Error"),A=e((function(t,e){var n=u(g?e:t,void 0),a=g?new _(t):new _;return void 0!==n&&r(a,"message",n),f&&r(a,"stack",p(a.stack,2)),this&&o(z,this)&&h(a,this,A),arguments.length>b&&d(a,arguments[b]),a}));if(A.prototype=z,"Error"!==w?s?s(A,M):l(A,M,{name:!0}):v&&y in _&&(c(A,_,y),c(A,_,"prepareStackTrace")),l(A,_),!m)try{z.name!==w&&r(z,"name",w),z.constructor=A}catch(B){}return A}}},2262:function(t,e,n){"use strict";var a=n(2109),i=n(7908),r=n(6244),o=n(9303),s=n(1223);a({target:"Array",proto:!0},{at:function(t){var e=i(this),n=r(e),a=o(t),s=a>=0?a:n+a;return s<0||s>=n?void 0:e[s]}}),s("at")},1703:function(t,e,n){var a=n(2109),i=n(7854),r=n(2104),o=n(9191),s="WebAssembly",l=i[s],c=7!==Error("e",{cause:7}).cause,h=function(t,e){var n={};n[t]=o(t,e,c),a({global:!0,forced:c},n)},u=function(t,e){if(l&&l[t]){var n={};n[t]=o(s+"."+t,e,c),a({target:s,stat:!0,forced:c},n)}};h("Error",(function(t){return function(e){return r(t,this,arguments)}})),h("EvalError",(function(t){return function(e){return r(t,this,arguments)}})),h("RangeError",(function(t){return function(e){return r(t,this,arguments)}})),h("ReferenceError",(function(t){return function(e){return r(t,this,arguments)}})),h("SyntaxError",(function(t){return function(e){return r(t,this,arguments)}})),h("TypeError",(function(t){return function(e){return r(t,this,arguments)}})),h("URIError",(function(t){return function(e){return r(t,this,arguments)}})),u("CompileError",(function(t){return function(e){return r(t,this,arguments)}})),u("LinkError",(function(t){return function(e){return r(t,this,arguments)}})),u("RuntimeError",(function(t){return function(e){return r(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var a=n(2109),i=n(1702),r=n(4488),o=n(9303),s=n(1340),l=n(7293),c=i("".charAt),h=l((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:h},{at:function(t){var e=s(r(this)),n=e.length,a=o(t),i=a>=0?a:n+a;return i<0||i>=n?void 0:c(e,i)}})},8675:function(t,e,n){"use strict";var a=n(260),i=n(6244),r=n(9303),o=a.aTypedArray,s=a.exportTypedArrayMethod;s("at",(function(t){var e=o(this),n=i(e),a=r(t),s=a>=0?a:n+a;return s<0||s>=n?void 0:e[s]}))},3462:function(t,e,n){"use strict";var a=n(7854),i=n(6916),r=n(260),o=n(6244),s=n(4590),l=n(7908),c=n(7293),h=a.RangeError,u=a.Int8Array,d=u&&u.prototype,p=d&&d.set,f=r.aTypedArray,v=r.exportTypedArrayMethod,m=!c((function(){var t=new Uint8ClampedArray(2);return i(p,t,{length:1,0:3},1),3!==t[1]})),g=m&&r.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new u(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));v("set",(function(t){f(this);var e=s(arguments.length>1?arguments[1]:void 0,1),n=l(t);if(m)return i(p,this,n,e);var a=this.length,r=o(n),c=0;if(r+e>a)throw h("Wrong length");while(c<r)this[e+c]=n[c++]}),!m||g)},1091:function(t,e,n){var a=n(2109),i=n(7854),r=n(261).clear;a({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==r},{clearImmediate:r})},2801:function(t,e,n){"use strict";var a=n(2109),i=n(5005),r=n(9114),o=n(3070).f,s=n(2597),l=n(5787),c=n(9587),h=n(6277),u=n(3678),d=n(7741),p=n(1913),f="DOMException",v=i("Error"),m=i(f),g=function(){l(this,y);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),a=new m(e,n),i=v(e);return i.name=f,o(a,"stack",r(1,d(i.stack,1))),c(a,this,g),a},y=g.prototype=m.prototype,b="stack"in v(f),I="stack"in new m(1,2),w=b&&!I;a({global:!0,forced:p||w},{DOMException:w?g:m});var _=i(f),z=_.prototype;if(z.constructor!==_)for(var M in p||o(z,"constructor",r(1,_)),u)if(s(u,M)){var A=u[M],B=A.s;s(_,B)||o(_,B,r(6,A.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var a=n(2109),i=n(7854),r=n(261).set;a({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==r},{setImmediate:r})},44:function(){},2821:function(t,e,n){"use strict";n.d(e,{$:function(){return We},A:function(){return d},B:function(){return m},C:function(){return y},D:function(){return O},E:function(){return Dt},F:function(){return l},G:function(){return $t},H:function(){return ne},I:function(){return re},J:function(){return ue},K:function(){return yt},L:function(){return me},M:function(){return Ie},N:function(){return we},O:function(){return u},P:function(){return qa},Q:function(){return _e},R:function(){return Fa},S:function(){return h},T:function(){return be},U:function(){return Be},V:function(){return Ve},W:function(){return Oe},X:function(){return Re},Y:function(){return je},Z:function(){return Ne},_:function(){return $e},a:function(){return qn},a0:function(){return Ke},a1:function(){return Ye},a2:function(){return Xe},a3:function(){return Je},a4:function(){return Qe},a5:function(){return tn},a6:function(){return en},a7:function(){return nn},a8:function(){return an},a9:function(){return on},aA:function(){return bi},aB:function(){return ci},aC:function(){return xt},aG:function(){return Kn},aJ:function(){return Me},aa:function(){return sn},ab:function(){return ln},ac:function(){return fe},ad:function(){return ve},ae:function(){return hn},af:function(){return un},ag:function(){return dn},ah:function(){return tt},ai:function(){return et},aj:function(){return Pe},ak:function(){return wn},al:function(){return ht},am:function(){return On},an:function(){return xn},ao:function(){return Tt},ap:function(){return C},aq:function(){return Ht},ar:function(){return Bt},as:function(){return w},at:function(){return Qi},au:function(){return Bi},av:function(){return _},aw:function(){return B},ax:function(){return T},ay:function(){return bt},az:function(){return _i},b:function(){return $n},c:function(){return ti},d:function(){return ni},e:function(){return ei},f:function(){return di},g:function(){return mi},h:function(){return fi},i:function(){return ga},j:function(){return yi},k:function(){return ar},l:function(){return Na},m:function(){return or},n:function(){return dr},o:function(){return c},p:function(){return _n},q:function(){return zn},r:function(){return Za},s:function(){return ja},t:function(){return Mn},u:function(){return Ua},v:function(){return An},w:function(){return Bn},x:function(){return Vn},y:function(){return Cn},z:function(){return v}});n(1703);var a=n(3536),i=n(5659);function r(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}Object.create;Object.create;var o=n(7366),s=n(7805);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l={PHONE:"phone"},c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},h={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},u={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},d={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function f(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v=p,m=f,g=new a.LL("auth","Firebase",f()),y={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},b=new o.Yd("@firebase/auth");function I(t,...e){b.logLevel<=o["in"].ERROR&&b.error(`Auth (${i.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,...e){throw A(t,...e)}function _(t,...e){return A(t,...e)}function z(t,e,n){const i=Object.assign(Object.assign({},m()),{[e]:n}),r=new a.LL("auth","Firebase",i);return r.create(e,{appName:t.name})}function M(t,e,n){const a=n;if(!(e instanceof a))throw a.name!==e.constructor.name&&w(t,"argument-error"),z(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function A(t,...e){if("string"!==typeof t){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return g.create(t,...e)}function B(t,e,...n){if(!t)throw A(e,...n)}function V(t){const e="INTERNAL ASSERTION FAILED: "+t;throw I(e),new Error(e)}function C(t,e){t||V(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=new Map;function T(t){C(t instanceof Function,"Expected a class definition");let e=H.get(t);return e?(C(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,H.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=(0,i._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,a.vZ)(i,null!==e&&void 0!==e?e:{}))return t;w(t,"already-initialized")}const r=n.initialize({options:e});return r}function L(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],a=(Array.isArray(n)?n:[n]).map(T);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===P()||"https:"===P()}function P(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,a.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e){this.shortDelay=t,this.longDelay=e,C(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,a.uI)()||(0,a.b$)()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){C(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void V("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void V("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void V("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new F(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $(t,e,n,i,r={}){return U(t,r,(async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const s=(0,a.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),R.fetch()(G(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))}))}async function U(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},j),e);try{const e=new W(t),a=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await a.json();if("needConfirmation"in r)throw K(t,"account-exists-with-different-credential",r);if(a.ok&&!("errorMessage"in r))return r;{const e=a.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw K(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw K(t,"email-already-in-use",r);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw z(t,s,o);w(t,s)}}catch(r){if(r instanceof a.ZR)throw r;w(t,"network-request-failed")}}async function q(t,e,n,a,i={}){const r=await $(t,e,n,a,i);return"mfaPendingCredential"in r&&w(t,"multi-factor-auth-required",{_serverResponse:r}),r}function G(t,e,n,a){const i=`${e}${n}?${a}`;return t.config.emulator?D(t.config,i):`${t.config.apiScheme}://${i}`}class W{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(_(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function K(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const i=_(t,e,a);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t,e){return $(t,"POST","/v1/accounts:delete",e)}async function X(t,e){return $(t,"POST","/v1/accounts:update",e)}async function J(t,e){return $(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e=!1){return(0,a.m9)(t).getIdToken(e)}async function et(t,e=!1){const n=(0,a.m9)(t),i=await n.getIdToken(e),r=at(i);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"===typeof r.firebase?r.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:r,token:i,authTime:Q(nt(r.auth_time)),issuedAtTime:Q(nt(r.iat)),expirationTime:Q(nt(r.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function nt(t){return 1e3*Number(t)}function at(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return I("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,a.tV)(n);return t?JSON.parse(t):(I("Failed to decode base64 JWT payload"),null)}catch(r){return I("Caught error parsing JWT payload as JSON",r),null}}function it(t){const e=at(t);return B(e,"internal-error"),B("undefined"!==typeof e.exp,"internal-error"),B("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof a.ZR&&ot(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ot({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Q(this.lastLoginAt),this.creationTime=Q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){var e;const n=t.auth,a=await t.getIdToken(),i=await rt(t,J(n,{idToken:a}));B(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?dt(r.providerUserInfo):[],s=ut(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(null===s||void 0===s?void 0:s.length),h=!!l&&c,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new lt(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function ht(t){const e=(0,a.m9)(t);await ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ut(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function dt(t){return t.map((t=>{var{providerId:e}=t,n=r(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t,e){const n=await U(t,{},(async()=>{const n=(0,a.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=G(t,i,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B("undefined"!==typeof t.idToken,"internal-error"),B("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):it(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return B(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:a,expiresIn:i}=await pt(t,e);this.updateTokensAndExpiration(n,a,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:a,expirationTime:i}=e,r=new ft;return n&&(B("string"===typeof n,"internal-error",{appName:t}),r.refreshToken=n),a&&(B("string"===typeof a,"internal-error",{appName:t}),r.accessToken=a),i&&(B("number"===typeof i,"internal-error",{appName:t}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ft,this.toJSON())}_performRefresh(){return V("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){B("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class mt{constructor(t){var{uid:e,auth:n,stsTokenManager:a}=t,i=r(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new st(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await rt(this,this.stsTokenManager.getToken(this.auth,t));return B(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return et(this,t)}reload(){return ht(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new mt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ct(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await rt(this,Y(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,a,i,r,o,s,l,c;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,u=null!==(a=e.email)&&void 0!==a?a:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,p=null!==(r=e.photoURL)&&void 0!==r?r:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,g=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:I,providerData:w,stsTokenManager:_}=e;B(y&&_,t,"internal-error");const z=ft.fromJSON(this.name,_);B("string"===typeof y,t,"internal-error"),vt(h,t.name),vt(u,t.name),B("boolean"===typeof b,t,"internal-error"),B("boolean"===typeof I,t,"internal-error"),vt(d,t.name),vt(p,t.name),vt(f,t.name),vt(v,t.name),vt(m,t.name),vt(g,t.name);const M=new mt({uid:y,auth:t,email:u,emailVerified:b,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:z,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(M.providerData=w.map((t=>Object.assign({},t)))),v&&(M._redirectEventId=v),M}static async _fromIdTokenResponse(t,e,n=!1){const a=new ft;a.updateFromServerResponse(e);const i=new mt({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:n});return await ct(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}gt.type="NONE";const yt=gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e,n){return`firebase:${t}:${e}:${n}`}class It{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:a,name:i}=this.auth;this.fullUserKey=bt(this.userKey,a.apiKey,i),this.fullPersistenceKey=bt("persistence",a.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?mt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new It(T(yt),t,n);const a=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=a[0]||T(yt);const r=bt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(r);if(e){const n=mt._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(l){}const s=a.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],o&&await i._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(r)}catch(l){}}))),new It(i,t,n)):new It(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(At(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_t(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vt(e))return"Blackberry";if(Ct(e))return"Webos";if(zt(e))return"Safari";if((e.includes("chrome/")||Mt(e))&&!e.includes("edge/"))return"Chrome";if(Bt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function _t(t=(0,a.z$)()){return/firefox\//i.test(t)}function zt(t=(0,a.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mt(t=(0,a.z$)()){return/crios\//i.test(t)}function At(t=(0,a.z$)()){return/iemobile/i.test(t)}function Bt(t=(0,a.z$)()){return/android/i.test(t)}function Vt(t=(0,a.z$)()){return/blackberry/i.test(t)}function Ct(t=(0,a.z$)()){return/webos/i.test(t)}function Ht(t=(0,a.z$)()){return/iphone|ipad|ipod/i.test(t)}function Tt(t=(0,a.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Ot(t=(0,a.z$)()){var e;return Ht(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Lt(){return(0,a.w1)()&&10===document.documentMode}function St(t=(0,a.z$)()){return Ht(t)||Bt(t)||Ct(t)||Vt(t)||/windows phone/i.test(t)||At(t)}function kt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e=[]){let n;switch(t){case"Browser":n=wt((0,a.z$)());break;case"Worker":n=`${wt((0,a.z$)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ft(this),this.idTokenSubscription=new Ft(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=T(e)),this._initializationPromise=this.queue((async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await It.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(a=this.currentUser)||void 0===a?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(t);a&&a!==i||!(null===r||void 0===r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ct(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,a.m9)(t):null;return e&&B(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(T(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new a.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&T(t)||this._popupRedirectResolver;B(e,this,"argument-error"),this.redirectPersistenceManager=await It.create(this,[T(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,a){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return B(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,a):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Pt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function xt(t){return(0,a.m9)(t)}class Ft{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,a.ne)((t=>this.observer=t))}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Dt(t,e,n){const a=xt(t);B(a._canInitEmulator,a,"emulator-config-failed"),B(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),r=Rt(e),{host:o,port:s}=jt(e),l=null===s?"":`:${s}`;a.config.emulator={url:`${r}//${o}${l}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:o,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zt()}function Rt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jt(t){const e=Rt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(a);if(i){const t=i[1];return{host:t,port:Nt(a.substr(t.length+1))}}{const[t,e]=a.split(":");return{host:t,port:Nt(e)}}}function Nt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return V("not implemented")}_getIdTokenResponse(t){return V("not implemented")}_linkToIdToken(t,e){return V("not implemented")}_getReauthenticationResolver(t){return V("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e){return $(t,"POST","/v1/accounts:resetPassword",Z(t,e))}async function qt(t,e){return $(t,"POST","/v1/accounts:update",e)}async function Gt(t,e){return $(t,"POST","/v1/accounts:update",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return q(t,"POST","/v1/accounts:signInWithPassword",Z(t,e))}async function Kt(t,e){return $(t,"POST","/v1/accounts:sendOobCode",Z(t,e))}async function Yt(t,e){return Kt(t,e)}async function Xt(t,e){return Kt(t,e)}async function Jt(t,e){return Kt(t,e)}async function Qt(t,e){return Kt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return q(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}async function ee(t,e){return q(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends $t{constructor(t,e,n,a=null){super("password",n),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new ne(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ne(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Wt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return te(t,{email:this._email,oobCode:this._password});default:w(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return qt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ee(t,{idToken:e,email:this._email,oobCode:this._password});default:w(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(t,e){return q(t,"POST","/v1/accounts:signInWithIdp",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="http://localhost";class re extends $t{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new re(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):w("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:a}=e,i=r(e,["providerId","signInMethod"]);if(!n||!a)return null;const o=new re(n,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return ae(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ae(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ae(t,e)}buildRequest(){const t={requestUri:ie,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,a.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e){return $(t,"POST","/v1/accounts:sendVerificationCode",Z(t,e))}async function se(t,e){return q(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,e))}async function le(t,e){const n=await q(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,e));if(n.temporaryProof)throw K(t,"account-exists-with-different-credential",n);return n}const ce={["USER_NOT_FOUND"]:"user-not-found"};async function he(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return q(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,n),ce)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends $t{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ue({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ue({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return se(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return le(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return he(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:a}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:a}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:i}=t;return n||e||a||i?new ue({verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pe(t){const e=(0,a.zd)((0,a.pd)(t))["link"],n=e?(0,a.zd)((0,a.pd)(e))["deep_link_id"]:null,i=(0,a.zd)((0,a.pd)(t))["deep_link_id"],r=i?(0,a.zd)((0,a.pd)(i))["link"]:null;return r||i||n||e||t}class fe{constructor(t){var e,n,i,r,o,s;const l=(0,a.zd)((0,a.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,h=null!==(n=l["oobCode"])&&void 0!==n?n:null,u=de(null!==(i=l["mode"])&&void 0!==i?i:null);B(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(r=l["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=pe(t);try{return new fe(e)}catch(n){return null}}}function ve(t){return fe.parseLink(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.providerId=me.PROVIDER_ID}static credential(t,e){return ne._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=fe.parseLink(e);return B(n,"argument-error"),ne._fromEmailAndCode(t,n.code,n.tenantId)}}me.PROVIDER_ID="password",me.EMAIL_PASSWORD_SIGN_IN_METHOD="password",me.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends ge{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class be extends ye{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return B("providerId"in e&&"signInMethod"in e,"argument-error"),re._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return B(t.idToken||t.accessToken,"argument-error"),re._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return be.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return be.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:a,pendingToken:i,nonce:r,providerId:o}=t;if(!n&&!a&&!e&&!i)return null;if(!o)return null;try{return new be(o)._credential({idToken:e,accessToken:n,nonce:r,pendingToken:i})}catch(s){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends ye{constructor(){super("facebook.com")}static credential(t){return re._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ie.credential(t.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends ye{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return re._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return we.credential(e,n)}catch(a){return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com",we.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends ye{constructor(){super("github.com")}static credential(t){return re._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _e.credential(t.oauthAccessToken)}catch(e){return null}}}_e.GITHUB_SIGN_IN_METHOD="github.com",_e.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze="http://localhost";class Me extends $t{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return ae(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ae(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ae(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:a,pendingToken:i}=e;return n&&a&&i&&n===a?new Me(n,i):null}static _create(t,e){return new Me(t,e)}buildRequest(){return{requestUri:ze,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="saml.";class Be extends ge{constructor(t){B(t.startsWith(Ae),"argument-error"),super(t)}static credentialFromResult(t){return Be.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return Be.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=Me.fromJSON(t);return B(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:n}=t;if(!e||!n)return null;try{return Me._create(n,e)}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends ye{constructor(){super("twitter.com")}static credential(t,e){return re._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ve.credentialFromTaggedObject(t)}static credentialFromError(t){return Ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ve.credential(e,n)}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(t,e){return q(t,"POST","/v1/accounts:signUp",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.TWITTER_SIGN_IN_METHOD="twitter.com",Ve.PROVIDER_ID="twitter.com";class He{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,a=!1){const i=await mt._fromIdTokenResponse(t,n,a),r=Te(n),o=new He({user:i,providerId:r,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const a=Te(n);return new He({user:t,providerId:a,_tokenResponse:n,operationType:e})}}function Te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t){var e;const n=xt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new He({user:n.currentUser,providerId:null,operationType:"signIn"});const a=await Ce(n,{returnSecureToken:!0}),i=await He._fromIdTokenResponse(n,"signIn",a,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends a.ZR{constructor(t,e,n,a){var i;super(e.code,e.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,Le.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,a){return new Le(t,e,n,a)}}function Se(t,e,n,a){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Le._fromErrorAndOperation(t,n,e,a);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return new Set(t.map((({providerId:t})=>t)).filter((t=>!!t)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e){const n=(0,a.m9)(t);await xe(!0,n,e);const{providerUserInfo:i}=await X(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=ke(i||[]);return n.providerData=n.providerData.filter((t=>r.has(t.providerId))),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ee(t,e,n=!1){const a=await rt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return He._forOperation(t,"link",a)}async function xe(t,e,n){await ct(e);const a=ke(e.providerData),i=!1===t?"provider-already-linked":"no-such-provider";B(a.has(n)===t,e.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(t,e,n=!1){const{auth:a}=t,i="reauthenticate";try{const r=await rt(t,Se(a,i,e,t),n);B(r.idToken,a,"internal-error");const o=at(r.idToken);B(o,a,"internal-error");const{sub:s}=o;return B(t.uid===s,a,"user-mismatch"),He._forOperation(t,i,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&w(a,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(t,e,n=!1){const a="signIn",i=await Se(t,a,e),r=await He._fromIdTokenResponse(t,a,i);return n||await t._updateCurrentUser(r.user),r}async function Re(t,e){return De(xt(t),e)}async function je(t,e){const n=(0,a.m9)(t);return await xe(!1,n,e.providerId),Ee(n,e)}async function Ne(t,e){return Fe((0,a.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(t,e){return q(t,"POST","/v1/accounts:signInWithCustomToken",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(t,e){const n=xt(t),a=await Ze(n,{token:e,returnSecureToken:!0}),i=await He._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?qe._fromServerResponse(t,e):w(t,"internal-error")}}class qe extends Ue{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new qe(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e,n){var a;B((null===(a=n.url)||void 0===a?void 0:a.length)>0,t,"invalid-continue-uri"),B("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t,e,n){const i=(0,a.m9)(t),r={requestType:"PASSWORD_RESET",email:e};n&&Ge(i,r,n),await Xt(i,r)}async function Ke(t,e,n){await Ut((0,a.m9)(t),{oobCode:e,newPassword:n})}async function Ye(t,e){await Gt((0,a.m9)(t),{oobCode:e})}async function Xe(t,e){const n=(0,a.m9)(t),i=await Ut(n,{oobCode:e}),r=i.requestType;switch(B(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":B(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":B(i.mfaInfo,n,"internal-error");default:B(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ue._fromServerResponse(xt(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:r}}async function Je(t,e){const{data:n}=await Xe((0,a.m9)(t),e);return n.email}async function Qe(t,e,n){const a=xt(t),i=await Ce(a,{returnSecureToken:!0,email:e,password:n}),r=await He._fromIdTokenResponse(a,"signIn",i);return await a._updateCurrentUser(r.user),r}function tn(t,e,n){return Re((0,a.m9)(t),me.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e,n){const i=(0,a.m9)(t),r={requestType:"EMAIL_SIGNIN",email:e};B(n.handleCodeInApp,i,"argument-error"),n&&Ge(i,r,n),await Jt(i,r)}function nn(t,e){const n=fe.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function an(t,e,n){const i=(0,a.m9)(t),r=me.credentialWithLink(e,n||S());return B(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Re(i,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,e){return $(t,"POST","/v1/accounts:createAuthUri",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t,e){const n=k()?S():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await rn((0,a.m9)(t),i);return r||[]}async function sn(t,e){const n=(0,a.m9)(t),i=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&Ge(n.auth,r,e);const{email:o}=await Yt(n.auth,r);o!==t.email&&await t.reload()}async function ln(t,e,n){const i=(0,a.m9)(t),r=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};n&&Ge(i.auth,o,n);const{email:s}=await Qt(i.auth,o);s!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return $(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=(0,a.m9)(t),r=await i.getIdToken(),o={idToken:r,displayName:e,photoUrl:n,returnSecureToken:!0},s=await rt(i,cn(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const l=i.providerData.find((({providerId:t})=>"password"===t));l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function un(t,e){return pn((0,a.m9)(t),e,null)}function dn(t,e){return pn((0,a.m9)(t),null,e)}async function pn(t,e,n){const{auth:a}=t,i=await t.getIdToken(),r={idToken:i,returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await rt(t,qt(a,r));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){var e,n;if(!t)return null;const{providerId:a}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!a&&(null===t||void 0===t?void 0:t.idToken)){const a=null===(n=null===(e=at(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(a){const t="anonymous"!==a&&"custom"!==a?a:null;return new vn(r,t)}}if(!a)return null;switch(a){case"facebook.com":return new gn(r,i);case"github.com":return new yn(r,i);case"google.com":return new bn(r,i);case"twitter.com":return new In(r,i,t.screenName||null);case"custom":case"anonymous":return new vn(r,null);default:return new vn(r,a,i)}}class vn{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class mn extends vn{constructor(t,e,n,a){super(t,e,n),this.username=a}}class gn extends vn{constructor(t,e){super(t,"facebook.com",e)}}class yn extends mn{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class bn extends vn{constructor(t,e){super(t,"google.com",e)}}class In extends mn{constructor(t,e,n){super(t,"twitter.com",e,n)}}function wn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:fn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return(0,a.m9)(t).setPersistence(e)}function zn(t,e,n,i){return(0,a.m9)(t).onIdTokenChanged(e,n,i)}function Mn(t,e,n,i){return(0,a.m9)(t).onAuthStateChanged(e,n,i)}function An(t){(0,a.m9)(t).useDeviceLanguage()}function Bn(t,e){return(0,a.m9)(t).updateCurrentUser(e)}function Vn(t){return(0,a.m9)(t).signOut()}async function Cn(t){return(0,a.m9)(t).delete()}class Hn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new Hn("enroll",t)}static _fromMfaPendingCredential(t){return new Hn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return Hn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return Hn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=xt(t),a=e.customData._serverResponse,i=(a.mfaInfo||[]).map((t=>Ue._fromServerResponse(n,t)));B(a.mfaPendingCredential,n,"internal-error");const r=Hn._fromMfaPendingCredential(a.mfaPendingCredential);return new Tn(r,i,(async t=>{const i=await t._process(n,r);delete a.mfaInfo,delete a.mfaPendingCredential;const o=Object.assign(Object.assign({},a),{idToken:i.idToken,refreshToken:i.refreshToken});switch(e.operationType){case"signIn":const t=await He._fromIdTokenResponse(n,e.operationType,o);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return B(e.user,n,"internal-error"),He._forOperation(e.user,e.operationType,o);default:w(n,"internal-error")}}))}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function On(t,e){var n;const i=(0,a.m9)(t),r=e;return B(e.customData.operationType,i,"argument-error"),B(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Tn._fromError(i,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:start",Z(t,e))}function Sn(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:finalize",Z(t,e))}function kn(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Z(t,e))}class Pn{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload((e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map((e=>Ue._fromServerResponse(t.auth,e))))}))}static _fromUser(t){return new Pn(t)}async getSession(){return Hn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,a=await this.getSession(),i=await rt(this.user,n._process(this.user.auth,a,e));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,n=await this.user.getIdToken(),a=await rt(this.user,kn(this.user.auth,{idToken:n,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter((({uid:t})=>t!==e)),await this.user._updateTokensIfNecessary(a);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const En=new WeakMap;function xn(t){const e=(0,a.m9)(t);return En.has(e)||En.set(e,Pn._fromUser(e)),En.get(e)}const Fn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Fn,"1"),this.storage.removeItem(Fn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){const t=(0,a.z$)();return zt(t)||Ht(t)}const jn=1e3,Nn=10;class Zn extends Dn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rn()&&kt(),this.fallbackToPolling=St(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),a=this.localCache[e];n!==a&&t(e,a,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const a=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Lt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,Nn):a()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),jn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zn.type="LOCAL";const $n=Zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Dn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Un.type="SESSION";const qn=Un;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Wn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:a,data:i}=e.data,r=this.handlersMap[a];if(!(null===r||void 0===r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const o=Array.from(r).map((async t=>t(e.origin,i))),s=await Gn(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kn(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.receivers=[];class Yn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const a="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let i,r;return new Promise(((o,s)=>{const l=Kn("",20);a.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);r={messageChannel:a,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(r),a.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[a.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function Jn(t){Xn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return"undefined"!==typeof Xn()["WorkerGlobalScope"]&&"function"===typeof Xn()["importScripts"]}async function ta(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function ea(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function na(){return Qn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="firebaseLocalStorageDb",ia=1,ra="firebaseLocalStorage",oa="fbase_key";class sa{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function la(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function ca(){const t=indexedDB.deleteDatabase(aa);return new sa(t).toPromise()}function ha(){const t=indexedDB.open(aa,ia);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ra,{keyPath:oa})}catch(a){n(a)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ra)?e(n):(n.close(),await ca(),e(await ha()))}))}))}async function ua(t,e,n){const a=la(t,!0).put({[oa]:e,value:n});return new sa(a).toPromise()}async function da(t,e){const n=la(t,!1).get(e),a=await new sa(n).toPromise();return void 0===a?null:a.value}function pa(t,e){const n=la(t,!0).delete(e);return new sa(n).toPromise()}const fa=800,va=3;class ma{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ha()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>va)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wn._getInstance(na()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await ta(),!this.activeServiceWorker)return;this.sender=new Yn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&ea()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ha();return await ua(t,Fn,"1"),await pa(t,Fn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ua(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>da(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>pa(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=la(t,!1).getAll();return new sa(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:a,value:i}of t)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(i)&&(this.notifyListeners(a,i),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),fa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ma.type="LOCAL";const ga=ma;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:start",Z(t,e))}function ba(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:finalize",Z(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){return(await $(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function _a(t){return new Promise(((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=t=>{const e=_("internal-error");e.customData=t,n(e)},a.type="text/javascript",a.charset="UTF-8",wa().appendChild(a)}))}function za(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=500,Aa=6e4,Ba=1e12;class Va{constructor(t){this.auth=t,this.counter=Ba,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new Ca(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||Ba;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||Ba;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||Ba;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class Ca{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a="string"===typeof t?document.getElementById(t):t;B(a,"argument-error",{appName:e}),this.container=a,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Ha(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()}),Aa)}),Ma))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Ha(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let a=0;a<t;a++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=za("rcb"),Oa=new F(3e4,6e4),La="https://www.google.com/recaptcha/api.js?";class Sa{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Xn().grecaptcha}load(t,e=""){return B(ka(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Xn().grecaptcha):new Promise(((n,i)=>{const r=Xn().setTimeout((()=>{i(_(t,"network-request-failed"))}),Oa.get());Xn()[Ta]=()=>{Xn().clearTimeout(r),delete Xn()[Ta];const a=Xn().grecaptcha;if(!a)return void i(_(t,"internal-error"));const o=a.render;a.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(a)};const o=`${La}?${(0,a.xO)({onload:Ta,render:"explicit",hl:e})}`;_a(o).catch((()=>{clearTimeout(r),i(_(t,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Xn().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ka(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Pa{async load(t){return new Va(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="recaptcha",xa={theme:"light",type:"image"};class Fa{constructor(t,e=Object.assign({},xa),n){this.parameters=e,this.type=Ea,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xt(n),this.isInvisible="invisible"===this.parameters.size,B("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const a="string"===typeof t?document.getElementById(t):t;B(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Pa:new Sa,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise((n=>{const a=t=>{t&&(this.tokenChangeListeners.delete(a),n(t))};this.tokenChangeListeners.add(a),this.isInvisible&&e.execute(t)}))}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((t=>{throw this.renderPromise=null,t}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((t=>{this.container.removeChild(t)}))}validateStartingState(){B(!this.parameters.sitekey,this.auth,"argument-error"),B(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),B("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach((t=>t(e))),"function"===typeof t)t(e);else if("string"===typeof t){const n=Xn()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){B(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){B(k()&&!Qn(),this.auth,"internal-error"),await Da(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await Ia(this.auth);B(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return B(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Da(){let t=null;return new Promise((e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()})).catch((e=>{throw t&&window.removeEventListener("load",t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=ue._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function ja(t,e,n){const i=xt(t),r=await $a(i,e,(0,a.m9)(n));return new Ra(r,(t=>Re(i,t)))}async function Na(t,e,n){const i=(0,a.m9)(t);await xe(!1,i,"phone");const r=await $a(i.auth,e,(0,a.m9)(n));return new Ra(r,(t=>je(i,t)))}async function Za(t,e,n){const i=(0,a.m9)(t),r=await $a(i.auth,e,(0,a.m9)(n));return new Ra(r,(t=>Ne(i,t)))}async function $a(t,e,n){var a;const i=await n.verify();try{let r;if(B("string"===typeof i,t,"argument-error"),B(n.type===Ea,t,"argument-error"),r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){B("enroll"===e.type,t,"internal-error");const n=await Ln(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{B("signin"===e.type,t,"internal-error");const n=(null===(a=r.multiFactorHint)||void 0===a?void 0:a.uid)||r.multiFactorUid;B(n,t,"missing-multi-factor-info");const o=await ya(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await oe(t,{phoneNumber:r.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}async function Ua(t,e){await Ee((0,a.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.providerId=qa.PROVIDER_ID,this.auth=xt(t)}verifyPhoneNumber(t,e){return $a(this.auth,t,(0,a.m9)(e))}static credential(t,e){return ue._fromVerification(t,e)}static credentialFromResult(t){const e=t;return qa.credentialFromTaggedObject(e)}static credentialFromError(t){return qa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ue._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ga(t,e){return e?T(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qa.PROVIDER_ID="phone",qa.PHONE_SIGN_IN_METHOD="phone";class Wa extends $t{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ae(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ae(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ae(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ka(t){return De(t.auth,new Wa(t),t.bypassAuthState)}function Ya(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Fe(n,new Wa(t),t.bypassAuthState)}async function Xa(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Ee(n,new Wa(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,n,a,i=!1){this.auth=t,this.resolver=n,this.user=a,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:a,tenantId:i,error:r,type:o}=t;if(r)return void this.reject(r);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ka;case"linkViaPopup":case"linkViaRedirect":return Xa;case"reauthViaPopup":case"reauthViaRedirect":return Ya;default:w(this.auth,"internal-error")}}resolve(t){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new F(2e3,1e4);async function ti(t,e,n){const a=xt(t);M(t,e,ge);const i=Ga(a,n),r=new ai(a,"signInViaPopup",e,i);return r.executeNotNull()}async function ei(t,e,n){const i=(0,a.m9)(t);M(i.auth,e,ge);const r=Ga(i.auth,n),o=new ai(i.auth,"reauthViaPopup",e,r,i);return o.executeNotNull()}async function ni(t,e,n){const i=(0,a.m9)(t);M(i.auth,e,ge);const r=Ga(i.auth,n),o=new ai(i.auth,"linkViaPopup",e,r,i);return o.executeNotNull()}class ai extends Ja{constructor(t,e,n,a,i){super(t,e,a,i),this.provider=n,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const t=Kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Qa.get())};t()}}ai.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii="pendingRedirect",ri=new Map;class oi extends Ja{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=ri.get(this.auth._key());if(!t){try{const e=await si(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}ri.set(this.auth._key(),t)}return this.bypassAuthState||ri.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function si(t,e){const n=ui(e),a=hi(t);if(!await a._isAvailable())return!1;const i="true"===await a._get(n);return await a._remove(n),i}async function li(t,e){return hi(t)._set(ui(e),"true")}function ci(){ri.clear()}function hi(t){return T(t._redirectPersistence)}function ui(t){return bt(ii,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t,e,n){return pi(t,e,n)}async function pi(t,e,n){const a=xt(t);M(t,e,ge);const i=Ga(a,n);return await li(i,a),i._openRedirect(a,e,"signInViaRedirect")}function fi(t,e,n){return vi(t,e,n)}async function vi(t,e,n){const i=(0,a.m9)(t);M(i.auth,e,ge);const r=Ga(i.auth,n);await li(r,i.auth);const o=await Ii(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",o)}function mi(t,e,n){return gi(t,e,n)}async function gi(t,e,n){const i=(0,a.m9)(t);M(i.auth,e,ge);const r=Ga(i.auth,n);await xe(!1,i,e.providerId),await li(r,i.auth);const o=await Ii(i);return r._openRedirect(i.auth,e,"linkViaRedirect",o)}async function yi(t,e){return await xt(t)._initializationPromise,bi(t,e,!1)}async function bi(t,e,n=!1){const a=xt(t),i=Ga(a,e),r=new oi(a,i,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,e)),o}async function Ii(t){const e=Kn(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=6e5;class _i{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Ai(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Mi(t)){const a=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(_(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wi&&this.cachedEventUids.clear(),this.cachedEventUids.has(zi(t))}saveEventToCache(t){this.cachedEventUids.add(zi(t)),this.lastProcessedEventTime=Date.now()}}function zi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Mi({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Ai(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mi(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e={}){return $(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ci=/^https?/;async function Hi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bi(t);for(const a of e)try{if(Ti(a))return}catch(n){}w(t,"unauthorized-domain")}function Ti(t){const e=S(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===a?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===a}if(!Ci.test(n))return!1;if(Vi.test(t))return a===t;const i=t.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+i+"|"+i+")$","i");return r.test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new F(3e4,6e4);function Li(){const t=Xn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Si(t){return new Promise(((e,n)=>{var a,i,r;function o(){Li(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Li(),n(_(t,"network-request-failed"))},timeout:Oi.get()})}if(null===(i=null===(a=Xn().gapi)||void 0===a?void 0:a.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Xn().gapi)||void 0===r?void 0:r.load)){const e=za("iframefcb");return Xn()[e]=()=>{gapi.load?o():n(_(t,"network-request-failed"))},_a(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw ki=null,t}))}let ki=null;function Pi(t){return ki=ki||Si(t),ki}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new F(5e3,15e3),xi="__/auth/iframe",Fi="emulator/auth/iframe",Di={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ri=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ji(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?D(e,Fi):`https://${t.config.authDomain}/${xi}`,r={apiKey:e.apiKey,appName:t.name,v:i.SDK_VERSION},o=Ri.get(t.config.apiHost);o&&(r.eid=o);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${(0,a.xO)(r).slice(1)}`}async function Ni(t){const e=await Pi(t),n=Xn().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:ji(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Di,dontclear:!0},(e=>new Promise((async(n,a)=>{await e.restyle({setHideOnLeave:!1});const i=_(t,"network-request-failed"),r=Xn().setTimeout((()=>{a(i)}),Ei.get());function o(){Xn().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{a(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$i=500,Ui=600,qi="_blank",Gi="http://localhost";class Wi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ki(t,e,n,i=$i,r=Ui){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Zi),{width:i.toString(),height:r.toString(),top:o,left:s}),h=(0,a.z$)().toLowerCase();n&&(l=Mt(h)?qi:n),_t(h)&&(e=e||Gi,c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(Ot(h)&&"_self"!==l)return Yi(e||"",l),new Wi(null);const d=window.open(e||"",l,u);B(d,t,"popup-blocked");try{d.focus()}catch(p){}return new Wi(d)}function Yi(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="__/auth/handler",Ji="emulator/auth/handler";function Qi(t,e,n,r,o,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:i.SDK_VERSION,eventId:o};if(e instanceof ge){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,a.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))l[t]=e}if(e instanceof ye){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const a of Object.keys(c))void 0===c[a]&&delete c[a];return`${tr(t)}?${(0,a.xO)(c).slice(1)}`}function tr({config:t}){return t.emulator?D(t,Ji):`https://${t.authDomain}/${Xi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="webStorageSupport";class nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qn,this._completeRedirectFn=bi}async _openPopup(t,e,n,a){var i;C(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const r=Qi(t,e,n,S(),a);return Ki(t,r,Kn())}async _openRedirect(t,e,n,a){return await this._originValidation(t),Jn(Qi(t,e,n,S(),a)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Ni(t),n=new _i(t);return e.register("authEvent",(e=>{B(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const a=n.onEvent(e.authEvent);return{status:a?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(er,{type:er},(n=>{var a;const i=null===(a=null===n||void 0===n?void 0:n[0])||void 0===a?void 0:a[er];void 0!==i&&e(!!i),w(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Hi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return St()||zt()||Ht()}}const ar=nr;class ir{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return V("unexpected MultiFactorSessionType")}}}class rr extends ir{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new rr(t)}_finalizeEnroll(t,e,n){return Sn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return ba(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class or{constructor(){}static assertion(t){return rr._fromCredential(t)}}or.FACTOR_ID="phone";var sr="@firebase/auth",lr="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(t){(0,i._registerComponent)(new s.wA("auth",((e,{options:n})=>{const a=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=a.options;return((e,a)=>{B(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),B(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pt(t)},s=new Et(e,a,i);return L(s,n),s})(a,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const a=t.getProvider("auth-internal");a.initialize()}))),(0,i._registerComponent)(new s.wA("auth-internal",(t=>{const e=xt(t.getProvider("auth").getImmediate());return(t=>new cr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(sr,lr,hr(t)),(0,i.registerVersion)(sr,lr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t=(0,i.getApp)()){const e=(0,i._getProvider)(t,"auth");return e.isInitialized()?e.getImmediate():O(t,{popupRedirectResolver:ar,persistence:[ga,$n,qn]})}ur("Browser")},3144:function(t,e,n){"use strict";n.d(e,{u7:function(){return rv},Jj:function(){return tf},IX:function(){return Pp},hx:function(){return Bp},my:function(){return Mp},xU:function(){return kf},Lz:function(){return Jp},GH:function(){return ef},gg:function(){return Ep},WA:function(){return ti},F8:function(){return nf},tO:function(){return kp},AE:function(){return Ap},O$:function(){return Rf},$q:function(){return Pf},W:function(){return Ef},oZ:function(){return Sf},EK:function(){return gi},YW:function(){return Av},PU:function(){return lv},l7:function(){return xi},Ky:function(){return ji},Mu:function(){return hi},EZ:function(){return ai},Xb:function(){return Ai},Cf:function(){return bp},K9:function(){return Xa},Me:function(){return Vi},yq:function(){return Ga},J$:function(){return Sv},Wi:function(){return vp},ET:function(){return Iv},Ab:function(){return Tv},vr:function(){return Hv},Fc:function(){return $p},hJ:function(){return Vp},B$:function(){return Cp},at:function(){return zp},oe:function(){return bv},AK:function(){return Vv},TF:function(){return Gp},JU:function(){return Hp},Jm:function(){return Qp},ST:function(){return jp},fH:function(){return Np},Ix:function(){return qp},Wu:function(){return tv},Lx:function(){return Qf},qY:function(){return Dp},GL:function(){return zv},QT:function(){return hv},kl:function(){return dv},Xk:function(){return pv},PL:function(){return fv},UQ:function(){return vv},zN:function(){return mv},ad:function(){return Fp},nP:function(){return Ov},LV:function(){return xp},b9:function(){return Gf},vh:function(){return Wf},Pb:function(){return Kp},L$:function(){return Yp},cf:function(){return wv},sc:function(){return _v},Xo:function(){return Uf},IO:function(){return jf},iE:function(){return Op},Eo:function(){return Tp},i3:function(){return Bv},Bt:function(){return Cv},pl:function(){return gv},Ub:function(){return $a},qK:function(){return Ff},TQ:function(){return Xf},e0:function(){return Yf},RA:function(){return Wp},r7:function(){return yv},Mx:function(){return Up},ar:function(){return Zf},qs:function(){return Lv}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506);var a,i=n(5659),r=n(7805),o=n(7366),s=n(3536),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},h=h||{},u=l||self;function d(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function v(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function I(t,e,n){return I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,I.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,a){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function z(){this.s=this.s,this.o=this.o}var M=0,A={};z.prototype.s=!1,z.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=M)){var t=v(this);delete A[t]}},z.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const B=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},V=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const a=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<a;r++)r in i&&e.call(n,i[r],r,t)};function C(t){t:{var e=qn;const n=t.length,a="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in a&&e.call(void 0,a[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function H(t){return Array.prototype.concat.apply([],arguments)}function T(t){const e=t.length;if(0<e){const n=Array(e);for(let a=0;a<e;a++)n[a]=t[a];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var L,S=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var E=u.navigator;if(E){var x=E.userAgent;if(x){L=x;break t}}L=""}function F(t,e,n){for(const a in t)e.call(n,t[a],a,t)}function D(t){const e={};for(const n in t)e[n]=t[n];return e}var R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,a;for(let i=1;i<arguments.length;i++){for(n in a=arguments[i],a)t[n]=a[n];for(let e=0;e<R.length;e++)n=R[e],Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}}function N(t){return N[" "](t),t}function Z(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}N[" "]=d;var $,U=k(L,"Opera"),q=k(L,"Trident")||k(L,"MSIE"),G=k(L,"Edge"),W=G||q,K=k(L,"Gecko")&&!(k(L.toLowerCase(),"webkit")&&!k(L,"Edge"))&&!(k(L,"Trident")||k(L,"MSIE"))&&!k(L,"Edge"),Y=k(L.toLowerCase(),"webkit")&&!k(L,"Edge");function X(){var t=u.document;return t?t.documentMode:void 0}t:{var J="",Q=function(){var t=L;return K?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(J=Q?Q[1]:""),q){var tt=X();if(null!=tt&&tt>parseFloat(J)){$=String(tt);break t}}$=J}var et,nt={};function at(){return Z((function(){let t=0;const e=S(String($)).split("."),n=S("9").split("."),a=Math.max(e.length,n.length);for(let o=0;0==t&&o<a;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||P(0==i[2].length,0==r[2].length)||P(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(u.document&&q){var it=X();et=it||(parseInt($,10)||void 0)}else et=void 0;var rt=et,ot=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",d,e),u.removeEventListener("test",d,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{N(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,a?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ct[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},_(lt,st);var ct={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),ut=0;function dt(t,e,n,a,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!a,this.ia=i,this.key=++ut,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function vt(t,e){var n=e.type;if(n in t.g){var a,i=t.g[n],r=B(i,e);(a=0<=r)&&Array.prototype.splice.call(i,r,1),a&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,a){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==a)return i}return-1}ft.prototype.add=function(t,e,n,a,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=mt(t,e,a,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,r,!!a,i),e.fa=n,t.push(e)),e};var gt="closure_lm_"+(1e6*Math.random()|0),yt={};function bt(t,e,n,a,i){if(a&&a.once)return _t(t,e,n,a,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bt(t,e[r],n,a,i);return null}return n=Ht(n),t&&t[ht]?t.N(e,n,f(a)?!!a.capture:!!a,i):It(t,e,n,!1,a,i)}function It(t,e,n,a,i,r){if(!e)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,s=Vt(t);if(s||(t[gt]=s=new ft(t)),n=s.add(e,n,a,o,r),n.proxy)return n;if(a=wt(),n.proxy=a,a.src=t,a.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),a,i);else if(t.attachEvent)t.attachEvent(At(e.toString()),a);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(a)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=Bt;return t}function _t(t,e,n,a,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)_t(t,e[r],n,a,i);return null}return n=Ht(n),t&&t[ht]?t.O(e,n,f(a)?!!a.capture:!!a,i):It(t,e,n,!0,a,i)}function zt(t,e,n,a,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)zt(t,e[r],n,a,i);else a=f(a)?!!a.capture:!!a,n=Ht(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=mt(r,n,a,i),-1<n&&(pt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,a,i)),(n=-1<t?e[t]:null)&&Mt(n))}function Mt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ht])vt(e.i,t);else{var n=t.type,a=t.proxy;e.removeEventListener?e.removeEventListener(n,a,t.capture):e.detachEvent?e.detachEvent(At(n),a):e.addListener&&e.removeListener&&e.removeListener(a),(n=Vt(e))?(vt(n,t),0==n.h&&(n.src=null,e[gt]=null)):pt(t)}}}function At(t){return t in yt?yt[t]:yt[t]="on"+t}function Bt(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,a=t.ia||t.src;t.fa&&Mt(t),t=n.call(a,e)}return t}function Vt(t){return t=t[gt],t instanceof ft?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ht(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function Tt(){z.call(this),this.i=new ft(this),this.P=this,this.I=null}function Ot(t,e){var n,a=t.I;if(a)for(n=[];a;a=a.I)n.push(a);if(t=t.P,a=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(a,t),j(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Lt(o,a,!0,e)&&i}if(o=e.g=t,i=Lt(o,a,!0,e)&&i,i=Lt(o,a,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Lt(o,a,!1,e)&&i}function Lt(t,e,n,a){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var s=o.listener,l=o.ia||o.src;o.fa&&vt(t.i,o),i=!1!==s.call(l,a)&&i}}return i&&!a.defaultPrevented}_(Tt,z),Tt.prototype[ht]=!0,Tt.prototype.removeEventListener=function(t,e,n,a){zt(this,t,e,n,a)},Tt.prototype.M=function(){if(Tt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],a=0;a<n.length;a++)pt(n[a]);delete e.g[t],e.h--}}this.I=null},Tt.prototype.N=function(t,e,n,a){return this.i.add(String(t),e,!1,n,a)},Tt.prototype.O=function(t,e,n,a){return this.i.add(String(t),e,!0,n,a)};var St=u.JSON.stringify;function kt(){var t=Zt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Et,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Dt(t){u.setTimeout((()=>{throw t}),0)}function Rt(t,e){Et||jt(),Nt||(Et(),Nt=!0),Zt.add(t,e)}function jt(){var t=u.Promise.resolve(void 0);Et=function(){t.then($t)}}var Nt=!1,Zt=new Pt;function $t(){for(var t;t=kt();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nt=!1}function Ut(t,e){Tt.call(this),this.h=t||1,this.g=e||u,this.j=I(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=I(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=I(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Wt(t){t.g=Gt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ut,Tt),a=Ut.prototype,a.da=!1,a.S=null,a.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(qt(this),this.start()))}},a.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.M=function(){Ut.Z.M.call(this),qt(this),delete this.g};class Kt extends z{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){z.call(this),this.h=t,this.g={}}_(Yt,z);var Xt=[];function Jt(t,e,n,a){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var i=0;i<n.length;i++){var r=bt(e,n[i],a||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Mt(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,a,i,r){t.info((function(){if(t.g)if(r)for(var o="",s=r.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+a+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,a,i,r,o){t.info((function(){return"XMLHTTP RESP ("+a+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function ae(t,e,n,a){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(a?" "+a:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var a=n[t];if(!(2>a.length)){var i=a[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return St(n)}catch(s){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),Qt(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},se=null;function le(){return se=se||new Tt}function ce(t){st.call(this,oe.Ma,t)}function he(t){const e=le();Ot(e,new ce(e,t))}function ue(t,e){st.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=le();Ot(e,new ue(e,t))}function pe(t,e){st.call(this,oe.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",_(ce,st),oe.STAT_EVENT="statevent",_(ue,st),oe.Na="timingevent",_(pe,st);var ve={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ge(){}function ye(t){return t.h||(t.h=t.i())}function be(){}ge.prototype.h=null;var Ie,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _e(){st.call(this,"d")}function ze(){st.call(this,"c")}function Me(){}function Ae(t,e,n,a){this.l=t,this.j=e,this.m=n,this.X=a||1,this.V=new Yt(this),this.P=Ve,t=W?125:void 0,this.W=new Ut(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Be}function Be(){this.i=null,this.g="",this.h=!1}_(_e,st),_(ze,st),_(Me,ge),Me.prototype.g=function(){return new XMLHttpRequest},Me.prototype.i=function(){return{}},Ie=new Me;var Ve=45e3,Ce={},He={};function Te(t,e,n){t.K=1,t.v=en(Ke(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Pe(t),t.A=Ke(t.v);var n=t.A,a=t.X;Array.isArray(a)||(a=[String(a)]),gn(n.h,"t",a),t.C=0,n=t.l.H,t.h=new Be,t.g=za(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Kt(I(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?D(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),he(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Le(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Se(t,e,n){let a,i=!0;for(;!t.I&&t.C<n.length;){if(a=ke(t,n),a==He){4==e&&(t.o=4,de(14),i=!1),ae(t.j,t.m,null,"[Incomplete Response]");break}if(a==Ce){t.o=4,de(15),ae(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ae(t.j,t.m,a,null),Re(t,a)}Le(t)&&a!=He&&a!=Ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),va(e),e.L=!0,de(11))):(ae(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Fe(t))}function ke(t,e){var n=t.C,a=e.indexOf("\n",n);return-1==a?He:(n=Number(e.substring(n,a)),isNaN(n)?Ce:(a+=1,a+n>e.length?He:(e=e.substr(a,n),t.C=a+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Ee(t,t.P)}function Ee(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(I(t.eb,t),e)}function xe(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||ya(t.l,t)}function De(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Re(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||An(n.i,t)))if(n.I=t.N,!t.J&&An(n.i,t)&&3==n.G){try{var a=n.Ca.g.parse(e)}catch(c){a=null}if(Array.isArray(a)&&3==a.length){var i=a;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ga(n),ra(n)}fa(n),de(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(I(n.ab,n),6e3));if(1>=Mn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else Ia(n,11)}else if((t.J||n.g==t)&&ga(n),!O(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(a=1.5*h,n.K=a,n.h.info("backChannelRequestTimeoutMs_="+a)),a=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=a.i;!r.g&&(k(t,"spdy")||k(t,"quic")||k(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Bn(r,r.h),r.h=null))}if(a.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(a.sa=t,tn(a.F,a.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),a=n;var o=t;if(a.oa=_a(a,a.H?a.la:null,a.W),o.J){Vn(a.i,o);var s=o,l=a.K;l&&s.setTimeout(l),s.B&&(xe(s),Pe(s)),a.g=o}else pa(a);0<n.l.length&&la(n)}else"stop"!=c[0]&&"close"!=c[0]||Ia(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ia(n,7):ia(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}he(4)}catch(c){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,a=0;a<n;a++)e.push(t[a]);return e}for(a in e=[],n=0,t)e[n++]=t[a];return e}function Ne(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)V(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var a=t.length,i=0;i<a;i++)n.push(i)}else for(i in n=[],a=0,t)n[a++]=i;a=je(t),i=a.length;for(var r=0;r<i;r++)e.call(void 0,a[r],n&&n[r],t)}}function Ze(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var a=0;a<n;a+=2)this.set(arguments[a],arguments[a+1])}else if(t)if(t instanceof Ze)for(n=t.T(),a=0;a<n.length;a++)this.set(n[a],t.get(n[a]));else for(a in t)this.set(a,t[a])}function $e(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var a=t.g[e];Ue(t.h,a)&&(t.g[n++]=a),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)a=t.g[e],Ue(i,a)||(t.g[n++]=a,i[a]=1),e++;t.g.length=n}}function Ue(t,e){return Object.prototype.hasOwnProperty.call(t,e)}a=Ae.prototype,a.setTimeout=function(t){this.P=t},a.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},a.Ia=function(t){try{if(t==this.g)t:{const h=Jn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||W||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||he(8==e||0>=d?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(Le(this)){var a=Qn(this.g);t="";var i=a.length,r=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),Fe(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(a[e],{stream:r&&e==i-1});a.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(s)){var c=s;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,de(12),De(this),Fe(this);break t}ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Re(this,n)}this.U?(Se(this,h,o),W&&this.i&&3==h&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(ae(this.j,this.m,o,null),Re(this,o)),4==h&&De(this),this.i&&!this.I&&(4==h?ya(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),De(this),Fe(this)}}}catch(h){}},a.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),Se(this,t,e),this.i&&4!=t&&Pe(this))}},a.cancel=function(){this.I=!0,De(this)},a.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(he(3),de(17)),De(this),this.o=2,Fe(this)):Ee(this,this.Y-t)},a=Ze.prototype,a.R=function(){$e(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},a.T=function(){return $e(this),this.g.concat()},a.get=function(t,e){return Ue(this.h,t)?this.h[t]:e},a.set=function(t,e){Ue(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},a.forEach=function(t,e){for(var n=this.T(),a=0;a<n.length;a++){var i=n[a],r=this.get(i);t.call(e,r,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var a=t[n].indexOf("="),i=null;if(0<=a){var r=t[n].substring(0,a);i=t[n].substring(a+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Xe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new Ze(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=rn(n[2]||""),Xe(this,n[3]||"",!0),Je(this,n[4]),this.l=rn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Ke(t){return new We(t)}function Ye(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?rn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof pn?(t.h=e,bn(t.h,t.g)):(n||(e=on(e,un)),t.h=new pn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Ke(t):new We(t,void 0)}function an(t,e,n,a){var i=new We(null,void 0);return t&&Ye(i,t),e&&Xe(i,e),n&&Je(i,n),a&&(i.l=a),i}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?hn:cn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,hn=/[#\?]/g,un=/[#\?@]/g,dn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new Ze,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vn(t,e){fn(t),e=yn(t,e),Ue(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ue(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&$e(t)))}function mn(t,e){return fn(t),e=yn(t,e),Ue(t.g.h,e)}function gn(t,e,n){vn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),T(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vn(this,e),gn(this,n,t))}),t)),t.j=e}a=pn.prototype,a.add=function(t,e){fn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},a.forEach=function(t,e){fn(this),this.g.forEach((function(n,a){V(n,(function(n){t.call(e,n,a,this)}),this)}),this)},a.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],a=0;a<e.length;a++)for(var i=t[a],r=0;r<i.length;r++)n.push(e[a]);return n},a.R=function(t){fn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=H(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=H(e,t[n])}return e},a.set=function(t,e){return fn(this),this.i=null,t=yn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},a.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var a=e[n],i=encodeURIComponent(String(a));a=this.R(a);for(var r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),t.push(o)}}return this.i=t.join("&")};var In=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||_n,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function zn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Mn(t){return t.h?1:t.g?t.g.size:0}function An(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Bn(t,e){t.g?t.g.add(e):t.h=e}function Vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Cn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return T(t.i)}function Hn(){}function Tn(){this.g=new Hn}function On(t,e,n){const a=n||"";try{Ne(t,(function(t,n){let i=t;f(t)&&(i=St(t)),e.push(a+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(a+"type="+encodeURIComponent("_badmap")),i}}function Ln(t,e){const n=new te;if(u.Image){const a=new Image;a.onload=w(Sn,n,a,"TestLoadImage: loaded",!0,e),a.onerror=w(Sn,n,a,"TestLoadImage: error",!1,e),a.onabort=w(Sn,n,a,"TestLoadImage: abort",!1,e),a.ontimeout=w(Sn,n,a,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){a.ontimeout&&a.ontimeout()}),1e4),a.src=t}else e(!1)}function Sn(t,e,n,a,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(a)}catch(r){}}function kn(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Hn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},Hn.prototype.parse=function(t){return u.JSON.parse(t,void 0)},_(kn,ge),kn.prototype.g=function(){return new Pn(this.l,this.j)},kn.prototype.i=function(t){return function(){return t}}({}),_(Pn,Tt);var En=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}a=Pn.prototype,a.open=function(t,e){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dn(this)},a.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=En},a.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},a.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Dn(this),3==this.readyState&&xn(this)}},a.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},a.Ta=function(t){this.g&&(this.response=t,Fn(this))},a.ha=function(){this.g&&Fn(this)},a.setRequestHeader=function(t,e){this.v.append(t,e)},a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=u.JSON.parse;function jn(t){Tt.call(this),this.headers=new Ze,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}_(jn,Tt);var Nn="",Zn=/^https?$/i,$n=["POST","PUT"];function Un(t){return q&&at()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Yn(t)}function Wn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Kn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Gt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var a;if(a=0===l){var i=String(t.H).match(qe)[1]||null;if(!i&&u.self&&u.self.location){var r=u.self.location.protocol;i=r.substr(0,r.length-1)}a=!Zn.test(i?i.toLowerCase():"")}n=a}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(s){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Xn(t);const a=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||Ot(t,"ready");try{a.onreadystatechange=i}catch(n){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ta(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ea(t,e,n){t:{for(a in n){var a=!1;break t}a=!0}a||(n=ta(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function na(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function aa(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=na("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=na("baseRetryDelayMs",5e3,t),this.$a=na("retryDelaySeedMs",1e4,t),this.Ya=na("forwardChannelMaxRetries",2,t),this.ra=na("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new Tn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ia(t){if(oa(t),3==t.G){var e=t.V++,n=Ke(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),ua(t,n),e=new Ae(t,t.h,e,void 0),e.K=2,e.v=en(Ke(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=za(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}wa(t)}function ra(t){t.g&&(va(t),t.g.cancel(),t.g=null)}function oa(t){ra(t),t.u&&(u.clearTimeout(t.u),t.u=null),ga(t),t.i.cancel(),t.m&&("number"===typeof t.m&&u.clearTimeout(t.m),t.m=null)}function sa(t,e){t.l.push(new In(t.Za++,e)),3==t.G&&la(t)}function la(t){zn(t.i)||t.m||(t.m=!0,Rt(t.Ha,t),t.C=0)}function ca(t,e){return!(Mn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(I(t.Ha,t,e),ba(t,t.C)),t.C++,!0))}function ha(t,e){var n;n=e?e.m:t.V++;const a=Ke(t.F);tn(a,"SID",t.J),tn(a,"RID",n),tn(a,"AID",t.U),ua(t,a),t.o&&t.s&&ea(a,t.o,t.s),n=new Ae(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=da(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bn(t.i,n),Te(n,a,e)}function ua(t,e){t.j&&Ne({},(function(t,n){tn(e,n,t)}))}function da(t,e,n){n=Math.min(t.l.length,n);var a=t.j?I(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const s=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{On(s,t,"req"+n+"_")}catch(Qa){a&&a(s)}}if(r){a=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,a}function pa(t){t.g||t.u||(t.Y=1,Rt(t.Ga,t),t.A=0)}function fa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(I(t.Ga,t),ba(t,t.A)),t.A++,!0)}function va(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function ma(t){t.g=new Ae(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ke(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),ua(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ea(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Ke(e)),n.s=null,n.U=!0,Oe(n,t)}function ga(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function ya(t,e){var n=null;if(t.g==e){ga(t),va(t),t.g=null;var a=2}else{if(!An(t.i,e))return;n=e.D,Vn(t.i,e),a=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==a){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;a=le(),Ot(a,new pe(a,n,e,i)),la(t)}else pa(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==a&&ca(t,e)||2==a&&fa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ia(t,5);break;case 4:Ia(t,10);break;case 3:Ia(t,6);break;default:Ia(t,2)}}function ba(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ia(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var a=I(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Ye(n,"https"),en(n)),Ln(n.toString(),a)}else de(2);t.G=0,t.j&&t.j.va(e),wa(t),oa(t)}function wa(t){t.G=0,t.I=-1,t.j&&(0==Cn(t.i).length&&0==t.l.length||(t.i.i.length=0,T(t.l),t.l.length=0),t.j.ua())}function _a(t,e,n){let a=nn(n);if(""!=a.i)e&&Xe(a,e+"."+a.i),Je(a,a.m);else{const t=u.location;a=an(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(a,e,t)})),e=t.D,n=t.sa,e&&n&&tn(a,e,n),tn(a,"VER",t.ma),ua(t,a),a}function za(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new kn({ib:!0})):new jn(t.qa),e.L=t.H,e}function Ma(){}function Aa(){if(q&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function Ba(t,e){Tt.call(this),this.g=new aa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ha(this)}function Va(t){_e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ca(){ze.call(this),this.status=1}function Ha(t){this.g=t}a=jn.prototype,a.ea=function(t,e,n,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ie.g(),this.C=this.u?ye(this.u):ye(Ie),this.g.onreadystatechange=I(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Gn(this,r)}t=n||"";const i=new Ze(this.headers);a&&Ne(a,(function(t,e){i.set(e,t)})),a=C(i.T()),n=u.FormData&&t instanceof u.FormData,!(0<=B($n,e))||a||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=Un(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gn(this,r)}},a.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Yn(this))},a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),jn.Z.M.call(this)},a.Fa=function(){this.s||(this.F||this.v||this.l?Kn(this):this.cb())},a.cb=function(){Kn(this)},a.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},a.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},a.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},a.Da=function(){return this.m},a.La=function(){return"string"===typeof this.j?this.j:String(this.j)},a=aa.prototype,a.ma=8,a.G=1,a.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},a.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ae(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=D(r),j(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var a=this.l[n];if(a="__data__"in a.g&&(a=a.g.__data__,"string"===typeof a)?a.length:void 0,void 0===a)break;if(e+=a,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=da(this,i,e),n=Ke(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),ua(this,n),this.o&&r&&ea(n,this.o,r),Bn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Te(i,n,null)):Te(i,n,e),this.G=2}}else 3==this.G&&(t?ha(this,t):0==this.l.length||zn(this.i)||ha(this))},a.Ga=function(){if(this.u=null,ma(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(I(this.bb,this),t)}},a.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),ra(this),ma(this))},a.ab=function(){null!=this.v&&(this.v=null,ra(this),fa(this),de(19))},a.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},a=Ma.prototype,a.xa=function(){},a.wa=function(){},a.va=function(){},a.ua=function(){},a.Oa=function(){},Aa.prototype.g=function(t,e){return new Ba(t,e)},_(Ba,Tt),Ba.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Rt(I(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_a(t,null,t.W),la(t)},Ba.prototype.close=function(){ia(this.g)},Ba.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,sa(this.g,e)}else this.v?(e={},e.__data__=St(t),sa(this.g,e)):sa(this.g,t)},Ba.prototype.M=function(){this.g.j=null,delete this.j,ia(this.g),delete this.g,Ba.Z.M.call(this)},_(Va,_e),_(Ca,ze),_(Ha,Ma),Ha.prototype.xa=function(){Ot(this.g,"a")},Ha.prototype.wa=function(t){Ot(this.g,new Va(t))},Ha.prototype.va=function(t){Ot(this.g,new Ca(t))},Ha.prototype.ua=function(){Ot(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,Ba.prototype.send=Ba.prototype.u,Ba.prototype.open=Ba.prototype.m,Ba.prototype.close=Ba.prototype.close,ve.NO_ERROR=0,ve.TIMEOUT=8,ve.HTTP_ERROR=6,me.COMPLETE="complete",be.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Tt.prototype.listen=Tt.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Ta=c.createWebChannelTransport=function(){return new Aa},Oa=c.getStatEventTarget=function(){return le()},La=c.ErrorCode=ve,Sa=c.EventType=me,ka=c.Event=oe,Pa=c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ea=c.FetchXmlHttpFactory=kn,xa=c.WebChannel=be,Fa=c.XhrIo=jn;const Da="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ra.UNAUTHENTICATED=new Ra(null),Ra.GOOGLE_CREDENTIALS=new Ra("google-credentials-uid"),Ra.FIRST_PARTY=new Ra("first-party-uid"),Ra.MOCK_USER=new Ra("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ja="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new o.Yd("@firebase/firestore");function Za(){return Na.logLevel}function $a(t){Na.setLogLevel(t)}function Ua(t,...e){if(Na.logLevel<=o["in"].DEBUG){const n=e.map(Wa);Na.debug(`Firestore (${ja}): ${t}`,...n)}}function qa(t,...e){if(Na.logLevel<=o["in"].ERROR){const n=e.map(Wa);Na.error(`Firestore (${ja}): ${t}`,...n)}}function Ga(t,...e){if(Na.logLevel<=o["in"].WARN){const n=e.map(Wa);Na.warn(`Firestore (${ja}): ${t}`,...n)}}function Wa(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t="Unexpected state"){const e=`FIRESTORE (${ja}) INTERNAL ASSERTION FAILED: `+t;throw qa(e),new Error(e)}function Ya(t,e){t||Ka()}function Xa(t,e){t||Ka()}function Ja(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ti extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ai{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ra.UNAUTHENTICATED)))}shutdown(){}}class ii{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ri{constructor(t){this.t=t,this.currentUser=Ra.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const a=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ei,t.enqueueRetryable((()=>a(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await a(this.currentUser)}))},o=t=>{Ua("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ua("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ei)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ua("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ya("string"==typeof e.accessToken),new ni(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ya(null===t||"string"==typeof t),new Ra(t)}}class oi{constructor(t,e,n){this.type="FirstParty",this.user=Ra.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const a=t.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class si{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new oi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ra.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class li{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ci{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ua("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ua("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const a=t=>{Ua("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>a(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?a(t):Ua("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ya("string"==typeof t.token),this.p=t.token,new li(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class hi{getToken(){return Promise.resolve(new li(""))}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let a=0;a<t;a++)n[a]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui.A=-1;class pi{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const a=di(40);for(let i=0;i<a.length;++i)n.length<20&&a[i]<e&&(n+=t.charAt(a[i]%t.length))}return n}}function fi(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every(((t,a)=>n(t,e[a])))}function mi(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ti(Qa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ti(Qa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ti(Qa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ti(Qa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gi.fromMillis(Date.now())}static fromDate(t){return gi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new gi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?fi(this.nanoseconds,t.nanoseconds):fi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new yi(t)}static min(){return new yi(new gi(0,0))}static max(){return new yi(new gi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ka(),void 0===n?n=t.length-e:n>t.length-e&&Ka(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===_i.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let a=0;a<n;a++){const n=t.get(a),i=e.get(a);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class zi extends _i{construct(t,e,n){return new zi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ti(Qa.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new zi(e)}static emptyPath(){return new zi([])}}const Mi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ai extends _i{construct(t,e,n){return new Ai(t,e,n)}static isValidIdentifier(t){return Mi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ai.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",a=0;const i=()=>{if(0===n.length)throw new ti(Qa.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;a<t.length;){const e=t[a];if("\\"===e){if(a+1===t.length)throw new ti(Qa.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[a+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ti(Qa.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,a+=2}else"`"===e?(r=!r,a++):"."!==e||r?(n+=e,a++):(i(),a++)}if(i(),r)throw new ti(Qa.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ai(e)}static emptyPath(){return new Ai([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.fields=t,t.sort(Ai.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return vi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ci(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ci(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return fi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Hi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(Ya(!!t),"string"==typeof t){let e=0;const n=Hi.exec(t);if(Ya(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Oi(t.seconds),nanos:Oi(t.nanos)}}function Oi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Li(t){return"string"==typeof t?Ci.fromBase64String(t):Ci.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ki(t){const e=t.mapValue.fields.__previous_value__;return Si(e)?ki(e):e}function Pi(t){const e=Ti(t.mapValue.fields.__local_write_time__.timestampValue);return new gi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n,a,i,r,o,s){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=a,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=s}}class xi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof xi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return null==t}function Di(t){return 0===t&&1/t==-1/0}function Ri(t){return"number"==typeof t&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this.path=t}static fromPath(t){return new ji(zi.fromString(t))}static fromName(t){return new ji(zi.fromString(t).popFirst(5))}static empty(){return new ji(zi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===zi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return zi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ji(new zi(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Zi={nullValue:"NULL_VALUE"};function $i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Si(t)?4:ir(t)?9:10:Ka()}function Ui(t,e){if(t===e)return!0;const n=$i(t);if(n!==$i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ti(t.timestampValue),a=Ti(e.timestampValue);return n.seconds===a.seconds&&n.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Li(t.bytesValue).isEqual(Li(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Oi(t.geoPointValue.latitude)===Oi(e.geoPointValue.latitude)&&Oi(t.geoPointValue.longitude)===Oi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Oi(t.integerValue)===Oi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Oi(t.doubleValue),a=Oi(e.doubleValue);return n===a?Di(n)===Di(a):isNaN(n)&&isNaN(a)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:return function(t,e){const n=t.mapValue.fields||{},a=e.mapValue.fields||{};if(bi(n)!==bi(a))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===a[i]||!Ui(n[i],a[i])))return!1;return!0}(t,e);default:return Ka()}}function qi(t,e){return void 0!==(t.values||[]).find((t=>Ui(t,e)))}function Gi(t,e){if(t===e)return 0;const n=$i(t),a=$i(e);if(n!==a)return fi(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return fi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Oi(t.integerValue||t.doubleValue),a=Oi(e.integerValue||e.doubleValue);return n<a?-1:n>a?1:n===a?0:isNaN(n)?isNaN(a)?0:-1:1}(t,e);case 3:return Wi(t.timestampValue,e.timestampValue);case 4:return Wi(Pi(t),Pi(e));case 5:return fi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Li(t),a=Li(e);return n.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),a=e.split("/");for(let i=0;i<n.length&&i<a.length;i++){const t=fi(n[i],a[i]);if(0!==t)return t}return fi(n.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=fi(Oi(t.latitude),Oi(e.latitude));return 0!==n?n:fi(Oi(t.longitude),Oi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],a=e.values||[];for(let i=0;i<n.length&&i<a.length;++i){const t=Gi(n[i],a[i]);if(t)return t}return fi(n.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},a=Object.keys(n),i=e.fields||{},r=Object.keys(i);a.sort(),r.sort();for(let o=0;o<a.length&&o<r.length;++o){const t=fi(a[o],r[o]);if(0!==t)return t;const e=Gi(n[a[o]],i[r[o]]);if(0!==e)return e}return fi(a.length,r.length)}(t.mapValue,e.mapValue);default:throw Ka()}}function Wi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return fi(t,e);const n=Ti(t),a=Ti(e),i=fi(n.seconds,a.seconds);return 0!==i?i:fi(n.nanos,a.nanos)}function Ki(t){return Yi(t)}function Yi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ti(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Li(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ji.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const a of t.values||[])n?n=!1:e+=",",e+=Yi(a);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",a=!0;for(const i of e)a?a=!1:n+=",",n+=`${i}:${Yi(t.fields[i])}`;return n+"}"}(t.mapValue):Ka();var e,n}function Xi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ji(t){return!!t&&"integerValue"in t}function Qi(t){return!!t&&"arrayValue"in t}function tr(t){return!!t&&"nullValue"in t}function er(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nr(t){return!!t&&"mapValue"in t}function ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ar(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ir(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function rr(t){return"nullValue"in t?Zi:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Xi(xi.empty(),ji.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Ka()}function or(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Xi(xi.empty(),ji.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ni:Ka()}function sr(t,e){return void 0===t?e:void 0===e||Gi(t,e)>0?t:e}function lr(t,e){return void 0===t?e:void 0===e||Gi(t,e)<0?t:e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.value=t}static empty(){return new cr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ar(e)}setAll(t){let e=Ai.emptyPath(),n={},a=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,a),n={},a=[],e=i.popLast()}t?n[i.lastSegment()]=ar(t):a.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,a)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ui(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let a=e.mapValue.fields[t.get(n)];nr(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,n){Ii(e,((e,n)=>t[e]=n));for(const a of n)delete t[a]}clone(){return new cr(ar(this.value))}}function hr(t){const e=[];return Ii(t.fields,((t,n)=>{const a=new Ai([t]);if(nr(n)){const t=hr(n.mapValue).fields;if(0===t.length)e.push(a);else for(const n of t)e.push(a.child(n))}else e.push(a)})),new Bi(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ur{constructor(t,e,n,a,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=a,this.data=i,this.documentState=r}static newInvalidDocument(t){return new ur(t,0,yi.min(),yi.min(),cr.empty(),0)}static newFoundDocument(t,e,n){return new ur(t,1,e,yi.min(),n,0)}static newNoDocument(t,e){return new ur(t,2,e,yi.min(),cr.empty(),0)}static newUnknownDocument(t,e){return new ur(t,3,e,yi.min(),cr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ur&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ur(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class dr{constructor(t,e,n,a){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=a}}function pr(t){return t.fields.find((t=>2===t.kind))}function fr(t){return t.fields.filter((t=>2!==t.kind))}dr.UNKNOWN_ID=-1;class vr{constructor(t,e){this.fieldPath=t,this.kind=e}}class mr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new mr(0,br.min())}}function gr(t,e){const n=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,i=yi.fromTimestamp(1e9===a?new gi(n+1,0):new gi(n,a));return new br(i,ji.empty(),e)}function yr(t){return new br(t.readTime,t.key,-1)}class br{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new br(yi.min(),ji.empty(),-1)}static max(){return new br(yi.max(),ji.empty(),-1)}}function Ir(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ji.comparator(t.documentKey,e.documentKey),0!==n?n:fi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e=null,n=[],a=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=a,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function _r(t,e=null,n=[],a=[],i=null,r=null,o=null){return new wr(t,e,n,a,i,r,o)}function zr(t){const e=Ja(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ki(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ki(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ki(t))).join(",")),e.P=t}return e.P}function Mr(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ki(e.value)}`;var e})).join(", ")}]`),Fi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ki(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ki(t))).join(",")),`Target(${e})`}function Ar(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!jr(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],a=e.filters[i],n.op!==a.op||!n.field.isEqual(a.field)||!Ui(n.value,a.value))return!1;var n,a;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zr(t.startAt,e.startAt)&&Zr(t.endAt,e.endAt)}function Br(t){return ji.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Vr(t,e){return t.filters.filter((t=>t instanceof Tr&&t.field.isEqual(e)))}function Cr(t,e,n){let a,i=!0;for(const r of Vr(t,e)){let t,e=!0;switch(r.op){case"<":case"<=":t=rr(r.value);break;case"==":case"in":case">=":t=r.value;break;case">":t=r.value,e=!1;break;case"!=":case"not-in":t=Zi}sr(a,t)===t&&(a=t,i=e)}if(null!==n)for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){const t=n.position[r];sr(a,t)===t&&(a=t,i=n.inclusive);break}return{value:a,inclusive:i}}function Hr(t,e,n){let a,i=!0;for(const r of Vr(t,e)){let t,e=!0;switch(r.op){case">=":case">":t=or(r.value),e=!1;break;case"==":case"in":case"<=":t=r.value;break;case"<":t=r.value,e=!1;break;case"!=":case"not-in":t=Ni}lr(a,t)===t&&(a=t,i=e)}if(null!==n)for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){const t=n.position[r];lr(a,t)===t&&(a=t,i=n.inclusive);break}return{value:a,inclusive:i}}class Tr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Or(t,e,n):"array-contains"===e?new Pr(t,n):"in"===e?new Er(t,n):"not-in"===e?new xr(t,n):"array-contains-any"===e?new Fr(t,n):new Tr(t,e,n)}static V(t,e,n){return"in"===e?new Lr(t,n):new Sr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Gi(e,this.value)):null!==e&&$i(this.value)===$i(e)&&this.v(Gi(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ka()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Or extends Tr{constructor(t,e,n){super(t,e,n),this.key=ji.fromName(n.referenceValue)}matches(t){const e=ji.comparator(t.key,this.key);return this.v(e)}}class Lr extends Tr{constructor(t,e){super(t,"in",e),this.keys=kr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sr extends Tr{constructor(t,e){super(t,"not-in",e),this.keys=kr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function kr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ji.fromName(t.referenceValue)))}class Pr extends Tr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qi(e)&&qi(e.arrayValue,this.value)}}class Er extends Tr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&qi(this.value.arrayValue,e)}}class xr extends Tr{constructor(t,e){super(t,"not-in",e)}matches(t){if(qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!qi(this.value.arrayValue,e)}}class Fr extends Tr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>qi(this.value.arrayValue,t)))}}class Dr{constructor(t,e){this.position=t,this.inclusive=e}}class Rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function jr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nr(t,e,n){let a=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(a=r.field.isKeyField()?ji.comparator(ji.fromName(o.referenceValue),n.key):Gi(o,n.data.field(r.field)),"desc"===r.dir&&(a*=-1),0!==a)break}return a}function Zr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ui(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e=null,n=[],a=[],i=null,r="F",o=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=a,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=s,this.D=null,this.C=null,this.startAt,this.endAt}}function Ur(t,e,n,a,i,r,o,s){return new $r(t,e,n,a,i,r,o,s)}function qr(t){return new $r(t)}function Gr(t){return!Fi(t.limit)&&"F"===t.limitType}function Wr(t){return!Fi(t.limit)&&"L"===t.limitType}function Kr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yr(t){for(const e of t.filters)if(e.S())return e.field;return null}function Xr(t){return null!==t.collectionGroup}function Jr(t){const e=Ja(t);if(null===e.D){e.D=[];const t=Yr(e),n=Kr(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Rr(t)),e.D.push(new Rr(Ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Rr(Ai.keyField(),t))}}}return e.D}function Qr(t){const e=Ja(t);if(!e.C)if("F"===e.limitType)e.C=_r(e.path,e.collectionGroup,Jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Jr(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Rr(i.field,e))}const n=e.endAt?new Dr(e.endAt.position,!e.endAt.inclusive):null,a=e.startAt?new Dr(e.startAt.position,!e.startAt.inclusive):null;e.C=_r(e.path,e.collectionGroup,t,e.filters,e.limit,n,a)}return e.C}function to(t,e,n){return new $r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eo(t,e){return Ar(Qr(t),Qr(e))&&t.limitType===e.limitType}function no(t){return`${zr(Qr(t))}|lt:${t.limitType}`}function ao(t){return`Query(target=${Mr(Qr(t))}; limitType=${t.limitType})`}function io(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ji.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const a=Nr(t,e,n);return t.inclusive?a<=0:a<0}(t.startAt,Jr(t),e))&&!(t.endAt&&!function(t,e,n){const a=Nr(t,e,n);return t.inclusive?a>=0:a>0}(t.endAt,Jr(t),e))}(t,e)}function ro(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oo(t){return(e,n)=>{let a=!1;for(const i of Jr(t)){const t=so(i,e,n);if(0!==t)return t;a=a||i.field.isKeyField()}return 0}}function so(t,e,n){const a=t.field.isKeyField()?ji.comparator(e.key,n.key):function(t,e,n){const a=e.data.field(t),i=n.data.field(t);return null!==a&&null!==i?Gi(a,i):Ka()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function co(t){return{integerValue:""+t}}function ho(t,e){return Ri(e)?co(e):lo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this._=void 0}}function po(t,e,n){return t instanceof mo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof go?yo(t,e):t instanceof bo?Io(t,e):function(t,e){const n=vo(t,e),a=_o(n)+_o(t.k);return Ji(n)&&Ji(t.k)?co(a):lo(t.M,a)}(t,e)}function fo(t,e,n){return t instanceof go?yo(t,e):t instanceof bo?Io(t,e):n}function vo(t,e){return t instanceof wo?Ji(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class mo extends uo{}class go extends uo{constructor(t){super(),this.elements=t}}function yo(t,e){const n=zo(e);for(const a of t.elements)n.some((t=>Ui(t,a)))||n.push(a);return{arrayValue:{values:n}}}class bo extends uo{constructor(t){super(),this.elements=t}}function Io(t,e){let n=zo(e);for(const a of t.elements)n=n.filter((t=>!Ui(t,a)));return{arrayValue:{values:n}}}class wo extends uo{constructor(t,e){super(),this.M=t,this.k=e}}function _o(t){return Oi(t.integerValue||t.doubleValue)}function zo(t){return Qi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e){this.field=t,this.transform=e}}function Ao(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof go&&e instanceof go||t instanceof bo&&e instanceof bo?vi(t.elements,e.elements,Ui):t instanceof wo&&e instanceof wo?Ui(t.k,e.k):t instanceof mo&&e instanceof mo}(t.transform,e.transform)}class Bo{constructor(t,e){this.version=t,this.transformResults=e}}class Vo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vo}static exists(t){return new Vo(void 0,t)}static updateTime(t){return new Vo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Co(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ho{}function To(t,e,n){t instanceof Po?function(t,e,n){const a=t.value.clone(),i=Fo(t.fieldTransforms,e,n.transformResults);a.setAll(i),e.convertToFoundDocument(n.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Eo?function(t,e,n){if(!Co(t.precondition,e))return void e.convertToUnknownDocument(n.version);const a=Fo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(xo(t)),i.setAll(a),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Oo(t,e,n){t instanceof Po?function(t,e,n){if(!Co(t.precondition,e))return;const a=t.value.clone(),i=Do(t.fieldTransforms,n,e);a.setAll(i),e.convertToFoundDocument(ko(e),a).setHasLocalMutations()}(t,e,n):t instanceof Eo?function(t,e,n){if(!Co(t.precondition,e))return;const a=Do(t.fieldTransforms,n,e),i=e.data;i.setAll(xo(t)),i.setAll(a),e.convertToFoundDocument(ko(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Co(t.precondition,e)&&e.convertToNoDocument(yi.min())}(t,e)}function Lo(t,e){let n=null;for(const a of t.fieldTransforms){const t=e.data.field(a.field),i=vo(a.transform,t||null);null!=i&&(null==n&&(n=cr.empty()),n.set(a.field,i))}return n||null}function So(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&vi(t,e,((t,e)=>Ao(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ko(t){return t.isFoundDocument()?t.version:yi.min()}class Po extends Ho{constructor(t,e,n,a=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=a,this.type=0}}class Eo extends Ho{constructor(t,e,n,a,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=a,this.fieldTransforms=i,this.type=1}}function xo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const a=t.data.field(n);e.set(n,a)}})),e}function Fo(t,e,n){const a=new Map;Ya(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,s=e.data.field(r.field);a.set(r.field,fo(o,s,n[i]))}return a}function Do(t,e,n){const a=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);a.set(i.field,po(t,r,e))}return a}class Ro extends Ho{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class jo extends Ho{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zo,$o;function Uo(t){switch(t){default:return Ka();case Qa.CANCELLED:case Qa.UNKNOWN:case Qa.DEADLINE_EXCEEDED:case Qa.RESOURCE_EXHAUSTED:case Qa.INTERNAL:case Qa.UNAVAILABLE:case Qa.UNAUTHENTICATED:return!1;case Qa.INVALID_ARGUMENT:case Qa.NOT_FOUND:case Qa.ALREADY_EXISTS:case Qa.PERMISSION_DENIED:case Qa.FAILED_PRECONDITION:case Qa.ABORTED:case Qa.OUT_OF_RANGE:case Qa.UNIMPLEMENTED:case Qa.DATA_LOSS:return!0}}function qo(t){if(void 0===t)return qa("GRPC error has no .code"),Qa.UNKNOWN;switch(t){case Zo.OK:return Qa.OK;case Zo.CANCELLED:return Qa.CANCELLED;case Zo.UNKNOWN:return Qa.UNKNOWN;case Zo.DEADLINE_EXCEEDED:return Qa.DEADLINE_EXCEEDED;case Zo.RESOURCE_EXHAUSTED:return Qa.RESOURCE_EXHAUSTED;case Zo.INTERNAL:return Qa.INTERNAL;case Zo.UNAVAILABLE:return Qa.UNAVAILABLE;case Zo.UNAUTHENTICATED:return Qa.UNAUTHENTICATED;case Zo.INVALID_ARGUMENT:return Qa.INVALID_ARGUMENT;case Zo.NOT_FOUND:return Qa.NOT_FOUND;case Zo.ALREADY_EXISTS:return Qa.ALREADY_EXISTS;case Zo.PERMISSION_DENIED:return Qa.PERMISSION_DENIED;case Zo.FAILED_PRECONDITION:return Qa.FAILED_PRECONDITION;case Zo.ABORTED:return Qa.ABORTED;case Zo.OUT_OF_RANGE:return Qa.OUT_OF_RANGE;case Zo.UNIMPLEMENTED:return Qa.UNIMPLEMENTED;case Zo.DATA_LOSS:return Qa.DATA_LOSS;default:return Ka()}}($o=Zo||(Zo={}))[$o.OK=0]="OK",$o[$o.CANCELLED=1]="CANCELLED",$o[$o.UNKNOWN=2]="UNKNOWN",$o[$o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$o[$o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$o[$o.NOT_FOUND=5]="NOT_FOUND",$o[$o.ALREADY_EXISTS=6]="ALREADY_EXISTS",$o[$o.PERMISSION_DENIED=7]="PERMISSION_DENIED",$o[$o.UNAUTHENTICATED=16]="UNAUTHENTICATED",$o[$o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$o[$o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$o[$o.ABORTED=10]="ABORTED",$o[$o.OUT_OF_RANGE=11]="OUT_OF_RANGE",$o[$o.UNIMPLEMENTED=12]="UNIMPLEMENTED",$o[$o.INTERNAL=13]="INTERNAL",$o[$o.UNAVAILABLE=14]="UNAVAILABLE",$o[$o.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[a,i]of n)if(this.equalsFn(a,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),a=this.inner[n];if(void 0===a)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<a.length;i++)if(this.equalsFn(a[i][0],t))return void(a[i]=[t,e]);a.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],t))return 1===n.length?delete this.inner[e]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(t){Ii(this.inner,((e,n)=>{for(const[a,i]of n)t(a,i)}))}isEmpty(){return wi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e){this.comparator=t,this.root=e||Yo.EMPTY}insert(t,e){return new Wo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yo.BLACK,null,null))}remove(t){return new Wo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(0===a)return e+n.left.size;a<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ko(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ko(this.root,t,this.comparator,!0)}}class Ko{constructor(t,e,n,a){this.isReverse=a,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&a&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yo{constructor(t,e,n,a,i){this.key=t,this.value=e,this.color=null!=n?n:Yo.RED,this.left=null!=a?a:Yo.EMPTY,this.right=null!=i?i:Yo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,a,i){return new Yo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=a?a:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let a=this;const i=n(t,a.key);return a=i<0?a.copy(null,null,null,a.left.insert(t,e,n),null):0===i?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Yo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===e(t,a.key)){if(a.right.isEmpty())return Yo.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ka();if(this.right.isRed())throw Ka();const t=this.left.check();if(t!==this.right.check())throw Ka();return t+(this.isRed()?0:1)}}Yo.EMPTY=null,Yo.RED=!0,Yo.BLACK=!1,Yo.EMPTY=new class{constructor(){this.size=0}get key(){throw Ka()}get value(){throw Ka()}get color(){throw Ka()}get left(){throw Ka()}get right(){throw Ka()}copy(t,e,n,a,i){return this}insert(t,e,n){return new Yo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t){this.comparator=t,this.data=new Wo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Jo(this.data.getIterator())}getIteratorFrom(t){return new Jo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Xo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(0!==this.comparator(t,a))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Xo(this.comparator);return e.data=t,e}}class Jo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qo(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Wo(ji.comparator);function es(){return ts}const ns=new Wo(ji.comparator);function as(){return ns}function is(){return new Go((t=>t.toString()),((t,e)=>t.isEqual(e)))}const rs=new Wo(ji.comparator),os=new Xo(ji.comparator);function ss(...t){let e=os;for(const n of t)e=e.add(n);return e}const ls=new Xo(fi);function cs(){return ls}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e,n,a,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,us.createSynthesizedTargetChangeForCurrentChange(t,e)),new hs(yi.min(),n,cs(),es(),ss())}}class us{constructor(t,e,n,a,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new us(Ci.EMPTY_BYTE_STRING,e,ss(),ss(),ss())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,n,a){this.O=t,this.removedTargetIds=e,this.key=n,this.F=a}}class ps{constructor(t,e){this.targetId=t,this.$=e}}class fs{constructor(t,e,n=Ci.EMPTY_BYTE_STRING,a=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=a}}class vs{constructor(){this.B=0,this.L=ys(),this.U=Ci.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=ss(),e=ss(),n=ss();return this.L.forEach(((a,i)=>{switch(i){case 0:t=t.add(a);break;case 2:e=e.add(a);break;case 1:n=n.add(a);break;default:Ka()}})),new us(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=ys()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ms{constructor(t){this.nt=t,this.st=new Map,this.it=es(),this.rt=gs(),this.ot=new Xo(fi)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Ka()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,a=this.wt(e);if(a){const t=a.target;if(Br(t))if(0===n){const n=new ji(t.path);this.ct(e,n,ur.newNoDocument(n,yi.min()))}else Ya(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,a)=>{const i=this.wt(a);if(i){if(n.current&&Br(i.target)){const e=new ji(i.target.path);null!==this.it.get(e)||this.It(a,e)||this.ct(a,e,ur.newNoDocument(e,t))}n.j&&(e.set(a,n.H()),n.J())}}));let n=ss();this.rt.forEach(((t,e)=>{let a=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(a=!1,!1)})),a&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const a=new hs(t,e,this.ot,this.it,n);return this.it=es(),this.rt=gs(),this.ot=new Xo(fi),a}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const a=this.lt(t);this.It(t,e)?a.Y(e,1):a.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new vs,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Xo(fi),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Ua("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new vs),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function gs(){return new Wo(ji.comparator)}function ys(){return new Wo(ji.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Is=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ws{constructor(t,e){this.databaseId=t,this.N=e}}function _s(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zs(t,e){return t.N?e.toBase64():e.toUint8Array()}function Ms(t,e){return _s(t,e.toTimestamp())}function As(t){return Ya(!!t),yi.fromTimestamp(function(t){const e=Ti(t);return new gi(e.seconds,e.nanos)}(t))}function Bs(t,e){return function(t){return new zi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Vs(t){const e=zi.fromString(t);return Ya(Qs(e)),e}function Cs(t,e){return Bs(t.databaseId,e.path)}function Hs(t,e){const n=Vs(e);if(n.get(1)!==t.databaseId.projectId)throw new ti(Qa.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ti(Qa.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ji(Ss(n))}function Ts(t,e){return Bs(t.databaseId,e)}function Os(t){const e=Vs(t);return 4===e.length?zi.emptyPath():Ss(e)}function Ls(t){return new zi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ss(t){return Ya(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ks(t,e,n){return{name:Cs(t,e),fields:n.value.mapValue.fields}}function Ps(t,e,n){const a=Hs(t,e.name),i=As(e.updateTime),r=new cr({mapValue:{fields:e.fields}}),o=ur.newFoundDocument(a,i,r);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Es(t,e){return"found"in e?function(t,e){Ya(!!e.found),e.found.name,e.found.updateTime;const n=Hs(t,e.found.name),a=As(e.found.updateTime),i=new cr({mapValue:{fields:e.found.fields}});return ur.newFoundDocument(n,a,i)}(t,e):"missing"in e?function(t,e){Ya(!!e.missing),Ya(!!e.readTime);const n=Hs(t,e.missing),a=As(e.readTime);return ur.newNoDocument(n,a)}(t,e):Ka()}function xs(t,e){let n;if("targetChange"in e){e.targetChange;const a=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ka()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.N?(Ya(void 0===e||"string"==typeof e),Ci.fromBase64String(e||"")):(Ya(void 0===e||e instanceof Uint8Array),Ci.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,s=o&&function(t){const e=void 0===t.code?Qa.UNKNOWN:qo(t.code);return new ti(e,t.message||"")}(o);n=new fs(a,i,r,s||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const i=Hs(t,a.document.name),r=As(a.document.updateTime),o=new cr({mapValue:{fields:a.document.fields}}),s=ur.newFoundDocument(i,r,o),l=a.targetIds||[],c=a.removedTargetIds||[];n=new ds(l,c,s.key,s)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const i=Hs(t,a.document),r=a.readTime?As(a.readTime):yi.min(),o=ur.newNoDocument(i,r),s=a.removedTargetIds||[];n=new ds([],s,o.key,o)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const i=Hs(t,a.document),r=a.removedTargetIds||[];n=new ds([],r,i,null)}else{if(!("filter"in e))return Ka();{e.filter;const t=e.filter;t.targetId;const a=t.count||0,i=new No(a),r=t.targetId;n=new ps(r,i)}}return n}function Fs(t,e){let n;if(e instanceof Po)n={update:ks(t,e.key,e.value)};else if(e instanceof Ro)n={delete:Cs(t,e.key)};else if(e instanceof Eo)n={update:ks(t,e.key,e.data),updateMask:Js(e.fieldMask)};else{if(!(e instanceof jo))return Ka();n={verify:Cs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof mo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof go)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof bo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof wo)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Ka()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ms(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ka()}(t,e.precondition)),n}function Ds(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Vo.updateTime(As(t.updateTime)):void 0!==t.exists?Vo.exists(t.exists):Vo.none()}(e.currentDocument):Vo.none(),a=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)Ya("REQUEST_TIME"===e.setToServerValue),n=new mo;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new go(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new bo(t)}else"increment"in e?n=new wo(t,e.increment):Ka();const a=Ai.fromServerFormat(e.fieldPath);return new Mo(a,n)}(t,e))):[];if(e.update){e.update.name;const i=Hs(t,e.update.name),r=new cr({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new Bi(e.map((t=>Ai.fromServerFormat(t))))}(e.updateMask);return new Eo(i,r,t,n,a)}return new Po(i,r,n,a)}if(e.delete){const a=Hs(t,e.delete);return new Ro(a,n)}if(e.verify){const a=Hs(t,e.verify);return new jo(a,n)}return Ka()}function Rs(t,e){return t&&t.length>0?(Ya(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?As(t.updateTime):As(e);return n.isEqual(yi.min())&&(n=As(e)),new Bo(n,t.transformResults||[])}(t,e)))):[]}function js(t,e){return{documents:[Ts(t,e.path)]}}function Ns(t,e){const n={structuredQuery:{}},a=e.path;null!==e.collectionGroup?(n.parent=Ts(t,a),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ts(t,a.popLast()),n.structuredQuery.from=[{collectionId:a.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(er(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NAN"}};if(tr(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(er(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NOT_NAN"}};if(tr(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(t.field),op:Gs(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ws(t.field),direction:qs(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Fi(e)?e:{value:e}}(t,e.limit);var s;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(s=e.startAt).inclusive,values:s.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Zs(t){let e=Os(t.parent);const n=t.structuredQuery,a=n.from?n.from.length:0;let i=null;if(a>0){Ya(1===a);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Us(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Rr(Ks(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let s=null;n.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,Fi(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Dr(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Dr(n,e)}(n.endAt)),Ur(e,i,o,r,s,"F",l,c)}function $s(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ka()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Us(t){return t?void 0!==t.unaryFilter?[Xs(t)]:void 0!==t.fieldFilter?[Ys(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Us(t))).reduce(((t,e)=>t.concat(e))):Ka():[]}function qs(t){return bs[t]}function Gs(t){return Is[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function Ks(t){return Ai.fromServerFormat(t.fieldPath)}function Ys(t){return Tr.create(Ks(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ka()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xs(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ks(t.unaryFilter.field);return Tr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ks(t.unaryFilter.field);return Tr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ks(t.unaryFilter.field);return Tr.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ks(t.unaryFilter.field);return Tr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ka()}}function Js(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=nl(e)),e=el(t.get(n),e);return nl(e)}function el(t,e){let n=e;const a=t.length;for(let i=0;i<a;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function nl(t){return t+""}function al(t){const e=t.length;if(Ya(e>=2),2===e)return Ya(""===t.charAt(0)&&""===t.charAt(1)),zi.emptyPath();const n=e-2,a=[];let i="";for(let r=0;r<e;){const e=t.indexOf("",r);switch((e<0||e>n)&&Ka(),t.charAt(e+1)){case"":const n=t.substring(r,e);let o;0===i.length?o=n:(i+=n,o=i,i=""),a.push(o);break;case"":i+=t.substring(r,e),i+="\0";break;case"":i+=t.substring(r,e+1);break;default:Ka()}r=e+2}return new zi(a)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e){return[t,tl(e)]}function ol(t,e,n){return[t,tl(e),n]}const sl={},ll=["prefixPath","collectionGroup","readTime","documentId"],cl=["prefixPath","collectionGroup","documentId"],hl=["collectionGroup","readTime","prefixPath","documentId"],ul=["canonicalId","targetId"],dl=["targetId","path"],pl=["path","targetId"],fl=["collectionId","parent"],vl=["indexId","uid"],ml=["uid","sequenceNumber"],gl=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yl=["indexId","uid","orderedDocumentKey"],bl=["userId","collectionPath","documentId"],Il=["userId","collectionPath","largestBatchId"],wl=["userId","collectionGroup","largestBatchId"],_l=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zl=[..._l,"documentOverlays"],Ml=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Al=[...Ml,"indexConfiguration","indexState","indexEntries"],Bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ka(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Cl(((n,a)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,a)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,a)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Cl?e:Cl.resolve(e)}catch(t){return Cl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Cl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Cl.reject(e)}static resolve(t){return new Cl(((e,n)=>{e(t)}))}static reject(t){return new Cl(((e,n)=>{n(t)}))}static waitFor(t){return new Cl(((e,n)=>{let a=0,i=0,r=!1;t.forEach((t=>{++a,t.next((()=>{++i,r&&i===a&&e()}),(t=>n(t)))})),r=!0,i===a&&e()}))}static or(t){let e=Cl.resolve(!1);for(const n of t)e=e.next((t=>t?Cl.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,a)=>{n.push(e.call(this,t,a))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.At=new ei,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{e.error?this.At.reject(new Ll(t,e.error)):this.At.resolve()},this.transaction.onerror=e=>{const n=xl(e.target.error);this.At.reject(new Ll(t,n))}}static open(t,e,n,a){try{return new Hl(e,t.transaction(a,n))}catch(t){throw new Ll(e,t)}}get Rt(){return this.At.promise}abort(t){t&&this.At.reject(t),this.aborted||(Ua("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new kl(e)}}class Tl{constructor(t,e,n){this.name=t,this.version=e,this.bt=n,12.2===Tl.Vt((0,s.z$)())&&qa("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Ua("SimpleDb","Removing database:",t),Pl(window.indexedDB.deleteDatabase(t)).toPromise()}static vt(){if(!(0,s.hl)())return!1;if(Tl.St())return!0;const t=(0,s.z$)(),e=Tl.Vt(t),n=0<e&&e<10,a=Tl.Dt(t),i=0<a&&a<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static St(){var t;return"undefined"!=typeof process&&"YES"===(null===(t={NODE_ENV:"production",BASE_URL:"/project-99/"})||void 0===t?void 0:t.Ct)}static xt(t,e){return t.store(e)}static Vt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(t){return this.db||(Ua("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=t=>{const n=t.target.result;e(n)},a.onblocked=()=>{n(new Ll(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=e=>{const a=e.target.error;"VersionError"===a.name?n(new ti(Qa.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===a.name?n(new ti(Qa.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Ll(t,a))},a.onupgradeneeded=t=>{Ua("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.bt.kt(e,a.transaction,t.oldVersion,this.version).next((()=>{Ua("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(t){this.Mt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,a){const i="readonly"===e;let r=0;for(;;){++r;try{this.db=await this.Nt(t);const e=Hl.open(this.db,t,i?"readonly":"readwrite",n),r=a(e).next((t=>(e.Pt(),t))).catch((t=>(e.abort(t),Cl.reject(t)))).toPromise();return r.catch((()=>{})),await e.Rt,r}catch(t){const e="FirebaseError"!==t.name&&r<3;if(Ua("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ol{constructor(t){this.Ft=t,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(t){this.Ft=t}done(){this.$t=!0}Ut(t){this.Bt=t}delete(){return Pl(this.Ft.delete())}}class Ll extends ti{constructor(t,e){super(Qa.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Sl(t){return"IndexedDbTransactionError"===t.name}class kl{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(Ua("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(Ua("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Pl(n)}add(t){return Ua("SimpleDb","ADD",this.store.name,t,t),Pl(this.store.add(t))}get(t){return Pl(this.store.get(t)).next((e=>(void 0===e&&(e=null),Ua("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return Ua("SimpleDb","DELETE",this.store.name,t),Pl(this.store.delete(t))}count(){return Ua("SimpleDb","COUNT",this.store.name),Pl(this.store.count())}qt(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.Kt(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new Cl(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}Gt(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new Cl(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}Qt(t,e){Ua("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.jt=!1;const a=this.cursor(n);return this.Kt(a,((t,e,n)=>n.delete()))}Wt(t,e){let n;e?n=t:(n={},e=t);const a=this.cursor(n);return this.Kt(a,e)}zt(t){const e=this.cursor({});return new Cl(((n,a)=>{e.onerror=t=>{const e=xl(t.target.error);a(e)},e.onsuccess=e=>{const a=e.target.result;a?t(a.primaryKey,a.value).next((t=>{t?a.continue():n()})):n()}}))}Kt(t,e){const n=[];return new Cl(((a,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void a();const r=new Ol(i),o=e(i.primaryKey,i.value,r);if(o instanceof Cl){const t=o.catch((t=>(r.done(),Cl.reject(t))));n.push(t)}r.isDone?a():null===r.Lt?i.continue():i.continue(r.Lt)}})).next((()=>Cl.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.jt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Pl(t){return new Cl(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=xl(t.target.error);n(e)}}))}let El=!1;function xl(t){const e=Tl.Vt((0,s.z$)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new ti("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return El||(El=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Vl{constructor(t,e){super(),this.Ht=t,this.currentSequenceNumber=e}}function Dl(t,e){const n=Ja(t);return Tl.xt(n.Ht,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e,n,a){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let a=0;a<this.mutations.length;a++){const e=this.mutations[a];e.key.isEqual(t.key)&&To(e,t,n[a])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Oo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Oo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),a=n;this.applyToLocalView(a),n.isValidDocument()||a.convertToNoDocument(yi.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ss())}isEqual(t){return this.batchId===t.batchId&&vi(this.mutations,t.mutations,((t,e)=>So(t,e)))&&vi(this.baseMutations,t.baseMutations,((t,e)=>So(t,e)))}}class jl{constructor(t,e,n,a){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=a}static from(t,e,n){Ya(t.mutations.length===n.length);let a=rs;const i=t.mutations;for(let r=0;r<i.length;r++)a=a.insert(i[r].key,n[r].version);return new jl(t,e,n,a)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e,n,a,i=yi.min(),r=yi.min(),o=Ci.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Zl(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Zl(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Zl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this.Jt=t}}function Ul(t,e){let n;if(e.document)n=Ps(t.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=ji.fromSegments(e.noDocument.path),a=Kl(e.noDocument.readTime);n=ur.newNoDocument(t,a),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Ka();{const t=ji.fromSegments(e.unknownDocument.path),a=Kl(e.unknownDocument.version);n=ur.newUnknownDocument(t,a)}}return e.readTime&&n.setReadTime(function(t){const e=new gi(t[0],t[1]);return yi.fromTimestamp(e)}(e.readTime)),n}function ql(t,e){const n=e.key,a={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Gl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())a.document=function(t,e){return{name:Cs(t,e.key),fields:e.data.value.mapValue.fields,updateTime:_s(t,e.version.toTimestamp())}}(t.Jt,e);else if(e.isNoDocument())a.noDocument={path:n.path.toArray(),readTime:Wl(e.version)};else{if(!e.isUnknownDocument())return Ka();a.unknownDocument={path:n.path.toArray(),version:Wl(e.version)}}return a}function Gl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Wl(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Kl(t){const e=new gi(t.seconds,t.nanoseconds);return yi.fromTimestamp(e)}function Yl(t,e){const n=(e.baseMutations||[]).map((e=>Ds(t.Jt,e)));for(let r=0;r<e.mutations.length-1;++r){const t=e.mutations[r];if(r+1<e.mutations.length&&void 0!==e.mutations[r+1].transform){const n=e.mutations[r+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const a=e.mutations.map((e=>Ds(t.Jt,e))),i=gi.fromMillis(e.localWriteTimeMs);return new Rl(e.batchId,i,n,a)}function Xl(t){const e=Kl(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Kl(t.lastLimboFreeSnapshotVersion):yi.min();let a;var i;return void 0!==t.query.documents?(Ya(1===(i=t.query).documents.length),a=Qr(qr(Os(i.documents[0])))):a=function(t){return Qr(Zs(t))}(t.query),new Zl(a,t.targetId,0,t.lastListenSequenceNumber,e,n,Ci.fromBase64String(t.resumeToken))}function Jl(t,e){const n=Wl(e.snapshotVersion),a=Wl(e.lastLimboFreeSnapshotVersion);let i;i=Br(e.target)?js(t.Jt,e.target):Ns(t.Jt,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:zr(e.target),readTime:n,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:a,query:i}}function Ql(t){const e=Zs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?to(e,e.limit,"L"):e}function tc(t,e){return new Nl(e.largestBatchId,Ds(t.Jt,e.overlayMutation))}function ec(t,e){const n=e.path.lastSegment();return[t,tl(e.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{getBundleMetadata(t,e){return ac(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:Kl(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return ac(t).put({bundleId:(n=e).id,createTime:Wl(As(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return ic(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:Ql(e.bundledQuery),readTime:Kl(e.readTime)};var e}))}saveNamedQuery(t,e){return ic(t).put(function(t){return{name:t.name,readTime:Wl(As(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function ac(t){return Dl(t,"bundles")}function ic(t){return Dl(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e){this.M=t,this.userId=e}static Yt(t,e){const n=e.uid||"";return new rc(t,n)}getOverlay(t,e){return oc(t).get(ec(this.userId,e)).next((t=>t?tc(this.M,t):null))}saveOverlays(t,e,n){const a=[];return n.forEach(((n,i)=>{const r=new Nl(e,i);a.push(this.Xt(t,r))})),Cl.waitFor(a)}removeOverlaysForBatchId(t,e,n){const a=new Set;e.forEach((t=>a.add(tl(t.getCollectionPath()))));const i=[];return a.forEach((e=>{const a=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);i.push(oc(t).Qt("collectionPathOverlayIndex",a))})),Cl.waitFor(i)}getOverlaysForCollection(t,e,n){const a=is(),i=tl(e),r=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return oc(t).qt("collectionPathOverlayIndex",r).next((t=>{for(const e of t){const t=tc(this.M,e);a.set(t.getKey(),t)}return a}))}getOverlaysForCollectionGroup(t,e,n,a){const i=is();let r;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return oc(t).Wt({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=tc(this.M,e);i.size()<a||o.largestBatchId===r?(i.set(o.getKey(),o),r=o.largestBatchId):n.done()})).next((()=>i))}Xt(t,e){return oc(t).put(function(t,e,n){const[a,i,r]=ec(e,n.mutation.key);return{userId:e,collectionPath:i,documentId:r,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Fs(t.Jt,n.mutation)}}(this.M,this.userId,e))}}function oc(t){return Dl(t,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Oi(t.integerValue));else if("doubleValue"in t){const n=Oi(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Di(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Li(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?ir(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Ka()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const a of Object.keys(n))this.re(a,e),this.te(n[a],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const a of n)this.te(a,e)}ae(t,e){this.ne(e,37),ji.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}function lc(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function cc(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const a=lc(255&t[n]);if(e+=a,8!==a)break}return e}(t);return Math.ceil(e/8)}sc.fe=new sc;class hc{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this._e(n.value),n=e.next();this.we()}me(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.ge(n.value),n=e.next();this.ye()}pe(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this._e(t);else if(t<2048)this._e(960|t>>>6),this._e(128|63&t);else if(e<"\ud800"||"\udbff"<e)this._e(480|t>>>12),this._e(128|63&t>>>6),this._e(128|63&t);else{const t=e.codePointAt(0);this._e(240|t>>>18),this._e(128|63&t>>>12),this._e(128|63&t>>>6),this._e(128|63&t)}}this.we()}Ie(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.ge(t);else if(t<2048)this.ge(960|t>>>6),this.ge(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.ge(480|t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t);else{const t=e.codePointAt(0);this.ge(240|t>>>18),this.ge(128|63&t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t)}}this.ye()}Te(t){const e=this.Ee(t),n=cc(e);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let a=e.length-n;a<e.length;++a)this.buffer[this.position++]=255&e[a]}Re(t){const e=this.Ee(t),n=cc(e);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let a=e.length-n;a<e.length;++a)this.buffer[this.position++]=~(255&e[a])}Pe(){this.be(255),this.be(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(t){this.Ae(t.length),this.buffer.set(t,this.position),this.position+=t.length}Se(){return this.buffer.slice(0,this.position)}Ee(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let a=1;a<e.length;++a)e[a]^=n?255:0;return e}_e(t){const e=255&t;0===e?(this.be(0),this.be(255)):255===e?(this.be(255),this.be(0)):this.be(e)}ge(t){const e=255&t;0===e?(this.ve(0),this.ve(255)):255===e?(this.ve(255),this.ve(0)):this.ve(t)}we(){this.be(0),this.be(1)}ye(){this.ve(0),this.ve(1)}be(t){this.Ae(1),this.buffer[this.position++]=t}ve(t){this.Ae(1),this.buffer[this.position++]=~t}Ae(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const a=new Uint8Array(n);a.set(this.buffer),this.buffer=a}}class uc{constructor(t){this.De=t}ue(t){this.De.de(t)}ie(t){this.De.pe(t)}se(t){this.De.Te(t)}ee(){this.De.Pe()}}class dc{constructor(t){this.De=t}ue(t){this.De.me(t)}ie(t){this.De.Ie(t)}se(t){this.De.Re(t)}ee(){this.De.Ve()}}class pc{constructor(){this.De=new hc,this.Ce=new uc(this.De),this.xe=new dc(this.De)}seed(t){this.De.seed(t)}Ne(t){return 0===t?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,n,a){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=a}ke(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new fc(this.indexId,this.documentKey,this.arrayValue,n)}}function vc(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=mc(t.arrayValue,e.arrayValue),0!==n?n:(n=mc(t.directionalValue,e.directionalValue),0!==n?n:ji.comparator(t.documentKey,e.documentKey)))}function mc(t,e){for(let n=0;n<t.length&&n<e.length;++n){const a=t[n]-e[n];if(0!==a)return a}return t.length-e.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Me=t.orderBy,this.Oe=[];for(const e of t.filters){const t=e;t.S()?this.Fe=t:this.Oe.push(t)}}$e(t){const e=pr(t);if(void 0!==e&&!this.Be(e))return!1;const n=fr(t);let a=0,i=0;for(;a<n.length&&this.Be(n[a]);++a);if(a===n.length)return!0;if(void 0!==this.Fe){const t=n[a];if(!this.Le(this.Fe,t)||!this.Ue(this.Me[i++],t))return!1;++a}for(;a<n.length;++a){const t=n[a];if(i>=this.Me.length||!this.Ue(this.Me[i++],t))return!1}return!0}Be(t){for(const e of this.Oe)if(this.Le(e,t))return!0;return!1}Le(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}Ue(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.qe=new bc}addToCollectionParentIndex(t,e){return this.qe.add(e),Cl.resolve()}getCollectionParents(t,e){return Cl.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Cl.resolve()}deleteFieldIndex(t,e){return Cl.resolve()}getDocumentsMatchingTarget(t,e){return Cl.resolve(null)}getFieldIndex(t,e){return Cl.resolve(null)}getFieldIndexes(t,e){return Cl.resolve([])}getNextCollectionGroupToUpdate(t){return Cl.resolve(null)}updateCollectionGroup(t,e,n){return Cl.resolve()}updateIndexEntries(t,e){return Cl.resolve()}}class bc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e]||new Xo(zi.comparator),i=!a.has(n);return this.index[e]=a.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e];return a&&a.has(n)}getEntries(t){return(this.index[t]||new Xo(zi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Uint8Array(0);class wc{constructor(t,e){this.user=t,this.databaseId=e,this.Ke=new bc,this.Ge=new Go((t=>zr(t)),((t,e)=>Ar(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Ke.has(e)){const n=e.lastSegment(),a=e.popLast();t.addOnCommittedListener((()=>{this.Ke.add(e)}));const i={collectionId:n,parent:tl(a)};return _c(t).put(i)}return Cl.resolve()}getCollectionParents(t,e){const n=[],a=IDBKeyRange.bound([e,""],[mi(e),""],!1,!0);return _c(t).qt(a).next((t=>{for(const a of t){if(a.collectionId!==e)break;n.push(al(a.parent))}return n}))}addFieldIndex(t,e){const n=Mc(t),a=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);return delete a.indexId,n.add(a).next()}deleteFieldIndex(t,e){const n=Mc(t),a=Ac(t),i=zc(t);return n.delete(e.indexId).next((()=>a.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=zc(t);let a=!0;const i=new Map;return Cl.forEach(this.Qe(e),(e=>this.getFieldIndex(t,e).next((t=>{a&&(a=!!t),i.set(e,t)})))).next((()=>{if(a){let t=ss();const a=[];return Cl.forEach(i,((i,r)=>{var o;Ua("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${zr(e)}`);const s=function(t,e){const n=pr(e);if(void 0===n)return null;for(const a of Vr(t,n.fieldPath))switch(a.op){case"array-contains-any":return a.value.arrayValue.values||[];case"array-contains":return[a.value]}return null}(r,i),l=function(t,e){const n=new Map;for(const a of fr(e))for(const e of Vr(t,a.fieldPath))switch(e.op){case"==":case"in":n.set(a.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(a.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(r,i),c=function(t,e){const n=[];let a=!0;for(const i of fr(e)){const e=0===i.kind?Cr(t,i.fieldPath,t.startAt):Hr(t,i.fieldPath,t.startAt);if(!e.value)return null;n.push(e.value),a&&(a=e.inclusive)}return new Dr(n,a)}(r,i),h=function(t,e){const n=[];let a=!0;for(const i of fr(e)){const e=0===i.kind?Hr(t,i.fieldPath,t.endAt):Cr(t,i.fieldPath,t.endAt);if(!e.value)return null;n.push(e.value),a&&(a=e.inclusive)}return new Dr(n,a)}(r,i),u=this.je(i,r,c),d=this.je(i,r,h),p=this.We(i,r,l),f=this.ze(i.indexId,s,u,!!c&&c.inclusive,d,!!h&&h.inclusive,p);return Cl.forEach(f,(i=>n.Gt(i,e.limit).next((e=>{e.forEach((e=>{const n=ji.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),a.push(n))}))}))))})).next((()=>a))}return Cl.resolve(null)}))}Qe(t){let e=this.Ge.get(t);return e||(e=[t],this.Ge.set(t,e),e)}ze(t,e,n,a,i,r,o){const s=(null!=e?e.length:1)*Math.max(null!=n?n.length:1,null!=i?i.length:1),l=s/(null!=e?e.length:1),c=[];for(let h=0;h<s;++h){const s=e?this.He(e[h/l]):Ic,u=n?this.Je(t,s,n[h%l],a):this.Ye(t),d=i?this.Xe(t,s,i[h%l],r):this.Ye(t+1);c.push(...this.createRange(u,d,o.map((e=>this.Je(t,s,e,!0)))))}return c}Je(t,e,n,a){const i=new fc(t,ji.empty(),e,n);return a?i:i.ke()}Xe(t,e,n,a){const i=new fc(t,ji.empty(),e,n);return a?i.ke():i}Ye(t){return new fc(t,ji.empty(),Ic,Ic)}getFieldIndex(t,e){const n=new gc(e),a=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,a).next((t=>{const e=t.filter((t=>n.$e(t)));return e.sort(((t,e)=>e.fields.length-t.fields.length)),e.length>0?e[0]:null}))}Ze(t,e){const n=new pc;for(const a of fr(t)){const t=e.data.field(a.fieldPath);if(null==t)return null;const i=n.Ne(a.kind);sc.fe.Zt(t,i)}return n.Se()}He(t){const e=new pc;return sc.fe.Zt(t,e.Ne(0)),e.Se()}tn(t,e){const n=new pc;return sc.fe.Zt(Xi(this.databaseId,e),n.Ne(function(t){const e=fr(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.Se()}We(t,e,n){if(null===n)return[];let a=[];a.push(new pc);let i=0;for(const r of fr(t)){const t=n[i++];for(const n of a)if(this.en(e,r.fieldPath)&&Qi(t))a=this.nn(a,r,t);else{const e=n.Ne(r.kind);sc.fe.Zt(t,e)}}return this.sn(a)}je(t,e,n){return null==n?null:this.We(t,e,n.position)}sn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Se();return e}nn(t,e,n){const a=[...t],i=[];for(const r of n.arrayValue.values||[])for(const t of a){const n=new pc;n.seed(t.Se()),sc.fe.Zt(r,n.Ne(e.kind)),i.push(n)}return i}en(t,e){return!!t.filters.find((t=>t instanceof Tr&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=Mc(t),a=Ac(t);return(e?n.qt("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.qt()).next((t=>{const e=[];return Cl.forEach(t,(t=>a.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new mr(e.sequenceNumber,new br(Kl(e.readTime),new ji(al(e.documentKey)),e.largestBatchId)):mr.empty(),a=t.fields.map((([t,e])=>new vr(Ai.fromServerFormat(t),e)));return new dr(t.indexId,t.collectionGroup,a,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:fi(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const a=Mc(t),i=Ac(t);return this.rn(t).next((t=>a.qt("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>Cl.forEach(e,(e=>i.put(function(t,e,n,a){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Wl(a.readTime),documentKey:tl(a.documentKey.path),largestBatchId:a.largestBatchId}}(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return Cl.forEach(e,((e,a)=>{const i=n.get(e.collectionGroup);return(i?Cl.resolve(i):this.getFieldIndexes(t,e.collectionGroup)).next((i=>(n.set(e.collectionGroup,i),Cl.forEach(i,(n=>this.on(t,e,n).next((e=>{const i=this.un(a,n);return e.isEqual(i)?Cl.resolve():this.an(t,a,n,e,i)})))))))}))}cn(t,e,n,a){return zc(t).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.tn(n,e.key),documentKey:e.key.path.toArray()})}hn(t,e,n,a){return zc(t).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.tn(n,e.key),e.key.path.toArray()])}on(t,e,n){const a=zc(t);let i=new Xo(vc);return a.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,e)])},((t,a)=>{i=i.add(new fc(n.indexId,e,a.arrayValue,a.directionalValue))})).next((()=>i))}un(t,e){let n=new Xo(vc);const a=this.Ze(e,t);if(null==a)return n;const i=pr(e);if(null!=i){const r=t.data.field(i.fieldPath);if(Qi(r))for(const i of r.arrayValue.values||[])n=n.add(new fc(e.indexId,t.key,this.He(i),a))}else n=n.add(new fc(e.indexId,t.key,Ic,a));return n}an(t,e,n,a,i){Ua("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const r=[];return function(t,e,n,a,i){const r=t.getIterator(),o=e.getIterator();let s=Qo(r),l=Qo(o);for(;s||l;){let t=!1,e=!1;if(s&&l){const a=n(s,l);a<0?e=!0:a>0&&(t=!0)}else null!=s?e=!0:t=!0;t?(a(l),l=Qo(o)):e?(i(s),s=Qo(r)):(s=Qo(r),l=Qo(o))}}(a,i,vc,(a=>{r.push(this.cn(t,e,n,a))}),(a=>{r.push(this.hn(t,e,n,a))})),Cl.waitFor(r)}rn(t){let e=1;return Ac(t).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,a)=>{a.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>vc(t,e))).filter(((t,e,n)=>!e||0!==vc(t,n[e-1])));const a=[];a.push(t);for(const r of n){const n=vc(r,t),i=vc(r,e);if(0===n)a[0]=t.ke();else if(n>0&&i<0)a.push(r),a.push(r.ke());else if(i>0)break}a.push(e);const i=[];for(let r=0;r<a.length;r+=2)i.push(IDBKeyRange.bound([a[r].indexId,this.uid,a[r].arrayValue,a[r].directionalValue,Ic,[]],[a[r+1].indexId,this.uid,a[r+1].arrayValue,a[r+1].directionalValue,Ic,[]]));return i}}function _c(t){return Dl(t,"collectionParents")}function zc(t){return Dl(t,"indexEntries")}function Mc(t){return Dl(t,"indexConfiguration")}function Ac(t){return Dl(t,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Vc(t,Vc.DEFAULT_COLLECTION_PERCENTILE,Vc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e,n){const a=t.store("mutations"),i=t.store("documentMutations"),r=[],o=IDBKeyRange.only(n.batchId);let s=0;const l=a.Wt({range:o},((t,e,n)=>(s++,n.delete())));r.push(l.next((()=>{Ya(1===s)})));const c=[];for(const h of n.mutations){const t=ol(e,h.key.path,n.batchId);r.push(i.delete(t)),c.push(h.key)}return Cl.waitFor(r).next((()=>c))}function Hc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Ka();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vc.DEFAULT_COLLECTION_PERCENTILE=10,Vc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vc.DEFAULT=new Vc(41943040,Vc.DEFAULT_COLLECTION_PERCENTILE,Vc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vc.DISABLED=new Vc(-1,0,0);class Tc{constructor(t,e,n,a){this.userId=t,this.M=e,this.indexManager=n,this.referenceDelegate=a,this.ln={}}static Yt(t,e,n,a){Ya(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new Tc(i,e,n,a)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lc(t).Wt({index:"userMutationsIndex",range:n},((t,n,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,a){const i=Sc(t),r=Lc(t);return r.add({}).next((o=>{Ya("number"==typeof o);const s=new Rl(o,e,n,a),l=function(t,e,n){const a=n.baseMutations.map((e=>Fs(t.Jt,e))),i=n.mutations.map((e=>Fs(t.Jt,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:a,mutations:i}}(this.M,this.userId,s),c=[];let h=new Xo(((t,e)=>fi(t.canonicalString(),e.canonicalString())));for(const t of a){const e=ol(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),c.push(r.put(l)),c.push(i.put(e,sl))}return h.forEach((e=>{c.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.ln[o]=s.keys()})),Cl.waitFor(c).next((()=>s))}))}lookupMutationBatch(t,e){return Lc(t).get(e).next((t=>t?(Ya(t.userId===this.userId),Yl(this.M,t)):null))}fn(t,e){return this.ln[e]?Cl.resolve(this.ln[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.ln[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,a=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Lc(t).Wt({index:"userMutationsIndex",range:a},((t,e,a)=>{e.userId===this.userId&&(Ya(e.batchId>=n),i=Yl(this.M,e)),a.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Lc(t).Wt({index:"userMutationsIndex",range:e,reverse:!0},((t,e,a)=>{n=e.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Lc(t).qt("userMutationsIndex",e).next((t=>t.map((t=>Yl(this.M,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=rl(this.userId,e.path),a=IDBKeyRange.lowerBound(n),i=[];return Sc(t).Wt({range:a},((n,a,r)=>{const[o,s,l]=n,c=al(s);if(o===this.userId&&e.path.isEqual(c))return Lc(t).get(l).next((t=>{if(!t)throw Ka();Ya(t.userId===this.userId),i.push(Yl(this.M,t))}));r.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Xo(fi);const a=[];return e.forEach((e=>{const i=rl(this.userId,e.path),r=IDBKeyRange.lowerBound(i),o=Sc(t).Wt({range:r},((t,a,i)=>{const[r,o,s]=t,l=al(o);r===this.userId&&e.path.isEqual(l)?n=n.add(s):i.done()}));a.push(o)})),Cl.waitFor(a).next((()=>this.dn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,a=n.length+1,i=rl(this.userId,n),r=IDBKeyRange.lowerBound(i);let o=new Xo(fi);return Sc(t).Wt({range:r},((t,e,i)=>{const[r,s,l]=t,c=al(s);r===this.userId&&n.isPrefixOf(c)?c.length===a&&(o=o.add(l)):i.done()})).next((()=>this.dn(t,o)))}dn(t,e){const n=[],a=[];return e.forEach((e=>{a.push(Lc(t).get(e).next((t=>{if(null===t)throw Ka();Ya(t.userId===this.userId),n.push(Yl(this.M,t))})))})),Cl.waitFor(a).next((()=>n))}removeMutationBatch(t,e){return Cc(t.Ht,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this._n(e.batchId)})),Cl.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}_n(t){delete this.ln[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return Cl.resolve();const n=IDBKeyRange.lowerBound([this.userId]),a=[];return Sc(t).Wt({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=al(t[1]);a.push(e)}else n.done()})).next((()=>{Ya(0===a.length)}))}))}containsKey(t,e){return Oc(t,this.userId,e)}wn(t){return kc(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Oc(t,e,n){const a=rl(e,n.path),i=a[1],r=IDBKeyRange.lowerBound(a);let o=!1;return Sc(t).Wt({range:r,jt:!0},((t,n,a)=>{const[r,s,l]=t;r===e&&s===i&&(o=!0),a.done()})).next((()=>o))}function Lc(t){return Dl(t,"mutations")}function Sc(t){return Dl(t,"documentMutations")}function kc(t){return Dl(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Pc(0)}static yn(){return new Pc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e){this.referenceDelegate=t,this.M=e}allocateTargetId(t){return this.pn(t).next((e=>{const n=new Pc(e.highestTargetId);return e.highestTargetId=n.next(),this.In(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.pn(t).next((t=>yi.fromTimestamp(new gi(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.pn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.pn(t).next((a=>(a.highestListenSequenceNumber=e,n&&(a.lastRemoteSnapshotVersion=n.toTimestamp()),e>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=e),this.In(t,a))))}addTargetData(t,e){return this.Tn(t,e).next((()=>this.pn(t).next((n=>(n.targetCount+=1,this.En(e,n),this.In(t,n))))))}updateTargetData(t,e){return this.Tn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>xc(t).delete(e.targetId))).next((()=>this.pn(t))).next((e=>(Ya(e.targetCount>0),e.targetCount-=1,this.In(t,e))))}removeTargets(t,e,n){let a=0;const i=[];return xc(t).Wt(((r,o)=>{const s=Xl(o);s.sequenceNumber<=e&&null===n.get(s.targetId)&&(a++,i.push(this.removeTargetData(t,s)))})).next((()=>Cl.waitFor(i))).next((()=>a))}forEachTarget(t,e){return xc(t).Wt(((t,n)=>{const a=Xl(n);e(a)}))}pn(t){return Fc(t).get("targetGlobalKey").next((t=>(Ya(null!==t),t)))}In(t,e){return Fc(t).put("targetGlobalKey",e)}Tn(t,e){return xc(t).put(Jl(this.M,e))}En(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.pn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=zr(e),a=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return xc(t).Wt({range:a,index:"queryTargetsIndex"},((t,n,a)=>{const r=Xl(n);Ar(e,r.target)&&(i=r,a.done())})).next((()=>i))}addMatchingKeys(t,e,n){const a=[],i=Dc(t);return e.forEach((e=>{const r=tl(e.path);a.push(i.put({targetId:n,path:r})),a.push(this.referenceDelegate.addReference(t,n,e))})),Cl.waitFor(a)}removeMatchingKeys(t,e,n){const a=Dc(t);return Cl.forEach(e,(e=>{const i=tl(e.path);return Cl.waitFor([a.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=Dc(t),a=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(a)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),a=Dc(t);let i=ss();return a.Wt({range:n,jt:!0},((t,e,n)=>{const a=al(t[1]),r=new ji(a);i=i.add(r)})).next((()=>i))}containsKey(t,e){const n=tl(e.path),a=IDBKeyRange.bound([n],[mi(n)],!1,!0);let i=0;return Dc(t).Wt({index:"documentTargetsIndex",jt:!0,range:a},(([t,e],n,a)=>{0!==t&&(i++,a.done())})).next((()=>i>0))}Et(t,e){return xc(t).get(e).next((t=>t?Xl(t):null))}}function xc(t){return Dl(t,"targets")}function Fc(t){return Dl(t,"targetGlobal")}function Dc(t){return Dl(t,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(t){if(t.code!==Qa.FAILED_PRECONDITION||t.message!==Bl)throw t;Ua("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc([t,e],[n,a]){const i=fi(t,n);return 0===i?fi(e,a):i}class Nc{constructor(t){this.An=t,this.buffer=new Xo(jc),this.Rn=0}Pn(){return++this.Rn}bn(t){const e=[t,this.Pn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();jc(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Zc{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.Vn=!1,this.vn=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(t)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(t){const e=this.Vn?3e5:6e4;Ua("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.vn=null,this.Vn=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Sl(t)?Ua("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rc(t)}await this.Sn(t)}))}}class $c{constructor(t,e){this.Dn=t,this.params=e}calculateTargetCount(t,e){return this.Dn.Cn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Cl.resolve(ui.A);const n=new Nc(e);return this.Dn.forEachTarget(t,(t=>n.bn(t.sequenceNumber))).next((()=>this.Dn.xn(t,(t=>n.bn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Dn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Dn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(Ua("LruGarbageCollector","Garbage collection skipped; disabled"),Cl.resolve(Bc)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ua("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bc):this.Nn(t,e)))}getCacheSize(t){return this.Dn.getCacheSize(t)}Nn(t,e){let n,a,i,r,s,l,c;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(Ua("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),a=this.params.maximumSequenceNumbersToCollect):a=e,r=Date.now(),this.nthSequenceNumber(t,a)))).next((a=>(n=a,s=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,l=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),Za()<=o["in"].DEBUG&&Ua("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-h}ms\n\tDetermined least recently used ${a} in `+(s-r)+"ms\n"+`\tRemoved ${i} targets in `+(l-s)+"ms\n"+`\tRemoved ${t} documents in `+(c-l)+"ms\n"+`Total Duration: ${c-h}ms`),Cl.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:i,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new $c(t,e)}(this,e)}Cn(t){const e=this.kn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}kn(t){let e=0;return this.xn(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}xn(t,e){return this.Mn(t,((t,n)=>e(n)))}addReference(t,e,n){return qc(t,n)}removeReference(t,e,n){return qc(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return qc(t,e)}On(t,e){return function(t,e){let n=!1;return kc(t).zt((a=>Oc(t,a,e).next((t=>(t&&(n=!0),Cl.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let i=0;return this.Mn(t,((r,o)=>{if(o<=e){const e=this.On(t,r).next((e=>{if(!e)return i++,n.getEntry(t,r).next((()=>(n.removeEntry(r,yi.min()),Dc(t).delete([0,tl(r.path)]))))}));a.push(e)}})).next((()=>Cl.waitFor(a))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return qc(t,e)}Mn(t,e){const n=Dc(t);let a,i=ui.A;return n.Wt({index:"documentTargetsIndex"},(([t,n],{path:r,sequenceNumber:o})=>{0===t?(i!==ui.A&&e(new ji(al(a)),i),i=o,a=r):i=ui.A})).next((()=>{i!==ui.A&&e(new ji(al(a)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function qc(t,e){return Dc(t).put(function(t,e){return{targetId:0,path:tl(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.changes=new Go((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ur.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Cl.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.M=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Xc(t).put(n)}removeEntry(t,e,n){return Xc(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Gl(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.Fn(t,n))))}getEntry(t,e){let n=ur.newInvalidDocument(e);return Xc(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Jc(e))},((t,a)=>{n=this.$n(e,a)})).next((()=>n))}Bn(t,e){let n={size:0,document:ur.newInvalidDocument(e)};return Xc(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Jc(e))},((t,a)=>{n={document:this.$n(e,a),size:Hc(a)}})).next((()=>n))}getEntries(t,e){let n=es();return this.Ln(t,e,((t,e)=>{const a=this.$n(t,e);n=n.insert(t,a)})).next((()=>n))}Un(t,e){let n=es(),a=new Wo(ji.comparator);return this.Ln(t,e,((t,e)=>{const i=this.$n(t,e);n=n.insert(t,i),a=a.insert(t,Hc(e))})).next((()=>({documents:n,qn:a})))}Ln(t,e,n){if(e.isEmpty())return Cl.resolve();let a=new Xo(th);e.forEach((t=>a=a.add(t)));const i=IDBKeyRange.bound(Jc(a.first()),Jc(a.last())),r=a.getIterator();let o=r.getNext();return Xc(t).Wt({index:"documentKeyIndex",range:i},((t,e,a)=>{const i=ji.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&th(o,i)<0;)n(o,null),o=r.getNext();o&&o.isEqual(i)&&(n(o,e),o=r.hasNext()?r.getNext():null),o?a.Ut(Jc(o)):a.done()})).next((()=>{for(;o;)n(o,null),o=r.hasNext()?r.getNext():null}))}getAllFromCollection(t,e,n){const a=[e.popLast().toArray(),e.lastSegment(),Gl(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xc(t).qt(IDBKeyRange.bound(a,i,!0)).next((t=>{let e=es();for(const n of t){const t=this.$n(ji.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e}))}getAllFromCollectionGroup(t,e,n,a){let i=es();const r=Qc(e,n),o=Qc(e,br.max());return Xc(t).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(r,o,!0)},((t,e,n)=>{const r=this.$n(ji.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);i=i.insert(r.key,r),i.size===a&&n.done()})).next((()=>i))}newChangeBuffer(t){return new Kc(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return Yc(t).get("remoteDocumentGlobalKey").next((t=>(Ya(!!t),t)))}Fn(t,e){return Yc(t).put("remoteDocumentGlobalKey",e)}$n(t,e){if(e){const t=Ul(this.M,e);if(!t.isNoDocument()||!t.version.isEqual(yi.min()))return t}return ur.newInvalidDocument(t)}}class Kc extends Gc{constructor(t,e){super(),this.Kn=t,this.trackRemovals=e,this.Gn=new Go((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,a=new Xo(((t,e)=>fi(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((i,r)=>{const o=this.Gn.get(i);if(e.push(this.Kn.removeEntry(t,i,o.readTime)),r.isValidDocument()){const s=ql(this.Kn.M,r);a=a.add(i.path.popLast());const l=Hc(s);n+=l-o.size,e.push(this.Kn.addEntry(t,i,s))}else if(n-=o.size,this.trackRemovals){const n=ql(this.Kn.M,r.convertToNoDocument(yi.min()));e.push(this.Kn.addEntry(t,i,n))}})),a.forEach((n=>{e.push(this.Kn.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.Kn.updateMetadata(t,n)),Cl.waitFor(e)}getFromCache(t,e){return this.Kn.Bn(t,e).next((t=>(this.Gn.set(e,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,e){return this.Kn.Un(t,e).next((({documents:t,qn:e})=>(e.forEach(((e,n)=>{this.Gn.set(e,{size:n,readTime:t.get(e).readTime})})),t)))}}function Yc(t){return Dl(t,"remoteDocumentGlobal")}function Xc(t){return Dl(t,"remoteDocumentsV14")}function Jc(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qc(t,e){const n=e.documentKey.path.toArray();return[t,Gl(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function th(t,e){const n=t.path.toArray(),a=e.path.toArray();let i=0;for(let r=0;r<n.length-2&&r<a.length-2;++r)if(i=fi(n[r],a[r]),i)return i;return i=fi(n.length,a.length),i||(i=fi(n[n.length-2],a[a.length-2]),i||fi(n[n.length-1],a[a.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.M=t}kt(t,e,n,a){const i=new Hl("createOrUpgrade",e);n<1&&a>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",il,{unique:!0}),t.createObjectStore("documentMutations")}(t),nh(t),function(t){t.createObjectStore("remoteDocuments")}(t));let r=Cl.resolve();return n<3&&a>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),nh(t)),r=r.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:yi.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(i)))),n<4&&a>=4&&(0!==n&&(r=r.next((()=>function(t,e){return e.store("mutations").qt().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",il,{unique:!0});const a=e.store("mutations"),i=n.map((t=>a.put(t)));return Cl.waitFor(i)}))}(t,i)))),r=r.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&a>=5&&(r=r.next((()=>this.Qn(i)))),n<6&&a>=6&&(r=r.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.jn(i))))),n<7&&a>=7&&(r=r.next((()=>this.Wn(i)))),n<8&&a>=8&&(r=r.next((()=>this.zn(t,i)))),n<9&&a>=9&&(r=r.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),n<10&&a>=10&&(r=r.next((()=>this.Hn(i)))),n<11&&a>=11&&(r=r.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&a>=12&&(r=r.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:bl});e.createIndex("collectionPathOverlayIndex",Il,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",wl,{unique:!1})}(t)}))),n<13&&a>=13&&(r=r.next((()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:ll});e.createIndex("documentKeyIndex",cl),e.createIndex("collectionGroupIndex",hl)}(t))).next((()=>this.Jn(t,i))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&a>=14&&(r=r.next((()=>{!function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:vl}).createIndex("sequenceNumberIndex",ml,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:gl}).createIndex("documentKeyIndex",yl,{unique:!1})}(t)}))),r}jn(t){let e=0;return t.store("remoteDocuments").Wt(((t,n)=>{e+=Hc(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Qn(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.qt().next((e=>Cl.forEach(e,(e=>{const a=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",a).next((n=>Cl.forEach(n,(n=>{Ya(n.userId===e.userId);const a=Yl(this.M,n);return Cc(t,e.userId,a).next((()=>{}))}))))}))))}Wn(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const a=[];return n.Wt(((n,i)=>{const r=new zi(n),o=function(t){return[0,tl(t)]}(r);a.push(e.get(o).next((n=>n?Cl.resolve():(n=>e.put({targetId:0,path:tl(n),sequenceNumber:t.highestListenSequenceNumber}))(r))))})).next((()=>Cl.waitFor(a)))}))}zn(t,e){t.createObjectStore("collectionParents",{keyPath:fl});const n=e.store("collectionParents"),a=new bc,i=t=>{if(a.add(t)){const e=t.lastSegment(),a=t.popLast();return n.put({collectionId:e,parent:tl(a)})}};return e.store("remoteDocuments").Wt({jt:!0},((t,e)=>{const n=new zi(t);return i(n.popLast())})).next((()=>e.store("documentMutations").Wt({jt:!0},(([t,e,n],a)=>{const r=al(e);return i(r.popLast())}))))}Hn(t){const e=t.store("targets");return e.Wt(((t,n)=>{const a=Xl(n),i=Jl(this.M,a);return e.put(i)}))}Jn(t,e){const n=e.store("remoteDocuments"),a=[];return n.Wt(((t,n)=>{const i=e.store("remoteDocumentsV14"),r=(o=n,o.document?new ji(zi.fromString(o.document.name).popFirst(5)):o.noDocument?ji.fromSegments(o.noDocument.path):o.unknownDocument?ji.fromSegments(o.unknownDocument.path):Ka()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s={prefixPath:r.slice(0,r.length-2),collectionGroup:r[r.length-2],documentId:r[r.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};a.push(i.put(s))})).next((()=>Cl.waitFor(a)))}}function nh(t){t.createObjectStore("targetDocuments",{keyPath:dl}).createIndex("documentTargetsIndex",pl,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ul,{unique:!0}),t.createObjectStore("targetGlobal")}const ah="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ih{constructor(t,e,n,a,i,r,o,s,l,c,h=13){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Yn=i,this.window=r,this.document=o,this.Xn=l,this.Zn=c,this.ts=h,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=t=>Promise.resolve(),!ih.vt())throw new ti(Qa.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Uc(this,a),this.hs=e+"main",this.M=new $l(s),this.ls=new Tl(this.hs,this.ts,new eh(this.M)),this.fs=new Ec(this.referenceDelegate,this.M),this.ds=function(t){return new Wc(t)}(this.M),this._s=new nc,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===c&&qa("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ti(Qa.FAILED_PRECONDITION,ah);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.fs.getHighestSequenceNumber(t)))})).then((t=>{this.es=new ui(t,this.Xn)})).then((()=>{this.ns=!0})).catch((t=>(this.ls&&this.ls.close(),Promise.reject(t))))}Ts(t){return this.cs=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ls.Ot((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>oh(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(t).next((t=>{t||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(t))).next((e=>this.isPrimary&&!e?this.Rs(t).next((()=>!1)):!!e&&this.Ps(t).next((()=>!0)))))).catch((t=>{if(Sl(t))return Ua("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return Ua("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Yn.enqueueRetryable((()=>this.cs(t))),this.isPrimary=t}))}Es(t){return rh(t).get("owner").next((t=>Cl.resolve(this.bs(t))))}Vs(t){return oh(t).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=Dl(t,"clientMetadata");return e.qt().next((t=>{const n=this.Ds(t,18e5),a=t.filter((t=>-1===n.indexOf(t)));return Cl.forEach(a,(t=>e.delete(t.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.ws)for(const e of t)this.ws.removeItem(this.Cs(e.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}bs(t){return!!t&&t.ownerId===this.clientId}As(t){return this.Zn?Cl.resolve(!0):rh(t).get("owner").next((e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)){if(this.bs(e)&&this.networkEnabled)return!0;if(!this.bs(e)){if(!e.allowTabSynchronization)throw new ti(Qa.FAILED_PRECONDITION,ah);return!1}}return!(!this.networkEnabled||!this.inForeground)||oh(t).qt().next((t=>void 0===this.Ds(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,a=this.networkEnabled===t.networkEnabled;if(e||n&&a)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&Ua("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Fl(t,ui.A);return this.Rs(e).next((()=>this.Vs(e)))})),this.ls.close(),this.Os()}Ds(t,e){return t.filter((t=>this.Ss(t.updateTimeMs,e)&&!this.xs(t.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(t=>oh(t).qt().next((t=>this.Ds(t,18e5).map((t=>t.clientId))))))}get started(){return this.ns}getMutationQueue(t,e){return Tc.Yt(t,this.M,e,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(t){return new wc(t,this.M.Jt.databaseId)}getDocumentOverlayCache(t){return rc.Yt(this.M,t)}getBundleCache(){return this._s}runTransaction(t,e,n){Ua("IndexedDbPersistence","Starting transaction:",t);const a="readonly"===e?"readonly":"readwrite",i=14===(r=this.ts)?Al:13===r?Ml:12===r?zl:11===r?_l:void Ka();var r;let o;return this.ls.runTransaction(t,a,i,(a=>(o=new Fl(a,this.es?this.es.next():ui.A),"readwrite-primary"===e?this.Es(o).next((t=>!!t||this.As(o))).next((e=>{if(!e)throw qa(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new ti(Qa.FAILED_PRECONDITION,Bl);return n(o)})).next((t=>this.Ps(o).next((()=>t)))):this.$s(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}$s(t){return rh(t).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)&&!this.bs(t)&&!(this.Zn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ti(Qa.FAILED_PRECONDITION,ah)}))}Ps(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return rh(t).put("owner",e)}static vt(){return Tl.vt()}Rs(t){const e=rh(t);return e.get("owner").next((t=>this.bs(t)?(Ua("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):Cl.resolve()))}Ss(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(qa(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.ss=()=>{this.Ns(),(0,s.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(t){var e;try{const n=null!==(null===(e=this.ws)||void 0===e?void 0:e.getItem(this.Cs(t)));return Ua("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return qa("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(_){qa("Failed to set zombie client id.",_)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(_){}}Cs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function rh(t){return Dl(t,"owner")}function oh(t){return Dl(t,"clientMetadata")}function sh(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lh{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const a of e)a.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return ji.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Xr(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new ji(e)).next((t=>{let e=as();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const a=e.collectionGroup;let i=as();return this.indexManager.getCollectionParents(t,a).next((r=>Cl.forEach(r,(r=>{const o=function(t,e){return new $r(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(a));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}zs(t,e,n){let a;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(a=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=a.get(n);null==i&&(i=ur.newInvalidDocument(n),a=a.insert(n,i)),Oo(t,i,e.localWriteTime),i.isFoundDocument()||(a=a.remove(n))}})).next((()=>(a.forEach(((t,n)=>{io(e,n)||(a=a.remove(t))})),a)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e,n,a){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=a}static Ys(t,e){let n=ss(),a=ss();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:a=a.add(i.doc.key)}return new ch(t,e.fromCache,n,a)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{Xs(t){this.Zs=t}Qs(t,e,n,a){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(yi.min())?this.ti(t,e):this.Zs.Ks(t,a).next((i=>{const r=this.ei(e,i);return(Gr(e)||Wr(e))&&this.ni(e.limitType,r,a,n)?this.ti(t,e):(Za()<=o["in"].DEBUG&&Ua("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ao(e)),this.Zs.Qs(t,e,gr(n,-1)).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ei(t,e){let n=new Xo(oo(t));return e.forEach(((e,a)=>{io(t,a)&&(n=n.add(a))})),n}ni(t,e,n,a){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(a)>0)}ti(t,e){return Za()<=o["in"].DEBUG&&Ua("QueryEngine","Using full collection scan to execute query:",ao(e)),this.Zs.Qs(t,e,br.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,n,a){this.persistence=t,this.si=e,this.M=a,this.ii=new Wo(fi),this.ri=new Go((t=>zr(t)),Ar),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new lh(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ii)))}}function dh(t,e,n,a){return new uh(t,e,n,a)}async function ph(t,e){const n=Ja(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let a;return n.Bs.getAllMutationBatches(t).next((i=>(a=i,n.ai(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ss();for(const t of a){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function fh(t,e){const n=Ja(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const a=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,a){const i=n.batch,r=i.keys();let o=Cl.resolve();return r.forEach((t=>{o=o.next((()=>a.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Ya(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),a.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,a)))}))}function vh(t){const e=Ja(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function mh(t,e){const n=Ja(t),a=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const o=[];e.targetChanges.forEach(((r,s)=>{const l=i.get(s);if(!l)return;o.push(n.fs.removeMatchingKeys(t,r.removedDocuments,s).next((()=>n.fs.addMatchingKeys(t,r.addedDocuments,s))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(s)?c=c.withResumeToken(Ci.EMPTY_BYTE_STRING,yi.min()).withLastLimboFreeSnapshotVersion(yi.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,a)),i=i.insert(s,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,r)&&o.push(n.fs.updateTargetData(t,c))}));let s=es();if(e.documentUpdates.forEach((a=>{e.resolvedLimboDocuments.has(a)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,a))})),o.push(gh(t,r,e.documentUpdates).next((t=>{s=t}))),!a.isEqual(yi.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,a)));o.push(e)}return Cl.waitFor(o).next((()=>r.apply(t))).next((()=>n.ci.Gs(t,s))).next((()=>s))})).then((t=>(n.ii=i,t)))}function gh(t,e,n){let a=ss();return n.forEach((t=>a=a.add(t))),e.getEntries(t,a).next((t=>{let a=es();return n.forEach(((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(yi.min())?(e.removeEntry(n,i.readTime),a=a.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),a=a.insert(n,i)):Ua("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)})),a}))}function yh(t,e){const n=Ja(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function bh(t,e){const n=Ja(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let a;return n.fs.getTargetData(t,e).next((i=>i?(a=i,Cl.resolve(a)):n.fs.allocateTargetId(t).next((i=>(a=new Zl(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,a).next((()=>a)))))))})).then((t=>{const a=n.ii.get(t.targetId);return(null===a||t.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t}))}async function Ih(t,e,n){const a=Ja(t),i=a.ii.get(e),r=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",r,(t=>a.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Sl(t))throw t;Ua("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}a.ii=a.ii.remove(e),a.ri.delete(i.target)}function wh(t,e,n){const a=Ja(t);let i=yi.min(),r=ss();return a.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const a=Ja(t),i=a.ri.get(n);return void 0!==i?Cl.resolve(a.ii.get(i)):a.fs.getTargetData(e,n)}(a,t,Qr(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,a.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>a.si.Qs(t,e,n?i:yi.min(),n?r:ss()))).next((t=>(Mh(a,ro(e),t),{documents:t,li:r})))))}function _h(t,e){const n=Ja(t),a=Ja(n.fs),i=n.ii.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(t=>a.Et(t,e).next((t=>t?t.target:null))))}function zh(t,e){const n=Ja(t),a=n.oi.get(e)||yi.min();return n.persistence.runTransaction("Get new document changes","readonly",(t=>n.ui.getAllFromCollectionGroup(t,e,gr(a,-1),Number.MAX_SAFE_INTEGER))).then((t=>(Mh(n,e,t),t)))}function Mh(t,e,n){let a=yi.min();n.forEach(((t,e)=>{e.readTime.compareTo(a)>0&&(a=e.readTime)})),t.oi.set(e,a)}async function Ah(t,e,n,a){const i=Ja(t);let r=ss(),o=es();for(const c of n){const t=e.fi(c.metadata.name);c.document&&(r=r.add(t));const n=e.di(c);n.setReadTime(e._i(c.metadata.readTime)),o=o.insert(t,n)}const s=i.ui.newChangeBuffer({trackRemovals:!0}),l=await bh(i,function(t){return Qr(qr(zi.fromString(`__bundle__/docs/${t}`)))}(a));return i.persistence.runTransaction("Apply bundle documents","readwrite",(t=>gh(t,s,o).next((e=>(s.apply(t),e))).next((e=>i.fs.removeMatchingKeysForTargetId(t,l.targetId).next((()=>i.fs.addMatchingKeys(t,r,l.targetId))).next((()=>i.ci.Gs(t,e))).next((()=>e))))))}async function Bh(t,e,n=ss()){const a=await bh(t,Qr(Ql(e.bundledQuery))),i=Ja(t);return i.persistence.runTransaction("Save named query","readwrite",(t=>{const r=As(e.readTime);if(a.snapshotVersion.compareTo(r)>=0)return i._s.saveNamedQuery(t,e);const o=a.withResumeToken(Ci.EMPTY_BYTE_STRING,r);return i.ii=i.ii.insert(o.targetId,o),i.fs.updateTargetData(t,o).next((()=>i.fs.removeMatchingKeysForTargetId(t,a.targetId))).next((()=>i.fs.addMatchingKeys(t,n,a.targetId))).next((()=>i._s.saveNamedQuery(t,e)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return Cl.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:As(n.createTime)}),Cl.resolve()}getNamedQuery(t,e){return Cl.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:Ql(t.bundledQuery),readTime:As(t.readTime)}}(e)),Cl.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.overlays=new Wo(ji.comparator),this.gi=new Map}getOverlay(t,e){return Cl.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,a)=>{this.Xt(t,e,a)})),Cl.resolve()}removeOverlaysForBatchId(t,e,n){const a=this.gi.get(n);return void 0!==a&&(a.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(n)),Cl.resolve()}getOverlaysForCollection(t,e,n){const a=is(),i=e.length+1,r=new ji(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&a.set(t.getKey(),t)}return Cl.resolve(a)}getOverlaysForCollectionGroup(t,e,n,a){let i=new Wo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=is(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=is(),s=i.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=a)break;return Cl.resolve(o)}Xt(t,e,n){if(null===n)return;const a=this.overlays.get(n.key);if(null!==a){const t=this.gi.get(a.largestBatchId).delete(n.key);this.gi.set(a.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Nl(e,n));let i=this.gi.get(e);void 0===i&&(i=ss(),this.gi.set(e,i)),this.gi.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.yi=new Xo(Th.pi),this.Ii=new Xo(Th.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new Th(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ai(new Th(t,e))}Ri(t,e){t.forEach((t=>this.removeReference(t,e)))}Pi(t){const e=new ji(new zi([])),n=new Th(e,t),a=new Th(e,t+1),i=[];return this.Ii.forEachInRange([n,a],(t=>{this.Ai(t),i.push(t.key)})),i}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new ji(new zi([])),n=new Th(e,t),a=new Th(e,t+1);let i=ss();return this.Ii.forEachInRange([n,a],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Th(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Th{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return ji.comparator(t.key,e.key)||fi(t.vi,e.vi)}static Ti(t,e){return fi(t.vi,e.vi)||ji.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Xo(Th.pi)}checkEmpty(t){return Cl.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,a){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new Rl(i,e,n,a);this.Bs.push(r);for(const o of a)this.Di=this.Di.add(new Th(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Cl.resolve(r)}lookupMutationBatch(t,e){return Cl.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,a=this.xi(n),i=a<0?0:a;return Cl.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Cl.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return Cl.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Th(e,0),a=new Th(e,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,a],(t=>{const e=this.Ci(t.vi);i.push(e)})),Cl.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Xo(fi);return e.forEach((t=>{const e=new Th(t,0),a=new Th(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,a],(t=>{n=n.add(t.vi)}))})),Cl.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,a=n.length+1;let i=n;ji.isDocumentKey(i)||(i=i.child(""));const r=new Th(new ji(i),0);let o=new Xo(fi);return this.Di.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===a&&(o=o.add(t.vi)),!0)}),r),Cl.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach((t=>{const n=this.Ci(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ya(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return Cl.forEach(e.mutations,(a=>{const i=new Th(a.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,a.key)})).next((()=>{this.Di=n}))}_n(t){}containsKey(t,e){const n=new Th(e,0),a=this.Di.firstAfterOrEqual(n);return Cl.resolve(e.isEqual(a&&a.key))}performConsistencyCheck(t){return this.Bs.length,Cl.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t){this.Mi=t,this.docs=new Wo(ji.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,a=this.docs.get(n),i=a?a.size:0,r=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Cl.resolve(n?n.document.mutableCopy():ur.newInvalidDocument(e))}getEntries(t,e){let n=es();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ur.newInvalidDocument(t))})),Cl.resolve(n)}getAllFromCollection(t,e,n){let a=es();const i=new ji(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ir(yr(i),n)<=0||(a=a.insert(i.key,i.mutableCopy()))}return Cl.resolve(a)}getAllFromCollectionGroup(t,e,n,a){Ka()}Oi(t,e){return Cl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Sh(this)}getSize(t){return Cl.resolve(this.size)}}class Sh extends Gc{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?e.push(this.Kn.addEntry(t,a)):this.Kn.removeEntry(n)})),Cl.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.persistence=t,this.Fi=new Go((t=>zr(t)),Ar),this.lastRemoteSnapshotVersion=yi.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Hh,this.targetCount=0,this.Li=Pc.gn()}forEachTarget(t,e){return this.Fi.forEach(((t,n)=>e(n))),Cl.resolve()}getLastRemoteSnapshotVersion(t){return Cl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Cl.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),Cl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),Cl.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new Pc(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Cl.resolve()}updateTargetData(t,e){return this.Tn(e),Cl.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,Cl.resolve()}removeTargets(t,e,n){let a=0;const i=[];return this.Fi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),a++)})),Cl.waitFor(i).next((()=>a))}getTargetCount(t){return Cl.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return Cl.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),Cl.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const a=this.persistence.referenceDelegate,i=[];return a&&e.forEach((e=>{i.push(a.markPotentiallyOrphaned(t,e))})),Cl.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),Cl.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return Cl.resolve(n)}containsKey(t,e){return Cl.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.Ui={},this.overlays={},this.es=new ui(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new kh(this),this.indexManager=new yc,this.ds=function(t){return new Lh(t)}((t=>this.referenceDelegate.qi(t))),this.M=new $l(e),this._s=new Vh(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ch,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new Oh(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){Ua("MemoryPersistence","Starting transaction:",t);const a=new Eh(this.es.next());return this.referenceDelegate.Ki(),n(a).next((t=>this.referenceDelegate.Gi(a).next((()=>t)))).toPromise().then((t=>(a.raiseOnCommittedEvent(),t)))}Qi(t,e){return Cl.or(Object.values(this.Ui).map((n=>()=>n.containsKey(t,e))))}}class Eh extends Vl{constructor(t){super(),this.currentSequenceNumber=t}}class xh{constructor(t){this.persistence=t,this.ji=new Hh,this.Wi=null}static zi(t){return new xh(t)}get Hi(){if(this.Wi)return this.Wi;throw Ka()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),Cl.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),Cl.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),Cl.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach((t=>this.Hi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cl.forEach(this.Hi,(n=>{const a=ji.fromPath(n);return this.Ji(t,a).next((t=>{t||e.removeEntry(a,yi.min())}))})).next((()=>(this.Wi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ji(t,e).next((t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())}))}qi(t){return 0}Ji(t,e){return Cl.or([()=>Cl.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){return`firestore_clients_${t}_${e}`}function Dh(t,e,n){let a=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(a+=`_${e.uid}`),a}function Rh(t,e){return`firestore_targets_${t}_${e}`}class jh{constructor(t,e,n,a){this.user=t,this.batchId=e,this.state=n,this.error=a}static Yi(t,e,n){const a=JSON.parse(n);let i,r="object"==typeof a&&-1!==["pending","acknowledged","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return r&&a.error&&(r="string"==typeof a.error.message&&"string"==typeof a.error.code,r&&(i=new ti(a.error.code,a.error.message))),r?new jh(t,e,a.state,i):(qa("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Xi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Nh{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Yi(t,e){const n=JSON.parse(e);let a,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(a=new ti(n.error.code,n.error.message))),i?new Nh(t,n.state,a):(qa("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Xi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Zh{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Yi(t,e){const n=JSON.parse(e);let a="object"==typeof n&&n.activeTargetIds instanceof Array,i=cs();for(let r=0;a&&r<n.activeTargetIds.length;++r)a=Ri(n.activeTargetIds[r]),i=i.add(n.activeTargetIds[r]);return a?new Zh(t,i):(qa("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class $h{constructor(t,e){this.clientId=t,this.onlineState=e}static Yi(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new $h(e.clientId,e.onlineState):(qa("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Uh{constructor(){this.activeTargetIds=cs()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qh{constructor(t,e,n,a,i){this.window=t,this.Yn=e,this.persistenceKey=n,this.er=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.nr=this.sr.bind(this),this.ir=new Wo(fi),this.started=!1,this.rr=[];const r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ur=Fh(this.persistenceKey,this.er),this.ar=function(t){return`firestore_sequence_number_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ir=this.ir.insert(this.er,new Uh),this.cr=new RegExp(`^firestore_clients_${r}_([^_]*)$`),this.hr=new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`),this.lr=new RegExp(`^firestore_targets_${r}_(\\d+)$`),this.dr=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this._r=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.nr)}static vt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Fs();for(const n of t){if(n===this.er)continue;const t=this.getItem(Fh(this.persistenceKey,n));if(t){const e=Zh.Yi(n,t);e&&(this.ir=this.ir.insert(e.clientId,e))}}this.wr();const e=this.storage.getItem(this.dr);if(e){const t=this.mr(e);t&&this.gr(t)}for(const n of this.rr)this.sr(n);this.rr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.ar,JSON.stringify(t))}getAllActiveQueryTargets(){return this.yr(this.ir)}isActiveQueryTarget(t){let e=!1;return this.ir.forEach(((n,a)=>{a.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.pr(t,"pending")}updateMutationState(t,e,n){this.pr(t,e,n),this.Ir(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Rh(this.persistenceKey,t));if(n){const a=Nh.Yi(t,n);a&&(e=a.state)}}return this.Tr.Zi(t),this.wr(),e}removeLocalQueryTarget(t){this.Tr.tr(t),this.wr()}isLocalQueryTarget(t){return this.Tr.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Rh(this.persistenceKey,t))}updateQueryState(t,e,n){this.Er(t,e,n)}handleUserChange(t,e,n){e.forEach((t=>{this.Ir(t)})),this.currentUser=t,n.forEach((t=>{this.addPendingMutation(t)}))}setOnlineState(t){this.Ar(t)}notifyBundleLoaded(t){this.Rr(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.nr),this.removeItem(this.ur),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return Ua("SharedClientState","READ",t,e),e}setItem(t,e){Ua("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){Ua("SharedClientState","REMOVE",t),this.storage.removeItem(t)}sr(t){const e=t;if(e.storageArea===this.storage){if(Ua("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ur)return void qa("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable((async()=>{if(this.started){if(null!==e.key)if(this.cr.test(e.key)){if(null==e.newValue){const t=this.Pr(e.key);return this.br(t,null)}{const t=this.Vr(e.key,e.newValue);if(t)return this.br(t.clientId,t)}}else if(this.hr.test(e.key)){if(null!==e.newValue){const t=this.vr(e.key,e.newValue);if(t)return this.Sr(t)}}else if(this.lr.test(e.key)){if(null!==e.newValue){const t=this.Dr(e.key,e.newValue);if(t)return this.Cr(t)}}else if(e.key===this.dr){if(null!==e.newValue){const t=this.mr(e.newValue);if(t)return this.gr(t)}}else if(e.key===this.ar){const t=function(t){let e=ui.A;if(null!=t)try{const n=JSON.parse(t);Ya("number"==typeof n),e=n}catch(t){qa("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==ui.A&&this.sequenceNumberHandler(t)}else if(e.key===this._r){const t=this.Nr(e.newValue);await Promise.all(t.map((t=>this.syncEngine.kr(t))))}}else this.rr.push(e)}))}}get Tr(){return this.ir.get(this.er)}wr(){this.setItem(this.ur,this.Tr.Xi())}pr(t,e,n){const a=new jh(this.currentUser,t,e,n),i=Dh(this.persistenceKey,this.currentUser,t);this.setItem(i,a.Xi())}Ir(t){const e=Dh(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Ar(t){const e={clientId:this.er,onlineState:t};this.storage.setItem(this.dr,JSON.stringify(e))}Er(t,e,n){const a=Rh(this.persistenceKey,t),i=new Nh(t,e,n);this.setItem(a,i.Xi())}Rr(t){const e=JSON.stringify(Array.from(t));this.setItem(this._r,e)}Pr(t){const e=this.cr.exec(t);return e?e[1]:null}Vr(t,e){const n=this.Pr(t);return Zh.Yi(n,e)}vr(t,e){const n=this.hr.exec(t),a=Number(n[1]),i=void 0!==n[2]?n[2]:null;return jh.Yi(new Ra(i),a,e)}Dr(t,e){const n=this.lr.exec(t),a=Number(n[1]);return Nh.Yi(a,e)}mr(t){return $h.Yi(t)}Nr(t){return JSON.parse(t)}async Sr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Mr(t.batchId,t.state,t.error);Ua("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Cr(t){return this.syncEngine.Or(t.targetId,t.state,t.error)}br(t,e){const n=e?this.ir.insert(t,e):this.ir.remove(t),a=this.yr(this.ir),i=this.yr(n),r=[],o=[];return i.forEach((t=>{a.has(t)||r.push(t)})),a.forEach((t=>{i.has(t)||o.push(t)})),this.syncEngine.Fr(r,o).then((()=>{this.ir=n}))}gr(t){this.ir.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}yr(t){let e=cs();return t.forEach(((t,n)=>{e=e.unionWith(n.activeTargetIds)})),e}}class Gh{constructor(){this.$r=new Uh,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Uh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){Ua("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){Ua("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,a,i){const r=this.uo(t,e);Ua("RestConnection","Sending: ",r,n);const o={};return this.ao(o,a,i),this.co(t,r,o,n).then((t=>(Ua("RestConnection","Received: ",t),t)),(e=>{throw Ga("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ho(t,e,n,a,i){return this.oo(t,e,n,a,i)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ja,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}uo(t,e){const n=Yh[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,a){return new Promise(((i,r)=>{const o=new Fa;o.listenOnce(Sa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case La.NO_ERROR:const e=o.getResponseJson();Ua("Connection","XHR received:",JSON.stringify(e)),i(e);break;case La.TIMEOUT:Ua("Connection",'RPC "'+t+'" timed out'),r(new ti(Qa.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const n=o.getStatus();if(Ua("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qa).indexOf(e)>=0?e:Qa.UNKNOWN}(t.status);r(new ti(e,t.message))}else r(new ti(Qa.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ti(Qa.UNAVAILABLE,"Connection failed."));break;default:Ka()}}finally{Ua("Connection",'RPC "'+t+'" completed.')}}));const s=JSON.stringify(a);o.send(e,"POST",s,n,15)}))}lo(t,e,n){const a=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ta(),r=Oa(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ea({})),this.ao(o.initMessageHeaders,e,n),(0,s.uI)()||(0,s.b$)()||(0,s.d)()||(0,s.w1)()||(0,s.Mn)()||(0,s.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=a.join("");Ua("Connection","Creating WebChannel: "+l,o);const c=i.createWebChannel(l,o);let h=!1,u=!1;const d=new Xh({Wr:t=>{u?Ua("Connection","Not sending because WebChannel is closed:",t):(h||(Ua("Connection","Opening WebChannel transport."),c.open(),h=!0),Ua("Connection","WebChannel sending:",t),c.send(t))},zr:()=>c.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,xa.EventType.OPEN,(()=>{u||Ua("Connection","WebChannel transport opened.")})),p(c,xa.EventType.CLOSE,(()=>{u||(u=!0,Ua("Connection","WebChannel transport closed"),d.no())})),p(c,xa.EventType.ERROR,(t=>{u||(u=!0,Ga("Connection","WebChannel transport errored:",t),d.no(new ti(Qa.UNAVAILABLE,"The operation could not be completed")))})),p(c,xa.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Ya(!!n);const a=n,i=a.error||(null===(e=a[0])||void 0===e?void 0:e.error);if(i){Ua("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Zo[t];if(void 0!==e)return qo(e)}(t),n=i.message;void 0===e&&(e=Qa.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,d.no(new ti(e,n)),c.close()}else Ua("Connection","WebChannel received:",n),d.so(n)}})),p(r,ka.STAT_EVENT,(t=>{t.stat===Pa.PROXY?Ua("Connection","Detected buffering proxy"):t.stat===Pa.NOPROXY&&Ua("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.eo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){return"undefined"!=typeof window?window:null}function tu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){return new ws(t,!0)}class nu{constructor(t,e,n=1e3,a=1.5,i=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=a,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),a=Math.max(0,e-n);a>0&&Ua("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,a,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e,n,a,i,r,o,s){this.Yn=t,this.Ro=n,this.Po=a,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new nu(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===Qa.RESOURCE_EXHAUSTED?(qa(e.toString()),qa("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===Qa.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.qo(t,n)}),(e=>{t((()=>{const t=new ti(Qa.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)}))}))}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{n((()=>this.Ko(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return Ua("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget((()=>this.Vo===t?e():(Ua("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iu extends au{constructor(t,e,n,a,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,a,r),this.M=i}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=xs(this.M,t),n=function(t){if(!("targetChange"in t))return yi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yi.min():e.readTime?As(e.readTime):yi.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=Ls(this.M),e.addTarget=function(t,e){let n;const a=e.target;return n=Br(a)?{documents:js(t,a)}:{query:Ns(t,a)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=zs(t,e.resumeToken):e.snapshotVersion.compareTo(yi.min())>0&&(n.readTime=_s(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=$s(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Ls(this.M),e.removeTarget=t,this.Fo(e)}}class ru extends au{constructor(t,e,n,a,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,a,r),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(Ya(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=Rs(t.writeResults,t.commitTime),n=As(t.commitTime);return this.listener.Yo(n,e)}return Ya(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=Ls(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Fs(this.M,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends class{}{constructor(t,e,n,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=a,this.tu=!1}eu(){if(this.tu)throw new ti(Qa.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,i])=>this.bo.oo(t,e,n,a,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ti(Qa.UNKNOWN,t.toString())}))}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,i])=>this.bo.ho(t,e,n,a,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ti(Qa.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class su{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(qa(e),this.iu=!1):Ua("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,a,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr((t=>{n.enqueueAndForget((async()=>{gu(this)&&(Ua("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ja(t);e.fu.add(4),await hu(e),e.wu.set("Unknown"),e.fu.delete(4),await cu(e)}(this))}))})),this.wu=new su(n,a)}}async function cu(t){if(gu(t))for(const e of t.du)await e(!0)}async function hu(t){for(const e of t.du)await e(!1)}function uu(t,e){const n=Ja(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),mu(n)?vu(n):Pu(n).xo()&&pu(n,e))}function du(t,e){const n=Ja(t),a=Pu(n);n.lu.delete(e),a.xo()&&fu(n,e),0===n.lu.size&&(a.xo()?a.Mo():gu(n)&&n.wu.set("Unknown"))}function pu(t,e){t.mu.Z(e.targetId),Pu(t).jo(e)}function fu(t,e){t.mu.Z(e),Pu(t).Wo(e)}function vu(t){t.mu=new ms({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Pu(t).start(),t.wu.ru()}function mu(t){return gu(t)&&!Pu(t).Co()&&t.lu.size>0}function gu(t){return 0===Ja(t).fu.size}function yu(t){t.mu=void 0}async function bu(t){t.lu.forEach(((e,n)=>{pu(t,e)}))}async function Iu(t,e){yu(t),mu(t)?(t.wu.au(e),vu(t)):t.wu.set("Unknown")}async function wu(t,e,n){if(t.wu.set("Online"),e instanceof fs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const a of e.targetIds)t.lu.has(a)&&(await t.remoteSyncer.rejectListen(a,n),t.lu.delete(a),t.mu.removeTarget(a))}(t,e)}catch(n){Ua("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await _u(t,n)}else if(e instanceof ds?t.mu.ut(e):e instanceof ps?t.mu._t(e):t.mu.ht(e),!n.isEqual(yi.min()))try{const e=await vh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach(((n,a)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.lu.get(a);i&&t.lu.set(a,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),fu(t,e);const a=new Zl(n.target,e,1,n.sequenceNumber);pu(t,a)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ua("RemoteStore","Failed to raise snapshot:",e),await _u(t,e)}}async function _u(t,e,n){if(!Sl(e))throw e;t.fu.add(1),await hu(t),t.wu.set("Offline"),n||(n=()=>vh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ua("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await cu(t)}))}function zu(t,e){return e().catch((n=>_u(t,n,e)))}async function Mu(t){const e=Ja(t),n=Eu(e);let a=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Au(e);)try{const t=await yh(e.localStore,a);if(null===t){0===e.hu.length&&n.Mo();break}a=t.batchId,Bu(e,t)}catch(t){await _u(e,t)}Vu(e)&&Cu(e)}function Au(t){return gu(t)&&t.hu.length<10}function Bu(t,e){t.hu.push(e);const n=Eu(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Vu(t){return gu(t)&&!Eu(t).Co()&&t.hu.length>0}function Cu(t){Eu(t).start()}async function Hu(t){Eu(t).Zo()}async function Tu(t){const e=Eu(t);for(const n of t.hu)e.Jo(n.mutations)}async function Ou(t,e,n){const a=t.hu.shift(),i=jl.from(a,e,n);await zu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Mu(t)}async function Lu(t,e){e&&Eu(t).Ho&&await async function(t,e){if(n=e.code,Uo(n)&&n!==Qa.ABORTED){const n=t.hu.shift();Eu(t).ko(),await zu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Mu(t)}var n}(t,e),Vu(t)&&Cu(t)}async function Su(t,e){const n=Ja(t);n.asyncQueue.verifyOperationInProgress(),Ua("RemoteStore","RemoteStore received new credentials");const a=gu(n);n.fu.add(3),await hu(n),a&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await cu(n)}async function ku(t,e){const n=Ja(t);e?(n.fu.delete(2),await cu(n)):e||(n.fu.add(2),await hu(n),n.wu.set("Unknown"))}function Pu(t){return t.gu||(t.gu=function(t,e,n){const a=Ja(t);return a.eu(),new iu(e,a.bo,a.authCredentials,a.appCheckCredentials,a.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:bu.bind(null,t),Yr:Iu.bind(null,t),Qo:wu.bind(null,t)}),t.du.push((async e=>{e?(t.gu.ko(),mu(t)?vu(t):t.wu.set("Unknown")):(await t.gu.stop(),yu(t))}))),t.gu}function Eu(t){return t.yu||(t.yu=function(t,e,n){const a=Ja(t);return a.eu(),new ru(e,a.bo,a.authCredentials,a.appCheckCredentials,a.M,n)}(t.datastore,t.asyncQueue,{Hr:Hu.bind(null,t),Yr:Lu.bind(null,t),Xo:Tu.bind(null,t),Yo:Ou.bind(null,t)}),t.du.push((async e=>{e?(t.yu.ko(),await Mu(t)):(await t.yu.stop(),t.hu.length>0&&(Ua("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xu{constructor(t,e,n,a,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=a,this.removalCallback=i,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,a,i){const r=Date.now()+n,o=new xu(t,e,r,a,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ti(Qa.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(t,e){if(qa("AsyncQueue",`${e}: ${t}`),Sl(t))return new ti(Qa.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ji.comparator(e.key,n.key):(t,e)=>ji.comparator(t.key,e.key),this.keyedMap=as(),this.sortedSet=new Wo(this.comparator)}static emptySet(t){return new Du(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Du))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(!t.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Du;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.pu=new Wo(ji.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):Ka():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ju{constructor(t,e,n,a,i,r,o,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=s}static fromInitialDocuments(t,e,n,a){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ju(t,e,Du.emptySet(e),i,n,a,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&eo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let a=0;a<e.length;a++)if(e[a].type!==n[a].type||!e[a].doc.isEqual(n[a].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Tu=void 0,this.listeners=[]}}class Zu{constructor(){this.queries=new Go((t=>no(t)),eo),this.onlineState="Unknown",this.Eu=new Set}}async function $u(t,e){const n=Ja(t),a=e.query;let i=!1,r=n.queries.get(a);if(r||(i=!0,r=new Nu),i)try{r.Tu=await n.onListen(a)}catch(t){const n=Fu(t,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(n)}n.queries.set(a,r),r.listeners.push(e),e.Au(n.onlineState),r.Tu&&e.Ru(r.Tu)&&Wu(n)}async function Uu(t,e){const n=Ja(t),a=e.query;let i=!1;const r=n.queries.get(a);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(a),n.onUnlisten(a)}function qu(t,e){const n=Ja(t);let a=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(i)&&(a=!0);e.Tu=i}}a&&Wu(n)}function Gu(t,e,n){const a=Ja(t),i=a.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);a.queries.delete(e)}function Wu(t){t.Eu.forEach((t=>{t.next()}))}class Ku{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ju(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=ju.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e){this.payload=t,this.byteLength=e}xu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t){this.M=t}fi(t){return Hs(this.M,t)}di(t){return t.metadata.exists?Ps(this.M,t.document,!1):ur.newNoDocument(this.fi(t.metadata.name),this._i(t.metadata.readTime))}_i(t){return As(t)}}class Ju{constructor(t,e,n){this.Nu=t,this.localStore=e,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Qu(t)}ku(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.payload.namedQuery)this.queries.push(t.payload.namedQuery);else if(t.payload.documentMetadata){this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e;const n=zi.fromString(t.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}Mu(t){const e=new Map,n=new Xu(this.M);for(const a of t)if(a.metadata.queries){const t=n.fi(a.metadata.name);for(const n of a.metadata.queries){const a=(e.get(n)||ss()).add(t);e.set(n,a)}}return e}async complete(){const t=await Ah(this.localStore,new Xu(this.M),this.documents,this.Nu.id),e=this.Mu(this.documents);for(const n of this.queries)await Bh(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Fu:t}}}function Qu(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.key=t}}class ed{constructor(t){this.key=t}}class nd{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=ss(),this.mutatedKeys=ss(),this.Uu=oo(t),this.qu=new Du(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new Ru,a=e?e.qu:this.qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=a,o=!1;const s=Gr(this.query)&&a.size===this.query.limit?a.last():null,l=Wr(this.query)&&a.size===this.query.limit?a.first():null;if(t.inorderTraversal(((t,e)=>{const c=a.get(t),h=io(this.query,e)?e:null,u=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let p=!1;c&&h?c.data.isEqual(h.data)?u!==d&&(n.track({type:3,doc:h}),p=!0):this.ju(c,h)||(n.track({type:2,doc:h}),p=!0,(s&&this.Uu(h,s)>0||l&&this.Uu(h,l)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),p=!0):c&&!h&&(n.track({type:1,doc:c}),p=!0,(s||l)&&(o=!0)),p&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Gr(this.query)||Wr(this.query))for(;r.size>this.query.limit;){const t=Gr(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{qu:r,Qu:n,ni:o,mutatedKeys:i}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const a=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const i=t.Qu.Iu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ka()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Uu(t.doc,e.doc))),this.Wu(n);const r=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,s=o!==this.Bu;return this.Bu=o,0!==i.length||s?{snapshot:new ju(this.query,t.qu,a,i,t.mutatedKeys,0===o,s,!1),Hu:r}:{Hu:r}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Ru,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=ss(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const e=[];return t.forEach((t=>{this.Lu.has(t)||e.push(new ed(t))})),this.Lu.forEach((n=>{t.has(n)||e.push(new td(n))})),e}Yu(t){this.$u=t.li,this.Lu=ss();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return ju.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class ad{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class id{constructor(t){this.key=t,this.Zu=!1}}class rd{constructor(t,e,n,a,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=a,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.ta={},this.ea=new Go((t=>no(t)),eo),this.na=new Map,this.sa=new Set,this.ia=new Wo(ji.comparator),this.ra=new Map,this.oa=new Hh,this.ua={},this.aa=new Map,this.ca=Pc.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function od(t,e){const n=Pd(t);let a,i;const r=n.ea.get(e);if(r)a=r.targetId,n.sharedClientState.addLocalQueryTarget(a),i=r.view.Xu();else{const t=await bh(n.localStore,Qr(e));n.isPrimaryClient&&uu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);a=t.targetId,i=await sd(n,e,a,"current"===r)}return i}async function sd(t,e,n,a){t.la=(e,n,a)=>async function(t,e,n,a){let i=e.view.Gu(n);i.ni&&(i=await wh(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,i))));const r=a&&a.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Id(t,e.targetId,o.Hu),o.snapshot}(t,e,n,a);const i=await wh(t.localStore,e,!0),r=new nd(e,i.li),o=r.Gu(i.documents),s=us.createSynthesizedTargetChangeForCurrentChange(n,a&&"Offline"!==t.onlineState),l=r.applyChanges(o,t.isPrimaryClient,s);Id(t,n,l.Hu);const c=new ad(e,n,r);return t.ea.set(e,c),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function ld(t,e){const n=Ja(t),a=n.ea.get(e),i=n.na.get(a.targetId);if(i.length>1)return n.na.set(a.targetId,i.filter((t=>!eo(t,e)))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await Ih(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),du(n.remoteStore,a.targetId),yd(n,a.targetId)})).catch(Rc)):(yd(n,a.targetId),await Ih(n.localStore,a.targetId,!0))}async function cd(t,e,n){const a=Ed(t);try{const t=await function(t,e){const n=Ja(t),a=gi.now(),i=e.reduce(((t,e)=>t.add(e.key)),ss());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ci.Ks(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=Lo(t,r.get(t.key));null!=e&&o.push(new Eo(t.key,e,hr(e.value.mapValue),Vo.exists(!0)))}return n.Bs.addMutationBatch(t,a,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(a.localStore,e);a.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let a=t.ua[t.currentUser.toKey()];a||(a=new Wo(fi)),a=a.insert(e,n),t.ua[t.currentUser.toKey()]=a}(a,t.batchId,n),await zd(a,t.changes),await Mu(a.remoteStore)}catch(t){const e=Fu(t,"Failed to persist write");n.reject(e)}}async function hd(t,e){const n=Ja(t);try{const t=await mh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const a=n.ra.get(e);a&&(Ya(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?a.Zu=!0:t.modifiedDocuments.size>0?Ya(a.Zu):t.removedDocuments.size>0&&(Ya(a.Zu),a.Zu=!1))})),await zd(n,t,e)}catch(t){await Rc(t)}}function ud(t,e,n){const a=Ja(t);if(a.isPrimaryClient&&0===n||!a.isPrimaryClient&&1===n){const t=[];a.ea.forEach(((n,a)=>{const i=a.view.Au(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ja(t);n.onlineState=e;let a=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Au(e)&&(a=!0)})),a&&Wu(n)}(a.eventManager,e),t.length&&a.ta.Qo(t),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function dd(t,e,n){const a=Ja(t);a.sharedClientState.updateQueryState(e,"rejected",n);const i=a.ra.get(e),r=i&&i.key;if(r){let t=new Wo(ji.comparator);t=t.insert(r,ur.newNoDocument(r,yi.min()));const n=ss().add(r),i=new hs(yi.min(),new Map,new Xo(fi),t,n);await hd(a,i),a.ia=a.ia.remove(r),a.ra.delete(e),_d(a)}else await Ih(a.localStore,e,!1).then((()=>yd(a,e,n))).catch(Rc)}async function pd(t,e){const n=Ja(t),a=e.batch.batchId;try{const t=await fh(n.localStore,e);gd(n,a,null),md(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await zd(n,t)}catch(t){await Rc(t)}}async function fd(t,e,n){const a=Ja(t);try{const t=await function(t,e){const n=Ja(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let a;return n.Bs.lookupMutationBatch(t,e).next((e=>(Ya(null!==e),a=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,a)))}))}(a.localStore,e);gd(a,e,n),md(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await zd(a,t)}catch(n){await Rc(n)}}async function vd(t,e){const n=Ja(t);gu(n.remoteStore)||Ua("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=Ja(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(t=>e.Bs.getHighestUnacknowledgedBatchId(t)))}(n.localStore);if(-1===t)return void e.resolve();const a=n.aa.get(t)||[];a.push(e),n.aa.set(t,a)}catch(t){const n=Fu(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function md(t,e){(t.aa.get(e)||[]).forEach((t=>{t.resolve()})),t.aa.delete(e)}function gd(t,e,n){const a=Ja(t);let i=a.ua[a.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),a.ua[a.currentUser.toKey()]=i}}function yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.na.get(e))t.ea.delete(a),n&&t.ta.fa(a,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach((e=>{t.oa.containsKey(e)||bd(t,e)}))}function bd(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(du(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),_d(t))}function Id(t,e,n){for(const a of n)a instanceof td?(t.oa.addReference(a.key,e),wd(t,a)):a instanceof ed?(Ua("SyncEngine","Document no longer in limbo: "+a.key),t.oa.removeReference(a.key,e),t.oa.containsKey(a.key)||bd(t,a.key)):Ka()}function wd(t,e){const n=e.key,a=n.path.canonicalString();t.ia.get(n)||t.sa.has(a)||(Ua("SyncEngine","New document in limbo: "+n),t.sa.add(a),_d(t))}function _d(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new ji(zi.fromString(e)),a=t.ca.next();t.ra.set(a,new id(n)),t.ia=t.ia.insert(n,a),uu(t.remoteStore,new Zl(Qr(qr(n.path)),a,2,ui.A))}}async function zd(t,e,n){const a=Ja(t),i=[],r=[],o=[];a.ea.isEmpty()||(a.ea.forEach(((t,s)=>{o.push(a.la(s,e,n).then((t=>{if(t){a.isPrimaryClient&&a.sharedClientState.updateQueryState(s.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=ch.Ys(s.targetId,t);r.push(e)}})))})),await Promise.all(o),a.ta.Qo(i),await async function(t,e){const n=Ja(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Cl.forEach(e,(e=>Cl.forEach(e.Hs,(a=>n.persistence.referenceDelegate.addReference(t,e.targetId,a))).next((()=>Cl.forEach(e.Js,(a=>n.persistence.referenceDelegate.removeReference(t,e.targetId,a)))))))))}catch(t){if(!Sl(t))throw t;Ua("LocalStore","Failed to update sequence numbers: "+t)}for(const a of e){const t=a.targetId;if(!a.fromCache){const e=n.ii.get(t),a=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(a);n.ii=n.ii.insert(t,i)}}}(a.localStore,r))}async function Md(t,e){const n=Ja(t);if(!n.currentUser.isEqual(e)){Ua("SyncEngine","User change. New user:",e.toKey());const t=await ph(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new ti(Qa.CANCELLED,e))}))})),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await zd(n,t.hi)}}function Ad(t,e){const n=Ja(t),a=n.ra.get(e);if(a&&a.Zu)return ss().add(a.key);{let t=ss();const a=n.na.get(e);if(!a)return t;for(const e of a){const a=n.ea.get(e);t=t.unionWith(a.view.Ku)}return t}}async function Bd(t,e){const n=Ja(t),a=await wh(n.localStore,e.query,!0),i=e.view.Yu(a);return n.isPrimaryClient&&Id(n,e.targetId,i.Hu),i}async function Vd(t,e){const n=Ja(t);return zh(n.localStore,e).then((t=>zd(n,t)))}async function Cd(t,e,n,a){const i=Ja(t),r=await function(t,e){const n=Ja(t),a=Ja(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(t=>a.fn(t,e).next((e=>e?n.ci.Ks(t,e):Cl.resolve(null)))))}(i.localStore,e);null!==r?("pending"===n?await Mu(i.remoteStore):"acknowledged"===n||"rejected"===n?(gd(i,e,a||null),md(i,e),function(t,e){Ja(Ja(t).Bs)._n(e)}(i.localStore,e)):Ka(),await zd(i,r)):Ua("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Hd(t,e){const n=Ja(t);if(Pd(n),Ed(n),!0===e&&!0!==n.ha){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await Td(n,t.toArray());n.ha=!0,await ku(n.remoteStore,!0);for(const a of e)uu(n.remoteStore,a)}else if(!1===e&&!1!==n.ha){const t=[];let e=Promise.resolve();n.na.forEach(((a,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then((()=>(yd(n,i),Ih(n.localStore,i,!0)))),du(n.remoteStore,i)})),await e,await Td(n,t),function(t){const e=Ja(t);e.ra.forEach(((t,n)=>{du(e.remoteStore,n)})),e.oa.bi(),e.ra=new Map,e.ia=new Wo(ji.comparator)}(n),n.ha=!1,await ku(n.remoteStore,!1)}}async function Td(t,e,n){const a=Ja(t),i=[],r=[];for(const o of e){let t;const e=a.na.get(o);if(e&&0!==e.length){t=await bh(a.localStore,Qr(e[0]));for(const t of e){const e=a.ea.get(t),n=await Bd(a,e);n.snapshot&&r.push(n.snapshot)}}else{const e=await _h(a.localStore,o);t=await bh(a.localStore,e),await sd(a,Od(e),o,!1)}i.push(t)}return a.ta.Qo(r),i}function Od(t){return Ur(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Ld(t){const e=Ja(t);return Ja(Ja(e.localStore).persistence).Fs()}async function Sd(t,e,n,a){const i=Ja(t);if(i.ha)return void Ua("SyncEngine","Ignoring unexpected query state notification.");const r=i.na.get(e);if(r&&r.length>0)switch(n){case"current":case"not-current":{const t=await zh(i.localStore,ro(r[0])),a=hs.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await zd(i,t,a);break}case"rejected":await Ih(i.localStore,e,!0),yd(i,e,a);break;default:Ka()}}async function kd(t,e,n){const a=Pd(t);if(a.ha){for(const t of e){if(a.na.has(t)){Ua("SyncEngine","Adding an already active target "+t);continue}const e=await _h(a.localStore,t),n=await bh(a.localStore,e);await sd(a,Od(e),n.targetId,!1),uu(a.remoteStore,n)}for(const t of n)a.na.has(t)&&await Ih(a.localStore,t,!1).then((()=>{du(a.remoteStore,t),yd(a,t)})).catch(Rc)}}function Pd(t){const e=Ja(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ad.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dd.bind(null,e),e.ta.Qo=qu.bind(null,e.eventManager),e.ta.fa=Gu.bind(null,e.eventManager),e}function Ed(t){const e=Ja(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fd.bind(null,e),e}function xd(t,e,n){const a=Ja(t);(async function(t,e,n){try{const a=await e.getMetadata();if(await function(t,e){const n=Ja(t),a=As(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(t=>n._s.getBundleMetadata(t,e.id))).then((t=>!!t&&t.createTime.compareTo(a)>=0))}(t.localStore,a))return await e.close(),n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(a)),Promise.resolve(new Set);n._updateProgress(Qu(a));const i=new Ju(a,t.localStore,e.M);let r=await e.da();for(;r;){const t=await i.ku(r);t&&n._updateProgress(t),r=await e.da()}const o=await i.complete();return await zd(t,o.Fu,void 0),await function(t,e){const n=Ja(t);return n.persistence.runTransaction("Save bundle","readwrite",(t=>n._s.saveBundleMetadata(t,e)))}(t.localStore,a),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(t){return Ga("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(a,e,n).then((t=>{a.sharedClientState.notifyBundleLoaded(t)}))}class Fd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=eu(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return dh(this.persistence,new hh,t.initialUser,this.M)}wa(t){return new Ph(xh.zi,this.M)}_a(t){return new Gh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dd extends Fd{constructor(t,e,n){super(),this.ya=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.ya.initialize(this,t),await Ed(this.ya.syncEngine),await Mu(this.ya.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ga(t){return dh(this.persistence,new hh,t.initialUser,this.M)}ma(t){const e=this.persistence.referenceDelegate.garbageCollector;return new Zc(e,t.asyncQueue)}wa(t){const e=sh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Vc.withCacheSize(this.cacheSizeBytes):Vc.DEFAULT;return new ih(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Qh(),tu(),this.M,this.sharedClientState,!!this.forceOwnership)}_a(t){return new Gh}}class Rd extends Dd{constructor(t,e){super(t,e,!1),this.ya=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.ya.syncEngine;this.sharedClientState instanceof qh&&(this.sharedClientState.syncEngine={Mr:Cd.bind(null,e),Or:Sd.bind(null,e),Fr:kd.bind(null,e),Fs:Ld.bind(null,e),kr:Vd.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ts((async t=>{await Hd(this.ya.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())}))}_a(t){const e=Qh();if(!qh.vt(e))throw new ti(Qa.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=sh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new qh(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class jd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ud(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Md.bind(null,this.syncEngine),await ku(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Zu}createDatastore(t){const e=eu(t.databaseInfo.databaseId),n=(a=t.databaseInfo,new Jh(a));var a;return function(t,e,n,a){return new ou(t,e,n,a)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,a=t.asyncQueue,i=t=>ud(this.syncEngine,t,0),r=Kh.vt()?new Kh:new Wh,new lu(e,n,a,i,r);var e,n,a,i,r}createSyncEngine(t,e){return function(t,e,n,a,i,r,o){const s=new rd(t,e,n,a,i,r);return o&&(s.ha=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ja(t);Ua("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await hu(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const a={value:t.slice(n,n+e),done:!1};return n+=e,a}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e){this.Ta=t,this.M=e,this.metadata=new ei,this.buffer=new Uint8Array,this.Ea=new TextDecoder("utf-8"),this.Aa().then((t=>{t&&t.xu()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))}),(t=>this.metadata.reject(t)))}close(){return this.Ta.cancel()}async getMetadata(){return this.metadata.promise}async da(){return await this.getMetadata(),this.Aa()}async Aa(){const t=await this.Ra();if(null===t)return null;const e=this.Ea.decode(t),n=Number(e);isNaN(n)&&this.Pa(`length string (${e}) is not valid number`);const a=await this.ba(n);return new Yu(JSON.parse(a),t.length+n)}Va(){return this.buffer.findIndex((t=>t==="{".charCodeAt(0)))}async Ra(){for(;this.Va()<0;)if(await this.va())break;if(0===this.buffer.length)return null;const t=this.Va();t<0&&this.Pa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ba(t){for(;this.buffer.length<t;)await this.va()&&this.Pa("Reached the end of bundle when more is expected.");const e=this.Ea.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Pa(t){throw this.Ta.cancel(),new Error(`Invalid bundle format: ${t}`)}async va(){const t=await this.Ta.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ti(Qa.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=Ja(t),a=Ls(n.M)+"/documents",i={documents:e.map((t=>Cs(n.M,t)))},r=await n.ho("BatchGetDocuments",a,i),o=new Map;r.forEach((t=>{const e=Es(n.M,t);o.set(e.key.toString(),e)}));const s=[];return e.forEach((t=>{const e=o.get(t.toString());Ya(!!e),s.push(e)})),s}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ro(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=ji.fromPath(e);this.mutations.push(new jo(n,this.precondition(n)))})),await async function(t,e){const n=Ja(t),a=Ls(n.M)+"/documents",i={writes:e.map((t=>Fs(n.M,t)))};await n.oo("Commit",a,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Ka();e=yi.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new ti(Qa.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Vo.updateTime(e):Vo.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(yi.min()))throw new ti(Qa.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Vo.updateTime(e)}return Vo.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e,n,a){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=a,this.Sa=5,this.Do=new nu(this.asyncQueue,"transaction_retry")}run(){this.Sa-=1,this.Da()}Da(){this.Do.To((async()=>{const t=new Ud(this.datastore),e=this.Ca(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.xa(t)}))))})).catch((t=>{this.xa(t)}))}))}Ca(t){try{const e=this.updateFunction(t);return!Fi(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}xa(t){this.Sa>0&&this.Na(t)?(this.Sa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Da(),Promise.resolve())))):this.deferred.reject(t)}Na(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Uo(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e,n,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=a,this.user=Ra.UNAUTHENTICATED,this.clientId=pi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ua("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ua("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ti(Qa.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),Ua("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let a=n.initialUser;t.setCredentialChangeListener((async t=>{a.isEqual(t)||(await ph(e.localStore,t),a=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Kd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yd(t);Ua("FirestoreClient","Initializing OnlineComponentProvider");const a=await t.getConfiguration();await e.initialize(n,a),t.setCredentialChangeListener((t=>Su(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Su(e.remoteStore,n))),t.onlineComponents=e}async function Yd(t){return t.offlineComponents||(Ua("FirestoreClient","Using default OfflineComponentProvider"),await Wd(t,new Fd)),t.offlineComponents}async function Xd(t){return t.onlineComponents||(Ua("FirestoreClient","Using default OnlineComponentProvider"),await Kd(t,new jd)),t.onlineComponents}function Jd(t){return Yd(t).then((t=>t.persistence))}function Qd(t){return Yd(t).then((t=>t.localStore))}function tp(t){return Xd(t).then((t=>t.remoteStore))}function ep(t){return Xd(t).then((t=>t.syncEngine))}async function np(t){const e=await Xd(t),n=e.eventManager;return n.onListen=od.bind(null,e.syncEngine),n.onUnlisten=ld.bind(null,e.syncEngine),n}function ap(t){return t.asyncQueue.enqueue((async()=>{const e=await Jd(t),n=await tp(t);return e.setNetworkEnabled(!0),function(t){const e=Ja(t);return e.fu.delete(0),cu(e)}(n)}))}function ip(t){return t.asyncQueue.enqueue((async()=>{const e=await Jd(t),n=await tp(t);return e.setNetworkEnabled(!1),async function(t){const e=Ja(t);e.fu.add(0),await hu(e),e.wu.set("Offline")}(n)}))}function rp(t,e){const n=new ei;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const a=await function(t,e){const n=Ja(t);return n.persistence.runTransaction("read document","readonly",(t=>n.ci.Ls(t,e)))}(t,e);a.isFoundDocument()?n.resolve(a):a.isNoDocument()?n.resolve(null):n.reject(new ti(Qa.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const a=Fu(t,`Failed to get document '${e} from cache`);n.reject(a)}}(await Qd(t),e,n))),n.promise}function op(t,e,n={}){const a=new ei;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,a,i){const r=new Zd({next:r=>{e.enqueueAndForget((()=>Uu(t,o)));const s=r.docs.has(n);!s&&r.fromCache?i.reject(new ti(Qa.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&r.fromCache&&a&&"server"===a.source?i.reject(new ti(Qa.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new Ku(qr(n.path),r,{includeMetadataChanges:!0,Cu:!0});return $u(t,o)}(await np(t),t.asyncQueue,e,n,a))),a.promise}function sp(t,e){const n=new ei;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const a=await wh(t,e,!0),i=new nd(e,a.li),r=i.Gu(a.documents),o=i.applyChanges(r,!1);n.resolve(o.snapshot)}catch(t){const a=Fu(t,`Failed to execute query '${e} against cache`);n.reject(a)}}(await Qd(t),e,n))),n.promise}function lp(t,e,n={}){const a=new ei;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,a,i){const r=new Zd({next:n=>{e.enqueueAndForget((()=>Uu(t,o))),n.fromCache&&"server"===a.source?i.reject(new ti(Qa.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ku(n,r,{includeMetadataChanges:!0,Cu:!0});return $u(t,o)}(await np(t),t.asyncQueue,e,n,a))),a.promise}function cp(t,e){const n=new Zd(e);return t.asyncQueue.enqueueAndForget((async()=>function(t,e){Ja(t).Eu.add(e),e.next()}(await np(t),n))),()=>{n.Ia(),t.asyncQueue.enqueueAndForget((async()=>function(t,e){Ja(t).Eu.delete(e)}(await np(t),n)))}}function hp(t,e){const n=new ei;return t.asyncQueue.enqueueAndForget((async()=>{const a=await function(t){return Xd(t).then((t=>t.datastore))}(t);new qd(t.asyncQueue,a,e,n).run()})),n.promise}function up(t,e,n,a){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new $d(t,e)}(function(t,e){if(t instanceof Uint8Array)return Nd(t,e);if(t instanceof ArrayBuffer)return Nd(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,eu(e));t.asyncQueue.enqueueAndForget((async()=>{xd(await ep(t),i,a)}))}function dp(t,e){return t.asyncQueue.enqueue((async()=>function(t,e){const n=Ja(t);return n.persistence.runTransaction("Get named query","readonly",(t=>n._s.getNamedQuery(t,e)))}(await Qd(t),e)))}const pp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e,n){if(!n)throw new ti(Qa.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vp(t,e,n,a){if(!0===e&&!0===a)throw new ti(Qa.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mp(t){if(!ji.isDocumentKey(t))throw new ti(Qa.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gp(t){if(ji.isDocumentKey(t))throw new ti(Qa.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yp(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ka()}function bp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ti(Qa.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yp(t);throw new ti(Qa.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ip(t,e){if(e<=0)throw new ti(Qa.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ti(Qa.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ti(Qa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,vp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wp({}),this._settingsFrozen=!1,t instanceof xi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ti(Qa.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(t.options.projectId)}(t))}get app(){if(!this._app)throw new ti(Qa.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ti(Qa.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wp(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ai;switch(t.type){case"gapi":const e=t.client;return Ya(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new si(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ti(Qa.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pp.get(t);e&&(Ua("ComponentProvider","Removing Datastore"),pp.delete(t),e.terminate())}(this),Promise.resolve()}}function zp(t,e,n,a={}){var i;const r=(t=bp(t,_p))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Ga("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),a.mockUserToken){let e,n;if("string"==typeof a.mockUserToken)e=a.mockUserToken,n=Ra.MOCK_USER;else{e=(0,s.Sg)(a.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=a.mockUserToken.sub||a.mockUserToken.user_id;if(!r)throw new ti(Qa.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ra(r)}t._authCredentials=new ii(new ni(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bp(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mp(this.firestore,t,this._key)}}class Ap{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ap(this.firestore,t,this._query)}}class Bp extends Ap{constructor(t,e,n){super(t,e,qr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mp(this.firestore,null,new ji(t))}withConverter(t){return new Bp(this.firestore,t,this._path)}}function Vp(t,e,...n){if(t=(0,s.m9)(t),fp("collection","path",e),t instanceof _p){const a=zi.fromString(e,...n);return gp(a),new Bp(t,null,a)}{if(!(t instanceof Mp||t instanceof Bp))throw new ti(Qa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(zi.fromString(e,...n));return gp(a),new Bp(t.firestore,null,a)}}function Cp(t,e){if(t=bp(t,_p),fp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ti(Qa.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ap(t,null,function(t){return new $r(zi.emptyPath(),t)}(e))}function Hp(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=pi.R()),fp("doc","path",e),t instanceof _p){const a=zi.fromString(e,...n);return mp(a),new Mp(t,null,new ji(a))}{if(!(t instanceof Mp||t instanceof Bp))throw new ti(Qa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(zi.fromString(e,...n));return mp(a),new Mp(t.firestore,t instanceof Bp?t.converter:null,new ji(a))}}function Tp(t,e){return t=(0,s.m9)(t),e=(0,s.m9)(e),(t instanceof Mp||t instanceof Bp)&&(e instanceof Mp||e instanceof Bp)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Op(t,e){return t=(0,s.m9)(t),e=(0,s.m9)(e),t instanceof Ap&&e instanceof Ap&&t.firestore===e.firestore&&eo(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lp{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new nu(this,"async_queue_retry"),this.qa=()=>{const t=tu();t&&Ua("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=tu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=tu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const e=new ei;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(_){if(!Sl(_))throw _;Ua("AsyncQueue","Operation failed with retryable error: "+_)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const e=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw qa("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ba=!1,t))))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const a=xu.createAndSchedule(this,t,e,n,(t=>this.ja(t)));return this.Fa.push(a),a}Ka(){this.$a&&Ka()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}function Sp(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const a of e)if(a in n&&"function"==typeof n[a])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class kp{constructor(){this._progressObserver={},this._taskCompletionResolver=new ei,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=-1;class Ep extends _p{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Lp,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Rp(this),this._firestoreClient.terminate()}}function xp(t,e){const n=(0,i._getProvider)(t,"firestore");if(n.isInitialized()){const t=n.getImmediate(),a=n.getOptions();if((0,s.vZ)(a,e))return t;throw new ti(Qa.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==e.cacheSizeBytes&&-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ti(Qa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function Fp(t=(0,i.getApp)()){return(0,i._getProvider)(t,"firestore").getImmediate()}function Dp(t){return t._firestoreClient||Rp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rp(t){var e;const n=t._freezeSettings(),a=function(t,e,n,a){return new Ei(t,e,n,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gd(t._authCredentials,t._appCheckCredentials,t._queue,a)}function jp(t,e){Xp(t=bp(t,Ep));const n=Dp(t),a=t._freezeSettings(),i=new jd;return Zp(n,i,new Dd(i,a.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Np(t){Xp(t=bp(t,Ep));const e=Dp(t),n=t._freezeSettings(),a=new jd;return Zp(e,a,new Rd(a,n.cacheSizeBytes))}function Zp(t,e,n){const a=new ei;return t.asyncQueue.enqueue((async()=>{try{await Wd(t,n),await Kd(t,e),a.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===Qa.FAILED_PRECONDITION||t.code===Qa.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),a.reject(t)}})).then((()=>a.promise))}function $p(t){if(t._initialized&&!t._terminated)throw new ti(Qa.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ei;return t._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(t){if(!Tl.vt())return Promise.resolve();const e=t+"main";await Tl.delete(e)}(sh(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function Up(t){return function(t){const e=new ei;return t.asyncQueue.enqueueAndForget((async()=>vd(await ep(t),e))),e.promise}(Dp(t=bp(t,Ep)))}function qp(t){return ap(Dp(t=bp(t,Ep)))}function Gp(t){return ip(Dp(t=bp(t,Ep)))}function Wp(t){return(0,i._removeServiceInstance)(t.app,"firestore"),t._delete()}function Kp(t,e){const n=Dp(t=bp(t,Ep)),a=new kp;return up(n,t._databaseId,e,a),a}function Yp(t,e){return dp(Dp(t=bp(t,Ep)),e).then((e=>e?new Ap(t,null,e.query):null))}function Xp(t){if(t._initialized||t._terminated)throw new ti(Qa.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ti(Qa.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Qp(){return new Jp("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new tf(Ci.fromBase64String(t))}catch(t){throw new ti(Qa.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new tf(Ci.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ti(Qa.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ti(Qa.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return fi(this._lat,t._lat)||fi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=/^__.*__$/;class rf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Eo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Po(t,this.data,e,this.fieldTransforms)}}class of{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Eo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function sf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ka()}}class lf{constructor(t,e,n,a,i,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=a,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new lf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.Za({path:n,ec:!1});return a.nc(t),a}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.Za({path:n,ec:!1});return a.Ya(),a}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Cf(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(sf(this.Xa)&&af.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class cf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||eu(t)}ac(t,e,n,a=!1){return new lf({Xa:t,methodName:e,uc:n,path:Ai.emptyPath(),ec:!1,oc:a},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function hf(t){const e=t._freezeSettings(),n=eu(t._databaseId);return new cf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uf(t,e,n,a,i,r={}){const o=t.ac(r.merge||r.mergeFields?2:0,e,n,i);Mf("Data must be an object, but it was:",o,a);const s=_f(a,o);let l,c;if(r.merge)l=new Bi(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const a of r.mergeFields){const i=Af(e,a,n);if(!o.contains(i))throw new ti(Qa.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Hf(t,i)||t.push(i)}l=new Bi(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new rf(new cr(s),l,c)}class df extends ef{_toFieldTransform(t){if(2!==t.Xa)throw 1===t.Xa?t.rc(`${this._methodName}() can only appear at the top level of your update data`):t.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof df}}function pf(t,e,n){return new lf({Xa:3,uc:e.settings.uc,methodName:t._methodName,ec:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class ff extends ef{_toFieldTransform(t){return new Mo(t.path,new mo)}isEqual(t){return t instanceof ff}}class vf extends ef{constructor(t,e){super(t),this.cc=e}_toFieldTransform(t){const e=pf(this,t,!0),n=this.cc.map((t=>wf(t,e))),a=new go(n);return new Mo(t.path,a)}isEqual(t){return this===t}}class mf extends ef{constructor(t,e){super(t),this.cc=e}_toFieldTransform(t){const e=pf(this,t,!0),n=this.cc.map((t=>wf(t,e))),a=new bo(n);return new Mo(t.path,a)}isEqual(t){return this===t}}class gf extends ef{constructor(t,e){super(t),this.hc=e}_toFieldTransform(t){const e=new wo(t.M,ho(t.M,this.hc));return new Mo(t.path,e)}isEqual(t){return this===t}}function yf(t,e,n,a){const i=t.ac(1,e,n);Mf("Data must be an object, but it was:",i,a);const r=[],o=cr.empty();Ii(a,((t,a)=>{const l=Vf(e,t,n);a=(0,s.m9)(a);const c=i.sc(l);if(a instanceof df)r.push(l);else{const t=wf(a,c);null!=t&&(r.push(l),o.set(l,t))}}));const l=new Bi(r);return new of(o,l,i.fieldTransforms)}function bf(t,e,n,a,i,r){const o=t.ac(1,e,n),l=[Af(e,a,n)],c=[i];if(r.length%2!=0)throw new ti(Qa.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<r.length;s+=2)l.push(Af(e,r[s])),c.push(r[s+1]);const h=[],u=cr.empty();for(let p=l.length-1;p>=0;--p)if(!Hf(h,l[p])){const t=l[p];let e=c[p];e=(0,s.m9)(e);const n=o.sc(t);if(e instanceof df)h.push(t);else{const a=wf(e,n);null!=a&&(h.push(t),u.set(t,a))}}const d=new Bi(h);return new of(u,d,o.fieldTransforms)}function If(t,e,n,a=!1){return wf(n,t.ac(a?4:3,e))}function wf(t,e){if(zf(t=(0,s.m9)(t)))return Mf("Unsupported field value:",e,t),_f(t,e);if(t instanceof ef)return function(t,e){if(!sf(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let a=0;for(const i of t){let t=wf(i,e.ic(a));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),a++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ho(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=gi.fromDate(t);return{timestampValue:_s(e.M,n)}}if(t instanceof gi){const n=new gi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:_s(e.M,n)}}if(t instanceof nf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof tf)return{bytesValue:zs(e.M,t._byteString)};if(t instanceof Mp){const n=e.databaseId,a=t.firestore._databaseId;if(!a.isEqual(n))throw e.rc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Bs(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${yp(t)}`)}(t,e)}function _f(t,e){const n={};return wi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(t,((t,a)=>{const i=wf(a,e.tc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function zf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof gi||t instanceof nf||t instanceof tf||t instanceof Mp||t instanceof ef)}function Mf(t,e,n){if(!zf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const a=yp(n);throw"an object"===a?e.rc(t+" a custom object"):e.rc(t+" "+a)}}function Af(t,e,n){if((e=(0,s.m9)(e))instanceof Jp)return e._internalPath;if("string"==typeof e)return Vf(t,e);throw Cf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bf=new RegExp("[~\\*/\\[\\]]");function Vf(t,e,n){if(e.search(Bf)>=0)throw Cf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jp(...e.split("."))._internalPath}catch(a){throw Cf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cf(t,e,n,a,i){const r=a&&!a.isEmpty(),o=void 0!==i;let s=`Function ${e}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${a}`),o&&(l+=` in document ${i}`),l+=")"),new ti(Qa.INVALID_ARGUMENT,s+t+l)}function Hf(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e,n,a,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=a,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Of(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Lf("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Of extends Tf{data(){return super.data()}}function Lf(t,e){return"string"==typeof e?Vf(t,e):e instanceof Jp?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kf extends Tf{constructor(t,e,n,a,i,r){super(t,e,n,a,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Pf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Lf("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Pf extends kf{data(t={}){return super.data(t)}}class Ef{constructor(t,e,n,a){this._firestore=t,this._userDataWriter=e,this._snapshot=a,this.metadata=new Sf(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Pf(this._firestore,this._userDataWriter,n.key,n,new Sf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ti(Qa.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Pf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Sf(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const a=new Pf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Sf(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:xf(e.type),doc:a,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ka()}}function Ff(t,e){return t instanceof kf&&e instanceof kf?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ef&&e instanceof Ef&&t._firestore===e._firestore&&Op(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){if(Wr(t)&&0===t.explicitOrderBy.length)throw new ti(Qa.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{}function jf(t,...e){for(const n of e)t=n._apply(t);return t}class Nf extends Rf{constructor(t,e,n){super(),this.lc=t,this.fc=e,this.dc=n,this.type="where"}_apply(t){const e=hf(t.firestore),n=function(t,e,n,a,i,r,o){let s;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new ti(Qa.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){av(o,r);const e=[];for(const n of o)e.push(nv(a,t,n));s={arrayValue:{values:e}}}else s=nv(a,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||av(o,r),s=If(n,e,o,"in"===r||"not-in"===r);const l=Tr.create(i,r,s);return function(t,e){if(e.S()){const n=Yr(t);if(null!==n&&!n.isEqual(e.field))throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const a=Kr(t);null!==a&&iv(t,e.field,a)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ti(Qa.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ti(Qa.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,l),l}(t._query,"where",e,t.firestore._databaseId,this.lc,this.fc,this.dc);return new Ap(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new $r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Zf(t,e,n){const a=e,i=Lf("where",t);return new Nf(i,a,n)}class $f extends Rf{constructor(t,e){super(),this.lc=t,this._c=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ti(Qa.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ti(Qa.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Rr(e,n);return function(t,e){if(null===Kr(t)){const n=Yr(t);null!==n&&iv(t,n,e.field)}}(t,a),a}(t._query,this.lc,this._c);return new Ap(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new $r(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Uf(t,e="asc"){const n=e,a=Lf("orderBy",t);return new $f(a,n)}class qf extends Rf{constructor(t,e,n){super(),this.type=t,this.wc=e,this.mc=n}_apply(t){return new Ap(t.firestore,t.converter,to(t._query,this.wc,this.mc))}}function Gf(t){return Ip("limit",t),new qf("limit",t,"F")}function Wf(t){return Ip("limitToLast",t),new qf("limitToLast",t,"L")}class Kf extends Rf{constructor(t,e,n){super(),this.type=t,this.gc=e,this.yc=n}_apply(t){const e=ev(t,this.type,this.gc,this.yc);return new Ap(t.firestore,t.converter,function(t,e){return new $r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Yf(...t){return new Kf("startAt",t,!0)}function Xf(...t){return new Kf("startAfter",t,!1)}class Jf extends Rf{constructor(t,e,n){super(),this.type=t,this.gc=e,this.yc=n}_apply(t){const e=ev(t,this.type,this.gc,this.yc);return new Ap(t.firestore,t.converter,function(t,e){return new $r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Qf(...t){return new Jf("endBefore",t,!1)}function tv(...t){return new Jf("endAt",t,!0)}function ev(t,e,n,a){if(n[0]=(0,s.m9)(n[0]),n[0]instanceof Tf)return function(t,e,n,a,i){if(!a)throw new ti(Qa.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const r=[];for(const o of Jr(t))if(o.field.isKeyField())r.push(Xi(e,a.key));else{const t=a.data.field(o.field);if(Si(t))throw new ti(Qa.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}r.push(t)}return new Dr(r,i)}(t._query,t.firestore._databaseId,e,n[0]._document,a);{const i=hf(t.firestore);return function(t,e,n,a,i,r){const o=t.explicitOrderBy;if(i.length>o.length)throw new ti(Qa.INVALID_ARGUMENT,`Too many arguments provided to ${a}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const s=[];for(let l=0;l<i.length;l++){const r=i[l];if(o[l].field.isKeyField()){if("string"!=typeof r)throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${a}(), but got a ${typeof r}`);if(!Xr(t)&&-1!==r.indexOf("/"))throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${a}() must be a plain document ID, but '${r}' contains a slash.`);const n=t.path.child(zi.fromString(r));if(!ji.isDocumentKey(n))throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${a}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ji(n);s.push(Xi(e,i))}else{const t=If(n,a,r);s.push(t)}}return new Dr(s,r)}(t._query,t.firestore._databaseId,i,e,n,a)}}function nv(t,e,n){if("string"==typeof(n=(0,s.m9)(n))){if(""===n)throw new ti(Qa.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xr(e)&&-1!==n.indexOf("/"))throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const a=e.path.child(zi.fromString(n));if(!ji.isDocumentKey(a))throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Xi(t,new ji(a))}if(n instanceof Mp)return Xi(t,n._key);throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yp(n)}.`)}function av(t,e){if(!Array.isArray(t)||0===t.length)throw new ti(Qa.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new ti(Qa.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function iv(t,e,n){if(!n.isEqual(e))throw new ti(Qa.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{convertValue(t,e="none"){switch($i(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Oi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Li(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ka()}}convertObject(t,e){const n={};return Ii(t.fields,((t,a)=>{n[t]=this.convertValue(a,e)})),n}convertGeoPoint(t){return new nf(Oi(t.latitude),Oi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Pi(t));default:return null}}convertTimestamp(t){const e=Ti(t);return new gi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=zi.fromString(t);Ya(Qs(n));const a=new xi(n.get(1),n.get(3)),i=new ji(n.popFirst(5));return a.isEqual(e)||qa(`Document ${i} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e,n){let a;return a=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,a}class sv extends rv{constructor(t){super(),this.firestore=t}convertBytes(t){return new tf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mp(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=hf(t)}set(t,e,n){this._verifyNotCommitted();const a=cv(t,this._firestore),i=ov(a.converter,e,n),r=uf(this._dataReader,"WriteBatch.set",a._key,i,null!==a.converter,n);return this._mutations.push(r.toMutation(a._key,Vo.none())),this}update(t,e,n,...a){this._verifyNotCommitted();const i=cv(t,this._firestore);let r;return r="string"==typeof(e=(0,s.m9)(e))||e instanceof Jp?bf(this._dataReader,"WriteBatch.update",i._key,e,n,a):yf(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(r.toMutation(i._key,Vo.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=cv(t,this._firestore);return this._mutations=this._mutations.concat(new Ro(e._key,Vo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ti(Qa.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cv(t,e){if((t=(0,s.m9)(t)).firestore!==e)throw new ti(Qa.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){t=bp(t,Mp);const e=bp(t.firestore,Ep);return op(Dp(e),t._key).then((n=>Mv(e,t,n)))}class uv extends rv{constructor(t){super(),this.firestore=t}convertBytes(t){return new tf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mp(this.firestore,null,e)}}function dv(t){t=bp(t,Mp);const e=bp(t.firestore,Ep),n=Dp(e),a=new uv(e);return rp(n,t._key).then((n=>new kf(e,a,t._key,n,new Sf(null!==n&&n.hasLocalMutations,!0),t.converter)))}function pv(t){t=bp(t,Mp);const e=bp(t.firestore,Ep);return op(Dp(e),t._key,{source:"server"}).then((n=>Mv(e,t,n)))}function fv(t){t=bp(t,Ap);const e=bp(t.firestore,Ep),n=Dp(e),a=new uv(e);return Df(t._query),lp(n,t._query).then((n=>new Ef(e,a,t,n)))}function vv(t){t=bp(t,Ap);const e=bp(t.firestore,Ep),n=Dp(e),a=new uv(e);return sp(n,t._query).then((n=>new Ef(e,a,t,n)))}function mv(t){t=bp(t,Ap);const e=bp(t.firestore,Ep),n=Dp(e),a=new uv(e);return lp(n,t._query,{source:"server"}).then((n=>new Ef(e,a,t,n)))}function gv(t,e,n){t=bp(t,Mp);const a=bp(t.firestore,Ep),i=ov(t.converter,e,n);return zv(a,[uf(hf(a),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Vo.none())])}function yv(t,e,n,...a){t=bp(t,Mp);const i=bp(t.firestore,Ep),r=hf(i);let o;return o="string"==typeof(e=(0,s.m9)(e))||e instanceof Jp?bf(r,"updateDoc",t._key,e,n,a):yf(r,"updateDoc",t._key,e),zv(i,[o.toMutation(t._key,Vo.exists(!0))])}function bv(t){return zv(bp(t.firestore,Ep),[new Ro(t._key,Vo.none())])}function Iv(t,e){const n=bp(t.firestore,Ep),a=Hp(t),i=ov(t.converter,e);return zv(n,[uf(hf(t.firestore),"addDoc",a._key,i,null!==t.converter,{}).toMutation(a._key,Vo.exists(!1))]).then((()=>a))}function wv(t,...e){var n,a,i;t=(0,s.m9)(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Sp(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges};if(Sp(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(a=t.error)||void 0===a?void 0:a.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,h,u;if(t instanceof Mp)h=bp(t.firestore,Ep),u=qr(t._key.path),c={next:n=>{e[o]&&e[o](Mv(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=bp(t,Ap);h=bp(n.firestore,Ep),u=n._query;const a=new uv(h);c={next:t=>{e[o]&&e[o](new Ef(h,a,n,t))},error:e[o+1],complete:e[o+2]},Df(t._query)}return function(t,e,n,a){const i=new Zd(a),r=new Ku(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>$u(await np(t),r))),()=>{i.Ia(),t.asyncQueue.enqueueAndForget((async()=>Uu(await np(t),r)))}}(Dp(h),u,l,c)}function _v(t,e){return cp(Dp(t=bp(t,Ep)),Sp(e)?e:{next:e})}function zv(t,e){return function(t,e){const n=new ei;return t.asyncQueue.enqueueAndForget((async()=>cd(await ep(t),e,n))),n.promise}(Dp(t),e)}function Mv(t,e,n){const a=n.docs.get(e._key),i=new uv(t);return new kf(t,i,e._key,a,new Sf(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=hf(t)}get(t){const e=cv(t,this._firestore),n=new sv(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return Ka();const a=t[0];if(a.isFoundDocument())return new Tf(this._firestore,n,a.key,a,e.converter);if(a.isNoDocument())return new Tf(this._firestore,n,e._key,null,e.converter);throw Ka()}))}set(t,e,n){const a=cv(t,this._firestore),i=ov(a.converter,e,n),r=uf(this._dataReader,"Transaction.set",a._key,i,null!==a.converter,n);return this._transaction.set(a._key,r),this}update(t,e,n,...a){const i=cv(t,this._firestore);let r;return r="string"==typeof(e=(0,s.m9)(e))||e instanceof Jp?bf(this._dataReader,"Transaction.update",i._key,e,n,a):yf(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,r),this}delete(t){const e=cv(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=cv(t,this._firestore),n=new uv(this._firestore);return super.get(t).then((t=>new kf(this._firestore,n,e._key,t._document,new Sf(!1,!1),e.converter)))}}function Bv(t,e){return hp(Dp(t=bp(t,Ep)),(n=>e(new Av(t,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){return new df("deleteField")}function Cv(){return new ff("serverTimestamp")}function Hv(...t){return new vf("arrayUnion",t)}function Tv(...t){return new mf("arrayRemove",t)}function Ov(t){return new gf("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){return Dp(t=bp(t,Ep)),new lv(t,(e=>zv(t,e)))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Sv(t,e){Dp(t=bp(t,Ep));const n="string"==typeof e?function(t){try{return JSON.parse(t)}catch(t){throw new ti(Qa.INVALID_ARGUMENT,"Failed to parse JSON:"+t.message)}}(e):e,a=[];if(Array.isArray(n.indexes))for(const i of n.indexes){const t=kv(i,"collectionGroup"),e=[];if(Array.isArray(i.fields))for(const n of i.fields){const t=Vf("setIndexConfiguration",kv(n,"fieldPath"));"CONTAINS"===n.arrayConfig?e.push(new vr(t,2)):"ASCENDING"===n.order?e.push(new vr(t,0)):"DESCENDING"===n.order&&e.push(new vr(t,1))}a.push(new dr(dr.UNKNOWN_ID,t,e,mr.empty()))}return Promise.resolve()}function kv(t,e){if("string"!=typeof t[e])throw new ti(Qa.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}!function(t,e=!0){!function(t){ja=t}(i.SDK_VERSION),(0,i._registerComponent)(new r.wA("firestore",((t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=new Ep(a,new ri(t.getProvider("auth-internal")),new ci(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.registerVersion)(Da,"3.4.8",t),(0,i.registerVersion)(Da,"3.4.8","esm2017")}()},8433:function(t,e,n){"use strict";n.d(e,{$C:function(){return T},V1:function(){return L},pm:function(){return O}});n(1703);var a=n(5659),i=n(3536),r=n(7805);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="type.googleapis.com/google.protobuf.Int64Value",s="type.googleapis.com/google.protobuf.UInt64Value";function l(t,e){const n={};for(const a in t)t.hasOwnProperty(a)&&(n[a]=e(t[a]));return n}function c(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"===typeof t&&isFinite(t))return t;if(!0===t||!1===t)return t;if("[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map((t=>c(t)));if("function"===typeof t||"object"===typeof t)return l(t,(t=>c(t)));throw new Error("Data cannot be encoded in JSON: "+t)}function h(t){if(null==t)return t;if(t["@type"])switch(t["@type"]){case o:case s:{const e=Number(t["value"]);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map((t=>h(t))):"function"===typeof t||"object"===typeof t?l(t,(t=>h(t))):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u="functions",d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends i.ZR{constructor(t,e,n){super(`${u}/${t}`,e||""),this.details=n}}function f(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function v(t,e){let n,a=f(t),i=a;try{const t=e&&e.error;if(t){const e=t.status;if("string"===typeof e){if(!d[e])return new p("internal","internal");a=d[e],i=e}const r=t.message;"string"===typeof r&&(i=r),n=t.details,void 0!==n&&(n=h(n))}}catch(r){}return"ok"===a?null:new p(a,i,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||e.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||n.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null===t||void 0===t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),e=await this.getMessagingToken(),n=await this.getAppCheckToken();return{authToken:t,messagingToken:e,appCheckToken:n}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g="us-central1";function y(t){let e=null;return{promise:new Promise(((n,a)=>{e=setTimeout((()=>{a(new p("deadline-exceeded","deadline-exceeded"))}),t)})),cancel:()=>{e&&clearTimeout(e)}}}class b{constructor(t,e,n,a,i=g,r){this.app=t,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new m(e,n,a),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(i);this.customDomain=t.origin,this.region=g}catch(o){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){const n=this.emulatorOrigin;return`${n}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function I(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function w(t,e,n){return a=>z(t,e,a,n||{})}async function _(t,e,n,a){let i;n["Content-Type"]="application/json";try{i=await a(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch(o){return{status:0,json:null}}let r=null;try{r=await i.json()}catch(o){}return{status:i.status,json:r}}async function z(t,e,n,a){const i=t._url(e);n=c(n);const r={data:n},o={},s=await t.contextProvider.getContext();s.authToken&&(o["Authorization"]="Bearer "+s.authToken),s.messagingToken&&(o["Firebase-Instance-ID-Token"]=s.messagingToken),null!==s.appCheckToken&&(o["X-Firebase-AppCheck"]=s.appCheckToken);const l=a.timeout||7e4,u=y(l),d=await Promise.race([_(i,r,o,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!d)throw new p("cancelled","Firebase Functions instance was deleted.");const f=v(d.status,d.json);if(f)throw f;if(!d.json)throw new p("internal","Response is not valid JSON object.");let m=d.json.data;if("undefined"===typeof m&&(m=d.json.result),"undefined"===typeof m)throw new p("internal","Response is missing data field.");const g=h(m);return{data:g}}const M="@firebase/functions",A="0.7.11",B="auth-internal",V="app-check-internal",C="messaging-internal";function H(t,e){const n=(e,{instanceIdentifier:n})=>{const a=e.getProvider("app").getImmediate(),i=e.getProvider(B),r=e.getProvider(C),o=e.getProvider(V);return new b(a,i,r,o,n,t)};(0,a._registerComponent)(new r.wA(u,n,"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(M,A,e),(0,a.registerVersion)(M,A,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t=(0,a.getApp)(),e=g){const n=(0,a._getProvider)((0,i.m9)(t),u),r=n.getImmediate({identifier:e});return r}function O(t,e,n){I((0,i.m9)(t),e,n)}function L(t,e,n){return w((0,i.m9)(t),e,n)}H(fetch.bind(self))},4699:function(t,e,n){"use strict";n.d(e,{$Y:function(){return te},B0:function(){return Re},Br:function(){return Xe},FN:function(){return Qt},IX:function(){return de},Jt:function(){return Ue},KV:function(){return Fe},MV:function(){return Je},Pw:function(){return xe},UJ:function(){return dt},Ym:function(){return Ne},a1:function(){return Ye},aF:function(){return $e},bm:function(){return nt},cF:function(){return Ke},g6:function(){return We},gE:function(){return O},gH:function(){return B},iH:function(){return Ge},oq:function(){return qe},pb:function(){return Ze},qm:function(){return it},sd:function(){return je},sf:function(){return De},y4:function(){return C}});n(2801),n(8675),n(3462),n(1703);var a=n(5659),i=n(3536),r=n(7805);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",s="storageBucket",l=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends i.ZR{constructor(t,e){super(u(t),`Firebase Storage: ${e} (${u(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return u(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function u(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function f(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function m(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function g(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new h("canceled","User canceled the upload/download.")}function I(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function w(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function _(){return new h("no-default-bucket","No default bucket found. Did you set the '"+s+"' property when initializing the app?")}function z(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function M(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h("no-download-url","The given file does not have any download URLs.")}function B(t){return new h("invalid-argument",t)}function V(){return new h("app-deleted","The Firebase app was deleted.")}function C(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function H(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function T(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(a){return new O(t,"")}if(""===n.path)return n;throw w(t)}static makeFromUrl(t,e){let n=null;const a="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",s=new RegExp("^gs://"+a+r,"i"),l={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const h="v[A-Za-z0-9_]+",u=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${u}/${h}/b/${a}/o${d}`,"i"),f={bucket:1,path:3},v=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",g=new RegExp(`^https?://${v}/${a}/${m}`,"i"),y={bucket:1,path:2},b=[{regex:s,indices:l,postModify:i},{regex:p,indices:f,postModify:c},{regex:g,indices:y,postModify:c}];for(let o=0;o<b.length;o++){const e=b[o],a=e.regex.exec(t);if(a){const t=a[e.indices.bucket];let i=a[e.indices.path];i||(i=""),n=new O(t,i),e.postModify(n);break}}if(null==n)throw I(t);return n}}class L{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e,n){let a=1,i=null,r=null,o=!1,s=0;function l(){return 2===s}let c=!1;function h(...t){c||(c=!0,e.apply(null,t))}function u(e){i=setTimeout((()=>{i=null,t(p,l())}),e)}function d(){r&&clearTimeout(r)}function p(t,...e){if(c)return void d();if(t)return d(),void h.call(null,t,...e);const n=l()||o;if(n)return d(),void h.call(null,t,...e);let i;a<64&&(a*=2),1===s?(s=2,i=0):i=1e3*(a+Math.random()),u(i)}let f=!1;function v(t){f||(f=!0,d(),c||(null!==i?(t||(s=2),clearTimeout(i),u(0)):t||(s=1)))}return u(0),r=setTimeout((()=>{o=!0,v(!0)}),n),v}function k(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return void 0!==t}function E(t){return"function"===typeof t}function x(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function D(t){return R()&&t instanceof Blob}function R(){return"undefined"!==typeof Blob}function j(t,e,n,a){if(a<e)throw B(`Invalid value for '${t}'. Expected ${e} or greater.`);if(a>n)throw B(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e,n){let a=e;return null==n&&(a=`https://${e}`),`${n}://${a}/v0${t}`}function Z(t){const e=encodeURIComponent;let n="?";for(const a in t)if(t.hasOwnProperty(a)){const i=e(a)+"="+e(t[a]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})($||($={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(t,e,n,a,i,r,o,s,l,c,h){this.url_=t,this.method_=e,this.headers_=n,this.body_=a,this.successCodes_=i,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=s,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const a=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(a),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(a),this.pendingConnection_=null;const e=n.getErrorCode()===$.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===$.ABORT;return void t(!1,new q(!1,null,e))}const r=-1!==this.successCodes_.indexOf(i);t(!0,new q(r,n))}))},e=(t,e)=>{const n=this.resolve_,a=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());P(t)?n(t):n()}catch(r){a(r)}else if(null!==i){const t=d();t.serverResponse=i.getErrorText(),this.errorCallback_?a(this.errorCallback_(i,t)):a(t)}else if(e.canceled){const t=this.appDelete_?V():b();a(t)}else{const t=y();a(t)}};this.canceled_?e(!1,new q(!1,null,!0)):this.backoffId_=S(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&k(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],a=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||a||i}}class q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function G(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function K(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function X(t,e,n,a,i,r){const o=Z(t.urlParams),s=t.url+o,l=Object.assign({},t.headers);return K(l,e),G(l,n),W(l,r),Y(l,a),new U(s,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Q(...t){const e=J();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(R())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function tt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class at{constructor(t,e){this.data=t,this.contentType=e||null}}function it(t,e){switch(t){case nt.RAW:return new at(rt(e));case nt.BASE64:case nt.BASE64URL:return new at(st(t,e));case nt.DATA_URL:return new at(ct(e),ht(e))}throw d()}function rt(t){const e=[];for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);if(a<=127)e.push(a);else if(a<=2047)e.push(192|a>>6,128|63&a);else if(55296===(64512&a)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=a,r=t.charCodeAt(++n);a=65536|(1023&i)<<10|1023&r,e.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|63&a)}else e.push(239,191,189)}else 56320===(64512&a)?e.push(239,191,189):e.push(224|a>>12,128|a>>6&63,128|63&a)}return new Uint8Array(e)}function ot(t){let e;try{e=decodeURIComponent(t)}catch(n){throw H(nt.DATA_URL,"Malformed data URL.")}return rt(e)}function st(t,e){switch(t){case nt.BASE64:{const n=-1!==e.indexOf("-"),a=-1!==e.indexOf("_");if(n||a){const e=n?"-":"_";throw H(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case nt.BASE64URL:{const n=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(n||a){const e=n?"+":"/";throw H(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=et(e)}catch(i){throw H(t,"Invalid character found")}const a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw H(nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ut(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ct(t){const e=new lt(t);return e.base64?st(nt.BASE64,e.rest):ot(e.rest)}function ht(t){const e=new lt(t);return e.contentType}function ut(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){let n=0,a="";D(t)?(this.data_=t,n=t.size,a=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,e){if(D(this.data_)){const n=this.data_,a=tt(n,t,e);return null===a?null:new dt(a)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new dt(n,!0)}}static getBlob(...t){if(R()){const e=t.map((t=>t instanceof dt?t.data_:t));return new dt(Q.apply(null,e))}{const e=t.map((t=>F(t)?it(nt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const a=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)a[i++]=t[e]})),new dt(a,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return x(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function vt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function mt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){return e}class yt{constructor(t,e,n,a){this.server=t,this.local=e||t,this.writable=!!n,this.xform=a||gt}}let bt=null;function It(t){return!F(t)||t.length<2?t:mt(t)}function wt(){if(bt)return bt;const t=[];function e(t,e){return It(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function a(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new yt("size");return i.xform=a,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),bt=t,bt}function _t(t,e){function n(){const n=t["bucket"],a=t["fullPath"],i=new O(n,a);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zt(t,e,n){const a={type:"file"},i=n.length;for(let r=0;r<i;r++){const t=n[r];a[t.local]=t.xform(a,e[t.server])}return _t(a,t),a}function Mt(t,e,n){const a=pt(e);if(null===a)return null;const i=a;return zt(t,i,n)}function At(t,e,n,a){const i=pt(e);if(null===i)return null;if(!F(i["downloadTokens"]))return null;const r=i["downloadTokens"];if(0===r.length)return null;const o=encodeURIComponent,s=r.split(","),l=s.map((e=>{const i=t["bucket"],r=t["fullPath"],s="/b/"+o(i)+"/o/"+o(r),l=N(s,n,a),c=Z({alt:"media",token:e});return l+c}));return l[0]}function Bt(t,e){const n={},a=e.length;for(let i=0;i<a;i++){const a=e[i];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="prefixes",Ct="items";function Ht(t,e,n){const a={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Vt])for(const i of n[Vt]){const n=i.replace(/\/$/,""),r=t._makeStorageReference(new O(e,n));a.prefixes.push(r)}if(n[Ct])for(const i of n[Ct]){const n=t._makeStorageReference(new O(e,i["name"]));a.items.push(n)}return a}function Tt(t,e,n){const a=pt(n);if(null===a)return null;const i=a;return Ht(t,e,i)}class Ot{constructor(t,e,n,a){this.url=t,this.method=e,this.handler=n,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){if(!t)throw d()}function St(t,e){function n(n,a){const i=Mt(t,a,e);return Lt(null!==i),i}return n}function kt(t,e){function n(n,a){const i=Tt(t,e,a);return Lt(null!==i),i}return n}function Pt(t,e){function n(n,a){const i=Mt(t,a,e);return Lt(null!==i),At(i,a,t.host,t._protocol)}return n}function Et(t){function e(e,n){let a;return a=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():v():402===e.getStatus()?f(t.bucket):403===e.getStatus()?g(t.path):n,a.serverResponse=n.serverResponse,a}return e}function xt(t){const e=Et(t);function n(n,a){let i=e(n,a);return 404===n.getStatus()&&(i=p(t.path)),i.serverResponse=a.serverResponse,i}return n}function Ft(t,e,n){const a=e.fullServerUrl(),i=N(a,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,s=new Ot(i,r,St(t,n),o);return s.errorHandler=xt(e),s}function Dt(t,e,n,a,i){const r={};e.isRoot?r["prefix"]="":r["prefix"]=e.path+"/",n&&n.length>0&&(r["delimiter"]=n),a&&(r["pageToken"]=a),i&&(r["maxResults"]=i);const o=e.bucketOnlyServerUrl(),s=N(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,h=new Ot(s,l,kt(t,e.bucket),c);return h.urlParams=r,h.errorHandler=Et(e),h}function Rt(t,e,n){const a=e.fullServerUrl(),i=N(a,t.host,t._protocol)+"?alt=media",r="GET",o=t.maxOperationRetryTime,s=new Ot(i,r,((t,e)=>e),o);return s.errorHandler=xt(e),void 0!==n&&(s.headers["Range"]=`bytes=0-${n}`,s.successCodes=[200,206]),s}function jt(t,e,n){const a=e.fullServerUrl(),i=N(a,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,s=new Ot(i,r,Pt(t,n),o);return s.errorHandler=xt(e),s}function Nt(t,e,n,a){const i=e.fullServerUrl(),r=N(i,t.host,t._protocol),o="PATCH",s=Bt(n,a),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,h=new Ot(r,o,St(t,a),c);return h.headers=l,h.body=s,h.errorHandler=xt(e),h}function Zt(t,e){const n=e.fullServerUrl(),a=N(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(t,e){}const s=new Ot(a,i,o,r);return s.successCodes=[200,204],s.errorHandler=xt(e),s}function $t(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ut(t,e,n){const a=Object.assign({},n);return a["fullPath"]=t.path,a["size"]=e.size(),a["contentType"]||(a["contentType"]=$t(null,e)),a}function qt(t,e,n,a,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function s(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const l=s();o["Content-Type"]="multipart/related; boundary="+l;const c=Ut(e,a,i),h=Bt(c,n),u="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",p=dt.getBlob(u,a,d);if(null===p)throw z();const f={name:c["fullPath"]},v=N(r,t.host,t._protocol),m="POST",g=t.maxUploadRetryTime,y=new Ot(v,m,St(t,n),g);return y.urlParams=f,y.headers=o,y.body=p.uploadData(),y.errorHandler=Et(e),y}class Gt{constructor(t,e,n,a){this.current=t,this.total=e,this.finalized=!!n,this.metadata=a||null}}function Wt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){Lt(!1)}const a=e||["active"];return Lt(!!n&&-1!==a.indexOf(n)),n}function Kt(t,e,n,a,i){const r=e.bucketOnlyServerUrl(),o=Ut(e,a,i),s={name:o["fullPath"]},l=N(r,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${a.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},u=Bt(o,n),d=t.maxUploadRetryTime;function p(t){let e;Wt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Lt(!1)}return Lt(F(e)),e}const f=new Ot(l,c,p,d);return f.urlParams=s,f.headers=h,f.body=u,f.errorHandler=Et(e),f}function Yt(t,e,n,a){const i={"X-Goog-Upload-Command":"query"};function r(t){const e=Wt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(r){Lt(!1)}n||Lt(!1);const i=Number(n);return Lt(!isNaN(i)),new Gt(i,a.size(),"final"===e)}const o="POST",s=t.maxUploadRetryTime,l=new Ot(n,o,r,s);return l.headers=i,l.errorHandler=Et(e),l}const Xt=262144;function Jt(t,e,n,a,i,r,o,s){const l=new Gt(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=a.size()),a.size()!==l.total)throw M();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const u=l.current,d=u+h,p=h===c?"upload, finalize":"upload",f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},v=a.slice(u,d);if(null===v)throw z();function m(t,n){const i=Wt(t,["active","final"]),o=l.current+h,s=a.size();let c;return c="final"===i?St(e,r)(t,n):null,new Gt(o,s,"final"===i,c)}const g="POST",y=e.maxUploadRetryTime,b=new Ot(n,g,m,y);return b.headers=f,b.body=v.uploadData(),b.progressCallback=s||null,b.errorHandler=Et(t),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={STATE_CHANGED:"state_changed"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return te.RUNNING;case"paused":return te.PAUSED;case"success":return te.SUCCESS;case"canceled":return te.CANCELED;case"error":return te.ERROR;default:return te.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,n){const a=E(t)||null!=e||null!=n;if(a)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ie=null;class re{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=$.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=$.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,a){if(this.sent_)throw T("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==a)for(const i in a)a.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,a[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw T("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw T("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw T("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw T("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class oe extends re{initXhr(){this.xhr_.responseType="text"}}function se(){return ie?ie():new oe}class le extends re{initXhr(){this.xhr_.responseType="arraybuffer"}}function ce(){return new le}class he extends re{initXhr(){this.xhr_.responseType="blob"}}function ue(){return new he}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=wt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Kt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(n,se,t,e);this._request=a,a.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const a=Yt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(a,se,e,n);this._request=i,i.getPromise().then((t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Xt*this._chunkMultiplier,e=new Gt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((a,i)=>{let r;try{r=Jt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(s){return this._error=s,void this._transition("error")}const o=this._ref.storage._makeRequest(r,se,a,i);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Xt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Ft(this._ref.storage,this._ref._location,this._mappings),a=this._ref.storage._makeRequest(n,se,t,e);this._request=a,a.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=qt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(n,se,t,e);this._request=a,a.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=b(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,a){const i=new ne(e||void 0,n||void 0,a||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ee(this._state)){case te.SUCCESS:ae(this._resolve.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:const e=this._reject;ae(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ee(this._state);switch(e){case te.RUNNING:case te.PAUSED:t.next&&ae(t.next.bind(t,this.snapshot))();break;case te.SUCCESS:t.complete&&ae(t.complete.bind(t))();break;case te.CANCELED:case te.ERROR:t.error&&ae(t.error.bind(t,this._error))();break;default:t.error&&ae(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new pe(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mt(this._location.path)}get storage(){return this._service}get parent(){const t=ft(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new pe(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function fe(t,e){t._throwIfRoot("getBytes");const n=Rt(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,ce).then((t=>void 0!==e?t.slice(0,e):t))}function ve(t,e){t._throwIfRoot("getBlob");const n=Rt(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,ue).then((t=>void 0!==e?t.slice(0,e):t))}function me(t,e,n){t._throwIfRoot("uploadBytes");const a=qt(t.storage,t._location,wt(),new dt(e,!0),n);return t.storage.makeRequestWithTokens(a,se).then((e=>({metadata:e,ref:t})))}function ge(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new de(t,new dt(e),n)}function ye(t,e,n=nt.RAW,a){t._throwIfRoot("uploadString");const i=it(n,e),r=Object.assign({},a);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),me(t,i.data,r)}function be(t){const e={prefixes:[],items:[]};return Ie(t,e).then((()=>e))}async function Ie(t,e,n){const a={pageToken:n},i=await we(t,a);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await Ie(t,e,i.nextPageToken)}function we(t,e){null!=e&&"number"===typeof e.maxResults&&j("options.maxResults",1,1e3,e.maxResults);const n=e||{},a=Dt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(a,se)}function _e(t){t._throwIfRoot("getMetadata");const e=Ft(t.storage,t._location,wt());return t.storage.makeRequestWithTokens(e,se)}function ze(t,e){t._throwIfRoot("updateMetadata");const n=Nt(t.storage,t._location,e,wt());return t.storage.makeRequestWithTokens(n,se)}function Me(t){t._throwIfRoot("getDownloadURL");const e=jt(t.storage,t._location,wt());return t.storage.makeRequestWithTokens(e,se).then((t=>{if(null===t)throw A();return t}))}function Ae(t){t._throwIfRoot("deleteObject");const e=Zt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,se)}function Be(t,e){const n=vt(t._location.path,e),a=new O(t._location.bucket,n);return new pe(t.storage,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return/^[A-Za-z]+:\/\//.test(t)}function Ce(t,e){return new pe(t,e)}function He(t,e){if(t instanceof Se){const n=t;if(null==n._bucket)throw _();const a=new pe(n,n._bucket);return null!=e?He(a,e):a}return void 0!==e?Be(t,e):t}function Te(t,e){if(e&&Ve(e)){if(t instanceof Se)return Ce(t,e);throw B("To use ref(service, url), the first argument must be a Storage instance.")}return He(t,e)}function Oe(t,e){const n=null===e||void 0===e?void 0:e[s];return null==n?null:O.makeFromBucketSpec(n,t)}function Le(t,e,n,a={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=a;r&&(t._overrideAuthToken="string"===typeof r?r:(0,i.Sg)(r,t.app.options.projectId))}class Se{constructor(t,e,n,a,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=a,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=a?O.makeFromBucketSpec(a,this._host):Oe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=Oe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new pe(this,t)}_makeRequest(t,e,n,a){if(this._deleted)return new L(V());{const i=X(t,this._appId,n,a,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,a).getPromise()}}const ke="@firebase/storage",Pe="0.9.5",Ee="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(t,e){return t=(0,i.m9)(t),fe(t,e)}function Fe(t,e,n){return t=(0,i.m9)(t),me(t,e,n)}function De(t,e,n,a){return t=(0,i.m9)(t),ye(t,e,n,a)}function Re(t,e,n){return t=(0,i.m9)(t),ge(t,e,n)}function je(t){return t=(0,i.m9)(t),_e(t)}function Ne(t,e){return t=(0,i.m9)(t),ze(t,e)}function Ze(t,e){return t=(0,i.m9)(t),we(t,e)}function $e(t){return t=(0,i.m9)(t),be(t)}function Ue(t){return t=(0,i.m9)(t),Me(t)}function qe(t){return t=(0,i.m9)(t),Ae(t)}function Ge(t,e){return t=(0,i.m9)(t),Te(t,e)}function We(t,e){return Be(t,e)}function Ke(t=(0,a.getApp)(),e){t=(0,i.m9)(t);const n=(0,a._getProvider)(t,Ee),r=n.getImmediate({identifier:e});return r}function Ye(t,e,n,a={}){Le(t,e,n,a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e){return t=(0,i.m9)(t),ve(t,e)}function Je(t,e){throw new Error("getStream() is only supported by NodeJS builds")}function Qe(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Se(n,i,r,e,a.SDK_VERSION)}function tn(){(0,a._registerComponent)(new r.wA(Ee,Qe,"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(ke,Pe,""),(0,a.registerVersion)(ke,Pe,"esm2017")}tn()},3536:function(t,e,n){"use strict";n.d(e,{BH:function(){return u},G6:function(){return _},L:function(){return s},LL:function(){return V},Mn:function(){return w},Sg:function(){return d},UG:function(){return v},X3:function(){return G},ZB:function(){return c},ZR:function(){return B},b$:function(){return y},d:function(){return b},eu:function(){return M},hl:function(){return z},jU:function(){return m},m9:function(){return j},ne:function(){return x},pd:function(){return E},r3:function(){return T},ru:function(){return g},tV:function(){return l},uI:function(){return f},vZ:function(){return L},w1:function(){return I},xO:function(){return k},xb:function(){return O},z$:function(){return p},zd:function(){return P}});n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let i=t.charCodeAt(a);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&a+1<t.length&&56320===(64512&t.charCodeAt(a+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++a)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,a=0;while(n<t.length){const i=t[n++];if(i<128)e[a++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[a++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=t[n++],o=t[n++],s=t[n++],l=((7&i)<<18|(63&r)<<12|(63&o)<<6|63&s)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(1023&l))}else{const r=t[n++],o=t[n++];e[a++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let i=0;i<t.length;i+=3){const e=t[i],r=i+1<t.length,o=r?t[i+1]:0,s=i+2<t.length,l=s?t[i+2]:0,c=e>>2,h=(3&e)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;s||(d=64,r||(u=64)),a.push(n[c],n[h],n[u],n[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],r=i<t.length,o=r?n[t.charAt(i)]:0;++i;const s=i<t.length,l=s?n[t.charAt(i)]:64;++i;const c=i<t.length,h=c?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==l||null==h)throw Error();const u=e<<2|o>>4;if(a.push(u),64!==l){const t=o<<4&240|l>>2;if(a.push(t),64!==h){const t=l<<6&192|h;a.push(t)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=a(t);return r.encodeByteArray(e,!0)},s=function(t){return o(t).replace(/\./g,"")},l=function(t){try{return r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&h(n)&&(t[n]=c(t[n],e[n]));return t}function h(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[s(JSON.stringify(n)),s(JSON.stringify(o)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function v(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function m(){return"object"===typeof self&&self.self===self}function g(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return p().indexOf("Electron/")>=0}function I(){const t=p();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w(){return p().indexOf("MSAppHost/")>=0}function _(){return!v()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z(){return"object"===typeof indexedDB}function M(){return new Promise(((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(a);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class B extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},a=`${this.service}/${t}`,i=this.errors[t],r=i?C(i,n):"Error",o=`${this.serviceName}: ${r} (${a}).`,s=new B(a,o,n);return s}}function C(t,e){return t.replace(H,((t,n)=>{const a=e[n];return null!=a?String(a):`<${n}?>`}))}const H=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function O(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function L(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const i of n){if(!a.includes(i))return!1;const n=t[i],r=e[i];if(S(n)&&S(r)){if(!L(n,r))return!1}else if(n!==r)return!1}for(const i of a)if(!n.includes(i))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function P(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,a]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(a)}})),e}function E(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){const n=new F(t,e);return n.subscribe.bind(n)}class F{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let a;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");a=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===a.next&&(a.next=R),void 0===a.error&&(a.error=R),void 0===a.complete&&(a.complete=R);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(t){}})),this.observers.push(a),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
a.Z.registerVersion(i,r,"app-compat")},1924:function(t,e,n){"use strict";var a=n(3668),i=(n(8675),n(3462),n(1703),n(2821)),r=n(3536),o=(n(5659),n(7366),n(7805));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=2e3;async function c(t,e,n){var a;const{BuildInfo:r}=s();(0,i.ap)(e.sessionId,"AuthEvent did not contain a session ID");const o=await f(e.sessionId),l={};return(0,i.aq)()?l["ibi"]=r.packageName:(0,i.ar)()?l["apn"]=r.packageName:(0,i.as)(t,"operation-not-supported-in-this-environment"),r.displayName&&(l["appDisplayName"]=r.displayName),l["sessionId"]=o,(0,i.at)(t,n,e.type,void 0,null!==(a=e.eventId)&&void 0!==a?a:void 0,l)}async function h(t){const{BuildInfo:e}=s(),n={};(0,i.aq)()?n.iosBundleId=e.packageName:(0,i.ar)()?n.androidPackageName=e.packageName:(0,i.as)(t,"operation-not-supported-in-this-environment"),await(0,i.au)(t,n)}function u(t){const{cordova:e}=s();return new Promise((n=>{e.plugins.browsertab.isAvailable((a=>{let r=null;a?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,(0,i.ao)()?"_blank":"_system","location=yes"),n(r)}))}))}async function d(t,e,n){const{cordova:a}=s();let r=()=>{};try{await new Promise(((o,s)=>{let c=null;function h(){var t;o();const e=null===(t=a.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){c||(c=window.setTimeout((()=>{s((0,i.av)(t,"redirect-cancelled-by-user"))}),l))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}e.addPassiveListener(h),document.addEventListener("resume",u,!1),(0,i.ar)()&&document.addEventListener("visibilitychange",d,!1),r=()=>{e.removePassiveListener(h),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),c&&window.clearTimeout(c)}}))}finally{r()}}function p(t){var e,n,a,r,o,l,c,h,u,d;const p=s();(0,i.aw)("function"===typeof(null===(e=null===p||void 0===p?void 0:p.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.aw)("undefined"!==typeof(null===(n=null===p||void 0===p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.aw)("function"===typeof(null===(o=null===(r=null===(a=null===p||void 0===p?void 0:p.cordova)||void 0===a?void 0:a.plugins)||void 0===r?void 0:r.browsertab)||void 0===o?void 0:o.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aw)("function"===typeof(null===(h=null===(c=null===(l=null===p||void 0===p?void 0:p.cordova)||void 0===l?void 0:l.plugins)||void 0===c?void 0:c.browsertab)||void 0===h?void 0:h.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aw)("function"===typeof(null===(d=null===(u=null===p||void 0===p?void 0:p.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===d?void 0:d.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function f(t){const e=v(t),n=await crypto.subtle.digest("SHA-256",e),a=Array.from(new Uint8Array(n));return a.map((t=>t.toString(16).padStart(2,"0"))).join("")}function v(t){if((0,i.ap)(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=20;class g extends i.az{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((t=>{this.resolveInialized=t}))}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach((e=>e(t))),super.onEvent(t)}async initialized(){await this.initPromise}}function y(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:_(),postBody:null,tenantId:t.tenantId,error:(0,i.av)(t,"no-auth-event")}}function b(t,e){return z()._set(M(t),e)}async function I(t){const e=await z()._get(M(t));return e&&await z()._remove(M(t)),e}function w(t,e){var n,a;const r=B(e);if(r.includes("/__/auth/callback")){const e=V(r),o=e["firebaseError"]?A(decodeURIComponent(e["firebaseError"])):null,s=null===(a=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===a?void 0:a[1],l=s?(0,i.av)(s):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function _(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<m;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function z(){return(0,i.ax)(i.b)}function M(t){return(0,i.ay)("authEvent",t.config.apiKey,t.name)}function A(t){try{return JSON.parse(t)}catch(e){return null}}function B(t){const e=V(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,a=V(n)["link"],i=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,r=V(i)["link"];return r||i||a||n||t}function V(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return(0,r.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=500;class H{constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aA}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new g(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){(0,i.as)(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,a){p(t);const r=await this._initialize(t);await r.initialized(),r.resetRedirect(),(0,i.aB)(),await this._originValidation(t);const o=y(t,n,a);await b(t,o);const s=await c(t,o,e),l=await u(s);return d(t,r,l)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=h(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:a,BuildInfo:i}=s(),r=setTimeout((async()=>{await I(t),e.onEvent(O())}),C),o=async n=>{clearTimeout(r);const a=await I(t);let i=null;a&&(null===n||void 0===n?void 0:n["url"])&&(i=w(a,n["url"])),e.onEvent(i||O())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const l=a,c=`${i.packageName.toLowerCase()}://`;s().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(c)&&o({url:t}),"function"===typeof l)try{l(t)}catch(e){console.error(e)}}}}const T=H;function O(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.av)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){(0,i.aC)(t)._logFramework(e)}var S="@firebase/auth-compat",k="0.2.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P=1e3;function E(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function x(){return"http:"===E()||"https:"===E()}function F(t=(0,r.z$)()){return!("file:"!==E()&&"ionic:"!==E()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function D(){return(0,r.b$)()||(0,r.UG)()}function R(){return(0,r.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function j(t=(0,r.z$)()){return/Edge\/\d+/.test(t)}function N(t=(0,r.z$)()){return R()||j(t)}function Z(){try{const t=self.localStorage,e=i.aG();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!N()||(0,r.hl)()}catch(t){return $()&&(0,r.hl)()}return!1}function $(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function U(){return(x()||(0,r.ru)()||F())&&!D()&&Z()&&!$()}function q(){return F()&&"undefined"!==typeof document}async function G(){return!!q()&&new Promise((t=>{const e=setTimeout((()=>{t(!1)}),P);document.addEventListener("deviceready",(()=>{clearTimeout(e),t(!0)}))}))}function W(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={LOCAL:"local",NONE:"none",SESSION:"session"},Y=i.aw,X="persistence";function J(t,e){Y(Object.values(K).includes(e),t,"invalid-persistence-type"),(0,r.b$)()?Y(e!==K.SESSION,t,"unsupported-persistence-type"):(0,r.UG)()?Y(e===K.NONE,t,"unsupported-persistence-type"):$()?Y(e===K.NONE||e===K.LOCAL&&(0,r.hl)(),t,"unsupported-persistence-type"):Y(e===K.NONE||Z(),t,"unsupported-persistence-type")}async function Q(t){await t._initializationPromise;const e=et(),n=i.ay(X,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function tt(t,e){const n=et();if(!n)return[];const a=i.ay(X,t,e),r=n.getItem(a);switch(r){case K.NONE:return[i.K];case K.LOCAL:return[i.i,i.a];case K.SESSION:return[i.a];default:return[]}}function et(){var t;try{return(null===(t=W())||void 0===t?void 0:t.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=i.aw;class at{constructor(){this.browserResolver=i.ax(i.k),this.cordovaResolver=i.ax(T),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aA}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,a)}async _openRedirect(t,e,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,a)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return q()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nt(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await G();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t.unwrap()}function rt(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return lt(t)}function st(t,e){var n;const a=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const n=e;n.resolver=new ut(t,i.am(t,e))}else if(a){const t=lt(e),n=e;t&&(n.credential=t,n.tenantId=a.tenantId||void 0,n.email=a.email||void 0,n.phoneNumber=a.phoneNumber||void 0)}}function lt(t){const{_tokenResponse:e}=t instanceof r.ZR?t.customData:t;if(!e)return null;if(!(t instanceof r.ZR)&&"temporaryProof"in e&&"phoneNumber"in e)return i.P.credentialFromResult(t);const n=e.providerId;if(!n||n===i.o.PASSWORD)return null;let a;switch(n){case i.o.GOOGLE:a=i.N;break;case i.o.FACEBOOK:a=i.M;break;case i.o.GITHUB:a=i.Q;break;case i.o.TWITTER:a=i.V;break;default:const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:s,nonce:l}=e;return r||o||t||s?s?n.startsWith("saml.")?i.aJ._create(n,s):i.I._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:t,accessToken:r}):new i.T(n).credential({idToken:t,accessToken:r,rawNonce:l}):null}return t instanceof r.ZR?a.credentialFromError(t):a.credentialFromResult(t)}function ct(t,e){return e.catch((e=>{throw e instanceof r.ZR&&st(t,e),e})).then((t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:ot(t),additionalUserInfo:i.ak(t),user:dt.getOrCreate(n)}}))}async function ht(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>ct(t,n.confirm(e))}}class ut{constructor(t,e){this.resolver=e,this.auth=rt(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return ct(it(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this._delegate=t,this.multiFactor=i.an(t)}static getOrCreate(t){return dt.USER_MAP.has(t)||dt.USER_MAP.set(t,new dt(t)),dt.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return ct(this.auth,i.Y(this._delegate,t))}async linkWithPhoneNumber(t,e){return ht(this.auth,i.l(this._delegate,t,e))}async linkWithPopup(t){return ct(this.auth,i.d(this._delegate,t,at))}async linkWithRedirect(t){return await Q(i.aC(this.auth)),i.g(this._delegate,t,at)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return ct(this.auth,i.Z(this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return ht(this.auth,i.r(this._delegate,t,e))}reauthenticateWithPopup(t){return ct(this.auth,i.e(this._delegate,t,at))}async reauthenticateWithRedirect(t){return await Q(i.aC(this.auth)),i.h(this._delegate,t,at)}sendEmailVerification(t){return i.aa(this._delegate,t)}async unlink(t){return await i.aj(this._delegate,t),this}updateEmail(t){return i.af(this._delegate,t)}updatePassword(t){return i.ag(this._delegate,t)}updatePhoneNumber(t){return i.u(this._delegate,t)}updateProfile(t){return i.ae(this._delegate,t)}verifyBeforeUpdateEmail(t,e){return i.ab(this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}dt.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt=i.aw;class ft{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;pt(n,"invalid-api-key",{appName:t.name}),pt(n,"invalid-api-key",{appName:t.name});const a="undefined"!==typeof window?at:void 0;this._delegate=e.initialize({options:{persistence:mt(n,t.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(i.z),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?dt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){i.E(this._delegate,t,e)}applyActionCode(t){return i.a1(this._delegate,t)}checkActionCode(t){return i.a2(this._delegate,t)}confirmPasswordReset(t,e){return i.a0(this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return ct(this._delegate,i.a4(this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return i.a9(this._delegate,t)}isSignInWithEmailLink(t){return i.a7(this._delegate,t)}async getRedirectResult(){pt(U(),this._delegate,"operation-not-supported-in-this-environment");const t=await i.j(this._delegate,at);return t?ct(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){L(this._delegate,t)}onAuthStateChanged(t,e,n){const{next:a,error:i,complete:r}=vt(t,e,n);return this._delegate.onAuthStateChanged(a,i,r)}onIdTokenChanged(t,e,n){const{next:a,error:i,complete:r}=vt(t,e,n);return this._delegate.onIdTokenChanged(a,i,r)}sendSignInLinkToEmail(t,e){return i.a6(this._delegate,t,e)}sendPasswordResetEmail(t,e){return i.$(this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(J(this._delegate,t),t){case K.SESSION:e=i.a;break;case K.LOCAL:const t=await i.ax(i.i)._isAvailable();e=t?i.i:i.b;break;case K.NONE:e=i.K;break;default:return i.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return ct(this._delegate,i.W(this._delegate))}signInWithCredential(t){return ct(this._delegate,i.X(this._delegate,t))}signInWithCustomToken(t){return ct(this._delegate,i._(this._delegate,t))}signInWithEmailAndPassword(t,e){return ct(this._delegate,i.a5(this._delegate,t,e))}signInWithEmailLink(t,e){return ct(this._delegate,i.a8(this._delegate,t,e))}signInWithPhoneNumber(t,e){return ht(this._delegate,i.s(this._delegate,t,e))}async signInWithPopup(t){return pt(U(),this._delegate,"operation-not-supported-in-this-environment"),ct(this._delegate,i.c(this._delegate,t,at))}async signInWithRedirect(t){return pt(U(),this._delegate,"operation-not-supported-in-this-environment"),await Q(this._delegate),i.f(this._delegate,t,at)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return i.a3(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function vt(t,e,n){let a=t;"function"!==typeof t&&({next:a,error:e,complete:n}=t);const i=a,r=t=>i(t&&dt.getOrCreate(t));return{next:r,error:e,complete:n}}function mt(t,e){const n=tt(t,e);if("undefined"===typeof self||n.includes(i.i)||n.push(i.i),"undefined"!==typeof window)for(const a of[i.b,i.a])n.includes(a)||n.push(a);return n.includes(i.K)||n.push(i.K),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.Persistence=K;class gt{constructor(){this.providerId="phone",this._delegate=new i.P(it(a.Z.auth()))}static credential(t,e){return i.P.credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}gt.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,gt.PROVIDER_ID=i.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt=i.aw;class bt{constructor(t,e,n=a.Z.app()){var r;yt(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new i.R(t,e,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="auth-compat";function wt(t){t.INTERNAL.registerComponent(new o.wA(It,(t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new ft(e,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.L,FacebookAuthProvider:i.M,GithubAuthProvider:i.Q,GoogleAuthProvider:i.N,OAuthProvider:i.T,SAMLAuthProvider:i.U,PhoneAuthProvider:gt,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:bt,TwitterAuthProvider:i.V,Auth:ft,AuthCredential:i.G,Error:r.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(S,k)}wt(a.Z)},58:function(t,e,n){"use strict";n(8675),n(3462);var a=n(3668),i=n(3144),r=n(3536),o=n(7805);const s="@firebase/firestore-compat",l="0.1.17";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new i.WA("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){if("undefined"===typeof Uint8Array)throw new i.WA("unimplemented","Uint8Arrays are not available in this environment.")}function u(){if(!(0,i.Me)())throw new i.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return u(),new d(i.Jj.fromBase64String(t))}static fromUint8Array(t){return h(),new d(i.Jj.fromUint8Array(t))}toBase64(){return u(),this._delegate.toBase64()}toUint8Array(){return h(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t){return f(t,["next","error","complete"])}function f(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const a of e)if(a in n&&"function"===typeof n[a])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{enableIndexedDbPersistence(t,e){return(0,i.ST)(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return(0,i.fH)(t._delegate)}clearIndexedDbPersistence(t){return(0,i.Fc)(t._delegate)}}class m{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof i.l7||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||(0,i.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){(0,i.at)(this._delegate,t,e,n)}enableNetwork(){return(0,i.Ix)(this._delegate)}disableNetwork(){return(0,i.TF)(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,(0,i.Wi)("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,i.Mx)(this._delegate)}onSnapshotsInSync(t){return(0,i.sc)(this._delegate,t)}get app(){if(!this._appCompat)throw new i.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new O(this,(0,i.hJ)(this._delegate,t))}catch(e){throw z(e,"collection()","Firestore.collection()")}}doc(t){try{return new _(this,(0,i.JU)(this._delegate,t))}catch(e){throw z(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new C(this,(0,i.B$)(this._delegate,t))}catch(e){throw z(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return(0,i.i3)(this._delegate,(e=>t(new b(this,e))))}batch(){return(0,i.qY)(this._delegate),new I(new i.PU(this._delegate,(t=>(0,i.GL)(this._delegate,t))))}loadBundle(t){return(0,i.Pb)(this._delegate,t)}namedQuery(t){return(0,i.L$)(this._delegate,t).then((t=>t?new C(this,t):null))}}class g extends i.u7{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new i.Jj(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return _.forKey(e,this.firestore,null)}}function y(t){(0,i.Ub)(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new g(t)}get(t){const e=L(t);return this._delegate.get(e).then((t=>new B(this._firestore,new i.xU(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter))))}set(t,e,n){const a=L(t);return n?(c("Transaction.set",n),this._delegate.set(a,e,n)):this._delegate.set(a,e),this}update(t,e,n,...a){const i=L(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...a),this}delete(t){const e=L(t);return this._delegate.delete(e),this}}class I{constructor(t){this._delegate=t}set(t,e,n){const a=L(t);return n?(c("WriteBatch.set",n),this._delegate.set(a,e,n)):this._delegate.set(a,e),this}update(t,e,n,...a){const i=L(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...a),this}delete(t){const e=L(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class w{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new i.$q(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new V(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=w.INSTANCES;let a=n.get(t);a||(a=new WeakMap,n.set(t,a));let i=a.get(e);return i||(i=new w(t,new g(t),e),a.set(e,i)),i}}w.INSTANCES=new WeakMap;class _{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new g(t)}static forPath(t,e,n){if(t.length%2!==0)throw new i.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new _(e,new i.my(e._delegate,n,new i.Ky(t)))}static forKey(t,e,n){return new _(e,new i.my(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new O(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new O(this.firestore,(0,i.hJ)(this._delegate,t))}catch(e){throw z(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=(0,r.m9)(t),t instanceof i.my&&(0,i.Eo)(this._delegate,t)}set(t,e){e=c("DocumentReference.set",e);try{return e?(0,i.pl)(this._delegate,t,e):(0,i.pl)(this._delegate,t)}catch(n){throw z(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?(0,i.r7)(this._delegate,t):(0,i.r7)(this._delegate,t,e,...n)}catch(a){throw z(a,"updateDoc()","DocumentReference.update()")}}delete(){return(0,i.oe)(this._delegate)}onSnapshot(...t){const e=M(t),n=A(t,(t=>new B(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))));return(0,i.cf)(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?(0,i.kl)(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?(0,i.Xk)(this._delegate):(0,i.QT)(this._delegate),e.then((t=>new B(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))))}withConverter(t){return new _(this.firestore,t?this._delegate.withConverter(w.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function z(t,e,n){return t.message=t.message.replace(e,n),t}function M(t){for(const e of t)if("object"===typeof e&&!p(e))return e;return{}}function A(t,e){var n,a;let i;return i=p(t[0])?t[0]:p(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{i.next&&i.next(e(t))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(a=i.complete)||void 0===a?void 0:a.bind(i)}}class B{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new _(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return(0,i.qK)(this._delegate,t._delegate)}}class V extends B{data(t){const e=this._delegate.data(t);return(0,i.K9)(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class C{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new g(t)}where(t,e,n){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.ar)(t,e,n)))}catch(a){throw z(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.Xo)(t,e)))}catch(n){throw z(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.b9)(t)))}catch(e){throw z(e,"limit()","Query.limit()")}}limitToLast(t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.vh)(t)))}catch(e){throw z(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.e0)(...t)))}catch(e){throw z(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.TQ)(...t)))}catch(e){throw z(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.Lx)(...t)))}catch(e){throw z(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.Wu)(...t)))}catch(e){throw z(e,"endAt()","Query.endAt()")}}isEqual(t){return(0,i.iE)(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?(0,i.UQ)(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?(0,i.zN)(this._delegate):(0,i.PL)(this._delegate),e.then((t=>new T(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))))}onSnapshot(...t){const e=M(t),n=A(t,(t=>new T(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))));return(0,i.cf)(this._delegate,e,n)}withConverter(t){return new C(this.firestore,t?this._delegate.withConverter(w.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class H{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new V(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class T{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new C(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((t=>new V(this._firestore,t)))}docChanges(t){return this._delegate.docChanges(t).map((t=>new H(this._firestore,t)))}forEach(t,e){this._delegate.forEach((n=>{t.call(e,new V(this._firestore,n))}))}isEqual(t){return(0,i.qK)(this._delegate,t._delegate)}}class O extends C{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new _(this.firestore,t):null}doc(t){try{return new _(this.firestore,void 0===t?(0,i.JU)(this._delegate):(0,i.JU)(this._delegate,t))}catch(e){throw z(e,"doc()","CollectionReference.doc()")}}add(t){return(0,i.ET)(this._delegate,t).then((t=>new _(this.firestore,t)))}isEqual(t){return(0,i.Eo)(this._delegate,t._delegate)}withConverter(t){return new O(this.firestore,t?this._delegate.withConverter(w.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function L(t){return(0,i.Cf)(t,i.my)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(...t){this._delegate=new i.Lz(...t)}static documentId(){return new S(i.Xb.keyField().canonicalString())}isEqual(t){return t=(0,r.m9)(t),t instanceof i.Lz&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this._delegate=t}static serverTimestamp(){const t=(0,i.Bt)();return t._methodName="FieldValue.serverTimestamp",new k(t)}static delete(){const t=(0,i.AK)();return t._methodName="FieldValue.delete",new k(t)}static arrayUnion(...t){const e=(0,i.vr)(...t);return e._methodName="FieldValue.arrayUnion",new k(e)}static arrayRemove(...t){const e=(0,i.Ab)(...t);return e._methodName="FieldValue.arrayRemove",new k(e)}static increment(t){const e=(0,i.nP)(t);return e._methodName="FieldValue.increment",new k(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={Firestore:m,GeoPoint:i.F8,Timestamp:i.EK,Blob:d,Transaction:b,WriteBatch:I,DocumentReference:_,DocumentSnapshot:B,Query:C,QueryDocumentSnapshot:V,QuerySnapshot:T,CollectionReference:O,FieldPath:S,FieldValue:k,setLogLevel:y,CACHE_SIZE_UNLIMITED:i.IX};function E(t,e){t.INTERNAL.registerComponent(new o.wA("firestore-compat",(t=>{const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(n,a)}),"PUBLIC").setServiceProps(Object.assign({},P)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){E(t,((t,e)=>new m(t,e,new v))),t.registerVersion(s,l)}x(a.Z)},8248:function(t,e,n){"use strict";var a=n(3668),i=n(8433),r=n(3536),o=n(7805);const s="@firebase/functions-compat",l="0.1.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(t,e){this.app=t,this._delegate=e,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(t,e){return(0,i.V1)(this._delegate,t,e)}useFunctionsEmulator(t){const e=t.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(null==e)throw new r.ZR("functions","No origin provided to useFunctionsEmulator()");if(null==e[2])throw new r.ZR("functions","Port missing in origin provided to useFunctionsEmulator()");return(0,i.pm)(this._delegate,e[1],Number(e[2]))}useEmulator(t,e){return(0,i.pm)(this._delegate,t,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h="us-central1",u=(t,{instanceIdentifier:e})=>{const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("functions").getImmediate({identifier:null!==e&&void 0!==e?e:h});return new c(n,a)};function d(){const t={Functions:c};a.Z.INTERNAL.registerComponent(new o.wA("functions-compat",u,"PUBLIC").setServiceProps(t).setMultipleInstances(!0))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */d(),a.Z.registerVersion(s,l)},1646:function(t,e,n){"use strict";var a=n(3668),i=n(4699),r=n(7805);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new o(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then((e=>{if(t)return t(new o(e,this,this._ref))}),e)}on(t,e,n,a){let i;return e&&(i="function"===typeof e?t=>e(new o(t,this,this._ref)):{next:e.next?t=>e.next(new o(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,i,n||void 0,a||void 0)}}class l{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map((t=>new c(t,this._service)))}get items(){return this._delegate.items.map((t=>new c(t,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=(0,i.g6)(this._delegate,t);return new c(e,this.storage)}get root(){return new c(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new c(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new s((0,i.B0)(this._delegate,t,e),this)}putString(t,e=i.bm.RAW,n){this._throwIfRoot("putString");const a=(0,i.qm)(e,t),r=Object.assign({},n);return null==r["contentType"]&&null!=a.contentType&&(r["contentType"]=a.contentType),new s(new i.IX(this._delegate,new i.UJ(a.data,!0),r),this)}listAll(){return(0,i.aF)(this._delegate).then((t=>new l(t,this.storage)))}list(t){return(0,i.pb)(this._delegate,t||void 0).then((t=>new l(t,this.storage)))}getMetadata(){return(0,i.sd)(this._delegate)}updateMetadata(t){return(0,i.Ym)(this._delegate,t)}getDownloadURL(){return(0,i.Jt)(this._delegate)}delete(){return this._throwIfRoot("delete"),(0,i.oq)(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw(0,i.y4)(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(u(t))throw(0,i.gH)("ref() expected a child path but got a URL, use refFromURL instead.");return new c((0,i.iH)(this._delegate,t),this)}refFromURL(t){if(!u(t))throw(0,i.gH)("refFromURL() expected a full URL but got a child path, use ref() instead.");try{i.gE.makeFromUrl(t,this._delegate.host)}catch(e){throw(0,i.gH)("refFromUrl() expected a valid full URL but got an invalid one.")}return new c((0,i.iH)(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){(0,i.a1)(this._delegate,t,e,n)}}function u(t){return/^[A-Za-z]+:\/\//.test(t)}const d="@firebase/storage-compat",p="0.1.13",f="storage-compat";function v(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("storage").getImmediate({identifier:e}),i=new h(n,a);return i}function m(t){const e={TaskState:i.$Y,TaskEvent:i.FN,StringFormat:i.bm,Storage:h,Reference:c};t.INTERNAL.registerComponent(new r.wA(f,v,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(d,p)}m(a.Z)},4918:function(t,e,n){"use strict";n.r(e),n.d(e,{AbstractUserDataWriter:function(){return a.u7},Bytes:function(){return a.Jj},CACHE_SIZE_UNLIMITED:function(){return a.IX},CollectionReference:function(){return a.hx},DocumentReference:function(){return a.my},DocumentSnapshot:function(){return a.xU},FieldPath:function(){return a.Lz},FieldValue:function(){return a.GH},Firestore:function(){return a.gg},FirestoreError:function(){return a.WA},GeoPoint:function(){return a.F8},LoadBundleTask:function(){return a.tO},Query:function(){return a.AE},QueryConstraint:function(){return a.O$},QueryDocumentSnapshot:function(){return a.$q},QuerySnapshot:function(){return a.W},SnapshotMetadata:function(){return a.oZ},Timestamp:function(){return a.EK},Transaction:function(){return a.YW},WriteBatch:function(){return a.PU},_DatabaseId:function(){return a.l7},_DocumentKey:function(){return a.Ky},_EmptyAppCheckTokenProvider:function(){return a.Mu},_EmptyAuthCredentialsProvider:function(){return a.EZ},_FieldPath:function(){return a.Xb},_cast:function(){return a.Cf},_debugAssert:function(){return a.K9},_isBase64Available:function(){return a.Me},_logWarn:function(){return a.yq},_setIndexConfiguration:function(){return a.J$},_validateIsNotUsedTogether:function(){return a.Wi},addDoc:function(){return a.ET},arrayRemove:function(){return a.Ab},arrayUnion:function(){return a.vr},clearIndexedDbPersistence:function(){return a.Fc},collection:function(){return a.hJ},collectionGroup:function(){return a.B$},connectFirestoreEmulator:function(){return a.at},deleteDoc:function(){return a.oe},deleteField:function(){return a.AK},disableNetwork:function(){return a.TF},doc:function(){return a.JU},documentId:function(){return a.Jm},enableIndexedDbPersistence:function(){return a.ST},enableMultiTabIndexedDbPersistence:function(){return a.fH},enableNetwork:function(){return a.Ix},endAt:function(){return a.Wu},endBefore:function(){return a.Lx},ensureFirestoreConfigured:function(){return a.qY},executeWrite:function(){return a.GL},getDoc:function(){return a.QT},getDocFromCache:function(){return a.kl},getDocFromServer:function(){return a.Xk},getDocs:function(){return a.PL},getDocsFromCache:function(){return a.UQ},getDocsFromServer:function(){return a.zN},getFirestore:function(){return a.ad},increment:function(){return a.nP},initializeFirestore:function(){return a.LV},limit:function(){return a.b9},limitToLast:function(){return a.vh},loadBundle:function(){return a.Pb},namedQuery:function(){return a.L$},onSnapshot:function(){return a.cf},onSnapshotsInSync:function(){return a.sc},orderBy:function(){return a.Xo},query:function(){return a.IO},queryEqual:function(){return a.iE},refEqual:function(){return a.Eo},runTransaction:function(){return a.i3},serverTimestamp:function(){return a.Bt},setDoc:function(){return a.pl},setLogLevel:function(){return a.Ub},snapshotEqual:function(){return a.qK},startAfter:function(){return a.TQ},startAt:function(){return a.e0},terminate:function(){return a.RA},updateDoc:function(){return a.r7},waitForPendingWrites:function(){return a.Mx},where:function(){return a.ar},writeBatch:function(){return a.qs}});var a=n(3144)},747:function(t,e,n){"use strict";n.r(e),n.d(e,{connectFunctionsEmulator:function(){return a.pm},getFunctions:function(){return a.$C},httpsCallable:function(){return a.V1}});var a=n(8433)},5711:function(t,e,n){"use strict";n.r(e),n.d(e,{StringFormat:function(){return a.bm},_FbsBlob:function(){return a.UJ},_Location:function(){return a.gE},_TaskEvent:function(){return a.FN},_TaskState:function(){return a.$Y},_UploadTask:function(){return a.IX},_dataFromString:function(){return a.qm},_getChild:function(){return a.g6},_invalidArgument:function(){return a.gH},_invalidRootOperation:function(){return a.y4},connectStorageEmulator:function(){return a.a1},deleteObject:function(){return a.oq},getBlob:function(){return a.Br},getBytes:function(){return a.Pw},getDownloadURL:function(){return a.Jt},getMetadata:function(){return a.sd},getStorage:function(){return a.cF},getStream:function(){return a.MV},list:function(){return a.pb},listAll:function(){return a.aF},ref:function(){return a.iH},updateMetadata:function(){return a.Ym},uploadBytes:function(){return a.KV},uploadBytesResumable:function(){return a.B0},uploadString:function(){return a.sf}});var a=n(4699)},9014:function(t,e,n){n(1703),n(8675),n(3462),
/* @preserve
 * Leaflet 1.8.0, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
/*! 
 * portal-vue © Thorsten Lünborg, 2019 
 * 
 * Version: 2.1.7
 * 
 * LICENCE: MIT 
 * 
 * https://github.com/linusborg/portal-vue
 * 
*/
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t,e){this._delegate=t,this.firebase=e,(0,r._addComponent)(t,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,r.deleteApp)(this._delegate))))}_getService(t,e=r._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(t);return a.isInitialized()||"EXPLICIT"!==(null===(n=a.getComponent())||void 0===n?void 0:n.instantiationMode)||a.initialize(),a.getImmediate({identifier:e})}_removeServiceInstance(t,e=r._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,r._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,r._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new a.LL("app-compat","Firebase",l);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(t){const e={},n={__esModule:!0,initializeApp:s,app:o,registerVersion:r.registerVersion,setLogLevel:r.setLogLevel,onLog:r.onLog,apps:null,SDK_VERSION:r.SDK_VERSION,INTERNAL:{registerComponent:h,removeApp:i,useAsService:u,modularAPIs:r}};function i(t){delete e[t]}function o(t){if(t=t||r._DEFAULT_ENTRY_NAME,!(0,a.r3)(e,t))throw c.create("no-app",{appName:t});return e[t]}function s(i,o={}){const s=r.initializeApp(i,o);if((0,a.r3)(e,s.name))return e[s.name];const l=new t(s,n);return e[s.name]=l,l}function l(){return Object.keys(e).map((t=>e[t]))}function h(e){const i=e.name,s=i.replace("-compat","");if(r._registerComponent(e)&&"PUBLIC"===e.type){const r=(t=o())=>{if("function"!==typeof t[s])throw c.create("invalid-app-argument",{appName:i});return t[s]()};void 0!==e.serviceProps&&(0,a.ZB)(r,e.serviceProps),n[s]=r,t.prototype[s]=function(...t){const n=this._getService.bind(this,i);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[s]:null}function u(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){const t=h(s);function e(e){(0,a.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:u,extendNamespace:e,createSubscribe:a.ne,ErrorFactory:a.LL,deepExtend:a.ZB}),t}const d=u(),p=new o.Yd("@firebase/app-compat"),f="@firebase/app-compat",v="0.1.22";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(t){(0,r.registerVersion)(f,v,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,a.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=d;m()},5659:function(t,e,n){"use strict";n.r(e),n.d(e,{FirebaseError:function(){return r.ZR},SDK_VERSION:function(){return K},_DEFAULT_ENTRY_NAME:function(){return E},_addComponent:function(){return R},_addOrOverwriteComponent:function(){return j},_apps:function(){return F},_clearComponents:function(){return U},_components:function(){return D},_getProvider:function(){return Z},_registerComponent:function(){return N},_removeServiceInstance:function(){return $},deleteApp:function(){return Q},getApp:function(){return X},getApps:function(){return J},initializeApp:function(){return Y},onLog:function(){return et},registerVersion:function(){return tt},setLogLevel:function(){return nt}});var a=n(7805),i=n(7366),r=n(3536);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(s(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function s(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",c="0.7.21",h=new i.Yd("@firebase/app"),u="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",I="@firebase/functions",w="@firebase/functions-compat",_="@firebase/installations",z="@firebase/installations-compat",M="@firebase/messaging",A="@firebase/messaging-compat",B="@firebase/performance",V="@firebase/performance-compat",C="@firebase/remote-config",H="@firebase/remote-config-compat",T="@firebase/storage",O="@firebase/storage-compat",L="@firebase/firestore",S="@firebase/firestore-compat",k="firebase",P="9.6.11",E="[DEFAULT]",x={[l]:"fire-core",[u]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[f]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[I]:"fire-fn",[w]:"fire-fn-compat",[_]:"fire-iid",[z]:"fire-iid-compat",[M]:"fire-fcm",[A]:"fire-fcm-compat",[B]:"fire-perf",[V]:"fire-perf-compat",[C]:"fire-rc",[H]:"fire-rc-compat",[T]:"fire-gcs",[O]:"fire-gcs-compat",[L]:"fire-fst",[S]:"fire-fst-compat","fire-js":"fire-js",[k]:"fire-js-all"},F=new Map,D=new Map;function R(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function j(t,e){t.container.addOrOverwriteComponent(e)}function N(t){const e=t.name;if(D.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;D.set(e,t);for(const n of F.values())R(n,t);return!0}function Z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $(t,e,n=E){Z(t,e).clearInstance(n)}function U(){D.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},G=new r.LL("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=P;function Y(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:E,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if((0,r.vZ)(t,o.options)&&(0,r.vZ)(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const s=new a.H0(i);for(const a of D.values())s.addComponent(a);const l=new W(t,n,s);return F.set(i,l),l}function X(t=E){const e=F.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function J(){return Array.from(F.values())}async function Q(t){const e=t.name;F.has(e)&&(F.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function tt(t,e,n){var i;let r=null!==(i=x[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}N(new a.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw G.create("invalid-log-argument");(0,i.Am)(t,e)}function nt(t){(0,i.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="firebase-heartbeat-database",it=1,rt="firebase-heartbeat-store";let ot=null;function st(){return ot||(ot=(0,r.X3)(at,it,((t,e)=>{switch(e){case 0:t.createObjectStore(rt)}})).catch((t=>{throw G.create("storage-open",{originalErrorMessage:t.message})}))),ot}async function lt(t){try{const e=await st();return e.transaction(rt).objectStore(rt).get(ht(t))}catch(e){throw G.create("storage-get",{originalErrorMessage:e.message})}}async function ct(t,e){try{const n=await st(),a=n.transaction(rt,"readwrite"),i=a.objectStore(rt);return await i.put(e,ht(t)),a.complete}catch(n){throw G.create("storage-set",{originalErrorMessage:n.message})}}function ht(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=1024,dt=2592e6;class pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ft(),{heartbeatsToSend:e,unsentEntries:n}=vt(this._heartbeatsCache.heartbeats),a=(0,r.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ft(){const t=new Date;return t.toISOString().substring(0,10)}function vt(t,e=ut){const n=[];let a=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),gt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gt(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await lt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function gt(t){return(0,r.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){N(new a.wA("platform-logger",(t=>new o(t)),"PRIVATE")),N(new a.wA("heartbeat",(t=>new pt(t)),"PRIVATE")),tt(l,c,t),tt(l,c,"esm2017"),tt("fire-js","")}yt("")},7805:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return i}});n(1703);var a=n(3536);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),a=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(a)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:a});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&r.resolve(a)}return a}onInit(t,e){var n;const a=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(a,i);const r=this.instances.get(a);return r&&t(r,a),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(a){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(a){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===r?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},7366:function(t,e,n){"use strict";n.d(e,{Am:function(){return u},Ub:function(){return h},Yd:function(){return c},in:function(){return i}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const r={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const a=(new Date).toISOString(),i=s[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${a}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function h(t){a.forEach((e=>{e.setLogLevel(t)}))}function u(t,e){for(const n of a){let a=null;e&&e.level&&(a=r[e.level]),n.userLogHandler=null===t?null:(e,n,...r)=>{const o=r.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==a&&void 0!==a?a:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:r,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.f9c479a9.js.map