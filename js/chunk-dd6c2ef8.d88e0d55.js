(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd6c2ef8"],{5369:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return s})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return M})),n.d(e,"ion_router_link",(function(){return H}));var r=n("0f9e"),o=n("3001"),i=n("748a"),u=n("ea50"),a=n("8fe3"),s=function(){function t(t){Object(o["o"])(this,t),this.ionRouteDataChanged=Object(o["g"])(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var u=i[o];if(t[u]!==e[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),c=function(){function t(t){Object(o["o"])(this,t),this.ionRouteRedirectChanged=Object(o["g"])(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),h="root",l="forward",f="back",d=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e},p=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var s=o.params&&o.params[a.slice(1)];if(!s)return null;e.push(s)}else""!==a&&e.push(a)}return e},v=function(t,e,n,o,i,u,a){var s=d(Object(r["f"])(Object(r["f"])([],m(e).segments),o));n&&(s="#"+s),void 0!==a&&(s=s+"?"+a),i===l?t.pushState(u,"",s):t.replaceState(u,"",s)},b=function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},g=function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}var i=m(e).segments,u=m(r).segments;return b(i,u)},m=function(t){var e,n=[""];if(null!=t){var r=t.indexOf("?");r>-1&&(e=t.substr(r+1),t=t.substr(0,r)),n=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0})),0===n.length&&(n=[""])}return{segments:n,queryString:e}},w=function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+d(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++){var o=r[n];e(o)}console.groupEnd()},y=function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+d(r.from),"font-weight: bold"," TO: ","$c "+d(r.to.segments),"font-weight: bold")}console.groupEnd()},j=function(t,e,n,o,u,a){return void 0===u&&(u=!1),Object(r["b"])(void 0,void 0,void 0,(function(){var s,c,l,f;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),s=P(t),o>=e.length||!s?[2,u]:[4,new Promise((function(t){return Object(i["c"])(s,t)}))];case 1:return r.sent(),c=e[o],[4,s.setRouteId(c.id,c.params,n,a)];case 2:return l=r.sent(),l.changed&&(n=h,u=!0),[4,j(l.element,e,n,o+1,u,a)];case 3:return u=r.sent(),l.markVisible?[4,l.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,u];case 6:return f=r.sent(),console.error(f),[2,!1];case 7:return[2]}}))}))},O=function(t){return Object(r["b"])(void 0,void 0,void 0,(function(){var e,n,o,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return n=P(o),n?[4,n.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},R=function(){return P(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))},C=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",P=function(t){if(t){if(t.matches(C))return t;var e=t.querySelector(C);return e||void 0}},S=function(t,e){var n=e.from,r=e.to;if(void 0===r)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if("*"===i)return!0;if(i!==t[o])return!1}return n.length===t.length},k=function(t,e){return e.find((function(e){return S(t,e)}))},E=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++)if(t[r].toLowerCase()!==e[r].id)break;return r},D=function(t,e){for(var n,r=new W(t),o=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])o=!0;else{for(var a=0,s=u;a<s.length;a++){var c=s[a],h=r.next();if(":"===c[0]){if(""===h)return null;n=n||[];var l=n[i]||(n[i]={});l[c.slice(1)]=h}else if(h!==c)return null}o=!1}}var f=!o||o===(""===r.next());return f?n?e.map((function(t,e){return{id:t.id,path:t.path,params:L(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e:null},L=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},N=function(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,u=e;i<u.length;i++){var a=u[i],s=E(o,a);s>r&&(n=a,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:L(e.params,t[n]&&t[n].params)}})):null},U=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],a=D(t,u);if(null!==a){var s=x(a);s>r&&(r=s,n=a)}}return n},x=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=o[r],u=0,a=i.path;u<a.length;u++){var s=a[u];":"===s[0]?e+=Math.pow(1,n):""!==s&&(e+=Math.pow(2,n)),n++}return e},W=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),q=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=I(t,"to");return{from:m(I(t,"from")).segments,to:null==e?void 0:m(e)}}))},A=function(t){return _(T(t))},T=function(t,e){return void 0===e&&(e=t),Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=I(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:m(I(e,"url")).segments,id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:T(t,e)}}))},I=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},_=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];G([],e,o)}return e},G=function(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++){var u=i[o];G(r,e,u)}else e.push(r)},M=function(){function t(t){Object(o["o"])(this,t),this.ionRouteWillChange=Object(o["g"])(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o["g"])(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return[4,R()];case 1:return r.sent(),[4,this.runGuards(this.getPath())];case 2:return t=r.sent(),!0===t?[3,5]:"object"!==typeof t?[3,4]:(e=t.redirect,n=m(e),this.setPath(n.segments,h,n.queryString),[4,this.writeNavStateRoot(n.segments,h)]);case 3:r.sent(),r.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:r.sent(),r.label=7;case 7:return[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(i["n"])(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i["n"])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:if(n=r.sent(),!0!==n){if("object"!==typeof n)return[2,!1];e=m(n.redirect).segments}return[2,this.writeNavStateRoot(e,t)]}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return t=e.sent(),!0!==t?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),Object(r["b"])(this,void 0,void 0,(function(){var o,i;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),o=m(t),[4,this.runGuards(o.segments)];case 1:if(i=r.sent(),!0!==i){if("object"!==typeof i)return[2,!1];o=m(i.redirect)}return this.setPath(o.segments,e,o.queryString),[2,this.writeNavStateRoot(o.segments,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return Object(r["b"])(this,void 0,void 0,(function(){return Object(r["d"])(this,(function(t){return w(A(this.el)),y(q(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return Object(r["b"])(this,void 0,void 0,(function(){var e,n,o,i,u,a;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,O(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=A(this.el),u=N(n,i),u?(a=p(u),a?(this.setPath(a,t),[4,this.safeWriteNavState(o,u,h,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&k(t,q(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?l:e<n?f:h},t.prototype.writeNavStateRoot=function(t,e,n){return Object(r["b"])(this,void 0,void 0,(function(){var o,i,u,a,s,c,h,l;return Object(r["d"])(this,(function(r){return t?(o=q(this.el),i=k(t,o),u=null,i&&(a=i.to,s=a.segments,c=a.queryString,this.setPath(s,e,c),u=i.from,t=s),h=A(this.el),l=U(t,h),l?[2,this.safeWriteNavState(document.body,l,e,t,u,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r["b"])(this,void 0,void 0,(function(){var s,c,h;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:s=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,u,a)];case 3:return c=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return s(),[2,c]}}))}))},t.prototype.lock=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e;return Object(r["d"])(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),Object(r["b"])(this,void 0,void 0,(function(){var n,o,i,u,a,s,c;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return void 0===e&&(e=m(this.previousPath).segments),t&&e?(n=A(this.el),o=U(e,n),i=o&&o[o.length-1].beforeLeave,i?[4,i()]:[3,2]):[2,!0];case 1:return a=r.sent(),[3,3];case 2:a=!0,r.label=3;case 3:return u=a,!1===u||"object"===typeof u?[2,u]:(s=U(t,n),c=s&&s[s.length-1].beforeEnter,[2,!c||c()])}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r["b"])(this,void 0,void 0,(function(){var s,c;return Object(r["d"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,s=this.routeChangeEvent(o,i),s&&this.ionRouteWillChange.emit(s),[4,j(t,e,n,u,!1,a)]);case 1:return c=r.sent(),this.busy=!1,s&&this.ionRouteDidChange.emit(s),[2,c]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,v(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return g(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=d(t);if(this.previousPath=r,r===n)return null;var o=e?d(e):null;return{from:n,redirectedFrom:o,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["k"])(this)},enumerable:!1,configurable:!0}),t}(),z=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}",H=function(){function t(t){var e=this;Object(o["o"])(this,t),this.routerDirection="forward",this.onClick=function(t){Object(a["d"])(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=Object(u["b"])(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o["j"])(o["c"],{onClick:this.onClick,class:Object(a["a"])(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o["j"])("a",Object.assign({},n),Object(o["j"])("slot",null)))},t}();H.style=z},"8fe3":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var r=n("0f9e"),o=function(t,e){return null!==e.closest(t)},i=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign((n={"ion-color":!0},n["ion-color-"+t]=!0,n),e):e},u=function(t){if(void 0!==t){var e=Array.isArray(t)?t:t.split(" ");return e.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},a=function(t){var e={};return u(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,n,o){return Object(r["b"])(void 0,void 0,void 0,(function(){var i;return Object(r["d"])(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(i=document.querySelector("ion-router"),i)?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=chunk-dd6c2ef8.d88e0d55.js.map