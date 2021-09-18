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
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,n)};function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var i=function(){function t(){}return t.prototype.reduce=function(t,e){void 0===e&&(e=0);for(var n=e,r=this[Symbol.iterator](),o=r.next(),i=0;!o.done;)n=t(n,o.value,i),i+=1,o=r.next();return n},Object.defineProperty(t.prototype,"length",{get:function(){for(var t=this[Symbol.iterator](),e=0;!t.next().done;)e+=1;return e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"iterator",{get:function(){return this[Symbol.iterator]()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stringify",{get:function(){return this.reduce((function(t,e){return String(t)+String(e)}),"")},enumerable:!1,configurable:!0}),t.prototype[Symbol.iterator]=function(){return{next:function(){return{value:void 0,done:!0}}}},t}();function u(t,e,n){var r=""+("+"===n?t+e:t*e);if(r.length<16)return"+"===n?t+e:t*e;var o,i=""+t,u=""+e,a=r.indexOf("."),c=r.lastIndexOf("e"),s=i.indexOf("."),f=i.lastIndexOf("e"),l=u.indexOf("."),p=u.lastIndexOf("e");if(o=-1!==c?r.slice(c,r.length):"",-1===c&&(c=r.length),-1===f&&(f=i.length),-1===p&&(p=u.length),c-a-1>=17-a&&(f-s-1>=16-s||p-l-1>=16-l))return t+e;if(c-a-1<16-a)return"+"===n?t+e:t*e;var d=r.length-r.indexOf(".")-2;if("9"===r[r.length-2]){var h=r+"e"+d;return+(+(h=Math.ceil(Number(h))+"e"+-d)+o)}return+((r=r.slice(0,(i.length>u.length?i.length:u.length)+1))+o)}var a=function(t,e){return u(t,e,"+")},c=function(t,e){return u(t,e,"*")},s=function(t){function e(e){var n=t.call(this)||this;return n.options=r({start:0,end:1/0,step:1,float:!1},e),n}return n(e,t),Object.defineProperty(e.prototype,"sum",{get:function(){return this.reduce(a)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"product",{get:function(){return this.reduce(c,1)},enumerable:!1,configurable:!0}),e.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.end,r=e.step,o=e.count,i=e.float,u=e.map,c=e.filter,s=0;return{next:function(){if(o&&s<o||!o&&t<=n){var e=function(){i?t=a(t,r):t+=r};for(0!==s&&e();c&&!c(t,s);){if(!o&&t>n)return{value:void 0,done:!0};e()}if(!o&&t>n)return{value:void 0,done:!0};var f=void 0;return u&&(f=u(t,s)),s+=1,{value:f||t,done:!1}}return{value:void 0,done:!0}}}},e}(i),f=function(t){function e(e){var n=t.call(this)||this;return n.options=r({start:"A",end:"Z",step:1},e),n}return n(e,t),e.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.end,r=e.step,o=e.count,i=e.map,u=e.filter,a=0;return{next:function(){if(o&&a<o||!o&&t<=n){var e=function(){t=String.fromCodePoint(t.codePointAt(0)+r)};for(0!==a&&e();u&&!u(t,a);){if(!o&&t>n)return{value:void 0,done:!0};e()}if(!o&&t>n)return{value:void 0,done:!0};var c=void 0;return i&&(c=i(t,a)),a+=1,{value:c||t,done:!1}}return{value:void 0,done:!0}}}},e}(i),l=function(t){function e(e){var n=t.call(this)||this;return n.options=r(r({start:0,end:e.source.length-1,step:1},e),{source:Array.from(e.source)}),n}return n(e,t),e.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.source,r=e.end,o=e.step,i=e.count,u=e.map,a=e.filter,c=0;return{next:function(){if(void 0!==n[t]){if(i&&c<i||!i&&t<=r){for(0!==c&&(t+=o);a&&!a(n[t],c);){if(!i&&t>r)return{value:void 0,done:!0};t+=o}if(void 0===n[t])return{value:void 0,done:!0};var e=void 0;return u&&(e=u(n[t],c)),c+=1,{value:e||n[t],done:!1}}return{value:void 0,done:!0}}return{value:void 0,done:!0}}}},e}(i),p=function(t){function e(e){var n=t.call(this)||this;return n.options=r({start:"#000000",end:"#FFFFFF",step:1},e),n}return n(e,t),e.prototype[Symbol.iterator]=function(){var t=this.options,e=t.start,n=t.end;e=e.toLowerCase(),n=n.toLowerCase();var r=this.options,o=r.step,i=r.count,u=r.map,a=r.filter,c=0;return{next:function(){if(i&&c<i||!i&&e<=n){var t=function(){var t=(parseInt(e.slice(1),16)+o).toString(16),n="";6!==t.length&&(n=Array.from({length:6-t.length},(function(){return"0"})).join("")),e="#"+n+t};for(0!==c&&t();a&&!a(e,c);){if(!i&&e>n)return{value:void 0,done:!0};t()}if(!i&&e>n)return{value:void 0,done:!0};var r=void 0;return u&&(r=u(e,c)),c+=1,{value:r||e,done:!1}}return{value:void 0,done:!0}}}},e}(i),d=function(t){function e(e){var n=t.call(this)||this;return n.options=e,n}return n(e,t),e.prototype[Symbol.iterator]=function(){var t,e,n,r,i,u,a,c,s,f,l,p,d,h,v,y;return o(this,(function(o){switch(o.label){case 0:t=this.options,e=t.ranges,n=t.step,r=void 0===n?1:n,i=t.count,u=t.map,a=t.filter,c=0,s=1,f=0,o.label=1;case 1:if(!(f<e.length))return[3,14];o.label=2;case 2:o.trys.push([2,11,12,13]),v=void 0,l=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(e[f]),p=l.next(),o.label=3;case 3:return p.done?[3,10]:(d=p.value,s%r==0?[3,4]:(s++,[3,9]));case 4:return a&&!a(d,c-1)?[3,9]:u?[4,u(d,c)]:[3,6];case 5:return o.sent(),[3,8];case 6:return[4,d];case 7:o.sent(),o.label=8;case 8:if(c++,s++,i&&c==i)return[2,{value:void 0,done:!0}];o.label=9;case 9:return p=l.next(),[3,3];case 10:return[3,13];case 11:return h=o.sent(),v={error:h},[3,13];case 12:try{p&&!p.done&&(y=l.return)&&y.call(l)}finally{if(v)throw v.error}return[7];case 13:return f+=1,[3,1];case 14:return[2]}}))},e}(i),h=function(t){function e(e){var n=t.call(this)||this;return n.options=e,n}return n(e,t),Object.defineProperty(e.prototype,"merged",{get:function(){return this.reduce((function(t,e){return Object.assign(t,e)}),{})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dict",{get:function(){return this.reduce((function(t,e){return Object.assign(t,e)}),{})},enumerable:!1,configurable:!0}),e.prototype[Symbol.iterator]=function(){var t,e,n,r,i,u,a,c,s,f,l,p,d,h,v;return o(this,(function(o){switch(o.label){case 0:t=this.options.count,e=this.options,n=e.keys,r=e.values,i=e.step,u=void 0===i?1:i,a=e.map,c=e.filter,s=0,f=1,l=n.iterator,p=r.iterator,d=l.next(),h=p.next(),o.label=1;case 1:if(d.done||h.done)return[3,6];for(;f%u!=0;)d=l.next(),h=p.next(),f++;return v=Object.fromEntries([[d.value,h.value]]),c&&!c(v,s)?[3,1]:a?[4,a(v,s)]:[3,3];case 2:return o.sent(),[3,5];case 3:return[4,v];case 4:o.sent(),o.label=5;case 5:return d=l.next(),h=p.next(),s++,f++,t&&t--,t&&0===t?[2,{value:void 0,done:!0}]:[3,1];case 6:return[2]}}))},e}(i),v=function(t){function e(e,n){var o=t.call(this)||this;return o.metric=e,o.options=r({start:new Date,end:1/0,step:1},n),o}return n(e,t),e.prototype.setSearchMetricMap=function(t){this.dateGetters={ms:t.getTime,s:t.getSeconds,m:t.getMinutes,h:t.getHours,D:t.getDate,M:t.getMonth,Y:t.getFullYear},this.dateSetters={ms:t.setTime,s:t.setSeconds,m:t.setMinutes,h:t.setHours,D:t.setDate,M:t.setMonth,Y:t.setFullYear}},e.prototype.getTime=function(t){return this.dateGetters||this.setSearchMetricMap(t),this.dateGetters[this.metric].call(t)},e.prototype.setTime=function(t,e){return this.dateSetters||this.setSearchMetricMap(t),this.dateSetters[this.metric].call(t,e)},e.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.end,r=e.step,o=e.count,i=e.weekdays,u=e.leepYear,a=e.map,c=e.filter,s=0;t=new Date(t);var f=this;return{next:function(){if(o&&s<o||!o&&t<=n){for(0!==s&&f.setTime(t,f.getTime(t)+r);c&&!c(new Date(t),s);){if(!o&&t>=n)return{value:void 0,done:!0};f.setTime(t,f.getTime(t)+r)}if(u)for(var e=t.getFullYear();e%400!=0&&(e%100==0||e%4!=0);){if(!o&&t>n)return{value:void 0,done:!0};f.setTime(t,f.getTime(t)+r),e=t.getFullYear()}if(i)for(var l=t.getDay();-1===i.indexOf(l);){if(!o&&t>n)return{value:void 0,done:!0};f.setTime(t,f.getTime(t)+r),l=t.getDay()}if(!o&&t>n)return{value:void 0,done:!0};var p=void 0;return a&&(p=a(new Date(t),s)),s+=1,p&&(p=p),{value:p||new Date(t),done:!1}}return{value:void 0,done:!0}}}},e}(i),y=function(t){function e(e){return t.call(this,"D",e)||this}return n(e,t),e}(v),g=function(t){function e(e){return t.call(this,"h",e)||this}return n(e,t),e}(v),b=function(t){function e(e){return t.call(this,"m",e)||this}return n(e,t),e}(v),m=function(t){function e(e){return t.call(this,"M",e)||this}return n(e,t),e}(v),w=function(t){function e(e){return t.call(this,"s",e)||this}return n(e,t),e}(v),x=function(t){function e(e){return t.call(this,"Y",e)||this}return n(e,t),e}(v),S=function(t){function e(e){return t.call(this,"ms",e)||this}return n(e,t),e.second=function(t){return new w(t)},e.minute=function(t){return new b(t)},e.hour=function(t){return new g(t)},e.day=function(t){return new y(t)},e.month=function(t){return new m(t)},e.year=function(t){return new x(t)},e.prototype.second=function(t){return new w(t)},e.prototype.minute=function(t){return new b(t)},e.prototype.hour=function(t){return new g(t)},e.prototype.day=function(t){return new y(t)},e.prototype.month=function(t){return new m(t)},e.prototype.year=function(t){return new x(t)},e}(v),O=function(){function t(){}return t.number=function(t){return new s(t)},t.char=function(t){return new f(t)},t.string=function(t){return new l(t)},t.date=function(t){return new S(t)},t.color=function(t){return new p(t)},t.merge=function(t){return new d(t)},t.zip=function(t){return new h(t)},t.prototype.number=function(t){return new s(t)},t.prototype.char=function(t){return new f(t)},t.prototype.string=function(t){return new l(t)},t.prototype.date=function(t){return new S(t)},t.prototype.color=function(t){return new p(t)},t.prototype.merge=function(t){return new d(t)},t.prototype.zip=function(t){return new h(t)},t}();t.CharRange=f,t.ColorRange=p,t.DateRange=S,t.DayRange=y,t.HourRange=g,t.MergeRanges=d,t.MinuteRange=b,t.MonthRange=m,t.NumberRange=s,t.Range=O,t.SecondRange=w,t.StringRange=l,t.YearRange=x,t.ZipRanges=h,Object.defineProperty(t,"__esModule",{value:!0})}));
