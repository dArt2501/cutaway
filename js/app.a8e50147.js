(function(){"use strict";var e={9838:function(e,t,n){var r=n(5130),o=n(1387),a=n(6768);function s(e,t){return(0,a.uX)(),(0,a.CE)("div")}var c=n(1241);const i={},u=(0,c.A)(i,[["render",s]]);var l=u,p=n(4232),d=n(144),v=JSON.parse('{"description":"Всем привет, меня зовут Артем. Мне 14 лет, занимаюсь web-разработкой 2 года.","stack":"HTML, CSS, JS, Vue/Nuxt, Vuex/Pinia, REST/SOAP, Pug/Twig, Nginx/Apache, Git, Webpack/Vite, поднимал образ с Docker, был опыт написания кода на React, Angular, Express/Nest, знаком с Linux Ubuntu"}');const f={class:"about-page"},k={class:"about__description"},_={class:"about__stack"},b={class:"stack__items"};var h={__name:"AboutPage",setup(e){return(e,t)=>((0,a.uX)(),(0,a.CE)("div",f,[t[1]||(t[1]=(0,a.Lk)("h1",{class:"about__title"},"Обо мне",-1)),(0,a.Lk)("p",k,(0,p.v_)((0,d.R1)(v).description),1),(0,a.Lk)("div",_,[t[0]||(t[0]=(0,a.Lk)("h2",null,"Мой стек:",-1)),(0,a.Lk)("p",b,(0,p.v_)((0,d.R1)(v).stack),1)])]))}};const m=(0,c.A)(h,[["__scopeId","data-v-0028aa1a"]]);var w=m;const g={class:"projects-page-wrapper"};function C(e,t){return(0,a.uX)(),(0,a.CE)("div",g,t[0]||(t[0]=[(0,a.Lk)("div",{class:"projects-page"},[(0,a.Lk)("h1",{class:"projects__title"},"Мои проекты:")],-1)]))}const E={},L=(0,c.A)(E,[["render",C],["__scopeId","data-v-43f5fdc0"]]);var O=L;const y=[{path:"/",component:l,redirect:"about"},{path:"/about",component:w},{path:"/projects",component:O}];var X=(0,o.aE)({history:(0,o.LA)(),routes:y}),A=n(782),D=(0,A.y$)({state(){return{isDropdownOpen:!1}},mutations:{openDropdown(e){e.isDropdownOpen=!0},closeDropdown(e){e.isDropdownOpen=!1}},actions:{}}),F=JSON.parse('{"headerDropdown":{"Telegram":{"title":"Telegram","link":"https://t.me/Artem09za"},"Почта":{"title":"Почта","link":"mailto:artem1991v120fps@gmail.com"},"VK":{"title":"VK","link":"https://vk.com/im?sel=689762890"}}}');const R=["href"],j={class:"base-dropdown-mobile"},x=["href"];var I={__name:"BaseDropdown",setup(e){function t(){D.commit("closeDropdown")}return(e,n)=>{const r=(0,a.gN)("click-outside");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",{class:"base-dropdown",onMouseleave:t},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,d.R1)(F).headerDropdown,(e=>((0,a.uX)(),(0,a.CE)("a",{href:e.link,target:"_blank",class:"dropdown__items",onClick:t,key:e.link},(0,p.v_)(e.title),9,R)))),128))],32),(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",j,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,d.R1)(F).headerDropdown,(e=>((0,a.uX)(),(0,a.CE)("a",{href:e.link,target:"_blank",class:"dropdown__items",onClick:t,key:e.link},(0,p.v_)(e.title),9,x)))),128))])),[[r,t]])],64)}}};const S=(0,c.A)(I,[["__scopeId","data-v-df1c9fb4"]]);var K=S,N=n(8249),T=n(2353);const P={class:"base-burger"};var V={__name:"BaseBurger",setup(e){function t(){D.commit("openDropdown")}return(e,n)=>((0,a.uX)(),(0,a.CE)("div",P,[(0,a.Lk)("button",{class:"burger__button",onClick:t},[(0,a.bF)((0,d.R1)(N.gc),{icon:(0,d.R1)(T.ckx)},null,8,["icon"])])]))}};const B=(0,c.A)(V,[["__scopeId","data-v-3ac2e631"]]);var J=B,M=JSON.parse('{"header":{"Главная":{"link":"/","title":"Главная"},"Обо мне":{"link":"/about","title":"Обо мне"},"Мои проекты":{"link":"/projects","title":"Проекты"}}}');const W={class:"base-header"},H={class:"header__contacts-wrapper"};var z={__name:"BaseHeader",setup(e){function t(){D.commit("openDropdown")}return(e,n)=>{const r=(0,a.g2)("RouterLink");return(0,a.uX)(),(0,a.CE)("div",W,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,d.R1)(M).header,(e=>((0,a.uX)(),(0,a.Wv)(r,{to:e.link,class:"header__link",key:e.link},{default:(0,a.k6)((()=>[(0,a.eW)((0,p.v_)(e.title),1)])),_:2},1032,["to"])))),128)),(0,a.Lk)("div",H,[(0,a.Lk)("p",{class:"header__link",onMouseenter:t},"Контакты",32),(0,d.R1)(D).state.isDropdownOpen?((0,a.uX)(),(0,a.Wv)(K,{key:0})):(0,a.Q3)("",!0)]),(0,a.bF)(J)])}}};const G=(0,c.A)(z,[["__scopeId","data-v-56895168"]]);var Q=G;const U={class:"base-footer"};function $(e,t){return(0,a.uX)(),(0,a.CE)("div",U)}const q={},Y=(0,c.A)(q,[["render",$]]);var Z=Y;const ee={class:"base-animate"};function te(e,t){return(0,a.uX)(),(0,a.CE)("div",ee,t[0]||(t[0]=[(0,a.Lk)("div",{class:"sun"},[(0,a.Lk)("div",{class:"water"},[(0,a.Lk)("div",{class:"reflection"})])],-1),(0,a.Lk)("div",{class:"plop"},null,-1)]))}const ne={},re=(0,c.A)(ne,[["render",te],["__scopeId","data-v-8bec7eae"]]);var oe=re;const ae={class:"app-wrapper"};var se={__name:"App",setup(e){return(e,t)=>{const n=(0,a.g2)("RouterView");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",ae,[(0,a.bF)(Q),(0,a.bF)(n),(0,a.bF)(Z)]),(0,a.bF)(oe)],64)}}};const ce=se;var ie=ce,ue=n(2293),le=n(3178),pe=n.n(le);(0,r.Ef)(ie).use(X).use(ue.Ay).use(pe()).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,i=0;i<r.length;i++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(c=!1,a<s&&(s=a));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],c=r[1],i=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var l=i(n)}for(t&&t(r);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkcutaway"]=self["webpackChunkcutaway"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9838)}));r=n.O(r)})();
//# sourceMappingURL=app.a8e50147.js.map