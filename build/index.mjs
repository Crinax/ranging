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
***************************************************************************** */
var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},r=function(){function t(){}return t.prototype.end=function(t){return this.options.end=t,this},t.prototype.start=function(t){return this.options.start=t,this},t.prototype.step=function(t){return this.options.step=t,this},t.prototype.count=function(t){return this.options.count=t,this},t.prototype.map=function(t){return this.options.map=t,this},t.prototype.filter=function(t){return this.options.filter=t,this},t.prototype.reduce=function(t,e){void 0===e&&(e=0);for(var n=e,r=this[Symbol.iterator](),o=r.next(),i=0;!o.done;)n=t(n,o.value,i),i+=1,o=r.next();return n},Object.defineProperty(t.prototype,"length",{get:function(){for(var t=this[Symbol.iterator](),e=0;!t.next().done;)e+=1;return e},enumerable:!1,configurable:!0}),t.prototype[Symbol.iterator]=function(){return{next:function(){return{value:void 0,done:!0}}}},t}();function o(t,e){var n=""+(t+e);if(n.length<16)return t+e;var r,o=""+t,i=""+e,u=n.indexOf("."),s=n.lastIndexOf("e"),a=o.indexOf("."),c=o.lastIndexOf("e"),f=i.indexOf("."),p=i.lastIndexOf("e");if(r=-1!==s?n.slice(s,n.length):"",-1===s&&(s=n.length),-1===c&&(c=o.length),-1===p&&(p=i.length),s-u-1>=17-u&&(c-a-1>=16-a||p-f-1>=16-f))return t+e;if(s-u-1<16-u)return t+e;var l=(n=n.slice(0,(o.length>i.length?o.length:i.length)+1)).length-n.indexOf(".")-2;if("9"===n[n.length-1]){var h=n+"e"+l;return+(+(h=Math.ceil(Number(h))+"e"+-l)+r)}return+(n+r)}var i=function(t){function r(e){var r=t.call(this)||this;return r.options=n({start:0,end:1/0,step:1,float:!1},e),r}return e(r,t),r.prototype.float=function(t){return this.options.float=t,this},Object.defineProperty(r.prototype,"sum",{get:function(){return this.reduce(o)},enumerable:!1,configurable:!0}),r.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.end,r=e.step,i=e.count,u=e.float,s=e.map,a=e.filter,c=0;return{next:function(){if(i&&c<i||!i&&t<=n){var e=function(){u?t=o(t,r):t+=r};for(0!==c&&e();a&&!a(t,c);){if(!i&&t>n)return{value:void 0,done:!0};e()}if(!i&&t>n)return{value:void 0,done:!0};var f=void 0;return s&&(f=s(t,c)),c+=1,{value:f||t,done:!1}}return{value:void 0,done:!0}}}},r}(r),u=function(t){function r(e){var r=t.call(this)||this;return r.options=n({start:"A",end:"Z",step:1},e),r}return e(r,t),r.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.end,r=e.step,o=e.count,i=e.map,u=e.filter,s=0;return{next:function(){if(o&&s<o||!o&&t<=n){var e=function(){t=String.fromCodePoint(t.codePointAt(0)+r)};for(0!==s&&e();u&&!u(t,s);){if(!o&&t>n)return{value:void 0,done:!0};e()}if(!o&&t>n)return{value:void 0,done:!0};var a=void 0;return i&&(a=i(t,s)),s+=1,{value:a||t,done:!1}}return{value:void 0,done:!0}}}},r}(r),s=function(t){function r(e){var r=t.call(this)||this;return r.options=n(n({start:0,end:e.source.length-1,step:1},e),{source:Array.from(e.source)}),r}return e(r,t),r.prototype.source=function(t){return this.options.source=Array.from(t),this},r.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.source,r=e.end,o=e.step,i=e.count,u=e.map,s=e.filter,a=0;return{next:function(){if(void 0!==n[t]){if(i&&a<i||!i&&t<=r){for(0!==a&&(t+=o);s&&!s(n[t],a);){if(!i&&t>r)return{value:void 0,done:!0};t+=o}if(void 0===n[t])return{value:void 0,done:!0};var e=void 0;return u&&(e=u(n[t],a)),a+=1,{value:e||n[t],done:!1}}return{value:void 0,done:!0}}return{value:void 0,done:!0}}}},r}(r),a=function(t){function r(e,r){var o=t.call(this)||this;return o.metric=e,o.options=n({start:new Date,end:1/0,step:1},r),o}return e(r,t),r.prototype.setSearchMetricMap=function(t){this.dateGetters={ms:t.getTime,s:t.getSeconds,m:t.getMinutes,h:t.getHours,D:t.getDate,M:t.getMonth,Y:t.getFullYear},this.dateSetters={ms:t.setTime,s:t.setSeconds,m:t.setMinutes,h:t.setHours,D:t.setDate,M:t.setMonth,Y:t.setFullYear}},r.prototype.getTime=function(t){return this.dateGetters||this.setSearchMetricMap(t),this.dateGetters[this.metric]()},r.prototype.setTime=function(t,e){return this.dateSetters||this.setSearchMetricMap(t),this.dateSetters[this.metric](e)},r.prototype.weekdays=function(t){return this.options.weekdays=t,this},r.prototype.leepYear=function(t){return this.options.leepYear=t,this},r.prototype[Symbol.iterator]=function(){var t=this.options.start,e=this.options,n=e.end,r=e.step,o=e.count,i=e.weekdays,u=e.leepYear,s=e.map,a=e.filter,c=0;t=new Date(t);var f=this;return{next:function(){if(o&&c<o||!o&&t<=n){for(0!==c&&f.setTime(t,f.getTime(t)+r);a&&!a(new Date(t),c);){if(!o&&t>=n)return{value:void 0,done:!0};f.setTime(t,f.getTime(t)+r)}if(u)for(var e=t.getFullYear();e%400!=0&&(e%100==0||e%4!=0);){if(!o&&t>n)return{value:void 0,done:!0};f.setTime(t,f.getTime(t)+r),e=t.getFullYear()}if(i)for(var p=t.getDay();-1===i.indexOf(p);){if(!o&&t>n)return{value:void 0,done:!0};f.setTime(t,f.getTime(t)+r),p=t.getDay()}if(!o&&t>n)return{value:void 0,done:!0};var l=void 0;return s&&(l=s(new Date(t),c)),c+=1,l&&(l=new Date(l)),{value:l||new Date(t),done:!1}}return{value:void 0,done:!0}}}},r}(r),c=function(t){function n(e){return t.call(this,"D",e)||this}return e(n,t),n}(a),f=function(t){function n(e){return t.call(this,"h",e)||this}return e(n,t),n}(a),p=function(t){function n(e){return t.call(this,"m",e)||this}return e(n,t),n}(a),l=function(t){function n(e){return t.call(this,"M",e)||this}return e(n,t),n}(a),h=function(t){function n(e){return t.call(this,"s",e)||this}return e(n,t),n}(a),d=function(t){function n(e){return t.call(this,"Y",e)||this}return e(n,t),n}(a),v=function(t){function n(e){return t.call(this,"ms",e)||this}return e(n,t),n.second=function(t){return new h(t)},n.minute=function(t){return new p(t)},n.hour=function(t){return new f(t)},n.day=function(t){return new c(t)},n.month=function(t){return new l(t)},n.year=function(t){return new d(t)},n.prototype.second=function(t){return new h(t)},n.prototype.minute=function(t){return new p(t)},n.prototype.hour=function(t){return new f(t)},n.prototype.day=function(t){return new c(t)},n.prototype.month=function(t){return new l(t)},n.prototype.year=function(t){return new d(t)},n}(a),y=function(){function t(){}return t.number=function(t){return new i(t)},t.char=function(t){return new u(t)},t.string=function(t){return new s(t)},t.date=function(t){return new v(t)},t.prototype.number=function(t){return new i(t)},t.prototype.char=function(t){return new u(t)},t.prototype.string=function(t){return new s(t)},t.prototype.date=function(t){return new v(t)},t}();export{u as CharRange,v as DateRange,c as DayRange,f as HourRange,p as MinuteRange,l as MonthRange,i as NumberRange,y as Range,h as SecondRange,s as StringRange,d as YearRange};