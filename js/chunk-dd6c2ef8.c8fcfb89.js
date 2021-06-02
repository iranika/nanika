(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd6c2ef8"],{5369:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return c})),n.d(e,"ion_route_redirect",(function(){return s})),n.d(e,"ion_router",(function(){return M})),n.d(e,"ion_router_link",(function(){return z}));var r=n("0f9e"),o=n("3001"),i=n("748a"),u=n("ea50"),a=n("8fe3"),c=function(){function t(t){Object(o["o"])(this,t),this.ionRouteDataChanged=Object(o["g"])(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var u=i[o];if(t[u]!==e[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),s=function(){function t(t){Object(o["o"])(this,t),this.ionRouteRedirectChanged=Object(o["g"])(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),h="root",l="forward",f="back",d=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e},p=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var c=o.params&&o.params[a.slice(1)];if(!c)return null;e.push(c)}else""!==a&&e.push(a)}return e},v=function(t,e,n,o,i,u,a){var c=d(Object(r["f"])(Object(r["f"])([],m(e)),o));n&&(c="#"+c),void 0!==a&&(c=c+"?"+a),i===l?t.pushState(u,"",c):t.replaceState(u,"",c)},b=function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},g=function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}var i=m(e),u=m(r);return b(i,u)},m=function(t){if(null==t)return[""];var e=t.split("?")[0],n=e.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===n.length?[""]:n},w=function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+d(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++){var o=r[n];e(o)}console.groupEnd()},y=function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+d(r.from),"font-weight: bold"," TO: ","$c "+d(r.to),"font-weight: bold")}console.groupEnd()},j=function(t,e,n,o,u,a){return void 0===u&&(u=!1),Object(r["b"])(void 0,void 0,void 0,(function(){var c,s,l,f;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),c=P(t),o>=e.length||!c?[2,u]:[4,new Promise((function(t){return Object(i["c"])(c,t)}))];case 1:return r.sent(),s=e[o],[4,c.setRouteId(s.id,s.params,n,a)];case 2:return l=r.sent(),l.changed&&(n=h,u=!0),[4,j(l.element,e,n,o+1,u,a)];case 3:return u=r.sent(),l.markVisible?[4,l.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,u];case 6:return f=r.sent(),console.error(f),[2,!1];case 7:return[2]}}))}))},O=function(t){return Object(r["b"])(void 0,void 0,void 0,(function(){var e,n,o,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return n=P(o),n?[4,n.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},R=function(){return P(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))},C=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",P=function(t){if(t){if(t.matches(C))return t;var e=t.querySelector(C);return e||void 0}},E=function(t,e){var n=e.from,r=e.to;if(void 0===r)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if("*"===i)return!0;if(i!==t[o])return!1}return n.length===t.length},k=function(t,e){return e.find((function(e){return E(t,e)}))},S=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++)if(t[r].toLowerCase()!==e[r].id)break;return r},L=function(t,e){for(var n,r=new x(t),o=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])o=!0;else{for(var a=0,c=u;a<c.length;a++){var s=c[a],h=r.next();if(":"===s[0]){if(""===h)return null;n=n||[];var l=n[i]||(n[i]={});l[s.slice(1)]=h}else if(h!==s)return null}o=!1}}var f=!o||o===(""===r.next());return f?n?e.map((function(t,e){return{id:t.id,path:t.path,params:D(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e:null},D=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},N=function(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,u=e;i<u.length;i++){var a=u[i],c=S(o,a);c>r&&(n=a,r=c)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:D(e.params,t[n]&&t[n].params)}})):null},U=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],a=L(t,u);if(null!==a){var c=T(a);c>r&&(r=c,n=a)}}return n},T=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=o[r],u=0,a=i.path;u<a.length;u++){var c=a[u];":"===c[0]?e+=Math.pow(1,n):""!==c&&(e+=Math.pow(2,n)),n++}return e},x=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),A=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=_(t,"to");return{from:m(_(t,"from")),to:null==e?void 0:m(e)}}))},W=function(t){return H(I(t))},I=function(t,e){return void 0===e&&(e=t),Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=_(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:m(_(e,"url")),id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:I(t,e)}}))},_=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},H=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];G([],e,o)}return e},G=function(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++){var u=i[o];G(r,e,u)}else e.push(r)},M=function(){function t(t){Object(o["o"])(this,t),this.ionRouteWillChange=Object(o["g"])(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o["g"])(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return Object(r["b"])(this,void 0,void 0,(function(){return Object(r["d"])(this,(function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,R()];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(i["n"])(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i["n"])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:return n=r.sent(),!0!==n?("object"===typeof n&&(e=m(n.redirect)),[2,!1]):(console.debug("[ion-router] URL changed -> update nav",e,t),[2,this.writeNavStateRoot(e,t)])}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return t=e.sent(),!0!==t?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),Object(r["b"])(this,void 0,void 0,(function(){var o,i,u;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e),o=m(t),i=t.split("?")[1],[4,this.runGuards(o)];case 1:if(u=r.sent(),!0!==u){if("object"!==typeof u)return[2,!1];o=m(u.redirect),i=u.redirect.split("?")[1]}return this.setPath(o,e,i),[2,this.writeNavStateRoot(o,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return Object(r["b"])(this,void 0,void 0,(function(){return Object(r["d"])(this,(function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),w(W(this.el)),y(A(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return Object(r["b"])(this,void 0,void 0,(function(){var e,n,o,i,u,a;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,O(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=W(this.el),u=N(n,i),u?(a=p(u),a?(console.debug("[ion-router] nav changed -> update URL",n,a),this.setPath(a,t),[4,this.safeWriteNavState(o,u,h,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&k(t,A(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?l:e<n?f:h},t.prototype.writeNavStateRoot=function(t,e,n){return Object(r["b"])(this,void 0,void 0,(function(){var o,i,u,a,c;return Object(r["d"])(this,(function(r){return t?(o=A(this.el),i=k(t,o),u=null,i&&(this.setPath(i.to,e),u=i.from,t=i.to),a=W(this.el),c=U(t,a),c?[2,this.safeWriteNavState(document.body,c,e,t,u,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r["b"])(this,void 0,void 0,(function(){var c,s,h;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:c=r.sent(),s=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,u,a)];case 3:return s=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return c(),[2,s]}}))}))},t.prototype.lock=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),void 0===e&&(e=m(this.previousPath)),Object(r["b"])(this,void 0,void 0,(function(){var n,o,i,u,a,c,s,h,l;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return t&&e?(n=W(this.el),o=U(t,n),i=U(e,n),u=o&&o[o.length-1].beforeEnter,a=i&&i[i.length-1].beforeLeave,a?[4,a()]:[3,2]):[2,!0];case 1:return s=r.sent(),[3,3];case 2:s=!0,r.label=3;case 3:return c=s,!1===c||"object"===typeof c?[2,c]:u?[4,u()]:[3,5];case 4:return l=r.sent(),[3,6];case 5:l=!0,r.label=6;case 6:return h=l,!1===h||"object"===typeof h?[2,h]:[2,!0]}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r["b"])(this,void 0,void 0,(function(){var c,s;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,c=this.routeChangeEvent(o,i),c&&this.ionRouteWillChange.emit(c),[4,j(t,e,n,u,!1,a)]);case 1:return s=r.sent(),this.busy=!1,s&&console.debug("[ion-router] route changed",o),c&&this.ionRouteDidChange.emit(c),[2,s]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,v(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return g(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=d(t);if(this.previousPath=r,r===n)return null;var o=e?d(e):null;return{from:n,redirectedFrom:o,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["k"])(this)},enumerable:!1,configurable:!0}),t}(),q=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}",z=function(){function t(t){var e=this;Object(o["o"])(this,t),this.routerDirection="forward",this.onClick=function(t){Object(a["d"])(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=Object(u["b"])(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o["j"])(o["c"],{onClick:this.onClick,class:Object(a["a"])(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o["j"])("a",Object.assign({},n),Object(o["j"])("slot",null)))},t}();z.style=q},"8fe3":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}));var r=n("0f9e"),o=function(t,e){return null!==e.closest(t)},i=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign((n={"ion-color":!0},n["ion-color-"+t]=!0,n),e):e},u=function(t){if(void 0!==t){var e=Array.isArray(t)?t:t.split(" ");return e.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},a=function(t){var e={};return u(t).forEach((function(t){return e[t]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,e,n,o){return Object(r["b"])(void 0,void 0,void 0,(function(){var i;return Object(r["d"])(this,(function(r){return null!=t&&"#"!==t[0]&&!c.test(t)&&(i=document.querySelector("ion-router"),i)?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=chunk-dd6c2ef8.c8fcfb89.js.map