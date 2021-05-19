module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=require("react")},function(e,t,n){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=a.apply(null,r);u&&e.push(u)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),u=[];function i(e){for(var t=-1,n=0;n<u.length;n++)if(u[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],l=t.base?o[0]+t.base:o[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var s=i(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==s?(u[s].references++,u[s].updater(f)):u.push({identifier:c,updater:v(f,t),references:1}),r.push(c)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var u=o(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var c,s=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,a);else{var o=document.createTextNode(a),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(o,u[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,a;if(t.singleton){var o=m++;n=h||(h=d(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=d(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);u[a].references--}for(var o=l(e,t),d=0;d<n.length;d++){var c=i(n[d]);0===u[c].references&&(u[c].updater(),u.splice(c,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(u=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var u,i,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(a[u]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){e.exports=n(8)()},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t);var a=n(0),o=a.useLayoutEffect,u=function(e){var t=Object(a.useRef)(e);return o((function(){t.current=e})),t},i=function(e,t){"function"!=typeof e?e.current=t:e(t)},l=function(e,t){var n=Object(a.useRef)();return Object(a.useCallback)((function(r){e.current=r,n.current&&i(n.current,null),n.current=t,t&&i(t,r)}),[t])},d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(d).forEach((function(t){e.style.setProperty(t,d[t],"important")}))},s=null;var f=function(){},p=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width"],h=!!document.documentElement.currentStyle,m=function(e,t){var n=e.cacheMeasurements,o=e.maxRows,i=e.minRows,d=e.onChange,m=void 0===d?f:d,v=e.onHeightChange,b=void 0===v?f:v,y=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var g,x=void 0!==y.value,C=Object(a.useRef)(null),_=l(C,t),S=Object(a.useRef)(0),w=Object(a.useRef)(),O=function(){var e=C.current,t=n&&w.current?w.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,r=(n=t,p.reduce((function(e,t){return e[t]=n[t],e}),{})),a=r.boxSizing;return""===a?null:(h&&"border-box"===a&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px"),{sizingStyle:r,paddingSize:parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),borderSize:parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth)})}(e);if(t){w.current=t;var r=function(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=1/0),s||((s=document.createElement("textarea")).setAttribute("tab-index","-1"),s.setAttribute("aria-hidden","true"),c(s)),null===s.parentNode&&document.body.appendChild(s);var a=e.paddingSize,o=e.borderSize,u=e.sizingStyle,i=u.boxSizing;Object.keys(u).forEach((function(e){var t=e;s.style[t]=u[t]})),c(s),s.value=t;var l=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(s,e);s.value="x";var d=s.scrollHeight-a,f=d*n;"border-box"===i&&(f=f+a+o),l=Math.max(f,l);var p=d*r;return"border-box"===i&&(p=p+a+o),[l=Math.min(p,l),d]}(t,e.value||e.placeholder||"x",i,o),a=r[0],u=r[1];S.current!==a&&(S.current=a,e.style.setProperty("height",a+"px","important"),b(a,{rowHeight:u}))}};return Object(a.useLayoutEffect)(O),g=u(O),Object(a.useLayoutEffect)((function(){var e=function(e){g.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.createElement)("textarea",r({},y,{onChange:function(e){x||O(),m(e)},ref:_}))},v=Object(a.forwardRef)(m);t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(7),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(0),o=p(a),u=p(n(1)),i=p(n(4)),l=p(n(10)),d=p(n(12)),c=p(n(20)),s=p(n(24)),f=n(28);function p(e){return e&&e.__esModule?e:{default:e}}function h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var m=function(e){var t=e.tableColumns,n=e.emptyCellPlaceholder,i=void 0===n?"":n,p=e.tableClasses,m=void 0===p?{}:p,v=e.cellSpacing,b=void 0===v?"0":v,y=e.minColumnSize,g=void 0===y?300:y,x=e.onCeilEdit,C=void 0===x?function(e){return e}:x,_=e.onCeilBlur,S=void 0===_?function(e){return e}:_,w=e.onHeaderEdit,O=void 0===w?function(e){return e}:w,E=e.onHeaderBlur,R=void 0===E?function(e){return e}:E,j=e.onSendData,M=void 0===j?function(e){return e}:j,N=(0,a.useState)((0,f.getInitialProps)(t).tableHeaders),T=r(N,2),H=T[0],P=T[1],B=(0,a.useState)((0,f.getInitialProps)(t).tableData),q=r(B,2),k=q[0],z=q[1],L=(0,a.useState)(!1),J=r(L,2),W=J[0],A=J[1],I=(0,a.useState)(""),U=r(I,2),V=U[0],F=U[1],D=(0,a.useState)(0),G=r(D,2),Y=G[0],Q=G[1],K=(0,a.useState)(0),X=r(K,2),Z=X[0],$=X[1],ee=(0,a.useRef)(null),te=(0,a.useRef)(null);(0,a.useEffect)((function(){te.current&&(te.current.scrollLeft=Z)}),[Z]);var ne=function(e,t){var n=!!t.trim().length,r=H.findIndex((function(e){return e===t}));if(r!==e){if(-1!==r||!n)return F(t),Q(e),void A(!0);!function(e,t){var n=[].concat(h(H));n[e]=t,P([].concat(h(n)));var r=H[e],a=JSON.parse(JSON.stringify(k));a.forEach((function(e){e[t]=e[r],delete e[r]})),z(a),R({data:a,headers:n})}(e,t),A(!1)}},re=function(){P([].concat(h(H),["Column "+(H.length+1)]));var e=ee.current.clientWidth;$(e)},ae=function(e){return m[e]||""};return o.default.createElement("div",{className:l.default.container},o.default.createElement("button",{type:"button",onClick:re,className:(0,u.default)(l.default.addButton,ae("addColumnButton"))},"+"),o.default.createElement("div",{className:l.default.wrapper,ref:te},o.default.createElement("table",{className:(0,u.default)(l.default.table,ae("table")),cellSpacing:b,ref:ee},o.default.createElement(d.default,{tableHeaders:H,checkUniqueColumn:ne,addColumn:re,detectClass:ae,onHeaderEdit:O,deleteColumn:function(e){var t=H[e],n=JSON.parse(JSON.stringify(k));n.forEach((function(e){delete e[t]}));var r=[].concat(h(H));r.splice(e,1),z(n),P(r)},minColumnSize:g}),o.default.createElement(c.default,{tableData:k,editCeil:function(e,t,n){var r=JSON.parse(JSON.stringify(k));r[n][e]=t,z(r),C(r)},tableHeaders:H,emptyCellPlaceholder:i,detectClass:ae,onCeilBlur:S,minColumnSize:g}))),o.default.createElement("button",{className:(0,u.default)(l.default.addRowButton,ae("addRowButton")),onClick:function(){var e={};H.forEach((function(t){e[t]=""})),z([].concat(h(k),[e]))},type:"button"},"Add row"),W&&o.default.createElement(s.default,{index:Y,headerValue:V,checkUniqueColumn:ne,closeModal:function(){var e=JSON.parse(JSON.stringify(H));P(e),A(!1)},detectClass:ae}),o.default.createElement("button",{type:"button",onClick:function(){var e={headers:[].concat(h(H)),data:k};return M(e),e},className:(0,u.default)(l.default.sendButton,ae("sendButton"))},"Send data to user"))};m.propTypes={tableColumns:i.default.arrayOf(i.default.shape({header:i.default.string,columnData:i.default.oneOfType([i.default.string,i.default.number])})).isRequired,emptyCellPlaceholder:i.default.string.isRequired,cellSpacing:i.default.string.isRequired,onCeilEdit:i.default.func.isRequired,onCeilBlur:i.default.func.isRequired,onHeaderEdit:i.default.func.isRequired,onHeaderBlur:i.default.func.isRequired,minColumnSize:i.default.number.isRequired,tableClasses:i.default.shape({}).isRequired},t.default=m},function(e,t,n){"use strict";var r=n(9);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(2),a=n(11);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,"._1kmJeahnJAaylisZscJvdW{width:100%;height:100%;position:relative}._3Q21riUsyULXnITTCL-jPd{width:100%;position:relative;overflow-x:auto;border:1px solid gray;scroll-behaviour:smooth}._2WyO9fJehudJhQ_ZV5YSuG{width:100%;padding-top:20px;border-collapse:collapse}._10wWv9YVPW4qGeH7dhiJU1{outline:none;border-radius:none;position:absolute;top:calc(50% - 12px);right:-12px;z-index:4;cursor:pointer}._10wWv9YVPW4qGeH7dhiJU1:hover{opacity:.9}._2nc1L6Y4leK94sutluTM7I{width:100%;height:48px;text-transform:uppercase;border-radius:none}._9xGHV0xJ4izjSbTlaqekf{outline:none;height:40px;margin-top:10px;border:1px solid gray}",""]),t.locals={container:"_1kmJeahnJAaylisZscJvdW",wrapper:"_3Q21riUsyULXnITTCL-jPd",table:"_2WyO9fJehudJhQ_ZV5YSuG",addButton:"_10wWv9YVPW4qGeH7dhiJU1",addRowButton:"_2nc1L6Y4leK94sutluTM7I",sendButton:"_9xGHV0xJ4izjSbTlaqekf"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(13),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(0),o=c(a),u=c(n(1)),i=c(n(4)),l=c(n(14)),d=c(n(18));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.tableHeaders,n=e.checkUniqueColumn,i=e.detectClass,c=e.onHeaderEdit,s=e.minColumnSize,f=e.deleteColumn,p=(0,a.useState)(-1),h=r(p,2),m=h[0],v=h[1];return o.default.createElement("thead",{className:(0,u.default)(i("tableHead"))},o.default.createElement("tr",{className:(0,u.default)(d.default.tr,i("tableHeadRow"))},t.map((function(e,r){return o.default.createElement(l.default,{key:e,minColumnSize:s,setSelectedHeader:function(e){return v(e)},detectClass:i,value:e,checkUniqueColumn:n,deleteColumn:f,selectedHeader:m,index:r,onHeaderEdit:c,tableHeaders:t})}))))};s.propTypes={tableHeaders:i.default.arrayOf(i.default.string).isRequired,checkUniqueColumn:i.default.func.isRequired,detectClass:i.default.func.isRequired,onHeaderEdit:i.default.func.isRequired,minColumnSize:i.default.number.isRequired,deleteColumn:i.default.func.isRequired},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(15),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=d(n(16)),o=n(0),u=d(o),i=d(n(1)),l=d(n(5));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.index,n=e.minColumnSize,d=e.setSelectedHeader,c=e.detectClass,s=e.value,f=e.checkUniqueColumn,p=e.deleteColumn,h=e.selectedHeader,m=e.onHeaderEdit,v=e.tableHeaders,b=(0,o.useState)(s),y=r(b,2),g=y[0],x=y[1];(0,o.useEffect)((function(){x(s)}),[v]);return u.default.createElement("th",{className:(0,i.default)(a.default.cell,c("tableHeadCell")),style:{minWidth:n+"px"},onMouseEnter:function(){d(t)},onMouseLeave:function(){d(-1)}},u.default.createElement(l.default,{spellCheck:"false",value:g,onChange:function(e){return function(e){x(e),m(e)}(e.target.value)},onBlur:function(e){return f(t,e.target.value)},onKeyDown:function(e){return function(e,t){"Enter"===t.key&&(t.preventDefault(),f(e,t.target.value),t.currentTarget.blur())}(t,e)},className:(0,i.default)(a.default.textarea,c("tableHeadTextarea"))}),t===h&&u.default.createElement("button",{type:"button",className:(0,i.default)(a.default.deleteButton,c("deleteButton")),onClick:function(){return p(t)}},"✕"))}},function(e,t,n){var r=n(2),a=n(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,"._115P8N0RysgjLaXVUam6Zh{border:none;resize:none;outline:none;padding:5px;width:100%;height:100%;cursor:pointer;box-sizing:border-box}._2jhyVcMk_sIgdgF6p67N6d{cursor:pointer;position:relative}.aBugRG9gldB9WhQ174S-R{position:absolute;right:30px;top:1px;width:24px;height:24px;background-color:#000;color:#fff;border:none;outline:none;cursor:pointer}",""]),t.locals={textarea:"_115P8N0RysgjLaXVUam6Zh",cell:"_2jhyVcMk_sIgdgF6p67N6d",deleteButton:"aBugRG9gldB9WhQ174S-R"},e.exports=t},function(e,t,n){var r=n(2),a=n(19);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".dlraL2CmeBbthg7SfXyPc{height:48px}",""]),t.locals={tr:"dlraL2CmeBbthg7SfXyPc"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(21),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),a=l(n(5)),o=l(n(4)),u=l(n(1)),i=l(n(22));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=e.tableData,n=e.tableHeaders,o=e.emptyCellPlaceholder,l=e.editCeil,d=e.detectClass,c=e.onCeilBlur,s=e.minColumnSize;return r.default.createElement("tbody",{className:d("tableBody")},t.map((function(e,f){return r.default.createElement("tr",{key:f,className:(0,u.default)(i.default.tr,d("tableBodyRow"))},n.map((function(n,p){var h=e[n]||o;return r.default.createElement("td",{key:p+f+n,style:{minWidth:s+"px"},className:d("tableBodyCeil")},r.default.createElement(a.default,{className:(0,u.default)(i.default.textarea,d("tableBodyCeilTextarea")),value:h,onChange:function(e){return l(n,e.target.value,f)},onBlur:function(){return c(t)}}))})))})))};d.propTypes={emptyCellPlaceholder:o.default.string.isRequired,editCeil:o.default.func.isRequired,detectClass:o.default.func.isRequired,onCeilBlur:o.default.func.isRequired,minColumnSize:o.default.number.isRequired,tableHeaders:o.default.arrayOf(o.default.string).isRequired,tableData:o.default.arrayOf(o.default.shape({})).isRequired},t.default=d},function(e,t,n){var r=n(2),a=n(23);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,"._2B_3UDW-D9hNewFNT5WOcd{border:none;resize:none;outline:none;width:100%;height:100%;box-sizing:border-box}tr,td,th{border:1px solid gray}.Qft39b1SQlaJSHpo8GNuR{height:30px}",""]),t.locals={textarea:"_2B_3UDW-D9hNewFNT5WOcd",tr:"Qft39b1SQlaJSHpo8GNuR"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(25),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(0),o=d(a),u=d(n(1)),i=d(n(4)),l=d(n(26));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.headerValue,n=e.checkUniqueColumn,i=e.index,d=e.closeModal,c=e.detectClass,s=(0,a.useState)(t),f=r(s,2),p=f[0],h=f[1],m=function(e){e.target===document.querySelector("."+l.default.container)&&d()};return o.default.createElement("div",{className:(0,u.default)(l.default.container,c("modalOverlay")),onClick:m,onKeyDown:m,role:"presentation"},o.default.createElement("div",{className:(0,u.default)(l.default.modal,c("modal"))},o.default.createElement("p",{className:(0,u.default)(c("modalText"))},"Column with name ",o.default.createElement("b",null,t)," is already exists."),o.default.createElement("p",{className:(0,u.default)(c("modalText"))},"Change column name, please"),o.default.createElement("input",{className:(0,u.default)(c("modalInput"),l.default.input),type:"text",value:p,onChange:function(e){return h(e.target.value)}}),o.default.createElement("div",{className:l.default.buttonsWrapper},o.default.createElement("button",{type:"button",onClick:function(){return n(i,p)},className:(0,u.default)(l.default.button,c("modalSetButton"))},"Set new value"),o.default.createElement("button",{type:"button",onClick:d,className:(0,u.default)(l.default.button,c("modalCloseButton"))},"Cancel"))))};c.propTypes={headerValue:i.default.string.isRequired,checkUniqueColumn:i.default.func.isRequired,index:i.default.number.isRequired,closeModal:i.default.func.isRequired,detectClass:i.default.func.isRequired},t.default=c},function(e,t,n){var r=n(2),a=n(27);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,"._4H2XgC9AEmprbVzpTMzRB{width:100vw;height:100vh;background-color:rgba(0,0,0,.2);position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center}._3P7H3Ys5JcxT6tL584hFf5{width:90%;max-width:400px;min-width:280px;padding:20px;background-color:#fff;border-radius:5px}._1Vzj2dkIG0FG_1ktClgVVN{width:100%;margin-bottom:10px}.zchSd1nRhJ844D3JNOL3n{width:100%;display:flex;justify-content:space-between;align-items:center}._1pLpFCPxK6C4VbS5K9vYMm{width:48%;height:38px}",""]),t.locals={container:"_4H2XgC9AEmprbVzpTMzRB",modal:"_3P7H3Ys5JcxT6tL584hFf5",input:"_1Vzj2dkIG0FG_1ktClgVVN",buttonsWrapper:"zchSd1nRhJ844D3JNOL3n",button:"_1pLpFCPxK6C4VbS5K9vYMm"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getInitialProps=function(e){var t=[],n=[];return e.forEach((function(e){t.push(e.header),e.columnData.forEach((function(t,r){n[r]||(n[r]={}),n[r][e.header]=t}))})),{tableHeaders:t,tableData:n}}}]);