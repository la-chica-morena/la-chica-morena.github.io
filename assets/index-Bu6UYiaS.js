(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Qf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Py(){if(E_)return Do;E_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var T_;function zy(){return T_||(T_=1,Qf.exports=Py()),Qf.exports}var yt=zy(),Jf={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function By(){if(A_)return ne;A_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(N,it,Mt){this.props=N,this.context=it,this.refs=M,this.updater=Mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=x.prototype;function U(N,it,Mt){this.props=N,this.context=it,this.refs=M,this.updater=Mt||E}var w=U.prototype=new B;w.constructor=U,R(w,x.prototype),w.isPureReactComponent=!0;var j=Array.isArray;function G(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(N,it,Mt){var Z=Mt.ref;return{$$typeof:s,type:N,key:it,ref:Z!==void 0?Z:null,props:Mt}}function C(N,it){return D(N.type,it,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ct(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return it[Mt]})}var st=/\/+/g;function tt(N,it){return typeof N=="object"&&N!==null&&N.key!=null?ct(""+N.key):it.toString(36)}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(G,G):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,it,Mt,Z,ft){var Tt=typeof N;(Tt==="undefined"||Tt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(Tt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case s:case t:St=!0;break;case g:return St=N._init,O(St(N._payload),it,Mt,Z,ft)}}if(St)return ft=ft(N),St=Z===""?"."+tt(N,0):Z,j(ft)?(Mt="",St!=null&&(Mt=St.replace(st,"$&/")+"/"),O(ft,it,Mt,"",function(ie){return ie})):ft!=null&&(H(ft)&&(ft=C(ft,Mt+(ft.key==null||N&&N.key===ft.key?"":(""+ft.key).replace(st,"$&/")+"/")+St)),it.push(ft)),1;St=0;var Gt=Z===""?".":Z+":";if(j(N))for(var Ft=0;Ft<N.length;Ft++)Z=N[Ft],Tt=Gt+tt(Z,Ft),St+=O(Z,it,Mt,Tt,ft);else if(Ft=S(N),typeof Ft=="function")for(N=Ft.call(N),Ft=0;!(Z=N.next()).done;)Z=Z.value,Tt=Gt+tt(Z,Ft++),St+=O(Z,it,Mt,Tt,ft);else if(Tt==="object"){if(typeof N.then=="function")return O(ut(N),it,Mt,Z,ft);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return St}function Y(N,it,Mt){if(N==null)return N;var Z=[],ft=0;return O(N,Z,"","",function(Tt){return it.call(Mt,Tt,ft++)}),Z}function X(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},At={map:Y,forEach:function(N,it,Mt){Y(N,function(){it.apply(this,arguments)},Mt)},count:function(N){var it=0;return Y(N,function(){it++}),it},toArray:function(N){return Y(N,function(it){return it})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ne.Activity=_,ne.Children=At,ne.Component=x,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=U,ne.StrictMode=r,ne.Suspense=p,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ne.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ne.cache=function(N){return function(){return N.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(N,it,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Z=R({},N.props),ft=N.key;if(it!=null)for(Tt in it.key!==void 0&&(ft=""+it.key),it)!K.call(it,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&it.ref===void 0||(Z[Tt]=it[Tt]);var Tt=arguments.length-2;if(Tt===1)Z.children=Mt;else if(1<Tt){for(var St=Array(Tt),Gt=0;Gt<Tt;Gt++)St[Gt]=arguments[Gt+2];Z.children=St}return D(N.type,ft,Z)},ne.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ne.createElement=function(N,it,Mt){var Z,ft={},Tt=null;if(it!=null)for(Z in it.key!==void 0&&(Tt=""+it.key),it)K.call(it,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ft[Z]=it[Z]);var St=arguments.length-2;if(St===1)ft.children=Mt;else if(1<St){for(var Gt=Array(St),Ft=0;Ft<St;Ft++)Gt[Ft]=arguments[Ft+2];ft.children=Gt}if(N&&N.defaultProps)for(Z in St=N.defaultProps,St)ft[Z]===void 0&&(ft[Z]=St[Z]);return D(N,Tt,ft)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(N){return{$$typeof:d,render:N}},ne.isValidElement=H,ne.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:X}},ne.memo=function(N,it){return{$$typeof:m,type:N,compare:it===void 0?null:it}},ne.startTransition=function(N){var it=P.T,Mt={};P.T=Mt;try{var Z=N(),ft=P.S;ft!==null&&ft(Mt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(G,xt)}catch(Tt){xt(Tt)}finally{it!==null&&Mt.types!==null&&(it.types=Mt.types),P.T=it}},ne.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ne.use=function(N){return P.H.use(N)},ne.useActionState=function(N,it,Mt){return P.H.useActionState(N,it,Mt)},ne.useCallback=function(N,it){return P.H.useCallback(N,it)},ne.useContext=function(N){return P.H.useContext(N)},ne.useDebugValue=function(){},ne.useDeferredValue=function(N,it){return P.H.useDeferredValue(N,it)},ne.useEffect=function(N,it){return P.H.useEffect(N,it)},ne.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ne.useId=function(){return P.H.useId()},ne.useImperativeHandle=function(N,it,Mt){return P.H.useImperativeHandle(N,it,Mt)},ne.useInsertionEffect=function(N,it){return P.H.useInsertionEffect(N,it)},ne.useLayoutEffect=function(N,it){return P.H.useLayoutEffect(N,it)},ne.useMemo=function(N,it){return P.H.useMemo(N,it)},ne.useOptimistic=function(N,it){return P.H.useOptimistic(N,it)},ne.useReducer=function(N,it,Mt){return P.H.useReducer(N,it,Mt)},ne.useRef=function(N){return P.H.useRef(N)},ne.useState=function(N){return P.H.useState(N)},ne.useSyncExternalStore=function(N,it,Mt){return P.H.useSyncExternalStore(N,it,Mt)},ne.useTransition=function(){return P.H.useTransition()},ne.version="19.2.6",ne}var b_;function Cd(){return b_||(b_=1,Jf.exports=By()),Jf.exports}var kn=Cd(),$f={exports:{}},Uo={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function Iy(){return R_||(R_=1,(function(s){function t(O,Y){var X=O.length;O.push(Y);t:for(;0<X;){var xt=X-1>>>1,At=O[xt];if(0<l(At,Y))O[xt]=Y,O[X]=At,X=xt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Y=O[0],X=O.pop();if(X!==Y){O[0]=X;t:for(var xt=0,At=O.length,N=At>>>1;xt<N;){var it=2*(xt+1)-1,Mt=O[it],Z=it+1,ft=O[Z];if(0>l(Mt,X))Z<At&&0>l(ft,Mt)?(O[xt]=ft,O[Z]=X,xt=Z):(O[xt]=Mt,O[it]=X,xt=it);else if(Z<At&&0>l(ft,X))O[xt]=ft,O[Z]=X,xt=Z;else break t}}return Y}function l(O,Y){var X=O.sortIndex-Y.sortIndex;return X!==0?X:O.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,y=3,S=!1,E=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var Y=i(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=O)r(m),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=i(m)}}function j(O){if(R=!1,w(O),!E)if(i(p)!==null)E=!0,G||(G=!0,ct());else{var Y=i(m);Y!==null&&ut(j,Y.startTime-O)}}var G=!1,P=-1,K=5,D=-1;function C(){return M?!0:!(s.unstable_now()-D<K)}function H(){if(M=!1,G){var O=s.unstable_now();D=O;var Y=!0;try{t:{E=!1,R&&(R=!1,B(P),P=-1),S=!0;var X=y;try{e:{for(w(O),_=i(p);_!==null&&!(_.expirationTime>O&&C());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,y=_.priorityLevel;var At=xt(_.expirationTime<=O);if(O=s.unstable_now(),typeof At=="function"){_.callback=At,w(O),Y=!0;break e}_===i(p)&&r(p),w(O)}else r(p);_=i(p)}if(_!==null)Y=!0;else{var N=i(m);N!==null&&ut(j,N.startTime-O),Y=!1}}break t}finally{_=null,y=X,S=!1}Y=void 0}}finally{Y?ct():G=!1}}}var ct;if(typeof U=="function")ct=function(){U(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,tt=st.port2;st.port1.onmessage=H,ct=function(){tt.postMessage(null)}}else ct=function(){x(H,0)};function ut(O,Y){P=x(function(){O(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var X=y;y=Y;try{return O()}finally{y=X}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=y;y=O;try{return Y()}finally{y=X}},s.unstable_scheduleCallback=function(O,Y,X){var xt=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?xt+X:xt):X=xt,O){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=X+At,O={id:g++,callback:Y,priorityLevel:O,startTime:X,expirationTime:At,sortIndex:-1},X>xt?(O.sortIndex=X,t(m,O),i(p)===null&&O===i(m)&&(R?(B(P),P=-1):R=!0,ut(j,X-xt))):(O.sortIndex=At,t(p,O),E||S||(E=!0,G||(G=!0,ct()))),O},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(O){var Y=y;return function(){var X=y;y=Y;try{return O.apply(this,arguments)}finally{y=X}}}})(eh)),eh}var C_;function Fy(){return C_||(C_=1,th.exports=Iy()),th.exports}var nh={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function Hy(){if(w_)return bn;w_=1;var s=Cd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},bn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},bn.requestFormReset=function(p){r.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},bn.version="19.2.6",bn}var D_;function Gy(){if(D_)return nh.exports;D_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=Hy(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Vy(){if(U_)return Uo;U_=1;var s=Fy(),t=Cd(),i=Gy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,o=h;break}if(T===o){v=!0,o=u,a=h;break}T=T.sibling}if(!v){for(T=h.child;T;){if(T===a){v=!0,a=h,o=u;break}if(T===o){v=!0,o=h,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case j:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var ut=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},xt=[],At=-1;function N(e){return{current:e}}function it(e){0>At||(e.current=xt[At],xt[At]=null,At--)}function Mt(e,n){At++,xt[At]=e.current,e.current=n}var Z=N(null),ft=N(null),Tt=N(null),St=N(null);function Gt(e,n){switch(Mt(Tt,n),Mt(ft,e),Mt(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?qg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=qg(n),e=Yg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Z),Mt(Z,e)}function Ft(){it(Z),it(ft),it(Tt)}function ie(e){e.memoizedState!==null&&Mt(St,e);var n=Z.current,a=Yg(n,e.type);n!==a&&(Mt(ft,e),Mt(Z,a))}function Ne(e){ft.current===e&&(it(Z),it(ft)),St.current===e&&(it(St),bo._currentValue=X)}var fe,We;function I(e){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",We=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+e+We}var Tn=!1;function ue(e,n){if(!e||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var et=ot}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ot){et=ot}e.call(gt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),v=h[0],T=h[1];if(v&&T){var z=v.split(`
`),$=T.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===$.length)for(o=z.length-1,u=$.length-1;1<=o&&0<=u&&z[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==$[u]){var ht=`
`+z[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?I(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return I("Activity");default:return""}}function Yt(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var De=Object.prototype.hasOwnProperty,Wt=s.unstable_scheduleCallback,L=s.unstable_cancelCallback,A=s.unstable_shouldYield,nt=s.unstable_requestPaint,dt=s.unstable_now,Et=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,kt=s.unstable_UserBlockingPriority,wt=s.unstable_NormalPriority,zt=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,Bt=s.unstable_setDisableYieldValue,jt=null,Xt=null;function Nt(e){if(typeof bt=="function"&&Bt(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(jt,e)}catch{}}var $t=Math.clz32?Math.clz32:V,ae=Math.log,Oe=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(ae(e)/Oe|0)|0}var Rt=256,lt=262144,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=Ct(o):(v&=T,v!==0?u=Ct(v):a||(a=T&~e,a!==0&&(u=Ct(a))))):(T=o&~h,T!==0?u=Ct(T):v!==0?u=Ct(v):a||(a=o&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function di(e,n,a,o,u,h){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-$t(a),gt=1<<ht;T[ht]=0,z[ht]=-1;var et=$[ht];if(et!==null)for($[ht]=null,ht=0;ht<et.length;ht++){var ot=et[ht];ot!==null&&(ot.lane&=-536870913)}a&=~gt}o!==0&&Is(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~n))}function Is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-$t(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Fs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-$t(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ti(e,n){var a=n&-n;return a=(a&42)!==0?1:qa(a),(a&(e.suspendedLanes|n))!==0?0:a}function qa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function Ya(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var pi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+pi,xn="__reactProps$"+pi,Pi="__reactContainer$"+pi,Gs="__reactEvents$"+pi,Xc="__reactListeners$"+pi,Wc="__reactHandles$"+pi,Jo="__reactResources$"+pi,ja="__reactMarker$"+pi;function b(e){delete e[Ke],delete e[xn],delete e[Gs],delete e[Xc],delete e[Wc]}function k(e){var n=e[Ke];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=t_(e);e!==null;){if(a=e[Ke])return a;e=t_(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[Ke]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function W(e){var n=e[Jo];return n||(n=e[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[ja]=!0}var Ut=new Set,Pt={};function Ot(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Pt[e]=n,e=0;e<n.length;e++)Ut.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zt={},ve={};function Ee(e){return De.call(ve,e)?!0:De.call(Zt,e)?!1:ee.test(e)?ve[e]=!0:(Zt[e]=!0,!1)}function Ge(e,n,a){if(Ee(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function re(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function an(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dn(e){if(!e._valueTracker){var n=an(e)?"checked":"value";e._valueTracker=Te(e,n,""+e[n])}}function zi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=an(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Za=/[\n"\\]/g;function he(e){return e.replace(Za,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(e,n,a,o,u,h,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ht(n)):e.value!==""+Ht(n)&&(e.value=""+Ht(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?fn(e,v,Ht(n)):a!=null?fn(e,v,Ht(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ht(T):e.removeAttribute("name")}function Un(e,n,a,o,u,h,v,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Dn(e);return}a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Dn(e)}function fn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Cr(e,n,a){if(n!=null&&(n=""+Ht(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ht(a):""}function Ai(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ht(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Dn(e)}function wr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var D0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||D0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&kd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&kd(e,h,n[h])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return L0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function Wd(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(An(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(r(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&zi(o)}break t;case"textarea":Cr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var Zc=!1;function qd(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var o=e(n);return o}finally{if(Zc=!1,(Dr!==null||Ur!==null)&&(Hl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,Wd(n),e)))for(n=0;n<e.length;n++)Wd(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Ii)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Kc=!1}var fa=null,Qc=null,tl=null;function Yd(){if(tl)return tl;var e,n=Qc,a=n.length,o,u="value"in fa?fa.value:fa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[h-o];o++);return tl=u.slice(e,1<o?1-o:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function jd(){return!1}function Pn(e){function n(a,o,u,h,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?nl:jd,this.isPropagationStopped=jd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Pn(Ka),Xs=_({},Ka,{view:0,detail:0}),N0=Pn(Xs),Jc,$c,Ws,al=_({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(Jc=e.screenX-Ws.screenX,$c=e.screenY-Ws.screenY):$c=Jc=0,Ws=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Zd=Pn(al),O0=_({},al,{dataTransfer:0}),P0=Pn(O0),z0=_({},Xs,{relatedTarget:0}),tu=Pn(z0),B0=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=Pn(B0),F0=_({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=Pn(F0),G0=_({},Ka,{data:0}),Kd=Pn(G0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=X0[e])?!!n[e]:!1}function eu(){return W0}var q0=_({},Xs,{key:function(e){if(e.key){var n=V0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=Pn(q0),j0=_({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Pn(j0),Z0=_({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),K0=Pn(Z0),Q0=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=Pn(Q0),$0=_({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=Pn($0),ex=_({},Ka,{newState:0,oldState:0}),nx=Pn(ex),ix=[9,13,27,32],nu=Ii&&"CompositionEvent"in window,qs=null;Ii&&"documentMode"in document&&(qs=document.documentMode);var ax=Ii&&"TextEvent"in window&&!qs,Jd=Ii&&(!nu||qs&&8<qs&&11>=qs),$d=" ",tp=!1;function ep(e,n){switch(e){case"keyup":return ix.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function rx(e,n){switch(e){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$d);case"textInput":return e=n.data,e===$d&&tp?null:e;default:return null}}function sx(e,n){if(Lr)return e==="compositionend"||!nu&&ep(e,n)?(e=Yd(),tl=Qc=fa=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ox[e.type]:n==="textarea"}function ap(e,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ys=null,js=null;function lx(e){Hg(e,0)}function rl(e){var n=rt(e);if(zi(n))return e}function rp(e,n){if(e==="change")return n}var sp=!1;if(Ii){var iu;if(Ii){var au="oninput"in document;if(!au){var op=document.createElement("div");op.setAttribute("oninput","return;"),au=typeof op.oninput=="function"}iu=au}else iu=!1;sp=iu&&(!document.documentMode||9<document.documentMode)}function lp(){Ys&&(Ys.detachEvent("onpropertychange",cp),js=Ys=null)}function cp(e){if(e.propertyName==="value"&&rl(js)){var n=[];ap(n,js,e,jc(e)),qd(lx,n)}}function cx(e,n,a){e==="focusin"?(lp(),Ys=n,js=a,Ys.attachEvent("onpropertychange",cp)):e==="focusout"&&lp()}function ux(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(js)}function fx(e,n){if(e==="click")return rl(n)}function hx(e,n){if(e==="input"||e==="change")return rl(n)}function dx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:dx;function Zs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!De.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,n){var a=up(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=up(a)}}function hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var px=Ii&&"documentMode"in document&&11>=document.documentMode,Nr=null,su=null,Ks=null,ou=!1;function pp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Nr==null||Nr!==mn(o)||(o=Nr,"selectionStart"in o&&ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Yl(su,"onSelect"),0<o.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Nr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},lu={},mp={};Ii&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Ja(e){if(lu[e])return lu[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return lu[e]=n[a];return e}var gp=Ja("animationend"),_p=Ja("animationiteration"),vp=Ja("animationstart"),mx=Ja("transitionrun"),gx=Ja("transitionstart"),_x=Ja("transitioncancel"),xp=Ja("transitionend"),yp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function mi(e,n){yp.set(e,n),Ot(n,[e])}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Pr=0,uu=0;function ol(){for(var e=Pr,n=uu=Pr=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var h=ni[n];if(ni[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}h!==0&&Sp(a,u,h)}}function ll(e,n,a,o){ni[Pr++]=e,ni[Pr++]=n,ni[Pr++]=a,ni[Pr++]=o,uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function fu(e,n,a,o){return ll(e,n,a,o),cl(e)}function $a(e,n){return ll(e,null,null,n),cl(e)}function Sp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-$t(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function cl(e){if(50<xo)throw xo=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function vx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new vx(e,n,a,o)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,o,u,h){var v=0;if(o=e,typeof e=="function")hu(e)&&(v=1);else if(typeof e=="string")v=Ey(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,a,n,u),e.elementType=D,e.lanes=h,e;case R:return tr(a.children,u,h,n);case M:v=8,u|=24;break;case x:return e=Yn(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case j:return e=Yn(13,a,n,u),e.elementType=j,e.lanes=h,e;case G:return e=Yn(19,a,n,u),e.elementType=G,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:v=10;break t;case B:v=9;break t;case w:v=11;break t;case P:v=14;break t;case K:v=16,o=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(v,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function tr(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function du(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Ep(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Tp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=Tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Yt(n)},Tp.set(e,n),n)}return{value:e,source:n,stack:Yt(n)}}var Br=[],Ir=0,fl=null,Qs=0,ai=[],ri=0,ha=null,bi=1,Ri="";function Hi(e,n){Br[Ir++]=Qs,Br[Ir++]=fl,fl=e,Qs=n}function Ap(e,n,a){ai[ri++]=bi,ai[ri++]=Ri,ai[ri++]=ha,ha=e;var o=bi;e=Ri;var u=32-$t(o)-1;o&=~(1<<u),a+=1;var h=32-$t(n)+u;if(30<h){var v=u-u%5;h=(o&(1<<v)-1).toString(32),o>>=v,u-=v,bi=1<<32-$t(n)+u|a<<u|o,Ri=h+e}else bi=1<<h|a<<u|o,Ri=e}function mu(e){e.return!==null&&(Hi(e,1),Ap(e,1,0))}function gu(e){for(;e===fl;)fl=Br[--Ir],Br[Ir]=null,Qs=Br[--Ir],Br[Ir]=null;for(;e===ha;)ha=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null,bi=ai[--ri],ai[ri]=null}function bp(e,n){ai[ri++]=bi,ai[ri++]=Ri,ai[ri++]=ha,bi=n.id,Ri=n.overflow,ha=e}var yn=null,Ve=null,Se=!1,da=null,si=!1,_u=Error(r(519));function pa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ii(n,e)),_u}function Rp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ke]=e,n[xn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)pe(So[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Xg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||pa(e,!0)}function Cp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:yn=yn.return}}function Fr(e){if(e!==yn)return!1;if(!Se)return Cp(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Ve&&pa(e),Cp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=$g(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ve=$g(e)}else n===27?(n=Ve,Ca(e.type)?(e=Gf,Gf=null,Ve=e):Ve=n):Ve=yn?li(e.stateNode.nextSibling):null;return!0}function er(){Ve=yn=null,Se=!1}function vu(){var e=da;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),da=null),e}function Js(e){da===null?da=[e]:da.push(e)}var xu=N(null),nr=null,Gi=null;function ma(e,n,a){Mt(xu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=xu.current,it(xu)}function yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),yu(h.return,a,e),o||(v=null);break t}h=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),yu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Hr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;qn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===St.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return wp(nr,e)}function dl(e,n){return nr===null&&ir(e),wp(e,n)}function wp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var xx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},yx=s.unstable_scheduleCallback,Sx=s.unstable_NormalPriority,rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new xx,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&yx(Sx,function(){e.controller.abort()})}var to=null,Eu=0,Gr=0,Vr=null;function Mx(e,n){if(to===null){var a=to=[];Eu=0,Gr=Rf(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(Dp,Dp),n}function Dp(){if(--Eu===0&&to!==null){Vr!==null&&(Vr.status="fulfilled");var e=to;to=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ex(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Up=O.S;O.S=function(e,n){pg=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Mx(e,n),Up!==null&&Up(e,n)};var ar=N(null);function Tu(){var e=ar.current;return e!==null?e:He.pooledCache}function pl(e,n){n===null?Mt(ar,ar.current):Mt(ar,n.pool)}function Lp(){var e=Tu();return e===null?null:{parent:rn._currentValue,pool:e}}var kr=Error(r(460)),Au=Error(r(474)),ml=Error(r(542)),gl={then:function(){}};function Np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e}throw sr=n,kr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,kr):a}}var sr=null;function Pp(){if(sr===null)throw Error(r(459));var e=sr;return sr=null,e}function zp(e){if(e===kr||e===ml)throw Error(r(483))}var Xr=null,eo=0;function _l(e){var n=eo;return eo+=1,Xr===null&&(Xr=[]),Op(Xr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(q,F){if(e){var J=q.deletions;J===null?(q.deletions=[F],q.flags|=16):J.push(F)}}function a(q,F){if(!e)return null;for(;F!==null;)n(q,F),F=F.sibling;return null}function o(q){for(var F=new Map;q!==null;)q.key!==null?F.set(q.key,q):F.set(q.index,q),q=q.sibling;return F}function u(q,F){return q=Fi(q,F),q.index=0,q.sibling=null,q}function h(q,F,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<F?(q.flags|=67108866,F):J):(q.flags|=67108866,F)):(q.flags|=1048576,F)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,F,J,pt){return F===null||F.tag!==6?(F=du(J,q.mode,pt),F.return=q,F):(F=u(F,J),F.return=q,F)}function z(q,F,J,pt){var Kt=J.type;return Kt===R?ht(q,F,J.props.children,pt,J.key):F!==null&&(F.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===K&&rr(Kt)===F.type)?(F=u(F,J.props),no(F,J),F.return=q,F):(F=ul(J.type,J.key,J.props,null,q.mode,pt),no(F,J),F.return=q,F)}function $(q,F,J,pt){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=pu(J,q.mode,pt),F.return=q,F):(F=u(F,J.children||[]),F.return=q,F)}function ht(q,F,J,pt,Kt){return F===null||F.tag!==7?(F=tr(J,q.mode,pt,Kt),F.return=q,F):(F=u(F,J),F.return=q,F)}function gt(q,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=du(""+F,q.mode,J),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return J=ul(F.type,F.key,F.props,null,q.mode,J),no(J,F),J.return=q,J;case E:return F=pu(F,q.mode,J),F.return=q,F;case K:return F=rr(F),gt(q,F,J)}if(ut(F)||ct(F))return F=tr(F,q.mode,J,null),F.return=q,F;if(typeof F.then=="function")return gt(q,_l(F),J);if(F.$$typeof===U)return gt(q,dl(q,F),J);vl(q,F)}return null}function et(q,F,J,pt){var Kt=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:T(q,F,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Kt?z(q,F,J,pt):null;case E:return J.key===Kt?$(q,F,J,pt):null;case K:return J=rr(J),et(q,F,J,pt)}if(ut(J)||ct(J))return Kt!==null?null:ht(q,F,J,pt,null);if(typeof J.then=="function")return et(q,F,_l(J),pt);if(J.$$typeof===U)return et(q,F,dl(q,J),pt);vl(q,J)}return null}function ot(q,F,J,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(J)||null,T(F,q,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return q=q.get(pt.key===null?J:pt.key)||null,z(F,q,pt,Kt);case E:return q=q.get(pt.key===null?J:pt.key)||null,$(F,q,pt,Kt);case K:return pt=rr(pt),ot(q,F,J,pt,Kt)}if(ut(pt)||ct(pt))return q=q.get(J)||null,ht(F,q,pt,Kt,null);if(typeof pt.then=="function")return ot(q,F,J,_l(pt),Kt);if(pt.$$typeof===U)return ot(q,F,J,dl(F,pt),Kt);vl(F,pt)}return null}function It(q,F,J,pt){for(var Kt=null,Ae=null,Vt=F,oe=F=0,ye=null;Vt!==null&&oe<J.length;oe++){Vt.index>oe?(ye=Vt,Vt=null):ye=Vt.sibling;var be=et(q,Vt,J[oe],pt);if(be===null){Vt===null&&(Vt=ye);break}e&&Vt&&be.alternate===null&&n(q,Vt),F=h(be,F,oe),Ae===null?Kt=be:Ae.sibling=be,Ae=be,Vt=ye}if(oe===J.length)return a(q,Vt),Se&&Hi(q,oe),Kt;if(Vt===null){for(;oe<J.length;oe++)Vt=gt(q,J[oe],pt),Vt!==null&&(F=h(Vt,F,oe),Ae===null?Kt=Vt:Ae.sibling=Vt,Ae=Vt);return Se&&Hi(q,oe),Kt}for(Vt=o(Vt);oe<J.length;oe++)ye=ot(Vt,q,oe,J[oe],pt),ye!==null&&(e&&ye.alternate!==null&&Vt.delete(ye.key===null?oe:ye.key),F=h(ye,F,oe),Ae===null?Kt=ye:Ae.sibling=ye,Ae=ye);return e&&Vt.forEach(function(Na){return n(q,Na)}),Se&&Hi(q,oe),Kt}function Jt(q,F,J,pt){if(J==null)throw Error(r(151));for(var Kt=null,Ae=null,Vt=F,oe=F=0,ye=null,be=J.next();Vt!==null&&!be.done;oe++,be=J.next()){Vt.index>oe?(ye=Vt,Vt=null):ye=Vt.sibling;var Na=et(q,Vt,be.value,pt);if(Na===null){Vt===null&&(Vt=ye);break}e&&Vt&&Na.alternate===null&&n(q,Vt),F=h(Na,F,oe),Ae===null?Kt=Na:Ae.sibling=Na,Ae=Na,Vt=ye}if(be.done)return a(q,Vt),Se&&Hi(q,oe),Kt;if(Vt===null){for(;!be.done;oe++,be=J.next())be=gt(q,be.value,pt),be!==null&&(F=h(be,F,oe),Ae===null?Kt=be:Ae.sibling=be,Ae=be);return Se&&Hi(q,oe),Kt}for(Vt=o(Vt);!be.done;oe++,be=J.next())be=ot(Vt,q,oe,be.value,pt),be!==null&&(e&&be.alternate!==null&&Vt.delete(be.key===null?oe:be.key),F=h(be,F,oe),Ae===null?Kt=be:Ae.sibling=be,Ae=be);return e&&Vt.forEach(function(Oy){return n(q,Oy)}),Se&&Hi(q,oe),Kt}function Be(q,F,J,pt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var Kt=J.key;F!==null;){if(F.key===Kt){if(Kt=J.type,Kt===R){if(F.tag===7){a(q,F.sibling),pt=u(F,J.props.children),pt.return=q,q=pt;break t}}else if(F.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===K&&rr(Kt)===F.type){a(q,F.sibling),pt=u(F,J.props),no(pt,J),pt.return=q,q=pt;break t}a(q,F);break}else n(q,F);F=F.sibling}J.type===R?(pt=tr(J.props.children,q.mode,pt,J.key),pt.return=q,q=pt):(pt=ul(J.type,J.key,J.props,null,q.mode,pt),no(pt,J),pt.return=q,q=pt)}return v(q);case E:t:{for(Kt=J.key;F!==null;){if(F.key===Kt)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){a(q,F.sibling),pt=u(F,J.children||[]),pt.return=q,q=pt;break t}else{a(q,F);break}else n(q,F);F=F.sibling}pt=pu(J,q.mode,pt),pt.return=q,q=pt}return v(q);case K:return J=rr(J),Be(q,F,J,pt)}if(ut(J))return It(q,F,J,pt);if(ct(J)){if(Kt=ct(J),typeof Kt!="function")throw Error(r(150));return J=Kt.call(J),Jt(q,F,J,pt)}if(typeof J.then=="function")return Be(q,F,_l(J),pt);if(J.$$typeof===U)return Be(q,F,dl(q,J),pt);vl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(a(q,F.sibling),pt=u(F,J),pt.return=q,q=pt):(a(q,F),pt=du(J,q.mode,pt),pt.return=q,q=pt),v(q)):a(q,F)}return function(q,F,J,pt){try{eo=0;var Kt=Be(q,F,J,pt);return Xr=null,Kt}catch(Vt){if(Vt===kr||Vt===ml)throw Vt;var Ae=Yn(29,Vt,null,q.mode);return Ae.lanes=pt,Ae.return=q,Ae}finally{}}}var or=Bp(!0),Ip=Bp(!1),ga=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=cl(e),Sp(e,null,a),n}return ll(e,o,n,a),cl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fs(e,a)}}function Cu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function ao(){if(wu){var e=Vr;if(e!==null)throw e}}function ro(e,n,a,o){wu=!1;var u=e.updateQueue;ga=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,$=z.next;z.next=null,v===null?h=$:v.next=$,v=z;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=$:T.next=$,ht.lastBaseUpdate=z))}if(h!==null){var gt=u.baseState;v=0,ht=$=z=null,T=h;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(xe&et)===et:(o&et)===et){et!==0&&et===Gr&&(wu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=e,Jt=T;et=n;var Be=a;switch(Jt.tag){case 1:if(It=Jt.payload,typeof It=="function"){gt=It.call(Be,gt,et);break t}gt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Jt.payload,et=typeof It=="function"?It.call(Be,gt,et):It,et==null)break t;gt=_({},gt,et);break t;case 2:ga=!0}}et=T.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?($=ht=ot,z=gt):ht=ht.next=ot,v|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(z=gt),u.baseState=z,u.firstBaseUpdate=$,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),Ea|=v,e.lanes=v,e.memoizedState=gt}}function Fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fp(a[e],n)}var Wr=N(null),xl=N(0);function Gp(e,n){e=Qi,Mt(xl,e),Mt(Wr,n),Qi=e|n.baseLanes}function Du(){Mt(xl,Qi),Mt(Wr,Wr.current)}function Uu(){Qi=xl.current,it(Wr),it(xl)}var jn=N(null),oi=null;function xa(e){var n=e.alternate;Mt(en,en.current&1),Mt(jn,e),oi===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(oi=e)}function Lu(e){Mt(en,en.current),Mt(jn,e),oi===null&&(oi=e)}function Vp(e){e.tag===22?(Mt(en,en.current),Mt(jn,e),oi===null&&(oi=e)):ya()}function ya(){Mt(en,en.current),Mt(jn,jn.current)}function Zn(e){it(jn),oi===e&&(oi=null),it(en)}var en=N(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,se=null,Pe=null,sn=null,Sl=!1,qr=!1,lr=!1,Ml=0,so=0,Yr=null,Tx=0;function Qe(){throw Error(r(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,o,u,h){return ki=h,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Am:Zu,lr=!1,h=a(o,u),lr=!1,qr&&(h=Xp(n,a,o,u)),kp(e),h}function kp(e){O.H=co;var n=Pe!==null&&Pe.next!==null;if(ki=0,sn=Pe=se=null,Sl=!1,so=0,Yr=null,n)throw Error(r(300));e===null||on||(e=e.dependencies,e!==null&&hl(e)&&(on=!0))}function Xp(e,n,a,o){se=e;var u=0;do{if(qr&&(Yr=null),so=0,qr=!1,25<=u)throw Error(r(301));if(u+=1,sn=Pe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=bm,h=n(a,o)}while(qr);return h}function Ax(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(se.flags|=1024),n}function Pu(){var e=Ml!==0;return Ml=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}ki=0,sn=Pe=se=null,qr=!1,so=Ml=0,Yr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?se.memoizedState=sn=e:sn=sn.next=e,sn}function nn(){if(Pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=sn===null?se.memoizedState:sn.next;if(n!==null)sn=n,Pe=e;else{if(e===null)throw se.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},sn===null?se.memoizedState=sn=e:sn=sn.next=e}return sn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Yr===null&&(Yr=[]),e=Op(Yr,e,n),n=se,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Am:Zu),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===U)return Sn(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=nn();return Fu(n,Pe,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var T=v=null,z=null,$=n,ht=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(xe&gt)===gt:(ki&gt)===gt){var et=$.revertLane;if(et===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Gr&&(ht=!0);else if((ki&et)===et){$=$.next,et===Gr&&(ht=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=gt,v=h):z=z.next=gt,se.lanes|=et,Ea|=et;gt=$.action,lr&&a(h,gt),h=$.hasEagerState?$.eagerState:a(h,gt)}else et={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=et,v=h):z=z.next=et,se.lanes|=gt,Ea|=gt;$=$.next}while($!==null&&$!==n);if(z===null?v=h:z.next=T,!qn(h,e.memoizedState)&&(on=!0,ht&&(a=Vr,a!==null)))throw a;e.memoizedState=h,e.baseState=v,e.baseQueue=z,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=e(h,v.action),v=v.next;while(v!==u);qn(h,n.memoizedState)||(on=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Wp(e,n,a){var o=se,u=nn(),h=Se;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!qn((Pe||u).memoizedState,a);if(v&&(u.memoizedState=a,on=!0),u=u.queue,ku(jp.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,jr(9,{destroy:void 0},Yp.bind(null,o,u,a,n),null),He===null)throw Error(r(349));h||(ki&127)!==0||qp(o,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=El(),se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Yp(e,n,a,o){n.value=a,n.getSnapshot=o,Zp(n)&&Kp(e)}function jp(e,n,a){return a(function(){Zp(n)&&Kp(e)})}function Zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Kp(e){var n=$a(e,2);n!==null&&Hn(n,e,2)}function Gu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),lr){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Qp(e,n,a,o){return e.baseState=a,Fu(e,Pe,typeof o=="function"?o:Xi)}function bx(e,n,a,o,u){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Jp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Jp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,v={};O.T=v;try{var T=a(u,o),z=O.S;z!==null&&z(v,T),$p(e,n,T)}catch($){Vu(e,n,$)}finally{h!==null&&v.types!==null&&(h.types=v.types),O.T=h}}else try{h=a(u,o),$p(e,n,h)}catch($){Vu(e,n,$)}}function $p(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tm(e,n,o)},function(o){return Vu(e,n,o)}):tm(e,n,a)}function tm(e,n,a){n.status="fulfilled",n.value=a,em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Jp(e,a)))}function Vu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==o)}e.action=null}function em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function nm(e,n){return n}function im(e,n){if(Se){var a=He.formState;if(a!==null){t:{var o=se;if(Se){if(Ve){e:{for(var u=Ve,h=si;u.nodeType!==8;){if(!h){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ve=li(u.nextSibling),o=u.data==="F!";break t}}pa(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=o,a=Mm.bind(null,se,o),o.dispatch=a,o=Gu(!1),h=ju.bind(null,se,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=bx.bind(null,se,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function am(e){var n=nn();return rm(n,Pe,e)}function rm(e,n,a){if(n=Fu(e,n,nm)[0],e=Al(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(v){throw v===kr?ml:v}else o=n;n=nn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(se.flags|=2048,jr(9,{destroy:void 0},Rx.bind(null,u,a),null)),[o,h,e]}function Rx(e,n){e.action=n}function sm(e){var n=nn(),a=Pe;if(a!==null)return rm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=se.updateQueue,n===null&&(n=El(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function om(){return nn().memoizedState}function bl(e,n,a,o){var u=Ln();se.flags|=e,u.memoizedState=jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Rl(e,n,a,o){var u=nn();o=o===void 0?null:o;var h=u.memoizedState.inst;Pe!==null&&o!==null&&Nu(o,Pe.memoizedState.deps)?u.memoizedState=jr(n,h,a,o):(se.flags|=e,u.memoizedState=jr(1|n,h,a,o))}function lm(e,n){bl(8390656,8,e,n)}function ku(e,n){Rl(2048,8,e,n)}function Cx(e){se.flags|=4;var n=se.updateQueue;if(n===null)n=El(),se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cm(e){var n=nn().memoizedState;return Cx({ref:n,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function um(e,n){return Rl(4,2,e,n)}function fm(e,n){return Rl(4,4,e,n)}function hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,hm.bind(null,n,e),a)}function Xu(){}function pm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function mm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nu(n,o[1]))return o[0];if(o=e(),lr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,n],o}function Wu(e,n,a){return a===void 0||(ki&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=gg(),se.lanes|=e,Ea|=e,a)}function gm(e,n,a,o){return qn(a,n)?a:Wr.current!==null?(e=Wu(e,a,o),qn(e,n)||(on=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(xe&261930)===0?(on=!0,e.memoizedState=a):(e=gg(),se.lanes|=e,Ea|=e,n)}function _m(e,n,a,o,u){var h=Y.p;Y.p=h!==0&&8>h?h:8;var v=O.T,T={};O.T=T,ju(e,!1,n,a);try{var z=u(),$=O.S;if($!==null&&$(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ht=Ex(z,o);lo(e,n,ht,Jn(e))}else lo(e,n,o,Jn(e))}catch(gt){lo(e,n,{then:function(){},status:"rejected",reason:gt},Jn())}finally{Y.p=h,v!==null&&T.types!==null&&(v.types=T.types),O.T=v}}function wx(){}function qu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=vm(e).queue;_m(e,u,n,X,a===null?wx:function(){return xm(e),a(o)})}function vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function xm(e){var n=vm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},Jn())}function Yu(){return Sn(bo)}function ym(){return nn().memoizedState}function Sm(){return nn().memoizedState}function Dx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=_a(a);var o=va(n,e,a);o!==null&&(Hn(o,n,a),io(o,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function Ux(e,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Em(n,a):(a=fu(e,n,a,o),a!==null&&(Hn(a,e,o),Tm(a,n,o)))}function Mm(e,n,a){var o=Jn();lo(e,n,a,o)}function lo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Em(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,T=h(v,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,v))return ll(e,n,u,0),He===null&&ol(),!1}catch{}finally{}if(a=fu(e,n,u,o),a!==null)return Hn(a,e,o),Tm(a,n,o),!0}return!1}function ju(e,n,a,o){if(o={lane:2,revertLane:Rf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=fu(e,a,o,2),n!==null&&Hn(n,e,2)}function Cl(e){var n=e.alternate;return e===se||n!==null&&n===se}function Em(e,n){qr=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Tm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fs(e,a)}}var co={readContext:Sn,use:Tl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};co.useEffectEvent=Qe;var Am={readContext:Sn,use:Tl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var o=e();if(lr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(lr){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ux.bind(null,se,e),[o.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=Mm.bind(null,se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Ln();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=_m.bind(null,se,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=se,u=Ln();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(xe&127)!==0||qp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,lm(jp.bind(null,o,h,e),[e]),o.flags|=2048,jr(9,{destroy:void 0},Yp.bind(null,o,h,a,n),null),a},useId:function(){var e=Ln(),n=He.identifierPrefix;if(Se){var a=Ri,o=bi;a=(o&~(1<<32-$t(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Tx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:im,useActionState:im,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=Dx.bind(null,se)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Sn,use:Tl,useCallback:pm,useContext:Sn,useEffect:ku,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Al,useRef:om,useState:function(){return Al(Xi)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return gm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Al(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:ym,useHostTransitionStatus:Yu,useFormState:am,useActionState:am,useOptimistic:function(e,n){var a=nn();return Qp(a,Pe,e,n)},useMemoCache:Iu,useCacheRefresh:Sm};Zu.useEffectEvent=cm;var bm={readContext:Sn,use:Tl,useCallback:pm,useContext:Sn,useEffect:ku,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Hu,useRef:om,useState:function(){return Hu(Xi)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return Pe===null?Wu(a,e,n):gm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Hu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:ym,useHostTransitionStatus:Yu,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=nn();return Pe!==null?Qp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:Sm};bm.useEffectEvent=cm;function Ku(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=_a(o);u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(Hn(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=_a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(Hn(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=va(e,o,a),n!==null&&(Hn(n,e,a),io(n,e,a))}};function Rm(e,n,a,o,u,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,v):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(u,h):!0}function Cm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function cr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function wm(e){sl(e)}function Dm(e){console.error(e)}function Um(e){sl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Lm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Nm(e){return e=_a(e),e.tag=3,e}function Om(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Lm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Lm(n,a,o),typeof u!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Lx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Gl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,u)),!1;case 22:return a.flags|=65536,o===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,u)),!1}throw Error(r(435,a.tag))}return Tf(e,o,u),Gl(),!1}if(Se)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==_u&&(e=Error(r(422),{cause:o}),Js(ii(e,a)))):(o!==_u&&(n=Error(r(423),{cause:o}),Js(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=Ju(e.stateNode,o,u),Cu(e,u),Je!==4&&(Je=2)),!1;var h=Error(r(520),{cause:o});if(h=ii(h,a),vo===null?vo=[h]:vo.push(h),Je!==4&&(Je=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,o,e),Cu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ta===null||!Ta.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Nm(u),Om(u,e,a,o),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var $u=Error(r(461)),on=!1;function Mn(e,n,a,o){n.child=e===null?Ip(n,null,a,o):or(n,e.child,a,o)}function Pm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return ir(n),o=Ou(e,n,a,v,h,u),T=Pu(),e!==null&&!on?(zu(e,n,u),Wi(e,n,u)):(Se&&T&&mu(n),n.flags|=1,Mn(e,n,o,u),n.child)}function zm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!hu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Bm(e,n,h,o,u)):(e=ul(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!lf(e,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(v,o)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Fi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Bm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Zs(h,o)&&e.ref===n.ref)if(on=!1,n.pendingProps=o=h,lf(e,u))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return tf(e,n,a,o,u)}function Im(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Fm(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,h!==null?h.cachePool:null),h!==null?Gp(n,h):Du(),Vp(n);else return o=n.lanes=536870912,Fm(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(pl(n,h.cachePool),Gp(n,h),ya(),n.memoizedState=null):(e!==null&&pl(n,null),Du(),ya());return Mn(e,n,u,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fm(e,n,a,o,u){var h=Tu();return h=h===null?null:{parent:rn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&pl(n,null),Du(),Vp(n),e!==null&&Hr(e,n,o,!0),n.childLanes=u,null}function Dl(e,n){return n=Ll({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hm(e,n,a){return or(n,e.child,null,a),e=Dl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function Nx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Dl(n,o),n.lanes=536870912,uo(null,e);if(Lu(n),(e=Ve)?(e=Jg(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:bi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,yn=n,Ve=null)):e=null,e===null)throw pa(n);return n.lanes=536870912,null}return Dl(n,o)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(Lu(n),u)if(n.flags&256)n.flags&=-257,n=Hm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Hr(e,n,a,!1),u=(a&e.childLanes)!==0,on||u){if(o=He,o!==null&&(v=Ti(o,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,$a(e,v),Hn(o,e,v),$u;Gl(),n=Hm(e,n,a)}else e=h.treeContext,Ve=li(v.nextSibling),yn=n,Se=!0,da=null,si=!1,e!==null&&bp(n,e),n=Dl(n,o),n.flags|=4096;return n}return e=Fi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,o,u){return ir(n),a=Ou(e,n,a,o,void 0,u),o=Pu(),e!==null&&!on?(zu(e,n,u),Wi(e,n,u)):(Se&&o&&mu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Gm(e,n,a,o,u,h){return ir(n),n.updateQueue=null,a=Xp(n,o,a,u),kp(e),o=Pu(),e!==null&&!on?(zu(e,n,h),Wi(e,n,h)):(Se&&o&&mu(n),n.flags|=1,Mn(e,n,a,h),n.child)}function Vm(e,n,a,o,u){if(ir(n),n.stateNode===null){var h=zr,v=a.contextType;typeof v=="object"&&v!==null&&(h=Sn(v)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Qu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},bu(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Sn(v):zr,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ku(n,a,v,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&Qu.enqueueReplaceState(h,h.state,null),ro(n,o,h,u),ao(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,z=cr(a,T);h.props=z;var $=h.context,ht=a.contextType;v=zr,typeof ht=="object"&&ht!==null&&(v=Sn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||$!==v)&&Cm(n,h,o,v),ga=!1;var et=n.memoizedState;h.state=et,ro(n,o,h,u),ao(),$=n.memoizedState,T||et!==$||ga?(typeof gt=="function"&&(Ku(n,a,gt,o),$=n.memoizedState),(z=ga||Rm(n,a,z,o,et,$,v))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=v,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Ru(e,n),v=n.memoizedProps,ht=cr(a,v),h.props=ht,gt=n.pendingProps,et=h.context,$=a.contextType,z=zr,typeof $=="object"&&$!==null&&(z=Sn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==gt||et!==z)&&Cm(n,h,o,z),ga=!1,et=n.memoizedState,h.state=et,ro(n,o,h,u),ao();var ot=n.memoizedState;v!==gt||et!==ot||ga||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof T=="function"&&(Ku(n,a,T,o),ot=n.memoizedState),(ht=ga||Rm(n,a,ht,o,et,ot,z)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ot,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ot,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=z,o=ht):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ul(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=or(n,e.child,null,u),n.child=or(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Wi(e,n,u),e}function km(e,n,a,o){return er(),n.flags|=256,Mn(e,n,a,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Lp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function Xm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(u?xa(n):ya(),(e=Ve)?(e=Jg(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:bi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,yn=n,Ve=null)):e=null,e===null)throw pa(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(ya(),u=n.mode,T=Ll({mode:"hidden",children:T},u),o=tr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,v,a),n.memoizedState=ef,uo(null,o)):(xa(n),rf(n,T))}var z=e.memoizedState;if(z!==null&&(T=z.dehydrated,T!==null)){if(h)n.flags&256?(xa(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),T=o.fallback,u=n.mode,o=Ll({mode:"visible",children:o.children},u),T=tr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,or(n,e.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,v,a),n.memoizedState=ef,n=uo(null,o));else if(xa(n),Hf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var $=v.dgst;v=$,o=Error(r(419)),o.stack="",o.digest=v,Js({value:o,source:null,stack:null}),n=sf(e,n,a)}else if(on||Hr(e,n,a,!1),v=(a&e.childLanes)!==0,on||v){if(v=He,v!==null&&(o=Ti(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,$a(e,o),Hn(v,e,o),$u;Ff(T)||Gl(),n=sf(e,n,a)}else Ff(T)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ve=li(T.nextSibling),yn=n,Se=!0,da=null,si=!1,e!==null&&bp(n,e),n=rf(n,o.children),n.flags|=4096);return n}return u?(ya(),T=o.fallback,u=n.mode,z=e.child,$=z.sibling,o=Fi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?T=Fi($,T):(T=tr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,uo(null,o),o=n.child,T=e.child.memoizedState,T===null?T=nf(a):(u=T.cachePool,u!==null?(z=rn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Lp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=af(e,v,a),n.memoizedState=ef,uo(e.child,o)):(xa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return or(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yu(e.return,n,a)}function of(e,n,a,o,u,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=h)}function qm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var v=en.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Mt(en,v),Mn(e,n,o,a),o=Se?Qs:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),of(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}of(n,!0,a,null,h,o);break;case"together":of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function Ox(e,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),ma(n,rn,e.memoizedState.cache),er();break;case 27:case 5:ie(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(e,n,a):(xa(n),e=Wi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Hr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return qm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(en,en.current),o)break;return null;case 22:return n.lanes=0,Im(e,n,a,n.pendingProps);case 24:ma(n,rn,e.memoizedState.cache)}return Wi(e,n,a)}function Ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return on=!1,Ox(e,n,a);on=(e.flags&131072)!==0}else on=!1,Se&&(n.flags&1048576)!==0&&Ap(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")hu(e)?(o=cr(e,o),n.tag=1,n=Vm(null,n,e,o,a)):(n.tag=0,n=tf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Pm(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=zm(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=cr(o,n.pendingProps),Vm(e,n,o,u,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Ru(e,n),ro(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ma(n,rn,o),o!==h.cache&&Su(n,[rn],a,!0),ao(),o=v.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=km(e,n,o,a);break t}else if(o!==u){u=ii(Error(r(424)),n),Js(u),n=km(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=li(e.firstChild),yn=n,Se=!0,da=null,si=!0,a=Ip(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),o===u){n=Wi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=a_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,o=jl(Tt.current).createElement(a),o[Ke]=n,o[xn]=e,En(o,a,e),vt(o),n.stateNode=o):n.memoizedState=a_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Se&&(o=n.stateNode=e_(n.type,n.pendingProps,Tt.current),yn=n,si=!0,u=Ve,Ca(n.type)?(Gf=u,Ve=li(o.firstChild)):Ve=u),Mn(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((u=o=Ve)&&(o=uy(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,yn=n,Ve=li(o.firstChild),si=!1,u=!0):u=!1),u||pa(n)),ie(n),u=n.type,h=n.pendingProps,v=e!==null?e.memoizedProps:null,o=h.children,zf(u,h)?o=null:v!==null&&zf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,Ax,null,null,a),bo._currentValue=u),Ul(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Se&&((e=a=Ve)&&(a=fy(a,n.pendingProps,si),a!==null?(n.stateNode=a,yn=n,Ve=null,e=!0):e=!1),e||pa(n)),null;case 13:return Xm(e,n,a);case 4:return Gt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=or(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ir(n),u=Sn(u),o=o(u),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return zm(e,n,n.type,n.pendingProps,a);case 15:return Bm(e,n,n.type,n.pendingProps,a);case 19:return qm(e,n,a);case 31:return Nx(e,n,a);case 22:return Im(e,n,a,n.pendingProps);case 24:return ir(n),o=Sn(rn),e===null?(u=Tu(),u===null&&(u=He,h=Mu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},bu(n),ma(n,rn,u)):((e.lanes&a)!==0&&(Ru(e,n),ro(n,null,null,a),ao()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,rn,o)):(o=h.cache,ma(n,rn,o),o!==u.cache&&Su(n,[rn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(yg())e.flags|=8192;else throw sr=gl,Au}else e.flags&=-16777217}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c_(n))if(yg())e.flags|=8192;else throw sr=gl,Au}function Nl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?un():536870912,e.lanes|=n,Jr|=n)}function fo(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Px(e,n,a){var o=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(rn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),ke(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(qi(n),h!==null?(ke(n),jm(n,h)):(ke(n),cf(n,u,null,o,a))):h?h!==e.memoizedState?(qi(n),ke(n),jm(n,h)):(ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&qi(n),ke(n),cf(n,u,e,o,a)),null;case 27:if(Ne(n),a=Tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ke(n),null}e=Z.current,Fr(n)?Rp(n):(e=e_(u,o,a),n.stateNode=e,qi(n))}return ke(n),null;case 5:if(Ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(h=Z.current,Fr(n))Rp(n);else{var v=jl(Tt.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}h[Ke]=n,h[xn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;t:switch(En(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&qi(n)}}return ke(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Tt.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Xg(e.nodeValue,a)),e||pa(n,!0)}else e=jl(e).createTextNode(o),e[Ke]=n,n.stateNode=e}return ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Fr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),ke(n),null);case 4:return Ft(),e===null&&Uf(n.stateNode.containerInfo),ke(n),null;case 10:return Vi(n.type),ke(n),null;case 19:if(it(en),o=n.memoizedState,o===null)return ke(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)fo(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=yl(e),h!==null){for(n.flags|=128,fo(o,!1),e=h.updateQueue,n.updateQueue=e,Nl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Mp(a,e),a=a.sibling;return Mt(en,en.current&1|2),Se&&Hi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&dt()>Il&&(n.flags|=128,u=!0,fo(o,!1),n.lanes=4194304)}else{if(!u)if(e=yl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Nl(n,e),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Se)return ke(n),null}else 2*dt()-o.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,u=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=dt(),e.sibling=null,a=en.current,Mt(en,u?a&1|2:a&1),Se&&Hi(n,o.treeForkCount),e):(ke(n),null);case 22:case 23:return Zn(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&it(ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(rn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function zx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(rn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(en),null;case 4:return Ft(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Uu(),e!==null&&it(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(rn),null;case 25:return null;default:return null}}function Zm(e,n){switch(gu(n),n.tag){case 3:Vi(rn),Ft();break;case 26:case 27:case 5:Ne(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:it(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Uu(),e!==null&&it(ar);break;case 24:Vi(rn)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,v=a.inst;o=h(),v.destroy=o}a=a.next}while(a!==u)}}catch(T){Le(n,n.return,T)}}function Sa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var z=a,$=T;try{$()}catch(ht){Le(u,z,ht)}}}o=o.next}while(o!==h)}}catch(ht){Le(n,n.return,ht)}}function Km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hp(n,a)}catch(o){Le(e,e.return,o)}}}function Qm(e,n,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Le(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Le(e,n,u)}}function Ci(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Le(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(e,n,u)}else a.current=null}function Jm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Le(e,e.return,u)}}function uf(e,n,a){try{var o=e.stateNode;ay(o,e.type,a,n),o[xn]=n}catch(u){Le(e,e.return,u)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Ol(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[Ke]=e,n[xn]=a}catch(h){Le(e,e.return,h)}}var Yi=!1,ln=!1,df=!1,eg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Bx(e,n){if(e=e.containerInfo,Of=ec,e=dp(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var v=0,T=-1,z=-1,$=0,ht=0,gt=e,et=null;e:for(;;){for(var ot;gt!==a||u!==0&&gt.nodeType!==3||(T=v+u),gt!==h||o!==0&&gt.nodeType!==3||(z=v+o),gt.nodeType===3&&(v+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)et=gt,gt=ot;for(;;){if(gt===e)break e;if(et===a&&++$===u&&(T=v),et===h&&++ht===o&&(z=v),(ot=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=ot}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},ec=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var It=cr(a.type,u);e=o.getSnapshotBeforeUpdate(It,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Le(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function ng(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),o&4&&ho(5,a);break;case 1:if(Zi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Le(a,a.return,v)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Le(a,a.return,v)}}o&64&&Km(a),o&512&&po(a,a.return);break;case 3:if(Zi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(e,n)}catch(v){Le(a,a.return,v)}}break;case 27:n===null&&o&4&&tg(a);case 26:case 5:Zi(e,a),n===null&&o&4&&Jm(a),o&512&&po(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),o&4&&rg(e,a);break;case 13:Zi(e,a),o&4&&sg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qx.bind(null,a),hy(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||ln,u=Yi;var h=ln;Yi=o,(ln=n)&&!h?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),Yi=u,ln=h}break;case 30:break;default:Zi(e,a)}}function ig(e){var n=e.alternate;n!==null&&(e.alternate=null,ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&b(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,zn=!1;function ji(e,n,a){for(a=a.child;a!==null;)ag(e,n,a),a=a.sibling}function ag(e,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:ln||Ci(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ci(a,n);var o=Ye,u=zn;Ca(a.type)&&(Ye=a.stateNode,zn=!1),ji(e,n,a),Eo(a.stateNode),Ye=o,zn=u;break;case 5:ln||Ci(a,n);case 6:if(o=Ye,u=zn,Ye=null,ji(e,n,a),Ye=o,zn=u,Ye!==null)if(zn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Le(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Le(a,n,h)}break;case 18:Ye!==null&&(zn?(e=Ye,Kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ss(e)):Kg(Ye,a.stateNode));break;case 4:o=Ye,u=zn,Ye=a.stateNode.containerInfo,zn=!0,ji(e,n,a),Ye=o,zn=u;break;case 0:case 11:case 14:case 15:Sa(2,a,n),ln||Sa(4,a,n),ji(e,n,a);break;case 1:ln||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qm(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,ji(e,n,a),ln=o;break;default:ji(e,n,a)}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ss(e)}catch(a){Le(n,n.return,a)}}}function sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ss(e)}catch(a){Le(n,n.return,a)}}function Ix(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new eg),n;default:throw Error(r(435,e.tag))}}function Pl(e,n){var a=Ix(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Yx.bind(null,e,o);o.then(u,u)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ca(T.type)){Ye=T.stateNode,zn=!1;break t}break;case 5:Ye=T.stateNode,zn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));ag(h,v,u),Ye=null,zn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)og(n,e),n=n.sibling}var gi=null;function og(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),In(e),o&4&&(Sa(3,e,e.return),ho(3,e),Sa(5,e,e.return));break;case 1:Bn(n,e),In(e),o&512&&(ln||a===null||Ci(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Bn(n,e),In(e),o&512&&(ln||a===null||Ci(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ja]||h[Ke]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),En(h,o,a),h[Ke]=e,vt(h),o=h;break t;case"link":var v=o_("link","href",u).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(h=v[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;case"meta":if(v=o_("meta","content",u).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(h=v[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[Ke]=e,vt(h),o=h}e.stateNode=o}else l_(u,e.type,e.stateNode);else e.stateNode=s_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?l_(u,e.type,e.stateNode):s_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),In(e),o&512&&(ln||a===null||Ci(a,a.return)),a!==null&&o&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),In(e),o&512&&(ln||a===null||Ci(a,a.return)),e.flags&32){u=e.stateNode;try{wr(u,"")}catch(It){Le(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(df=!0);break;case 6:if(Bn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(It){Le(e,e.return,It)}}break;case 3:if(Ql=null,u=gi,gi=Zl(n.containerInfo),Bn(n,e),gi=u,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(It){Le(e,e.return,It)}df&&(df=!1,lg(e));break;case 4:o=gi,gi=Zl(e.stateNode.containerInfo),Bn(n,e),In(e),gi=o;break;case 12:Bn(n,e),In(e);break;case 31:Bn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pl(e,o)));break;case 13:Bn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pl(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Yi,ht=ln;if(Yi=$||u,ln=ht||z,Bn(n,e),ln=ht,Yi=$,In(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Yi||ln||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=z.stateNode;var gt=z.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(It){Le(z,z.return,It)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(It){Le(z,z.return,It)}}}else if(n.tag===18){if(a===null){z=n;try{var ot=z.stateNode;u?Qg(ot,!0):Qg(z.stateNode,!1)}catch(It){Le(z,z.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Pl(e,a))));break;case 19:Bn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Pl(e,o)));break;case 30:break;case 21:break;default:Bn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if($m(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=ff(e);Ol(e,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(wr(v,""),a.flags&=-33);var T=ff(e);Ol(e,T,v);break;case 3:case 4:var z=a.stateNode.containerInfo,$=ff(e);hf(e,$,z);break;default:throw Error(r(161))}}catch(ht){Le(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ur(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),ur(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ci(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:Ki(u,h,a),ho(4,h);break;case 1:if(Ki(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Le(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Fp(z[u],T)}catch($){Le(o,o.return,$)}}a&&v&64&&Km(h),po(h,h.return);break;case 27:tg(h);case 26:case 5:Ki(u,h,a),a&&o===null&&v&4&&Jm(h),po(h,h.return);break;case 12:Ki(u,h,a);break;case 31:Ki(u,h,a),a&&v&4&&rg(u,h);break;case 13:Ki(u,h,a),a&&v&4&&sg(u,h);break;case 22:h.memoizedState===null&&Ki(u,h,a),po(h,h.return);break;case 30:break;default:Ki(u,h,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(e,n,a,o),n=n.sibling}function cg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&ho(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,v=h.id,T=h.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Le(n,n.return,z)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?_i(e,n,a,o):mo(e,n):h._visibility&2?_i(e,n,a,o):(h._visibility|=2,Zr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&pf(v,n);break;case 24:_i(e,n,a,o),u&2048&&mf(n.alternate,n);break;default:_i(e,n,a,o)}}function Zr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,v=n,T=a,z=o,$=v.flags;switch(v.tag){case 0:case 11:case 15:Zr(h,v,T,z,u),ho(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?Zr(h,v,T,z,u):mo(h,v):(ht._visibility|=2,Zr(h,v,T,z,u)),u&&$&2048&&pf(v.alternate,v);break;case 24:Zr(h,v,T,z,u),u&&$&2048&&mf(v.alternate,v);break;default:Zr(h,v,T,z,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&pf(o.alternate,o);break;case 24:mo(a,o),u&2048&&mf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function Kr(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)ug(e,n,a),e=e.sibling}function ug(e,n,a){switch(e.tag){case 26:Kr(e,n,a),e.flags&go&&e.memoizedState!==null&&Ty(a,gi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e,n,a);break;case 3:case 4:var o=gi;gi=Zl(e.stateNode.containerInfo),Kr(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=go,go=16777216,Kr(e,n,a),go=o):Kr(e,n,a));break;default:Kr(e,n,a)}}function fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,e)}fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):_o(e);break;default:_o(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,e)}fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function dg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,h=o.return;if(ig(o),o===a){gn=null;break t}if(u!==null){u.return=h,gn=u;break t}gn=h}}}var Fx={getCacheForType:function(e){var n=Sn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Sn(rn).controller.signal}},Hx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,de=null,xe=0,Ue=0,Kn=null,Ma=!1,Qr=!1,gf=!1,Qi=0,Je=0,Ea=0,fr=0,_f=0,Qn=0,Jr=0,vo=null,Fn=null,vf=!1,Bl=0,pg=0,Il=1/0,Fl=null,Ta=null,hn=0,Aa=null,$r=null,Ji=0,xf=0,yf=null,mg=null,xo=0,Sf=null;function Jn(){return(Ce&2)!==0&&xe!==0?xe&-xe:O.T!==null?Rf():Hs()}function gg(){if(Qn===0)if((xe&536870912)===0||Se){var e=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function Hn(e,n,a){(e===He&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(ts(e,0),ba(e,xe,Qn,!1)),vn(e,a),((Ce&2)===0||e!==He)&&(e===He&&((Ce&2)===0&&(fr|=a),Je===4&&ba(e,xe,Qn,!1)),wi(e))}function _g(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||te(e,n),u=o?kx(e,n):Ef(e,n,!0),h=o;do{if(u===0){Qr&&!o&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Gx(a)){u=Ef(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=vo;var z=T.current.memoizedState.isDehydrated;if(z&&(ts(T,v).flags|=256),v=Ef(T,v,!1),v!==2){if(gf&&!z){T.errorRecoveryDisabledLanes|=h,fr|=h,u=4;break t}h=Fn,Fn=u,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){ts(e,0),ba(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(o,n,Qn,!Ma);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Bl+300-dt(),10<u)){if(ba(o,n,Qn,!Ma),Dt(o,0,!0)!==0)break t;Ji=n,o.timeoutHandle=jg(vg.bind(null,o,a,Fn,Fl,vf,n,Qn,fr,Jr,Ma,h,"Throttled",-0,0),u);break t}vg(o,a,Fn,Fl,vf,n,Qn,fr,Jr,Ma,h,null,-0,0)}}break}while(!0);wi(e)}function vg(e,n,a,o,u,h,v,T,z,$,ht,gt,et,ot){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ug(n,h,gt);var It=(h&62914560)===h?Bl-dt():(h&4194048)===h?pg-dt():0;if(It=Ay(gt,It),It!==null){Ji=h,e.cancelPendingCommit=It(bg.bind(null,e,n,h,a,o,u,v,T,z,ht,gt,null,et,ot)),ba(e,h,v,!$);return}}bg(e,n,h,a,o,u,v,T,z)}function Gx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!qn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,o){n&=~_f,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-$t(u),v=1<<h;o[h]=-1,u&=~v}a!==0&&Is(e,a,n)}function Hl(){return(Ce&6)===0?(yo(0),!1):!0}function Mf(){if(de!==null){if(Ue===0)var e=de.return;else e=de,Gi=nr=null,Bu(e),Xr=null,eo=0,e=de;for(;e!==null;)Zm(e.alternate,e),e=e.return;de=null}}function ts(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,Mf(),He=e,de=a=Fi(e.current,null),xe=n,Ue=0,Kn=null,Ma=!1,Qr=te(e,n),gf=!1,Jr=Qn=_f=fr=Ea=Je=0,Fn=vo=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-$t(o),h=1<<u;n|=e[u],o&=~h}return Qi=n,ol(),a}function xg(e,n){se=null,O.H=co,n===kr||n===ml?(n=Pp(),Ue=3):n===Au?(n=Pp(),Ue=4):Ue=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&(Je=1,wl(e,ii(n,e.current)))}function yg(){var e=jn.current;return e===null?!0:(xe&4194048)===xe?oi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===oi:!1}function Sg(){var e=O.H;return O.H=co,e===null?co:e}function Mg(){var e=O.A;return O.A=Fx,e}function Gl(){Je=4,Ma||(xe&4194048)!==xe&&jn.current!==null||(Qr=!0),(Ea&134217727)===0&&(fr&134217727)===0||He===null||ba(He,xe,Qn,!1)}function Ef(e,n,a){var o=Ce;Ce|=2;var u=Sg(),h=Mg();(He!==e||xe!==n)&&(Fl=null,ts(e,n)),n=!1;var v=Je;t:do try{if(Ue!==0&&de!==null){var T=de,z=Kn;switch(Ue){case 8:Mf(),v=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var $=Ue;if(Ue=0,Kn=null,es(e,T,z,$),a&&Qr){v=0;break t}break;default:$=Ue,Ue=0,Kn=null,es(e,T,z,$)}}Vx(),v=Je;break}catch(ht){xg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Gi=nr=null,Ce=o,O.H=u,O.A=h,de===null&&(He=null,xe=0,ol()),v}function Vx(){for(;de!==null;)Eg(de)}function kx(e,n){var a=Ce;Ce|=2;var o=Sg(),u=Mg();He!==e||xe!==n?(Fl=null,Il=dt()+500,ts(e,n)):Qr=te(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var h=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,es(e,n,h,1);break;case 2:case 9:if(Np(h)){Ue=0,Kn=null,Tg(n);break}n=function(){Ue!==2&&Ue!==9||He!==e||(Ue=7),wi(e)},h.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Np(h)?(Ue=0,Kn=null,Tg(n)):(Ue=0,Kn=null,es(e,n,h,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var T=de;if(v?c_(v):T.stateNode.complete){Ue=0,Kn=null;var z=T.sibling;if(z!==null)de=z;else{var $=T.return;$!==null?(de=$,Vl($)):de=null}break e}}Ue=0,Kn=null,es(e,n,h,5);break;case 6:Ue=0,Kn=null,es(e,n,h,6);break;case 8:Mf(),Je=6;break t;default:throw Error(r(462))}}Xx();break}catch(ht){xg(e,ht)}while(!0);return Gi=nr=null,O.H=o,O.A=u,Ce=a,de!==null?0:(He=null,xe=0,ol(),Je)}function Xx(){for(;de!==null&&!A();)Eg(de)}function Eg(e){var n=Ym(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Vl(e):de=n}function Tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Bu(n);default:Zm(a,n),n=de=Mp(n,Qi),n=Ym(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Vl(e):de=n}function es(e,n,a,o){Gi=nr=null,Bu(n),Xr=null,eo=0;var u=n.return;try{if(Lx(e,u,n,a,xe)){Je=1,wl(e,ii(a,e.current)),de=null;return}}catch(h){if(u!==null)throw de=u,h;Je=1,wl(e,ii(a,e.current)),de=null;return}n.flags&32768?(Se||o===1?e=!0:Qr||(xe&536870912)!==0?e=!1:(Ma=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ag(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){Ag(n,Ma);return}e=n.return;var a=Px(n.alternate,n,Qi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Je===0&&(Je=5)}function Ag(e,n){do{var a=zx(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Je=6,de=null}function bg(e,n,a,o,u,h,v,T,z){e.cancelPendingCommit=null;do kl();while(hn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=uu,di(e,a,h,v,T,z),e===He&&(de=He=null,xe=0),$r=n,Aa=e,Ji=a,xf=h,yf=u,mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jx(wt,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=Y.p,Y.p=2,v=Ce,Ce|=4;try{Bx(e,n,a)}finally{Ce=v,Y.p=u,O.T=o}}hn=1,Rg(),Cg(),wg()}}function Rg(){if(hn===1){hn=0;var e=Aa,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=Y.p;Y.p=2;var u=Ce;Ce|=4;try{og(n,e);var h=Pf,v=dp(e.containerInfo),T=h.focusedElem,z=h.selectionRange;if(v!==T&&T&&T.ownerDocument&&hp(T.ownerDocument.documentElement,T)){if(z!==null&&ru(T)){var $=z.start,ht=z.end;if(ht===void 0&&(ht=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ht,T.value.length);else{var gt=T.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),It=T.textContent.length,Jt=Math.min(z.start,It),Be=z.end===void 0?Jt:Math.min(z.end,It);!ot.extend&&Jt>Be&&(v=Be,Be=Jt,Jt=v);var q=fp(T,Jt),F=fp(T,Be);if(q&&F&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==F.node||ot.focusOffset!==F.offset)){var J=gt.createRange();J.setStart(q.node,q.offset),ot.removeAllRanges(),Jt>Be?(ot.addRange(J),ot.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),ot.addRange(J))}}}}for(gt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var pt=gt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ec=!!Of,Pf=Of=null}finally{Ce=u,Y.p=o,O.T=a}}e.current=n,hn=2}}function Cg(){if(hn===2){hn=0;var e=Aa,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Y.p;Y.p=2;var u=Ce;Ce|=4;try{ng(e,n.alternate,n)}finally{Ce=u,Y.p=o,O.T=a}}hn=3}}function wg(){if(hn===4||hn===3){hn=0,nt();var e=Aa,n=$r,a=Ji,o=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,$r=Aa=null,Dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ta=null),Rr(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=Y.p,Y.p=2,O.T=null;try{for(var h=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];h(T.value,{componentStack:T.stack})}}finally{O.T=n,Y.p=u}}(Ji&3)!==0&&kl(),wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Sf?xo++:(xo=0,Sf=e):xo=0,yo(0)}}function Dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function kl(){return Rg(),Cg(),wg(),Ug()}function Ug(){if(hn!==5)return!1;var e=Aa,n=xf;xf=0;var a=Rr(Ji),o=O.T,u=Y.p;try{Y.p=32>a?32:a,O.T=null,a=yf,yf=null;var h=Aa,v=Ji;if(hn=0,$r=Aa=null,Ji=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,hg(h.current),cg(h,h.current,v,a),Ce=T,yo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(jt,h)}catch{}return!0}finally{Y.p=u,O.T=o,Dg(e,n)}}function Lg(e,n,a){n=ii(a,n),n=Ju(e.stateNode,n,2),e=va(e,n,2),e!==null&&(vn(e,2),wi(e))}function Le(e,n,a){if(e.tag===3)Lg(e,e,a);else for(;n!==null;){if(n.tag===3){Lg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ta===null||!Ta.has(o))){e=ii(a,e),a=Nm(2),o=va(n,a,2),o!==null&&(Om(a,o,n,e),vn(o,2),wi(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Hx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(gf=!0,u.add(a),e=Wx.bind(null,e,n,a),n.then(e,e))}function Wx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(xe&a)===a&&(Je===4||Je===3&&(xe&62914560)===xe&&300>dt()-Bl?(Ce&2)===0&&ts(e,0):_f|=a,Jr===xe&&(Jr=0)),wi(e)}function Ng(e,n){n===0&&(n=un()),e=$a(e,n),e!==null&&(vn(e,n),wi(e))}function qx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(e,a)}function Yx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ng(e,a)}function jx(e,n){return Wt(e,n)}var Xl=null,ns=null,Af=!1,Wl=!1,bf=!1,Ra=0;function wi(e){e!==ns&&e.next===null&&(ns===null?Xl=ns=e:ns=ns.next=e),Wl=!0,Af||(Af=!0,Kx())}function yo(e,n){if(!bf&&Wl){bf=!0;do for(var a=!1,o=Xl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var v=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-$t(42|e)+1)-1,h&=u&~(v&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Bg(o,h))}else h=xe,h=Dt(o,o===He?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||te(o,h)||(a=!0,Bg(o,h));o=o.next}while(a);bf=!1}}function Zx(){Og()}function Og(){Wl=Af=!1;var e=0;Ra!==0&&sy()&&(e=Ra);for(var n=dt(),a=null,o=Xl;o!==null;){var u=o.next,h=Pg(o,n);h===0?(o.next=null,a===null?Xl=u:a.next=u,u===null&&(ns=a)):(a=o,(e!==0||(h&3)!==0)&&(Wl=!0)),o=u}hn!==0&&hn!==5||yo(e),Ra!==0&&(Ra=0)}function Pg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-$t(h),T=1<<v,z=u[v];z===-1?((T&a)===0||(T&o)!==0)&&(u[v]=qe(T,n)):z<=n&&(e.expiredLanes|=T),h&=~T}if(n=He,a=xe,a=Dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&L(o),Rr(a)){case 2:case 8:a=kt;break;case 32:a=wt;break;case 268435456:a=_e;break;default:a=wt}return o=zg.bind(null,e),a=Wt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kl()&&e.callbackNode!==a)return null;var o=xe;return o=Dt(e,e===He?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(_g(e,o,n),Pg(e,dt()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Bg(e,n){if(kl())return null;_g(e,n,!0)}function Kx(){ly(function(){(Ce&6)!==0?Wt(mt,Zx):Og()})}function Rf(){if(Ra===0){var e=Gr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ra=e}return Ra}function Ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function Fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Qx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Ig((u[xn]||null).action),v=o.submitter;v&&(n=(n=v[xn]||null)?Ig(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var T=new il("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ra!==0){var z=v?Fg(u,v):new FormData(u);qu(a,{pending:!0,data:z,method:u.method,action:h},null,z)}}else typeof h=="function"&&(T.preventDefault(),z=v?Fg(u,v):new FormData(u),qu(a,{pending:!0,data:z,method:u.method,action:h},h,z))},currentTarget:u}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],Jx=wf.toLowerCase(),$x=wf[0].toUpperCase()+wf.slice(1);mi(Jx,"on"+$x)}mi(gp,"onAnimationEnd"),mi(_p,"onAnimationIteration"),mi(vp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(mx,"onTransitionRun"),mi(gx,"onTransitionStart"),mi(_x,"onTransitionCancel"),mi(xp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],z=T.instance,$=T.currentTarget;if(T=T.listener,z!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=$;try{h(u)}catch(ht){sl(ht)}u.currentTarget=null,h=z}else for(v=0;v<o.length;v++){if(T=o[v],z=T.instance,$=T.currentTarget,T=T.listener,z!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=$;try{h(u)}catch(ht){sl(ht)}u.currentTarget=null,h=z}}}}function pe(e,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=e+"__bubble";a.has(o)||(Gg(n,e,2,!1),a.add(o))}function Df(e,n,a){var o=0;n&&(o|=4),Gg(a,e,o,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[ql]){e[ql]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(ty.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Df("selectionchange",!1,n))}}function Gg(e,n,a,o){switch(g_(n)){case 2:var u=Cy;break;case 8:u=wy;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=k(T),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=h=v;continue t}T=T.parentNode}}o=o.return}qd(function(){var $=h,ht=jc(a),gt=[];t:{var et=yp.get(e);if(et!==void 0){var ot=il,It=e;switch(e){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":ot=Y0;break;case"focusin":It="focus",ot=tu;break;case"focusout":It="blur",ot=tu;break;case"beforeblur":case"afterblur":ot=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=K0;break;case gp:case _p:case vp:ot=I0;break;case xp:ot=J0;break;case"scroll":case"scrollend":ot=N0;break;case"wheel":ot=tx;break;case"copy":case"cut":case"paste":ot=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Qd;break;case"toggle":case"beforetoggle":ot=nx}var Jt=(n&4)!==0,Be=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var F=$,J;F!==null;){var pt=F;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||q===null||(pt=Vs(F,q),pt!=null&&Jt.push(Mo(F,pt,J))),Be)break;F=F.return}0<Jt.length&&(et=new ot(et,It,null,a,ht),gt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==Yc&&(It=a.relatedTarget||a.fromElement)&&(k(It)||It[Pi]))break t;if((ot||et)&&(et=ht.window===ht?ht:(et=ht.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(It=a.relatedTarget||a.toElement,ot=$,It=It?k(It):null,It!==null&&(Be=c(It),Jt=It.tag,It!==Be||Jt!==5&&Jt!==27&&Jt!==6)&&(It=null)):(ot=null,It=$),ot!==It)){if(Jt=Zd,pt="onMouseLeave",q="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Qd,pt="onPointerLeave",q="onPointerEnter",F="pointer"),Be=ot==null?et:rt(ot),J=It==null?et:rt(It),et=new Jt(pt,F+"leave",ot,a,ht),et.target=Be,et.relatedTarget=J,pt=null,k(ht)===$&&(Jt=new Jt(q,F+"enter",It,a,ht),Jt.target=J,Jt.relatedTarget=Be,pt=Jt),Be=pt,ot&&It)e:{for(Jt=ey,q=ot,F=It,J=0,pt=q;pt;pt=Jt(pt))J++;pt=0;for(var Kt=F;Kt;Kt=Jt(Kt))pt++;for(;0<J-pt;)q=Jt(q),J--;for(;0<pt-J;)F=Jt(F),pt--;for(;J--;){if(q===F||F!==null&&q===F.alternate){Jt=q;break e}q=Jt(q),F=Jt(F)}Jt=null}else Jt=null;ot!==null&&Vg(gt,et,ot,Jt,!1),It!==null&&Be!==null&&Vg(gt,Be,It,Jt,!0)}}t:{if(et=$?rt($):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ae=rp;else if(ip(et))if(sp)Ae=hx;else{Ae=ux;var Vt=cx}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&qc($.elementType)&&(Ae=rp):Ae=fx;if(Ae&&(Ae=Ae(e,$))){ap(gt,Ae,a,ht);break t}Vt&&Vt(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&fn(et,"number",et.value)}switch(Vt=$?rt($):window,e){case"focusin":(ip(Vt)||Vt.contentEditable==="true")&&(Nr=Vt,su=$,Ks=null);break;case"focusout":Ks=su=Nr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,pp(gt,a,ht);break;case"selectionchange":if(px)break;case"keydown":case"keyup":pp(gt,a,ht)}var oe;if(nu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Lr?ep(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Jd&&a.locale!=="ko"&&(Lr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Lr&&(oe=Yd()):(fa=ht,Qc="value"in fa?fa.value:fa.textContent,Lr=!0)),Vt=Yl($,ye),0<Vt.length&&(ye=new Kd(ye,e,null,a,ht),gt.push({event:ye,listeners:Vt}),oe?ye.data=oe:(oe=np(a),oe!==null&&(ye.data=oe)))),(oe=ax?rx(e,a):sx(e,a))&&(ye=Yl($,"onBeforeInput"),0<ye.length&&(Vt=new Kd("onBeforeInput","beforeinput",null,a,ht),gt.push({event:Vt,listeners:ye}),Vt.data=oe)),Qx(gt,e,$,a,ht)}Hg(gt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Vs(e,a),u!=null&&o.unshift(Mo(e,u,h)),u=Vs(e,n),u!=null&&o.push(Mo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ey(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,n,a,o,u){for(var h=n._reactName,v=[];a!==null&&a!==o;){var T=a,z=T.alternate,$=T.stateNode;if(T=T.tag,z!==null&&z===o)break;T!==5&&T!==26&&T!==27||$===null||(z=$,u?($=Vs(a,h),$!=null&&v.unshift(Mo(a,$,z))):u||($=Vs(a,h),$!=null&&v.push(Mo(a,$,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function kg(e){return(typeof e=="string"?e:""+e).replace(ny,`
`).replace(iy,"")}function Xg(e,n){return n=kg(n),kg(e)===n}function ze(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wr(e,""+o);break;case"className":Fe(e,"class",o);break;case"tabIndex":Fe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(e,a,o);break;case"style":Xd(e,o,h);break;case"data":if(n!=="object"){Fe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$o(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$o(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Ge(e,"popover",o);break;case"xlinkActuate":re(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":re(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":re(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":re(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":re(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":re(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":re(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=U0.get(a)||a,Ge(e,a,o))}}function Nf(e,n,a,o,u,h){switch(a){case"style":Xd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wr(e,o):(typeof o=="number"||typeof o=="bigint")&&wr(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ge(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,h,v,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var T=h=v=u=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":v=ht;break;case"checked":z=ht;break;case"defaultChecked":$=ht;break;case"value":h=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:ze(e,n,o,ht,a,null)}}Un(e,h,T,z,$,v,u,!1);return;case"select":pe("invalid",e),o=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:ze(e,n,u,T,a,null)}n=h,a=v,e.multiple=!!o,n!=null?tn(e,!!o,n,!1):a!=null&&tn(e,!!o,a,!0);return;case"textarea":pe("invalid",e),h=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ze(e,n,v,T,a,null)}Ai(e,o,u,h);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,z,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)pe(So[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,$,o,a,null)}return;default:if(qc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Nf(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&ze(e,n,T,o,a,null))}function ay(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,T=null,z=null,$=null,ht=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=gt;default:o.hasOwnProperty(ot)||ze(e,n,ot,null,o,gt)}}for(var et in o){var ot=o[et];if(gt=a[et],o.hasOwnProperty(et)&&(ot!=null||gt!=null))switch(et){case"type":h=ot;break;case"name":u=ot;break;case"checked":$=ot;break;case"defaultChecked":ht=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&ze(e,n,et,ot,o,gt)}}An(e,v,T,z,$,ht,h,u);return;case"select":ot=v=T=et=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":ot=z;default:o.hasOwnProperty(h)||ze(e,n,h,null,o,z)}for(u in o)if(h=o[u],z=a[u],o.hasOwnProperty(u)&&(h!=null||z!=null))switch(u){case"value":et=h;break;case"defaultValue":T=h;break;case"multiple":v=h;default:h!==z&&ze(e,n,u,h,o,z)}n=T,a=v,o=ot,et!=null?tn(e,!!a,et,!1):!!o!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(e,n,T,null,o,u)}for(v in o)if(u=o[v],h=a[v],o.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&ze(e,n,v,u,o,h)}Cr(e,et,ot);return;case"option":for(var It in a)if(et=a[It],a.hasOwnProperty(It)&&et!=null&&!o.hasOwnProperty(It))switch(It){case"selected":e.selected=!1;break;default:ze(e,n,It,null,o,et)}for(z in o)if(et=o[z],ot=a[z],o.hasOwnProperty(z)&&et!==ot&&(et!=null||ot!=null))switch(z){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:ze(e,n,z,et,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!o.hasOwnProperty(Jt)&&ze(e,n,Jt,null,o,et);for($ in o)if(et=o[$],ot=a[$],o.hasOwnProperty($)&&et!==ot&&(et!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:ze(e,n,$,et,o,ot)}return;default:if(qc(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!o.hasOwnProperty(Be)&&Nf(e,n,Be,void 0,o,et);for(ht in o)et=o[ht],ot=a[ht],!o.hasOwnProperty(ht)||et===ot||et===void 0&&ot===void 0||Nf(e,n,ht,et,o,ot);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&ze(e,n,q,null,o,et);for(gt in o)et=o[gt],ot=a[gt],!o.hasOwnProperty(gt)||et===ot||et==null&&ot==null||ze(e,n,gt,et,o,ot)}function Wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,v=u.initiatorType,T=u.duration;if(h&&T&&Wg(v)){for(v=0,T=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],$=z.startTime;if($>T)break;var ht=z.transferSize,gt=z.initiatorType;ht&&Wg(gt)&&(z=z.responseEnd,v+=ht*(z<T?1:(T-$)/(z-$)))}if(--o,n+=8*(h+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,Pf=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function sy(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(cy)}:jg;function cy(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Kg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var h=a.firstChild;h;){var v=h.nextSibling,T=h.nodeName;h[ja]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);ss(n)}function Qg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function fy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function Jg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function $g(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function t_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function e_(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);b(e)}var ci=new Map,n_=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=Y.d;Y.d={f:dy,r:py,D:my,C:gy,L:_y,m:vy,X:yy,S:xy,M:Sy};function dy(){var e=$i.f(),n=Hl();return e||n}function py(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?xm(n):$i.r(e)}var is=typeof document>"u"?null:document;function i_(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),n_.has(u)||(n_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),vt(n),o.head.appendChild(n)))}}function my(e){$i.D(e),i_("dns-prefetch",e,null)}function gy(e,n){$i.C(e,n),i_("preconnect",e,n)}function _y(e,n,a){$i.L(e,n,a);var o=is;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var h=u;switch(n){case"style":h=as(e);break;case"script":h=rs(e)}ci.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(To(h))||n==="script"&&o.querySelector(Ao(h))||(n=o.createElement("link"),En(n,"link",e),vt(n),o.head.appendChild(n)))}}function vy(e,n){$i.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=rs(e)}if(!ci.has(h)&&(e=_({rel:"modulepreload",href:e},n),ci.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(h)))return}o=a.createElement("link"),En(o,"link",e),vt(o),a.head.appendChild(o)}}}function xy(e,n,a){$i.S(e,n,a);var o=is;if(o&&e){var u=W(o).hoistableStyles,h=as(e);n=n||"default";var v=u.get(h);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(To(h)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(h))&&Vf(e,a);var z=v=o.createElement("link");vt(z),En(z,"link",e),z._p=new Promise(function($,ht){z.onload=$,z.onerror=ht}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Kl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(h,v)}}}function yy(e,n){$i.X(e,n);var a=is;if(a&&e){var o=W(a).hoistableScripts,u=rs(e),h=o.get(u);h||(h=a.querySelector(Ao(u)),h||(e=_({src:e,async:!0},n),(n=ci.get(u))&&kf(e,n),h=a.createElement("script"),vt(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Sy(e,n){$i.M(e,n);var a=is;if(a&&e){var o=W(a).hoistableScripts,u=rs(e),h=o.get(u);h||(h=a.querySelector(Ao(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&kf(e,n),h=a.createElement("script"),vt(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function a_(e,n,a,o){var u=(u=Tt.current)?Zl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=W(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var h=W(u).hoistableStyles,v=h.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=u.querySelector(To(e)))&&!h._p&&(v.instance=h,v.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),h||My(u,e,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=W(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+he(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function My(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),vt(n),e.head.appendChild(n))}function rs(e){return'[src="'+he(e)+'"]'}function Ao(e){return"script[async]"+e}function s_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,vt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),En(o,"style",u),Kl(o,a.precedence,e),n.instance=o;case"stylesheet":u=as(a.href);var h=e.querySelector(To(u));if(h)return n.state.loading|=4,n.instance=h,vt(h),h;o=r_(a),(u=ci.get(u))&&Vf(o,u),h=(e.ownerDocument||e).createElement("link"),vt(h);var v=h;return v._p=new Promise(function(T,z){v.onload=T,v.onerror=z}),En(h,"link",o),n.state.loading|=4,Kl(h,a.precedence,e),n.instance=h;case"script":return h=rs(a.src),(u=e.querySelector(Ao(h)))?(n.instance=u,vt(u),u):(o=a,(u=ci.get(h))&&(o=_({},a),kf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),vt(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Kl(o,a.precedence,e));return n.instance}function Kl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function o_(e,n,a){if(Ql===null){var o=new Map,u=Ql=new Map;u.set(a,o)}else u=Ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ja]||h[Ke]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=e+v;var T=o.get(v);T?T.push(h):o.set(v,[h])}}return o}function l_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ty(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=as(o.href),h=n.querySelector(To(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,vt(h);return}h=n.ownerDocument||n,o=r_(o),(u=ci.get(u))&&Vf(o,u),h=h.createElement("link"),vt(h);var v=h;v._p=new Promise(function(T,z){v.onload=T,v.onerror=z}),En(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function Ay(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*ry());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(by,e),$l=null,Jl.call(e))}function by(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var o=a.get(null);else{a=new Map,$l.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||o,h===o&&a.set(null,u),a.set(v,u),this.count++,o=Jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Ry(e,n,a,o,u,h,v,T,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function u_(e,n,a,o,u,h,v,T,z,$,ht,gt){return e=new Ry(e,n,a,v,z,$,ht,gt,T),n=1,h===!0&&(n|=24),h=Yn(3,null,null,n),e.current=h,h.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},bu(h),e}function f_(e){return e?(e=zr,e):zr}function h_(e,n,a,o,u,h){u=f_(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=va(e,o,n),a!==null&&(Hn(a,e,n),io(a,e,n))}function d_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){d_(e,n),(e=e.alternate)&&d_(e,n)}function p_(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Hn(n,e,67108864),Wf(e,67108864)}}function m_(e){if(e.tag===13||e.tag===31){var n=Jn();n=qa(n);var a=$a(e,n);a!==null&&Hn(a,e,n),Wf(e,n)}}var ec=!0;function Cy(e,n,a,o){var u=O.T;O.T=null;var h=Y.p;try{Y.p=2,qf(e,n,a,o)}finally{Y.p=h,O.T=u}}function wy(e,n,a,o){var u=O.T;O.T=null;var h=Y.p;try{Y.p=8,qf(e,n,a,o)}finally{Y.p=h,O.T=u}}function qf(e,n,a,o){if(ec){var u=Yf(o);if(u===null)Lf(e,n,o,nc,a),__(e,o);else if(Uy(u,e,n,a,o))o.stopPropagation();else if(__(e,o),n&4&&-1<Dy.indexOf(e)){for(;u!==null;){var h=at(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=Ct(h.pendingLanes);if(v!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var z=1<<31-$t(v);T.entanglements[1]|=z,v&=~z}wi(h),(Ce&6)===0&&(Il=dt()+500,yo(0))}}break;case 31:case 13:T=$a(h,2),T!==null&&Hn(T,h,2),Hl(),Wf(h,2)}if(h=Yf(o),h===null&&Lf(e,n,o,nc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Lf(e,n,o,null,a)}}function Yf(e){return e=jc(e),jf(e)}var nc=null;function jf(e){if(nc=null,e=k(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nc=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case mt:return 2;case kt:return 8;case wt:case zt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Zf=!1,wa=null,Da=null,Ua=null,Ro=new Map,Co=new Map,La=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&p_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Uy(e,n,a,o,u){switch(n){case"focusin":return wa=wo(wa,e,n,a,o,u),!0;case"dragenter":return Da=wo(Da,e,n,a,o,u),!0;case"mouseover":return Ua=wo(Ua,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ro.set(h,wo(Ro.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Co.set(h,wo(Co.get(h)||null,e,n,a,o,u)),!0}return!1}function v_(e){var n=k(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ya(e.priority,function(){m_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ya(e.priority,function(){m_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ic(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yc=o,a.target.dispatchEvent(o),Yc=null}else return n=at(a),n!==null&&p_(n),e.blockedOn=a,!1;n.shift()}return!0}function x_(e,n,a){ic(e)&&a.delete(n)}function Ly(){Zf=!1,wa!==null&&ic(wa)&&(wa=null),Da!==null&&ic(Da)&&(Da=null),Ua!==null&&ic(Ua)&&(Ua=null),Ro.forEach(x_),Co.forEach(x_)}function ac(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ly)))}var rc=null;function y_(e){rc!==e&&(rc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var h=at(a);h!==null&&(e.splice(n,3),n-=3,qu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ss(e){function n(z){return ac(z,e)}wa!==null&&ac(wa,e),Da!==null&&ac(Da,e),Ua!==null&&ac(Ua,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<La.length;a++){var o=La[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],v=u[xn]||null;if(typeof h=="function")v||y_(a);else if(v){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[xn]||null)T=v.formAction;else if(jf(u)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),y_(a)}}}function S_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Kf(e){this._internalRoot=e}sc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();h_(a,o,e,n,null,null)},sc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;h_(e.current,2,null,e,null,null),Hl(),n[Pi]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&v_(e)}};var M_=t.version;if(M_!=="19.2.6")throw Error(r(527,M_,"19.2.6"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ny={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{jt=oc.inject(Ny),Xt=oc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=wm,h=Dm,v=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=u_(e,1,!1,null,null,a,o,null,u,h,v,S_),e[Pi]=n.current,Uf(e),new Kf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=wm,v=Dm,T=Um,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=u_(e,1,!0,n,a??null,o,u,z,h,v,T,S_),n.context=f_(null),a=n.current,o=Jn(),o=qa(o),u=_a(o),u.callback=null,va(a,u,o),a=o,n.current.lanes=a,vn(n,a),wi(n),e[Pi]=n.current,Uf(e),new sc(n)},Uo.version="19.2.6",Uo}var L_;function ky(){if(L_)return $f.exports;L_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=Vy(),$f.exports}var Xy=ky();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=kn.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...d},p)=>kn.createElement("svg",{ref:p,...qy,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:Gv("lucide",l),...d},[...f.map(([m,g])=>kn.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=(s,t)=>{const i=kn.forwardRef(({className:r,...l},c)=>kn.createElement(Yy,{ref:c,iconNode:t,className:Gv(`lucide-${Wy(s)}`,r),...l}));return i.displayName=`${s}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=qo("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=qo("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=qo("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=qo("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=qo("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Qy=["1011001 1100110 1001111 0100100","0110101 0011010 1110001 1011011","1101001 0101110 1001001 0110110"];function O_({text:s="customer operations"}){return yt.jsxs("div",{className:"binary-separator","aria-hidden":"true",children:[yt.jsx("span",{className:"binary-separator__edge"}),yt.jsx("div",{className:"binary-separator__track",children:Qy.map((t,i)=>yt.jsxs("span",{className:`binary-separator__row binary-separator__row--${i+1}`,children:[t," ",s," ",t]},t))}),yt.jsx("span",{className:"binary-separator__edge"})]})}function ih({title:s,items:t}){return yt.jsxs("article",{className:"info-block",children:[yt.jsx("h3",{children:s}),yt.jsx("ul",{children:t.map(i=>yt.jsx("li",{children:i},i))})]})}function Jy({done:s}){return yt.jsxs("div",{className:`intro${s?" intro--done":""}`,"aria-hidden":s,children:[yt.jsxs("div",{className:"intro__mark",children:[yt.jsx("span",{children:"P"}),yt.jsx("span",{children:"S"})]}),yt.jsx("div",{className:"intro__rail intro__rail--top"}),yt.jsx("div",{className:"intro__rail intro__rail--right"}),yt.jsx("div",{className:"intro__rail intro__rail--bottom"}),yt.jsx("div",{className:"intro__rail intro__rail--left"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="171",$y=0,P_=1,tS=2,kv=1,eS=2,ra=3,Xa=0,Wn=1,hi=2,Va=0,Ts=1,z_=2,B_=3,I_=4,nS=5,yr=100,iS=101,aS=102,rS=103,sS=104,oS=200,lS=201,cS=202,uS=203,Fh=204,Hh=205,fS=206,hS=207,dS=208,pS=209,mS=210,gS=211,_S=212,vS=213,xS=214,Gh=0,Vh=1,kh=2,Rs=3,Xh=4,Wh=5,qh=6,Yh=7,Xv=0,yS=1,SS=2,ka=0,MS=1,ES=2,TS=3,AS=4,bS=5,RS=6,CS=7,Wv=300,Cs=301,ws=302,jh=303,Zh=304,Gc=306,Kh=1e3,Mr=1001,Qh=1002,Ei=1003,wS=1004,lc=1005,Ui=1006,ah=1007,Er=1008,ca=1009,qv=1010,Yv=1011,Vo=1012,Dd=1013,Tr=1014,sa=1015,Yo=1016,Ud=1017,Ld=1018,Ds=1020,jv=35902,Zv=1021,Kv=1022,Mi=1023,Qv=1024,Jv=1025,As=1026,Us=1027,$v=1028,Nd=1029,t0=1030,Od=1031,Pd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,rd=37808,sd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,zc=36492,xd=36494,yd=36495,e0=36283,Sd=36284,Md=36285,Ed=36286,DS=3200,US=3201,n0=0,LS=1,Ha="",Vn="srgb",Ls="srgb-linear",Ic="linear",Ie="srgb",os=7680,F_=519,NS=512,OS=513,PS=514,i0=515,zS=516,BS=517,IS=518,FS=519,H_=35044,G_="300 es",oa=2e3,Fc=2001;class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=Math.PI/180,Td=180/Math.PI;function Ps(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function HS(s,t){return(s%t+t)%t}function sh(s,t,i){return(1-i)*s+i*t}function Lo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,i=0){qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,r,l,c,f,d,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m)}set(t,i,r,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],y=r[2],S=r[5],E=r[8],R=l[0],M=l[3],x=l[6],B=l[1],U=l[4],w=l[7],j=l[2],G=l[5],P=l[8];return c[0]=f*R+d*B+p*j,c[3]=f*M+d*U+p*G,c[6]=f*x+d*w+p*P,c[1]=m*R+g*B+_*j,c[4]=m*M+g*U+_*G,c[7]=m*x+g*w+_*P,c[2]=y*R+S*B+E*j,c[5]=y*M+S*U+E*G,c[8]=y*x+S*w+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-r*c*g+r*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,y=d*p-g*c,S=m*c-f*p,E=i*_+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(l*m-g*r)*R,t[2]=(d*r-l*f)*R,t[3]=y*R,t[4]=(g*i-l*p)*R,t[5]=(l*c-d*i)*R,t[6]=S*R,t[7]=(r*p-m*i)*R,t[8]=(f*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(oh.makeScale(t,i)),this}rotate(t){return this.premultiply(oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new le;function a0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function GS(){const s=Hc("canvas");return s.style.display="block",s}const V_={};function Ss(s){s in V_||(V_[s]=!0,console.warn(s))}function VS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function kS(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function XS(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const k_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ie&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Ic:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:r,transfer:Ic,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),s}const Re=WS();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class qS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=Hc("canvas")),ls.width=t.width,ls.height=t.height;const r=ls.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ls}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let YS=0;class r0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(lh(l[f].image)):c.push(lh(l[f]))}else c=lh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function lh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jS=0;class On extends Os{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=Mr,l=Mr,c=Ui,f=Er,d=Mi,p=ca,m=On.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ps(),this.name="",this.source=new r0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Wv;On.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],y=p[1],S=p[5],E=p[9],R=p[2],M=p[6],x=p[10];if(Math.abs(g-y)<.01&&Math.abs(_-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,w=(S+1)/2,j=(x+1)/2,G=(g+y)/4,P=(_+R)/4,K=(E+M)/4;return U>w&&U>j?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=G/r,c=P/r):w>j?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=G/l,c=K/l):j<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),r=P/c,l=K/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-E)*(M-E)+(_-R)*(_-R)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(_-R)/B,this.z=(y-g)/B,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZS extends Os{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new On(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new r0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends ZS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class s0 extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class KS extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],R=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=R;return}if(_!==R||p!==y||m!==S||g!==E){let M=1-d;const x=p*y+m*S+g*E+_*R,B=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const j=Math.sqrt(U),G=Math.atan2(j,x*B);M=Math.sin(M*G)/j,d=Math.sin(d*G)/j}const w=d*B;if(p=p*M+y*w,m=m*M+S*w,g=g*M+E*w,_=_*M+R*w,M===1-d){const j=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=j,m*=j,g*=j,_*=j}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*_+p*S-m*y,t[i+1]=p*E+g*y+m*_-d*S,t[i+2]=m*E+g*S+d*y-p*_,t[i+3]=g*E-d*_-p*y-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(c/2),y=p(r/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=y*g*_+m*S*E,this._y=m*S*_-y*g*E,this._z=m*g*E+y*S*_,this._w=m*g*_-y*S*E;break;case"YXZ":this._x=y*g*_+m*S*E,this._y=m*S*_-y*g*E,this._z=m*g*E-y*S*_,this._w=m*g*_+y*S*E;break;case"ZXY":this._x=y*g*_-m*S*E,this._y=m*S*_+y*g*E,this._z=m*g*E+y*S*_,this._w=m*g*_-y*S*E;break;case"ZYX":this._x=y*g*_-m*S*E,this._y=m*S*_+y*g*E,this._z=m*g*E-y*S*_,this._w=m*g*_+y*S*E;break;case"YZX":this._x=y*g*_+m*S*E,this._y=m*S*_+y*g*E,this._z=m*g*E-y*S*_,this._w=m*g*_-y*S*E;break;case"XZY":this._x=y*g*_-m*S*E,this._y=m*S*_-y*g*E,this._z=m*g*E+y*S*_,this._w=m*g*_+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],y=r+d+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-r*m,this._z=c*g+f*m+r*p-l*d,this._w=f*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=f*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(W_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(W_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-d*g,this.y=r+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new Q,W_=new jo;class Zo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),uc.subVectors(this.max,No),cs.subVectors(t.a,No),us.subVectors(t.b,No),fs.subVectors(t.c,No),Oa.subVectors(us,cs),Pa.subVectors(fs,us),hr.subVectors(cs,fs);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-hr.z,hr.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,hr.z,0,-hr.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-hr.y,hr.x,0];return!uh(i,cs,us,fs,uc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,cs,us,fs,uc))?!1:(fc.crossVectors(Oa,Pa),i=[fc.x,fc.y,fc.z],uh(i,cs,us,fs,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],vi=new Q,cc=new Zo,cs=new Q,us=new Q,fs=new Q,Oa=new Q,Pa=new Q,hr=new Q,No=new Q,uc=new Q,fc=new Q,dr=new Q;function uh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){dr.fromArray(s,c);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),p=t.dot(dr),m=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const QS=new Zo,Oo=new Q,fh=new Q;class zd{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):QS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(fh)),this.expandByPoint(Oo.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Q,hh=new Q,hc=new Q,za=new Q,dh=new Q,dc=new Q,ph=new Q;class JS{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hh.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),za.copy(this.origin).sub(hh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(hc),d=za.dot(this.direction),p=-za.dot(hc),m=za.lengthSq(),g=Math.abs(1-f*f);let _,y,S,E;if(g>0)if(_=f*p-d,y=f*d-p,E=c*g,_>=0)if(y>=-E)if(y<=E){const R=1/g;_*=R,y*=R,S=_*(_+f*y+2*d)+y*(f*_+y+2*p)+m}else y=c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-f*c+d)),y=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(_=Math.max(0,-(f*c+d)),y=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+y*(y+2*p)+m);else y=f>0?-c:c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(hh).addScaledVector(hc,y),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,c){dh.subVectors(i,t),dc.subVectors(r,t),ph.crossVectors(dh,dc);let f=this.direction.dot(ph),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;za.subVectors(this.origin,t);const p=d*this.direction.dot(dc.crossVectors(za,dc));if(p<0)return null;const m=d*this.direction.dot(dh.cross(za));if(m<0||p+m>f)return null;const g=-d*za.dot(ph);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,c,f,d,p,m,g,_,y,S,E,R,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m,g,_,y,S,E,R,M)}set(t,i,r,l,c,f,d,p,m,g,_,y,S,E,R,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=p,x[2]=m,x[6]=g,x[10]=_,x[14]=y,x[3]=S,x[7]=E,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),c=1/hs.setFromMatrixColumn(t,1).length(),f=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*_,E=d*g,R=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+E*m,i[5]=y-R*m,i[9]=-d*p,i[2]=R-y*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*g,S=p*_,E=m*g,R=m*_;i[0]=y+R*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=R+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*g,S=p*_,E=m*g,R=m*_;i[0]=y-R*d,i[4]=-f*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=R-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*g,S=f*_,E=d*g,R=d*_;i[0]=p*g,i[4]=E*m-S,i[8]=y*m+R,i[1]=p*_,i[5]=R*m+y,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,S=f*m,E=d*p,R=d*m;i[0]=p*g,i[4]=R-y*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=S*_+E,i[10]=y-R*_}else if(t.order==="XZY"){const y=f*p,S=f*m,E=d*p,R=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=y*_+R,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=R*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose($S,t,tM)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ba.crossVectors(r,$n),Ba.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ba.crossVectors(r,$n)),Ba.normalize(),pc.crossVectors($n,Ba),l[0]=Ba.x,l[4]=pc.x,l[8]=$n.x,l[1]=Ba.y,l[5]=pc.y,l[9]=$n.y,l[2]=Ba.z,l[6]=pc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],y=r[9],S=r[13],E=r[2],R=r[6],M=r[10],x=r[14],B=r[3],U=r[7],w=r[11],j=r[15],G=l[0],P=l[4],K=l[8],D=l[12],C=l[1],H=l[5],ct=l[9],st=l[13],tt=l[2],ut=l[6],O=l[10],Y=l[14],X=l[3],xt=l[7],At=l[11],N=l[15];return c[0]=f*G+d*C+p*tt+m*X,c[4]=f*P+d*H+p*ut+m*xt,c[8]=f*K+d*ct+p*O+m*At,c[12]=f*D+d*st+p*Y+m*N,c[1]=g*G+_*C+y*tt+S*X,c[5]=g*P+_*H+y*ut+S*xt,c[9]=g*K+_*ct+y*O+S*At,c[13]=g*D+_*st+y*Y+S*N,c[2]=E*G+R*C+M*tt+x*X,c[6]=E*P+R*H+M*ut+x*xt,c[10]=E*K+R*ct+M*O+x*At,c[14]=E*D+R*st+M*Y+x*N,c[3]=B*G+U*C+w*tt+j*X,c[7]=B*P+U*H+w*ut+j*xt,c[11]=B*K+U*ct+w*O+j*At,c[15]=B*D+U*st+w*Y+j*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],y=t[10],S=t[14],E=t[3],R=t[7],M=t[11],x=t[15];return E*(+c*p*_-l*m*_-c*d*y+r*m*y+l*d*S-r*p*S)+R*(+i*p*S-i*m*y+c*f*y-l*f*S+l*m*g-c*p*g)+M*(+i*m*_-i*d*S-c*f*_+r*f*S+c*d*g-r*m*g)+x*(-l*d*g-i*p*_+i*d*y+l*f*_-r*f*y+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],y=t[10],S=t[11],E=t[12],R=t[13],M=t[14],x=t[15],B=_*M*m-R*y*m+R*p*S-d*M*S-_*p*x+d*y*x,U=E*y*m-g*M*m-E*p*S+f*M*S+g*p*x-f*y*x,w=g*R*m-E*_*m+E*d*S-f*R*S-g*d*x+f*_*x,j=E*_*p-g*R*p-E*d*y+f*R*y+g*d*M-f*_*M,G=i*B+r*U+l*w+c*j;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return t[0]=B*P,t[1]=(R*y*c-_*M*c-R*l*S+r*M*S+_*l*x-r*y*x)*P,t[2]=(d*M*c-R*p*c+R*l*m-r*M*m-d*l*x+r*p*x)*P,t[3]=(_*p*c-d*y*c-_*l*m+r*y*m+d*l*S-r*p*S)*P,t[4]=U*P,t[5]=(g*M*c-E*y*c+E*l*S-i*M*S-g*l*x+i*y*x)*P,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*x-i*p*x)*P,t[7]=(f*y*c-g*p*c+g*l*m-i*y*m-f*l*S+i*p*S)*P,t[8]=w*P,t[9]=(E*_*c-g*R*c-E*r*S+i*R*S+g*r*x-i*_*x)*P,t[10]=(f*R*c-E*d*c+E*r*m-i*R*m-f*r*x+i*d*x)*P,t[11]=(g*d*c-f*_*c-g*r*m+i*_*m+f*r*S-i*d*S)*P,t[12]=j*P,t[13]=(g*R*l-E*_*l+E*r*y-i*R*y-g*r*M+i*_*M)*P,t[14]=(E*d*l-f*R*l-E*r*p+i*R*p+f*r*M-i*d*M)*P,t[15]=(f*_*l-g*d*l+g*r*p-i*_*p-f*r*y+i*d*y)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,y=c*m,S=c*g,E=c*_,R=f*g,M=f*_,x=d*_,B=p*m,U=p*g,w=p*_,j=r.x,G=r.y,P=r.z;return l[0]=(1-(R+x))*j,l[1]=(S+w)*j,l[2]=(E-U)*j,l[3]=0,l[4]=(S-w)*G,l[5]=(1-(y+x))*G,l[6]=(M+B)*G,l[7]=0,l[8]=(E+U)*P,l[9]=(M-B)*P,l[10]=(1-(y+R))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const m=1/c,g=1/f,_=1/d;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let S,E;if(d===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Fc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(f-c),y=(i+t)*m,S=(r+l)*g;let E,R;if(d===oa)E=(f+c)*_,R=-2*_;else if(d===Fc)E=c*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new Q,xi=new Ze,$S=new Q(0,0,0),tM=new Q(1,1,1),Ba=new Q,pc=new Q,$n=new Q,q_=new Ze,Y_=new jo;class Ni{constructor(t=0,i=0,r=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eM=0;const j_=new Q,ds=new jo,na=new Ze,mc=new Q,Po=new Q,nM=new Q,iM=new jo,Z_=new Q(1,0,0),K_=new Q(0,1,0),Q_=new Q(0,0,1),J_={type:"added"},aM={type:"removed"},ps={type:"childadded",child:null},mh={type:"childremoved",child:null};class wn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Q,i=new Ni,r=new jo,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,i){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?mc.copy(t):mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Po,mc,this.up):na.lookAt(mc,Po,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(na),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(aM),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,nM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,iM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),y=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new Q,ia=new Q,gh=new Q,aa=new Q,ms=new Q,gs=new Q,$_=new Q,_h=new Q,vh=new Q,xh=new Q,yh=new $e,Sh=new $e,Mh=new $e;class Si{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){yi.subVectors(l,i),ia.subVectors(r,i),gh.subVectors(t,i);const f=yi.dot(yi),d=yi.dot(ia),p=yi.dot(gh),m=ia.dot(ia),g=ia.dot(gh),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(m*p-d*g)*y,E=(f*g-d*p)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,c,f,d,p){return this.getBarycoord(t,i,r,l,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,aa.x),p.addScaledVector(f,aa.y),p.addScaledVector(d,aa.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return yh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),yh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,r),Mh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(yh,c.x),f.addScaledVector(Sh,c.y),f.addScaledVector(Mh,c.z),f}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),ia.subVectors(t,i),yi.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;ms.subVectors(l,r),gs.subVectors(c,r),_h.subVectors(t,r);const p=ms.dot(_h),m=gs.dot(_h);if(p<=0&&m<=0)return i.copy(r);vh.subVectors(t,l);const g=ms.dot(vh),_=gs.dot(vh);if(g>=0&&_<=g)return i.copy(l);const y=p*_-g*m;if(y<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ms,f);xh.subVectors(t,c);const S=ms.dot(xh),E=gs.dot(xh);if(E>=0&&S<=E)return i.copy(c);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(gs,d);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return $_.subVectors(c,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector($_,d);const x=1/(M+R+y);return f=R*x,d=y*x,i.copy(r).addScaledVector(ms,f).addScaledVector(gs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Eh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=HS(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Eh(f,c,t+1/3),this.g=Eh(f,c,t),this.b=Eh(f,c,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=Vn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Vn){const r=l0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return Re.fromWorkingColorSpace(Cn.copy(this),t),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Vn){Re.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==Vn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(gc);const r=sh(Ia.h,gc.h,i),l=sh(Ia.s,gc.s,i),c=sh(Ia.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new we;we.NAMES=l0;let rM=0;class Ko extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Ts,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Hh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==Hh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Io extends Ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new Q,_c=new qt;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=H_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H_&&(t.usage=this.usage),t}}class c0 extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class u0 extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ei extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let sM=0;const ui=new Ze,Th=new wn,_s=new Q,ti=new Zo,zo=new Zo,_n=new Q;class ua extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a0(t)?u0:c0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Th.lookAt(t),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ei(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ti.min,zo.min),ti.expandByPoint(_n),_n.addVectors(ti.max,zo.max),ti.expandByPoint(_n)):(ti.expandByPoint(zo.min),ti.expandByPoint(zo.max))}ti.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(_s.fromBufferAttribute(t,m),_n.add(_s)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new Q,p[K]=new Q;const m=new Q,g=new Q,_=new Q,y=new qt,S=new qt,E=new qt,R=new Q,M=new Q;function x(K,D,C){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),y.fromBufferAttribute(c,K),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(m),_.sub(m),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(H),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),d[K].add(R),d[D].add(R),d[C].add(R),p[K].add(M),p[D].add(M),p[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let K=0,D=B.length;K<D;++K){const C=B[K],H=C.start,ct=C.count;for(let st=H,tt=H+ct;st<tt;st+=3)x(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new Q,w=new Q,j=new Q,G=new Q;function P(K){j.fromBufferAttribute(l,K),G.copy(j);const D=d[K];U.copy(D),U.sub(j.multiplyScalar(j.dot(D))).normalize(),w.crossVectors(G,D);const H=w.dot(p[K])<0?-1:1;f.setXYZW(K,U.x,U.y,U.z,H)}for(let K=0,D=B.length;K<D;++K){const C=B[K],H=C.start,ct=C.count;for(let st=H,tt=H+ct;st<tt;st+=3)P(t.getX(st+0)),P(t.getX(st+1)),P(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new Q,c=new Q,f=new Q,d=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),R=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,y=new m.constructor(p.length*g);let S=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*g;for(let x=0;x<g;x++)y[E++]=m[S++]}return new Li(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ua,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const y=m[g],S=t(y,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,y=m.length;_<y;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tv=new Ze,pr=new JS,vc=new zd,ev=new Q,xc=new Q,yc=new Q,Sc=new Q,Ah=new Q,Mc=new Q,nv=new Q,Ec=new Q;class Xn extends wn{constructor(t=new ua,i=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Mc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Ah.fromBufferAttribute(_,t),f?Mc.addScaledVector(Ah,g):Mc.addScaledVector(Ah.sub(i),g))}i.add(Mc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(vc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(vc,ev)===null||pr.origin.distanceToSquared(ev)>(t.far-t.near)**2))&&(tv.copy(c).invert(),pr.copy(t.ray).applyMatrix4(tv),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=f[M.materialIndex],B=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=B,j=U;w<j;w+=3){const G=d.getX(w),P=d.getX(w+1),K=d.getX(w+2);l=Tc(this,x,t,r,m,g,_,G,P,K),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const B=d.getX(M),U=d.getX(M+1),w=d.getX(M+2);l=Tc(this,f,t,r,m,g,_,B,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=f[M.materialIndex],B=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=B,j=U;w<j;w+=3){const G=w,P=w+1,K=w+2;l=Tc(this,x,t,r,m,g,_,G,P,K),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const B=M,U=M+1,w=M+2;l=Tc(this,f,t,r,m,g,_,B,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function oM(s,t,i,r,l,c,f,d){let p;if(t.side===Wn?p=r.intersectTriangle(f,c,l,!0,d):p=r.intersectTriangle(l,c,f,t.side===Xa,d),p===null)return null;Ec.copy(d),Ec.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Ec);return m<i.near||m>i.far?null:{distance:m,point:Ec.clone(),object:s}}function Tc(s,t,i,r,l,c,f,d,p,m){s.getVertexPosition(d,xc),s.getVertexPosition(p,yc),s.getVertexPosition(m,Sc);const g=oM(s,t,i,r,xc,yc,Sc,nv);if(g){const _=new Q;Si.getBarycoord(nv,xc,yc,Sc,_),l&&(g.uv=Si.getInterpolatedAttribute(l,d,p,m,_,new qt)),c&&(g.uv1=Si.getInterpolatedAttribute(c,d,p,m,_,new qt)),f&&(g.normal=Si.getInterpolatedAttribute(f,d,p,m,_,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Q,materialIndex:0};Si.getNormal(xc,yc,Sc,y.normal),g.face=y,g.barycoord=_}return g}class zs extends ua{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new ei(m,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(_,2));function E(R,M,x,B,U,w,j,G,P,K,D){const C=w/P,H=j/K,ct=w/2,st=j/2,tt=G/2,ut=P+1,O=K+1;let Y=0,X=0;const xt=new Q;for(let At=0;At<O;At++){const N=At*H-st;for(let it=0;it<ut;it++){const Mt=it*C-ct;xt[R]=Mt*B,xt[M]=N*U,xt[x]=tt,m.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[x]=G>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(it/P),_.push(1-At/K),Y+=1}}for(let At=0;At<K;At++)for(let N=0;N<P;N++){const it=y+N+ut*At,Mt=y+N+ut*(At+1),Z=y+(N+1)+ut*(At+1),ft=y+(N+1)+ut*At;p.push(it,Mt,ft),p.push(Mt,Z,ft),X+=6}d.addGroup(S,X,D),S+=X,y+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Ns(s[i]);for(const l in r)t[l]=r[l]}return t}function lM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function f0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const cM={clone:Ns,merge:Nn};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=lM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new Q,iv=new qt,av=new qt;class fi extends h0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,iv,av),i.subVectors(av,iv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class hM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(vs,xs,t,i);l.layers=this.layers,this.add(l);const c=new fi(vs,xs,t,i);c.layers=this.layers,this.add(c);const f=new fi(vs,xs,t,i);f.layers=this.layers,this.add(f);const d=new fi(vs,xs,t,i);d.layers=this.layers,this.add(d);const p=new fi(vs,xs,t,i);p.layers=this.layers,this.add(p);const m=new fi(vs,xs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,y,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class d0 extends On{constructor(t,i,r,l,c,f,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Cs,super(t,i,r,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new d0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ui}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zs(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Va});c.uniforms.tEquirect.value=i;const f=new Xn(l,c),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ui),new hM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}let pM=class extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};const bh=new Q,mM=new Q,gM=new le;class vr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=bh.subVectors(r,i).cross(mM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||gM.getNormalMatrix(t),l=this.coplanarPoint(bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new zd,Ac=new Q;class Bd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,c=new vr,f=new vr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],y=l[7],S=l[8],E=l[9],R=l[10],M=l[11],x=l[12],B=l[13],U=l[14],w=l[15];if(r[0].setComponents(p-c,y-m,M-S,w-x).normalize(),r[1].setComponents(p+c,y+m,M+S,w+x).normalize(),r[2].setComponents(p+f,y+g,M+E,w+B).normalize(),r[3].setComponents(p-f,y-g,M-E,w-B).normalize(),r[4].setComponents(p-d,y-_,M-R,w-U).normalize(),i===oa)r[5].setComponents(p+d,y+_,M+R,w+U).normalize();else if(i===Fc)r[5].setComponents(d,_,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ga extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class rv extends On{constructor(t,i,r,l,c,f,d,p,m){super(t,i,r,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class p0 extends On{constructor(t,i,r,l,c,f,d,p,m,g=As){if(g!==As&&g!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===As&&(r=Tr),r===void 0&&g===Us&&(r=Ds),super(null,l,c,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=p!==void 0?p:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(c-1);const g=r[l],y=r[l+1]-g,S=(f-g)/y;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new qt:new Q);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i){const r=new Q,l=[],c=[],f=[],d=new Q,p=new Ze;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Q)}c[0]=new Q,f[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),y<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Id extends Oi{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new qt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=p-this.aX,S=m-this.aY;p=y*g-S*_+this.aX,m=y*_+S*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _M extends Id{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let s=0,t=0,i=0,r=0;function l(c,f,d,p){s=c,t=d,i=-3*c+3*f-2*d-p,r=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,g,_){let y=(f-c)/m-(d-c)/(m+g)+(d-f)/g,S=(d-f)/g-(p-f)/(g+_)+(p-d)/_;y*=g,S*=g,l(f,d,y,S)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+r*d}}}const bc=new Q,Rh=new Fd,Ch=new Fd,wh=new Fd;class vM extends Oi{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new Q){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(bc.subVectors(l[0],l[1]).add(l[0]),m=bc);const _=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(bc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=bc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),R=Math.pow(_.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(g),S);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),Rh.initNonuniformCatmullRom(m.x,_.x,y.x,g.x,E,R,M),Ch.initNonuniformCatmullRom(m.y,_.y,y.y,g.y,E,R,M),wh.initNonuniformCatmullRom(m.z,_.z,y.z,g.z,E,R,M)}else this.curveType==="catmullrom"&&(Rh.initCatmullRom(m.x,_.x,y.x,g.x,this.tension),Ch.initCatmullRom(m.y,_.y,y.y,g.y,this.tension),wh.initCatmullRom(m.z,_.z,y.z,g.z,this.tension));return r.set(Rh.calc(p),Ch.calc(p),wh.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sv(s,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,d=s*s,p=s*d;return(2*i-2*r+c+f)*p+(-3*i+3*r-2*c-f)*d+c*s+i}function xM(s,t){const i=1-s;return i*i*t}function yM(s,t){return 2*(1-s)*s*t}function SM(s,t){return s*s*t}function Fo(s,t,i,r){return xM(s,t)+yM(s,i)+SM(s,r)}function MM(s,t){const i=1-s;return i*i*i*t}function EM(s,t){const i=1-s;return 3*i*i*s*t}function TM(s,t){return 3*(1-s)*s*s*t}function AM(s,t){return s*s*s*t}function Ho(s,t,i,r,l){return MM(s,t)+EM(s,i)+TM(s,r)+AM(s,l)}class m0 extends Oi{constructor(t=new qt,i=new qt,r=new qt,l=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new qt){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Ho(t,l.x,c.x,f.x,d.x),Ho(t,l.y,c.y,f.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bM extends Oi{constructor(t=new Q,i=new Q,r=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Q){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Ho(t,l.x,c.x,f.x,d.x),Ho(t,l.y,c.y,f.y,d.y),Ho(t,l.z,c.z,f.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class g0 extends Oi{constructor(t=new qt,i=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new qt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RM extends Oi{constructor(t=new Q,i=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Q){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _0 extends Oi{constructor(t=new qt,i=new qt,r=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new qt){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Fo(t,l.x,c.x,f.x),Fo(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class CM extends Oi{constructor(t=new Q,i=new Q,r=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Q){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Fo(t,l.x,c.x,f.x),Fo(t,l.y,c.y,f.y),Fo(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v0 extends Oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new qt){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return r.set(sv(d,p.x,m.x,g.x,_.x),sv(d,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new qt().fromArray(l))}return this}}var ov=Object.freeze({__proto__:null,ArcCurve:_M,CatmullRomCurve3:vM,CubicBezierCurve:m0,CubicBezierCurve3:bM,EllipseCurve:Id,LineCurve:g0,LineCurve3:RM,QuadraticBezierCurve:_0,QuadraticBezierCurve3:CM,SplineCurve:v0});class wM extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ov[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const f=l[c]-r,d=this.curves[c],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const g=p[m];r&&r.equals(g)||(i.push(g),r=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new ov[l.type]().fromJSON(l))}return this}}class lv extends wM{constructor(t){super(),this.type="Path",this.currentPoint=new qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,r=t.length;i<r;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const r=new g0(this.currentPoint.clone(),new qt(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,r,l){const c=new _0(this.currentPoint.clone(),new qt(t,i),new qt(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(t,i,r,l,c,f){const d=new m0(this.currentPoint.clone(),new qt(t,i),new qt(r,l),new qt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),r=new v0(i);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,r,l,c,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,r,l,c,f),this}absarc(t,i,r,l,c,f){return this.absellipse(t,i,r,r,l,c,f),this}ellipse(t,i,r,l,c,f,d,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,i+g,r,l,c,f,d,p),this}absellipse(t,i,r,l,c,f,d,p){const m=new Id(t,i,r,l,c,f,d,p);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class x0 extends lv{constructor(t){super(t),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(new lv().fromJSON(l))}return this}}const DM={triangulate:function(s,t,i=2){const r=t&&t.length,l=r?t[0]*i:s.length;let c=y0(s,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,p,m,g,_,y,S;if(r&&(c=PM(s,t,c,i)),s.length>80*i){d=m=s[0],p=g=s[1];for(let E=i;E<l;E+=i)_=s[E],y=s[E+1],_<d&&(d=_),y<p&&(p=y),_>m&&(m=_),y>g&&(g=y);S=Math.max(m-d,g-p),S=S!==0?32767/S:0}return ko(c,f,i,d,p,S,0),f}};function y0(s,t,i,r,l){let c,f;if(l===qM(s,t,i,r)>0)for(c=t;c<i;c+=r)f=cv(c,s[c],s[c+1],f);else for(c=i-r;c>=t;c-=r)f=cv(c,s[c],s[c+1],f);return f&&Vc(f,f.next)&&(Wo(f),f=f.next),f}function br(s,t){if(!s)return s;t||(t=s);let i=s,r;do if(r=!1,!i.steiner&&(Vc(i,i.next)||je(i.prev,i,i.next)===0)){if(Wo(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ko(s,t,i,r,l,c,f){if(!s)return;!f&&c&&HM(s,r,l,c);let d=s,p,m;for(;s.prev!==s.next;){if(p=s.prev,m=s.next,c?LM(s,r,l,c):UM(s)){t.push(p.i/i|0),t.push(s.i/i|0),t.push(m.i/i|0),Wo(s),s=m.next,d=m.next;continue}if(s=m,s===d){f?f===1?(s=NM(br(s),t,i),ko(s,t,i,r,l,c,2)):f===2&&OM(s,t,i,r,l,c):ko(br(s),t,i,r,l,c,1);break}}}function UM(s){const t=s.prev,i=s,r=s.next;if(je(t,i,r)>=0)return!1;const l=t.x,c=i.x,f=r.x,d=t.y,p=i.y,m=r.y,g=l<c?l<f?l:f:c<f?c:f,_=d<p?d<m?d:m:p<m?p:m,y=l>c?l>f?l:f:c>f?c:f,S=d>p?d>m?d:m:p>m?p:m;let E=r.next;for(;E!==t;){if(E.x>=g&&E.x<=y&&E.y>=_&&E.y<=S&&Ms(l,d,c,p,f,m,E.x,E.y)&&je(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function LM(s,t,i,r){const l=s.prev,c=s,f=s.next;if(je(l,c,f)>=0)return!1;const d=l.x,p=c.x,m=f.x,g=l.y,_=c.y,y=f.y,S=d<p?d<m?d:m:p<m?p:m,E=g<_?g<y?g:y:_<y?_:y,R=d>p?d>m?d:m:p>m?p:m,M=g>_?g>y?g:y:_>y?_:y,x=Ad(S,E,t,i,r),B=Ad(R,M,t,i,r);let U=s.prevZ,w=s.nextZ;for(;U&&U.z>=x&&w&&w.z<=B;){if(U.x>=S&&U.x<=R&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&Ms(d,g,p,_,m,y,U.x,U.y)&&je(U.prev,U,U.next)>=0||(U=U.prevZ,w.x>=S&&w.x<=R&&w.y>=E&&w.y<=M&&w!==l&&w!==f&&Ms(d,g,p,_,m,y,w.x,w.y)&&je(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;U&&U.z>=x;){if(U.x>=S&&U.x<=R&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&Ms(d,g,p,_,m,y,U.x,U.y)&&je(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;w&&w.z<=B;){if(w.x>=S&&w.x<=R&&w.y>=E&&w.y<=M&&w!==l&&w!==f&&Ms(d,g,p,_,m,y,w.x,w.y)&&je(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function NM(s,t,i){let r=s;do{const l=r.prev,c=r.next.next;!Vc(l,c)&&S0(l,r,r.next,c)&&Xo(l,c)&&Xo(c,l)&&(t.push(l.i/i|0),t.push(r.i/i|0),t.push(c.i/i|0),Wo(r),Wo(r.next),r=s=c),r=r.next}while(r!==s);return br(r)}function OM(s,t,i,r,l,c){let f=s;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&kM(f,d)){let p=M0(f,d);f=br(f,f.next),p=br(p,p.next),ko(f,t,i,r,l,c,0),ko(p,t,i,r,l,c,0);return}d=d.next}f=f.next}while(f!==s)}function PM(s,t,i,r){const l=[];let c,f,d,p,m;for(c=0,f=t.length;c<f;c++)d=t[c]*r,p=c<f-1?t[c+1]*r:s.length,m=y0(s,d,p,r,!1),m===m.next&&(m.steiner=!0),l.push(VM(m));for(l.sort(zM),c=0;c<l.length;c++)i=BM(l[c],i);return i}function zM(s,t){return s.x-t.x}function BM(s,t){const i=IM(s,t);if(!i)return t;const r=M0(i,s);return br(r,r.next),br(i,i.next)}function IM(s,t){let i=t,r=-1/0,l;const c=s.x,f=s.y;do{if(f<=i.y&&f>=i.next.y&&i.next.y!==i.y){const y=i.x+(f-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(y<=c&&y>r&&(r=y,l=i.x<i.next.x?i:i.next,y===c))return l}i=i.next}while(i!==t);if(!l)return null;const d=l,p=l.x,m=l.y;let g=1/0,_;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&Ms(f<m?c:r,f,p,m,f<m?r:c,f,i.x,i.y)&&(_=Math.abs(f-i.y)/(c-i.x),Xo(i,s)&&(_<g||_===g&&(i.x>l.x||i.x===l.x&&FM(l,i)))&&(l=i,g=_)),i=i.next;while(i!==d);return l}function FM(s,t){return je(s.prev,s,t.prev)<0&&je(t.next,s,s.next)<0}function HM(s,t,i,r){let l=s;do l.z===0&&(l.z=Ad(l.x,l.y,t,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,GM(l)}function GM(s){let t,i,r,l,c,f,d,p,m=1;do{for(i=s,s=null,c=null,f=0;i;){for(f++,r=i,d=0,t=0;t<m&&(d++,r=r.nextZ,!!r);t++);for(p=m;d>0||p>0&&r;)d!==0&&(p===0||!r||i.z<=r.z)?(l=i,i=i.nextZ,d--):(l=r,r=r.nextZ,p--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;i=r}c.nextZ=null,m*=2}while(f>1);return s}function Ad(s,t,i,r,l){return s=(s-i)*l|0,t=(t-r)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function VM(s){let t=s,i=s;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==s);return i}function Ms(s,t,i,r,l,c,f,d){return(l-f)*(t-d)>=(s-f)*(c-d)&&(s-f)*(r-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(r-d)}function kM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!XM(s,t)&&(Xo(s,t)&&Xo(t,s)&&WM(s,t)&&(je(s.prev,s,t.prev)||je(s,t.prev,t))||Vc(s,t)&&je(s.prev,s,s.next)>0&&je(t.prev,t,t.next)>0)}function je(s,t,i){return(t.y-s.y)*(i.x-t.x)-(t.x-s.x)*(i.y-t.y)}function Vc(s,t){return s.x===t.x&&s.y===t.y}function S0(s,t,i,r){const l=Cc(je(s,t,i)),c=Cc(je(s,t,r)),f=Cc(je(i,r,s)),d=Cc(je(i,r,t));return!!(l!==c&&f!==d||l===0&&Rc(s,i,t)||c===0&&Rc(s,r,t)||f===0&&Rc(i,s,r)||d===0&&Rc(i,t,r))}function Rc(s,t,i){return t.x<=Math.max(s.x,i.x)&&t.x>=Math.min(s.x,i.x)&&t.y<=Math.max(s.y,i.y)&&t.y>=Math.min(s.y,i.y)}function Cc(s){return s>0?1:s<0?-1:0}function XM(s,t){let i=s;do{if(i.i!==s.i&&i.next.i!==s.i&&i.i!==t.i&&i.next.i!==t.i&&S0(i,i.next,s,t))return!0;i=i.next}while(i!==s);return!1}function Xo(s,t){return je(s.prev,s,s.next)<0?je(s,t,s.next)>=0&&je(s,s.prev,t)>=0:je(s,t,s.prev)<0||je(s,s.next,t)<0}function WM(s,t){let i=s,r=!1;const l=(s.x+t.x)/2,c=(s.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==s);return r}function M0(s,t){const i=new bd(s.i,s.x,s.y),r=new bd(t.i,t.x,t.y),l=s.next,c=t.prev;return s.next=t,t.prev=s,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function cv(s,t,i,r){const l=new bd(s,t,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Wo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bd(s,t,i){this.i=s,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qM(s,t,i,r){let l=0;for(let c=t,f=i-r;c<i;c+=r)l+=(s[f]-s[c])*(s[c+1]+s[f+1]),f=c;return l}class Go{static area(t){const i=t.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=t[l].x*t[c].y-t[c].x*t[l].y;return r*.5}static isClockWise(t){return Go.area(t)<0}static triangulateShape(t,i){const r=[],l=[],c=[];uv(t),fv(r,t);let f=t.length;i.forEach(uv);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,fv(r,i[p]);const d=DM.triangulate(r,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function uv(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function fv(s,t){for(let i=0;i<t.length;i++)s.push(t[i].x),s.push(t[i].y)}class Qo extends ua{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=t/d,y=i/p,S=[],E=[],R=[],M=[];for(let x=0;x<g;x++){const B=x*y-f;for(let U=0;U<m;U++){const w=U*_-c;E.push(w,-B,0),R.push(0,0,1),M.push(U/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let B=0;B<d;B++){const U=B+m*x,w=B+m*(x+1),j=B+1+m*(x+1),G=B+1+m*x;S.push(U,w,G),S.push(w,j,G)}this.setIndex(S),this.setAttribute("position",new ei(E,3)),this.setAttribute("normal",new ei(R,3)),this.setAttribute("uv",new ei(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hd extends ua{constructor(t=new x0([new qt(0,.5),new qt(-.5,-.5),new qt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const r=[],l=[],c=[],f=[];let d=0,p=0;if(Array.isArray(t)===!1)m(t);else for(let g=0;g<t.length;g++)m(t[g]),this.addGroup(d,p,g),d+=p,p=0;this.setIndex(r),this.setAttribute("position",new ei(l,3)),this.setAttribute("normal",new ei(c,3)),this.setAttribute("uv",new ei(f,2));function m(g){const _=l.length/3,y=g.extractPoints(i);let S=y.shape;const E=y.holes;Go.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,x=E.length;M<x;M++){const B=E[M];Go.isClockWise(B)===!0&&(E[M]=B.reverse())}const R=Go.triangulateShape(S,E);for(let M=0,x=E.length;M<x;M++){const B=E[M];S=S.concat(B)}for(let M=0,x=S.length;M<x;M++){const B=S[M];l.push(B.x,B.y,0),c.push(0,0,1),f.push(B.x,B.y)}for(let M=0,x=R.length;M<x;M++){const B=R[M],U=B[0]+_,w=B[1]+_,j=B[2]+_;r.push(U,w,j),p+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return YM(i,t)}static fromJSON(t,i){const r=[];for(let l=0,c=t.shapes.length;l<c;l++){const f=i[t.shapes[l]];r.push(f)}return new Hd(r,t.curveSegments)}}function YM(s,t){if(t.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const l=s[i];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t}class Gd extends ua{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const f=[],d=[],p=[],m=[],g=new Q,_=new Q,y=new Q;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const R=E/l*c,M=S/r*Math.PI*2;_.x=(t+i*Math.cos(M))*Math.cos(R),_.y=(t+i*Math.cos(M))*Math.sin(R),_.z=i*Math.sin(M),d.push(_.x,_.y,_.z),g.x=t*Math.cos(R),g.y=t*Math.sin(R),y.subVectors(_,g).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const R=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,B=(l+1)*S+E;f.push(R,M,B),f.push(M,x,B)}this.setIndex(f),this.setAttribute("position",new ei(d,3)),this.setAttribute("normal",new ei(p,3)),this.setAttribute("uv",new ei(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dh extends Ko{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jM extends Ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZM extends Ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class E0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Uh=new Ze,hv=new Q,dv=new Q;class KM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;hv.setFromMatrixPosition(t.matrixWorld),i.position.copy(hv),dv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(dv),i.updateMatrixWorld(),Uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class T0 extends h0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class QM extends KM{constructor(){super(new T0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JM extends E0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $M extends E0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class tE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class eE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=pv();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function pv(){return performance.now()}function mv(s,t,i,r){const l=nE(r);switch(i){case Zv:return s*t;case Qv:return s*t;case Jv:return s*t*2;case $v:return s*t/l.components*l.byteLength;case Nd:return s*t/l.components*l.byteLength;case t0:return s*t*2/l.components*l.byteLength;case Od:return s*t*2/l.components*l.byteLength;case Kv:return s*t*3/l.components*l.byteLength;case Mi:return s*t*4/l.components*l.byteLength;case Pd:return s*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:case ed:return Math.max(s,16)*Math.max(t,8)/4;case Jh:case td:return Math.max(s,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zc:case xd:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case e0:case Sd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nE(s){switch(s){case ca:case qv:return{byteLength:1,components:1};case Vo:case Yv:case Yo:return{byteLength:2,components:1};case Ud:case Ld:return{byteLength:2,components:4};case Tr:case Dd:case sa:return{byteLength:4,components:1};case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function iE(s){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<_.length;S++){const E=_[y],R=_[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,_[y]=R)}_.length=y+1;for(let S=0,E=_.length;S<E;S++){const R=_[S];s.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var aE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_E=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,RE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:aE,alphahash_pars_fragment:rE,alphamap_fragment:sE,alphamap_pars_fragment:oE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:fE,batching_pars_vertex:hE,batching_vertex:dE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:ME,color_fragment:EE,color_pars_fragment:TE,color_pars_vertex:AE,color_vertex:bE,common:RE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:wE,displacementmap_pars_vertex:DE,displacementmap_vertex:UE,emissivemap_fragment:LE,emissivemap_pars_fragment:NE,colorspace_fragment:OE,colorspace_pars_fragment:PE,envmap_fragment:zE,envmap_common_pars_fragment:BE,envmap_pars_fragment:IE,envmap_pars_vertex:FE,envmap_physical_pars_fragment:KE,envmap_vertex:HE,fog_vertex:GE,fog_pars_vertex:VE,fog_fragment:kE,fog_pars_fragment:XE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:qE,lights_lambert_fragment:YE,lights_lambert_pars_fragment:jE,lights_pars_begin:ZE,lights_toon_fragment:QE,lights_toon_pars_fragment:JE,lights_phong_fragment:$E,lights_phong_pars_fragment:tT,lights_physical_fragment:eT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:gT,morphcolor_vertex:_T,morphnormal_vertex:vT,morphtarget_pars_vertex:xT,morphtarget_vertex:yT,normal_fragment_begin:ST,normal_fragment_maps:MT,normal_pars_fragment:ET,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:wT,iridescence_pars_fragment:DT,opaque_fragment:UT,packing:LT,premultiplied_alpha_fragment:NT,project_vertex:OT,dithering_fragment:PT,dithering_pars_fragment:zT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:IT,shadowmap_pars_fragment:FT,shadowmap_pars_vertex:HT,shadowmap_vertex:GT,shadowmask_pars_fragment:VT,skinbase_vertex:kT,skinning_pars_vertex:XT,skinning_vertex:WT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:jT,tonemapping_fragment:ZT,tonemapping_pars_fragment:KT,transmission_fragment:QT,transmission_pars_fragment:JT,uv_pars_fragment:$T,uv_pars_vertex:t1,uv_vertex:e1,worldpos_vertex:n1,background_vert:i1,background_frag:a1,backgroundCube_vert:r1,backgroundCube_frag:s1,cube_vert:o1,cube_frag:l1,depth_vert:c1,depth_frag:u1,distanceRGBA_vert:f1,distanceRGBA_frag:h1,equirect_vert:d1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:_1,meshbasic_frag:v1,meshlambert_vert:x1,meshlambert_frag:y1,meshmatcap_vert:S1,meshmatcap_frag:M1,meshnormal_vert:E1,meshnormal_frag:T1,meshphong_vert:A1,meshphong_frag:b1,meshphysical_vert:R1,meshphysical_frag:C1,meshtoon_vert:w1,meshtoon_frag:D1,points_vert:U1,points_frag:L1,shadow_vert:N1,shadow_frag:O1,sprite_vert:P1,sprite_frag:z1},Lt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const wc={r:0,b:0,g:0},gr=new Ni,B1=new Ze;function I1(s,t,i,r,l,c,f){const d=new we(0);let p=c===!0?0:1,m,g,_=null,y=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function R(U){let w=!1;const j=E(U);j===null?x(d,p):j&&j.isColor&&(x(j,1),w=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(U,w){const j=E(w);j&&(j.isCubeTexture||j.mapping===Gc)?(g===void 0&&(g=new Xn(new zs(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ns(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(gr)),g.material.toneMapped=Re.getTransfer(j.colorSpace)!==Ie,(_!==j||y!==j.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=j,y=j.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(m===void 0&&(m=new Xn(new Qo(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ns(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=j,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Re.getTransfer(j.colorSpace)!==Ie,j.matrixAutoUpdate===!0&&j.updateMatrix(),m.material.uniforms.uvTransform.value.copy(j.matrix),(_!==j||y!==j.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=j,y=j.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,w){U.getRGB(wc,f0(s)),r.buffers.color.setClear(wc.r,wc.g,wc.b,w,f)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),p=w,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:R,addToRenderList:M,dispose:B}}function F1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function d(C,H,ct,st,tt){let ut=!1;const O=_(st,ct,H);c!==O&&(c=O,m(c.object)),ut=S(C,st,ct,tt),ut&&E(C,st,ct,tt),tt!==null&&t.update(tt,s.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,w(C,H,ct,st),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,H,ct){const st=ct.wireframe===!0;let tt=r[C.id];tt===void 0&&(tt={},r[C.id]=tt);let ut=tt[H.id];ut===void 0&&(ut={},tt[H.id]=ut);let O=ut[st];return O===void 0&&(O=y(p()),ut[st]=O),O}function y(C){const H=[],ct=[],st=[];for(let tt=0;tt<i;tt++)H[tt]=0,ct[tt]=0,st[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:st,object:C,attributes:{},index:null}}function S(C,H,ct,st){const tt=c.attributes,ut=H.attributes;let O=0;const Y=ct.getAttributes();for(const X in Y)if(Y[X].location>=0){const At=tt[X];let N=ut[X];if(N===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),At===void 0||At.attribute!==N||N&&At.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==st}function E(C,H,ct,st){const tt={},ut=H.attributes;let O=0;const Y=ct.getAttributes();for(const X in Y)if(Y[X].location>=0){let At=ut[X];At===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(At=C.instanceColor));const N={};N.attribute=At,At&&At.data&&(N.data=At.data),tt[X]=N,O++}c.attributes=tt,c.attributesNum=O,c.index=st}function R(){const C=c.newAttributes;for(let H=0,ct=C.length;H<ct;H++)C[H]=0}function M(C){x(C,0)}function x(C,H){const ct=c.newAttributes,st=c.enabledAttributes,tt=c.attributeDivisors;ct[C]=1,st[C]===0&&(s.enableVertexAttribArray(C),st[C]=1),tt[C]!==H&&(s.vertexAttribDivisor(C,H),tt[C]=H)}function B(){const C=c.newAttributes,H=c.enabledAttributes;for(let ct=0,st=H.length;ct<st;ct++)H[ct]!==C[ct]&&(s.disableVertexAttribArray(ct),H[ct]=0)}function U(C,H,ct,st,tt,ut,O){O===!0?s.vertexAttribIPointer(C,H,ct,tt,ut):s.vertexAttribPointer(C,H,ct,st,tt,ut)}function w(C,H,ct,st){R();const tt=st.attributes,ut=ct.getAttributes(),O=H.defaultAttributeValues;for(const Y in ut){const X=ut[Y];if(X.location>=0){let xt=tt[Y];if(xt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const At=xt.normalized,N=xt.itemSize,it=t.get(xt);if(it===void 0)continue;const Mt=it.buffer,Z=it.type,ft=it.bytesPerElement,Tt=Z===s.INT||Z===s.UNSIGNED_INT||xt.gpuType===Dd;if(xt.isInterleavedBufferAttribute){const St=xt.data,Gt=St.stride,Ft=xt.offset;if(St.isInstancedInterleavedBuffer){for(let ie=0;ie<X.locationSize;ie++)x(X.location+ie,St.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ie=0;ie<X.locationSize;ie++)M(X.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let ie=0;ie<X.locationSize;ie++)U(X.location+ie,N/X.locationSize,Z,At,Gt*ft,(Ft+N/X.locationSize*ie)*ft,Tt)}else{if(xt.isInstancedBufferAttribute){for(let St=0;St<X.locationSize;St++)x(X.location+St,xt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let St=0;St<X.locationSize;St++)M(X.location+St);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let St=0;St<X.locationSize;St++)U(X.location+St,N/X.locationSize,Z,At,N*ft,N/X.locationSize*St*ft,Tt)}}else if(O!==void 0){const At=O[Y];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(X.location,At);break;case 3:s.vertexAttrib3fv(X.location,At);break;case 4:s.vertexAttrib4fv(X.location,At);break;default:s.vertexAttrib1fv(X.location,At)}}}}B()}function j(){K();for(const C in r){const H=r[C];for(const ct in H){const st=H[ct];for(const tt in st)g(st[tt].object),delete st[tt];delete H[ct]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const ct in H){const st=H[ct];for(const tt in st)g(st[tt].object),delete st[tt];delete H[ct]}delete r[C.id]}function P(C){for(const H in r){const ct=r[H];if(ct[C.id]===void 0)continue;const st=ct[C.id];for(const tt in st)g(st[tt].object),delete st[tt];delete ct[C.id]}}function K(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:j,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function H1(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,r,1)}function p(m,g,_,y){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*y[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function G1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Mi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const K=P===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ca&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sa&&!K)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:B,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:j,maxSamples:G}}function V1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new vr,d=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||l;return l=y,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,S){const E=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const B=c?0:r,U=B*4;let w=x.clippingState||null;p.value=w,w=g(E,y,U,S);for(let j=0;j!==U;++j)w[j]=i[j];x.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,y,S,E){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const x=S+R*4,B=y.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,w=S;U!==R;++U,w+=4)f.copy(_[U]).applyMatrix4(B,d),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function k1(s){let t=new WeakMap;function i(f,d){return d===jh?f.mapping=Cs:d===Zh&&(f.mapping=ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===jh||d===Zh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new dM(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Es=4,gv=[.125,.215,.35,.446,.526,.582],Sr=20,Lh=new T0,_v=new we;let Nh=null,Oh=0,Ph=0,zh=!1;const xr=(1+Math.sqrt(5))/2,ys=1/xr,vv=[new Q(-xr,ys,0),new Q(xr,ys,0),new Q(-ys,0,xr),new Q(ys,0,xr),new Q(0,xr,-ys),new Q(0,xr,ys),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class xv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nh,Oh,Ph),this._renderer.xr.enabled=zh,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Yo,format:Mi,colorSpace:Ls,depthBuffer:!1},l=yv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X1(c)),this._blurMaterial=W1(c,t,i)}return l}_compileMaterial(t){const i=new Xn(this._lodPlanes[0],t);this._renderer.compile(i,Lh)}_sceneToCubeUV(t,i,r,l){const d=new fi(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(_v),g.toneMapping=ka,g.autoClear=!1;const S=new Io({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new Xn(new zs,S);let R=!1;const M=t.background;M?M.isColor&&(S.color.copy(M),t.background=null,R=!0):(S.color.copy(_v),R=!0);for(let x=0;x<6;x++){const B=x%3;B===0?(d.up.set(0,p[x],0),d.lookAt(m[x],0,0)):B===1?(d.up.set(0,0,p[x]),d.lookAt(0,m[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,m[x]));const U=this._cubeSize;Dc(l,B*U,x>2?U:0,U,U),g.setRenderTarget(l),R&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=M}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Xn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Dc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Lh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=vv[(l-c-1)%vv.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Xn(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):Sr;M>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sr}`);const x=[];let B=0;for(let P=0;P<Sr;++P){const K=P/R,D=Math.exp(-K*K/2);x.push(D),P===0?B+=D:P<M&&(B+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/B;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-r;const w=this._sizeLods[l],j=3*w*(l>U-Es?l-U+Es:0),G=4*(this._cubeSize-w);Dc(i,j,G,3*w,2*w),p.setRenderTarget(i),p.render(_,Lh)}}function X1(s){const t=[],i=[],r=[];let l=s;const c=s-Es+1+gv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Es?p=gv[f-s+Es-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,R=3,M=2,x=1,B=new Float32Array(R*E*S),U=new Float32Array(M*E*S),w=new Float32Array(x*E*S);for(let G=0;G<S;G++){const P=G%3*2/3-1,K=G>2?0:-1,D=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];B.set(D,R*E*G),U.set(y,M*E*G);const C=[G,G,G,G,G,G];w.set(C,x*E*G)}const j=new ua;j.setAttribute("position",new Li(B,R)),j.setAttribute("uv",new Li(U,M)),j.setAttribute("faceIndex",new Li(w,x)),t.push(j),l>Es&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function yv(s,t,i){const r=new Ar(s,t,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function W1(s,t,i){const r=new Float32Array(Sr),l=new Q(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Sv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Mv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===jh||p===Zh,g=p===Cs||p===ws;if(m||g){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new xv(s)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new xv(s)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Y1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ss("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function j1(s,t,i,r){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const S in y)t.update(y[S],s.ARRAY_BUFFER)}function m(_){const y=[],S=_.index,E=_.attributes.position;let R=0;if(S!==null){const B=S.array;R=S.version;for(let U=0,w=B.length;U<w;U+=3){const j=B[U+0],G=B[U+1],P=B[U+2];y.push(j,G,G,P,P,j)}}else if(E!==void 0){const B=E.array;R=E.version;for(let U=0,w=B.length/3-1;U<w;U+=3){const j=U+0,G=U+1,P=U+2;y.push(j,G,G,P,P,j)}}else return;const M=new(a0(y)?u0:c0)(y,1);M.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function Z1(s,t,i){let r;function l(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,S){s.drawElements(r,S,c,y*f),i.update(S,r,1)}function m(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,y*f,E),i.update(S,r,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function _(y,S,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)m(y[x]/f,S[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,R,0,E);let x=0;for(let B=0;B<E;B++)x+=S[B]*R[B];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function K1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Q1(s,t,i){const r=new WeakMap,l=new $e;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let C=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),R===!0&&(w=2),M===!0&&(w=3);let j=d.attributes.position.count*w,G=1;j>t.maxTextureSize&&(G=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const P=new Float32Array(j*G*4*_),K=new s0(P,j,G,_);K.type=sa,K.needsUpdate=!0;const D=w*4;for(let H=0;H<_;H++){const ct=x[H],st=B[H],tt=U[H],ut=j*G*4*H;for(let O=0;O<ct.count;O++){const Y=O*D;E===!0&&(l.fromBufferAttribute(ct,O),P[ut+Y+0]=l.x,P[ut+Y+1]=l.y,P[ut+Y+2]=l.z,P[ut+Y+3]=0),R===!0&&(l.fromBufferAttribute(st,O),P[ut+Y+4]=l.x,P[ut+Y+5]=l.y,P[ut+Y+6]=l.z,P[ut+Y+7]=0),M===!0&&(l.fromBufferAttribute(tt,O),P[ut+Y+8]=l.x,P[ut+Y+9]=l.y,P[ut+Y+10]=l.z,P[ut+Y+11]=tt.itemSize===4?l.w:1)}}y={count:_,texture:K,size:new qt(j,G)},r.set(d,y),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function J1(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const b0=new On,Ev=new p0(1,1),R0=new s0,C0=new KS,w0=new d0,Tv=[],Av=[],bv=new Float32Array(16),Rv=new Float32Array(9),Cv=new Float32Array(4);function Bs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Tv[l];if(c===void 0&&(c=new Float32Array(l),Tv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function kc(s,t){let i=Av[t];i===void 0&&(i=new Int32Array(t),Av[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function $1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function tA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),pn(i,t)}}function eA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),pn(i,t)}}function nA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),pn(i,t)}}function iA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Cv.set(r),s.uniformMatrix2fv(this.addr,!1,Cv),pn(i,r)}}function aA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Rv.set(r),s.uniformMatrix3fv(this.addr,!1,Rv),pn(i,r)}}function rA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;bv.set(r),s.uniformMatrix4fv(this.addr,!1,bv),pn(i,r)}}function sA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),pn(i,t)}}function lA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),pn(i,t)}}function cA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),pn(i,t)}}function uA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function fA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),pn(i,t)}}function hA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),pn(i,t)}}function dA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),pn(i,t)}}function pA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Ev.compareFunction=i0,c=Ev):c=b0,i.setTexture2D(t||c,l)}function mA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||C0,l)}function gA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||w0,l)}function _A(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||R0,l)}function vA(s){switch(s){case 5126:return $1;case 35664:return tA;case 35665:return eA;case 35666:return nA;case 35674:return iA;case 35675:return aA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return hA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return _A}}function xA(s,t){s.uniform1fv(this.addr,t)}function yA(s,t){const i=Bs(t,this.size,2);s.uniform2fv(this.addr,i)}function SA(s,t){const i=Bs(t,this.size,3);s.uniform3fv(this.addr,i)}function MA(s,t){const i=Bs(t,this.size,4);s.uniform4fv(this.addr,i)}function EA(s,t){const i=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function TA(s,t){const i=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function AA(s,t){const i=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function bA(s,t){s.uniform1iv(this.addr,t)}function RA(s,t){s.uniform2iv(this.addr,t)}function CA(s,t){s.uniform3iv(this.addr,t)}function wA(s,t){s.uniform4iv(this.addr,t)}function DA(s,t){s.uniform1uiv(this.addr,t)}function UA(s,t){s.uniform2uiv(this.addr,t)}function LA(s,t){s.uniform3uiv(this.addr,t)}function NA(s,t){s.uniform4uiv(this.addr,t)}function OA(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||b0,c[f])}function PA(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||C0,c[f])}function zA(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||w0,c[f])}function BA(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||R0,c[f])}function IA(s){switch(s){case 5126:return xA;case 35664:return yA;case 35665:return SA;case 35666:return MA;case 35674:return EA;case 35675:return TA;case 35676:return AA;case 5124:case 35670:return bA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return wA;case 5125:return DA;case 36294:return UA;case 36295:return LA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return BA}}class FA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=vA(i.type)}}class HA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IA(i.type)}}class GA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function wv(s,t){s.seq.push(t),s.map[t.id]=t}function VA(s,t,i){const r=s.name,l=r.length;for(Bh.lastIndex=0;;){const c=Bh.exec(r),f=Bh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){wv(i,m===void 0?new FA(d,s,t):new HA(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new GA(d),wv(i,_)),i=_}}}class Bc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);VA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Dv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const kA=37297;let XA=0;function WA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Uv=new le;function qA(s){Re._getMatrix(Uv,Re.workingColorSpace,s);const t=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(s)){case Ic:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+WA(s.getShaderSource(t),f)}else return l}function YA(s,t){const i=qA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function jA(s,t){let i;switch(t){case MS:i="Linear";break;case ES:i="Reinhard";break;case TS:i="Cineon";break;case AS:i="ACESFilmic";break;case RS:i="AgX";break;case CS:i="Neutral";break;case bS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new Q;function ZA(){Re.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function QA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function JA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Bo(s){return s!==""}function Nv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ov(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(s){return s.replace($A,eb)}const tb=new Map;function eb(s,t){let i=ce[t];if(i===void 0){const r=tb.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rd(i)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(s){return s.replace(nb,ib)}function ib(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ab(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===eS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function rb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function ob(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xv:t="ENVMAP_BLENDING_MULTIPLY";break;case yS:t="ENVMAP_BLENDING_MIX";break;case SS:t="ENVMAP_BLENDING_ADD";break}return t}function lb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function cb(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=ab(i),m=rb(i),g=sb(i),_=ob(i),y=lb(i),S=KA(i),E=QA(c),R=l.createProgram();let M,x,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(M=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==ka?jA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,YA("linearToOutputTexel",i.outputColorSpace),ZA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),f=Rd(f),f=Nv(f,i),f=Ov(f,i),d=Rd(d),d=Nv(d,i),d=Ov(d,i),f=Pv(f),d=Pv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=B+M+f,w=B+x+d,j=Dv(l,l.VERTEX_SHADER,U),G=Dv(l,l.FRAGMENT_SHADER,w);l.attachShader(R,j),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(H){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(R).trim(),st=l.getShaderInfoLog(j).trim(),tt=l.getShaderInfoLog(G).trim();let ut=!0,O=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ut=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,j,G);else{const Y=Lv(l,j,"vertex"),X=Lv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+Y+`
`+X)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(st===""||tt==="")&&(O=!1);O&&(H.diagnostics={runnable:ut,programLog:ct,vertexShader:{log:st,prefix:M},fragmentShader:{log:tt,prefix:x}})}l.deleteShader(j),l.deleteShader(G),K=new Bc(l,R),D=JA(l,R)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,kA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=XA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=j,this.fragmentShader=G,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new hb(t),i.set(t,r)),r}}class hb{constructor(t){this.id=ub++,this.code=t,this.usedTimes=0}}function db(s,t,i,r,l,c,f){const d=new o0,p=new fb,m=new Set,g=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,H,ct,st){const tt=ct.fog,ut=st.geometry,O=D.isMeshStandardMaterial?ct.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),X=Y&&Y.mapping===Gc?Y.image.height:null,xt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const At=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,N=At!==void 0?At.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let Mt,Z,ft,Tt;if(xt){const Me=Di[xt];Mt=Me.vertexShader,Z=Me.fragmentShader}else Mt=D.vertexShader,Z=D.fragmentShader,p.update(D),ft=p.getVertexShaderID(D),Tt=p.getFragmentShaderID(D);const St=s.getRenderTarget(),Gt=s.state.buffers.depth.getReversed(),Ft=st.isInstancedMesh===!0,ie=st.isBatchedMesh===!0,Ne=!!D.map,fe=!!D.matcap,We=!!Y,I=!!D.aoMap,Tn=!!D.lightMap,ue=!!D.bumpMap,ge=!!D.normalMap,Yt=!!D.displacementMap,De=!!D.emissiveMap,Wt=!!D.metalnessMap,L=!!D.roughnessMap,A=D.anisotropy>0,nt=D.clearcoat>0,dt=D.dispersion>0,Et=D.iridescence>0,mt=D.sheen>0,kt=D.transmission>0,wt=A&&!!D.anisotropyMap,zt=nt&&!!D.clearcoatMap,_e=nt&&!!D.clearcoatNormalMap,bt=nt&&!!D.clearcoatRoughnessMap,Bt=Et&&!!D.iridescenceMap,jt=Et&&!!D.iridescenceThicknessMap,Xt=mt&&!!D.sheenColorMap,Nt=mt&&!!D.sheenRoughnessMap,$t=!!D.specularMap,ae=!!D.specularColorMap,Oe=!!D.specularIntensityMap,V=kt&&!!D.transmissionMap,Rt=kt&&!!D.thicknessMap,lt=!!D.gradientMap,_t=!!D.alphaMap,Ct=D.alphaTest>0,Dt=!!D.alphaHash,te=!!D.extensions;let qe=ka;D.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(qe=s.toneMapping);const un={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Z,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:Tt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:ie,batchingColor:ie&&st._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&st.instanceColor!==null,instancingMorph:Ft&&st.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ls,alphaToCoverage:!!D.alphaToCoverage,map:Ne,matcap:fe,envMap:We,envMapMode:We&&Y.mapping,envMapCubeUVHeight:X,aoMap:I,lightMap:Tn,bumpMap:ue,normalMap:ge,displacementMap:y&&Yt,emissiveMap:De,normalMapObjectSpace:ge&&D.normalMapType===LS,normalMapTangentSpace:ge&&D.normalMapType===n0,metalnessMap:Wt,roughnessMap:L,anisotropy:A,anisotropyMap:wt,clearcoat:nt,clearcoatMap:zt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:Et,iridescenceMap:Bt,iridescenceThicknessMap:jt,sheen:mt,sheenColorMap:Xt,sheenRoughnessMap:Nt,specularMap:$t,specularColorMap:ae,specularIntensityMap:Oe,transmission:kt,transmissionMap:V,thicknessMap:Rt,gradientMap:lt,opaque:D.transparent===!1&&D.blending===Ts&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:D.combine,mapUv:Ne&&R(D.map.channel),aoMapUv:I&&R(D.aoMap.channel),lightMapUv:Tn&&R(D.lightMap.channel),bumpMapUv:ue&&R(D.bumpMap.channel),normalMapUv:ge&&R(D.normalMap.channel),displacementMapUv:Yt&&R(D.displacementMap.channel),emissiveMapUv:De&&R(D.emissiveMap.channel),metalnessMapUv:Wt&&R(D.metalnessMap.channel),roughnessMapUv:L&&R(D.roughnessMap.channel),anisotropyMapUv:wt&&R(D.anisotropyMap.channel),clearcoatMapUv:zt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(D.sheenRoughnessMap.channel),specularMapUv:$t&&R(D.specularMap.channel),specularColorMapUv:ae&&R(D.specularColorMap.channel),specularIntensityMapUv:Oe&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Rt&&R(D.thicknessMap.channel),alphaMapUv:_t&&R(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ge||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(Ne||_t),fog:!!tt,useFog:D.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Gt,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ne&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:De&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===hi,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:te&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&D.extensions.multiDraw===!0||ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return un.vertexUv1s=m.has(1),un.vertexUv2s=m.has(2),un.vertexUv3s=m.has(3),m.clear(),un}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(B(C,D),U(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let H;if(C){const ct=Di[C];H=cM.clone(ct.uniforms)}else H=D.uniforms;return H}function j(D,C){let H;for(let ct=0,st=g.length;ct<st;ct++){const tt=g[ct];if(tt.cacheKey===C){H=tt,++H.usedTimes;break}}return H===void 0&&(H=new cb(s,C,D,c),g.push(H)),H}function G(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function P(D){p.remove(D)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:j,releaseProgram:G,releaseShaderCache:P,programs:g,dispose:K}}function pb(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function mb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Iv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,y,S,E,R,M){let x=s[t];return x===void 0?(x={id:_.id,object:_,geometry:y,material:S,groupOrder:E,renderOrder:_.renderOrder,z:R,group:M},s[t]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=R,x.group=M),t++,x}function d(_,y,S,E,R,M){const x=f(_,y,S,E,R,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(_,y,S,E,R,M){const x=f(_,y,S,E,R,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function m(_,y){i.length>1&&i.sort(_||mb),r.length>1&&r.sort(y||Bv),l.length>1&&l.sort(y||Bv)}function g(){for(let _=t,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function gb(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Iv,s.set(r,[f])):l>=c.length?(f=new Iv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function _b(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new we};break;case"SpotLight":i={position:new Q,direction:new Q,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function vb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let xb=0;function yb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sb(s){const t=new _b,i=vb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const l=new Q,c=new Ze,f=new Ze;function d(m){let g=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,R=0,M=0,x=0,B=0,U=0,w=0,j=0,G=0,P=0;m.sort(yb);for(let D=0,C=m.length;D<C;D++){const H=m[D],ct=H.color,st=H.intensity,tt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ct.r*st,_+=ct.g*st,y+=ct.b*st;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],st);P++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,X=i.get(H);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[S]=X,r.directionalShadowMap[S]=ut,r.directionalShadowMatrix[S]=H.shadow.matrix,B++}r.directional[S]=O,S++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(ct).multiplyScalar(st),O.distance=tt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[R]=O;const Y=H.shadow;if(H.map&&(r.spotLightMap[j]=H.map,j++,Y.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[R]=Y.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[R]=X,r.spotShadowMap[R]=ut,w++}R++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(ct).multiplyScalar(st),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=O,M++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Y=H.shadow,X=i.get(H);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=ut,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(st),O.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[x]=O,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const K=r.hash;(K.directionalLength!==S||K.pointLength!==E||K.spotLength!==R||K.rectAreaLength!==M||K.hemiLength!==x||K.numDirectionalShadows!==B||K.numPointShadows!==U||K.numSpotShadows!==w||K.numSpotMaps!==j||K.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+j-G,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=P,K.directionalLength=S,K.pointLength=E,K.spotLength=R,K.rectAreaLength=M,K.hemiLength=x,K.numDirectionalShadows=B,K.numPointShadows=U,K.numSpotShadows=w,K.numSpotMaps=j,K.numLightProbes=P,r.version=xb++)}function p(m,g){let _=0,y=0,S=0,E=0,R=0;const M=g.matrixWorldInverse;for(let x=0,B=m.length;x<B;x++){const U=m[x];if(U.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(U.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function Fv(s){const t=new Sb(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function Mb(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Fv(s),t.set(l,[d])):c>=f.length?(d=new Fv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(s,t,i){let r=new Bd;const l=new qt,c=new qt,f=new $e,d=new jM({depthPacking:US}),p=new ZM,m={},g=i.maxTextureSize,_={[Xa]:Wn,[Wn]:Xa,[hi]:hi},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Eb,fragmentShader:Tb}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new ua;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Xn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kv;let x=this.type;this.render=function(G,P,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(Va),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const st=x!==ra&&this.type===ra,tt=x===ra&&this.type!==ra;for(let ut=0,O=G.length;ut<O;ut++){const Y=G[ut],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const xt=X.getFrameExtents();if(l.multiply(xt),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,X.mapSize.y=c.y)),X.map===null||st===!0||tt===!0){const N=this.type!==ra?{minFilter:Ei,magFilter:Ei}:{};X.map!==null&&X.map.dispose(),X.map=new Ar(l.x,l.y,N),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const At=X.getViewportCount();for(let N=0;N<At;N++){const it=X.getViewport(N);f.set(c.x*it.x,c.y*it.y,c.x*it.z,c.y*it.w),ct.viewport(f),X.updateMatrices(Y,N),r=X.getFrustum(),w(P,K,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===ra&&B(X,K),X.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(D,C,H)};function B(G,P){const K=t.update(R);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ar(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(P,null,K,y,R,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(P,null,K,S,R,null)}function U(G,P,K,D){let C=null;const H=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=K.isPointLight===!0?p:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ct=C.uuid,st=P.uuid;let tt=m[ct];tt===void 0&&(tt={},m[ct]=tt);let ut=tt[st];ut===void 0&&(ut=C.clone(),tt[st]=ut,P.addEventListener("dispose",j)),C=ut}if(C.visible=P.visible,C.wireframe=P.wireframe,D===ra?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:_[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=s.properties.get(C);ct.light=K}return C}function w(G,P,K,D,C){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ra)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const st=t.update(G),tt=G.material;if(Array.isArray(tt)){const ut=st.groups;for(let O=0,Y=ut.length;O<Y;O++){const X=ut[O],xt=tt[X.materialIndex];if(xt&&xt.visible){const At=U(G,xt,D,C);G.onBeforeShadow(s,G,P,K,st,At,X),s.renderBufferDirect(K,null,st,At,G,X),G.onAfterShadow(s,G,P,K,st,At,X)}}}else if(tt.visible){const ut=U(G,tt,D,C);G.onBeforeShadow(s,G,P,K,st,ut,null),s.renderBufferDirect(K,null,st,ut,G,null),G.onAfterShadow(s,G,P,K,st,ut,null)}}const ct=G.children;for(let st=0,tt=ct.length;st<tt;st++)w(ct[st],P,K,D,C)}function j(G){G.target.removeEventListener("dispose",j);for(const K in m){const D=m[K],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const bb={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[Rs]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:Rs};function Rb(s,t){function i(){let V=!1;const Rt=new $e;let lt=null;const _t=new $e(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!V&&(s.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,Dt,te,qe,un){un===!0&&(Ct*=qe,Dt*=qe,te*=qe),Rt.set(Ct,Dt,te,qe),_t.equals(Rt)===!1&&(s.clearColor(Ct,Dt,te,qe),_t.copy(Rt))},reset:function(){V=!1,lt=null,_t.set(-1,0,0,0)}}}function r(){let V=!1,Rt=!1,lt=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const te=t.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const qe=Ct;Ct=null,this.setClear(qe)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?St(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!V&&(s.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=bb[Dt]),_t!==Dt){switch(Dt){case Gh:s.depthFunc(s.NEVER);break;case Vh:s.depthFunc(s.ALWAYS);break;case kh:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Xh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case qh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Dt}},setLocked:function(Dt){V=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),s.clearDepth(Dt),Ct=Dt)},reset:function(){V=!1,lt=null,_t=null,Ct=null,Rt=!1}}}function l(){let V=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,te=null,qe=null,un=null;return{setTest:function(Me){V||(Me?St(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!V&&(s.stencilMask(Me),Rt=Me)},setFunc:function(Me,vn,di){(lt!==Me||_t!==vn||Ct!==di)&&(s.stencilFunc(Me,vn,di),lt=Me,_t=vn,Ct=di)},setOp:function(Me,vn,di){(Dt!==Me||te!==vn||qe!==di)&&(s.stencilOp(Me,vn,di),Dt=Me,te=vn,qe=di)},setLocked:function(Me){V=Me},setClear:function(Me){un!==Me&&(s.clearStencil(Me),un=Me)},reset:function(){V=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,te=null,qe=null,un=null}}}const c=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,B=null,U=null,w=null,j=null,G=null,P=new we(0,0,0),K=0,D=!1,C=null,H=null,ct=null,st=null,tt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=Y>=2);let xt=null,At={};const N=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),Mt=new $e().fromArray(N),Z=new $e().fromArray(it);function ft(V,Rt,lt,_t){const Ct=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(V,Dt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<lt;te++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(Rt+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return Dt}const Tt={};Tt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),St(s.DEPTH_TEST),f.setFunc(Rs),ue(!1),ge(P_),St(s.CULL_FACE),I(Va);function St(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function Gt(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Ft(V,Rt){return _[V]!==Rt?(s.bindFramebuffer(V,Rt),_[V]=Rt,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Rt),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ie(V,Rt){let lt=S,_t=!1;if(V){lt=y.get(Rt),lt===void 0&&(lt=[],y.set(Rt,lt));const Ct=V.textures;if(lt.length!==Ct.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,te=Ct.length;Dt<te;Dt++)lt[Dt]=s.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,_t=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(lt)}function Ne(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const fe={[yr]:s.FUNC_ADD,[iS]:s.FUNC_SUBTRACT,[aS]:s.FUNC_REVERSE_SUBTRACT};fe[rS]=s.MIN,fe[sS]=s.MAX;const We={[oS]:s.ZERO,[lS]:s.ONE,[cS]:s.SRC_COLOR,[Fh]:s.SRC_ALPHA,[mS]:s.SRC_ALPHA_SATURATE,[dS]:s.DST_COLOR,[fS]:s.DST_ALPHA,[uS]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[pS]:s.ONE_MINUS_DST_COLOR,[hS]:s.ONE_MINUS_DST_ALPHA,[gS]:s.CONSTANT_COLOR,[_S]:s.ONE_MINUS_CONSTANT_COLOR,[vS]:s.CONSTANT_ALPHA,[xS]:s.ONE_MINUS_CONSTANT_ALPHA};function I(V,Rt,lt,_t,Ct,Dt,te,qe,un,Me){if(V===Va){R===!0&&(Gt(s.BLEND),R=!1);return}if(R===!1&&(St(s.BLEND),R=!0),V!==nS){if(V!==M||Me!==D){if((x!==yr||w!==yr)&&(s.blendEquation(s.FUNC_ADD),x=yr,w=yr),Me)switch(V){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case z_:s.blendFunc(s.ONE,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case I_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case z_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case I_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}B=null,U=null,j=null,G=null,P.set(0,0,0),K=0,M=V,D=Me}return}Ct=Ct||Rt,Dt=Dt||lt,te=te||_t,(Rt!==x||Ct!==w)&&(s.blendEquationSeparate(fe[Rt],fe[Ct]),x=Rt,w=Ct),(lt!==B||_t!==U||Dt!==j||te!==G)&&(s.blendFuncSeparate(We[lt],We[_t],We[Dt],We[te]),B=lt,U=_t,j=Dt,G=te),(qe.equals(P)===!1||un!==K)&&(s.blendColor(qe.r,qe.g,qe.b,un),P.copy(qe),K=un),M=V,D=!1}function Tn(V,Rt){V.side===hi?Gt(s.CULL_FACE):St(s.CULL_FACE);let lt=V.side===Wn;Rt&&(lt=!lt),ue(lt),V.blending===Ts&&V.transparent===!1?I(Va):I(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const _t=V.stencilWrite;d.setTest(_t),_t&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ue(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function ge(V){V!==$y?(St(s.CULL_FACE),V!==H&&(V===P_?s.cullFace(s.BACK):V===tS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),H=V}function Yt(V){V!==ct&&(O&&s.lineWidth(V),ct=V)}function De(V,Rt,lt){V?(St(s.POLYGON_OFFSET_FILL),(st!==Rt||tt!==lt)&&(s.polygonOffset(Rt,lt),st=Rt,tt=lt)):Gt(s.POLYGON_OFFSET_FILL)}function Wt(V){V?St(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function L(V){V===void 0&&(V=s.TEXTURE0+ut-1),xt!==V&&(s.activeTexture(V),xt=V)}function A(V,Rt,lt){lt===void 0&&(xt===null?lt=s.TEXTURE0+ut-1:lt=xt);let _t=At[lt];_t===void 0&&(_t={type:void 0,texture:void 0},At[lt]=_t),(_t.type!==V||_t.texture!==Rt)&&(xt!==lt&&(s.activeTexture(lt),xt=lt),s.bindTexture(V,Rt||Tt[V]),_t.type=V,_t.texture=Rt)}function nt(){const V=At[xt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(V){Mt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Mt.copy(V))}function Nt(V){Z.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function $t(V,Rt){let lt=m.get(Rt);lt===void 0&&(lt=new WeakMap,m.set(Rt,lt));let _t=lt.get(V);_t===void 0&&(_t=s.getUniformBlockIndex(Rt,V.name),lt.set(V,_t))}function ae(V,Rt){const _t=m.get(Rt).get(V);p.get(Rt)!==_t&&(s.uniformBlockBinding(Rt,_t,V.__bindingPointIndex),p.set(Rt,_t))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,At={},_={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,B=null,U=null,w=null,j=null,G=null,P=new we(0,0,0),K=0,D=!1,C=null,H=null,ct=null,st=null,tt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:St,disable:Gt,bindFramebuffer:Ft,drawBuffers:ie,useProgram:Ne,setBlending:I,setMaterial:Tn,setFlipSided:ue,setCullFace:ge,setLineWidth:Yt,setPolygonOffset:De,setScissorTest:Wt,activeTexture:L,bindTexture:A,unbindTexture:nt,compressedTexImage2D:dt,compressedTexImage3D:Et,texImage2D:Bt,texImage3D:jt,updateUBOMapping:$t,uniformBlockBinding:ae,texStorage2D:_e,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:kt,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Xt,viewport:Nt,reset:Oe}}function Cb(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new qt,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return S?new OffscreenCanvas(L,A):Hc("canvas")}function R(L,A,nt){let dt=1;const Et=Wt(L);if((Et.width>nt||Et.height>nt)&&(dt=nt/Math.max(Et.width,Et.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const mt=Math.floor(dt*Et.width),kt=Math.floor(dt*Et.height);_===void 0&&(_=E(mt,kt));const wt=A?E(mt,kt):_;return wt.width=mt,wt.height=kt,wt.getContext("2d").drawImage(L,0,0,mt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+mt+"x"+kt+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,A,nt,dt,Et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let mt=A;if(A===s.RED&&(nt===s.FLOAT&&(mt=s.R32F),nt===s.HALF_FLOAT&&(mt=s.R16F),nt===s.UNSIGNED_BYTE&&(mt=s.R8)),A===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.R8UI),nt===s.UNSIGNED_SHORT&&(mt=s.R16UI),nt===s.UNSIGNED_INT&&(mt=s.R32UI),nt===s.BYTE&&(mt=s.R8I),nt===s.SHORT&&(mt=s.R16I),nt===s.INT&&(mt=s.R32I)),A===s.RG&&(nt===s.FLOAT&&(mt=s.RG32F),nt===s.HALF_FLOAT&&(mt=s.RG16F),nt===s.UNSIGNED_BYTE&&(mt=s.RG8)),A===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.RG8UI),nt===s.UNSIGNED_SHORT&&(mt=s.RG16UI),nt===s.UNSIGNED_INT&&(mt=s.RG32UI),nt===s.BYTE&&(mt=s.RG8I),nt===s.SHORT&&(mt=s.RG16I),nt===s.INT&&(mt=s.RG32I)),A===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),nt===s.UNSIGNED_INT&&(mt=s.RGB32UI),nt===s.BYTE&&(mt=s.RGB8I),nt===s.SHORT&&(mt=s.RGB16I),nt===s.INT&&(mt=s.RGB32I)),A===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),nt===s.UNSIGNED_INT&&(mt=s.RGBA32UI),nt===s.BYTE&&(mt=s.RGBA8I),nt===s.SHORT&&(mt=s.RGBA16I),nt===s.INT&&(mt=s.RGBA32I)),A===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),A===s.RGBA){const kt=Et?Ic:Re.getTransfer(dt);nt===s.FLOAT&&(mt=s.RGBA32F),nt===s.HALF_FLOAT&&(mt=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(mt=kt===Ie?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function w(L,A){let nt;return L?A===null||A===Tr||A===Ds?nt=s.DEPTH24_STENCIL8:A===sa?nt=s.DEPTH32F_STENCIL8:A===Vo&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Tr||A===Ds?nt=s.DEPTH_COMPONENT24:A===sa?nt=s.DEPTH_COMPONENT32F:A===Vo&&(nt=s.DEPTH_COMPONENT16),nt}function j(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ei&&L.minFilter!==Ui?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function G(L){const A=L.target;A.removeEventListener("dispose",G),K(A),A.isVideoTexture&&g.delete(A)}function P(L){const A=L.target;A.removeEventListener("dispose",P),C(A)}function K(L){const A=r.get(L);if(A.__webglInit===void 0)return;const nt=L.source,dt=y.get(nt);if(dt){const Et=dt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(L),Object.keys(dt).length===0&&y.delete(nt)}r.remove(L)}function D(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const nt=L.source,dt=y.get(nt);delete dt[A.__cacheKey],f.memory.textures--}function C(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let Et=0;Et<A.__webglFramebuffer[dt].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[dt][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)s.deleteFramebuffer(A.__webglFramebuffer[dt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=L.textures;for(let dt=0,Et=nt.length;dt<Et;dt++){const mt=r.get(nt[dt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),f.memory.textures--),r.remove(nt[dt])}r.remove(L)}let H=0;function ct(){H=0}function st(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function tt(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ut(L,A){const nt=r.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const dt=L.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(nt,L,A);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+A)}function O(L,A){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Z(nt,L,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+A)}function Y(L,A){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Z(nt,L,A);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+A)}function X(L,A){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){ft(nt,L,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+A)}const xt={[Kh]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[Qh]:s.MIRRORED_REPEAT},At={[Ei]:s.NEAREST,[wS]:s.NEAREST_MIPMAP_NEAREST,[lc]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[ah]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},N={[NS]:s.NEVER,[FS]:s.ALWAYS,[OS]:s.LESS,[i0]:s.LEQUAL,[PS]:s.EQUAL,[IS]:s.GEQUAL,[zS]:s.GREATER,[BS]:s.NOTEQUAL};function it(L,A){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ui||A.magFilter===ah||A.magFilter===lc||A.magFilter===Er||A.minFilter===Ui||A.minFilter===ah||A.minFilter===lc||A.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,xt[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,xt[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,xt[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,At[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,At[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ei||A.minFilter!==lc&&A.minFilter!==Er||A.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(L,A){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",G));const dt=A.source;let Et=y.get(dt);Et===void 0&&(Et={},y.set(dt,Et));const mt=tt(A);if(mt!==L.__cacheKey){Et[mt]===void 0&&(Et[mt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),Et[mt].usedTimes++;const kt=Et[L.__cacheKey];kt!==void 0&&(Et[L.__cacheKey].usedTimes--,kt.usedTimes===0&&D(A)),L.__cacheKey=mt,L.__webglTexture=Et[mt].texture}return nt}function Z(L,A,nt){let dt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=s.TEXTURE_3D);const Et=Mt(L,A),mt=A.source;i.bindTexture(dt,L.__webglTexture,s.TEXTURE0+nt);const kt=r.get(mt);if(mt.version!==kt.__version||Et===!0){i.activeTexture(s.TEXTURE0+nt);const wt=Re.getPrimaries(Re.workingColorSpace),zt=A.colorSpace===Ha?null:Re.getPrimaries(A.colorSpace),_e=A.colorSpace===Ha||wt===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=R(A.image,!1,l.maxTextureSize);bt=De(A,bt);const Bt=c.convert(A.format,A.colorSpace),jt=c.convert(A.type);let Xt=U(A.internalFormat,Bt,jt,A.colorSpace,A.isVideoTexture);it(dt,A);let Nt;const $t=A.mipmaps,ae=A.isVideoTexture!==!0,Oe=kt.__version===void 0||Et===!0,V=mt.dataReady,Rt=j(A,bt);if(A.isDepthTexture)Xt=w(A.format===Us,A.type),Oe&&(ae?i.texStorage2D(s.TEXTURE_2D,1,Xt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Bt,jt,null));else if(A.isDataTexture)if($t.length>0){ae&&Oe&&i.texStorage2D(s.TEXTURE_2D,Rt,Xt,$t[0].width,$t[0].height);for(let lt=0,_t=$t.length;lt<_t;lt++)Nt=$t[lt],ae?V&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,jt,Nt.data):i.texImage2D(s.TEXTURE_2D,lt,Xt,Nt.width,Nt.height,0,Bt,jt,Nt.data);A.generateMipmaps=!1}else ae?(Oe&&i.texStorage2D(s.TEXTURE_2D,Rt,Xt,bt.width,bt.height),V&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,jt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Bt,jt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Xt,$t[0].width,$t[0].height,bt.depth);for(let lt=0,_t=$t.length;lt<_t;lt++)if(Nt=$t[lt],A.format!==Mi)if(Bt!==null)if(ae){if(V)if(A.layerUpdates.size>0){const Ct=mv(Nt.width,Nt.height,A.format,A.type);for(const Dt of A.layerUpdates){const te=Nt.data.subarray(Dt*Ct/Nt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,Dt,Nt.width,Nt.height,1,Bt,te)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,bt.depth,Bt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Xt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?V&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,bt.depth,Bt,jt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,lt,Xt,Nt.width,Nt.height,bt.depth,0,Bt,jt,Nt.data)}else{ae&&Oe&&i.texStorage2D(s.TEXTURE_2D,Rt,Xt,$t[0].width,$t[0].height);for(let lt=0,_t=$t.length;lt<_t;lt++)Nt=$t[lt],A.format!==Mi?Bt!==null?ae?V&&i.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,lt,Xt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?V&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,jt,Nt.data):i.texImage2D(s.TEXTURE_2D,lt,Xt,Nt.width,Nt.height,0,Bt,jt,Nt.data)}else if(A.isDataArrayTexture)if(ae){if(Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Xt,bt.width,bt.height,bt.depth),V)if(A.layerUpdates.size>0){const lt=mv(bt.width,bt.height,A.format,A.type);for(const _t of A.layerUpdates){const Ct=bt.data.subarray(_t*lt/bt.data.BYTES_PER_ELEMENT,(_t+1)*lt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Bt,jt,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,Bt,jt,bt.data);else if(A.isData3DTexture)ae?(Oe&&i.texStorage3D(s.TEXTURE_3D,Rt,Xt,bt.width,bt.height,bt.depth),V&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,Bt,jt,bt.data);else if(A.isFramebufferTexture){if(Oe)if(ae)i.texStorage2D(s.TEXTURE_2D,Rt,Xt,bt.width,bt.height);else{let lt=bt.width,_t=bt.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(s.TEXTURE_2D,Ct,Xt,lt,_t,0,Bt,jt,null),lt>>=1,_t>>=1}}else if($t.length>0){if(ae&&Oe){const lt=Wt($t[0]);i.texStorage2D(s.TEXTURE_2D,Rt,Xt,lt.width,lt.height)}for(let lt=0,_t=$t.length;lt<_t;lt++)Nt=$t[lt],ae?V&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Bt,jt,Nt):i.texImage2D(s.TEXTURE_2D,lt,Xt,Bt,jt,Nt);A.generateMipmaps=!1}else if(ae){if(Oe){const lt=Wt(bt);i.texStorage2D(s.TEXTURE_2D,Rt,Xt,lt.width,lt.height)}V&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Xt,Bt,jt,bt);M(A)&&x(dt),kt.__version=mt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ft(L,A,nt){if(A.image.length!==6)return;const dt=Mt(L,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+nt);const mt=r.get(Et);if(Et.version!==mt.__version||dt===!0){i.activeTexture(s.TEXTURE0+nt);const kt=Re.getPrimaries(Re.workingColorSpace),wt=A.colorSpace===Ha?null:Re.getPrimaries(A.colorSpace),zt=A.colorSpace===Ha||kt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!_e&&!bt?Bt[_t]=R(A.image[_t],!0,l.maxCubemapSize):Bt[_t]=bt?A.image[_t].image:A.image[_t],Bt[_t]=De(A,Bt[_t]);const jt=Bt[0],Xt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),$t=U(A.internalFormat,Xt,Nt,A.colorSpace),ae=A.isVideoTexture!==!0,Oe=mt.__version===void 0||dt===!0,V=Et.dataReady;let Rt=j(A,jt);it(s.TEXTURE_CUBE_MAP,A);let lt;if(_e){ae&&Oe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,$t,jt.width,jt.height);for(let _t=0;_t<6;_t++){lt=Bt[_t].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];A.format!==Mi?Xt!==null?ae?V&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Xt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,$t,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?V&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Xt,Nt,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,$t,Dt.width,Dt.height,0,Xt,Nt,Dt.data)}}}else{if(lt=A.mipmaps,ae&&Oe){lt.length>0&&Rt++;const _t=Wt(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,$t,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ae?V&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Xt,Nt,Bt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Bt[_t].width,Bt[_t].height,0,Xt,Nt,Bt[_t].data);for(let Ct=0;Ct<lt.length;Ct++){const te=lt[Ct].image[_t].image;ae?V&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,te.width,te.height,Xt,Nt,te.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,$t,te.width,te.height,0,Xt,Nt,te.data)}}else{ae?V&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Nt,Bt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Xt,Nt,Bt[_t]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];ae?V&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Xt,Nt,Dt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,$t,Xt,Nt,Dt.image[_t])}}}M(A)&&x(s.TEXTURE_CUBE_MAP),mt.__version=Et.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Tt(L,A,nt,dt,Et,mt){const kt=c.convert(nt.format,nt.colorSpace),wt=c.convert(nt.type),zt=U(nt.internalFormat,kt,wt,nt.colorSpace),_e=r.get(A),bt=r.get(nt);if(bt.__renderTarget=A,!_e.__hasExternalTextures){const Bt=Math.max(1,A.width>>mt),jt=Math.max(1,A.height>>mt);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,mt,zt,Bt,jt,A.depth,0,kt,wt,null):i.texImage2D(Et,mt,zt,Bt,jt,0,kt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,Et,bt.__webglTexture,0,ue(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,Et,bt.__webglTexture,mt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,A,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const dt=A.depthTexture,Et=dt&&dt.isDepthTexture?dt.type:null,mt=w(A.stencilBuffer,Et),kt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=ue(A);ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,mt,A.width,A.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,mt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,kt,s.RENDERBUFFER,L)}else{const dt=A.textures;for(let Et=0;Et<dt.length;Et++){const mt=dt[Et],kt=c.convert(mt.format,mt.colorSpace),wt=c.convert(mt.type),zt=U(mt.internalFormat,kt,wt,mt.colorSpace),_e=ue(A);nt&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,zt,A.width,A.height):ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,zt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,zt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(A.depthTexture);dt.__renderTarget=A,(!dt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ut(A.depthTexture,0);const Et=dt.__webglTexture,mt=ue(A);if(A.depthTexture.format===As)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Us)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ft(L){const A=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",Et)};dt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=dt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Gt(A.__webglFramebuffer,L)}else if(nt){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=s.createRenderbuffer(),St(A.__webglDepthbuffer[dt],L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),St(A.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,Et)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(L,A,nt){const dt=r.get(L);A!==void 0&&Tt(dt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Ft(L)}function Ne(L){const A=L.texture,nt=r.get(L),dt=r.get(A);L.addEventListener("dispose",P);const Et=L.textures,mt=L.isWebGLCubeRenderTarget===!0,kt=Et.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=A.version,f.memory.textures++),mt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let zt=0;zt<A.mipmaps.length;zt++)nt.__webglFramebuffer[wt][zt]=s.createFramebuffer()}else nt.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(kt)for(let wt=0,zt=Et.length;wt<zt;wt++){const _e=r.get(Et[wt]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ge(L)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];nt.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const _e=c.convert(zt.format,zt.colorSpace),bt=c.convert(zt.type),Bt=U(zt.internalFormat,_e,bt,zt.colorSpace,L.isXRRenderTarget===!0),jt=ue(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Bt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),St(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),it(s.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)Tt(nt.__webglFramebuffer[wt][zt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else Tt(nt.__webglFramebuffer[wt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(A)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,zt=Et.length;wt<zt;wt++){const _e=Et[wt],bt=r.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),it(s.TEXTURE_2D,_e),Tt(nt.__webglFramebuffer,L,_e,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),M(_e)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,dt.__webglTexture),it(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)Tt(nt.__webglFramebuffer[zt],L,A,s.COLOR_ATTACHMENT0,wt,zt);else Tt(nt.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,wt,0);M(A)&&x(wt),i.unbindTexture()}L.depthBuffer&&Ft(L)}function fe(L){const A=L.textures;for(let nt=0,dt=A.length;nt<dt;nt++){const Et=A[nt];if(M(Et)){const mt=B(L),kt=r.get(Et).__webglTexture;i.bindTexture(mt,kt),x(mt),i.unbindTexture()}}}const We=[],I=[];function Tn(L){if(L.samples>0){if(ge(L)===!1){const A=L.textures,nt=L.width,dt=L.height;let Et=s.COLOR_BUFFER_BIT;const mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,kt=r.get(L),wt=A.length>1;if(wt)for(let zt=0;zt<A.length;zt++)i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let zt=0;zt<A.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,kt.__webglColorRenderbuffer[zt]);const _e=r.get(A[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,Et,s.NEAREST),p===!0&&(We.length=0,I.length=0,We.push(s.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(We.push(mt),I.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<A.length;zt++){i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,kt.__webglColorRenderbuffer[zt]);const _e=r.get(A[zt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ue(L){return Math.min(l.maxSamples,L.samples)}function ge(L){const A=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Yt(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function De(L,A){const nt=L.colorSpace,dt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==Ls&&nt!==Ha&&(Re.getTransfer(nt)===Ie?(dt!==Mi||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),A}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.setTexture2D=ut,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=ie,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ge}function wb(s,t){function i(r,l=Ha){let c;const f=Re.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===Ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===qv)return s.BYTE;if(r===Yv)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Dd)return s.INT;if(r===Tr)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Yo)return s.HALF_FLOAT;if(r===Zv)return s.ALPHA;if(r===Kv)return s.RGB;if(r===Mi)return s.RGBA;if(r===Qv)return s.LUMINANCE;if(r===Jv)return s.LUMINANCE_ALPHA;if(r===As)return s.DEPTH_COMPONENT;if(r===Us)return s.DEPTH_STENCIL;if(r===$v)return s.RED;if(r===Nd)return s.RED_INTEGER;if(r===t0)return s.RG;if(r===Od)return s.RG_INTEGER;if(r===Pd)return s.RGBA_INTEGER;if(r===Lc||r===Nc||r===Oc||r===Pc)if(f===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===$h||r===td||r===ed)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===nd||r===id)return f===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ad)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zc||r===xd||r===yd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===zc)return f===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===e0||r===Sd||r===Md||r===Ed)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ds?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Db={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),x=this._getHandJoint(m,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&y>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ga;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new On,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:Ub,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xn(new Qo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ob extends Os{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,y=null,S=null,E=null;const R=new Nb,M=i.getContextAttributes();let x=null,B=null;const U=[],w=[],j=new qt;let G=null;const P=new fi;P.viewport=new $e;const K=new fi;K.viewport=new $e;const D=[P,K],C=new tE;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=U[Z];return ft===void 0&&(ft=new Ih,U[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=U[Z];return ft===void 0&&(ft=new Ih,U[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=U[Z];return ft===void 0&&(ft=new Ih,U[Z]=ft),ft.getHandSpace()};function st(Z){const ft=w.indexOf(Z.inputSource);if(ft===-1)return;const Tt=U[ft];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,m||f),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function tt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",tt),l.removeEventListener("inputsourceschange",ut);for(let Z=0;Z<U.length;Z++){const ft=w[Z];ft!==null&&(w[Z]=null,U[Z].disconnect(ft))}H=null,ct=null,R.reset(),t.setRenderTarget(x),S=null,y=null,_=null,l=null,B=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",tt),l.addEventListener("inputsourceschange",ut),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(j),l.renderState.layers===void 0){const ft={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),B=new Ar(S.framebufferWidth,S.framebufferHeight,{format:Mi,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ft=null,Tt=null,St=null;M.depth&&(St=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=M.stencil?Us:As,Tt=M.stencil?Ds:Tr);const Gt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:c};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(Gt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),B=new Ar(y.textureWidth,y.textureHeight,{format:Mi,type:ca,depthTexture:new p0(y.textureWidth,y.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ut(Z){for(let ft=0;ft<Z.removed.length;ft++){const Tt=Z.removed[ft],St=w.indexOf(Tt);St>=0&&(w[St]=null,U[St].disconnect(Tt))}for(let ft=0;ft<Z.added.length;ft++){const Tt=Z.added[ft];let St=w.indexOf(Tt);if(St===-1){for(let Ft=0;Ft<U.length;Ft++)if(Ft>=w.length){w.push(Tt),St=Ft;break}else if(w[Ft]===null){w[Ft]=Tt,St=Ft;break}if(St===-1)break}const Gt=U[St];Gt&&Gt.connect(Tt)}}const O=new Q,Y=new Q;function X(Z,ft,Tt){O.setFromMatrixPosition(ft.matrixWorld),Y.setFromMatrixPosition(Tt.matrixWorld);const St=O.distanceTo(Y),Gt=ft.projectionMatrix.elements,Ft=Tt.projectionMatrix.elements,ie=Gt[14]/(Gt[10]-1),Ne=Gt[14]/(Gt[10]+1),fe=(Gt[9]+1)/Gt[5],We=(Gt[9]-1)/Gt[5],I=(Gt[8]-1)/Gt[0],Tn=(Ft[8]+1)/Ft[0],ue=ie*I,ge=ie*Tn,Yt=St/(-I+Tn),De=Yt*-I;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(Yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Gt[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Wt=ie+Yt,L=Ne+Yt,A=ue-De,nt=ge+(St-De),dt=fe*Ne/L*Wt,Et=We*Ne/L*Wt;Z.projectionMatrix.makePerspective(A,nt,dt,Et,Wt,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xt(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ft=Z.near,Tt=Z.far;R.texture!==null&&(R.depthNear>0&&(ft=R.depthNear),R.depthFar>0&&(Tt=R.depthFar)),C.near=K.near=P.near=ft,C.far=K.far=P.far=Tt,(H!==C.near||ct!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ct=C.far),P.layers.mask=Z.layers.mask|2,K.layers.mask=Z.layers.mask|4,C.layers.mask=P.layers.mask|K.layers.mask;const St=Z.parent,Gt=C.cameras;xt(C,St);for(let Ft=0;Ft<Gt.length;Ft++)xt(Gt[Ft],St);Gt.length===2?X(C,P,K):C.projectionMatrix.copy(P.projectionMatrix),At(Z,C,St)};function At(Z,ft,Tt){Tt===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Td*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Z){p=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let N=null;function it(Z,ft){if(g=ft.getViewerPose(m||f),E=ft,g!==null){const Tt=g.views;S!==null&&(t.setRenderTargetFramebuffer(B,S.framebuffer),t.setRenderTarget(B));let St=!1;Tt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Ft=0;Ft<Tt.length;Ft++){const ie=Tt[Ft];let Ne=null;if(S!==null)Ne=S.getViewport(ie);else{const We=_.getViewSubImage(y,ie);Ne=We.viewport,Ft===0&&(t.setRenderTargetTextures(B,We.colorTexture,y.ignoreDepthValues?void 0:We.depthStencilTexture),t.setRenderTarget(B))}let fe=D[Ft];fe===void 0&&(fe=new fi,fe.layers.enable(Ft),fe.viewport=new $e,D[Ft]=fe),fe.matrix.fromArray(ie.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ie.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ft===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(fe)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ft=_.getDepthInformation(Tt[0]);Ft&&Ft.isValid&&Ft.texture&&R.init(t,Ft,l.renderState)}}for(let Tt=0;Tt<U.length;Tt++){const St=w[Tt],Gt=U[Tt];St!==null&&Gt!==void 0&&Gt.update(St,ft,m||f)}N&&N(Z,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Mt=new A0;Mt.setAnimationLoop(it),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const _r=new Ni,Pb=new Ze;function zb(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,f0(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,B,U,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,B,U):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const B=t.get(x),U=B.envMap,w=B.envMapRotation;U&&(M.envMap.value=U,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(_r)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,B,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const B=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Bb(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,U){const w=U.program;r.uniformBlockBinding(B,w)}function m(B,U){let w=l[B.id];w===void 0&&(E(B),w=g(B),l[B.id]=w,B.addEventListener("dispose",M));const j=U.program;r.updateUBOMapping(B,j);const G=t.render.frame;c[B.id]!==G&&(y(B),c[B.id]=G)}function g(B){const U=_();B.__bindingPointIndex=U;const w=s.createBuffer(),j=B.__size,G=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,j,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function _(){for(let B=0;B<d;B++)if(f.indexOf(B)===-1)return f.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const U=l[B.id],w=B.uniforms,j=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let G=0,P=w.length;G<P;G++){const K=Array.isArray(w[G])?w[G]:[w[G]];for(let D=0,C=K.length;D<C;D++){const H=K[D];if(S(H,G,D,j)===!0){const ct=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let tt=0;for(let ut=0;ut<st.length;ut++){const O=st[ut],Y=R(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,ct+tt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,tt),tt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(B,U,w,j){const G=B.value,P=U+"_"+w;if(j[P]===void 0)return typeof G=="number"||typeof G=="boolean"?j[P]=G:j[P]=G.clone(),!0;{const K=j[P];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return j[P]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function E(B){const U=B.uniforms;let w=0;const j=16;for(let P=0,K=U.length;P<K;P++){const D=Array.isArray(U[P])?U[P]:[U[P]];for(let C=0,H=D.length;C<H;C++){const ct=D[C],st=Array.isArray(ct.value)?ct.value:[ct.value];for(let tt=0,ut=st.length;tt<ut;tt++){const O=st[tt],Y=R(O),X=w%j,xt=X%Y.boundary,At=X+xt;w+=xt,At!==0&&j-At<Y.storage&&(w+=j-At),ct.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=w,w+=Y.storage}}}const G=w%j;return G>0&&(w+=j-G),B.__size=w,B.__cache={},this}function R(B){const U={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(U.boundary=4,U.storage=4):B.isVector2?(U.boundary=8,U.storage=8):B.isVector3||B.isColor?(U.boundary=16,U.storage=12):B.isVector4?(U.boundary=16,U.storage=16):B.isMatrix3?(U.boundary=48,U.storage=48):B.isMatrix4?(U.boundary=64,U.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),U}function M(B){const U=B.target;U.removeEventListener("dispose",M);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const B in l)s.deleteBuffer(l[B]);f=[],l={},c={}}return{bind:p,update:m,dispose:x}}class Ib{constructor(t={}){const{canvas:i=GS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,x=null;const B=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=ka,this.toneMappingExposure=1;const w=this;let j=!1,G=0,P=0,K=null,D=-1,C=null;const H=new $e,ct=new $e;let st=null;const tt=new we(0);let ut=0,O=i.width,Y=i.height,X=1,xt=null,At=null;const N=new $e(0,0,O,Y),it=new $e(0,0,O,Y);let Mt=!1;const Z=new Bd;let ft=!1,Tt=!1;const St=new Ze,Gt=new Ze,Ft=new Q,ie=new $e,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function We(){return K===null?X:1}let I=r;function Tn(b,k){return i.getContext(b,k)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const k="webgl2";if(I=Tn(k,b),I===null)throw Tn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ue,ge,Yt,De,Wt,L,A,nt,dt,Et,mt,kt,wt,zt,_e,bt,Bt,jt,Xt,Nt,$t,ae,Oe,V;function Rt(){ue=new Y1(I),ue.init(),ae=new wb(I,ue),ge=new G1(I,ue,t,ae),Yt=new Rb(I,ue),ge.reverseDepthBuffer&&y&&Yt.buffers.depth.setReversed(!0),De=new K1(I),Wt=new pb,L=new Cb(I,ue,Yt,Wt,ge,ae,De),A=new k1(w),nt=new q1(w),dt=new iE(I),Oe=new F1(I,dt),Et=new j1(I,dt,De,Oe),mt=new J1(I,Et,dt,De),Xt=new Q1(I,ge,L),bt=new V1(Wt),kt=new db(w,A,nt,ue,ge,Oe,bt),wt=new zb(w,Wt),zt=new gb,_e=new Mb(ue),jt=new I1(w,A,nt,Yt,mt,S,p),Bt=new Ab(w,mt,ge),V=new Bb(I,De,ge,Yt),Nt=new H1(I,ue,De),$t=new Z1(I,ue,De),De.programs=kt.programs,w.capabilities=ge,w.extensions=ue,w.properties=Wt,w.renderLists=zt,w.shadowMap=Bt,w.state=Yt,w.info=De}Rt();const lt=new Ob(w,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(O,Y,!1))},this.getSize=function(b){return b.set(O,Y)},this.setSize=function(b,k,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,Y=k,i.width=Math.floor(b*X),i.height=Math.floor(k*X),at===!0&&(i.style.width=b+"px",i.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(O*X,Y*X).floor()},this.setDrawingBufferSize=function(b,k,at){O=b,Y=k,X=at,i.width=Math.floor(b*at),i.height=Math.floor(k*at),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,k,at,rt){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,k,at,rt),Yt.viewport(H.copy(N).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,k,at,rt){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,k,at,rt),Yt.scissor(ct.copy(it).multiplyScalar(X).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(b){Yt.setScissorTest(Mt=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){At=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,k=!0,at=!0){let rt=0;if(b){let W=!1;if(K!==null){const vt=K.texture.format;W=vt===Pd||vt===Od||vt===Nd}if(W){const vt=K.texture.type,Ut=vt===ca||vt===Tr||vt===Vo||vt===Ds||vt===Ud||vt===Ld,Pt=jt.getClearColor(),Ot=jt.getClearAlpha(),Qt=Pt.r,ee=Pt.g,Zt=Pt.b;Ut?(E[0]=Qt,E[1]=ee,E[2]=Zt,E[3]=Ot,I.clearBufferuiv(I.COLOR,0,E)):(R[0]=Qt,R[1]=ee,R[2]=Zt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else rt|=I.COLOR_BUFFER_BIT}k&&(rt|=I.DEPTH_BUFFER_BIT),at&&(rt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),jt.dispose(),zt.dispose(),_e.dispose(),Wt.dispose(),A.dispose(),nt.dispose(),mt.dispose(),Oe.dispose(),V.dispose(),kt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Is),lt.removeEventListener("sessionend",Fs),Ti.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const b=De.autoReset,k=Bt.enabled,at=Bt.autoUpdate,rt=Bt.needsUpdate,W=Bt.type;Rt(),De.autoReset=b,Bt.enabled=k,Bt.autoUpdate=at,Bt.needsUpdate=rt,Bt.type=W}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const k=b.target;k.removeEventListener("dispose",te),qe(k)}function qe(b){un(b),Wt.remove(b)}function un(b){const k=Wt.get(b).programs;k!==void 0&&(k.forEach(function(at){kt.releaseProgram(at)}),b.isShaderMaterial&&kt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,at,rt,W,vt){k===null&&(k=Ne);const Ut=W.isMesh&&W.matrixWorld.determinant()<0,Pt=Gs(b,k,at,rt,W);Yt.setMaterial(rt,Ut);let Ot=at.index,Qt=1;if(rt.wireframe===!0){if(Ot=Et.getWireframeAttribute(at),Ot===void 0)return;Qt=2}const ee=at.drawRange,Zt=at.attributes.position;let ve=ee.start*Qt,Ee=(ee.start+ee.count)*Qt;vt!==null&&(ve=Math.max(ve,vt.start*Qt),Ee=Math.min(Ee,(vt.start+vt.count)*Qt)),Ot!==null?(ve=Math.max(ve,0),Ee=Math.min(Ee,Ot.count)):Zt!=null&&(ve=Math.max(ve,0),Ee=Math.min(Ee,Zt.count));const Ge=Ee-ve;if(Ge<0||Ge===1/0)return;Oe.setup(W,rt,Pt,at,Ot);let Fe,re=Nt;if(Ot!==null&&(Fe=dt.get(Ot),re=$t,re.setIndex(Fe)),W.isMesh)rt.wireframe===!0?(Yt.setLineWidth(rt.wireframeLinewidth*We()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(W.isLine){let Ht=rt.linewidth;Ht===void 0&&(Ht=1),Yt.setLineWidth(Ht*We()),W.isLineSegments?re.setMode(I.LINES):W.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else W.isPoints?re.setMode(I.POINTS):W.isSprite&&re.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)re.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ht=W._multiDrawStarts,an=W._multiDrawCounts,Te=W._multiDrawCount,Dn=Ot?dt.get(Ot).bytesPerElement:1,zi=Wt.get(rt).currentProgram.getUniforms();for(let mn=0;mn<Te;mn++)zi.setValue(I,"_gl_DrawID",mn),re.render(Ht[mn]/Dn,an[mn])}else if(W.isInstancedMesh)re.renderInstances(ve,Ge,W.count);else if(at.isInstancedBufferGeometry){const Ht=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,an=Math.min(at.instanceCount,Ht);re.renderInstances(ve,Ge,an)}else re.render(ve,Ge)};function Me(b,k,at){b.transparent===!0&&b.side===hi&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,Ke(b,k,at),b.side=Xa,b.needsUpdate=!0,Ke(b,k,at),b.side=hi):Ke(b,k,at)}this.compile=function(b,k,at=null){at===null&&(at=b),x=_e.get(at),x.init(k),U.push(x),at.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),b!==at&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const rt=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){const Pt=vt[Ut];Me(Pt,at,W),rt.add(Pt)}else Me(vt,at,W),rt.add(vt)}),U.pop(),x=null,rt},this.compileAsync=function(b,k,at=null){const rt=this.compile(b,k,at);return new Promise(W=>{function vt(){if(rt.forEach(function(Ut){Wt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){W(b);return}setTimeout(vt,10)}ue.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let vn=null;function di(b){vn&&vn(b)}function Is(){Ti.stop()}function Fs(){Ti.start()}const Ti=new A0;Ti.setAnimationLoop(di),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(b){vn=b,lt.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},lt.addEventListener("sessionstart",Is),lt.addEventListener("sessionend",Fs),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,k,K),x=_e.get(b,U.length),x.init(k),U.push(x),Gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(Gt),Tt=this.localClippingEnabled,ft=bt.init(this.clippingPlanes,Tt),M=zt.get(b,B.length),M.init(),B.push(M),lt.enabled===!0&&lt.isPresenting===!0){const vt=w.xr.getDepthSensingMesh();vt!==null&&qa(vt,k,-1/0,w.sortObjects)}qa(b,k,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(xt,At),fe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,fe&&jt.addToRenderList(M,b),this.info.render.frame++,ft===!0&&bt.beginShadows();const at=x.state.shadowsArray;Bt.render(at,b,k),ft===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,W=M.transmissive;if(x.setupLights(),k.isArrayCamera){const vt=k.cameras;if(W.length>0)for(let Ut=0,Pt=vt.length;Ut<Pt;Ut++){const Ot=vt[Ut];Hs(rt,W,b,Ot)}fe&&jt.render(b);for(let Ut=0,Pt=vt.length;Ut<Pt;Ut++){const Ot=vt[Ut];Rr(M,b,Ot,Ot.viewport)}}else W.length>0&&Hs(rt,W,b,k),fe&&jt.render(b),Rr(M,b,k);K!==null&&(L.updateMultisampleRenderTarget(K),L.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(w,b,k),Oe.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(x=U[U.length-1],ft===!0&&bt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function qa(b,k,at,rt){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)at=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){rt&&ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);const Ut=mt.update(b),Pt=b.material;Pt.visible&&M.push(b,Ut,Pt,at,ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Ut=mt.update(b),Pt=b.material;if(rt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ie.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ie.copy(Ut.boundingSphere.center)),ie.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(Pt)){const Ot=Ut.groups;for(let Qt=0,ee=Ot.length;Qt<ee;Qt++){const Zt=Ot[Qt],ve=Pt[Zt.materialIndex];ve&&ve.visible&&M.push(b,Ut,ve,at,ie.z,Zt)}}else Pt.visible&&M.push(b,Ut,Pt,at,ie.z,null)}}const vt=b.children;for(let Ut=0,Pt=vt.length;Ut<Pt;Ut++)qa(vt[Ut],k,at,rt)}function Rr(b,k,at,rt){const W=b.opaque,vt=b.transmissive,Ut=b.transparent;x.setupLightsView(at),ft===!0&&bt.setGlobalState(w.clippingPlanes,at),rt&&Yt.viewport(H.copy(rt)),W.length>0&&Ya(W,k,at),vt.length>0&&Ya(vt,k,at),Ut.length>0&&Ya(Ut,k,at),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Hs(b,k,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new Ar(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Yo:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const vt=x.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||H;vt.setSize(Ut.z,Ut.w);const Pt=w.getRenderTarget();w.setRenderTarget(vt),w.getClearColor(tt),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),fe&&jt.render(at);const Ot=w.toneMapping;w.toneMapping=ka;const Qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),ft===!0&&bt.setGlobalState(w.clippingPlanes,rt),Ya(b,at,rt),L.updateMultisampleRenderTarget(vt),L.updateRenderTargetMipmap(vt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Zt=0,ve=k.length;Zt<ve;Zt++){const Ee=k[Zt],Ge=Ee.object,Fe=Ee.geometry,re=Ee.material,Ht=Ee.group;if(re.side===hi&&Ge.layers.test(rt.layers)){const an=re.side;re.side=Wn,re.needsUpdate=!0,pi(Ge,at,rt,Fe,re,Ht),re.side=an,re.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(vt),L.updateRenderTargetMipmap(vt))}w.setRenderTarget(Pt),w.setClearColor(tt,ut),Qt!==void 0&&(rt.viewport=Qt),w.toneMapping=Ot}function Ya(b,k,at){const rt=k.isScene===!0?k.overrideMaterial:null;for(let W=0,vt=b.length;W<vt;W++){const Ut=b[W],Pt=Ut.object,Ot=Ut.geometry,Qt=rt===null?Ut.material:rt,ee=Ut.group;Pt.layers.test(at.layers)&&pi(Pt,k,at,Ot,Qt,ee)}}function pi(b,k,at,rt,W,vt){b.onBeforeRender(w,k,at,rt,W,vt),b.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(w,k,at,rt,b,vt),W.transparent===!0&&W.side===hi&&W.forceSinglePass===!1?(W.side=Wn,W.needsUpdate=!0,w.renderBufferDirect(at,k,rt,W,b,vt),W.side=Xa,W.needsUpdate=!0,w.renderBufferDirect(at,k,rt,W,b,vt),W.side=hi):w.renderBufferDirect(at,k,rt,W,b,vt),b.onAfterRender(w,k,at,rt,W,vt)}function Ke(b,k,at){k.isScene!==!0&&(k=Ne);const rt=Wt.get(b),W=x.state.lights,vt=x.state.shadowsArray,Ut=W.state.version,Pt=kt.getParameters(b,W.state,vt,k,at),Ot=kt.getProgramCacheKey(Pt);let Qt=rt.programs;rt.environment=b.isMeshStandardMaterial?k.environment:null,rt.fog=k.fog,rt.envMap=(b.isMeshStandardMaterial?nt:A).get(b.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",te),Qt=new Map,rt.programs=Qt);let ee=Qt.get(Ot);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===Ut)return Pi(b,Pt),ee}else Pt.uniforms=kt.getUniforms(b),b.onBeforeCompile(Pt,w),ee=kt.acquireProgram(Pt,Ot),Qt.set(Ot,ee),rt.uniforms=Pt.uniforms;const Zt=rt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=bt.uniform),Pi(b,Pt),rt.needsLights=Wc(b),rt.lightsStateVersion=Ut,rt.needsLights&&(Zt.ambientLightColor.value=W.state.ambient,Zt.lightProbe.value=W.state.probe,Zt.directionalLights.value=W.state.directional,Zt.directionalLightShadows.value=W.state.directionalShadow,Zt.spotLights.value=W.state.spot,Zt.spotLightShadows.value=W.state.spotShadow,Zt.rectAreaLights.value=W.state.rectArea,Zt.ltc_1.value=W.state.rectAreaLTC1,Zt.ltc_2.value=W.state.rectAreaLTC2,Zt.pointLights.value=W.state.point,Zt.pointLightShadows.value=W.state.pointShadow,Zt.hemisphereLights.value=W.state.hemi,Zt.directionalShadowMap.value=W.state.directionalShadowMap,Zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Zt.spotShadowMap.value=W.state.spotShadowMap,Zt.spotLightMatrix.value=W.state.spotLightMatrix,Zt.spotLightMap.value=W.state.spotLightMap,Zt.pointShadowMap.value=W.state.pointShadowMap,Zt.pointShadowMatrix.value=W.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function xn(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Bc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Pi(b,k){const at=Wt.get(b);at.outputColorSpace=k.outputColorSpace,at.batching=k.batching,at.batchingColor=k.batchingColor,at.instancing=k.instancing,at.instancingColor=k.instancingColor,at.instancingMorph=k.instancingMorph,at.skinning=k.skinning,at.morphTargets=k.morphTargets,at.morphNormals=k.morphNormals,at.morphColors=k.morphColors,at.morphTargetsCount=k.morphTargetsCount,at.numClippingPlanes=k.numClippingPlanes,at.numIntersection=k.numClipIntersection,at.vertexAlphas=k.vertexAlphas,at.vertexTangents=k.vertexTangents,at.toneMapping=k.toneMapping}function Gs(b,k,at,rt,W){k.isScene!==!0&&(k=Ne),L.resetTextureUnits();const vt=k.fog,Ut=rt.isMeshStandardMaterial?k.environment:null,Pt=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ls,Ot=(rt.isMeshStandardMaterial?nt:A).get(rt.envMap||Ut),Qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,Ee=!!at.morphAttributes.color;let Ge=ka;rt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=w.toneMapping);const Fe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,re=Fe!==void 0?Fe.length:0,Ht=Wt.get(rt),an=x.state.lights;if(ft===!0&&(Tt===!0||b!==C)){const fn=b===C&&rt.id===D;bt.setState(rt,b,fn)}let Te=!1;rt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==an.state.version||Ht.outputColorSpace!==Pt||W.isBatchedMesh&&Ht.batching===!1||!W.isBatchedMesh&&Ht.batching===!0||W.isBatchedMesh&&Ht.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ht.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ht.instancing===!1||!W.isInstancedMesh&&Ht.instancing===!0||W.isSkinnedMesh&&Ht.skinning===!1||!W.isSkinnedMesh&&Ht.skinning===!0||W.isInstancedMesh&&Ht.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ht.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ht.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ht.instancingMorph===!1&&W.morphTexture!==null||Ht.envMap!==Ot||rt.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==bt.numPlanes||Ht.numIntersection!==bt.numIntersection)||Ht.vertexAlphas!==Qt||Ht.vertexTangents!==ee||Ht.morphTargets!==Zt||Ht.morphNormals!==ve||Ht.morphColors!==Ee||Ht.toneMapping!==Ge||Ht.morphTargetsCount!==re)&&(Te=!0):(Te=!0,Ht.__version=rt.version);let Dn=Ht.currentProgram;Te===!0&&(Dn=Ke(rt,k,W));let zi=!1,mn=!1,Za=!1;const he=Dn.getUniforms(),An=Ht.uniforms;if(Yt.useProgram(Dn.program)&&(zi=!0,mn=!0,Za=!0),rt.id!==D&&(D=rt.id,mn=!0),zi||C!==b){Yt.buffers.depth.getReversed()?(St.copy(b.projectionMatrix),kS(St),XS(St),he.setValue(I,"projectionMatrix",St)):he.setValue(I,"projectionMatrix",b.projectionMatrix),he.setValue(I,"viewMatrix",b.matrixWorldInverse);const tn=he.map.cameraPosition;tn!==void 0&&tn.setValue(I,Ft.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&he.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,mn=!0,Za=!0)}if(W.isSkinnedMesh){he.setOptional(I,W,"bindMatrix"),he.setOptional(I,W,"bindMatrixInverse");const fn=W.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),he.setValue(I,"boneTexture",fn.boneTexture,L))}W.isBatchedMesh&&(he.setOptional(I,W,"batchingTexture"),he.setValue(I,"batchingTexture",W._matricesTexture,L),he.setOptional(I,W,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",W._indirectTexture,L),he.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",W._colorsTexture,L));const Un=at.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Xt.update(W,at,Dn),(mn||Ht.receiveShadow!==W.receiveShadow)&&(Ht.receiveShadow=W.receiveShadow,he.setValue(I,"receiveShadow",W.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=Ot,An.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&k.environment!==null&&(An.envMapIntensity.value=k.environmentIntensity),mn&&(he.setValue(I,"toneMappingExposure",w.toneMappingExposure),Ht.needsLights&&Xc(An,Za),vt&&rt.fog===!0&&wt.refreshFogUniforms(An,vt),wt.refreshMaterialUniforms(An,rt,X,Y,x.state.transmissionRenderTarget[b.id]),Bc.upload(I,xn(Ht),An,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Bc.upload(I,xn(Ht),An,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&he.setValue(I,"center",W.center),he.setValue(I,"modelViewMatrix",W.modelViewMatrix),he.setValue(I,"normalMatrix",W.normalMatrix),he.setValue(I,"modelMatrix",W.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const fn=rt.uniformsGroups;for(let tn=0,Cr=fn.length;tn<Cr;tn++){const Ai=fn[tn];V.update(Ai,Dn),V.bind(Ai,Dn)}}return Dn}function Xc(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Wc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,k,at){Wt.get(b.texture).__webglTexture=k,Wt.get(b.depthTexture).__webglTexture=at;const rt=Wt.get(b);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const at=Wt.get(b);at.__webglFramebuffer=k,at.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,at=0){K=b,G=k,P=at;let rt=!0,W=null,vt=!1,Ut=!1;if(b){const Ot=Wt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(I.FRAMEBUFFER,null),rt=!1;else if(Ot.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Ot.__hasExternalTextures)L.rebindTextures(b,Wt.get(b.texture).__webglTexture,Wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Zt=b.depthTexture;if(Ot.__boundDepthTexture!==Zt){if(Zt!==null&&Wt.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const ee=Wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[k])?W=ee[k][at]:W=ee[k],vt=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?W=Wt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?W=ee[at]:W=ee,H.copy(b.viewport),ct.copy(b.scissor),st=b.scissorTest}else H.copy(N).multiplyScalar(X).floor(),ct.copy(it).multiplyScalar(X).floor(),st=Mt;if(Yt.bindFramebuffer(I.FRAMEBUFFER,W)&&rt&&Yt.drawBuffers(b,W),Yt.viewport(H),Yt.scissor(ct),Yt.setScissorTest(st),vt){const Ot=Wt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,at)}else if(Ut){const Ot=Wt.get(b.texture),Qt=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,at||0,Qt)}D=-1},this.readRenderTargetPixels=function(b,k,at,rt,W,vt,Ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){Yt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Ot=b.texture,Qt=Ot.format,ee=Ot.type;if(!ge.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-rt&&at>=0&&at<=b.height-W&&I.readPixels(k,at,rt,W,ae.convert(Qt),ae.convert(ee),vt)}finally{const Ot=K!==null?Wt.get(K).__webglFramebuffer:null;Yt.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,k,at,rt,W,vt,Ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){const Ot=b.texture,Qt=Ot.format,ee=Ot.type;if(!ge.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-rt&&at>=0&&at<=b.height-W){Yt.bindFramebuffer(I.FRAMEBUFFER,Pt);const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),I.readPixels(k,at,rt,W,ae.convert(Qt),ae.convert(ee),0);const ve=K!==null?Wt.get(K).__webglFramebuffer:null;Yt.bindFramebuffer(I.FRAMEBUFFER,ve);const Ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await VS(I,Ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(Zt),I.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,at=0){b.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const rt=Math.pow(2,-at),W=Math.floor(b.image.width*rt),vt=Math.floor(b.image.height*rt),Ut=k!==null?k.x:0,Pt=k!==null?k.y:0;L.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Ut,Pt,W,vt),Yt.unbindTexture()};const Jo=I.createFramebuffer(),ja=I.createFramebuffer();this.copyTextureToTexture=function(b,k,at=null,rt=null,W=0,vt=null){b.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,b=arguments[1],k=arguments[2],vt=arguments[3]||0,at=null),vt===null&&(W!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=W,W=0):vt=0);let Ut,Pt,Ot,Qt,ee,Zt,ve,Ee,Ge;const Fe=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(at!==null)Ut=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,ee=at.min.y,Zt=at.isBox3?at.min.z:0;else{const Un=Math.pow(2,-W);Ut=Math.floor(Fe.width*Un),Pt=Math.floor(Fe.height*Un),b.isDataArrayTexture?Ot=Fe.depth:b.isData3DTexture?Ot=Math.floor(Fe.depth*Un):Ot=1,Qt=0,ee=0,Zt=0}rt!==null?(ve=rt.x,Ee=rt.y,Ge=rt.z):(ve=0,Ee=0,Ge=0);const re=ae.convert(k.format),Ht=ae.convert(k.type);let an;k.isData3DTexture?(L.setTexture3D(k,0),an=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),an=I.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),an=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),Dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),mn=I.getParameter(I.UNPACK_SKIP_ROWS),Za=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const he=b.isDataArrayTexture||b.isData3DTexture,An=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Un=Wt.get(b),fn=Wt.get(k),tn=Wt.get(Un.__renderTarget),Cr=Wt.get(fn.__renderTarget);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Ai=0;Ai<Ot;Ai++)he&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.get(b).__webglTexture,W,Zt+Ai),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.get(k).__webglTexture,vt,Ge+Ai)),I.blitFramebuffer(Qt,ee,Ut,Pt,ve,Ee,Ut,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Wt.has(b)){const Un=Wt.get(b),fn=Wt.get(k);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,Jo),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ja);for(let tn=0;tn<Ot;tn++)he?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Un.__webglTexture,W,Zt+tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Un.__webglTexture,W),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,vt,Ge+tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,vt),W!==0?I.blitFramebuffer(Qt,ee,Ut,Pt,ve,Ee,Ut,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(an,vt,ve,Ee,Ge+tn,Qt,ee,Ut,Pt):I.copyTexSubImage2D(an,vt,ve,Ee,Qt,ee,Ut,Pt);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(an,vt,ve,Ee,Ge,Ut,Pt,Ot,re,Ht,Fe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(an,vt,ve,Ee,Ge,Ut,Pt,Ot,re,Fe.data):I.texSubImage3D(an,vt,ve,Ee,Ge,Ut,Pt,Ot,re,Ht,Fe):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,ve,Ee,Ut,Pt,re,Ht,Fe.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,ve,Ee,Fe.width,Fe.height,re,Fe.data):I.texSubImage2D(I.TEXTURE_2D,vt,ve,Ee,Ut,Pt,re,Ht,Fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Za),vt===0&&k.generateMipmaps&&I.generateMipmap(an),Yt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,at=null,rt=null,W=0){return b.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,rt=arguments[1]||null,b=arguments[2],k=arguments[3],W=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,at,rt,W)},this.initRenderTarget=function(b){Wt.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Yt.unbindTexture()},this.resetState=function(){G=0,P=0,K=null,Yt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Xe={name:"Priyansha Sharma",initials:"PS",role:"Operations Team Lead",discipline:"Customer Operations",location:"Delhi, India",email:"priyansha.s.official@gmail.com",resume:"/Priyansha_Sharma_CV.pdf",headline:"Operations lead turning escalations, vendor ecosystems, and SLA pressure into governed, predictable delivery.",summary:"Operations Team Lead with 2+ years at Cache Labs (Chronicle International Publishers), promoted from Operations Associate to Team Lead and leading a 4-member team for over a year. Owns quality, SLA/TAT governance, exception handling, and escalation resolution across high-volume publishing operations. Currently pursuing an MBA.",focusAreas:["Exception handling and QA","Quality and compliance governance","SLA / TAT adherence","Process governance and audit","Escalation management (primary POC)","Workflow optimization","Documentation and SOPs","Team leadership and mentoring","Cross-functional and vendor coordination","KPI and performance monitoring","Stakeholder reporting","Invoice / payment coordination","Product lifecycle support","Requirements analysis","Platform administration"],competencies:["ClickUp","Advanced Excel (VLOOKUP, dashboards)","Power BI","ServiceNow familiarity","MS Office","Business documentation","User story refinement"],metrics:[{value:"100%",label:"SLA/TAT adherence",detail:"Sustained across content, publishing, and delivery workflows."},{value:"75%",label:"Efficiency gain",detail:"Operational efficiency raised through structured task management."},{value:"45+",label:"Escalations / month",detail:"Single point of contact between client teams and vendor partners."},{value:"4",label:"Team members led",detail:"Led and trained a 4-member operations team for over a year."},{value:"30%",label:"Delivery lift",detail:"Improved team timelines through structured workflows."},{value:"10+",label:"Partner relationships",detail:"Managed vendors and external partners as single POC."},{value:"3",label:"Promotions",detail:"Advanced from Jr. Associate to Team Lead in 2 years."}],experience:[{company:"Cache Labs (Chronicle International Publishers)",role:"Team Lead, Operations",period:"March 2026 - Present",bullets:["Act as the primary escalation point for client and vendor issues, driving critical-issue resolution and sustaining 100% SLA/TAT adherence across content, publishing, and delivery workflows.","Lead end-to-end operations for the CIP and Smart Immigrant client accounts, translating business needs into actionable tasks across intake, quality, turnaround, and delivery.","Manage team execution in ClickUp through task delegation, tracking, and performance oversight, improving delivery timelines by 30%.","Build and maintain Advanced Excel dashboards and trackers covering client onboarding, publication status, vendor SLAs, and escalations, feeding structured weekly stakeholder reporting.","Enforce process standards and run team training to raise quality and consistency, improving operational efficiency by 75%.","Manage 10+ vendors and resolve 20+ escalations monthly, coordinating internal teams and external partners on issue resolution, communication, and invoice/payment processes.","Collaborate with the CEO and Founder on scaling strategy, product roadmaps, and platform expansion."]},{company:"Cache Labs",role:"Sr. Operations Associate",period:"April 2025 - February 2026",bullets:["Led a 4-member team and served as the single point of contact for escalations between client-facing teams and external vendors and journal partners, resolving 45+ escalations per month.","Owned end-to-end vendor relationships, maintaining trackers and delivering structured weekly status updates to stakeholders at 100% SLA/TAT adherence.","Designed operational dashboards and standardized documentation to improve visibility and turnaround across concurrent client deliveries.","Identified user pain points and recommended platform improvements from operational data."]},{company:"Cache Labs",role:"Operations Associate",period:"September 2024 - March 2025",bullets:["Managed daily operational workflows for in-house journal development with high accuracy and on-time turnaround.","Maintained structured documentation, progress reports, and process workflows supporting cross-functional execution and delivery.","Supported requirement gathering and testing for in-house digital products including a journals platform."]},{company:"Cache Labs",role:"Jr. Operations Associate",period:"April 2024 - August 2024",bullets:["Delivered end-to-end execution across paper, book, and journal publishing, ensuring high-quality, on-time outcomes.","Resolved complex client issues cross-functionally using decision-support tools to improve client satisfaction."]},{company:"Helping India Feeding India",role:"Marketing Intern",period:"May 2023 - August 2023",bullets:["Created 20+ success stories across social media to strengthen brand storytelling and stakeholder outreach.","Executed 5+ awareness campaigns with supporting content for social impact initiatives."]}],education:["MBA, Manipal Academy of Higher Education - expected 2027","B.Sc. Microbiology, Dr. Shyama Prasad Mukherjee University, Ranchi - 79.83%, 2023","Class XII, CBSE, Surendranath Centenary School, Ranchi - 80%, 2020","Class X, ICSE, St. Francis School, Ranchi - 86%, 2018"],certifications:["Supply Chain Operations, Rutgers via Coursera","Operations Management: Organization and Analysis, Illinois via Coursera","Careers in Tourism - Event Operations Job Simulation, Forage, 2023"],publication:"Published research review: Circulating Tumor Cells: An Approach for Early Detection of Cancer, IJRAR."};function Fb(){const s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}function Hb(s,t,i,r,l,c){const f=t.split(" ");let d="",p=r;f.forEach((m,g)=>{const _=`${d}${m} `;s.measureText(_).width>l&&g>0?(s.fillText(d,i,p),d=`${m} `,p+=c):d=_}),s.fillText(d,i,p)}function Gb(s,t,i){const r=document.createElement("canvas");r.width=768,r.height=448;const l=r.getContext("2d");if(!l)return new rv(r);l.fillStyle="#f7f7f2",l.fillRect(0,0,r.width,r.height),l.strokeStyle="#160008",l.lineWidth=10,l.strokeRect(22,22,r.width-44,r.height-44),l.fillStyle=i,l.fillRect(22,22,96,r.height-44),l.fillStyle="#160008",l.font="700 74px ui-monospace, SFMono-Regular, Menlo, monospace",l.fillText(s,152,184),l.font="500 36px Inter, Arial, sans-serif",Hb(l,t,154,252,540,45);const c=new rv(r);return c.colorSpace=Vn,c.anisotropy=8,c}function Vb(){const s=new x0,t=8;for(let i=0;i<t*2;i+=1){const r=i%2===0?.5:.11,l=i/(t*2)*Math.PI*2,c=Math.cos(l)*r,f=Math.sin(l)*r;i===0?s.moveTo(c,f):s.lineTo(c,f)}return s.closePath(),new Hd(s)}const Hv=["#f20a3f","#00a6a6","#f4bf2a","#ffffff"];function kb(){const s=kn.useRef(null),[t,i]=kn.useState(!1);return kn.useEffect(()=>{const r=s.current;if(!r||!Fb()){i(!0);return}const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=new pM,f=new fi(42,window.innerWidth/window.innerHeight,.1,100);f.position.set(0,.4,10);const d=new Ib({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(window.innerWidth,window.innerHeight),d.outputColorSpace=Vn,r.appendChild(d.domElement);const p=new Ga;c.add(p);const m=new $M(16777215,1.6),g=new JM(16777215,2.4);g.position.set(4,5,5),c.add(m,g);const _=Xe.metrics.map((tt,ut)=>{const O=Gb(tt.value,tt.label,Hv[ut%Hv.length]),Y=new Io({map:O,transparent:!0,side:hi}),X=new Xn(new Qo(2.5,1.46),Y),xt=ut/Xe.metrics.length*Math.PI*2;return X.position.set(Math.cos(xt)*4.2,Math.sin(xt*1.2)*1.45,Math.sin(xt)*1.6-1.1),X.rotation.set(.12*Math.sin(xt),-xt*.22,.08*Math.cos(xt)),p.add(X),X}),y=new Dh({color:"#160008",roughness:.38,metalness:.2}),S=new Dh({color:"#f20a3f",roughness:.26,metalness:.34}),E=new Dh({color:"#00a6a6",roughness:.45,metalness:.18}),R=new Ga;for(let tt=0;tt<22;tt+=1){const ut=new zs(.12+tt%4*.08,.12+tt%5*.1,.12),O=tt%3===0?S:tt%3===1?E:y,Y=new Xn(ut,O);Y.position.set(tt%6*.42-1.15,Math.floor(tt/6)*.36-.6,0),Y.rotation.z=tt%2*.2,R.add(Y)}R.position.set(.3,-.25,-.4),R.rotation.set(-.3,.35,.12),p.add(R);const M=Vb(),x=new Io({color:"#f4bf2a",side:hi}),B=new Ga;for(let tt=0;tt<16;tt+=1){const ut=new Xn(M,x),O=tt/16*Math.PI*2;ut.position.set(Math.cos(O)*5.4,Math.sin(O)*2.6,Math.sin(O*2)*1.5),ut.scale.setScalar(.24+tt%4*.06),B.add(ut)}p.add(B);const U=new Ga,w=new Io({color:"#160008",transparent:!0,opacity:.18,side:hi});for(let tt=0;tt<4;tt+=1){const ut=new Xn(new Gd(2.5+tt*.62,.006,8,120),w);ut.rotation.set(1.3,.25+tt*.2,tt*.18),U.add(ut)}p.add(U);const j={x:0,y:0},G={value:0},P={x:window.innerWidth>900?1.9:1.05,scale:window.innerWidth>900?.88:.62};p.scale.setScalar(P.scale);const K=tt=>{j.x=(tt.clientX/window.innerWidth-.5)*2,j.y=(tt.clientY/window.innerHeight-.5)*2},D=()=>{const tt=document.documentElement.scrollHeight-window.innerHeight;G.value=tt>0?window.scrollY/tt:0},C=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),P.x=window.innerWidth>900?1.9:1.05,P.scale=window.innerWidth>900?.88:.62,p.scale.setScalar(P.scale),d.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("pointermove",K),window.addEventListener("scroll",D,{passive:!0}),window.addEventListener("resize",C),D();let H=0;const ct=new eE,st=()=>{const tt=ct.getElapsedTime();p.rotation.y=j.x*.12+G.value*.72,p.rotation.x=-j.y*.08+G.value*.18,p.position.y=.4-G.value*1.9,p.position.x=P.x+G.value*-.55,_.forEach((ut,O)=>{ut.position.y+=Math.sin(tt*.55+O)*.0018,ut.rotation.z=Math.sin(tt*.38+O)*.04}),R.rotation.y=tt*.18,B.rotation.z=tt*.08,U.rotation.z=tt*.04,U.rotation.x=.16+Math.sin(tt*.2)*.04,d.render(c,f),l||(H=window.requestAnimationFrame(st))};return st(),()=>{window.cancelAnimationFrame(H),window.removeEventListener("pointermove",K),window.removeEventListener("scroll",D),window.removeEventListener("resize",C),r.removeChild(d.domElement),c.traverse(tt=>{tt instanceof Xn&&(tt.geometry.dispose(),(Array.isArray(tt.material)?tt.material:[tt.material]).forEach(O=>O.dispose()))}),d.dispose()}},[]),yt.jsxs("div",{className:"scene-shell","aria-hidden":"true",children:[yt.jsx("div",{ref:s,className:"scene-shell__mount"}),t?yt.jsx("div",{className:"scene-shell__fallback"}):null]})}const Xb=[{href:"#about",label:"About"},{href:"#impact",label:"Impact"},{href:"#experience",label:"Experience"},{href:"#contact",label:"Contact"}];function Wb({highContrast:s,onToggleContrast:t}){return yt.jsxs("header",{className:"site-header",children:[yt.jsx("a",{className:"site-header__mark",href:"#top","aria-label":`${Xe.name} home`,children:Xe.initials}),yt.jsx("nav",{className:"site-nav","aria-label":"Primary navigation",children:Xb.map(i=>yt.jsx("a",{href:i.href,children:i.label},i.href))}),yt.jsxs("div",{className:"site-header__actions",children:[yt.jsx("a",{className:"icon-link",href:`mailto:${Xe.email}`,"aria-label":`Email ${Xe.name}`,children:yt.jsx(Vv,{size:19,"aria-hidden":"true"})}),yt.jsx("button",{className:"icon-link",type:"button",onClick:t,"aria-label":"Toggle contrast",children:s?yt.jsx(Ky,{size:19,"aria-hidden":"true"}):yt.jsx(Zy,{size:19,"aria-hidden":"true"})})]})]})}function qb(){const[s,t]=kn.useState(!1),[i,r]=kn.useState(!0),[l,c]=kn.useState(!1);return kn.useEffect(()=>{const f=window.setTimeout(()=>t(!0),1450),d=window.setTimeout(()=>r(!1),2300);return()=>{window.clearTimeout(f),window.clearTimeout(d)}},[]),kn.useEffect(()=>{document.documentElement.dataset.contrast=l?"high":"standard"},[l]),yt.jsxs("div",{className:"app",children:[i?yt.jsx(Jy,{done:s}):null,yt.jsx(kb,{}),yt.jsx(Wb,{highContrast:l,onToggleContrast:()=>c(f=>!f)}),yt.jsxs("main",{children:[yt.jsxs("section",{className:"hero section",id:"top","data-section":"hero",children:[yt.jsx(O_,{text:"operations signal"}),yt.jsxs("div",{className:"hero__inner",children:[yt.jsxs("p",{className:"eyebrow",children:[Xe.location," / ",Xe.discipline]}),yt.jsxs("h1",{children:[yt.jsx("span",{children:Xe.name}),yt.jsx("strong",{children:Xe.role})]}),yt.jsx("p",{className:"hero__copy",children:Xe.headline}),yt.jsxs("div",{className:"hero__actions",children:[yt.jsxs("a",{className:"button button--primary",href:"#contact",children:[yt.jsx(Vv,{size:18,"aria-hidden":"true"}),"Contact"]}),yt.jsxs("a",{className:"button button--ghost",href:Xe.resume,download:!0,children:[yt.jsx(N_,{size:18,"aria-hidden":"true"}),"Resume"]})]})]}),yt.jsx("div",{className:"hero__ticker","aria-label":"Profile highlights",children:Xe.metrics.slice(0,4).map(f=>yt.jsxs("span",{children:[yt.jsx("strong",{children:f.value})," ",f.label]},f.label))})]}),yt.jsxs("section",{className:"section about",id:"about",children:[yt.jsx("div",{className:"section__label",children:"01 / About"}),yt.jsxs("div",{className:"about__grid",children:[yt.jsx("h2",{children:"Operational clarity, governed end to end."}),yt.jsxs("div",{className:"about__content",children:[yt.jsx("p",{children:Xe.summary}),yt.jsx("div",{className:"pill-grid","aria-label":"Focus areas",children:Xe.focusAreas.map(f=>yt.jsx("span",{children:f},f))})]})]})]}),yt.jsxs("section",{className:"section impact",id:"impact",children:[yt.jsx("div",{className:"section__label",children:"02 / Impact"}),yt.jsx("h2",{children:"Metrics that hold under SLA pressure."}),yt.jsx("div",{className:"metric-grid",children:Xe.metrics.map(f=>yt.jsxs("article",{className:"metric-card",children:[yt.jsx("strong",{children:f.value}),yt.jsx("h3",{children:f.label}),yt.jsx("p",{children:f.detail})]},f.label))})]}),yt.jsxs("section",{className:"section ledger",id:"experience",children:[yt.jsx("div",{className:"section__label",children:"03 / Experience"}),yt.jsxs("div",{className:"ledger__header",children:[yt.jsx("h2",{children:"From operations associate to team lead."}),yt.jsx("p",{children:"A two-year progression across service delivery, quality governance, escalation management, vendor coordination, and team leadership."})]}),yt.jsx("div",{className:"timeline",children:Xe.experience.map((f,d)=>yt.jsxs("article",{className:"timeline-item",children:[yt.jsx("div",{className:"timeline-item__marker",children:String(d+1).padStart(2,"0")}),yt.jsxs("div",{className:"timeline-item__body",children:[yt.jsx("p",{className:"timeline-item__period",children:f.period}),yt.jsx("h3",{children:f.role}),yt.jsx("p",{className:"timeline-item__company",children:f.company}),yt.jsx("ul",{children:f.bullets.map(p=>yt.jsx("li",{children:p},p))})]})]},`${f.company}-${f.role}`))})]}),yt.jsxs("section",{className:"section proof","aria-labelledby":"proof-heading",children:[yt.jsx("div",{className:"section__label",children:"04 / Proof"}),yt.jsx("h2",{id:"proof-heading",children:"Education, tools, and operating range."}),yt.jsxs("div",{className:"proof__grid",children:[yt.jsx(ih,{title:"Education",items:Xe.education}),yt.jsx(ih,{title:"Certifications",items:Xe.certifications}),yt.jsx(ih,{title:"Competencies",items:Xe.competencies})]}),yt.jsx("p",{className:"publication",children:Xe.publication})]}),yt.jsxs("section",{className:"section contact",id:"contact",children:[yt.jsx(O_,{text:"ready to coordinate"}),yt.jsxs("div",{className:"contact__inner",children:[yt.jsx("p",{className:"eyebrow",children:"Contact"}),yt.jsx("h2",{children:"Let's build workflows that hold."}),yt.jsxs("div",{className:"contact__actions",children:[yt.jsxs("a",{className:"contact__email",href:`mailto:${Xe.email}`,children:[Xe.email,yt.jsx(jy,{size:22,"aria-hidden":"true"})]}),yt.jsxs("a",{className:"button button--primary",href:Xe.resume,download:!0,children:[yt.jsx(N_,{size:18,"aria-hidden":"true"}),"Download CV"]})]})]})]})]}),yt.jsx("footer",{className:"site-footer",children:yt.jsx("a",{href:"#top","aria-label":"Back to top",children:Xe.initials})})]})}Xy.createRoot(document.getElementById("root")).render(yt.jsx(kn.StrictMode,{children:yt.jsx(qb,{})}));
