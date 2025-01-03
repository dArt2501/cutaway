(function(){"use strict";var t={7453:function(t,e,n){var r=n(5130),a=n(1387),o=n(6768);function s(t,e){return(0,o.uX)(),(0,o.CE)("div")}var i=n(1241);const l={},u=(0,i.A)(l,[["render",s]]);var c=u,p=n(4232),d=n(144),k=JSON.parse('{"description":"Всем привет, меня зовут Артем. Мне 14 лет, занимаюсь web-разработкой 2 года.","stack":"HTML, CSS, JS, Vue/Nuxt, Vuex/Pinia, REST/SOAP, Pug/Twig, Nginx/Apache, Git, Webpack/Vite, поднимал образ с Docker, был опыт написания кода на React, Angular, Express/Nest, знаком с Linux Ubuntu"}');const v={class:"about-page"},h={class:"about__description"},f={class:"about__stack"},m={class:"stack__items"};var _={__name:"AboutPage",setup(t){return(t,e)=>((0,o.uX)(),(0,o.CE)("div",v,[e[1]||(e[1]=(0,o.Lk)("h1",{class:"about__title"},"Обо мне",-1)),(0,o.Lk)("p",h,(0,p.v_)((0,d.R1)(k).description),1),(0,o.Lk)("div",f,[e[0]||(e[0]=(0,o.Lk)("h2",null,"Мой стек:",-1)),(0,o.Lk)("p",m,(0,p.v_)((0,d.R1)(k).stack),1)])]))}};const b=(0,i.A)(_,[["__scopeId","data-v-0028aa1a"]]);var g=b,w=JSON.parse('{"projects":{"aeromar":{"title":"aeromar ","link":"https://aeromar.ru/"},"art-talant":{"title":"art-talant","link":"https://art-talant.org/"},"sapland":{"title":"sapland ","link":" https://sapland.ru/"},"tmk":{"title":"tmk-group ","link":"https://www.tmk-group.ru/cap.html"},"vmedcentre":{"title":"vmedcentre ","link":"https://vmedcentre.ru/"},"saunapiter":{"title":"saunapiter ","link":"https://saunapiter.ru/"},"doshirak":{"title":"doshirak ","link":"https://doshirak.com/"},"pixel24":{"title":"pixel24 ","link":" https://pixel24.ru/"},"capcard":{"title":"capcard ","link":"https://capcard.ru/"},"dkz":{"title":"dkz ","link":"https://dkz.ru/"},"openstart":{"title":"openstart ","link":"https://openstart.ru/"},"grandmaket":{"title":"grandmaket ","link":"https://grandmaket.ru/"},"penzavzglyad":{"title":"penzavzglyad ","link":"https://penzavzglyad.ru/"},"evroplast":{"title":"evroplast ","link":"https://evroplast.ru/"},"fitnessmagazin":{"title":"fitnessmagazin ","link":"https://fitnessmagazin.ru/"},"петрополь-подарки":{"title":"петрополь-подарки ","link":" https://xn----8sblcsldxacfcdijv9o.xn--p1ai/"},"borodinskoe":{"title":"borodinskoe ","link":"https://borodinskoe.ru/"},"ouvet.ru":{"title":"ouvet ","link":"https://ouvet.ru/"},"zamena-masla-spot":{"title":"zamena-masla-spot ","link":"https://zamena-masla-spot.ru/"},"cipresso-hotel":{"title":"cipresso-hotel ","link":"https://cipresso-hotel.ru/"},"famil.ru":{"title":"famil.ru ","link":"https://www.famil.ru/ru"}}}');const C={class:"projects-page-wrapper"},E={class:"projects-page"},L={class:"projects__list"},y=["href"];var O={__name:"ProjectsPage",setup(t){return(t,e)=>((0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("div",E,[e[0]||(e[0]=(0,o.Lk)("h1",{class:"projects__title"},"Мои проекты:",-1)),(0,o.Lk)("ul",L,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,d.R1)(w).projects,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t.title},[(0,o.Lk)("a",{href:t.link,target:"_blank"},(0,p.v_)(t.title),9,y)])))),128))])])]))}};const X=(0,i.A)(O,[["__scopeId","data-v-79305de2"]]);var x=X;const j=[{path:"/",component:c,redirect:"about"},{path:"/about",component:g},{path:"/projects",component:x}];var z=(0,a.aE)({history:(0,a.LA)(),routes:j}),A=n(782),D=(0,A.y$)({state(){return{isDropdownOpen:!1}},mutations:{openDropdown(t){t.isDropdownOpen=!0},closeDropdown(t){t.isDropdownOpen=!1}},actions:{}}),F=JSON.parse('{"headerDropdown":{"Telegram":{"title":"Telegram","link":"https://t.me/Artem09za"},"Почта":{"title":"Почта","link":"mailto:artem1991v120fps@gmail.com"},"VK":{"title":"VK","link":"https://vk.com/im?sel=689762890"}}}');const R=["href"],I={class:"base-dropdown-mobile"},S=["href"];var K={__name:"BaseDropdown",setup(t){function e(){D.commit("closeDropdown")}return(t,n)=>{const r=(0,o.gN)("click-outside");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",{class:"base-dropdown",onMouseleave:e},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,d.R1)(F).headerDropdown,(t=>((0,o.uX)(),(0,o.CE)("a",{href:t.link,target:"_blank",class:"dropdown__items",onClick:e,key:t.link},(0,p.v_)(t.title),9,R)))),128))],32),(0,o.bo)(((0,o.uX)(),(0,o.CE)("div",I,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,d.R1)(F).headerDropdown,(t=>((0,o.uX)(),(0,o.CE)("a",{href:t.link,target:"_blank",class:"dropdown__items",onClick:e,key:t.link},(0,p.v_)(t.title),9,S)))),128))])),[[r,e]])],64)}}};const N=(0,i.A)(K,[["__scopeId","data-v-df1c9fb4"]]);var P=N,T=n(8249),V=n(2353);const J={class:"base-burger"};var B={__name:"BaseBurger",setup(t){function e(){D.commit("openDropdown")}return(t,n)=>((0,o.uX)(),(0,o.CE)("div",J,[(0,o.Lk)("button",{class:"burger__button",onClick:e},[(0,o.bF)((0,d.R1)(T.gc),{icon:(0,d.R1)(V.ckx)},null,8,["icon"])])]))}};const M=(0,i.A)(B,[["__scopeId","data-v-3ac2e631"]]);var W=M,H=JSON.parse('{"header":{"Главная":{"link":"/","title":"Главная"},"Обо мне":{"link":"/about","title":"Обо мне"},"Мои проекты":{"link":"/projects","title":"Проекты"}}}');const G={class:"base-header"},Q={class:"header__contacts-wrapper"};var U={__name:"BaseHeader",setup(t){function e(){D.commit("openDropdown")}return(t,n)=>{const r=(0,o.g2)("RouterLink");return(0,o.uX)(),(0,o.CE)("div",G,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,d.R1)(H).header,(t=>((0,o.uX)(),(0,o.Wv)(r,{to:t.link,class:"header__link",key:t.link},{default:(0,o.k6)((()=>[(0,o.eW)((0,p.v_)(t.title),1)])),_:2},1032,["to"])))),128)),(0,o.Lk)("div",Q,[(0,o.Lk)("p",{class:"header__link",onMouseenter:e},"Контакты",32),(0,d.R1)(D).state.isDropdownOpen?((0,o.uX)(),(0,o.Wv)(P,{key:0})):(0,o.Q3)("",!0)]),(0,o.bF)(W)])}}};const $=(0,i.A)(U,[["__scopeId","data-v-56895168"]]);var q=$;const Y={class:"base-footer"};function Z(t,e){return(0,o.uX)(),(0,o.CE)("div",Y)}const tt={},et=(0,i.A)(tt,[["render",Z]]);var nt=et;const rt={class:"base-animate"};function at(t,e){return(0,o.uX)(),(0,o.CE)("div",rt,e[0]||(e[0]=[(0,o.Lk)("div",{class:"sun"},[(0,o.Lk)("div",{class:"water"},[(0,o.Lk)("div",{class:"reflection"})])],-1),(0,o.Lk)("div",{class:"plop"},null,-1)]))}const ot={},st=(0,i.A)(ot,[["render",at],["__scopeId","data-v-8bec7eae"]]);var it=st;const lt={class:"app-wrapper"};var ut={__name:"App",setup(t){return(t,e)=>{const n=(0,o.g2)("RouterView");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",lt,[(0,o.bF)(q),(0,o.bF)(n),(0,o.bF)(nt)]),(0,o.bF)(it)],64)}}};const ct=ut;var pt=ct,dt=n(2293),kt=n(3178),vt=n.n(kt);(0,r.Ef)(pt).use(z).use(dt.Ay).use(vt()).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],o=t[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(e&&e(r);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkcutaway"]=self["webpackChunkcutaway"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7453)}));r=n.O(r)})();
//# sourceMappingURL=app.37129857.js.map