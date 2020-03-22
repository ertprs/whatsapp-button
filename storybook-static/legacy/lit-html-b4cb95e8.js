System.register([],(function(e){"use strict";return{execute:function(){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e("a",(function(e){return typeof e})):e("a",(function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})))(n)}function n(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function l(t){return(l=e("j",Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)}))(t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&c(i,n.prototype),i}).apply(null,arguments)}function d(t){var n="function"==typeof Map?new Map:void 0;return(d=e("g",(function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return h(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})))(t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return function(){var t,n=l(e);if(f()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return p(this,t)}}function m(t,n,r){return(m="undefined"!=typeof Reflect&&Reflect.get?e("i",Reflect.get):e("i",(function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})))(t,n,r||t)}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=g(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */e({_:function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,u,"next",e)}function u(e){n(a,i,o,s,u,"throw",e)}s(void 0)}))}},a:t,b:u,c:r,d:o,e:y,f:_,g:d,h:v,i:m,j:l,l:function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},o:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},p:function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},t:X});var w=new WeakMap,x=function(e){return"function"==typeof e&&w.has(e)},S="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,N=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},k={},O={},E="{{lit-".concat(String(Math.random()).slice(2),"}}"),T="\x3c!--".concat(E,"--\x3e"),j=new RegExp("".concat(E,"|").concat(T)),A=function e(t,n){r(this,e),this.parts=[],this.element=n;for(var i=[],o=[],a=document.createTreeWalker(n.content,133,null,!1),s=0,u=-1,l=0,c=t.strings,f=t.values.length;l<f;){var h=a.nextNode();if(null!==h){if(u++,1===h.nodeType){if(h.hasAttributes()){for(var d=h.attributes,p=d.length,v=0,m=0;m<p;m++)V(d[m].name,"$lit$")&&v++;for(;v-- >0;){var y=c[l],g=M.exec(y)[2],b=g.toLowerCase()+"$lit$",_=h.getAttribute(b);h.removeAttribute(b);var w=_.split(j);this.parts.push({type:"attribute",index:u,name:g,strings:w}),l+=w.length-1}}"TEMPLATE"===h.tagName&&(o.push(h),a.currentNode=h.content)}else if(3===h.nodeType){var x=h.data;if(x.indexOf(E)>=0){for(var S=h.parentNode,N=x.split(j),k=N.length-1,O=0;O<k;O++){var T=void 0,A=N[O];if(""===A)T=P();else{var C=M.exec(A);null!==C&&V(C[2],"$lit$")&&(A=A.slice(0,C.index)+C[1]+C[2].slice(0,-"$lit$".length)+C[3]),T=document.createTextNode(A)}S.insertBefore(T,h),this.parts.push({type:"node",index:++u})}""===N[k]?(S.insertBefore(P(),h),i.push(h)):h.data=N[k],l+=k}}else if(8===h.nodeType)if(h.data===E){var I=h.parentNode;null!==h.previousSibling&&u!==s||(u++,I.insertBefore(P(),h)),s=u,this.parts.push({type:"node",index:u}),null===h.nextSibling?h.data="":(i.push(h),u--),l++}else for(var L=-1;-1!==(L=h.data.indexOf(E,L+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var R=0,$=i;R<$.length;R++){var W=$[R];W.parentNode.removeChild(W)}},V=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},C=function(e){return-1!==e.index},P=function(){return document.createComment("")},M=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,I=function(){function e(t,n,i){r(this,e),this.__parts=[],this.template=t,this.processor=n,this.options=i}return o(e,[{key:"update",value:function(e){var t,n=0,r=_(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,a=_(this.__parts);try{for(a.s();!(o=a.n()).done;){var s=o.value;void 0!==s&&s.commit()}}catch(e){a.e(e)}finally{a.f()}}},{key:"_clone",value:function(){for(var e,t=S?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(e=r[o],C(e)){for(;a<e.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var l;(l=this.__parts).push.apply(l,y(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return S&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),L=" ".concat(E," "),R=e("T",function(){function e(t,n,i,o){r(this,e),this.strings=t,this.values=n,this.type=i,this.processor=o}return o(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=M.exec(i);t+=null===a?i+(n?L:T):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+E}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}()),$=function(e){u(n,e);var t=v(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"getHTML",value:function(){return"<svg>".concat(m(l(n.prototype),"getHTML",this).call(this),"</svg>")}},{key:"getTemplateElement",value:function(){var e=m(l(n.prototype),"getTemplateElement",this).call(this),t=e.content,r=t.firstChild;return t.removeChild(r),function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t!==n;){var i=t.nextSibling;e.insertBefore(t,r),t=i}}(t,r.firstChild),e}}]),n}(R),W=function(e){return null===e||!("object"===t(e)||"function"==typeof e)},B=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},D=function(){function e(t,n,i){r(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return o(e,[{key:"_createPart",value:function(){return new F(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(W(o)||!B(o))n+="string"==typeof o?o:String(o);else{var a,s=_(o);try{for(s.s();!(a=s.n()).done;){var u=a.value;n+="string"==typeof u?u:String(u)}}catch(e){s.e(e)}finally{s.f()}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),F=function(){function e(t){r(this,e),this.value=void 0,this.committer=t}return o(e,[{key:"setValue",value:function(e){e===k||W(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;x(this.value);){var e=this.value;this.value=k,e(this)}this.value!==k&&this.committer.commit()}}]),e}(),H=e("N",function(){function e(t){r(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return o(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(P()),this.endNode=e.appendChild(P())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=P()),e.__insert(this.endNode=P())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=P()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=k,e(this)}var t=this.__pendingValue;t!==k&&(W(t)?t!==this.value&&this.__commitText(t):t instanceof R?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof I&&this.value.template===t)this.value.update(e.values);else{var n=new I(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=_(t);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(s),n.commit(),o++}}catch(e){a.e(e)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;N(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}()),q=function(){function e(t,n,i){if(r(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=i}return o(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=k,e(this)}if(this.__pendingValue!==k){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=k}}}]),e}(),z=function(e){u(n,e);var t=v(n);function n(e,i,o){var a;return r(this,n),(a=t.call(this,e,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return o(n,[{key:"_createPart",value:function(){return new U(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:m(l(n.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),n}(D),U=function(e){u(n,e);var t=v(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(F),G=!1;!function(){try{var e={get capture(){return G=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var J=function(){function e(t,n,i){var o=this;r(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return o(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;x(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=k,e(this)}if(this.__pendingValue!==k){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=K(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=k}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),K=function(e){return e&&(G?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},Q=new(function(){function e(){r(this,e)}return o(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new z(e,t.slice(1),n).parts:"@"===i?[new J(e,t.slice(1),r.eventContext)]:"?"===i?[new q(e,t.slice(1),n)]:new D(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new H(e)}}]),e}());
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
function X(e){var t=Y.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Y.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(E);return void 0===(n=t.keyString.get(r))&&(n=new A(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var Y=new Map,Z=new WeakMap,ee=e("r",(function(e,t,n){var r=Z.get(t);void 0===r&&(N(t,t.firstChild),Z.set(t,r=new H(Object.assign({templateFactory:X},n))),r.appendInto(t)),r.setValue(e),r.commit()}));
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");e("m",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new R(e,n,"html",Q)})),e("s",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new $(e,n,"svg",Q)}));function te(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,133,null,!1),o=re(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var f=i.currentNode;for(f.previousSibling===c&&(c=null),t.has(f)&&(l.push(f),null===c&&(c=f)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=re(r,o)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}var ne=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,133,null,!1);n.nextNode();)t++;return t},re=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(C(r))return n}return-1};var ie=function(e,t){return"".concat(e,"--").concat(t)},oe=!0;void 0===window.ShadyCSS?oe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),oe=!1);var ae,se=function(e){return function(t){var n=ie(t.type,e),r=Y.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Y.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(E);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();oe&&window.ShadyCSS.prepareTemplateDom(a,e),i=new A(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},ue=["html","svg"],le=new Set,ce=function(e,t,n){le.add(e);var r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),o=i.length;if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){ue.forEach((function(t){var n=Y.get(ie(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),te(e,n)}))}))}(e);var l=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,133,null,!1),a=re(i),s=0,u=-1;o.nextNode();){u++;var l=o.currentNode;for(l===n&&(s=ne(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=re(i,a);return}a=re(i,a)}}else r.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var f=new Set;f.add(a),te(n,f)}}else window.ShadyCSS.prepareTemplateStyles(r,e)},fe=(e("k",(function(e,n,r){if(!r||"object"!==t(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var i=r.scopeName,o=Z.has(n),a=oe&&11===n.nodeType&&!!n.host,s=a&&!le.has(i),u=s?document.createDocumentFragment():n;if(ee(e,u,Object.assign({templateFactory:se(i)},r)),s){var l=Z.get(u);Z.delete(u);var c=l.value instanceof I?l.value.template:void 0;ce(i,u,c),N(n,n.firstChild),n.appendChild(u),Z.set(n,l)}!o&&a&&window.ShadyCSS.styleElement(n.host)})),function(){function e(t){r(this,e),this.classes=new Set,this.changed=!1,this.element=t;var n,i=_((t.getAttribute("class")||"").split(/\s+/));try{for(i.s();!(n=i.n()).done;){var o=n.value;this.classes.add(o)}}catch(e){i.e(e)}finally{i.f()}}return o(e,[{key:"add",value:function(e){this.classes.add(e),this.changed=!0}},{key:"remove",value:function(e){this.classes.delete(e),this.changed=!0}},{key:"commit",value:function(){if(this.changed){var e="";this.classes.forEach((function(t){return e+=t+" "})),this.element.setAttribute("class",e)}}}]),e}()),he=new WeakMap;e("n",(ae=function(e){return function(t){if(!(t instanceof F)||t instanceof U||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");var n=t.committer,r=n.element,i=he.get(t);void 0===i&&(r.setAttribute("class",n.strings.join(" ")),he.set(t,i=new Set));var o=r.classList||new fe(r);for(var a in i.forEach((function(t){t in e||(o.remove(t),i.delete(t))})),e){var s=e[a];s!=i.has(a)&&(s?(o.add(a),i.add(a)):(o.remove(a),i.delete(a)))}"function"==typeof o.commit&&o.commit()}},function(){var e=ae.apply(void 0,arguments);return w.set(e,!0),e}))}}}));
//# sourceMappingURL=lit-html-b4cb95e8.js.map