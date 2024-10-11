(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/it-CH-index-js"],{85773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultOptions=function(){return a},t.setDefaultOptions=function(e){a=e};var a={}},73656:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,o.default)(2,arguments);var n=(0,r.default)(e,a),i=(0,r.default)(t,a);return n.getTime()===i.getTime()};var o=n(a(80136)),r=n(a(30309));e.exports=t.default},80136:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},30309:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(1,arguments);var a,n,d,l,s,f,m,c,g=(0,u.getDefaultOptions)(),v=(0,i.default)(null!==(a=null!==(n=null!==(d=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t?void 0:null===(s=t.locale)||void 0===s?void 0:null===(f=s.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==d?d:g.weekStartsOn)&&void 0!==n?n:null===(m=g.locale)||void 0===m?void 0:null===(c=m.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==a?a:0);if(!(v>=0&&v<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=(0,o.default)(e),h=p.getUTCDay();return p.setUTCDate(p.getUTCDate()-((h<v?7:0)+h-v)),p.setUTCHours(0,0,0,0),p};var o=n(a(90602)),r=n(a(80136)),i=n(a(15217)),u=a(85773);e.exports=t.default},15217:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},2252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},1478:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):o;n=e.formattingValues[r]||e.formattingValues[o]}else{var i=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},64906:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var u=i[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(d,function(e){return e.test(u)}):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(d,function(e){return e.test(u)});return a=e.valueCallback?e.valueCallback(l):l,{value:a=n.valueCallback?n.valueCallback(a):a,rest:t.slice(u.length)}}},e.exports=t.default},46532:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var o=n[0],r=t.match(e.parsePattern);if(!r)return null;var i=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:i=a.valueCallback?a.valueCallback(i):i,rest:t.slice(o.length)}}},e.exports=t.default},39642:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(2252)),r={date:(0,o.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},55445:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(28917)),r=n(a(58002)),i=n(a(23978)),u=n(a(43118)),d=n(a(39642)),l={code:"it-CH",formatDistance:o.default,formatLong:d.default,formatRelative:r.default,localize:i.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},28917:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXWeeks:{one:"circa una settimana",other:"circa {{count}} settimane"},xWeeks:{one:"una settimana",other:"{{count}} settimane"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};t.default=function(e,t,n){var o,r=a[e];return(o="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"tra "+o:o+" fa":o},e.exports=t.default},58002:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(73656)),r=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function i(e){return"'"+r[e]+" alle' p"}var u={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,o.default)(e,t,a)?i(n):0===n?"'domenica scorsa alle' p":"'"+r[n]+" scorso alle' p"},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,o.default)(e,t,a)?i(n):0===n?"'domenica prossima alle' p":"'"+r[n]+" prossimo alle' p"},other:"P"};t.default=function(e,t,a,n){var o=u[e];return"function"==typeof o?o(t,a,n):o},e.exports=t.default},23978:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1478)),r={ordinalNumber:function(e,t){return String(Number(e))},era:(0,o.default)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},43118:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(64906)),r={ordinalNumber:(0,n(a(46532)).default)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^(d|e)/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},90602:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,o.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))};var o=n(a(14319)),r=n(a(80136));e.exports=t.default},4293:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},14319:e=>{function t(a){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
