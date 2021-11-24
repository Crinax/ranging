!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ranging={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)};function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function r(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var o=function(){function t(){}return t.prototype[Symbol.iterator]=function(){return r(this,(function(t){return[2]}))},t}(),i=function(t){function e(e){var n=t.call(this)||this;return n.options=e,n}return n(e,t),e.prototype.reduce=function(t,e){void 0===e&&(e=0);for(var n=e,r=this[Symbol.iterator](),o=r.next(),i=0;!o.done;)n=t(n,o.value,i),i+=1,o=r.next();return n},Object.defineProperty(e.prototype,"length",{get:function(){for(var t=this[Symbol.iterator](),e=0;!t.next().done;)e+=1;return e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"iterator",{get:function(){return this[Symbol.iterator]()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stringify",{get:function(){return this.reduce((function(t,e){return String(t)+String(e)}),"")},enumerable:!1,configurable:!0}),e}(o),s=function(t){function e(e,n){var r=t.call(this,n)||this;return r.metric=e,r}return n(e,t),e.prototype.setSearchMetricMap=function(t){this.dateGetters={ms:t.getTime,s:t.getSeconds,m:t.getMinutes,h:t.getHours,D:t.getDate,M:t.getMonth,Y:t.getFullYear},this.dateSetters={ms:t.setTime,s:t.setSeconds,m:t.setMinutes,h:t.setHours,D:t.setDate,M:t.setMonth,Y:t.setFullYear}},e.prototype.getTime=function(t){return this.dateGetters||this.setSearchMetricMap(t),this.dateGetters[this.metric].call(t)},e.prototype.setTime=function(t,e){return this.dateSetters||this.setSearchMetricMap(t),this.dateSetters[this.metric].call(t,e)},e.prototype[Symbol.iterator]=function(){var t,e,n,o,i,s,a,u,c,l,f,p,h,d,b,g=this;return r(this,(function(r){switch(r.label){case 0:t=this.options.start,e=void 0===t?new Date:t,n=this.options,o=n.end,i=void 0===o?1/0:o,s=n.step,a=void 0===s?1:s,u=n.count,c=n.map,l=n.filter,f=n.leapYear,p=n.weekdays,h=0,e=new Date(e),d=function(t){return t%400==0||t%100!=0&&t%4==0},b=function(){g.setTime(e,g.getTime(e)+a)},r.label=1;case 1:return u&&h<u||!u&&e<=i?l&&!l(new Date(e),h)||f&&!d(e.getFullYear())||p&&-1===p.indexOf(e.getDay())?(b(),[3,1]):c?[4,c(new Date(e),h)]:[3,3]:[3,6];case 2:return r.sent(),[3,5];case 3:return[4,new Date(e)];case 4:r.sent(),r.label=5;case 5:return h+=1,b(),[3,1];case 6:return[2]}}))},e}(i);function a(t,e,n){var r=""+("+"===n?t+e:t*e);if(r.length<16)return"+"===n?t+e:t*e;var o,i=""+t,s=""+e,a=r.indexOf("."),u=r.lastIndexOf("e"),c=i.indexOf("."),l=i.lastIndexOf("e"),f=s.indexOf("."),p=s.lastIndexOf("e");if(o=-1!==u?r.slice(u,r.length):"",-1===u&&(u=r.length),-1===l&&(l=i.length),-1===p&&(p=s.length),u-a-1>=17-a&&(l-c-1>=16-c||p-f-1>=16-f))return t+e;if(u-a-1<16-a)return"+"===n?t+e:t*e;var h=r.length-r.indexOf(".")-2;if("9"===r[r.length-2]){var d=r+"e"+h;return+(+(d=Math.ceil(Number(d))+"e"+-h)+o)}return+((r=r.slice(0,(i.length>s.length?i.length:s.length)+1))+o)}var u=function(t,e){return a(t,e,"+")},c=function(t,e){return a(t,e,"*")},l=function(t){function e(e){return t.call(this,e||{start:0,end:1/0,step:1,float:!1})||this}return n(e,t),Object.defineProperty(e.prototype,"sum",{get:function(){return this.reduce(u)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"product",{get:function(){return this.reduce(c,1)},enumerable:!1,configurable:!0}),e.prototype[Symbol.iterator]=function(){var t,e,n,o,i,s,a,c,l,f,p,h,d;return r(this,(function(r){switch(r.label){case 0:t=this.options.start,e=void 0===t?0:t,n=this.options,o=n.end,i=void 0===o?1/0:o,s=n.step,a=void 0===s?1:s,c=n.count,l=n.float,f=n.map,p=n.filter,h=0,d=function(){if(l)return e=u(e,a);e+=a},r.label=1;case 1:return c&&h<c||!c&&e<=i?p&&!p(e,h)?(d(),[3,1]):f?[4,f(e,h)]:[3,3]:[3,6];case 2:return r.sent(),[3,5];case 3:return[4,e];case 4:r.sent(),r.label=5;case 5:return h+=1,d(),[3,1];case 6:return[2]}}))},e}(i),f=function(t){function e(e){return t.call(this,e||{start:"A",end:"Z",step:1})||this}return n(e,t),e.prototype[Symbol.iterator]=function(){var t,e,n,o,i,s,a,u,c,l,f,p;return r(this,(function(r){switch(r.label){case 0:t=this.options.start,e=void 0===t?"A":t,n=this.options,o=n.end,i=void 0===o?"Z":o,s=n.step,a=void 0===s?1:s,u=n.count,c=n.map,l=n.filter,f=0,p=function(){return e=String.fromCodePoint(e.codePointAt(0)+a)},r.label=1;case 1:return u&&f<u||!u&&e<=i?l&&!l(e,f)?(p(),[3,1]):c?[4,c(e,f)]:[3,3]:[3,6];case 2:return r.sent(),[3,5];case 3:return[4,e];case 4:r.sent(),r.label=5;case 5:return f+=1,p(),[3,1];case 6:return[2]}}))},e}(i),p=function(t){function e(e){var n=t.call(this,e)||this;return n.options.source=Array.from(n.options.source),n}return n(e,t),e.prototype[Symbol.iterator]=function(){var t,e,n,o,i,s,a,u,c,l,f,p,h;return r(this,(function(r){switch(r.label){case 0:t=this.options.start,e=void 0===t?0:t,n=this.options,o=n.source,i=n.end,s=void 0===i?this.options.source.length:i,a=n.step,u=void 0===a?1:a,c=n.count,l=n.map,f=n.filter,p=0,h=function(){return e+=u},r.label=1;case 1:return void 0!==o[e]&&(c&&p<c||!c&&e<=s)?f&&!f(o[e],p)?(h(),[3,1]):l?[4,l(o[e],p)]:[3,3]:[3,6];case 2:return r.sent(),[3,5];case 3:return[4,o[e]];case 4:r.sent(),r.label=5;case 5:return p+=1,h(),[3,1];case 6:return[2]}}))},e}(i),h=function(t){function e(e){return t.call(this,e||{start:"#000000",end:"#FFFFFF",step:1})||this}return n(e,t),e.prototype[Symbol.iterator]=function(){var t,e,n,o,i,s,a,u,c,l,f,p,h;return r(this,(function(r){switch(r.label){case 0:t=this.options,e=t.start,n=void 0===e?"#000000":e,o=t.end,i=void 0===o?"#FFFFFF":o,s=this.options,a=s.step,u=void 0===a?1:a,c=s.count,l=s.map,f=s.filter,p=0,n=n.toLowerCase(),i=i.toLowerCase(),h=function(){var t=(parseInt(n.slice(1),16)+u).toString(16),e="";6!==t.length&&(e=Array.from({length:6-t.length},(function(){return"0"})).join("")),n="#"+e+t},r.label=1;case 1:return c&&p<c||!c&&n<=i?f&&!f(n,p)?(h(),[3,1]):l?[4,l(n,p)]:[3,3]:[3,6];case 2:return r.sent(),[3,5];case 3:return[4,n];case 4:r.sent(),r.label=5;case 5:return p+=1,h(),[3,1];case 6:return[2]}}))},e}(i),d=function(t){function e(e){return t.call(this,"ms",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s),b=function(t){function e(e){return t.call(this,"s",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s),g=function(t){function e(e){return t.call(this,"m",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s),y=function(t){function e(e){return t.call(this,"h",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s),m=function(t){function e(e){return t.call(this,"D",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s),v=function(t){function e(e){return t.call(this,"M",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s),w=function(t){function e(e){return t.call(this,"Y",e||{start:new Date,end:1/0,step:1})||this}return n(e,t),e}(s);t.AbstractDateRange=s,t.AbstractRange=i,t.AbstractRangeGenerator=o,t.CharRange=f,t.ColorRange=h,t.DayRange=m,t.HourRange=y,t.MillisecondRange=d,t.MinuteRange=g,t.MonthRange=v,t.NumberRange=l,t.SecondRange=b,t.StringRange=p,t.YearRange=w,Object.defineProperty(t,"__esModule",{value:!0})}));
