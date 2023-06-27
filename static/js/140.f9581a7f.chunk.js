"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[140],{6140:function(e,t,n){n.r(t),n.d(t,{default:function(){return De}});var r=n(2791),a=n(9434),o=n(3634),i=n(9439),s=n(2946),l=n(1413),c=n(3620),u=n(165),d=n(9729);function f(e){var t=(0,d.uP)().theme,n=(0,c.OX)();return(0,r.useMemo)((function(){return(0,u.Cj)(t.direction,(0,l.Z)((0,l.Z)({},n),e))}),[e,t.direction,n])}var p=n(2392),m=n(4925),v=n(5715),h=n(184),g=function(e){return(0,h.jsx)(v.m.div,(0,l.Z)((0,l.Z)({className:"chakra-stack__item"},e),{},{__css:(0,l.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};g.displayName="StackItem";var y=n(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function x(e){return r.Children.toArray(e).filter((function(e){return(0,r.isValidElement)(e)}))}var b=n(7872),Z=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],I=(0,b.G)((function(e,t){var n=e.isInline,a=e.direction,o=e.align,i=e.justify,s=e.spacing,c=void 0===s?"0.5rem":s,u=e.wrap,d=e.children,f=e.divider,p=e.className,b=e.shouldWrapChildren,I=(0,m.Z)(e,Z),E=n?"row":null!=a?a:"column",T=(0,r.useMemo)((function(){return function(e){var t,n,r=e.spacing,a=e.direction,o={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=a,n=function(e){return o[e]},Array.isArray(t)?t.map((function(e){return null===e?null:n(e)})):(0,y.Kn)(t)?Object.keys(t).reduce((function(e,r){return e[r]=n(t[r]),e}),{}):null!=t?n(t):null)}}({spacing:c,direction:E})}),[c,E]),C=!!f,_=!b&&!C,N=(0,r.useMemo)((function(){var e=x(d);return _?e:e.map((function(t,n){var a="undefined"!==typeof t.key?t.key:n,o=n+1===e.length,i=b?(0,h.jsx)(g,{children:t},a):t;if(!C)return i;var s=(0,r.cloneElement)(f,{__css:T}),l=o?null:s;return(0,h.jsxs)(r.Fragment,{children:[i,l]},a)}))}),[f,T,C,_,b,d]),j=(0,y.cx)("chakra-stack",p);return(0,h.jsx)(v.m.div,(0,l.Z)((0,l.Z)({ref:t,display:"flex",alignItems:o,justifyContent:i,flexDirection:E,flexWrap:u,gap:C?void 0:c,className:j},I),{},{children:N}))}));I.displayName="Stack";var E=n(9140),T=n(4224),C=n(3204),_=n(8627),N=n(4363);function j(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.d,o=e.displayName,i=e.defaultProps,s=void 0===i?{}:i,c=r.Children.toArray(e.path),u=(0,b.G)((function(e,t){return(0,h.jsx)(N.J,(0,l.Z)((0,l.Z)((0,l.Z)({ref:t,viewBox:n},s),e),{},{children:c.length?c:(0,h.jsx)("path",{fill:"currentColor",d:a})}))}));return u.displayName=o,u}var R=j({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"}),k=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),n=t[0],l=t[1],c=(0,r.useState)(""),u=(0,i.Z)(c,2),d=u[0],m=u[1],v=(0,a.I0)(),g=(0,a.v9)(s.Af),y=(0,_.a)().isLoading,x=f();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),(null===g||void 0===g?void 0:g.map((function(e){return e.name}))).some((function(e){return e.toLowerCase()===n.toLowerCase()})))x({title:"".concat(n," is already in contacts!"),position:"top",status:"error",isClosable:!0});else{var t={name:n,number:d};v((0,o.uK)(t)),x({title:"".concat(n," add to your contacts."),position:"top",status:"success",isClosable:!0}),l(""),m("")}},autoComplete:"off",children:(0,h.jsx)(p.NI,{children:(0,h.jsxs)(I,{spacing:"12px",children:[(0,h.jsx)("label",{children:(0,h.jsx)(E.I,{variant:"filled",placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(e){return l(e.target.value)}})}),(0,h.jsx)("label",{children:(0,h.jsx)(E.I,{variant:"filled",placeholder:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(e){return m(e.target.value)}})}),(0,h.jsx)(T.z,{type:"submit",size:"md",_hover:{bg:"#5cb85c",color:"white"},children:y?(0,h.jsx)(C.$,{}):(0,h.jsx)(R,{})})]})})})})},L=j({displayName:"DeleteIcon",path:(0,h.jsx)("g",{fill:"currentColor",children:(0,h.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),O=n(4087),w=n(176),A=function(e){var t=e.id,n=e.name,r=e.number,i=(0,_.a)().isLoading,s=(0,a.I0)(),l=f();return(0,h.jsx)("li",{children:(0,h.jsx)(O.xu,{borderBottom:"1px",borderColor:"gray.500",bg:"#ffffff1a",mb:"10px",_hover:{background:"#ffffff33"},borderRadius:"4px",pl:"15px",children:(0,h.jsxs)(w.k,{align:"center",justify:"space-between",gap:"20px",children:[(0,h.jsxs)(w.k,{align:"center",gap:"15px",children:[(0,h.jsx)("span",{children:n}),(0,h.jsx)("span",{children:r})]}),(0,h.jsx)(T.z,{p:"1px",type:"button",disabled:i,onClick:function(){s((0,o.GK)(t)),l({title:"".concat(n," contact has been removed."),position:"top",status:"info",isClosable:!0})},_hover:{bg:"orangered",color:"white"},children:(0,h.jsx)(L,{})})]})})})},P=n(4942),z=n(3433);function M(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=M(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var S=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=M(e))&&(r&&(r+=" "),r+=t);return r},B=["theme","type"],F=["delay","staleId"],q=function(e){return"number"==typeof e&&!isNaN(e)},D=function(e){return"string"==typeof e},H=function(e){return"function"==typeof e},G=function(e){return D(e)||H(e)?e:null},W=function(e){return(0,r.isValidElement)(e)||D(e)||H(e)||q(e)};function Q(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,i=e.collapse,s=void 0===i||i,l=e.collapseDuration,c=void 0===l?300:l;return function(e){var a=e.children,i=e.position,l=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=o?"".concat(t,"--").concat(i):t,m=o?"".concat(n,"--").concat(i):n,v=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),r=function e(r){var a;r.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==r.type&&(a=t.classList).remove.apply(a,(0,z.Z)(n)))};(e=t.classList).add.apply(e,(0,z.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=r+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};f||(l?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,a)}}function V(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var J={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var a=setTimeout((function(){r.apply(void 0,(0,z.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},K=function(e){var t=e.theme,n=e.type,a=(0,m.Z)(e,B);return r.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},X={info:function(e){return r.createElement(K,(0,l.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(K,(0,l.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(K,(0,l.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(K,(0,l.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function U(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,i.Z)(t,2)[1],a=(0,r.useState)([]),o=(0,i.Z)(a,2),s=o[0],c=o[1],u=(0,r.useRef)(null),d=(0,r.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},p=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return d.get(e)}}).current;function v(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function h(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function g(){var e=p.queue.shift();x(e.toastContent,e.toastProps,e.staleId)}function y(e,t){var a=t.delay,o=t.staleId,s=(0,m.Z)(t,F);if(W(e)&&!function(e){return!u.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||d.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,f=s.updateId,v=s.data,y=p.props,b=function(){return h(c)},Z=null==f;Z&&p.count++;var I,E,T=(0,l.Z)((0,l.Z)((0,l.Z)({},y),{},{style:y.toastStyle,key:p.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,i.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:f,data:v,closeToast:b,isIn:!1,className:G(s.className||y.toastClassName),bodyClassName:G(s.bodyClassName||y.bodyClassName),progressClassName:G(s.progressClassName||y.progressClassName),autoClose:!s.isLoading&&(I=s.autoClose,E=y.autoClose,!1===I||q(I)&&I>0?I:E),deleteToast:function(){var e=V(d.get(c),"removed");d.delete(c),J.emit(4,e);var t=p.queue.length;if(p.count=null==c?p.count-p.displayedToast:p.count-1,p.count<0&&(p.count=0),t>0){var r=null==c?p.props.limit:1;if(1===t||1===r)p.displayedToast++,g();else{var a=r>t?t:r;p.displayedToast=a;for(var o=0;o<a;o++)g()}}else n()}});T.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,o=e.icon,i=null,s={theme:t,type:n};return!1===o||(H(o)?i=o(s):(0,r.isValidElement)(o)?i=(0,r.cloneElement)(o,s):D(o)||q(o)?i=o:a?i=X.spinner():function(e){return e in X}(n)&&(i=X[n](s))),i}(T),H(s.onOpen)&&(T.onOpen=s.onOpen),H(s.onClose)&&(T.onClose=s.onClose),T.closeButton=y.closeButton,!1===s.closeButton||W(s.closeButton)?T.closeButton=s.closeButton:!0===s.closeButton&&(T.closeButton=!W(y.closeButton)||y.closeButton);var C=e;(0,r.isValidElement)(e)&&!D(e.type)?C=(0,r.cloneElement)(e,{closeToast:b,toastProps:T,data:v}):H(e)&&(C=e({closeToast:b,toastProps:T,data:v})),y.limit&&y.limit>0&&p.count>y.limit&&Z?p.queue.push({toastContent:C,toastProps:T,staleId:o}):q(a)?setTimeout((function(){x(C,T,o)}),a):x(C,T,o)}}function x(e,t,n){var r=t.toastId;n&&d.delete(n);var a={content:e,props:t};d.set(r,a),c((function(e){return[].concat((0,z.Z)(e),[r]).filter((function(e){return e!==n}))})),J.emit(4,V(a,null==a.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return p.containerId=e.containerId,J.cancelEmit(3).on(0,y).on(1,(function(e){return u.current&&h(e)})).on(5,v).emit(2,p),function(){d.clear(),J.emit(3,p)}}),[]),(0,r.useEffect)((function(){p.props=e,p.isToastActive=f,p.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(d.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function Y(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function $(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ee(e){var t=(0,r.useState)(!1),n=(0,i.Z)(t,2),a=n[0],o=n[1],s=(0,r.useState)(!1),l=(0,i.Z)(s,2),c=l[0],u=l[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function x(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",T),document.addEventListener("touchmove",E),document.addEventListener("touchend",T);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=Y(t.nativeEvent),f.y=$(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,a=n.bottom,o=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=o&&f.x<=i&&f.y>=r&&f.y<=a?I():Z()}}function Z(){o(!0)}function I(){o(!1)}function E(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&I(),f.x=Y(t),f.y=$(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function T(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",T);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),H(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;H(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",Z),window.addEventListener("blur",I)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",I))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:x,onTouchStart:x,onMouseUp:b,onTouchEnd:b};return m&&v&&(C.onMouseEnter=I,C.onMouseLeave=Z),y&&(C.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:I,isRunning:a,preventExitTransition:c,toastRef:d,eventHandlers:C}}function te(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ne(e){var t=e.delay,n=e.isRunning,a=e.closeToast,o=e.type,i=void 0===o?"default":o,s=e.hide,c=e.className,u=e.style,d=e.controlledProgress,f=e.progress,p=e.rtl,m=e.isIn,v=e.theme,h=s||d&&0===f,g=(0,l.Z)((0,l.Z)({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:h?0:1});d&&(g.transform="scaleX(".concat(f,")"));var y=S("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(v),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":p}),x=H(c)?c({rtl:p,type:i,defaultClassName:y}):S(y,c);return r.createElement("div",(0,P.Z)({role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:x,style:g},d&&f>=1?"onTransitionEnd":"onAnimationEnd",d&&f<1?null:function(){m&&a()}))}var re=function(e){var t=ee(e),n=t.isRunning,a=t.preventExitTransition,o=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,h=e.position,g=e.className,y=e.style,x=e.bodyClassName,b=e.bodyStyle,Z=e.progressClassName,I=e.progressStyle,E=e.updateId,T=e.role,C=e.progress,_=e.rtl,N=e.toastId,j=e.deleteToast,R=e.isIn,k=e.isLoading,L=e.iconOut,O=e.closeOnClick,w=e.theme,A=S("Toastify__toast","Toastify__toast-theme--".concat(w),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":O}),P=H(g)?g({rtl:_,position:h,type:f,defaultClassName:A}):S(A,g),z=!!C||!u,M={closeToast:m,type:f,theme:w},B=null;return!1===s||(B=H(s)?s(M):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,M):te(M)),r.createElement(v,{isIn:R,done:j,position:h,preventExitTransition:a,nodeRef:o},r.createElement("div",(0,l.Z)((0,l.Z)({id:N,onClick:d,className:P},i),{},{style:y,ref:o}),r.createElement("div",(0,l.Z)((0,l.Z)({},R&&{role:T}),{},{className:H(x)?x({type:f}):S("Toastify__toast-body",x),style:b}),null!=L&&r.createElement("div",{className:S("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},L),r.createElement("div",null,c)),B,r.createElement(ne,(0,l.Z)((0,l.Z)({},E&&!z?{key:"pb-".concat(E)}:{}),{},{rtl:_,theme:w,delay:u,isRunning:n,isIn:R,closeToast:m,hide:p,type:f,style:I,className:Z,controlledProgress:z,progress:C||0}))))},ae=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},oe=Q(ae("bounce",!0)),ie=(Q(ae("slide",!0)),Q(ae("zoom")),Q(ae("flip")),(0,r.forwardRef)((function(e,t){var n=U(e),a=n.getToastToRender,o=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,d=e.containerId;function f(e){var t=S("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return H(s)?s({position:e,rtl:u,defaultClassName:t}):S(t,G(s))}return(0,r.useEffect)((function(){t&&(t.current=o.current)}),[]),r.createElement("div",{ref:o,className:"Toastify",id:d},a((function(e,t){var n=t.length?(0,l.Z)({},c):(0,l.Z)((0,l.Z)({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,o=e.props;return r.createElement(re,(0,l.Z)((0,l.Z)({},o),{},{isIn:i(o.toastId),style:(0,l.Z)((0,l.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),a)})))})))})));ie.displayName="ToastContainer",ie.defaultProps={position:"top-right",transition:oe,autoClose:5e3,closeButton:te,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var se,le=new Map,ce=[],ue=1;function de(){return""+ue++}function fe(e){return e&&(D(e.toastId)||q(e.toastId))?e.toastId:de()}function pe(e,t){return le.size>0?J.emit(0,e,t):ce.push({content:e,options:t}),t.toastId}function me(e,t){return(0,l.Z)((0,l.Z)({},t),{},{type:t&&t.type||e,toastId:fe(t)})}function ve(e){return function(t,n){return pe(t,me(e,n))}}function he(e,t){return pe(e,me("default",t))}he.loading=function(e,t){return pe(e,me("default",(0,l.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},he.promise=function(e,t,n){var r,a=t.pending,o=t.error,i=t.success;a&&(r=D(a)?he.loading(a,n):he.loading(a.render,(0,l.Z)((0,l.Z)({},n),a)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,a){if(null!=t){var o=(0,l.Z)((0,l.Z)((0,l.Z)({type:e},s),n),{},{data:a}),i=D(t)?{render:t}:t;return r?he.update(r,(0,l.Z)((0,l.Z)({},o),i)):he(i.render,(0,l.Z)((0,l.Z)({},o),i)),a}he.dismiss(r)},u=H(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",o,e)})),u},he.success=ve("success"),he.info=ve("info"),he.error=ve("error"),he.warning=ve("warning"),he.warn=he.warning,he.dark=function(e,t){return pe(e,me("default",(0,l.Z)({theme:"dark"},t)))},he.dismiss=function(e){le.size>0?J.emit(1,e):ce=ce.filter((function(t){return null!=e&&t.options.toastId!==e}))},he.clearWaitingQueue=function(e){return void 0===e&&(e={}),J.emit(5,e)},he.isActive=function(e){var t=!1;return le.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},he.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=le.get(n||se);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,a=n.content,o=(0,l.Z)((0,l.Z)((0,l.Z)({delay:100},r),t),{},{toastId:t.toastId||e,updateId:de()});o.toastId!==e&&(o.staleId=e);var i=o.render||a;delete o.render,pe(i,o)}}),0)},he.done=function(e){he.update(e,{progress:1})},he.onChange=function(e){return J.on(4,e),function(){J.off(4,e)}},he.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},he.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},J.on(2,(function(e){se=e.containerId||e,le.set(se,e),ce.forEach((function(e){J.emit(0,e.content,e.options)})),ce=[]})).on(3,(function(e){le.delete(e.containerId||e),0===le.size&&J.off(0).off(1).off(5)}));var ge=n(9229),ye=function(){var e=(0,a.v9)(s.Af),t=(0,a.v9)(s.AD);return(0,h.jsxs)(h.Fragment,{children:[0===e.length&&(0,h.jsx)(ge.x,{textAlign:"center",color:"gray.600",fontSize:"xl",children:"Don't have contacts..."}),(0,h.jsx)(O.xu,{maxW:"500px",children:(0,h.jsx)("ul",{children:null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var t=e.id,n=e.name,r=e.number;return(0,h.jsx)(A,{id:t,name:n,number:r},t)}))})}),(0,h.jsx)(ie,{})]})},xe=n(7840),be=j({d:"M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",displayName:"Search2Icon"}),Ze=n(9084),Ie=n(2996),Ee=["className","children","requiredIndicator","optionalIndicator"],Te=(0,b.G)((function(e,t){var n,r=(0,Ze.mq)("FormLabel",e),a=(0,Ie.Lr)(e),o=(a.className,a.children),i=a.requiredIndicator,s=void 0===i?(0,h.jsx)(Ce,{}):i,c=a.optionalIndicator,u=void 0===c?null:c,d=(0,m.Z)(a,Ee),f=(0,p.NJ)(),g=null!=(n=null==f?void 0:f.getLabelProps(d,t))?n:(0,l.Z)({ref:t},d);return(0,h.jsxs)(v.m.label,(0,l.Z)((0,l.Z)({},g),{},{className:(0,y.cx)("chakra-form__label",a.className),__css:(0,l.Z)({display:"block",textAlign:"start"},r),children:[o,(null==f?void 0:f.isRequired)?s:u]}))}));Te.displayName="FormLabel";var Ce=(0,b.G)((function(e,t){var n=(0,p.NJ)(),r=(0,p.e)();if(!(null==n?void 0:n.isRequired))return null;var a=(0,y.cx)("chakra-form__required-indicator",e.className);return(0,h.jsx)(v.m.span,(0,l.Z)((0,l.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,t)),{},{__css:r.requiredIndicator,className:a}))}));Ce.displayName="RequiredIndicator";var _e=n(9886),Ne=n(2796),je=["children","className"],Re=(0,_e.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),ke=(0,i.Z)(Re,2),Le=ke[0],Oe=ke[1],we=(0,b.G)((function(e,t){var n=(0,Ze.jC)("Input",e),a=(0,Ie.Lr)(e),o=a.children,i=a.className,s=(0,m.Z)(a,je),c=(0,y.cx)("chakra-input__group",i),u={},d=x(o),f=n.field;d.forEach((function(e){var t,r;n&&(f&&"InputLeftElement"===e.type.id&&(u.paddingStart=null!=(t=f.height)?t:f.h),f&&"InputRightElement"===e.type.id&&(u.paddingEnd=null!=(r=f.height)?r:f.h),"InputRightAddon"===e.type.id&&(u.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(u.borderStartRadius=0))}));var p=d.map((function(t){var n,a,o=(0,Ne.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,o):(0,r.cloneElement)(t,Object.assign(o,u,t.props))}));return(0,h.jsx)(v.m.div,(0,l.Z)((0,l.Z)({className:c,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},s),{},{children:(0,h.jsx)(Le,{value:n,children:p})}))}));we.displayName="InputGroup";var Ae=["placement"],Pe=["className"],ze=["className"],Me=(0,v.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Se=(0,b.G)((function(e,t){var n,r,a,o=e.placement,i=void 0===o?"left":o,s=(0,m.Z)(e,Ae),c=Oe(),u=c.field,d="left"===i?"insetStart":"insetEnd",f=(0,l.Z)((n={},(0,P.Z)(n,d,"0"),(0,P.Z)(n,"width",null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h),(0,P.Z)(n,"height",null!=(a=null==u?void 0:u.height)?a:null==u?void 0:u.h),(0,P.Z)(n,"fontSize",null==u?void 0:u.fontSize),n),c.element);return(0,h.jsx)(Me,(0,l.Z)({ref:t,__css:f},s))}));Se.id="InputElement",Se.displayName="InputElement";var Be=(0,b.G)((function(e,t){var n=e.className,r=(0,m.Z)(e,Pe),a=(0,y.cx)("chakra-input__left-element",n);return(0,h.jsx)(Se,(0,l.Z)({ref:t,placement:"left",className:a},r))}));Be.id="InputLeftElement",Be.displayName="InputLeftElement";var Fe=(0,b.G)((function(e,t){var n=e.className,r=(0,m.Z)(e,ze),a=(0,y.cx)("chakra-input__right-element",n);return(0,h.jsx)(Se,(0,l.Z)({ref:t,placement:"right",className:a},r))}));Fe.id="InputRightElement",Fe.displayName="InputRightElement";var qe=function(){var e=(0,a.I0)(),t=(0,a.v9)(s.AD);return(0,h.jsx)(p.NI,{children:(0,h.jsxs)(Te,{width:"100%",children:[(0,h.jsx)(p.Q6,{textAlign:"center",children:"Search for Name"}),(0,h.jsxs)(we,{mt:"10px",children:[(0,h.jsx)(Be,{pointerEvents:"none",children:(0,h.jsx)(be,{})}),(0,h.jsx)(E.I,{variant:"filled",type:"text",placeholder:"Name for search",name:"filter",value:t,onChange:function(t){return e((0,xe.W)(t.target.value))},autoComplete:"off"})]})]})})};function De(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,h.jsx)(w.k,{align:"center",justify:"center",direction:"column",children:(0,h.jsxs)(O.xu,{children:[(0,h.jsx)(ge.x,{fontSize:"5xl",textAlign:"center",children:"Phonebook"}),(0,h.jsx)(k,{}),(0,h.jsx)(qe,{}),(0,h.jsx)(ge.x,{fontSize:"2xl",textAlign:"center",my:"10px",children:"Contacts"}),(0,h.jsx)(ye,{})]})})}},2392:function(e,t,n){n.d(t,{NI:function(){return C},NJ:function(){return T},Q6:function(){return _},e:function(){return b}});var r=n(1413),a=n(4925),o=n(9439),i=n(9886),s=n(4591),l=n(7872),c=n(9084),u=n(2996),d=n(5715),f=n(6992),p=n(2791),m=n(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],g=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,o.Z)(g,2),x=y[0],b=y[1],Z=(0,i.k)({strict:!1,name:"FormControlContext"}),I=(0,o.Z)(Z,2),E=I[0],T=I[1];var C=(0,l.G)((function(e,t){var n=(0,c.jC)("Form",e),i=function(e){var t=e.id,n=e.isRequired,i=e.isInvalid,l=e.isDisabled,c=e.isReadOnly,u=(0,a.Z)(e,v),d=(0,p.useId)(),m=t||"field-".concat(d),h="".concat(m,"-label"),g="".concat(m,"-feedback"),y="".concat(m,"-helptext"),x=(0,p.useState)(!1),b=(0,o.Z)(x,2),Z=b[0],I=b[1],E=(0,p.useState)(!1),T=(0,o.Z)(E,2),C=T[0],_=T[1],N=(0,p.useState)(!1),j=(0,o.Z)(N,2),R=j[0],k=j[1],L=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:y},e),{},{ref:(0,s.lq)(t,(function(e){e&&_(!0)}))})}),[y]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:t,"data-focus":(0,f.PB)(R),"data-disabled":(0,f.PB)(l),"data-invalid":(0,f.PB)(i),"data-readonly":(0,f.PB)(c),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,l,R,i,c,h]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:g},e),{},{ref:(0,s.lq)(t,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[g]),A=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:t,role:"group"})}),[u]),P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!c,isDisabled:!!l,isFocused:!!R,onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},hasFeedbackText:Z,setHasFeedbackText:I,hasHelpText:C,setHasHelpText:_,id:m,labelId:h,feedbackId:g,helpTextId:y,htmlProps:u,getHelpTextProps:L,getErrorMessageProps:w,getRootProps:A,getLabelProps:O,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),l=i.getRootProps,g=(i.htmlProps,(0,a.Z)(i,h)),y=(0,f.cx)("chakra-form-control",e.className);return(0,m.jsx)(E,{value:g,children:(0,m.jsx)(x,{value:n,children:(0,m.jsx)(d.m.div,(0,r.Z)((0,r.Z)({},l({},t)),{},{className:y,__css:n.container}))})})}));C.displayName="FormControl";var _=(0,l.G)((function(e,t){var n=T(),a=b(),o=(0,f.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(d.m.div,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getHelpTextProps(e,t)),{},{__css:a.helperText,className:o}))}));_.displayName="FormHelperText"},9140:function(e,t,n){n.d(t,{I:function(){return h}});var r=n(1413),a=n(4925),o=n(2392),i=n(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],l=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function c(e){var t=function(e){var t,n,s,c=(0,o.NJ)(),u=e.id,d=e.disabled,f=e.readOnly,p=e.required,m=e.isRequired,v=e.isInvalid,h=e.isReadOnly,g=e.isDisabled,y=e.onFocus,x=e.onBlur,b=(0,a.Z)(e,l),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==c?void 0:c.hasFeedbackText)&&(null==c?void 0:c.isInvalid)&&Z.push(c.feedbackId);(null==c?void 0:c.hasHelpText)&&Z.push(c.helpTextId);return(0,r.Z)((0,r.Z)({},b),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==c?void 0:c.id,isDisabled:null!=(t=null!=d?d:g)?t:null==c?void 0:c.isDisabled,isReadOnly:null!=(n=null!=f?f:h)?n:null==c?void 0:c.isReadOnly,isRequired:null!=(s=null!=p?p:m)?s:null==c?void 0:c.isRequired,isInvalid:null!=v?v:null==c?void 0:c.isInvalid,onFocus:(0,i.v0)(null==c?void 0:c.onFocus,y),onBlur:(0,i.v0)(null==c?void 0:c.onBlur,x)})}(e),n=t.isDisabled,c=t.isInvalid,u=t.isReadOnly,d=t.isRequired,f=(0,a.Z)(t,s);return(0,r.Z)((0,r.Z)({},f),{},{disabled:n,readOnly:u,required:d,"aria-invalid":(0,i.Qm)(c),"aria-required":(0,i.Qm)(d),"aria-readonly":(0,i.Qm)(u)})}var u=n(7872),d=n(9084),f=n(2996),p=n(5715),m=n(184),v=["htmlSize"],h=(0,u.G)((function(e,t){var n=e.htmlSize,o=(0,a.Z)(e,v),s=(0,d.jC)("Input",o),l=c((0,f.Lr)(o)),u=(0,i.cx)("chakra-input",e.className);return(0,m.jsx)(p.m.input,(0,r.Z)((0,r.Z)({size:n},l),{},{__css:s.field,ref:t,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=140.f9581a7f.chunk.js.map