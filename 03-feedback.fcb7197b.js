function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,i,u,f,a,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function T(){var e=y();if(b(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-c);return d?p(n,u-(e-l)):n}(e))}function h(e){return a=void 0,v&&r?m(e):(r=i=void 0,f)}function w(){var e=y(),n=b(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(T,t),s?m(e):f}(c);if(d)return a=setTimeout(T,t),m(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=S(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?f:h(y())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==i}(e))return r;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):f.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),w=document.querySelector(".feedback-form textarea"),O="feedback-form-state";T.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value;const t=JSON.stringify(x);localStorage.setItem(O,t)}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(O)}));const x={};!function(){const e=localStorage.getItem(O),t=JSON.parse(e);console.log(h.value),e&&(console.log(e),h.value=t.email,w.value=t.message)}();
//# sourceMappingURL=03-feedback.fcb7197b.js.map
