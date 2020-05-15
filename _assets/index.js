import{i as e,c as t,a as n,b as o,h as r,_ as s,d as a,e as i,f as l,g as c,E as u,r as p,m as d,n as m,j as f,k as h,l as v,w as g,o as w,p as b,q as y,s as k,t as S,F as x,u as C}from"./runtime-core.esm-bundler-220f006b.js";const E="http://www.w3.org/2000/svg",N="undefined"!=typeof document?document:null;let A,T;const _={insert:(e,t,n)=>{n?t.insertBefore(e,n):t.appendChild(e)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?N.createElementNS(E,e):N.createElement(e,n?{is:n}:void 0),createText:e=>N.createTextNode(e),createComment:e=>N.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>N.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode:e=>e.cloneNode(!0),insertStaticContent(e,t,n,o){const r=o?T||(T=N.createElementNS(E,"svg")):A||(A=N.createElement("div"));r.innerHTML=e;const s=r.children[0];return _.insert(s,t,n),s}};const L=/\s*!important$/;function D(e,t,n){if(t.startsWith("--"))e.setProperty(t,n);else{const o=function(e,t){const n=P[t];if(n)return n;let o=s(t);if("filter"!==o&&o in e)return P[t]=o;o=a(o);for(let n=0;n<j.length;n++){const r=j[n]+o;if(r in e)return P[t]=r}return t}(e,t);L.test(n)?e.setProperty(r(o),n.replace(L,""),"important"):e[o]=n}}const j=["Webkit","Moz","ms"],P={};const q="http://www.w3.org/1999/xlink";let M=Date.now;"undefined"!=typeof document&&M()>document.createEvent("Event").timeStamp&&(M=()=>performance.now());let R=0;const U=Promise.resolve(),H=()=>{R=0},I=()=>R||(U.then(H),R=M());function O(e,t,n,o){e.addEventListener(t,n,o)}function W(e,t,n,o){e.removeEventListener(t,n,o)}function F(e,t){const n=e=>{e.timeStamp>=n.lastUpdated-1&&l(function(e,t){if(c(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}(e,n.value),t,5,[e])};return n.value=e,e.invoker=n,n.lastUpdated=I(),n}const $=/^on[a-z]/,J={patchProp:(t,r,s,a,l=!1,c,p,d,m)=>{switch(r){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(t,a,l);break;case"style":!function(t,n,o){const r=t.style;if(o)if(e(o))r.cssText=o;else{for(const e in o)D(r,e,o[e]);if(n&&!e(n))for(const e in n)o[e]||D(r,e,"")}else t.removeAttribute("style")}(t,s,a);break;default:n(r)?r.startsWith("onUpdate:")||function(e,t,n,o,r=null){const s=t.slice(2).toLowerCase(),a=n&&"options"in n&&n.options,i=o&&"options"in o&&o.options,l=n&&n.invoker,c=o&&"handler"in o?o.handler:o;if(a||i){const t=a||u,n=i||u;if(t.capture!==n.capture||t.passive!==n.passive||t.once!==n.once){if(l&&W(e,s,l,t),o&&c){const t=F(c,r);o.invoker=t,O(e,s,t,n)}return}}o&&c?l?(n.invoker=null,l.value=c,o.invoker=l,l.lastUpdated=I()):O(e,s,F(c,r),i||void 0):l&&W(e,s,l,a||void 0)}(t,r,s,a,p):(l?"innerHTML"===r||r in t&&$.test(r)&&o(a):r in t&&(!$.test(r)||!e(a)))?function(e,t,n,o,r,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,r,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName)return e._value=n,void(e.value=null==n?"":n);if(""===n&&"boolean"==typeof e[t])e[t]=!0;else if(null==n&&"string"==typeof e[t])e[t]="";else try{e[t]=n}catch(e){}}(t,r,a,c,p,d,m):("true-value"===r?t._trueValue=a:"false-value"===r&&(t._falseValue=a),function(e,t,n,o){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(q,t.slice(6,t.length)):e.setAttributeNS(q,t,n);else{const o=i(t);null==n||o&&!1===n?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}(t,r,a,l))}},..._};let V,z=!1;const G=(...n)=>{const o=(V=z?V:t(J),z=!0,V).createApp(...n),{mount:r}=o;return o.mount=t=>{const n=function(t){if(e(t)){return document.querySelector(t)}return t}(t);if(n)return r(n,!0)},o};const B=Symbol();function Y(){return function(){const e=f(B);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}const K=h((Q='{"title":"前端思考","description":"前端思考，web前端代码及新技术试验场","base":"/","head":[["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}],["meta",{"name":"keywords","content":"web前端技术,前端思考,ECMAS,js,css3,vue"}],["link",{"rel":"icon","href":"/favicon.ico"}],["script",{"src":"https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],["script",{"src":"https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"}],["link",{"href":"/@theme/styles/default.css","rel":"stylesheet"}]],"themeConfig":{"logo":"/assets/images/logo.svg","type":"blog","tags":"tags","blogConfig":{"category":{"location":2,"text":"Category"},"tag":{"location":3,"text":"Tag"}},"author":"Amu","nav":[{"text":"Home","link":"/"},{"text":"Notes","link":"/notes/"},{"text":"Terminal","link":"/terminal/"},{"text":"Demos","link":"/demos/"},{"text":"Editor online","link":"/editor/"},{"text":"标签云","link":"/tags/","tags":true},{"text":"图博","link":"https://xinyi.tuchong.com/"},{"text":"Github","link":"https://github.com/artskin"}],"sidebar":"auto","sidebarDepth":1,"gitalk":{"clientID":"2912f33e7eba2ba9f38d","clientSecret":"9c5cb6059d6118122e70e237179855954df54ee5","repo":"vuepress","owner":"artskin","admin":["artskin"],"accessToken":"your accessToken ","labelRule":"(title,path)=> {\\n        let paths=path.split(\'/\')\\n        if(paths.length>0){\\n          let res = paths.pop()\\n          if(res===\'\'){\\n            res=paths.pop()\\n          }\\n          res = res.slice(-50)\\n          return res\\n        }else{\\n          return title\\n        }\\n      }"}}}',v(JSON.parse(Q))));var Q;function X(e){const t=Array.from(document.querySelectorAll("meta"));let n=!0;const o=e=>{n?n=!1:(t.forEach(e=>document.head.removeChild(e)),t.length=0,e&&e.length&&e.forEach(e=>{const n=function([e,t,n]){const o=document.createElement(e);for(const e in t)o.setAttribute(e,t[e]);n&&(o.innerHTML=n);return o}(e);document.head.appendChild(n),t.push(n)}))};g(()=>{const t=e.value,n=K.value,r=t&&t.title;document.title=(r?r+" | ":"")+n.title,o([["meta",{name:"description",content:n.description}],...n.head,...t&&t.frontmatter.head||[]])})}const Z=Symbol(),ee={setup(){const e=Y();return()=>e.contentComponent?w(e.contentComponent):null}},te=k("h1",null,"Custom Layout!s",-1);const ne={render:function(e,t){const n=C("Content");return b(),y(x,null,[te,k(n),S(" make sure to include markdown outlet ")],64)}};var oe={Layout:ne,NotFound:()=>"custom 404",enhanceApp({app:e,router:t,siteData:n}){}};const re="undefined"!=typeof window,se=oe.NotFound||(()=>"404 Not Found");function ae(){const e=h();re&&X(e);const t=function(e,t){const n=p({path:"/",contentComponent:null}),o="undefined"!=typeof window;function r(e){return e=e||(o?location.href:"/"),o&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),s(e)}async function s(r,s=0){const a=new URL(r,"http://vuejs.org"),i=n.path=a.pathname;try{let t=e(n);if("then"in t&&"function"==typeof t.then&&(t=await t),n.path===i){if(!t)throw new Error("Invalid route component: "+t);if(n.contentComponent=d(t),o){if(await m(),a.hash&&!s){const e=document.querySelector(a.hash);e&&(s=e.offsetTop)}window.scrollTo({left:0,top:s,behavior:"auto"})}}}catch(e){e.message.match(/fetch/)||console.error(e),n.path===i&&(n.contentComponent=t?d(t):null)}}return o&&(window.addEventListener("click",e=>{if("A"===e.target.tagName){const{href:t,target:n}=e.target,o=new URL(t),s=window.location;"_blank"!==n&&o.protocol===s.protocol&&o.hostname===s.hostname&&(o.pathname===s.pathname?o.hash!==s.hash&&(e.preventDefault(),window.scrollTo({left:0,top:e.target.offsetTop,behavior:"smooth"})):(e.preventDefault(),r(t)))}},{capture:!0}),window.addEventListener("popstate",e=>{s(location.href,e.state&&e.state.scrollPosition||0)})),{route:n,go:r}}(t=>{let n=t.path.replace(/\.html$/,"");if(n.endsWith("/")&&(n+="index"),n="./"+n.slice(1).replace(/\//g,"_")+".md.js",re)return import(n).then(t=>(t.__pageData&&(e.value=v(JSON.parse(t.__pageData))),t.default));{const t=require(n);return e.value=JSON.parse(t.__pageData),t.default}},se),n=G(oe.Layout);return n.provide(B,t),n.provide(Z,e),n.component("Content",ee),n.component("Debug",()=>null),Object.defineProperties(n.config.globalProperties,{$site:{get:()=>K.value},$page:{get:()=>e.value}}),oe.enhanceApp&&oe.enhanceApp({app:n,router:t,siteData:K}),{app:n,router:t}}if(re){const{app:e,router:t}=ae();t.go().then(()=>{e.mount("#app")})}export{ae as createApp};