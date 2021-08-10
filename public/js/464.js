"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{3248:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(3645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,".gmaps-wrapper{bottom:0;height:calc(100vh - 50%);position:fixed;width:100%;z-index:11}@media screen and (min-width:1280px){.gmaps-wrapper{bottom:0;height:calc(100vh - 55px);position:fixed;width:67%;z-index:11}}.gmaps-map{height:100%}",""]);const i=r},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},3379:(t,e,n)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],u=e.base?i[0]+e.base:i[0],l=n[u]||0,c="".concat(u," ").concat(l);n[u]=l+1;var d=s(c),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:h(p,e),references:1}),o.push(c)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(t,e){var n,o,r;if(e.singleton){var i=v++;n=m||(m=l(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=u(t,e),l=0;l<n.length;l++){var c=s(n[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=i}}}},3464:(t,e,n)=>{n.r(e),n.d(e,{default:()=>U});var o=n(5166),r={class:"flex flex-col xl:flex-row"},i={class:"w-full xl:w-1/3 px-3 pr-10"},a={class:"text-gray-600"},s={class:"text-pink-600"},u=(0,o.Uk)(),l=(0,o.Wm)("span",{class:""},"Distributeurs",-1),c=(0,o.Wm)("h1",{class:"text-lg xl:text-4xl font-bold"},"Listes des distributeurs",-1),d={class:"w-full xl:w-2/3"};var p=n(7757),f=n.n(p),m={class:"font-medium"},v=(0,o.Uk)("Numéro distributeur : "),h={class:"text-pink-600"},b={class:"text-gray-800 text-xl font-medium"},g=(0,o.Wm)("span",null,"Localisation",-1),w=(0,o.Uk)(" : "),x=(0,o.Wm)("span",null,"Ville",-1),k=(0,o.Uk)(" : "),y={class:"text-black"};const T={name:"distributor",props:{distributor:Object},setup:function(t,e){var n=e.emit,r=(0,o.iH)(null);return{showTop:function(t){r.value=t.id,n("distToTop",t)},removeTop:function(t){r.value=null},toTop:r}},render:function(t,e,n,r,i,a){return(0,o.wg)(),(0,o.j4)("div",{class:"py-3 text-gray-500 border-b relative border-pink-500 cursor-pointer",onMouseout:e[1]||(e[1]=function(t){return r.removeTop(n.distributor)}),onMouseover:e[2]||(e[2]=function(t){return r.showTop(n.distributor)})},[(0,o.Wm)("h4",m,[v,(0,o.Wm)("span",h,(0,o.zw)(n.distributor.distributorNumber),1)]),(0,o.Wm)("h2",b,(0,o.zw)(n.distributor.name),1),(0,o.Wm)("div",null,[g,w,(0,o.Wm)("span",null,(0,o.zw)(n.distributor.localisation),1)]),(0,o.Wm)("div",null,[x,k,(0,o.Wm)("span",y,(0,o.zw)(n.distributor.city),1)]),(0,o.Wm)("div",{class:["py-1 px-8 rounded-2xl bg-pink-500 text-white absolute top-12 right-10",{hidden:r.toTop!==n.distributor.id}]}," Cliquer pour zoomer ",2)],32)}},C=T;var M=n(9844),W={center:{lat:5,lng:-3},zoom:8,fullscreenControl:!1,mapTypeControl:!1,rotateControl:!1,scaleControl:!1,streetViewControl:!1,zoomControl:!0},j=n(539);function z(t,e,n,o,r,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(o,r)}function H(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){z(i,o,r,a,s,"next",t)}function s(t){z(i,o,r,a,s,"throw",t)}a(void 0)}))}}const N={components:{distributor:C,gmapsMap:M.wk,gmapsMarker:M.u},data:function(){return{mapOptions:W}},setup:function(){var t=(0,o.f3)(j.RX),e=(0,o.iH)([]),n=(0,o.iH)([]),r=(0,o.iH)([]);(0,o.bv)(H(f().mark((function o(){return f().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.execute();case 2:e.value=o.sent,e.value.forEach((function(t){n.value.push({lat:t.latitude,lng:t.longitude}),r.value.push({options:{title:t.name,position:{lat:t.latitude,lng:t.longitude}}})}));case 4:case"end":return o.stop()}}),o)}))));return{distributors:e,handleMarkerClick:function(t){console.log(t)},handleMarkerHover:function(t){console.log(t)},handleDistrToTop:function(t){r.value=r.value.map((function(e){return e.options.position.lat==t.latitude&&e.options.position.lng==t.longitude?e.options.zIndex=99:delete e.options.zIndex,e}))},options:r,items:n}}};var S=n(3379),D=n.n(S),E=n(3248),O={insert:"head",singleton:!1};D()(E.Z,O);E.Z.locals;N.render=function(t,e,n,p,f,m){var v=(0,o.up)("distributor"),h=(0,o.up)("gmaps-marker"),b=(0,o.up)("gmaps-map");return(0,o.wg)(),(0,o.j4)("div",r,[(0,o.Wm)("div",i,[(0,o.Wm)("h4",a,[(0,o.Wm)("span",s,(0,o.zw)(p.distributors.length),1),u,l]),c,((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(p.distributors,(function(t){return(0,o.wg)(),(0,o.j4)(v,{key:t,distributor:t,onDistToTop:p.handleDistrToTop},null,8,["distributor","onDistToTop"])})),128))]),(0,o.Wm)("div",d,[(0,o.Wm)(b,{options:f.mapOptions},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(p.options,(function(t,e){return(0,o.wg)(),(0,o.j4)(h,{key:e,options:t.options,onMouseover:p.handleMarkerHover,onClick:p.handleMarkerClick},null,8,["options","onMouseover","onClick"])})),128))]})),_:1},8,["options"])])])};const U=N}}]);