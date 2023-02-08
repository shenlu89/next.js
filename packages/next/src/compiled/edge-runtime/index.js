(()=>{"use strict";var __webpack_modules__={333:(__unused_webpack_module,exports,__nccwpck_require__)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.EdgeVM=void 0;const buffer_1=__nccwpck_require__(300);const require_1=__nccwpck_require__(369);const vm_1=__nccwpck_require__(3);const vm_2=__nccwpck_require__(144);class EdgeVM extends vm_1.VM{constructor(e={}){super({...e,extend:t=>e.extend?e.extend(addPrimitives(t)):addPrimitives(t)})}}exports.EdgeVM=EdgeVM;function addPrimitives(context){defineProperty(context,"self",{enumerable:true,value:context});defineProperty(context,"globalThis",{value:context});defineProperty(context,"Symbol",{value:Symbol});defineProperty(context,"clearInterval",{value:clearInterval});defineProperty(context,"clearTimeout",{value:clearTimeout});defineProperty(context,"setInterval",{value:setInterval});defineProperty(context,"setTimeout",{value:setTimeout});defineProperty(context,"EdgeRuntime",{value:"edge-runtime"});defineProperties(context,{exports:(0,require_1.requireWithCache)({context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/console"),scopedContext:{console:console}}),nonenumerable:["console"]});const encodings=(0,require_1.requireWithCache)({context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/encoding"),scopedContext:{Buffer:buffer_1.Buffer,global:{}}});defineProperties(context,{exports:encodings,nonenumerable:["atob","btoa","TextEncoder","TextDecoder"]});const streams=(0,require_1.requireWithCache)({path:require.resolve("next/dist/compiled/@edge-runtime/primitives/streams"),context:context});defineProperties(context,{exports:streams,nonenumerable:["ReadableStream","ReadableStreamBYOBReader","ReadableStreamDefaultReader","TransformStream","WritableStream","WritableStreamDefaultWriter"]});const abort=(0,require_1.requireWithCache)({context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/abort-controller")});defineProperties(context,{exports:abort,nonenumerable:["AbortController","AbortSignal","DOMException"]});defineProperties(context,{exports:(0,require_1.requireWithCache)({cache:new Map([["punycode",{exports:__nccwpck_require__(477)}]]),context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/url"),scopedContext:{TextEncoder:encodings.TextEncoder,TextDecoder:encodings.TextDecoder}}),nonenumerable:["URL","URLSearchParams","URLPattern"]});const blob=(0,require_1.requireWithCache)({context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/blob")});defineProperties(context,{exports:blob,nonenumerable:["Blob"]});const webFetch=(0,require_1.requireWithCache)({context:context,cache:new Map([["abort-controller",{exports:abort}],["assert",{exports:__nccwpck_require__(491)}],["buffer",{exports:__nccwpck_require__(300)}],["events",{exports:__nccwpck_require__(361)}],["http",{exports:__nccwpck_require__(685)}],["net",{exports:__nccwpck_require__(808)}],["perf_hooks",{exports:__nccwpck_require__(74)}],["querystring",{exports:__nccwpck_require__(788)}],["stream",{exports:__nccwpck_require__(781)}],["tls",{exports:__nccwpck_require__(404)}],["util",{exports:__nccwpck_require__(837)}],["zlib",{exports:__nccwpck_require__(796)}],[require.resolve("next/dist/compiled/@edge-runtime/primitives/streams"),{exports:streams}],[require.resolve("next/dist/compiled/@edge-runtime/primitives/blob"),{exports:blob}]]),path:require.resolve("next/dist/compiled/@edge-runtime/primitives/fetch"),scopedContext:{Uint8Array:createUint8ArrayForContext(context),Buffer:buffer_1.Buffer,global:{},queueMicrotask:queueMicrotask,setImmediate:setImmediate,clearImmediate:clearImmediate}});defineProperties(context,{exports:webFetch,nonenumerable:["fetch","File","FormData","Headers","Request","Response"]});defineProperties(context,{exports:(0,require_1.requireWithCache)({cache:new Map([[require.resolve("next/dist/compiled/@edge-runtime/primitives/fetch"),{exports:webFetch}]]),context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/cache"),scopedContext:{global:{}}}),enumerable:["caches"],nonenumerable:["Cache","CacheStorage"]});defineProperties(context,{exports:(0,require_1.requireWithCache)({context:context,cache:new Map([["crypto",{exports:__nccwpck_require__(113)}],["process",{exports:__nccwpck_require__(282)}]]),path:require.resolve("next/dist/compiled/@edge-runtime/primitives/crypto"),scopedContext:{Buffer:buffer_1.Buffer,Uint8Array:createUint8ArrayForContext(context)}}),enumerable:["crypto"],nonenumerable:["Crypto","CryptoKey","SubtleCrypto"]});defineProperties(context,{exports:(0,require_1.requireWithCache)({context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/events")}),nonenumerable:["Event","EventTarget","FetchEvent","PromiseRejectionEvent"]});defineProperties(context,{exports:(0,require_1.requireWithCache)({context:context,path:require.resolve("next/dist/compiled/@edge-runtime/primitives/structured-clone")}),nonenumerable:["structuredClone"]});return context}function defineProperty(e,t,r){var n,o,i;Object.defineProperty(e,t,{configurable:(n=r.configurable)!==null&&n!==void 0?n:false,enumerable:(o=r.enumerable)!==null&&o!==void 0?o:false,value:r.value,writable:(i=r.writable)!==null&&i!==void 0?i:true})}function defineProperties(e,t){var r,n;for(const n of(r=t.enumerable)!==null&&r!==void 0?r:[]){if(!t.exports[n]){throw new Error(`Attempt to export a nullable value for "${n}"`)}defineProperty(e,n,{enumerable:true,value:t.exports[n]})}for(const r of(n=t.nonenumerable)!==null&&n!==void 0?n:[]){if(!t.exports[r]){throw new Error(`Attempt to export a nullable value for "${r}"`)}defineProperty(e,r,{value:t.exports[r]})}}function createUint8ArrayForContext(e){return new Proxy((0,vm_2.runInContext)("Uint8Array",e),{construct(e,t){const r=new e(...t);if(!(t[0]instanceof buffer_1.Buffer)){return r}return new e([...r])}})}},906:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.VM=t.EdgeVM=void 0;var n=r(333);Object.defineProperty(t,"EdgeVM",{enumerable:true,get:function(){return n.EdgeVM}});var o=r(3);Object.defineProperty(t,"VM",{enumerable:true,get:function(){return o.VM}})},369:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.requireWithCache=t.createRequire=t.requireDependencies=void 0;const n=r(147);const o=r(144);const i=r(17);function requireDependencies(e){const{context:t,requireCache:r,dependencies:n}=e;const o=createRequire(t,r);for(const{path:e,mapExports:r}of n){const n=o(e,e);for(const e of Object.keys(r)){t[r[e]]=n[e]}}}t.requireDependencies=requireDependencies;function createRequire(e,t,r,s={}){return function requireFn(a,c){const u=require.resolve(c,{paths:[(0,i.dirname)(a)]});const l=t.get(c)||t.get(u);if(l!==undefined&&l!==null){return l.exports}const d={exports:{},loaded:false,id:u};t.set(u,d);r===null||r===void 0?void 0:r.add(u);const p=(0,o.runInContext)(`(function(module,exports,require,__dirname,__filename,${Object.keys(s).join(",")}) {${(0,n.readFileSync)(u,"utf-8")}\n})`,e);try{p(d,d.exports,requireFn.bind(null,u),(0,i.dirname)(u),u,...Object.values(s))}catch(e){t.delete(u);throw e}d.loaded=true;return d.exports}}t.createRequire=createRequire;function requireWithCache(e){var t;return createRequire(e.context,(t=e.cache)!==null&&t!==void 0?t:new Map,e.references,e.scopedContext).call(null,e.path,e.path)}t.requireWithCache=requireWithCache},38:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:true});t.tempFile=void 0;const o=r(277);const i=n(r(17));const s=n(r(147));const a=n(r(37));function tempFile(e){const t=i.default.join(a.default.tmpdir(),o.crypto.randomUUID());s.default.writeFileSync(t,e);return{path:t,remove:()=>s.default.unlinkSync(t)}}t.tempFile=tempFile},3:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.VM=void 0;const n=r(144);const o=r(369);const i=r(38);class VM{constructor(e={}){var t,r,i,s;const a=(0,n.createContext)({},{name:"Edge Runtime",codeGeneration:(t=e.codeGeneration)!==null&&t!==void 0?t:{strings:false,wasm:true}});this.requireCache=(r=e.requireCache)!==null&&r!==void 0?r:new Map;this.context=(s=(i=e.extend)===null||i===void 0?void 0:i.call(e,a))!==null&&s!==void 0?s:a;this.requireFn=(0,o.createRequire)(this.context,this.requireCache)}evaluate(e){return(0,n.runInContext)(e,this.context)}require(e){return this.requireFn(e,e)}requireInContext(e){const t=this.require(e);for(const[e,r]of Object.entries(t)){this.context[e]=r}}requireInlineInContext(e){const t=(0,i.tempFile)(e);this.requireInContext(t.path);t.remove()}}t.VM=VM},162:e=>{e.exports=e=>{const t=e[0]*1e9+e[1];const r=t/1e6;const n=t/1e9;return{seconds:n,milliseconds:r,nanoseconds:t}}},118:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.EdgeRuntime=void 0;const n=r(906);let o;let i;class EdgeRuntime extends n.EdgeVM{constructor(e){super({...e,extend:t=>{var r,n;return(n=(r=e===null||e===void 0?void 0:e.extend)===null||r===void 0?void 0:r.call(e,t))!==null&&n!==void 0?n:t}});Object.defineProperty(this.context,"__onUnhandledRejectionHandlers",{set:registerUnhandledRejectionHandlers,configurable:false,enumerable:false});Object.defineProperty(this,"__rejectionHandlers",{get:()=>o,configurable:false,enumerable:false});Object.defineProperty(this.context,"__onErrorHandlers",{set:registerUncaughtExceptionHandlers,configurable:false,enumerable:false});Object.defineProperty(this,"__errorHandlers",{get:()=>i,configurable:false,enumerable:false});this.evaluate(getDefineEventListenersCode());this.dispatchFetch=this.evaluate(getDispatchFetchCode());if(e===null||e===void 0?void 0:e.initialCode){this.evaluate(e.initialCode)}}}t.EdgeRuntime=EdgeRuntime;function registerUnhandledRejectionHandlers(e){if(!o){process.on("unhandledRejection",(function invokeRejectionHandlers(e,t){o.forEach((r=>r({reason:e,promise:t})))}))}o=e}function registerUncaughtExceptionHandlers(e){if(!i){process.on("uncaughtException",(function invokeErrorHandlers(e){i.forEach((t=>t(e)))}))}i=e}function getDefineEventListenersCode(){return`\n    Object.defineProperty(self, '__listeners', {\n      configurable: false,\n      enumerable: false,\n      value: {},\n      writable: true,\n    })\n\n    function __conditionallyUpdatesHandlerList(eventType) {\n      if (eventType === 'unhandledrejection') {\n        self.__onUnhandledRejectionHandlers = self.__listeners[eventType];\n      } else if (eventType === 'error') {\n        self.__onErrorHandlers = self.__listeners[eventType];\n      }\n    }\n\n    function addEventListener(type, handler) {\n      const eventType = type.toLowerCase();\n      if (eventType === 'fetch' && self.__listeners.fetch) {\n        throw new TypeError('You can register just one "fetch" event listener');\n      }\n\n      self.__listeners[eventType] = self.__listeners[eventType] || [];\n      self.__listeners[eventType].push(handler);\n      __conditionallyUpdatesHandlerList(eventType);\n    }\n\n    function removeEventListener(type, handler) {\n      const eventType = type.toLowerCase();\n      if (self.__listeners[eventType]) {\n        self.__listeners[eventType] = self.__listeners[eventType].filter(item => {\n          return item !== handler;\n        });\n\n        if (self.__listeners[eventType].length === 0) {\n          delete self.__listeners[eventType];\n        }\n      }\n      __conditionallyUpdatesHandlerList(eventType);\n    }\n  `}function getDispatchFetchCode(){return`(async function dispatchFetch(input, init) {\n    const request = new Request(input, init);\n    const event = new FetchEvent(request);\n    if (!self.__listeners.fetch) {\n      throw new Error("No fetch event listeners found");\n    }\n\n    const getResponse = ({ response, error }) => {\n     if (error || !response || !(response instanceof Response)) {\n        console.error(error ? error.toString() : 'The event listener did not respond')\n        response = new Response(null, {\n          statusText: 'Internal Server Error',\n          status: 500\n        })\n      }\n\n      response.waitUntil = () => Promise.all(event.awaiting);\n\n      if (response.status < 300 || response.status >= 400 ) {\n        response.headers.delete('content-encoding');\n        response.headers.delete('transform-encoding');\n        response.headers.delete('content-length');\n      }\n\n      return response;\n    }\n\n    try {\n      await self.__listeners.fetch[0].call(event, event)\n    } catch (error) {\n      return getResponse({ error })\n    }\n\n    return Promise.resolve(event.response)\n      .then(response => getResponse({ response }))\n      .catch(error => getResponse({ error }))\n  })`}},135:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.consumeUint8ArrayReadableStream=t.getClonableBodyStream=void 0;const n=r(781);function getClonableBodyStream(e,t,r){let n=null;return{finalize(){if(n){replaceRequestBody(e,bodyStreamToNodeStream(n))}},cloneBodyStream(){const o=n!==null&&n!==void 0?n:requestToBodyStream(e,t,r);const[i,s]=o.tee();n=i;return s}}}t.getClonableBodyStream=getClonableBodyStream;function requestToBodyStream(e,t,r){const n=new r({start(r){e.on("data",(e=>r.enqueue(new t([...new Uint8Array(e)]))));e.on("end",(()=>r.terminate()));e.on("error",(e=>r.error(e)))}});return n.readable}function bodyStreamToNodeStream(e){const t=e.getReader();return n.Readable.from(async function*(){while(true){const{done:e,value:r}=await t.read();if(e){return}yield r}}())}function replaceRequestBody(e,t){for(const r in t){let n=t[r];if(typeof n==="function"){n=n.bind(t)}e[r]=n}return e}async function*consumeUint8ArrayReadableStream(e){var t;const r=e===null||e===void 0?void 0:e.getReader();if(r){while(true){const{done:e,value:n}=await r.read();if(e){return}if(((t=n===null||n===void 0?void 0:n.constructor)===null||t===void 0?void 0:t.name)!=="Uint8Array"){throw new TypeError("This ReadableStream did not return bytes.")}yield n}}}t.consumeUint8ArrayReadableStream=consumeUint8ArrayReadableStream},90:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:true});t.createHandler=void 0;const o=r(135);const i=r(135);const s=n(r(606));const a=n(r(943));const c=r(685);function createHandler(e){const t=new Set;return{handler:async(r,n)=>{var u,l;try{const d=(0,a.default)();const p=r.method!=="GET"&&r.method!=="HEAD"?(0,i.getClonableBodyStream)(r,e.runtime.evaluate("Uint8Array"),e.runtime.context.TransformStream):undefined;const f=await e.runtime.dispatchFetch(String(getURL(r)),{headers:toRequestInitHeaders(r),method:r.method,body:p===null||p===void 0?void 0:p.cloneBodyStream()});const _=f.waitUntil();t.add(_);_.finally((()=>t.delete(_)));n.statusCode=f.status;n.statusMessage=f.statusText;for(const[e,t]of Object.entries(toNodeHeaders(f.headers))){if(t!==undefined){n.setHeader(e,t)}}if(f.body){for await(const e of(0,o.consumeUint8ArrayReadableStream)(f.body)){n.write(e)}}const m=`${r.socket.remoteAddress} ${r.method} ${r.url}`;const v=`${(u=(0,s.default)(d()).match(/[a-zA-Z]+|[0-9]+/g))===null||u===void 0?void 0:u.join(" ")}`;const b=`${n.statusCode} ${c.STATUS_CODES[n.statusCode]}`;(l=e.logger)===null||l===void 0?void 0:l.debug(`${m} → ${b} in ${v}`);n.end()}finally{if(!n.writableEnded){n.end()}}},waitUntil:()=>Promise.all(t)}}t.createHandler=createHandler;function getURL(e){var t;const r=((t=e.socket)===null||t===void 0?void 0:t.encrypted)?"https":"http";return new URL(String(e.url),`${r}://${String(e.headers.host)}`)}function toRequestInitHeaders(e){return Object.keys(e.headers).map((t=>{const r=e.headers[t];return[t,Array.isArray(r)?r.join(", "):r!==null&&r!==void 0?r:""]}))}function toNodeHeaders(e){const t={};if(e){for(const[r,n]of e.entries()){t[r]=r.toLowerCase()==="set-cookie"?e.getAll("set-cookie"):n}}return t}},153:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.runServer=t.createHandler=t.consumeUint8ArrayReadableStream=void 0;var n=r(135);Object.defineProperty(t,"consumeUint8ArrayReadableStream",{enumerable:true,get:function(){return n.consumeUint8ArrayReadableStream}});var o=r(90);Object.defineProperty(t,"createHandler",{enumerable:true,get:function(){return o.createHandler}});var i=r(530);Object.defineProperty(t,"runServer",{enumerable:true,get:function(){return i.runServer}})},530:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:true});t.runServer=void 0;const o=r(90);const i=r(361);const s=n(r(685));async function runServer(e){const{handler:t,waitUntil:r}=(0,o.createHandler)(e);const n=s.default.createServer(t);n.listen(e.port);try{await(0,i.once)(n,"listening")}catch(t){if((t===null||t===void 0?void 0:t.code)==="EADDRINUSE"){return runServer({...e,port:undefined})}throw t}const a=n.address();const c=typeof a==="string"||a==null?String(a):`http://localhost:${a.port}`;return{url:c,close:async()=>{await r();await new Promise(((e,t)=>n.close((r=>{if(r)t(r);e()}))))},waitUntil:r}}t.runServer=runServer},523:e=>{e.exports=e=>{if(typeof e!=="number"){throw new TypeError("Expected a number")}const t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3,microseconds:t(e*1e3)%1e3,nanoseconds:t(e*1e6)%1e3}}},606:(e,t,r)=>{const n=r(523);const pluralize=(e,t)=>t===1?e:`${e}s`;const o=1e-7;e.exports=(e,t={})=>{if(!Number.isFinite(e)){throw new TypeError("Expected a finite number")}if(t.colonNotation){t.compact=false;t.formatSubMilliseconds=false;t.separateMilliseconds=false;t.verbose=false}if(t.compact){t.secondsDecimalDigits=0;t.millisecondsDecimalDigits=0}const r=[];const floorDecimals=(e,t)=>{const r=Math.floor(e*10**t+o);const n=Math.round(r)/10**t;return n.toFixed(t)};const add=(e,n,o,i)=>{if((r.length===0||!t.colonNotation)&&e===0&&!(t.colonNotation&&o==="m")){return}i=(i||e||"0").toString();let s;let a;if(t.colonNotation){s=r.length>0?":":"";a="";const e=i.includes(".")?i.split(".")[0].length:i.length;const t=r.length>0?2:1;i="0".repeat(Math.max(0,t-e))+i}else{s="";a=t.verbose?" "+pluralize(n,e):o}r.push(s+i+a)};const i=n(e);add(Math.trunc(i.days/365),"year","y");add(i.days%365,"day","d");add(i.hours,"hour","h");add(i.minutes,"minute","m");if(t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3){add(i.seconds,"second","s");if(t.formatSubMilliseconds){add(i.milliseconds,"millisecond","ms");add(i.microseconds,"microsecond","µs");add(i.nanoseconds,"nanosecond","ns")}else{const e=i.milliseconds+i.microseconds/1e3+i.nanoseconds/1e6;const r=typeof t.millisecondsDecimalDigits==="number"?t.millisecondsDecimalDigits:0;const n=e>=1?Math.round(e):Math.ceil(e);const o=r?e.toFixed(r):n;add(Number.parseFloat(o,10),"millisecond","ms",o)}}else{const r=e/1e3%60;const n=typeof t.secondsDecimalDigits==="number"?t.secondsDecimalDigits:1;const o=floorDecimals(r,n);const i=t.keepDecimalsOnWholeSeconds?o:o.replace(/\.0+$/,"");add(Number.parseFloat(i,10),"second","s",i)}if(r.length===0){return"0"+(t.verbose?" milliseconds":"ms")}if(t.compact){return r[0]}if(typeof t.unitCount==="number"){const e=t.colonNotation?"":" ";return r.slice(0,Math.max(t.unitCount,1)).join(e)}return t.colonNotation?r.join(""):r.join(" ")}},943:(e,t,r)=>{const n=r(162);e.exports=()=>{const e=process.hrtime();const end=t=>n(process.hrtime(e))[t];const returnValue=()=>end("milliseconds");returnValue.rounded=()=>Math.round(end("milliseconds"));returnValue.seconds=()=>end("seconds");returnValue.nanoseconds=()=>end("nanoseconds");return returnValue}},491:e=>{e.exports=require("assert")},300:e=>{e.exports=require("buffer")},113:e=>{e.exports=require("crypto")},361:e=>{e.exports=require("events")},147:e=>{e.exports=require("fs")},685:e=>{e.exports=require("http")},808:e=>{e.exports=require("net")},277:e=>{e.exports=require("next/dist/compiled/@edge-runtime/primitives/crypto")},37:e=>{e.exports=require("os")},17:e=>{e.exports=require("path")},74:e=>{e.exports=require("perf_hooks")},282:e=>{e.exports=require("process")},477:e=>{e.exports=require("punycode")},788:e=>{e.exports=require("querystring")},781:e=>{e.exports=require("stream")},404:e=>{e.exports=require("tls")},837:e=>{e.exports=require("util")},144:e=>{e.exports=require("vm")},796:e=>{e.exports=require("zlib")}};var __webpack_module_cache__={};function __nccwpck_require__(e){var t=__webpack_module_cache__[e];if(t!==undefined){return t.exports}var r=__webpack_module_cache__[e]={exports:{}};var n=true;try{__webpack_modules__[e].call(r.exports,r,r.exports,__nccwpck_require__);n=false}finally{if(n)delete __webpack_module_cache__[e]}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{var e=__webpack_exports__;Object.defineProperty(e,"__esModule",{value:true});e.EdgeRuntime=e.runServer=e.createHandler=e.consumeUint8ArrayReadableStream=void 0;var t=__nccwpck_require__(153);Object.defineProperty(e,"consumeUint8ArrayReadableStream",{enumerable:true,get:function(){return t.consumeUint8ArrayReadableStream}});Object.defineProperty(e,"createHandler",{enumerable:true,get:function(){return t.createHandler}});Object.defineProperty(e,"runServer",{enumerable:true,get:function(){return t.runServer}});var r=__nccwpck_require__(118);Object.defineProperty(e,"EdgeRuntime",{enumerable:true,get:function(){return r.EdgeRuntime}})})();module.exports=__webpack_exports__})();