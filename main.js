(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===r(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){if(t(1,arguments),!n(e)&&"number"!=typeof e)return!1;var r=a(e);return!isNaN(Number(r))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(e,n){t(2,arguments);var r=a(e).getTime(),o=i(n);return new Date(r+o)}function s(e,n){t(2,arguments);var r=i(n);return u(e,-r)}var d=864e5;function c(e){t(1,arguments);var n=1,r=a(e),o=r.getUTCDay(),i=(o<n?7:0)+o-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function l(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=c(o),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=c(u);return n.getTime()>=i.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function h(e){t(1,arguments);var n=l(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=c(r);return a}var f=6048e5,m={};function g(){return m}function w(e,n){var r,o,u,s,d,c,l,h;t(1,arguments);var f=g(),m=i(null!==(r=null!==(o=null!==(u=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==o?o:null===(l=f.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=a(e),v=w.getUTCDay(),y=(v<m?7:0)+v-m;return w.setUTCDate(w.getUTCDate()-y),w.setUTCHours(0,0,0,0),w}function v(e,n){var r,o,u,s,d,c,l,h;t(1,arguments);var f=a(e),m=f.getUTCFullYear(),v=g(),y=i(null!==(r=null!==(o=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:v.firstWeekContainsDate)&&void 0!==o?o:null===(l=v.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(m+1,0,y),b.setUTCHours(0,0,0,0);var p=w(b,n),T=new Date(0);T.setUTCFullYear(m,0,y),T.setUTCHours(0,0,0,0);var C=w(T,n);return f.getTime()>=p.getTime()?m+1:f.getTime()>=C.getTime()?m:m-1}function y(e,n){var r,a,o,u,s,d,c,l;t(1,arguments);var h=g(),f=i(null!==(r=null!==(a=null!==(o=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:h.firstWeekContainsDate)&&void 0!==a?a:null===(c=h.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),m=v(e,n),y=new Date(0);y.setUTCFullYear(m,0,f),y.setUTCHours(0,0,0,0);var b=w(y,n);return b}var b=6048e5;function p(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const T=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return p("yy"===e?r%100:r,e.length)},C=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):p(n+1,2)},M=function(t,e){return p(t.getUTCDate(),e.length)},S=function(t,e){return p(t.getUTCHours()%12||12,e.length)},k=function(t,e){return p(t.getUTCHours(),e.length)},x=function(t,e){return p(t.getUTCMinutes(),e.length)},D=function(t,e){return p(t.getUTCSeconds(),e.length)},P=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return p(Math.floor(r*Math.pow(10,n-3)),e.length)};function U(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+p(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+p(Math.abs(t)/60,2):E(t,e)}function E(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+p(Math.floor(a/60),2)+n+p(a%60,2)}const q={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T(t,e)},Y:function(t,e,n,r){var a=v(t,r),o=a>0?a:1-a;return"YY"===e?p(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):p(o,e.length)},R:function(t,e){return p(l(t),e.length)},u:function(t,e){return p(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return C(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,r,o){var i=function(e,n){t(1,arguments);var r=a(e),o=w(r,n).getTime()-y(r,n).getTime();return Math.round(o/b)+1}(e,o);return"wo"===n?r.ordinalNumber(i,{unit:"week"}):p(i,n.length)},I:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=c(n).getTime()-h(n).getTime();return Math.round(r/f)+1}(e);return"Io"===n?r.ordinalNumber(o,{unit:"week"}):p(o,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):M(t,e)},D:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=r-o;return Math.floor(i/d)+1}(e);return"Do"===n?r.ordinalNumber(o,{unit:"dayOfYear"}):p(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return p(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return p(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return p(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return S(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):k(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):p(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):p(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):x(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):D(t,e)},S:function(t,e){return P(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return E(a);default:return E(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return E(a);default:return E(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(a,":");default:return"GMT"+E(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(a,":");default:return"GMT"+E(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return p(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return p((r._originalDate||t).getTime(),e.length)}};var Y=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},N=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},O={p:N,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return Y(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,e)).replace("{{time}}",N(o,e))}};const F=O;function L(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var H=["D","DD"],j=["YY","YYYY"];function z(t){return-1!==H.indexOf(t)}function A(t){return-1!==j.indexOf(t)}function Q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var G={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var $,B={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function J(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?V(s,(function(t){return t.test(u)})):I(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(u.length);return{value:i,rest:c}}}function I(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function V(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const K={code:"en-US",formatDistance:function(t,e,n){var r,a=G[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:B,formatRelative:function(t,e,n,r){return R[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:($={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match($.matchPattern);if(!n)return null;var r=n[0],a=t.match($.parsePattern);if(!a)return null;var o=$.valueCallback?$.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;function at(e,n,r){var u,d,c,l,h,f,m,w,v,y,b,p,T,C,M,S,k,x;t(2,arguments);var D=String(n),P=g(),U=null!==(u=null!==(d=null==r?void 0:r.locale)&&void 0!==d?d:P.locale)&&void 0!==u?u:K,W=i(null!==(c=null!==(l=null!==(h=null!==(f=null==r?void 0:r.firstWeekContainsDate)&&void 0!==f?f:null==r||null===(m=r.locale)||void 0===m||null===(w=m.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==h?h:P.firstWeekContainsDate)&&void 0!==l?l:null===(v=P.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==c?c:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=i(null!==(b=null!==(p=null!==(T=null!==(C=null==r?void 0:r.weekStartsOn)&&void 0!==C?C:null==r||null===(M=r.locale)||void 0===M||null===(S=M.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==T?T:P.weekStartsOn)&&void 0!==p?p:null===(k=P.locale)||void 0===k||null===(x=k.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var Y=a(e);if(!o(Y))throw new RangeError("Invalid time value");var N=L(Y),O=s(Y,N),H={firstWeekContainsDate:W,weekStartsOn:E,locale:U,_originalDate:Y},j=D.match(tt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,F[e])(t,U.formatLong):t})).join("").match(Z).map((function(t){if("''"===t)return"'";var a=t[0];if("'"===a)return ot(t);var o=q[a];if(o)return null!=r&&r.useAdditionalWeekYearTokens||!A(t)||Q(t,n,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!z(t)||Q(t,n,String(e)),o(O,t,U.localize,H);if(a.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("");return j}function ot(t){var e=t.match(et);return e?e[1].replace(nt,"'"):t}const it=async function(t,e="weather"){const n=await fetch(`https://api.openweathermap.org/data/2.5/${e}?q=${t}&APPID=776fcd1eecdd73f0d7b531362234442a&units=imperial`),r=await n.json();if(200!==Number(r.cod)){const t=new Error;throw t.code=r.cod,t}return r},ut=document.querySelector("#search-input"),st=document.querySelector(".search-icon"),dt=document.querySelector(".temperature"),ct=document.querySelector(".location-info"),lt=document.querySelector(".current-time"),ht=document.querySelector(".weather"),ft=document.querySelector(".humidity"),mt=document.querySelector(".wind-speed"),gt=document.querySelector(".pressure"),wt=document.querySelector(".feels-like"),vt=document.querySelector(".weather-img"),yt=document.querySelector(".forecasts"),bt=document.querySelector(".location-not-found"),pt=document.querySelector(".loading-container");function Tt(t,e,n){const r=document.createElement(t);return r.textContent=n,r.className=e,r}async function Ct(t){if(t){pt.classList.add("loading"),bt.classList.remove("active"),ut.value="",ut.blur();try{const[e,n]=await Promise.all([it(t),it(t,"forecast")]);(function(t){dt.textContent=`${t.main.temp.toFixed(0)}°`,wt.textContent=`Feels like ${t.main.feels_like.toFixed(0)}°`,lt.textContent=at(function(t){const e=(new Date).getTime(),n=6e4*(new Date).getTimezoneOffset();return new Date(n+e+1e3*t)}(t.timezone),"EEEE, h:mm a"),t.sys.country?ct.textContent=`${t.name}, ${t.sys.country}`:ct.textContent=t.name,ht.textContent=t.weather[0].description,vt.src=`http://openweathermap.org/img/wn/${t.weather[0].icon}.png`,ft.textContent=`${t.main.humidity}%`,ft.title=`Humidity: ${t.main.humidity}%`,mt.textContent=+t.wind.speed.toFixed(1)+" mph",gt.textContent=`${t.main.pressure} hpa`})(e),function(t){yt.textContent="";for(let e=0;e<t.list.length;e+=8){const n=at(new Date(t.list[e].dt_txt),"EEEE"),r=t.list[e].main.temp.toFixed(0),a=`Feels like ${t.list[e].main.feels_like.toFixed(0)}°`,o=Tt("img","forecast-weather-img");o.src=`http://openweathermap.org/img/wn/${t.list[e].weather[0].icon}.png`;const i=Tt("div","forecast");i.appendChild(Tt("span","forecast-day",n)),i.appendChild(Tt("h2","forecast-temp",`${r}°`)),i.appendChild(Tt("span","feels-like",a)),i.appendChild(o),i.appendChild(Tt("span","weather-desc",t.list[e].weather[0].description)),yt.appendChild(i)}}(n)}catch(t){"404"===t.code?bt.classList.add("active"):console.error(t)}pt.classList.remove("loading")}}ut.addEventListener("keydown",(t=>{"Enter"===t.key&&Ct(ut.value)})),st.addEventListener("click",(()=>Ct(ut.value))),document.addEventListener("keyup",(t=>{"/"===t.key&&ut.focus()})),Ct("Antarctica")})();