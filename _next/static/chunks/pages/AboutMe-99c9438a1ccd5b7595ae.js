(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var i,c=(i=n(7294))&&i.__esModule?i:{default:i},o=n(1063),a=n(4651),l=n(7426);var u={};function d(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,i=a.useRouter(),s=c.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?o.resolveHref(i,e.as):a||c}}),[i,e.href,e.as]),f=s.href,h=s.as,p=e.children,m=e.replace,v=e.shallow,Z=e.scroll,g=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var y=(t=c.default.Children.only(p))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=r(w,2),b=x[0],k=x[1],N=c.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);c.default.useEffect((function(){var e=k&&n&&o.isLocalURL(f),t="undefined"!==typeof g?g:i&&i.locale,r=u[f+"%"+h+(t?"%"+t:"")];e&&!r&&d(i,f,h,{locale:t})}),[h,f,k,g,n,i]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](n,r,{shallow:c,locale:l,scroll:a}))}(e,i,f,h,m,v,Z,g)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(i,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:i&&i.locale,M=i&&i.isLocaleDomain&&o.getDomainLocale(h,C,i&&i.locales,i&&i.domainLocales);_.href=M||o.addBasePath(o.addLocale(h,C,i&&i.defaultLocale))}return c.default.cloneElement(t,_)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=i.useRef(),u=i.useState(!1),d=r(u,2),s=d[0],f=d[1],h=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||s||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),a.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return i.useEffect((function(){if(!o&&!s){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[s]),[h,s]};var i=n(7294),c=n(3447),o="undefined"!==typeof IntersectionObserver;var a=new Map},2890:function(e,t,n){"use strict";n.d(t,{O:function(){return f}});n(7294);var r=n(7713),i=n(5944),c=function(e){var t=e.children;return(0,i.tZ)("div",{className:"bg-black rounded-3xl w-96 mt-10 mb-10 pb-4 mx-auto",children:t})},o=function(e){var t=e.children;return(0,i.tZ)("div",{className:"flex flex-wrap",children:t})},a=function(e){var t=e.children;return(0,i.tZ)("div",{className:"mx-auto",children:t})},l=function(e){var t=e.children;return(0,i.tZ)("div",{className:"flex flex-col mt-4",children:t})},u=function(e){var t=e.title;return(0,i.tZ)("div",{className:"text-white text-3xl text-center",children:t})},d=function(e){var t=e.description;return(0,i.tZ)("div",{className:"text-white text-xl h-16 text-center",children:t})},s=function(e){var t=e.children,n=e.src;return(0,i.tZ)("img",{className:"w-full h-80 rounded-t-3xl",src:n,children:t})},f=function(e){var t=e.title,n=e.description,f=e.imgPath,h=e.lat,p=e.lng,m=e.name;return(0,i.tZ)(c,{children:(0,i.BX)(o,{children:[(0,i.tZ)(s,{src:f}),(0,i.tZ)(a,{children:(0,i.BX)(l,{children:[(0,i.tZ)(u,{title:t}),(0,i.tZ)(d,{description:n})]})}),(0,i.tZ)("div",{className:"w-80 h-80 mx-auto my-2",children:(0,i.tZ)(r.o,{lat:h,lng:p,name:m})})]})})}},2237:function(e,t,n){"use strict";n.d(t,{h:function(){return d}});n(7294);var r=n(6972),i=n(5944),c=function(e){var t=e.children;return(0,i.tZ)("div",{className:"bg-black max-w-full pb-14",children:t})},o=function(e){var t=e.children;return(0,i.tZ)("div",{className:"flex justify-left pl-20 pt-20",children:t})},a=function(e){var t=e.children;return(0,i.tZ)("div",{className:"flex flex-col",children:t})},l=function(e){var t=e.children;return(0,i.tZ)("div",{className:"text-white text-3xl",children:t})},u=function(e){var t=e.children;return(0,i.tZ)("div",{className:"text-white text-xl w-8/12",children:t})},d=function(){return(0,i.BX)(c,{children:[(0,i.tZ)(o,{children:(0,i.BX)(a,{children:[(0,i.tZ)(l,{children:"Aleksander Bondar"}),(0,i.tZ)(u,{children:"Technik mechatronik, pocz\u0105tkuj\u0105cy front-end developer, przysz\u0142y in\u017cynier."})]})}),(0,i.tZ)(r.v,{})]})}},7713:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(7294),i=n(7054),c=n(5944),o={fullscreenControl:!1,zoomControl:!1,streetViewControl:!1,mapTypeControl:!1},a=function(e,t){var n=(0,r.useState)(null),a=n[0],l=n[1],u={lat:e.lat,lng:e.lng},d=e.name,s=[{id:1,name:d,position:u},{id:2,name:d,position:u},{id:3,name:d,position:u},{id:4,name:d,position:u},{id:5,name:d,position:u},{id:6,name:d,position:u}];return(0,c.tZ)(i.KJ,{googleMapsApiKey:"AIzaSyChVDA9K2zF25aIuzptWqieb44rPQ-Ya4I",children:(0,c.tZ)(i.b6,{clickableIcons:!1,onClick:function(){return l(null)},onDrag:function(){return l(null)},center:u,zoom:10,options:o,mapTypeId:"satellite",mapContainerStyle:{width:"100%",height:"100%"},children:s.map((function(e){var t=e.id,n=e.name,r=e.position;return(0,c.tZ)(i.Jx,{position:r,onClick:function(){var e;(e=t)!==a&&l(e)},children:a===t?(0,c.tZ)(i.nx,{onCloseClick:function(){return l(null)},children:(0,c.tZ)("div",{children:n})}):null},t)}))})})}},6972:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});n(7294);var r=n(1664),i=n(5944),c=function(e){var t=e.children;return(0,i.tZ)("ul",{className:"flex flex-row justify-end mr-6 mt-10",children:t})},o=function(e){var t=e.children;return(0,i.tZ)("li",{className:"text-base pl-4 text-blue-200 cursor-pointer hover:underline",children:t})},a=function(){return(0,i.BX)(c,{children:[(0,i.tZ)(o,{children:(0,i.tZ)(r.default,{href:"/",children:(0,i.tZ)("a",{children:"Strona g\u0142\xf3wna"})})}),(0,i.tZ)(o,{children:(0,i.tZ)(r.default,{href:"/Projects",children:(0,i.tZ)("a",{children:"Projekty"})})}),(0,i.tZ)(o,{children:(0,i.tZ)(r.default,{href:"/AboutMe",children:(0,i.tZ)("a",{children:"O mnie"})})})]})}},1815:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});n(7294);var r=n(9008),i=n(5944),c=function(e){var t=e.pageTitle;return(0,i.BX)(r.default,{children:[(0,i.tZ)("title",{children:t||"PB JamStack"}),(0,i.tZ)("meta",{name:"description",content:"description."}),(0,i.tZ)("meta",{property:"keywords",content:"keywords"}),(0,i.tZ)("meta",{property:"og:image",content:"https://yourdomain/images/jpg/ogImage.jpg"}),(0,i.tZ)("meta",{name:"og:title",content:"og title"}),(0,i.tZ)("meta",{property:"og:site_name",content:"og site name"}),(0,i.tZ)("meta",{property:"og:type",content:"website"}),(0,i.tZ)("meta",{property:"og:description",content:"og desc."}),(0,i.tZ)("meta",{property:"og:url",content:"https://yourdomain.pl123"}),(0,i.tZ)("meta",{property:"article:publisher",content:"https://www.facebook.com/youraddress123123123"}),(0,i.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.tZ)("meta",{name:"twitter:title",content:"twitter title"}),(0,i.tZ)("meta",{name:"twitter:description",content:"twitter desc"}),(0,i.tZ)("meta",{name:"twitter:url",content:"https://yourdomain.pl123"})]})},o=(n(2890),n(7713),n(6972),function(e){var t=e.children;return(0,i.tZ)("div",{className:"w-full",children:t})}),a=function(e){var t=e.children,n=e.pageTitle,r=e.title;return(0,i.BX)("div",{className:"container max-w-full",children:[(0,i.tZ)(c,{pageTitle:n||r}),(0,i.tZ)(o,{children:t})]})}},3381:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u}});n(7294);var r=n(2237),i=n(1815),c=n(2890),o=n(5944),a=function(e){var t=e.children;return(0,o.tZ)("div",{className:"flex flex-wrap animate-fade-in-down",children:t})},l=function(e){var t=e.children;return(0,o.tZ)("div",{className:"text-5xl text-center mt-4 font-black",children:t})},u=!0;t.default=function(e){var t=e.content;return(0,o.BX)(i.A,{title:"About Me",children:[(0,o.tZ)(r.h,{}),(0,o.tZ)(l,{children:"Odwiedzi\u0142em mi\u0119dzy innymi:"}),(0,o.tZ)(a,{children:t.map((function(e){return(0,o.tZ)(c.O,{title:e.title,description:e.description,imgPath:e.imgPath,lat:e.lat,lng:e.lng,name:e.name})}))})]})}},3562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AboutMe",function(){return n(3381)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[255,774,888,179],(function(){return t=3562,e(e.s=t);var t}));var t=e.O();_N_E=t}]);