(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{3333:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Guides",function(){return n(4963)}])},4963:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return l}});var s=n(5893),o=n(7294),a=(n(5675),n(1664)),r=n.n(a),i=n(782),l=(n(4213),!0);t.default=function(e){var t=e.blogs,n=[];t.data.map((function(e){e.attributes.categories.data.map((function(t){"Guide"===t.attributes.name&&n.push(e)}))})),n.sort((function(e,t){return t.id-e.id}));var a=(0,o.useState)(4),l=a[0],c=a[1];return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-wrap w-full mb-20 md:flex-col",children:[(0,s.jsxs)("div",{className:"lg:w-1/2 w-full mb-6 lg:mb-0",children:[(0,s.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",children:"Everything to know about tech is here!!!"}),(0,s.jsx)("div",{className:"h-1 w-20 bg-purple-500 rounded"})]}),(0,s.jsx)("p",{className:" w-full leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit maiores ab iste, esse, perspiciatis dicta, libero unde ad fugit labore sequi nesciunt deserunt. Dolor, consectetur libero. Odio quo dolorum laboriosam quos ullam nesciunt, possimus corporis molestias eos, deleniti itaque dignissimos sint odit soluta omnis velit incidunt unde voluptatibus! Aspernatur?"})]}),(0,s.jsx)("div",{className:" mx-auto ",children:(0,s.jsxs)("div",{className:"flex flex-wrap m-4 justify-center",children:[n&&n.slice(0,l).map((function(e){return(0,s.jsxs)("div",{className:"flex flex-col overflow-hidden rounded-lg shadow-lg lg:w-1/4 md:w-1/2 p-4 ",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"object-cover item object-center w-80 self-center ",src:e.attributes.image.data&&e.attributes.image.data.attributes.name,alt:""})}),(0,s.jsx)(r(),{href:"/Blog/".concat(e.attributes.slug),className:"flex flex-col justify-between p-10 bg-white",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsxs)("a",{href:"#",className:"block m-2",children:[(0,s.jsx)("p",{className:"text-xl font-semibold text-neutral-600",children:e.attributes.title}),(0,s.jsx)("p",{className:"mt-3 text-base text-gray-500",children:e.attributes.desc})]})})}),(0,s.jsxs)("div",{className:"flex items-center m-6",children:[(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsxs)("a",{href:"https://twitter.com/Mike_Andreuzza",children:[(0,s.jsx)("span",{className:"sr-only",children:e.attributes.author.data.attributes.name}),(0,s.jsx)("img",{className:"w-10 h-10 rounded-full",src:"https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg",alt:""})]})}),(0,s.jsxs)("div",{className:"ml-3",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-neutral-600",children:(0,s.jsx)("a",{href:"https://twitter.com/Mike_Andreuzza",className:"hover:underline",children:" "})}),(0,s.jsxs)("div",{className:"flex space-x-1 text-sm text-gray-500",children:[(0,s.jsx)("time",{children:" Mar 16, 2020 "}),(0,s.jsx)("span",{"aria-hidden":"true",children:" \xb7 "}),(0,s.jsx)("span",{children:" 6 min read "})]})]})]})]},e.id)})),(0,s.jsxs)("div",{className:"container flex justify-center m-4",children:[(0,s.jsx)("button",{onClick:function(){return c((function(e){return e+4})),void(l>=n.length&&i.Am.info("No more Blogs of this category",{position:"bottom-center",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))},className:"m-2 px-2 py-1 self-center border-2 border-black rounded-md ",children:"Readmore"}),(0,s.jsx)(i.Ix,{position:"bottom-center",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})})]})})}},4213:function(){},782:function(e,t,n){"use strict";n.d(t,{Ix:function(){return w},Am:function(){return D}});var s=n(7294);function o(e){var t,n,s="";if("string"===typeof e||"number"===typeof e)s+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function a(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(s&&(s+=" "),s+=t);return s}function r(e){return"number"==typeof e&&!isNaN(e)}function i(e){return"boolean"==typeof e}function l(e){return"string"==typeof e}function c(e){return"function"==typeof e}function u(e){return l(e)||c(e)?e:null}function d(e){return 0===e||e}function m(e){return(0,s.isValidElement)(e)||l(e)||c(e)||r(e)}const f={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},p={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function g(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:m}=e;const f=o?t+"--"+l:t,p=o?n+"--"+l:n,g=(0,s.useRef)(),h=(0,s.useRef)(0);function y(e){if(e.target!==d.current)return;const t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===h.current&&"animationcancel"!==e.type&&(t.className=g.current)}function v(){const e=d.current;e.removeEventListener("animationend",v),a?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:s,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=s+"px",o.transition="all "+n+"ms",requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,r):u()}return(0,s.useLayoutEffect)((()=>{!function(){const e=d.current;g.current=e.className,e.className+=" "+f,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,s.useEffect)((()=>{m||(c?v():function(){h.current=1;const e=d.current;e.className+=" "+p,e.addEventListener("animationend",v)}())}),[m]),s.createElement(s.Fragment,null,i)}}function h(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const y={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}};function v(e){const[,t]=(0,s.useReducer)((e=>e+1),0),[n,o]=(0,s.useState)([]),a=(0,s.useRef)(null),f=(0,s.useRef)(new Map).current,p=e=>-1!==n.indexOf(e),g=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:p,getToast:e=>f.get(e)}).current;function v(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function T(e){o((t=>d(e)?t.filter((t=>t!==e)):[]))}function b(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();x(e,t,n)}function E(e,n){let{delay:o,staleId:p,...v}=n;if(!m(e)||function(e){return!a.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||f.has(e.toastId)&&null==e.updateId}(v))return;const{toastId:E,updateId:_,data:N}=v,{props:C}=g,O=()=>T(E),I=null==_;I&&g.count++;const w={toastId:E,updateId:_,containerId:v.containerId,isLoading:v.isLoading,theme:v.theme||C.theme,icon:null!=v.icon?v.icon:C.icon,isIn:!1,key:v.key||g.toastKey++,type:v.type,closeToast:O,closeButton:v.closeButton,rtl:C.rtl,position:v.position||C.position,transition:v.transition||C.transition,className:u(v.className||C.toastClassName),bodyClassName:u(v.bodyClassName||C.bodyClassName),style:v.style||C.toastStyle,bodyStyle:v.bodyStyle||C.bodyStyle,onClick:v.onClick||C.onClick,pauseOnHover:i(v.pauseOnHover)?v.pauseOnHover:C.pauseOnHover,pauseOnFocusLoss:i(v.pauseOnFocusLoss)?v.pauseOnFocusLoss:C.pauseOnFocusLoss,draggable:i(v.draggable)?v.draggable:C.draggable,draggablePercent:v.draggablePercent||C.draggablePercent,draggableDirection:v.draggableDirection||C.draggableDirection,closeOnClick:i(v.closeOnClick)?v.closeOnClick:C.closeOnClick,progressClassName:u(v.progressClassName||C.progressClassName),progressStyle:v.progressStyle||C.progressStyle,autoClose:!v.isLoading&&(L=v.autoClose,k=C.autoClose,!1===L||r(L)&&L>0?L:k),hideProgressBar:i(v.hideProgressBar)?v.hideProgressBar:C.hideProgressBar,progress:v.progress,role:v.role||C.role,deleteToast(){const e=h(f.get(E),"removed");f.delete(E),y.emit(4,e);const n=g.queue.length;if(g.count=d(E)?g.count-1:g.count-g.displayedToast,g.count<0&&(g.count=0),n>0){const e=d(E)?1:g.props.limit;if(1===n||1===e)g.displayedToast++,b();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};var L,k;c(v.onOpen)&&(w.onOpen=v.onOpen),c(v.onClose)&&(w.onClose=v.onClose),w.closeButton=C.closeButton,!1===v.closeButton||m(v.closeButton)?w.closeButton=v.closeButton:!0===v.closeButton&&(w.closeButton=!m(C.closeButton)||C.closeButton);let R=e;(0,s.isValidElement)(e)&&!l(e.type)?R=(0,s.cloneElement)(e,{closeToast:O,toastProps:w,data:N}):c(e)&&(R=e({closeToast:O,toastProps:w,data:N})),C.limit&&C.limit>0&&g.count>C.limit&&I?g.queue.push({toastContent:R,toastProps:w,staleId:p}):r(o)?setTimeout((()=>{x(R,w,p)}),o):x(R,w,p)}function x(e,t,n){const{toastId:s}=t;n&&f.delete(n);const a={content:e,props:t};f.set(s,a),o((e=>[...e,s].filter((e=>e!==n)))),y.emit(4,h(a,null==a.props.updateId?"added":"updated"))}return(0,s.useEffect)((()=>(g.containerId=e.containerId,y.cancelEmit(3).on(0,E).on(1,(e=>a.current&&T(e))).on(5,v).emit(2,g),()=>y.emit(3,g))),[]),(0,s.useEffect)((()=>{g.props=e,g.isToastActive=p,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,s=Array.from(f.values());return e.newestOnTop&&s.reverse(),s.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:a,isToastActive:p}}function T(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function b(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function E(e){const[t,n]=(0,s.useState)(!1),[o,a]=(0,s.useState)(!1),r=(0,s.useRef)(null),i=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,s.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:m,onClick:f,closeOnClick:p}=e;function g(t){if(e.draggable){i.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",x),document.addEventListener("touchmove",E),document.addEventListener("touchend",x);const n=r.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=T(t.nativeEvent),i.y=b(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(){if(i.boundingRect){const{top:t,bottom:n,left:s,right:o}=i.boundingRect;e.pauseOnHover&&i.x>=s&&i.x<=o&&i.y>=t&&i.y<=n?v():y()}}function y(){n(!0)}function v(){n(!1)}function E(n){const s=r.current;i.canDrag&&s&&(i.didMove=!0,t&&v(),i.x=T(n),i.y=b(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),s.style.transform="translate"+e.draggableDirection+"("+i.delta+"px)",s.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function x(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",x);const t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((()=>{l.current=e})),(0,s.useEffect)((()=>(r.current&&r.current.addEventListener("d",y,{once:!0}),c(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),()=>{const e=l.current;c(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)})),[]),(0,s.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",v))})),[e.pauseOnFocusLoss]);const _={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return u&&d&&(_.onMouseEnter=v,_.onMouseLeave=y),p&&(_.onClick=e=>{f&&f(e),i.canCloseOnClick&&m()}),{playToast:y,pauseToast:v,isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:_}}function x(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function _(e){let{delay:t,isRunning:n,closeToast:o,type:r,hide:i,className:l,style:u,controlledProgress:d,progress:m,rtl:f,isIn:p,theme:g}=e;const h={...u,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1};d&&(h.transform="scaleX("+m+")");const y=a("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+r,{"Toastify__progress-bar--rtl":f}),v=c(l)?l({rtl:f,type:r,defaultClassName:y}):a(y,l);return s.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:v,style:h,[d&&m>=1?"onTransitionEnd":"onAnimationEnd"]:d&&m<1?null:()=>{p&&o()}})}_.defaultProps={type:p.DEFAULT,hide:!1};const N=e=>{let{theme:t,type:n,...o}=e;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")",...o})},C={info:function(e){return s.createElement(N,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(N,{...e},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(N,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(N,{...e},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}},O=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:r}=E(e),{closeButton:i,children:u,autoClose:d,onClick:m,type:f,hideProgressBar:p,closeToast:g,transition:h,position:y,className:v,style:T,bodyClassName:b,bodyStyle:x,progressClassName:N,progressStyle:O,updateId:I,role:w,progress:L,rtl:k,toastId:R,deleteToast:j,isIn:P,isLoading:B,icon:A,theme:M}=e,D=a("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+f,{"Toastify__toast--rtl":k}),S=c(v)?v({rtl:k,position:y,type:f,defaultClassName:D}):a(D,v),F=!!L,z=C[f],H={theme:M,type:f};let q=z&&z(H);return!1===A?q=void 0:c(A)?q=A(H):s.isValidElement(A)?q=s.cloneElement(A,H):l(A)?q=A:B&&(q=C.spinner()),s.createElement(h,{isIn:P,done:j,position:y,preventExitTransition:n,nodeRef:o},s.createElement("div",{id:R,onClick:m,className:S,...r,style:T,ref:o},s.createElement("div",{...P&&{role:w},className:c(b)?b({type:f}):a("Toastify__toast-body",b),style:x},q&&s.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},q),s.createElement("div",null,u)),function(e){if(!e)return;const t={closeToast:g,type:f,theme:M};return c(e)?e(t):s.isValidElement(e)?s.cloneElement(e,t):void 0}(i),(d||F)&&s.createElement(_,{...I&&!F?{key:"pb-"+I}:{},rtl:k,theme:M,delay:d,isRunning:t,isIn:P,closeToast:g,hide:p,type:f,style:O,className:N,controlledProgress:F,progress:L})))},I=g({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),w=(g({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),g({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),g({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:r}=v(e),{className:i,style:l,rtl:d,containerId:m}=e;function f(e){const t=a("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":d});return c(i)?i({position:e,rtl:d,defaultClassName:t}):a(t,u(i))}return(0,s.useEffect)((()=>{t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:m},n(((e,t)=>{const n=t.length?{...l}:{...l,pointerEvents:"none"};return s.createElement("div",{className:f(e),style:n,key:"container-"+e},t.map(((e,n)=>{let{content:o,props:a}=e;return s.createElement(O,{...a,isIn:r(a.toastId),style:{"--nth":n+1,"--len":t.length},key:"toast-"+a.key,closeButton:!0===a.closeButton?x:a.closeButton},o)})))})))})));w.displayName="ToastContainer",w.defaultProps={position:f.TOP_RIGHT,transition:I,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:x,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let L,k=new Map,R=[];function j(){return Math.random().toString(36).substring(2,9)}function P(e){return e&&(l(e.toastId)||r(e.toastId))?e.toastId:j()}function B(e,t){return k.size>0?y.emit(0,e,t):R.push({content:e,options:t}),t.toastId}function A(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function M(e){return(t,n)=>B(t,A(e,n))}function D(e,t){return B(e,A(p.DEFAULT,t))}D.loading=(e,t)=>B(e,A(p.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),D.promise=function(e,t,n){let s,{pending:o,error:a,success:r}=t;o&&(s=l(o)?D.loading(o,n):D.loading(o.render,{...n,...o}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,o)=>{if(null==t)return void D.dismiss(s);const a={type:e,...i,...n,data:o},r=l(t)?{render:t}:t;return s?D.update(s,{...a,...r}):D(r.render,{...a,...r}),o},d=c(e)?e():e;return d.then((e=>u("success",r,e))).catch((e=>u("error",a,e))),d},D.success=M(p.SUCCESS),D.info=M(p.INFO),D.error=M(p.ERROR),D.warning=M(p.WARNING),D.warn=D.warning,D.dark=(e,t)=>B(e,A(p.DEFAULT,{theme:"dark",...t})),D.dismiss=e=>y.emit(1,e),D.clearWaitingQueue=function(e){return void 0===e&&(e={}),y.emit(5,e)},D.isActive=e=>{let t=!1;return k.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},D.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const s=k.get(n||L);return s?s.getToast(e):null}(e,t);if(n){const{props:s,content:o}=n,a={...s,...t,toastId:t.toastId||e,updateId:j()};a.toastId!==e&&(a.staleId=e);const r=a.render||o;delete a.render,B(r,a)}}),0)},D.done=e=>{D.update(e,{progress:1})},D.onChange=e=>(y.on(4,e),()=>{y.off(4,e)}),D.POSITION=f,D.TYPE=p,y.on(2,(e=>{L=e.containerId||e,k.set(L,e),R.forEach((e=>{y.emit(0,e.content,e.options)})),R=[]})).on(3,(e=>{k.delete(e.containerId||e),0===k.size&&y.off(0).off(1).off(5)}))}},function(e){e.O(0,[353,774,888,179],(function(){return t=3333,e(e.s=t);var t}));var t=e.O();_N_E=t}]);