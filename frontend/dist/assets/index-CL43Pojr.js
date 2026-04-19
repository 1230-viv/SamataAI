function L_(s,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ug(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Au={exports:{}},Ca={},Ru={exports:{}},vt={};var Gp;function D_(){if(Gp)return vt;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(O,ie,Le){this.props=O,this.context=ie,this.refs=w,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(O,ie,Le){this.props=O,this.context=ie,this.refs=w,this.updater=Le||S}var b=L.prototype=new v;b.constructor=L,T(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,B={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function G(O,ie,Le){var J,fe={},Te=null,ye=null;if(ie!=null)for(J in ie.ref!==void 0&&(ye=ie.ref),ie.key!==void 0&&(Te=""+ie.key),ie)H.call(ie,J)&&!U.hasOwnProperty(J)&&(fe[J]=ie[J]);var Ae=arguments.length-2;if(Ae===1)fe.children=Le;else if(1<Ae){for(var Ue=Array(Ae),He=0;He<Ae;He++)Ue[He]=arguments[He+2];fe.children=Ue}if(O&&O.defaultProps)for(J in Ae=O.defaultProps,Ae)fe[J]===void 0&&(fe[J]=Ae[J]);return{$$typeof:s,type:O,key:Te,ref:ye,props:fe,_owner:B.current}}function N(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function E(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function F(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return ie[Le]})}var se=/\/+/g;function ee(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?F(""+O.key):ie.toString(36)}function ue(O,ie,Le,J,fe){var Te=typeof O;(Te==="undefined"||Te==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(Te){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case s:case e:ye=!0}}if(ye)return ye=O,fe=fe(ye),O=J===""?"."+ee(ye,0):J,R(fe)?(Le="",O!=null&&(Le=O.replace(se,"$&/")+"/"),ue(fe,ie,Le,"",function(He){return He})):fe!=null&&(E(fe)&&(fe=N(fe,Le+(!fe.key||ye&&ye.key===fe.key?"":(""+fe.key).replace(se,"$&/")+"/")+O)),ie.push(fe)),1;if(ye=0,J=J===""?".":J+":",R(O))for(var Ae=0;Ae<O.length;Ae++){Te=O[Ae];var Ue=J+ee(Te,Ae);ye+=ue(Te,ie,Le,Ue,fe)}else if(Ue=x(O),typeof Ue=="function")for(O=Ue.call(O),Ae=0;!(Te=O.next()).done;)Te=Te.value,Ue=J+ee(Te,Ae++),ye+=ue(Te,ie,Le,Ue,fe);else if(Te==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(O,ie,Le){if(O==null)return O;var J=[],fe=0;return ue(O,J,"","",function(Te){return ie.call(Le,Te,fe++)}),J}function ae(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var ce={current:null},V={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:B};function re(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:he,forEach:function(O,ie,Le){he(O,function(){ie.apply(this,arguments)},Le)},count:function(O){var ie=0;return he(O,function(){ie++}),ie},toArray:function(O){return he(O,function(ie){return ie})||[]},only:function(O){if(!E(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},vt.Component=y,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,vt.act=re,vt.cloneElement=function(O,ie,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=T({},O.props),fe=O.key,Te=O.ref,ye=O._owner;if(ie!=null){if(ie.ref!==void 0&&(Te=ie.ref,ye=B.current),ie.key!==void 0&&(fe=""+ie.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Ue in ie)H.call(ie,Ue)&&!U.hasOwnProperty(Ue)&&(J[Ue]=ie[Ue]===void 0&&Ae!==void 0?Ae[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=Le;else if(1<Ue){Ae=Array(Ue);for(var He=0;He<Ue;He++)Ae[He]=arguments[He+2];J.children=Ae}return{$$typeof:s,type:O.type,key:fe,ref:Te,props:J,_owner:ye}},vt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},vt.createElement=G,vt.createFactory=function(O){var ie=G.bind(null,O);return ie.type=O,ie},vt.createRef=function(){return{current:null}},vt.forwardRef=function(O){return{$$typeof:d,render:O}},vt.isValidElement=E,vt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:ae}},vt.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},vt.startTransition=function(O){var ie=V.transition;V.transition={};try{O()}finally{V.transition=ie}},vt.unstable_act=re,vt.useCallback=function(O,ie){return ce.current.useCallback(O,ie)},vt.useContext=function(O){return ce.current.useContext(O)},vt.useDebugValue=function(){},vt.useDeferredValue=function(O){return ce.current.useDeferredValue(O)},vt.useEffect=function(O,ie){return ce.current.useEffect(O,ie)},vt.useId=function(){return ce.current.useId()},vt.useImperativeHandle=function(O,ie,Le){return ce.current.useImperativeHandle(O,ie,Le)},vt.useInsertionEffect=function(O,ie){return ce.current.useInsertionEffect(O,ie)},vt.useLayoutEffect=function(O,ie){return ce.current.useLayoutEffect(O,ie)},vt.useMemo=function(O,ie){return ce.current.useMemo(O,ie)},vt.useReducer=function(O,ie,Le){return ce.current.useReducer(O,ie,Le)},vt.useRef=function(O){return ce.current.useRef(O)},vt.useState=function(O){return ce.current.useState(O)},vt.useSyncExternalStore=function(O,ie,Le){return ce.current.useSyncExternalStore(O,ie,Le)},vt.useTransition=function(){return ce.current.useTransition()},vt.version="18.3.1",vt}var Wp;function sf(){return Wp||(Wp=1,Ru.exports=D_()),Ru.exports}var jp;function I_(){if(jp)return Ca;jp=1;var s=sf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var _,g={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:o.current}}return Ca.Fragment=n,Ca.jsx=u,Ca.jsxs=u,Ca}var Xp;function U_(){return Xp||(Xp=1,Au.exports=I_()),Au.exports}var P=U_(),$e=sf();const dg=ug($e),F_=L_({__proto__:null,default:dg},[$e]);var sl={},Cu={exports:{}},Un={},Pu={exports:{}},bu={};var qp;function O_(){return qp||(qp=1,(function(s){function e(V,le){var re=V.length;V.push(le);e:for(;0<re;){var O=re-1>>>1,ie=V[O];if(0<o(ie,le))V[O]=le,V[re]=ie,re=O;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var le=V[0],re=V.pop();if(re!==le){V[0]=re;e:for(var O=0,ie=V.length,Le=ie>>>1;O<Le;){var J=2*(O+1)-1,fe=V[J],Te=J+1,ye=V[Te];if(0>o(fe,re))Te<ie&&0>o(ye,fe)?(V[O]=ye,V[Te]=re,O=Te):(V[O]=fe,V[J]=re,O=J);else if(Te<ie&&0>o(ye,re))V[O]=ye,V[Te]=re,O=Te;else break e}}return le}function o(V,le){var re=V.sortIndex-le.sortIndex;return re!==0?re:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],_=1,g=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=V)r(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(m)}}function R(V){if(w=!1,b(V),!T)if(n(h)!==null)T=!0,ae(H);else{var le=n(m);le!==null&&ce(R,le.startTime-V)}}function H(V,le){T=!1,w&&(w=!1,v(G),G=-1),S=!0;var re=x;try{for(b(le),g=n(h);g!==null&&(!(g.expirationTime>le)||V&&!F());){var O=g.callback;if(typeof O=="function"){g.callback=null,x=g.priorityLevel;var ie=O(g.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?g.callback=ie:g===n(h)&&r(h),b(le)}else r(h);g=n(h)}if(g!==null)var Le=!0;else{var J=n(m);J!==null&&ce(R,J.startTime-le),Le=!1}return Le}finally{g=null,x=re,S=!1}}var B=!1,U=null,G=-1,N=5,E=-1;function F(){return!(s.unstable_now()-E<N)}function se(){if(U!==null){var V=s.unstable_now();E=V;var le=!0;try{le=U(!0,V)}finally{le?ee():(B=!1,U=null)}}else B=!1}var ee;if(typeof L=="function")ee=function(){L(se)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=se,ee=function(){he.postMessage(null)}}else ee=function(){y(se,0)};function ae(V){U=V,B||(B=!0,ee())}function ce(V,le){G=y(function(){V(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(H))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var re=x;x=le;try{return V()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var re=x;x=V;try{return le()}finally{x=re}},s.unstable_scheduleCallback=function(V,le,re){var O=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,V){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,V={id:_++,callback:le,priorityLevel:V,startTime:re,expirationTime:ie,sortIndex:-1},re>O?(V.sortIndex=re,e(m,V),n(h)===null&&V===n(m)&&(w?(v(G),G=-1):w=!0,ce(R,re-O))):(V.sortIndex=ie,e(h,V),T||S||(T=!0,ae(H))),V},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(V){var le=x;return function(){var re=x;x=le;try{return V.apply(this,arguments)}finally{x=re}}}})(bu)),bu}var Yp;function B_(){return Yp||(Yp=1,Pu.exports=O_()),Pu.exports}var $p;function k_(){if($p)return Un;$p=1;var s=sf(),e=B_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(t){return h.call(g,t)?!0:h.call(_,t)?!1:m.test(t)?g[t]=!0:(_[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,a,c,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,L);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,L);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,L);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,c)&&(a=null),c||f===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),F=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,O;function ie(t){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Le=!1;function J(t,i){if(!t||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){c=te}t.call(i.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),p=c.stack.split(`
`),M=f.length-1,I=p.length-1;1<=M&&0<=I&&f[M]!==p[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==p[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==p[I]){var z=`
`+f[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=I);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function fe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function Te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case B:return"Portal";case N:return"Profiler";case G:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Te(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Te(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(t){var i=Ue(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=He(t))}function Ze(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Ue(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Ve(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function jt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function Ct(t,i){pt(t,i);var a=Ae(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?_t(t,i.type,a):i.hasOwnProperty("defaultValue")&&_t(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function _t(t,i,a){(i!=="number"||Ve(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Je=Array.isArray;function lt(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function zt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Je(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ae(a)}}function A(t,i){var a=Ae(i.value),c=Ae(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Q(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oe,Ke=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Re(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(t){Qe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ze[i]=ze[t]})});function _e(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(t)&&ze[t]?(""+i).trim():i+"px"}function Fe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var rt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(t,i){if(i){if(rt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ve=null,De=null;function Me(t){if(t=ha(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=yo(i),Pe(t.stateNode,t.type,i))}}function pe(t){ve?De?De.push(t):De=[t]:ve=t}function Ge(){if(ve){var t=ve,i=De;if(De=ve=null,Me(t),i)for(t=0;t<i.length;t++)Me(i[t])}}function ut(t,i){return t(i)}function bt(){}var yt=!1;function Pn(t,i,a){if(yt)return t(i,a);yt=!0;try{return ut(t,i,a)}finally{yt=!1,(ve!==null||De!==null)&&(bt(),Ge())}}function Sn(t,i){var a=t.stateNode;if(a===null)return null;var c=yo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var es=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{es=!1}function yi(t,i,a,c,f,p,M,I,z){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(xe){this.onError(xe)}}var Si=!1,Tr=null,wr=!1,Wi=null,Za={onError:function(t){Si=!0,Tr=t}};function ts(t,i,a,c,f,p,M,I,z){Si=!1,Tr=null,yi.apply(Za,arguments)}function Qa(t,i,a,c,f,p,M,I,z){if(ts.apply(this,arguments),Si){if(Si){var te=Tr;Si=!1,Tr=null}else throw Error(n(198));wr||(wr=!0,Wi=te)}}function fi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ja(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function eo(t){if(fi(t)!==t)throw Error(n(188))}function $l(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return eo(f),t;if(p===c)return eo(f),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=p;else{for(var M=!1,I=f.child;I;){if(I===a){M=!0,a=f,c=p;break}if(I===c){M=!0,c=f,a=p;break}I=I.sibling}if(!M){for(I=p.child;I;){if(I===a){M=!0,a=p,c=f;break}if(I===c){M=!0,c=p,a=f;break}I=I.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function to(t){return t=$l(t),t!==null?no(t):null}function no(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=no(t);if(i!==null)return i;t=t.sibling}return null}var io=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,X=e.unstable_shouldYield,ne=e.unstable_requestPaint,$=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Be=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,at=e.unstable_IdlePriority,st=null,We=null;function mt(t){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(st,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Pt,Bt=Math.log,Dt=Math.LN2;function Pt(t){return t>>>=0,t===0?32:31-(Bt(t)/Dt|0)|0}var et=64,Nt=4194304;function gt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tn(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes,M=a&268435455;if(M!==0){var I=M&~f;I!==0?c=gt(I):(p&=M,p!==0&&(c=gt(p)))}else M=a&~f,M!==0?c=gt(M):p!==0&&(c=gt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-ft(i),f=1<<a,c|=t[a],i&=~f;return c}function ji(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ft(p),I=1<<M,z=f[M];z===-1?((I&a)===0||(I&c)!==0)&&(f[M]=ji(I,i)):z<=i&&(t.expiredLanes|=I),p&=~I}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function It(){var t=et;return et<<=1,(et&4194240)===0&&(et=64),t}function hn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function nn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ft(i),t[i]=a}function un(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-ft(a),p=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~p}}function rn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-ft(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var St=0;function hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Mf,Kl,Ef,Tf,wf,Zl=!1,ro=[],Xi=null,qi=null,Yi=null,Zs=new Map,Qs=new Map,$i=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,a,c,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ha(i),i!==null&&Kl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function tv(t,i,a,c,f){switch(i){case"focusin":return Xi=Js(Xi,t,i,a,c,f),!0;case"dragenter":return qi=Js(qi,t,i,a,c,f),!0;case"mouseover":return Yi=Js(Yi,t,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return Zs.set(p,Js(Zs.get(p)||null,t,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,Qs.set(p,Js(Qs.get(p)||null,t,i,a,c,f)),!0}return!1}function Rf(t){var i=Ar(t.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ja(a),i!==null){t.blockedOn=i,wf(t.priority,function(){Ef(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Jl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);ot=c,a.target.dispatchEvent(c),ot=null}else return i=ha(a),i!==null&&Kl(i),t.blockedOn=a,!1;i.shift()}return!0}function Cf(t,i,a){so(t)&&a.delete(i)}function nv(){Zl=!1,Xi!==null&&so(Xi)&&(Xi=null),qi!==null&&so(qi)&&(qi=null),Yi!==null&&so(Yi)&&(Yi=null),Zs.forEach(Cf),Qs.forEach(Cf)}function ea(t,i){t.blockedOn===i&&(t.blockedOn=null,Zl||(Zl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nv)))}function ta(t){function i(f){return ea(f,t)}if(0<ro.length){ea(ro[0],t);for(var a=1;a<ro.length;a++){var c=ro[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Xi!==null&&ea(Xi,t),qi!==null&&ea(qi,t),Yi!==null&&ea(Yi,t),Zs.forEach(i),Qs.forEach(i),a=0;a<$i.length;a++)c=$i[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<$i.length&&(a=$i[0],a.blockedOn===null);)Rf(a),a.blockedOn===null&&$i.shift()}var ns=R.ReactCurrentBatchConfig,ao=!0;function iv(t,i,a,c){var f=St,p=ns.transition;ns.transition=null;try{St=1,Ql(t,i,a,c)}finally{St=f,ns.transition=p}}function rv(t,i,a,c){var f=St,p=ns.transition;ns.transition=null;try{St=4,Ql(t,i,a,c)}finally{St=f,ns.transition=p}}function Ql(t,i,a,c){if(ao){var f=Jl(t,i,a,c);if(f===null)gc(t,i,c,oo,a),Af(t,c);else if(tv(f,t,i,a,c))c.stopPropagation();else if(Af(t,c),i&4&&-1<ev.indexOf(t)){for(;f!==null;){var p=ha(f);if(p!==null&&Mf(p),p=Jl(t,i,a,c),p===null&&gc(t,i,c,oo,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else gc(t,i,c,null,a)}}var oo=null;function Jl(t,i,a,c){if(oo=null,t=W(c),t=Ar(t),t!==null)if(i=fi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ja(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oo=t,null}function Pf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Ee:return 1;case be:return 4;case Be:case Oe:return 16;case at:return 536870912;default:return 16}default:return 16}}var Ki=null,ec=null,lo=null;function bf(){if(lo)return lo;var t,i=ec,a=i.length,c,f="value"in Ki?Ki.value:Ki.textContent,p=f.length;for(t=0;t<a&&i[t]===f[t];t++);var M=a-t;for(c=1;c<=M&&i[a-c]===f[p-c];c++);return lo=f.slice(t,1<c?1-c:void 0)}function co(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Nf(){return!1}function zn(t){function i(a,c,f,p,M){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?uo:Nf,this.isPropagationStopped=Nf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=zn(is),na=re({},is,{view:0,detail:0}),sv=zn(na),nc,ic,ia,fo=re({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(nc=t.screenX-ia.screenX,ic=t.screenY-ia.screenY):ic=nc=0,ia=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Lf=zn(fo),av=re({},fo,{dataTransfer:0}),ov=zn(av),lv=re({},na,{relatedTarget:0}),rc=zn(lv),cv=re({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=zn(cv),dv=re({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fv=zn(dv),hv=re({},is,{data:0}),Df=zn(hv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=gv[t])?!!i[t]:!1}function sc(){return vv}var _v=re({},na,{key:function(t){if(t.key){var i=pv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xv=zn(_v),yv=re({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=zn(yv),Sv=re({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),Mv=zn(Sv),Ev=re({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=zn(Ev),wv=re({},fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=zn(wv),Rv=[9,13,27,32],ac=d&&"CompositionEvent"in window,ra=null;d&&"documentMode"in document&&(ra=document.documentMode);var Cv=d&&"TextEvent"in window&&!ra,Uf=d&&(!ac||ra&&8<ra&&11>=ra),Ff=" ",Of=!1;function Bf(t,i){switch(t){case"keyup":return Rv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Pv(t,i){switch(t){case"compositionend":return kf(i);case"keypress":return i.which!==32?null:(Of=!0,Ff);case"textInput":return t=i.data,t===Ff&&Of?null:t;default:return null}}function bv(t,i){if(rs)return t==="compositionend"||!ac&&Bf(t,i)?(t=bf(),lo=ec=Ki=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uf&&i.locale!=="ko"?null:i.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Nv[t.type]:i==="textarea"}function Hf(t,i,a,c){pe(c),i=vo(i,"onChange"),0<i.length&&(a=new tc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var sa=null,aa=null;function Lv(t){sh(t,0)}function ho(t){var i=cs(t);if(Ze(i))return t}function Dv(t,i){if(t==="change")return i}var Vf=!1;if(d){var oc;if(d){var lc="oninput"in document;if(!lc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),lc=typeof Gf.oninput=="function"}oc=lc}else oc=!1;Vf=oc&&(!document.documentMode||9<document.documentMode)}function Wf(){sa&&(sa.detachEvent("onpropertychange",jf),aa=sa=null)}function jf(t){if(t.propertyName==="value"&&ho(aa)){var i=[];Hf(i,aa,t,W(t)),Pn(Lv,i)}}function Iv(t,i,a){t==="focusin"?(Wf(),sa=i,aa=a,sa.attachEvent("onpropertychange",jf)):t==="focusout"&&Wf()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ho(aa)}function Fv(t,i){if(t==="click")return ho(i)}function Ov(t,i){if(t==="input"||t==="change")return ho(i)}function Bv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Bv;function oa(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function Xf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qf(t,i){var a=Xf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xf(a)}}function Yf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var t=window,i=Ve();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Ve(t.document)}return i}function cc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function kv(t){var i=$f(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Yf(a.ownerDocument.documentElement,a)){if(c!==null&&cc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!t.extend&&p>c&&(f=c,c=p,p=f),f=qf(a,p);var M=qf(a,c);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zv=d&&"documentMode"in document&&11>=document.documentMode,ss=null,uc=null,la=null,dc=!1;function Kf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||ss==null||ss!==Ve(c)||(c=ss,"selectionStart"in c&&cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&oa(la,c)||(la=c,c=vo(uc,"onSelect"),0<c.length&&(i=new tc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ss)))}function po(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var as={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},fc={},Zf={};d&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function mo(t){if(fc[t])return fc[t];if(!as[t])return t;var i=as[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zf)return fc[t]=i[a];return t}var Qf=mo("animationend"),Jf=mo("animationiteration"),eh=mo("animationstart"),th=mo("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){nh.set(t,i),l(i,[t])}for(var hc=0;hc<ih.length;hc++){var pc=ih[hc],Hv=pc.toLowerCase(),Vv=pc[0].toUpperCase()+pc.slice(1);Zi(Hv,"on"+Vv)}Zi(Qf,"onAnimationEnd"),Zi(Jf,"onAnimationIteration"),Zi(eh,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(th,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function rh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,Qa(c,i,void 0,t),t.currentTarget=null}function sh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var M=c.length-1;0<=M;M--){var I=c[M],z=I.instance,te=I.currentTarget;if(I=I.listener,z!==p&&f.isPropagationStopped())break e;rh(f,I,te),p=z}else for(M=0;M<c.length;M++){if(I=c[M],z=I.instance,te=I.currentTarget,I=I.listener,z!==p&&f.isPropagationStopped())break e;rh(f,I,te),p=z}}}if(wr)throw t=Wi,wr=!1,Wi=null,t}function Ft(t,i){var a=i[Mc];a===void 0&&(a=i[Mc]=new Set);var c=t+"__bubble";a.has(c)||(ah(i,t,2,!1),a.add(c))}function mc(t,i,a){var c=0;i&&(c|=4),ah(a,t,c,i)}var go="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[go]){t[go]=!0,r.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||mc(a,!1,t),mc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[go]||(i[go]=!0,mc("selectionchange",!1,i))}}function ah(t,i,a,c){switch(Pf(i)){case 1:var f=iv;break;case 4:f=rv;break;default:f=Ql}a=f.bind(null,i,a,t),f=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function gc(t,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;M=M.return}for(;I!==null;){if(M=Ar(I),M===null)return;if(z=M.tag,z===5||z===6){c=p=M;continue e}I=I.parentNode}}c=c.return}Pn(function(){var te=p,xe=W(a),Se=[];e:{var ge=nh.get(t);if(ge!==void 0){var Ie=tc,je=t;switch(t){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":Ie=xv;break;case"focusin":je="focus",Ie=rc;break;case"focusout":je="blur",Ie=rc;break;case"beforeblur":case"afterblur":Ie=rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Mv;break;case Qf:case Jf:case eh:Ie=uv;break;case th:Ie=Tv;break;case"scroll":Ie=sv;break;case"wheel":Ie=Av;break;case"copy":case"cut":case"paste":Ie=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=If}var Xe=(i&4)!==0,Xt=!Xe&&t==="scroll",Y=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var j=te,Z;j!==null;){Z=j;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,Y!==null&&(we=Sn(j,Y),we!=null&&Xe.push(da(j,we,Z)))),Xt)break;j=j.return}0<Xe.length&&(ge=new Ie(ge,je,null,a,xe),Se.push({event:ge,listeners:Xe}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&a!==ot&&(je=a.relatedTarget||a.fromElement)&&(Ar(je)||je[Ei]))break e;if((Ie||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(je=a.relatedTarget||a.toElement,Ie=te,je=je?Ar(je):null,je!==null&&(Xt=fi(je),je!==Xt||je.tag!==5&&je.tag!==6)&&(je=null)):(Ie=null,je=te),Ie!==je)){if(Xe=Lf,we="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=If,we="onPointerLeave",Y="onPointerEnter",j="pointer"),Xt=Ie==null?ge:cs(Ie),Z=je==null?ge:cs(je),ge=new Xe(we,j+"leave",Ie,a,xe),ge.target=Xt,ge.relatedTarget=Z,we=null,Ar(xe)===te&&(Xe=new Xe(Y,j+"enter",je,a,xe),Xe.target=Z,Xe.relatedTarget=Xt,we=Xe),Xt=we,Ie&&je)t:{for(Xe=Ie,Y=je,j=0,Z=Xe;Z;Z=os(Z))j++;for(Z=0,we=Y;we;we=os(we))Z++;for(;0<j-Z;)Xe=os(Xe),j--;for(;0<Z-j;)Y=os(Y),Z--;for(;j--;){if(Xe===Y||Y!==null&&Xe===Y.alternate)break t;Xe=os(Xe),Y=os(Y)}Xe=null}else Xe=null;Ie!==null&&oh(Se,ge,Ie,Xe,!1),je!==null&&Xt!==null&&oh(Se,Xt,je,Xe,!0)}}e:{if(ge=te?cs(te):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Ye=Dv;else if(zf(ge))if(Vf)Ye=Ov;else{Ye=Uv;var nt=Iv}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=Fv);if(Ye&&(Ye=Ye(t,te))){Hf(Se,Ye,a,xe);break e}nt&&nt(t,ge,te),t==="focusout"&&(nt=ge._wrapperState)&&nt.controlled&&ge.type==="number"&&_t(ge,"number",ge.value)}switch(nt=te?cs(te):window,t){case"focusin":(zf(nt)||nt.contentEditable==="true")&&(ss=nt,uc=te,la=null);break;case"focusout":la=uc=ss=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Kf(Se,a,xe);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Kf(Se,a,xe)}var it;if(ac)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else rs?Bf(t,a)&&(ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Uf&&a.locale!=="ko"&&(rs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&rs&&(it=bf()):(Ki=xe,ec="value"in Ki?Ki.value:Ki.textContent,rs=!0)),nt=vo(te,ct),0<nt.length&&(ct=new Df(ct,t,null,a,xe),Se.push({event:ct,listeners:nt}),it?ct.data=it:(it=kf(a),it!==null&&(ct.data=it)))),(it=Cv?Pv(t,a):bv(t,a))&&(te=vo(te,"onBeforeInput"),0<te.length&&(xe=new Df("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:te}),xe.data=it))}sh(Se,i)})}function da(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Sn(t,a),p!=null&&c.unshift(da(t,p,f)),p=Sn(t,i),p!=null&&c.push(da(t,p,f))),t=t.return}return c}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,i,a,c,f){for(var p=i._reactName,M=[];a!==null&&a!==c;){var I=a,z=I.alternate,te=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&te!==null&&(I=te,f?(z=Sn(a,p),z!=null&&M.unshift(da(a,z,I))):f||(z=Sn(a,p),z!=null&&M.push(da(a,z,I)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var Wv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(Wv,`
`).replace(jv,"")}function _o(t,i,a){if(i=lh(i),lh(t)!==i&&a)throw Error(n(425))}function xo(){}var vc=null,_c=null;function xc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(Yv)}:yc;function Yv(t){setTimeout(function(){throw t})}function Sc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),ta(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ta(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),pi="__reactFiber$"+ls,fa="__reactProps$"+ls,Ei="__reactContainer$"+ls,Mc="__reactEvents$"+ls,$v="__reactListeners$"+ls,Kv="__reactHandles$"+ls;function Ar(t){var i=t[pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ei]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=uh(t);t!==null;){if(a=t[pi])return a;t=uh(t)}return i}t=a,a=t.parentNode}return null}function ha(t){return t=t[pi]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function yo(t){return t[fa]||null}var Ec=[],us=-1;function Ji(t){return{current:t}}function Ot(t){0>us||(t.current=Ec[us],Ec[us]=null,us--)}function Ut(t,i){us++,Ec[us]=t.current,t.current=i}var er={},pn=Ji(er),bn=Ji(!1),Rr=er;function ds(t,i){var a=t.type.contextTypes;if(!a)return er;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function So(){Ot(bn),Ot(pn)}function dh(t,i,a){if(pn.current!==er)throw Error(n(168));Ut(pn,i),Ut(bn,a)}function fh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,ye(t)||"Unknown",f));return re({},a,c)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Rr=pn.current,Ut(pn,t),Ut(bn,bn.current),!0}function hh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=fh(t,i,Rr),c.__reactInternalMemoizedMergedChildContext=t,Ot(bn),Ot(pn),Ut(pn,t)):Ot(bn),Ut(bn,a)}var Ti=null,Eo=!1,Tc=!1;function ph(t){Ti===null?Ti=[t]:Ti.push(t)}function Zv(t){Eo=!0,ph(t)}function tr(){if(!Tc&&Ti!==null){Tc=!0;var t=0,i=St;try{var a=Ti;for(St=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Ti=null,Eo=!1}catch(f){throw Ti!==null&&(Ti=Ti.slice(t+1)),io(Ee,tr),f}finally{St=i,Tc=!1}}return null}var fs=[],hs=0,To=null,wo=0,Xn=[],qn=0,Cr=null,wi=1,Ai="";function Pr(t,i){fs[hs++]=wo,fs[hs++]=To,To=t,wo=i}function mh(t,i,a){Xn[qn++]=wi,Xn[qn++]=Ai,Xn[qn++]=Cr,Cr=t;var c=wi;t=Ai;var f=32-ft(c)-1;c&=~(1<<f),a+=1;var p=32-ft(i)+f;if(30<p){var M=f-f%5;p=(c&(1<<M)-1).toString(32),c>>=M,f-=M,wi=1<<32-ft(i)+f|a<<f|c,Ai=p+t}else wi=1<<p|a<<f|c,Ai=t}function wc(t){t.return!==null&&(Pr(t,1),mh(t,1,0))}function Ac(t){for(;t===To;)To=fs[--hs],fs[hs]=null,wo=fs[--hs],fs[hs]=null;for(;t===Cr;)Cr=Xn[--qn],Xn[qn]=null,Ai=Xn[--qn],Xn[qn]=null,wi=Xn[--qn],Xn[qn]=null}var Hn=null,Vn=null,kt=!1,ti=null;function gh(t,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function vh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Vn=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Cr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Hn=t,Vn=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(kt){var i=Vn;if(i){var a=i;if(!vh(t,i)){if(Rc(t))throw Error(n(418));i=Qi(a.nextSibling);var c=Hn;i&&vh(t,i)?gh(c,a):(t.flags=t.flags&-4097|2,kt=!1,Hn=t)}}else{if(Rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Hn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Ao(t){if(t!==Hn)return!1;if(!kt)return _h(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!xc(t.type,t.memoizedProps)),i&&(i=Vn)){if(Rc(t))throw xh(),Error(n(418));for(;i;)gh(t,i),i=Qi(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Vn=Qi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=Hn?Qi(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=Vn;t;)t=Qi(t.nextSibling)}function ps(){Vn=Hn=null,kt=!1}function Pc(t){ti===null?ti=[t]:ti.push(t)}var Qv=R.ReactCurrentBatchConfig;function pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var I=f.refs;M===null?delete I[p]:I[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ro(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function yh(t){var i=t._init;return i(t._payload)}function Sh(t){function i(Y,j){if(t){var Z=Y.deletions;Z===null?(Y.deletions=[j],Y.flags|=16):Z.push(j)}}function a(Y,j){if(!t)return null;for(;j!==null;)i(Y,j),j=j.sibling;return null}function c(Y,j){for(Y=new Map;j!==null;)j.key!==null?Y.set(j.key,j):Y.set(j.index,j),j=j.sibling;return Y}function f(Y,j){return Y=cr(Y,j),Y.index=0,Y.sibling=null,Y}function p(Y,j,Z){return Y.index=Z,t?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<j?(Y.flags|=2,j):Z):(Y.flags|=2,j)):(Y.flags|=1048576,j)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,j,Z,we){return j===null||j.tag!==6?(j=yu(Z,Y.mode,we),j.return=Y,j):(j=f(j,Z),j.return=Y,j)}function z(Y,j,Z,we){var Ye=Z.type;return Ye===U?xe(Y,j,Z.props.children,we,Z.key):j!==null&&(j.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&yh(Ye)===j.type)?(we=f(j,Z.props),we.ref=pa(Y,j,Z),we.return=Y,we):(we=Zo(Z.type,Z.key,Z.props,null,Y.mode,we),we.ref=pa(Y,j,Z),we.return=Y,we)}function te(Y,j,Z,we){return j===null||j.tag!==4||j.stateNode.containerInfo!==Z.containerInfo||j.stateNode.implementation!==Z.implementation?(j=Su(Z,Y.mode,we),j.return=Y,j):(j=f(j,Z.children||[]),j.return=Y,j)}function xe(Y,j,Z,we,Ye){return j===null||j.tag!==7?(j=Or(Z,Y.mode,we,Ye),j.return=Y,j):(j=f(j,Z),j.return=Y,j)}function Se(Y,j,Z){if(typeof j=="string"&&j!==""||typeof j=="number")return j=yu(""+j,Y.mode,Z),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return Z=Zo(j.type,j.key,j.props,null,Y.mode,Z),Z.ref=pa(Y,null,j),Z.return=Y,Z;case B:return j=Su(j,Y.mode,Z),j.return=Y,j;case ae:var we=j._init;return Se(Y,we(j._payload),Z)}if(Je(j)||le(j))return j=Or(j,Y.mode,Z,null),j.return=Y,j;Ro(Y,j)}return null}function ge(Y,j,Z,we){var Ye=j!==null?j.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ye!==null?null:I(Y,j,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case H:return Z.key===Ye?z(Y,j,Z,we):null;case B:return Z.key===Ye?te(Y,j,Z,we):null;case ae:return Ye=Z._init,ge(Y,j,Ye(Z._payload),we)}if(Je(Z)||le(Z))return Ye!==null?null:xe(Y,j,Z,we,null);Ro(Y,Z)}return null}function Ie(Y,j,Z,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(Z)||null,I(j,Y,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case H:return Y=Y.get(we.key===null?Z:we.key)||null,z(j,Y,we,Ye);case B:return Y=Y.get(we.key===null?Z:we.key)||null,te(j,Y,we,Ye);case ae:var nt=we._init;return Ie(Y,j,Z,nt(we._payload),Ye)}if(Je(we)||le(we))return Y=Y.get(Z)||null,xe(j,Y,we,Ye,null);Ro(j,we)}return null}function je(Y,j,Z,we){for(var Ye=null,nt=null,it=j,ct=j=0,on=null;it!==null&&ct<Z.length;ct++){it.index>ct?(on=it,it=null):on=it.sibling;var Et=ge(Y,it,Z[ct],we);if(Et===null){it===null&&(it=on);break}t&&it&&Et.alternate===null&&i(Y,it),j=p(Et,j,ct),nt===null?Ye=Et:nt.sibling=Et,nt=Et,it=on}if(ct===Z.length)return a(Y,it),kt&&Pr(Y,ct),Ye;if(it===null){for(;ct<Z.length;ct++)it=Se(Y,Z[ct],we),it!==null&&(j=p(it,j,ct),nt===null?Ye=it:nt.sibling=it,nt=it);return kt&&Pr(Y,ct),Ye}for(it=c(Y,it);ct<Z.length;ct++)on=Ie(it,Y,ct,Z[ct],we),on!==null&&(t&&on.alternate!==null&&it.delete(on.key===null?ct:on.key),j=p(on,j,ct),nt===null?Ye=on:nt.sibling=on,nt=on);return t&&it.forEach(function(ur){return i(Y,ur)}),kt&&Pr(Y,ct),Ye}function Xe(Y,j,Z,we){var Ye=le(Z);if(typeof Ye!="function")throw Error(n(150));if(Z=Ye.call(Z),Z==null)throw Error(n(151));for(var nt=Ye=null,it=j,ct=j=0,on=null,Et=Z.next();it!==null&&!Et.done;ct++,Et=Z.next()){it.index>ct?(on=it,it=null):on=it.sibling;var ur=ge(Y,it,Et.value,we);if(ur===null){it===null&&(it=on);break}t&&it&&ur.alternate===null&&i(Y,it),j=p(ur,j,ct),nt===null?Ye=ur:nt.sibling=ur,nt=ur,it=on}if(Et.done)return a(Y,it),kt&&Pr(Y,ct),Ye;if(it===null){for(;!Et.done;ct++,Et=Z.next())Et=Se(Y,Et.value,we),Et!==null&&(j=p(Et,j,ct),nt===null?Ye=Et:nt.sibling=Et,nt=Et);return kt&&Pr(Y,ct),Ye}for(it=c(Y,it);!Et.done;ct++,Et=Z.next())Et=Ie(it,Y,ct,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&it.delete(Et.key===null?ct:Et.key),j=p(Et,j,ct),nt===null?Ye=Et:nt.sibling=Et,nt=Et);return t&&it.forEach(function(N_){return i(Y,N_)}),kt&&Pr(Y,ct),Ye}function Xt(Y,j,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case H:e:{for(var Ye=Z.key,nt=j;nt!==null;){if(nt.key===Ye){if(Ye=Z.type,Ye===U){if(nt.tag===7){a(Y,nt.sibling),j=f(nt,Z.props.children),j.return=Y,Y=j;break e}}else if(nt.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&yh(Ye)===nt.type){a(Y,nt.sibling),j=f(nt,Z.props),j.ref=pa(Y,nt,Z),j.return=Y,Y=j;break e}a(Y,nt);break}else i(Y,nt);nt=nt.sibling}Z.type===U?(j=Or(Z.props.children,Y.mode,we,Z.key),j.return=Y,Y=j):(we=Zo(Z.type,Z.key,Z.props,null,Y.mode,we),we.ref=pa(Y,j,Z),we.return=Y,Y=we)}return M(Y);case B:e:{for(nt=Z.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===Z.containerInfo&&j.stateNode.implementation===Z.implementation){a(Y,j.sibling),j=f(j,Z.children||[]),j.return=Y,Y=j;break e}else{a(Y,j);break}else i(Y,j);j=j.sibling}j=Su(Z,Y.mode,we),j.return=Y,Y=j}return M(Y);case ae:return nt=Z._init,Xt(Y,j,nt(Z._payload),we)}if(Je(Z))return je(Y,j,Z,we);if(le(Z))return Xe(Y,j,Z,we);Ro(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,j!==null&&j.tag===6?(a(Y,j.sibling),j=f(j,Z),j.return=Y,Y=j):(a(Y,j),j=yu(Z,Y.mode,we),j.return=Y,Y=j),M(Y)):a(Y,j)}return Xt}var ms=Sh(!0),Mh=Sh(!1),Co=Ji(null),Po=null,gs=null,bc=null;function Nc(){bc=gs=Po=null}function Lc(t){var i=Co.current;Ot(Co),t._currentValue=i}function Dc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function vs(t,i){Po=t,bc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Ln=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Po===null)throw Error(n(308));gs=t,Po.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var br=null;function Ic(t){br===null?br=[t]:br.push(t)}function Eh(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Ic(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ri(t,c)}function Ri(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var nr=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ri(t,a)}return f=c.interleaved,f===null?(i.next=i,Ic(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ri(t,a)}function bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,rn(t,a)}}function wh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function No(t,i,a,c){var f=t.updateQueue;nr=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,te=z.next;z.next=null,M===null?p=te:M.next=te,M=z;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==M&&(I===null?xe.firstBaseUpdate=te:I.next=te,xe.lastBaseUpdate=z))}if(p!==null){var Se=f.baseState;M=0,xe=te=z=null,I=p;do{var ge=I.lane,Ie=I.eventTime;if((c&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Xe=I;switch(ge=i,Ie=a,Xe.tag){case 1:if(je=Xe.payload,typeof je=="function"){Se=je.call(Ie,Se,ge);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Xe.payload,ge=typeof je=="function"?je.call(Ie,Se,ge):je,ge==null)break e;Se=re({},Se,ge);break e;case 2:nr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(te=xe=Ie,z=Se):xe=xe.next=Ie,M|=ge;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(xe===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=te,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Dr|=M,t.lanes=M,t.memoizedState=Se}}function Ah(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var ma={},mi=Ji(ma),ga=Ji(ma),va=Ji(ma);function Nr(t){if(t===ma)throw Error(n(174));return t}function Fc(t,i){switch(Ut(va,i),Ut(ga,t),Ut(mi,ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}Ot(mi),Ut(mi,i)}function _s(){Ot(mi),Ot(ga),Ot(va)}function Rh(t){Nr(va.current);var i=Nr(mi.current),a=me(i,t.type);i!==a&&(Ut(ga,t),Ut(mi,a))}function Oc(t){ga.current===t&&(Ot(mi),Ot(ga))}var Ht=Ji(0);function Lo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function kc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var Do=R.ReactCurrentDispatcher,zc=R.ReactCurrentBatchConfig,Lr=0,Vt=null,Zt=null,sn=null,Io=!1,_a=!1,xa=0,Jv=0;function mn(){throw Error(n(321))}function Hc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ei(t[a],i[a]))return!1;return!0}function Vc(t,i,a,c,f,p){if(Lr=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?i_:r_,t=a(c,f),_a){p=0;do{if(_a=!1,xa=0,25<=p)throw Error(n(301));p+=1,sn=Zt=null,i.updateQueue=null,Do.current=s_,t=a(c,f)}while(_a)}if(Do.current=Oo,i=Zt!==null&&Zt.next!==null,Lr=0,sn=Zt=Vt=null,Io=!1,i)throw Error(n(300));return t}function Gc(){var t=xa!==0;return xa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=t:sn=sn.next=t,sn}function $n(){if(Zt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=sn===null?Vt.memoizedState:sn.next;if(i!==null)sn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=t:sn=sn.next=t}return sn}function ya(t,i){return typeof i=="function"?i(t):i}function Wc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=Zt,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var I=M=null,z=null,te=p;do{var xe=te.lane;if((Lr&xe)===xe)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var Se={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(I=z=Se,M=c):z=z.next=Se,Vt.lanes|=xe,Dr|=xe}te=te.next}while(te!==null&&te!==p);z===null?M=c:z.next=I,ei(c,i.memoizedState)||(Ln=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=z,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do p=f.lane,Vt.lanes|=p,Dr|=p,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function jc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);ei(p,i.memoizedState)||(Ln=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Ch(){}function Ph(t,i){var a=Vt,c=$n(),f=i(),p=!ei(c.memoizedState,f);if(p&&(c.memoizedState=f,Ln=!0),c=c.queue,Xc(Lh.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Sa(9,Nh.bind(null,a,c,f,i),void 0,null),an===null)throw Error(n(349));(Lr&30)!==0||bh(a,i,f)}return f}function bh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Nh(t,i,a,c){i.value=a,i.getSnapshot=c,Dh(i)&&Ih(t)}function Lh(t,i,a){return a(function(){Dh(i)&&Ih(t)})}function Dh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ei(t,a)}catch{return!0}}function Ih(t){var i=Ri(t,1);i!==null&&si(i,t,1,-1)}function Uh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},i.queue=t,t=t.dispatch=n_.bind(null,Vt,t),[i.memoizedState,t]}function Sa(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Fh(){return $n().memoizedState}function Uo(t,i,a,c){var f=gi();Vt.flags|=t,f.memoizedState=Sa(1|i,a,void 0,c===void 0?null:c)}function Fo(t,i,a,c){var f=$n();c=c===void 0?null:c;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,c!==null&&Hc(c,M.deps)){f.memoizedState=Sa(i,a,p,c);return}}Vt.flags|=t,f.memoizedState=Sa(1|i,a,p,c)}function Oh(t,i){return Uo(8390656,8,t,i)}function Xc(t,i){return Fo(2048,8,t,i)}function Bh(t,i){return Fo(4,2,t,i)}function kh(t,i){return Fo(4,4,t,i)}function zh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hh(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4,4,zh.bind(null,i,t),a)}function qc(){}function Vh(t,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Hc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Gh(t,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Hc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Wh(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=a):(ei(a,i)||(a=It(),Vt.lanes|=a,Dr|=a,t.baseState=!0),i)}function e_(t,i){var a=St;St=a!==0&&4>a?a:4,t(!0);var c=zc.transition;zc.transition={};try{t(!1),i()}finally{St=a,zc.transition=c}}function jh(){return $n().memoizedState}function t_(t,i,a){var c=or(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Xh(t))qh(i,a);else if(a=Eh(t,i,a,c),a!==null){var f=Tn();si(a,t,c,f),Yh(a,i,c)}}function n_(t,i,a){var c=or(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))qh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,I=p(M,a);if(f.hasEagerState=!0,f.eagerState=I,ei(I,M)){var z=i.interleaved;z===null?(f.next=f,Ic(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}a=Eh(t,i,f,c),a!==null&&(f=Tn(),si(a,t,c,f),Yh(a,i,c))}}function Xh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function qh(t,i){_a=Io=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Yh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,rn(t,a)}}var Oo={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},i_={readContext:Yn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:Oh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4194308,4,zh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Uo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Uo(4,2,t,i)},useMemo:function(t,i){var a=gi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=gi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=t_.bind(null,Vt,t),[c.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:Uh,useDebugValue:qc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Uh(!1),i=t[0];return t=e_.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Vt,f=gi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),an===null)throw Error(n(349));(Lr&30)!==0||bh(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Oh(Lh.bind(null,c,p,t),[t]),c.flags|=2048,Sa(9,Nh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=gi(),i=an.identifierPrefix;if(kt){var a=Ai,c=wi;a=(c&~(1<<32-ft(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Jv++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},r_={readContext:Yn,useCallback:Vh,useContext:Yn,useEffect:Xc,useImperativeHandle:Hh,useInsertionEffect:Bh,useLayoutEffect:kh,useMemo:Gh,useReducer:Wc,useRef:Fh,useState:function(){return Wc(ya)},useDebugValue:qc,useDeferredValue:function(t){var i=$n();return Wh(i,Zt.memoizedState,t)},useTransition:function(){var t=Wc(ya)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Ph,useId:jh,unstable_isNewReconciler:!1},s_={readContext:Yn,useCallback:Vh,useContext:Yn,useEffect:Xc,useImperativeHandle:Hh,useInsertionEffect:Bh,useLayoutEffect:kh,useMemo:Gh,useReducer:jc,useRef:Fh,useState:function(){return jc(ya)},useDebugValue:qc,useDeferredValue:function(t){var i=$n();return Zt===null?i.memoizedState=t:Wh(i,Zt.memoizedState,t)},useTransition:function(){var t=jc(ya)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Ph,useId:jh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Yc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Tn(),f=or(t),p=Ci(c,f);p.payload=i,a!=null&&(p.callback=a),i=ir(t,p,f),i!==null&&(si(i,t,f,c),bo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Tn(),f=or(t),p=Ci(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ir(t,p,f),i!==null&&(si(i,t,f,c),bo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Tn(),c=or(t),f=Ci(a,c);f.tag=2,i!=null&&(f.callback=i),i=ir(t,f,c),i!==null&&(si(i,t,c,a),bo(i,t,c))}};function $h(t,i,a,c,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,M):i.prototype&&i.prototype.isPureReactComponent?!oa(a,c)||!oa(f,p):!0}function Kh(t,i,a){var c=!1,f=er,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(f=Nn(i)?Rr:pn.current,c=i.contextTypes,p=(c=c!=null)?ds(t,f):er),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Zh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function $c(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Uc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Yn(p):(p=Nn(i)?Rr:pn.current,f.context=ds(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Yc(t,i,p,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Bo.enqueueReplaceState(f,f.state,null),No(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var a="",c=i;do a+=fe(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Kc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Zc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,i,a){a=Ci(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){jo||(jo=!0,fu=c),Zc(t,i)},a}function Jh(t,i,a){a=Ci(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Zc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Zc(t,i),typeof c!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function ep(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new a_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=y_.bind(null,t,i,a),i.then(t,t))}function tp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function np(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ci(-1,1),i.tag=2,ir(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var o_=R.ReactCurrentOwner,Ln=!1;function En(t,i,a,c){i.child=t===null?Mh(i,null,a,c):ms(i,t.child,a,c)}function ip(t,i,a,c,f){a=a.render;var p=i.ref;return vs(i,f),c=Vc(t,i,a,c,p,f),a=Gc(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(kt&&a&&wc(i),i.flags|=1,En(t,i,c,f),i.child)}function rp(t,i,a,c,f){if(t===null){var p=a.type;return typeof p=="function"&&!xu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,sp(t,i,p,c,f)):(t=Zo(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(M,c)&&t.ref===i.ref)return Pi(t,i,f)}return i.flags|=1,t=cr(p,c),t.ref=i.ref,t.return=i,i.child=t}function sp(t,i,a,c,f){if(t!==null){var p=t.memoizedProps;if(oa(p,c)&&t.ref===i.ref)if(Ln=!1,i.pendingProps=c=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Ln=!0);else return i.lanes=t.lanes,Pi(t,i,f)}return Qc(t,i,a,c,f)}function ap(t,i,a){var c=i.pendingProps,f=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ss,Gn),Gn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ss,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ut(Ss,Gn),Gn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ut(Ss,Gn),Gn|=c;return En(t,i,f,a),i.child}function op(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qc(t,i,a,c,f){var p=Nn(a)?Rr:pn.current;return p=ds(i,p),vs(i,f),a=Vc(t,i,a,c,p,f),c=Gc(),t!==null&&!Ln?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(kt&&c&&wc(i),i.flags|=1,En(t,i,a,f),i.child)}function lp(t,i,a,c,f){if(Nn(a)){var p=!0;Mo(i)}else p=!1;if(vs(i,f),i.stateNode===null)zo(t,i),Kh(i,a,c),$c(i,a,c,f),c=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var z=M.context,te=a.contextType;typeof te=="object"&&te!==null?te=Yn(te):(te=Nn(a)?Rr:pn.current,te=ds(i,te));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==c||z!==te)&&Zh(i,M,c,te),nr=!1;var ge=i.memoizedState;M.state=ge,No(i,c,M,f),z=i.memoizedState,I!==c||ge!==z||bn.current||nr?(typeof xe=="function"&&(Yc(i,a,xe,c),z=i.memoizedState),(I=nr||$h(i,a,I,c,ge,z,te))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),M.props=c,M.state=z,M.context=te,c=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Th(t,i),I=i.memoizedProps,te=i.type===i.elementType?I:ni(i.type,I),M.props=te,Se=i.pendingProps,ge=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=Yn(z):(z=Nn(a)?Rr:pn.current,z=ds(i,z));var Ie=a.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Se||ge!==z)&&Zh(i,M,c,z),nr=!1,ge=i.memoizedState,M.state=ge,No(i,c,M,f);var je=i.memoizedState;I!==Se||ge!==je||bn.current||nr?(typeof Ie=="function"&&(Yc(i,a,Ie,c),je=i.memoizedState),(te=nr||$h(i,a,te,c,ge,je,z)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,je,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,je,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),M.props=c,M.state=je,M.context=z,c=te):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return Jc(t,i,a,c,p,f)}function Jc(t,i,a,c,f,p){op(t,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&hh(i,a,!1),Pi(t,i,p);c=i.stateNode,o_.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&M?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,I,p)):En(t,i,I,p),i.memoizedState=c.state,f&&hh(i,a,!0),i.child}function cp(t){var i=t.stateNode;i.pendingContext?dh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&dh(t,i.context,!1),Fc(t,i.containerInfo)}function up(t,i,a,c,f){return ps(),Pc(f),i.flags|=256,En(t,i,a,c),i.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function dp(t,i,a){var c=i.pendingProps,f=Ht.current,p=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ut(Ht,f&1),t===null)return Cc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,t=c.fallback,p?(c=i.mode,p=i.child,M={mode:"hidden",children:M},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Qo(M,c,0,null),t=Or(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=tu(a),i.memoizedState=eu,t):nu(i,M));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return l_(t,i,M,c,I,f,a);if(p){p=c.fallback,M=i.mode,f=t.child,I=f.sibling;var z={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=cr(f,z),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?p=cr(I,p):(p=Or(p,M,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,M=t.child.memoizedState,M=M===null?tu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~a,i.memoizedState=eu,c}return p=t.child,t=p.sibling,c=cr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function nu(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ko(t,i,a,c){return c!==null&&Pc(c),ms(i,t.child,null,a),t=nu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function l_(t,i,a,c,f,p,M){if(a)return i.flags&256?(i.flags&=-257,c=Kc(Error(n(422))),ko(t,i,M,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=Qo({mode:"visible",children:c.children},f,0,null),p=Or(p,f,M,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ms(i,t.child,null,M),i.child.memoizedState=tu(M),i.memoizedState=eu,p);if((i.mode&1)===0)return ko(t,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(n(419)),c=Kc(p,c,void 0),ko(t,i,M,c)}if(I=(M&t.childLanes)!==0,Ln||I){if(c=an,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ri(t,f),si(c,t,f,-1))}return _u(),c=Kc(Error(n(421))),ko(t,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=S_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Vn=Qi(f.nextSibling),Hn=i,kt=!0,ti=null,t!==null&&(Xn[qn++]=wi,Xn[qn++]=Ai,Xn[qn++]=Cr,wi=t.id,Ai=t.overflow,Cr=i),i=nu(i,c.children),i.flags|=4096,i)}function fp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Dc(t.return,i,a)}function iu(t,i,a,c,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function hp(t,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(En(t,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,a,i);else if(t.tag===19)fp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ut(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Lo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),iu(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Lo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}iu(i,!0,a,null,p);break;case"together":iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=cr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=cr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function c_(t,i,a){switch(i.tag){case 3:cp(i),ps();break;case 5:Rh(i);break;case 1:Nn(i.type)&&Mo(i);break;case 4:Fc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ut(Co,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?dp(t,i,a):(Ut(Ht,Ht.current&1),t=Pi(t,i,a),t!==null?t.sibling:null);Ut(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return hp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,ap(t,i,a)}return Pi(t,i,a)}var pp,ru,mp,gp;pp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ru=function(){},mp=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Nr(mi.current);var p=null;switch(a){case"input":f=k(t,f),c=k(t,c),p=[];break;case"select":f=re({},f,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":f=zt(t,f),c=zt(t,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=xo)}tt(a,c);var M;a=null;for(te in f)if(!c.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var I=f[te];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in c){var z=c[te];if(I=f?.[te],c.hasOwnProperty(te)&&z!==I&&(z!=null||I!=null))if(te==="style")if(I){for(M in I)!I.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&I[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(p||(p=[]),p.push(te,a)),a=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(p=p||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&Ft("scroll",t),p||I===z||(p=[])):(p=p||[]).push(te,z))}a&&(p=p||[]).push("style",a);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},gp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ma(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function u_(t,i,a){var c=i.pendingProps;switch(Ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Nn(i.type)&&So(),gn(i),null;case 3:return c=i.stateNode,_s(),Ot(bn),Ot(pn),kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(mu(ti),ti=null))),ru(t,i),gn(i),null;case 5:Oc(i);var f=Nr(va.current);if(a=i.type,t!==null&&i.stateNode!=null)mp(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Nr(mi.current),Ao(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[pi]=i,c[fa]=p,t=(i.mode&1)!==0,a){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(f=0;f<ca.length;f++)Ft(ca[f],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":jt(c,p),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",c);break;case"textarea":D(c,p),Ft("invalid",c)}tt(a,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var I=p[M];M==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&_o(c.textContent,I,t),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&_o(c.textContent,I,t),f=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ft("scroll",c)}switch(a){case"input":wt(c),qe(c,p,!0);break;case"textarea":wt(c),Q(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=xo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=M.createElement(a,{is:c.is}):(t=M.createElement(a),a==="select"&&(M=t,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):t=M.createElementNS(t,a),t[pi]=i,t[fa]=c,pp(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ce(a,c),a){case"dialog":Ft("cancel",t),Ft("close",t),f=c;break;case"iframe":case"object":case"embed":Ft("load",t),f=c;break;case"video":case"audio":for(f=0;f<ca.length;f++)Ft(ca[f],t);f=c;break;case"source":Ft("error",t),f=c;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),f=c;break;case"details":Ft("toggle",t),f=c;break;case"input":jt(t,c),f=k(t,c),Ft("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=re({},c,{value:void 0}),Ft("invalid",t);break;case"textarea":D(t,c),f=zt(t,c),Ft("invalid",t);break;default:f=c}tt(a,f),I=f;for(p in I)if(I.hasOwnProperty(p)){var z=I[p];p==="style"?Fe(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ke(t,z)):p==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Re(t,z):typeof z=="number"&&Re(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ft("scroll",t):z!=null&&b(t,p,z,M))}switch(a){case"input":wt(t),qe(t,c,!1);break;case"textarea":wt(t),Q(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ae(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?lt(t,!!c.multiple,p,!1):c.defaultValue!=null&&lt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=xo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Nr(va.current),Nr(mi.current),Ao(i)){if(c=i.stateNode,a=i.memoizedProps,c[pi]=i,(p=c.nodeValue!==a)&&(t=Hn,t!==null))switch(t.tag){case 3:_o(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[pi]=i,i.stateNode=c}return gn(i),null;case 13:if(Ot(Ht),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xh(),ps(),i.flags|=98560,p=!1;else if(p=Ao(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else ti!==null&&(mu(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):_u())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return _s(),ru(t,i),t===null&&ua(i.stateNode.containerInfo),gn(i),null;case 10:return Lc(i.type._context),gn(i),null;case 17:return Nn(i.type)&&So(),gn(i),null;case 19:if(Ot(Ht),p=i.memoizedState,p===null)return gn(i),null;if(c=(i.flags&128)!==0,M=p.rendering,M===null)if(c)Ma(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Lo(t),M!==null){for(i.flags|=128,Ma(p,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ut(Ht,Ht.current&1|2),i.child}t=t.sibling}p.tail!==null&&$()>Ms&&(i.flags|=128,c=!0,Ma(p,!1),i.lanes=4194304)}else{if(!c)if(t=Lo(M),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!kt)return gn(i),null}else 2*$()-p.renderingStartTime>Ms&&a!==1073741824&&(i.flags|=128,c=!0,Ma(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$(),i.sibling=null,a=Ht.current,Ut(Ht,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return vu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function d_(t,i){switch(Ac(i),i.tag){case 1:return Nn(i.type)&&So(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ot(bn),Ot(pn),kc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(Ot(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return _s(),null;case 10:return Lc(i.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var Ho=!1,vn=!1,f_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ys(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Gt(t,i,c)}else a.current=null}function su(t,i,a){try{a()}catch(c){Gt(t,i,c)}}var vp=!1;function h_(t,i){if(vc=ao,t=$f(),cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,I=-1,z=-1,te=0,xe=0,Se=t,ge=null;t:for(;;){for(var Ie;Se!==a||f!==0&&Se.nodeType!==3||(I=M+f),Se!==p||c!==0&&Se.nodeType!==3||(z=M+c),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===t)break t;if(ge===a&&++te===f&&(I=M),ge===p&&++xe===c&&(z=M),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_c={focusedElem:t,selectionRange:a},ao=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Xe=je.memoizedProps,Xt=je.memoizedState,Y=i.stateNode,j=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:ni(i.type,Xe),Xt);Y.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Gt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return je=vp,vp=!1,je}function Ea(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&su(i,a,p)}f=f.next}while(f!==c)}}function Vo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function au(t){var i=t.ref;if(i!==null){var a=t.stateNode;t.tag,t=a,typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[fa],delete i[Mc],delete i[$v],delete i[Kv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xp(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ou(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=xo));else if(c!==4&&(t=t.child,t!==null))for(ou(t,i,a),t=t.sibling;t!==null;)ou(t,i,a),t=t.sibling}function lu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(lu(t,i,a),t=t.sibling;t!==null;)lu(t,i,a),t=t.sibling}var dn=null,ii=!1;function rr(t,i,a){for(a=a.child;a!==null;)Sp(t,i,a),a=a.sibling}function Sp(t,i,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 5:vn||ys(a,i);case 6:var c=dn,f=ii;dn=null,rr(t,i,a),dn=c,ii=f,dn!==null&&(ii?(t=dn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(ii?(t=dn,a=a.stateNode,t.nodeType===8?Sc(t.parentNode,a):t.nodeType===1&&Sc(t,a),ta(t)):Sc(dn,a.stateNode));break;case 4:c=dn,f=ii,dn=a.stateNode.containerInfo,ii=!0,rr(t,i,a),dn=c,ii=f;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&su(a,i,M),f=f.next}while(f!==c)}rr(t,i,a);break;case 1:if(!vn&&(ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Gt(a,i,I)}rr(t,i,a);break;case 21:rr(t,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,rr(t,i,a),vn=c):rr(t,i,a);break;default:rr(t,i,a)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new f_),i.forEach(function(c){var f=M_.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function ri(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,ii=!1;break e;case 3:dn=I.stateNode.containerInfo,ii=!0;break e;case 4:dn=I.stateNode.containerInfo,ii=!0;break e}I=I.return}if(dn===null)throw Error(n(160));Sp(p,M,f),dn=null,ii=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(te){Gt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),vi(t),c&4){try{Ea(3,t,t.return),Vo(3,t)}catch(Xe){Gt(t,t.return,Xe)}try{Ea(5,t,t.return)}catch(Xe){Gt(t,t.return,Xe)}}break;case 1:ri(i,t),vi(t),c&512&&a!==null&&ys(a,a.return);break;case 5:if(ri(i,t),vi(t),c&512&&a!==null&&ys(a,a.return),t.flags&32){var f=t.stateNode;try{Re(f,"")}catch(Xe){Gt(t,t.return,Xe)}}if(c&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=a!==null?a.memoizedProps:p,I=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&pt(f,p),Ce(I,M);var te=Ce(I,p);for(M=0;M<z.length;M+=2){var xe=z[M],Se=z[M+1];xe==="style"?Fe(f,Se):xe==="dangerouslySetInnerHTML"?Ke(f,Se):xe==="children"?Re(f,Se):b(f,xe,Se,te)}switch(I){case"input":Ct(f,p);break;case"textarea":A(f,p);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?lt(f,!!p.multiple,Ie,!1):ge!==!!p.multiple&&(p.defaultValue!=null?lt(f,!!p.multiple,p.defaultValue,!0):lt(f,!!p.multiple,p.multiple?[]:"",!1))}f[fa]=p}catch(Xe){Gt(t,t.return,Xe)}}break;case 6:if(ri(i,t),vi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(ri(i,t),vi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ta(i.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}break;case 4:ri(i,t),vi(t);break;case 13:ri(i,t),vi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(du=$())),c&4&&Mp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(vn=(te=vn)||xe,ri(i,t),vn=te):ri(i,t),vi(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!xe&&(t.mode&1)!==0)for(ke=t,xe=t.child;xe!==null;){for(Se=ke=xe;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ea(4,ge,ge.return);break;case 1:ys(ge,ge.return);var je=ge.stateNode;if(typeof je.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Xe){Gt(c,a,Xe)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ap(Se);continue}}Ie!==null?(Ie.return=ge,ke=Ie):Ap(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{f=Se.stateNode,te?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=_e("display",M))}catch(Xe){Gt(t,t.return,Xe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=te?"":Se.memoizedProps}catch(Xe){Gt(t,t.return,Xe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ri(i,t),vi(t),c&4&&Mp(t);break;case 21:break;default:ri(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(xp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Re(f,""),c.flags&=-33);var p=yp(t);lu(t,p,f);break;case 3:case 4:var M=c.stateNode.containerInfo,I=yp(t);ou(t,I,M);break;default:throw Error(n(161))}}catch(z){Gt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function p_(t,i,a){ke=t,Tp(t)}function Tp(t,i,a){for(var c=(t.mode&1)!==0;ke!==null;){var f=ke,p=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||Ho;if(!M){var I=f.alternate,z=I!==null&&I.memoizedState!==null||vn;I=Ho;var te=vn;if(Ho=M,(vn=z)&&!te)for(ke=f;ke!==null;)M=ke,z=M.child,M.tag===22&&M.memoizedState!==null?Rp(f):z!==null?(z.return=M,ke=z):Rp(f);for(;p!==null;)ke=p,Tp(p),p=p.sibling;ke=f,Ho=I,vn=te}wp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ke=p):wp(t)}}function wp(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Vo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ah(i,p,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ah(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&ta(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&au(i)}catch(ge){Gt(i,i.return,ge)}}if(i===t){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Ap(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Rp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Vo(4,i)}catch(z){Gt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){Gt(i,f,z)}}var p=i.return;try{au(i)}catch(z){Gt(i,p,z)}break;case 5:var M=i.return;try{au(i)}catch(z){Gt(i,M,z)}}}catch(z){Gt(i,i.return,z)}if(i===t){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var m_=Math.ceil,Go=R.ReactCurrentDispatcher,cu=R.ReactCurrentOwner,Kn=R.ReactCurrentBatchConfig,Mt=0,an=null,Yt=null,fn=0,Gn=0,Ss=Ji(0),Qt=0,Ta=null,Dr=0,Wo=0,uu=0,wa=null,Dn=null,du=0,Ms=1/0,bi=null,jo=!1,fu=null,sr=null,Xo=!1,ar=null,qo=0,Aa=0,hu=null,Yo=-1,$o=0;function Tn(){return(Mt&6)!==0?$():Yo!==-1?Yo:Yo=$()}function or(t){return(t.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:Qv.transition!==null?($o===0&&($o=It()),$o):(t=St,t!==0||(t=window.event,t=t===void 0?16:Pf(t.type)),t)}function si(t,i,a,c){if(50<Aa)throw Aa=0,hu=null,Error(n(185));nn(t,a,c),((Mt&2)===0||t!==an)&&(t===an&&((Mt&2)===0&&(Wo|=a),Qt===4&&lr(t,fn)),In(t,c),a===1&&Mt===0&&(i.mode&1)===0&&(Ms=$()+500,Eo&&tr()))}function In(t,i){var a=t.callbackNode;Mn(t,i);var c=tn(t,t===an?fn:0);if(c===0)a!==null&&C(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&C(a),i===1)t.tag===0?Zv(Pp.bind(null,t)):ph(Pp.bind(null,t)),qv(function(){(Mt&6)===0&&tr()}),a=null;else{switch(hi(c)){case 1:a=Ee;break;case 4:a=be;break;case 16:a=Be;break;case 536870912:a=at;break;default:a=Be}a=Op(a,Cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Cp(t,i){if(Yo=-1,$o=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Es()&&t.callbackNode!==a)return null;var c=tn(t,t===an?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Ko(t,c);else{i=c;var f=Mt;Mt|=2;var p=Np();(an!==t||fn!==i)&&(bi=null,Ms=$()+500,Ur(t,i));do try{__();break}catch(I){bp(t,I)}while(!0);Nc(),Go.current=p,Mt=f,Yt!==null?i=0:(an=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(f=Mi(t),f!==0&&(c=f,i=pu(t,f))),i===1)throw a=Ta,Ur(t,0),lr(t,c),In(t,$()),a;if(i===6)lr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!g_(f)&&(i=Ko(t,c),i===2&&(p=Mi(t),p!==0&&(c=p,i=pu(t,p))),i===1))throw a=Ta,Ur(t,0),lr(t,c),In(t,$()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Dn,bi);break;case 3:if(lr(t,c),(c&130023424)===c&&(i=du+500-$(),10<i)){if(tn(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Tn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=yc(Fr.bind(null,t,Dn,bi),i);break}Fr(t,Dn,bi);break;case 4:if(lr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var M=31-ft(c);p=1<<M,M=i[M],M>f&&(f=M),c&=~p}if(c=f,c=$()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*m_(c/1960))-c,10<c){t.timeoutHandle=yc(Fr.bind(null,t,Dn,bi),c);break}Fr(t,Dn,bi);break;case 5:Fr(t,Dn,bi);break;default:throw Error(n(329))}}}return In(t,$()),t.callbackNode===a?Cp.bind(null,t):null}function pu(t,i){var a=wa;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=Dn,Dn=a,i!==null&&mu(i)),t}function mu(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function g_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!ei(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~uu,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-ft(i),c=1<<a;t[a]=-1,i&=~c}}function Pp(t){if((Mt&6)!==0)throw Error(n(327));Es();var i=tn(t,0);if((i&1)===0)return In(t,$()),null;var a=Ko(t,i);if(t.tag!==0&&a===2){var c=Mi(t);c!==0&&(i=c,a=pu(t,c))}if(a===1)throw a=Ta,Ur(t,0),lr(t,i),In(t,$()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Dn,bi),In(t,$()),null}function gu(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(Ms=$()+500,Eo&&tr())}}function Ir(t){ar!==null&&ar.tag===0&&(Mt&6)===0&&Es();var i=Mt;Mt|=1;var a=Kn.transition,c=St;try{if(Kn.transition=null,St=1,t)return t()}finally{St=c,Kn.transition=a,Mt=i,(Mt&6)===0&&tr()}}function vu(){Gn=Ss.current,Ot(Ss)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Xv(a)),Yt!==null)for(a=Yt.return;a!==null;){var c=a;switch(Ac(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&So();break;case 3:_s(),Ot(bn),Ot(pn),kc();break;case 5:Oc(c);break;case 4:_s();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:Lc(c.type._context);break;case 22:case 23:vu()}a=a.return}if(an=t,Yt=t=cr(t.current,null),fn=Gn=i,Qt=0,Ta=null,uu=Wo=Dr=0,Dn=wa=null,br!==null){for(i=0;i<br.length;i++)if(a=br[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var M=p.next;p.next=f,c.next=M}a.pending=c}br=null}return t}function bp(t,i){do{var a=Yt;try{if(Nc(),Do.current=Oo,Io){for(var c=Vt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Io=!1}if(Lr=0,sn=Zt=Vt=null,_a=!1,xa=0,cu.current=null,a===null||a.return===null){Qt=1,Ta=i,Yt=null;break}e:{var p=t,M=a.return,I=a,z=i;if(i=fn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=tp(M);if(Ie!==null){Ie.flags&=-257,np(Ie,M,I,p,i),Ie.mode&1&&ep(p,te,i),i=Ie,z=te;var je=i.updateQueue;if(je===null){var Xe=new Set;Xe.add(z),i.updateQueue=Xe}else je.add(z);break e}else{if((i&1)===0){ep(p,te,i),_u();break e}z=Error(n(426))}}else if(kt&&I.mode&1){var Xt=tp(M);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),np(Xt,M,I,p,i),Pc(xs(z,I));break e}}p=z=xs(z,I),Qt!==4&&(Qt=2),wa===null?wa=[p]:wa.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Qh(p,z,i);wh(p,Y);break e;case 1:I=z;var j=p.type,Z=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(sr===null||!sr.has(Z)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Jh(p,I,i);wh(p,we);break e}}p=p.return}while(p!==null)}Dp(a)}catch(Ye){i=Ye,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Np(){var t=Go.current;return Go.current=Oo,t===null?Oo:t}function _u(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),an===null||(Dr&268435455)===0&&(Wo&268435455)===0||lr(an,fn)}function Ko(t,i){var a=Mt;Mt|=2;var c=Np();(an!==t||fn!==i)&&(bi=null,Ur(t,i));do try{v_();break}catch(f){bp(t,f)}while(!0);if(Nc(),Mt=a,Go.current=c,Yt!==null)throw Error(n(261));return an=null,fn=0,Qt}function v_(){for(;Yt!==null;)Lp(Yt)}function __(){for(;Yt!==null&&!X();)Lp(Yt)}function Lp(t){var i=Fp(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?Dp(t):Yt=i,cu.current=null}function Dp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=u_(a,i,Gn),a!==null){Yt=a;return}}else{if(a=d_(a,i),a!==null){a.flags&=32767,Yt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Fr(t,i,a){var c=St,f=Kn.transition;try{Kn.transition=null,St=1,x_(t,i,a,c)}finally{Kn.transition=f,St=c}return null}function x_(t,i,a,c){do Es();while(ar!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(un(t,p),t===an&&(Yt=an=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xo||(Xo=!0,Op(Be,function(){return Es(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Kn.transition,Kn.transition=null;var M=St;St=1;var I=Mt;Mt|=4,cu.current=null,h_(t,a),Ep(a,t),kv(_c),ao=!!vc,_c=vc=null,t.current=a,p_(a),ne(),Mt=I,St=M,Kn.transition=p}else t.current=a;if(Xo&&(Xo=!1,ar=t,qo=f),p=t.pendingLanes,p===0&&(sr=null),mt(a.stateNode),In(t,$()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(jo)throw jo=!1,t=fu,fu=null,t;return(qo&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===hu?Aa++:(Aa=0,hu=t):Aa=0,tr(),null}function Es(){if(ar!==null){var t=hi(qo),i=Kn.transition,a=St;try{if(Kn.transition=null,St=16>t?16:t,ar===null)var c=!1;else{if(t=ar,ar=null,qo=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,ke=t.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var I=p.deletions;if(I!==null){for(var z=0;z<I.length;z++){var te=I[z];for(ke=te;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Ea(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,ke=Se;else for(;ke!==null;){xe=ke;var ge=xe.sibling,Ie=xe.return;if(_p(xe),xe===te){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var je=p.alternate;if(je!==null){var Xe=je.child;if(Xe!==null){je.child=null;do{var Xt=Xe.sibling;Xe.sibling=null,Xe=Xt}while(Xe!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ea(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,ke=Y;break e}ke=p.return}}var j=t.current;for(ke=j;ke!==null;){M=ke;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,ke=Z;else e:for(M=j;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Vo(9,I)}}catch(Ye){Gt(I,I.return,Ye)}if(I===M){ke=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,ke=we;break e}ke=I.return}}if(Mt=f,tr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(st,t)}catch{}c=!0}return c}finally{St=a,Kn.transition=i}}return!1}function Ip(t,i,a){i=xs(a,i),i=Qh(t,i,1),t=ir(t,i,1),i=Tn(),t!==null&&(nn(t,1,i),In(t,i))}function Gt(t,i,a){if(t.tag===3)Ip(t,t,a);else for(;i!==null;){if(i.tag===3){Ip(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(sr===null||!sr.has(c))){t=xs(a,t),t=Jh(i,t,1),i=ir(i,t,1),t=Tn(),i!==null&&(nn(i,1,t),In(i,t));break}}i=i.return}}function y_(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&a,an===t&&(fn&a)===a&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>$()-du?Ur(t,0):uu|=a),In(t,i)}function Up(t,i){i===0&&((t.mode&1)===0?i=1:(i=Nt,Nt<<=1,(Nt&130023424)===0&&(Nt=4194304)));var a=Tn();t=Ri(t,i),t!==null&&(nn(t,i,a),In(t,a))}function S_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Up(t,a)}function M_(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Up(t,a)}var Fp;Fp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,c_(t,i,a);Ln=(t.flags&131072)!==0}else Ln=!1,kt&&(i.flags&1048576)!==0&&mh(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;zo(t,i),t=i.pendingProps;var f=ds(i,pn.current);vs(i,a),f=Vc(null,i,c,t,f,a);var p=Gc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(c)?(p=!0,Mo(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Uc(i),f.updater=Bo,i.stateNode=f,f._reactInternals=i,$c(i,c,t,a),i=Jc(null,i,c,!0,p,a)):(i.tag=0,kt&&p&&wc(i),En(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(zo(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=T_(c),t=ni(c,t),f){case 0:i=Qc(null,i,c,t,a);break e;case 1:i=lp(null,i,c,t,a);break e;case 11:i=ip(null,i,c,t,a);break e;case 14:i=rp(null,i,c,ni(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ni(c,f),Qc(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ni(c,f),lp(t,i,c,f,a);case 3:e:{if(cp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Th(t,i),No(i,c,null,a);var M=i.memoizedState;if(c=M.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=xs(Error(n(423)),i),i=up(t,i,c,a,f);break e}else if(c!==f){f=xs(Error(n(424)),i),i=up(t,i,c,a,f);break e}else for(Vn=Qi(i.stateNode.containerInfo.firstChild),Hn=i,kt=!0,ti=null,a=Mh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),c===f){i=Pi(t,i,a);break e}En(t,i,c,a)}i=i.child}return i;case 5:return Rh(i),t===null&&Cc(i),c=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,xc(c,f)?M=null:p!==null&&xc(c,p)&&(i.flags|=32),op(t,i),En(t,i,M,a),i.child;case 6:return t===null&&Cc(i),null;case 13:return dp(t,i,a);case 4:return Fc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ms(i,null,c,a):En(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ni(c,f),ip(t,i,c,f,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,Ut(Co,c._currentValue),c._currentValue=M,p!==null)if(ei(p.value,M)){if(p.children===f.children&&!bn.current){i=Pi(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){M=p.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(p.tag===1){z=Ci(-1,a&-a),z.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),te.pending=z}}p.lanes|=a,z=p.alternate,z!==null&&(z.lanes|=a),Dc(p.return,a,i),I.lanes|=a;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Dc(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}En(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,vs(i,a),f=Yn(f),c=c(f),i.flags|=1,En(t,i,c,a),i.child;case 14:return c=i.type,f=ni(c,i.pendingProps),f=ni(c.type,f),rp(t,i,c,f,a);case 15:return sp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ni(c,f),zo(t,i),i.tag=1,Nn(c)?(t=!0,Mo(i)):t=!1,vs(i,a),Kh(i,c,f),$c(i,c,f,a),Jc(null,i,c,!0,t,a);case 19:return hp(t,i,a);case 22:return ap(t,i,a)}throw Error(n(156,i.tag))};function Op(t,i){return io(t,i)}function E_(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,a,c){return new E_(t,i,a,c)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function T_(t){if(typeof t=="function")return xu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===he)return 14}return 2}function cr(t,i){var a=t.alternate;return a===null?(a=Zn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Zo(t,i,a,c,f,p){var M=2;if(c=t,typeof t=="function")xu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Or(a.children,f,p,i);case G:M=8,f|=8;break;case N:return t=Zn(12,a,i,f|2),t.elementType=N,t.lanes=p,t;case ee:return t=Zn(13,a,i,f),t.elementType=ee,t.lanes=p,t;case ue:return t=Zn(19,a,i,f),t.elementType=ue,t.lanes=p,t;case ce:return Qo(a,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case F:M=9;break e;case se:M=11;break e;case he:M=14;break e;case ae:M=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Zn(M,a,i,f),i.elementType=t,i.type=c,i.lanes=p,i}function Or(t,i,a,c){return t=Zn(7,t,c,i),t.lanes=a,t}function Qo(t,i,a,c){return t=Zn(22,t,c,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function yu(t,i,a){return t=Zn(6,t,null,i),t.lanes=a,t}function Su(t,i,a){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function w_(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Mu(t,i,a,c,f,p,M,I,z){return t=new w_(t,i,a,I,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Zn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(p),t}function A_(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Bp(t){if(!t)return er;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Nn(a))return fh(t,a,i)}return i}function kp(t,i,a,c,f,p,M,I,z){return t=Mu(a,c,!0,t,f,p,M,I,z),t.context=Bp(null),a=t.current,c=Tn(),f=or(a),p=Ci(c,f),p.callback=i??null,ir(a,p,f),t.current.lanes=f,nn(t,f,c),In(t,c),t}function Jo(t,i,a,c){var f=i.current,p=Tn(),M=or(f);return a=Bp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ci(p,M),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=ir(f,i,M),t!==null&&(si(t,f,M,p),bo(t,f,M)),M}function el(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function zp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Eu(t,i){zp(t,i),(t=t.alternate)&&zp(t,i)}function R_(){return null}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tu(t){this._internalRoot=t}tl.prototype.render=Tu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Jo(t,i,null,null)},tl.prototype.unmount=Tu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Jo(null,t,null,null)}),i[Ei]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Tf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<$i.length&&i!==0&&i<$i[a].priority;a++);$i.splice(a,0,t),a===0&&Rf(t)}};function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function C_(t,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var te=el(M);p.call(te)}}var M=kp(i,c,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=M,t[Ei]=M.current,ua(t.nodeType===8?t.parentNode:t),Ir(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var te=el(z);I.call(te)}}var z=Mu(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=z,t[Ei]=z.current,ua(t.nodeType===8?t.parentNode:t),Ir(function(){Jo(i,z,a,c)}),z}function il(t,i,a,c,f){var p=a._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var I=f;f=function(){var z=el(M);I.call(z)}}Jo(i,M,t,f)}else M=C_(a,i,t,f,c);return el(M)}Mf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(rn(i,a|1),In(i,$()),(Mt&6)===0&&(Ms=$()+500,tr()))}break;case 13:Ir(function(){var c=Ri(t,1);if(c!==null){var f=Tn();si(c,t,1,f)}}),Eu(t,1)}},Kl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var a=Tn();si(i,t,134217728,a)}Eu(t,134217728)}},Ef=function(t){if(t.tag===13){var i=or(t),a=Ri(t,i);if(a!==null){var c=Tn();si(a,t,i,c)}Eu(t,i)}},Tf=function(){return St},wf=function(t,i){var a=St;try{return St=t,i()}finally{St=a}},Pe=function(t,i,a){switch(i){case"input":if(Ct(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=yo(c);if(!f)throw Error(n(90));Ze(c),Ct(c,f)}}}break;case"textarea":A(t,a);break;case"select":i=a.value,i!=null&&lt(t,!!a.multiple,i,!1)}},ut=gu,bt=Ir;var P_={usingClientEntryPoint:!1,Events:[ha,cs,yo,pe,Ge,gu]},Ra={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=to(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||R_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{st=rl.inject(b_),We=rl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_,Un.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(i))throw Error(n(200));return A_(t,i,null,a)},Un.createRoot=function(t,i){if(!wu(t))throw Error(n(299));var a=!1,c="",f=Hp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Mu(t,1,!1,null,null,a,!1,c,f),t[Ei]=i.current,ua(t.nodeType===8?t.parentNode:t),new Tu(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=to(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return Ir(t)},Un.hydrate=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,a)},Un.hydrateRoot=function(t,i,a){if(!wu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",M=Hp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=kp(i,null,t,1,a??null,f,!1,p,M),t[Ei]=i.current,ua(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new tl(i)},Un.render=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,a)},Un.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Un.unstable_batchedUpdates=gu,Un.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!nl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,a,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Kp;function fg(){if(Kp)return Cu.exports;Kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cu.exports=k_(),Cu.exports}var Zp;function z_(){if(Zp)return sl;Zp=1;var s=fg();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var H_=z_();const V_=ug(H_);fg();function Oa(){return Oa=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Oa.apply(this,arguments)}var xr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(xr||(xr={}));const Qp="popstate";function G_(s){s===void 0&&(s={});function e(r,o){let{pathname:l,search:u,hash:d}=r.location;return hd("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:hg(o)}return j_(e,n,null,s)}function Kt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function af(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function W_(){return Math.random().toString(36).substr(2,8)}function Jp(s,e){return{usr:s.state,key:s.key,idx:e}}function hd(s,e,n,r){return n===void 0&&(n=null),Oa({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?qs(e):e,{state:n,key:e&&e.key||r||W_()})}function hg(s){let{pathname:e="/",search:n="",hash:r=""}=s;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qs(s){let e={};if(s){let n=s.indexOf("#");n>=0&&(e.hash=s.substr(n),s=s.substr(0,n));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function j_(s,e,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d=xr.Pop,h=null,m=_();m==null&&(m=0,u.replaceState(Oa({},u.state,{idx:m}),""));function _(){return(u.state||{idx:null}).idx}function g(){d=xr.Pop;let y=_(),v=y==null?null:y-m;m=y,h&&h({action:d,location:w.location,delta:v})}function x(y,v){d=xr.Push;let L=hd(w.location,y,v);m=_()+1;let b=Jp(L,m),R=w.createHref(L);try{u.pushState(b,"",R)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;o.location.assign(R)}l&&h&&h({action:d,location:w.location,delta:1})}function S(y,v){d=xr.Replace;let L=hd(w.location,y,v);m=_();let b=Jp(L,m),R=w.createHref(L);u.replaceState(b,"",R),l&&h&&h({action:d,location:w.location,delta:0})}function T(y){let v=o.location.origin!=="null"?o.location.origin:o.location.href,L=typeof y=="string"?y:hg(y);return L=L.replace(/ $/,"%20"),Kt(v,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,v)}let w={get action(){return d},get location(){return s(o,u)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Qp,g),h=y,()=>{o.removeEventListener(Qp,g),h=null}},createHref(y){return e(o,y)},createURL:T,encodeLocation(y){let v=T(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return u.go(y)}};return w}var em;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(em||(em={}));function X_(s,e,n){return n===void 0&&(n="/"),q_(s,e,n)}function q_(s,e,n,r){let o=typeof e=="string"?qs(e):e,l=gg(o.pathname||"/",n);if(l==null)return null;let u=pg(s);Y_(u);let d=null;for(let h=0;d==null&&h<u.length;++h){let m=a0(l);d=i0(u[h],m)}return d}function pg(s,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,u,d)=>{let h={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(Kt(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let m=Kr([r,h.relativePath]),_=n.concat(h);l.children&&l.children.length>0&&(Kt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),pg(l.children,e,_,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:t0(m,l.index),routesMeta:_})};return s.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let h of mg(l.path))o(l,u,h)}),e}function mg(s){let e=s.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=mg(r.join("/")),d=[];return d.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&d.push(...u),d.map(h=>s.startsWith("/")&&h===""?"/":h)}function Y_(s){s.sort((e,n)=>e.score!==n.score?n.score-e.score:n0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $_=/^:[\w-]+$/,K_=3,Z_=2,Q_=1,J_=10,e0=-2,tm=s=>s==="*";function t0(s,e){let n=s.split("/"),r=n.length;return n.some(tm)&&(r+=e0),e&&(r+=Z_),n.filter(o=>!tm(o)).reduce((o,l)=>o+($_.test(l)?K_:l===""?Q_:J_),r)}function n0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function i0(s,e,n){let{routesMeta:r}=s,o={},l="/",u=[];for(let d=0;d<r.length;++d){let h=r[d],m=d===r.length-1,_=l==="/"?e:e.slice(l.length)||"/",g=r0({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},_),x=h.route;if(!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Kr([l,g.pathname]),pathnameBase:d0(Kr([l,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(l=Kr([l,g.pathnameBase]))}return u}function r0(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,r]=s0(s.path,s.caseSensitive,s.end),o=e.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((m,_,g)=>{let{paramName:x,isOptional:S}=_;if(x==="*"){let w=d[g]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=d[g];return S&&!T?m[x]=void 0:m[x]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:s}}function s0(s,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),af(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,h)=>(r.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function a0(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return af(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function gg(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=s.charAt(n);return r&&r!=="/"?null:s.slice(n)||"/"}const o0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,l0=s=>o0.test(s);function c0(s,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:o=""}=typeof s=="string"?qs(s):s,l;if(n)if(l0(n))l=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),af(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+n))}n.startsWith("/")?l=nm(n.substring(1),"/"):l=nm(n,e)}else l=e;return{pathname:l,search:f0(r),hash:h0(o)}}function nm(s,e){let n=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Nu(s,e,n,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u0(s){return s.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vg(s,e){let n=u0(s);return e?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _g(s,e,n,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=qs(s):(o=Oa({},s),Kt(!o.pathname||!o.pathname.includes("?"),Nu("?","pathname","search",o)),Kt(!o.pathname||!o.pathname.includes("#"),Nu("#","pathname","hash",o)),Kt(!o.search||!o.search.includes("#"),Nu("#","search","hash",o)));let l=s===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=n;else{let g=e.length-1;if(!r&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),g-=1;o.pathname=x.join("/")}d=g>=0?e[g]:"/"}let h=c0(o,d),m=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(m||_)&&(h.pathname+="/"),h}const Kr=s=>s.join("/").replace(/\/\/+/g,"/"),d0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),f0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,h0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function p0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const xg=["post","put","patch","delete"];new Set(xg);const m0=["get",...xg];new Set(m0);function Ba(){return Ba=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Ba.apply(this,arguments)}const of=$e.createContext(null),g0=$e.createContext(null),Ga=$e.createContext(null),jl=$e.createContext(null),Jr=$e.createContext({outlet:null,matches:[],isDataRoute:!1}),yg=$e.createContext(null);function Wa(){return $e.useContext(jl)!=null}function lf(){return Wa()||Kt(!1),$e.useContext(jl).location}function Sg(s){$e.useContext(Ga).static||$e.useLayoutEffect(s)}function v0(){let{isDataRoute:s}=$e.useContext(Jr);return s?b0():_0()}function _0(){Wa()||Kt(!1);let s=$e.useContext(of),{basename:e,future:n,navigator:r}=$e.useContext(Ga),{matches:o}=$e.useContext(Jr),{pathname:l}=lf(),u=JSON.stringify(vg(o,n.v7_relativeSplatPath)),d=$e.useRef(!1);return Sg(()=>{d.current=!0}),$e.useCallback(function(m,_){if(_===void 0&&(_={}),!d.current)return;if(typeof m=="number"){r.go(m);return}let g=_g(m,JSON.parse(u),l,_.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Kr([e,g.pathname])),(_.replace?r.replace:r.push)(g,_.state,_)},[e,r,u,l,s])}function x0(s,e){return y0(s,e)}function y0(s,e,n,r){Wa()||Kt(!1);let{navigator:o}=$e.useContext(Ga),{matches:l}=$e.useContext(Jr),u=l[l.length-1],d=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let m=lf(),_;if(e){var g;let y=typeof e=="string"?qs(e):e;h==="/"||(g=y.pathname)!=null&&g.startsWith(h)||Kt(!1),_=y}else _=m;let x=_.pathname||"/",S=x;if(h!=="/"){let y=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=X_(s,{pathname:S}),w=w0(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},d,y.params),pathname:Kr([h,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Kr([h,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,n,r);return e&&w?$e.createElement(jl.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:xr.Pop}},w):w}function S0(){let s=P0(),e=p0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $e.createElement($e.Fragment,null,$e.createElement("h2",null,"Unexpected Application Error!"),$e.createElement("h3",{style:{fontStyle:"italic"}},e),n?$e.createElement("pre",{style:o},n):null,null)}const M0=$e.createElement(S0,null);class E0 extends $e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$e.createElement(Jr.Provider,{value:this.props.routeContext},$e.createElement(yg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T0(s){let{routeContext:e,match:n,children:r}=s,o=$e.useContext(of);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),$e.createElement(Jr.Provider,{value:e},r)}function w0(s,e,n,r){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),s==null){var l;if(!n)return null;if(n.errors)s=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let u=s,d=(o=n)==null?void 0:o.errors;if(d!=null){let _=u.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);_>=0||Kt(!1),u=u.slice(0,Math.min(u.length,_+1))}let h=!1,m=-1;if(n&&r&&r.v7_partialHydration)for(let _=0;_<u.length;_++){let g=u[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:x,errors:S}=n,T=g.route.loader&&x[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||T){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((_,g,x)=>{let S,T=!1,w=null,y=null;n&&(S=d&&g.route.id?d[g.route.id]:void 0,w=g.route.errorElement||M0,h&&(m<0&&x===0?(N0("route-fallback"),T=!0,y=null):m===x&&(T=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,x+1)),L=()=>{let b;return S?b=w:T?b=y:g.route.Component?b=$e.createElement(g.route.Component,null):g.route.element?b=g.route.element:b=_,$e.createElement(T0,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:n!=null},children:b})};return n&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?$e.createElement(E0,{location:n.location,revalidation:n.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):L()},null)}var Mg=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Mg||{}),Eg=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Eg||{});function A0(s){let e=$e.useContext(of);return e||Kt(!1),e}function R0(s){let e=$e.useContext(g0);return e||Kt(!1),e}function C0(s){let e=$e.useContext(Jr);return e||Kt(!1),e}function Tg(s){let e=C0(),n=e.matches[e.matches.length-1];return n.route.id||Kt(!1),n.route.id}function P0(){var s;let e=$e.useContext(yg),n=R0(),r=Tg();return e!==void 0?e:(s=n.errors)==null?void 0:s[r]}function b0(){let{router:s}=A0(Mg.UseNavigateStable),e=Tg(Eg.UseNavigateStable),n=$e.useRef(!1);return Sg(()=>{n.current=!0}),$e.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,Ba({fromRouteId:e},l)))},[s,e])}const im={};function N0(s,e,n){im[s]||(im[s]=!0)}function L0(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function D0(s){let{to:e,replace:n,state:r,relative:o}=s;Wa()||Kt(!1);let{future:l,static:u}=$e.useContext(Ga),{matches:d}=$e.useContext(Jr),{pathname:h}=lf(),m=v0(),_=_g(e,vg(d,l.v7_relativeSplatPath),h,o==="path"),g=JSON.stringify(_);return $e.useEffect(()=>m(JSON.parse(g),{replace:n,state:r,relative:o}),[m,g,o,n,r]),null}function pd(s){Kt(!1)}function I0(s){let{basename:e="/",children:n=null,location:r,navigationType:o=xr.Pop,navigator:l,static:u=!1,future:d}=s;Wa()&&Kt(!1);let h=e.replace(/^\/*/,"/"),m=$e.useMemo(()=>({basename:h,navigator:l,static:u,future:Ba({v7_relativeSplatPath:!1},d)}),[h,d,l,u]);typeof r=="string"&&(r=qs(r));let{pathname:_="/",search:g="",hash:x="",state:S=null,key:T="default"}=r,w=$e.useMemo(()=>{let y=gg(_,h);return y==null?null:{location:{pathname:y,search:g,hash:x,state:S,key:T},navigationType:o}},[h,_,g,x,S,T,o]);return w==null?null:$e.createElement(Ga.Provider,{value:m},$e.createElement(jl.Provider,{children:n,value:w}))}function U0(s){let{children:e,location:n}=s;return x0(md(e),n)}new Promise(()=>{});function md(s,e){e===void 0&&(e=[]);let n=[];return $e.Children.forEach(s,(r,o)=>{if(!$e.isValidElement(r))return;let l=[...e,o];if(r.type===$e.Fragment){n.push.apply(n,md(r.props.children,l));return}r.type!==pd&&Kt(!1),!r.props.index||!r.props.children||Kt(!1);let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=md(r.props.children,l)),n.push(u)}),n}const F0="6";try{window.__reactRouterVersion=F0}catch{}const O0="startTransition",rm=F_[O0];function B0(s){let{basename:e,children:n,future:r,window:o}=s,l=$e.useRef();l.current==null&&(l.current=G_({window:o,v5Compat:!0}));let u=l.current,[d,h]=$e.useState({action:u.action,location:u.location}),{v7_startTransition:m}=r||{},_=$e.useCallback(g=>{m&&rm?rm(()=>h(g)):h(g)},[h,m]);return $e.useLayoutEffect(()=>u.listen(_),[u,_]),$e.useEffect(()=>L0(r),[r]),$e.createElement(I0,{basename:e,children:n,location:d.location,navigationType:d.action,navigator:u,future:r})}var sm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(sm||(sm={}));var am;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(am||(am={}));const cf="178",k0=0,om=1,z0=2,wg=1,H0=2,Fi=3,Mr=0,Bn=1,Oi=2,yr=0,ks=1,lm=2,cm=3,um=4,V0=5,Xr=100,G0=101,W0=102,j0=103,X0=104,q0=200,Y0=201,$0=202,K0=203,gd=204,vd=205,Z0=206,Q0=207,J0=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,_d=0,xd=1,yd=2,Vs=3,Sd=4,Md=5,Ed=6,Td=7,Ag=0,ax=1,ox=2,Sr=0,lx=1,cx=2,ux=3,dx=4,fx=5,hx=6,px=7,Rg=300,Gs=301,Ws=302,wd=303,Ad=304,Xl=306,Rd=1e3,Yr=1001,Cd=1002,di=1003,mx=1004,al=1005,xi=1006,Lu=1007,$r=1008,Hi=1009,Cg=1010,Pg=1011,ka=1012,uf=1013,Zr=1014,Bi=1015,ja=1016,df=1017,ff=1018,za=1020,bg=35902,Ng=1021,Lg=1022,ui=1023,Ha=1026,Va=1027,Dg=1028,hf=1029,Ig=1030,pf=1031,mf=1033,Ll=33776,Dl=33777,Il=33778,Ul=33779,Pd=35840,bd=35841,Nd=35842,Ld=35843,Dd=36196,Id=37492,Ud=37496,Fd=37808,Od=37809,Bd=37810,kd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,jd=37817,Xd=37818,qd=37819,Yd=37820,$d=37821,Fl=36492,Kd=36494,Zd=36495,Ug=36283,Qd=36284,Jd=36285,ef=36286,gx=3200,vx=3201,_x=0,xx=1,_r="",Jn="srgb",js="srgb-linear",kl="linear",Lt="srgb",Ts=7680,dm=519,yx=512,Sx=513,Mx=514,Fg=515,Ex=516,Tx=517,wx=518,Ax=519,fm=35044,hm="300 es",ki=2e3,zl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=Math.PI/180,tf=180/Math.PI;function Xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function Rx(s,e){return(s%e+e)%e}function Iu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let h=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];const x=l[u+0],S=l[u+1],T=l[u+2],w=l[u+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=g;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=w;return}if(g!==w||h!==x||m!==S||_!==T){let y=1-d;const v=h*x+m*S+_*T+g*w,L=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const H=Math.sqrt(b),B=Math.atan2(H,v*L);y=Math.sin(y*B)/H,d=Math.sin(d*B)/H}const R=d*L;if(h=h*y+x*R,m=m*y+S*R,_=_*y+T*R,g=g*y+w*R,y===1-d){const H=1/Math.sqrt(h*h+m*m+_*_+g*g);h*=H,m*=H,_*=H,g*=H}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],h=r[o+1],m=r[o+2],_=r[o+3],g=l[u],x=l[u+1],S=l[u+2],T=l[u+3];return e[n]=d*T+_*g+h*S-m*x,e[n+1]=h*T+_*x+m*g-d*S,e[n+2]=m*T+_*S+d*x-h*g,e[n+3]=_*T-d*g-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(o/2),g=d(l/2),x=h(r/2),S=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=x*_*g+m*S*T,this._y=m*S*g-x*_*T,this._z=m*_*T+x*S*g,this._w=m*_*g-x*S*T;break;case"YXZ":this._x=x*_*g+m*S*T,this._y=m*S*g-x*_*T,this._z=m*_*T-x*S*g,this._w=m*_*g+x*S*T;break;case"ZXY":this._x=x*_*g-m*S*T,this._y=m*S*g+x*_*T,this._z=m*_*T+x*S*g,this._w=m*_*g-x*S*T;break;case"ZYX":this._x=x*_*g-m*S*T,this._y=m*S*g+x*_*T,this._z=m*_*T-x*S*g,this._w=m*_*g+x*S*T;break;case"YZX":this._x=x*_*g+m*S*T,this._y=m*S*g+x*_*T,this._z=m*_*T-x*S*g,this._w=m*_*g-x*S*T;break;case"XZY":this._x=x*_*g-m*S*T,this._y=m*S*g-x*_*T,this._z=m*_*T+x*S*g,this._w=m*_*g+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],h=n[9],m=n[2],_=n[6],g=n[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*d+o*m-l*h,this._y=o*_+u*h+l*d-r*m,this._z=l*_+u*m+r*h-o*d,this._w=u*_-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),g=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=u*g+this._w*x,this._x=r*g+this._x*x,this._y=o*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*r),_=2*(d*n-l*o),g=2*(l*r-u*n);return this.x=n+h*m+u*g-d*_,this.y=r+h*_+d*m-l*g,this.z=o+h*g+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new K,pm=new qa;class dt{constructor(e,n,r,o,l,u,d,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,m)}set(e,n,r,o,l,u,d,h,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],_=r[4],g=r[7],x=r[2],S=r[5],T=r[8],w=o[0],y=o[3],v=o[6],L=o[1],b=o[4],R=o[7],H=o[2],B=o[5],U=o[8];return l[0]=u*w+d*L+h*H,l[3]=u*y+d*b+h*B,l[6]=u*v+d*R+h*U,l[1]=m*w+_*L+g*H,l[4]=m*y+_*b+g*B,l[7]=m*v+_*R+g*U,l[2]=x*w+S*L+T*H,l[5]=x*y+S*b+T*B,l[8]=x*v+S*R+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*d*m-r*l*_+r*d*h+o*l*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8],g=_*u-d*m,x=d*h-_*l,S=m*l-u*h,T=n*g+r*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(o*m-_*r)*w,e[2]=(d*r-o*u)*w,e[3]=x*w,e[4]=(_*n-o*h)*w,e[5]=(o*l-d*n)*w,e[6]=S*w,e[7]=(r*h-m*n)*w,e[8]=(u*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new dt;function Og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cx(){const s=Hl("canvas");return s.style.display="block",s}const mm={};function zs(s){s in mm||(mm[s]=!0,console.warn(s))}function Px(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function bx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lx(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Lt&&(o.r=zi(o.r),o.g=zi(o.g),o.b=zi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?kl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:kl,toXYZ:gm,fromXYZ:vm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:gm,fromXYZ:vm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const Tt=Lx();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class Dx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ws===void 0&&(ws=Hl("canvas")),ws.width=e.width,ws.height=e.height;const o=ws.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ws}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=zi(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ix=0;class gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Ou(o[u].image)):l.push(Ou(o[u]))}else l=Ou(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;const Bu=new K;class kn extends Ys{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,r=Yr,o=Yr,l=xi,u=$r,d=ui,h=Hi,m=kn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Xa(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Rg;kn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],_=h[4],g=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,R=(S+1)/2,H=(v+1)/2,B=(_+x)/4,U=(g+w)/4,G=(T+y)/4;return b>R&&b>H?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=B/r,l=U/r):R>H?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=B/o,l=G/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=U/l,o=G/l),this.set(r,o,l,n),this}let L=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(y-T)/L,this.y=(g-w)/L,this.z=(x-_)/L,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fx extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const o={width:e,height:n,depth:r.depth},l=new kn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new gf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends Fx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Bg extends kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ox extends kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ai):ai.fromBufferAttribute(l,u),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),ll.subVectors(this.max,ba),As.subVectors(e.a,ba),Rs.subVectors(e.b,ba),Cs.subVectors(e.c,ba),dr.subVectors(Rs,As),fr.subVectors(Cs,Rs),Br.subVectors(As,Cs);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Br.y,Br.x,0];return!ku(n,As,Rs,Cs,ll)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,As,Rs,Cs,ll))?!1:(cl.crossVectors(dr,fr),n=[cl.x,cl.y,cl.z],ku(n,As,Rs,Cs,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new K,new K,new K,new K,new K,new K,new K,new K],ai=new K,ol=new Ya,As=new K,Rs=new K,Cs=new K,dr=new K,fr=new K,Br=new K,ba=new K,ll=new K,cl=new K,kr=new K;function ku(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){kr.fromArray(s,l);const d=o.x*Math.abs(kr.x)+o.y*Math.abs(kr.y)+o.z*Math.abs(kr.z),h=e.dot(kr),m=n.dot(kr),_=r.dot(kr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const Bx=new Ya,Na=new K,zu=new K;class $a{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Bx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(zu)),this.expandByPoint(Na.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Li=new K,Hu=new K,ul=new K,hr=new K,Vu=new K,dl=new K,Gu=new K;class vf{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Hu.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Hu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ul),d=hr.dot(this.direction),h=-hr.dot(ul),m=hr.lengthSq(),_=Math.abs(1-u*u);let g,x,S,T;if(_>0)if(g=u*h-d,x=u*d-h,T=l*_,g>=0)if(x>=-T)if(x<=T){const w=1/_;g*=w,x*=w,S=g*(g+u*x+2*d)+x*(u*g+x+2*h)+m}else x=l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+m;else x=-l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+m;else x<=-T?(g=Math.max(0,-(-u*l+d)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+m):x<=T?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(g=Math.max(0,-(u*l+d)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+m);else x=u>0?-l:l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Hu).addScaledVector(ul,x),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),o=Li.dot(Li)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,h;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,o,l){Vu.subVectors(n,e),dl.subVectors(r,e),Gu.crossVectors(Vu,dl);let u=this.direction.dot(Gu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;hr.subVectors(this.origin,e);const h=d*this.direction.dot(dl.crossVectors(hr,dl));if(h<0)return null;const m=d*this.direction.dot(Vu.cross(hr));if(m<0||h+m>u)return null;const _=-d*hr.dot(Gu);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,o,l,u,d,h,m,_,g,x,S,T,w,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,m,_,g,x,S,T,w,y)}set(e,n,r,o,l,u,d,h,m,_,g,x,S,T,w,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=m,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=T,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ps.setFromMatrixColumn(e,0).length(),l=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=u*_,S=u*g,T=d*_,w=d*g;n[0]=h*_,n[4]=-h*g,n[8]=m,n[1]=S+T*m,n[5]=x-w*m,n[9]=-d*h,n[2]=w-x*m,n[6]=T+S*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,T=m*_,w=m*g;n[0]=x+w*d,n[4]=T*d-S,n[8]=u*m,n[1]=u*g,n[5]=u*_,n[9]=-d,n[2]=S*d-T,n[6]=w+x*d,n[10]=u*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,T=m*_,w=m*g;n[0]=x-w*d,n[4]=-u*g,n[8]=T+S*d,n[1]=S+T*d,n[5]=u*_,n[9]=w-x*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const x=u*_,S=u*g,T=d*_,w=d*g;n[0]=h*_,n[4]=T*m-S,n[8]=x*m+w,n[1]=h*g,n[5]=w*m+x,n[9]=S*m-T,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,S=u*m,T=d*h,w=d*m;n[0]=h*_,n[4]=w-x*g,n[8]=T*g+S,n[1]=g,n[5]=u*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*g+T,n[10]=x-w*g}else if(e.order==="XZY"){const x=u*h,S=u*m,T=d*h,w=d*m;n[0]=h*_,n[4]=-g,n[8]=m*_,n[1]=x*g+w,n[5]=u*_,n[9]=S*g-T,n[2]=T*g-S,n[6]=d*_,n[10]=w*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,zx)}lookAt(e,n,r){const o=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),pr.crossVectors(r,Wn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),pr.crossVectors(r,Wn)),pr.normalize(),fl.crossVectors(Wn,pr),o[0]=pr.x,o[4]=fl.x,o[8]=Wn.x,o[1]=pr.y,o[5]=fl.y,o[9]=Wn.y,o[2]=pr.z,o[6]=fl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],_=r[1],g=r[5],x=r[9],S=r[13],T=r[2],w=r[6],y=r[10],v=r[14],L=r[3],b=r[7],R=r[11],H=r[15],B=o[0],U=o[4],G=o[8],N=o[12],E=o[1],F=o[5],se=o[9],ee=o[13],ue=o[2],he=o[6],ae=o[10],ce=o[14],V=o[3],le=o[7],re=o[11],O=o[15];return l[0]=u*B+d*E+h*ue+m*V,l[4]=u*U+d*F+h*he+m*le,l[8]=u*G+d*se+h*ae+m*re,l[12]=u*N+d*ee+h*ce+m*O,l[1]=_*B+g*E+x*ue+S*V,l[5]=_*U+g*F+x*he+S*le,l[9]=_*G+g*se+x*ae+S*re,l[13]=_*N+g*ee+x*ce+S*O,l[2]=T*B+w*E+y*ue+v*V,l[6]=T*U+w*F+y*he+v*le,l[10]=T*G+w*se+y*ae+v*re,l[14]=T*N+w*ee+y*ce+v*O,l[3]=L*B+b*E+R*ue+H*V,l[7]=L*U+b*F+R*he+H*le,l[11]=L*G+b*se+R*ae+H*re,l[15]=L*N+b*ee+R*ce+H*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],_=e[2],g=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],v=e[15];return T*(+l*h*g-o*m*g-l*d*x+r*m*x+o*d*S-r*h*S)+w*(+n*h*S-n*m*x+l*u*x-o*u*S+o*m*_-l*h*_)+y*(+n*m*g-n*d*S-l*u*g+r*u*S+l*d*_-r*m*_)+v*(-o*d*_-n*h*g+n*d*x+o*u*g-r*u*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8],g=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],v=e[15],L=g*y*m-w*x*m+w*h*S-d*y*S-g*h*v+d*x*v,b=T*x*m-_*y*m-T*h*S+u*y*S+_*h*v-u*x*v,R=_*w*m-T*g*m+T*d*S-u*w*S-_*d*v+u*g*v,H=T*g*h-_*w*h-T*d*x+u*w*x+_*d*y-u*g*y,B=n*L+r*b+o*R+l*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=L*U,e[1]=(w*x*l-g*y*l-w*o*S+r*y*S+g*o*v-r*x*v)*U,e[2]=(d*y*l-w*h*l+w*o*m-r*y*m-d*o*v+r*h*v)*U,e[3]=(g*h*l-d*x*l-g*o*m+r*x*m+d*o*S-r*h*S)*U,e[4]=b*U,e[5]=(_*y*l-T*x*l+T*o*S-n*y*S-_*o*v+n*x*v)*U,e[6]=(T*h*l-u*y*l-T*o*m+n*y*m+u*o*v-n*h*v)*U,e[7]=(u*x*l-_*h*l+_*o*m-n*x*m-u*o*S+n*h*S)*U,e[8]=R*U,e[9]=(T*g*l-_*w*l-T*r*S+n*w*S+_*r*v-n*g*v)*U,e[10]=(u*w*l-T*d*l+T*r*m-n*w*m-u*r*v+n*d*v)*U,e[11]=(_*d*l-u*g*l-_*r*m+n*g*m+u*r*S-n*d*S)*U,e[12]=H*U,e[13]=(_*w*o-T*g*o+T*r*x-n*w*x-_*r*y+n*g*y)*U,e[14]=(T*d*o-u*w*o-T*r*h+n*w*h+u*r*y-n*d*y)*U,e[15]=(u*g*o-_*d*o+_*r*h-n*g*h-u*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,_=l*d;return this.set(m*u+r,m*d-o*h,m*h+o*d,0,m*d+o*h,_*d+r,_*h-o*u,0,m*h-o*d,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,m=l+l,_=u+u,g=d+d,x=l*m,S=l*_,T=l*g,w=u*_,y=u*g,v=d*g,L=h*m,b=h*_,R=h*g,H=r.x,B=r.y,U=r.z;return o[0]=(1-(w+v))*H,o[1]=(S+R)*H,o[2]=(T-b)*H,o[3]=0,o[4]=(S-R)*B,o[5]=(1-(x+v))*B,o[6]=(y+L)*B,o[7]=0,o[8]=(T+b)*U,o[9]=(y-L)*U,o[10]=(1-(x+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=Ps.set(o[0],o[1],o[2]).length();const u=Ps.set(o[4],o[5],o[6]).length(),d=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const m=1/l,_=1/u,g=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=g,oi.elements[9]*=g,oi.elements[10]*=g,n.setFromRotationMatrix(oi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,o,l,u,d=ki){const h=this.elements,m=2*l/(n-e),_=2*l/(r-o),g=(n+e)/(n-e),x=(r+o)/(r-o);let S,T;if(d===ki)S=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(d===zl)S=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=ki){const h=this.elements,m=1/(n-e),_=1/(r-o),g=1/(u-l),x=(n+e)*m,S=(r+o)*_;let T,w;if(d===ki)T=(u+l)*g,w=-2*g;else if(d===zl)T=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new K,oi=new Wt,kx=new K(0,0,0),zx=new K(1,1,1),pr=new K,fl=new K,Wn=new K,_m=new Wt,xm=new qa;class Vi{constructor(e=0,n=0,r=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],_=o[9],g=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hx=0;const ym=new K,bs=new qa,Di=new Wt,hl=new K,La=new K,Vx=new K,Gx=new qa,Sm=new K(1,0,0),Mm=new K(0,1,0),Em=new K(0,0,1),Tm={type:"added"},Wx={type:"removed"},Ns={type:"childadded",child:null},Wu={type:"childremoved",child:null};class Cn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new K,n=new Vi,r=new qa,o=new K(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new dt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(La,hl,this.up):Di.lookAt(hl,La,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),bs.setFromRotationMatrix(Di),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wx),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const g=h[m];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),g=u(e.shapes),x=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Cn.DEFAULT_UP=new K(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new K,Ii=new K,ju=new K,Ui=new K,Ls=new K,Ds=new K,wm=new K,Xu=new K,qu=new K,Yu=new K,$u=new qt,Ku=new qt,Zu=new qt;class ci{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),li.subVectors(e,n),o.cross(li);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){li.subVectors(o,n),Ii.subVectors(r,n),ju.subVectors(e,n);const u=li.dot(li),d=li.dot(Ii),h=li.dot(ju),m=Ii.dot(Ii),_=Ii.dot(ju),g=u*m-d*d;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(m*h-d*_)*x,T=(u*_-d*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,o,l,u,d,h){return this.getBarycoord(e,n,r,o,Ui)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ui.x),h.addScaledVector(u,Ui.y),h.addScaledVector(d,Ui.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return $u.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector($u,l.x),u.addScaledVector(Ku,l.y),u.addScaledVector(Zu,l.z),u}static isFrontFacing(e,n,r,o){return li.subVectors(r,n),Ii.subVectors(e,n),li.cross(Ii).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Ls.subVectors(o,r),Ds.subVectors(l,r),Xu.subVectors(e,r);const h=Ls.dot(Xu),m=Ds.dot(Xu);if(h<=0&&m<=0)return n.copy(r);qu.subVectors(e,o);const _=Ls.dot(qu),g=Ds.dot(qu);if(_>=0&&g<=_)return n.copy(o);const x=h*g-_*m;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(Ls,u);Yu.subVectors(e,l);const S=Ls.dot(Yu),T=Ds.dot(Yu);if(T>=0&&S<=T)return n.copy(l);const w=S*m-h*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ds,d);const y=_*T-S*g;if(y<=0&&g-_>=0&&S-T>=0)return wm.subVectors(l,o),d=(g-_)/(g-_+(S-T)),n.copy(o).addScaledVector(wm,d);const v=1/(y+w+x);return u=w*v,d=x*v,n.copy(r).addScaledVector(Ls,u).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=Rx(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Qu(u,l,e+1/3),this.g=Qu(u,l,e),this.b=Qu(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=Jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=zg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Tt.workingToColorSpace(xn.copy(this),e),Math.round(xt(xn.r*255,0,255))*65536+Math.round(xt(xn.g*255,0,255))*256+Math.round(xt(xn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(xn.copy(this),n);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const _=(d+u)/2;if(d===u)h=0,m=0;else{const g=u-d;switch(m=_<=.5?g/(u+d):g/(2-u-d),u){case r:h=(o-l)/g+(o<l?6:0);break;case o:h=(l-r)/g+2;break;case l:h=(r-o)/g+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Jn){Tt.workingToColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,o=xn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(pl);const r=Iu(mr.h,pl.h,n),o=Iu(mr.s,pl.s,n),l=Iu(mr.l,pl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new At;At.NAMES=zg;let jx=0;class $s extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=ks,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=vd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vr extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new K,ml=new Rt;let Xx=0;class Rn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=fm,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class Hg extends Rn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vg extends Rn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class cn extends Rn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let qx=0;const Qn=new Wt,Ju=new Cn,Is=new K,jn=new Ya,Da=new Ya,ln=new K;class yn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?Vg:Hg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,r){return Qn.makeTranslation(e,n,r),this.applyMatrix4(Qn),this}scale(e,n,r){return Qn.makeScale(e,n,r),this.applyMatrix4(Qn),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Da.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(jn.min,Da.min),jn.expandByPoint(ln),ln.addVectors(jn.max,Da.max),jn.expandByPoint(ln)):(jn.expandByPoint(Da.min),jn.expandByPoint(Da.max))}jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)ln.fromBufferAttribute(d,m),h&&(Is.fromBufferAttribute(e,m),ln.add(Is)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let G=0;G<r.count;G++)d[G]=new K,h[G]=new K;const m=new K,_=new K,g=new K,x=new Rt,S=new Rt,T=new Rt,w=new K,y=new K;function v(G,N,E){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,N),g.fromBufferAttribute(r,E),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,N),T.fromBufferAttribute(l,E),_.sub(m),g.sub(m),S.sub(x),T.sub(x);const F=1/(S.x*T.y-T.x*S.y);isFinite(F)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(F),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(F),d[G].add(w),d[N].add(w),d[E].add(w),h[G].add(y),h[N].add(y),h[E].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,N=L.length;G<N;++G){const E=L[G],F=E.start,se=E.count;for(let ee=F,ue=F+se;ee<ue;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const b=new K,R=new K,H=new K,B=new K;function U(G){H.fromBufferAttribute(o,G),B.copy(H);const N=d[G];b.copy(N),b.sub(H.multiplyScalar(H.dot(N))).normalize(),R.crossVectors(B,N);const F=R.dot(h[G])<0?-1:1;u.setXYZW(G,b.x,b.y,b.z,F)}for(let G=0,N=L.length;G<N;++G){const E=L[G],F=E.start,se=E.count;for(let ee=F,ue=F+se;ee<ue;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new K,l=new K,u=new K,d=new K,h=new K,m=new K,_=new K,g=new K;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,g=d.normalized,x=new m.constructor(h.length*_);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){d.isInterleavedBufferAttribute?S=h[w]*d.data.stride+d.offset:S=h[w]*_;for(let v=0;v<_;v++)x[T++]=m[S++]}return new Rn(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let _=0,g=m.length;_<g;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];_.push(S.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],g=l[m];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Am=new Wt,zr=new vf,gl=new $a,Rm=new K,vl=new K,_l=new K,xl=new K,ed=new K,yl=new K,Cm=new K,Sl=new K;class An extends Cn{constructor(e=new yn,n=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){yl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=d[h],g=l[h];_!==0&&(ed.fromBufferAttribute(g,e),u?yl.addScaledVector(ed,_):yl.addScaledVector(ed.sub(n),_))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(l),zr.copy(e.ray).recast(e.near),!(gl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(gl,Rm)===null||zr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),zr.copy(e.ray).applyMatrix4(Am),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,w=x.length;T<w;T++){const y=x[T],v=u[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=L,H=b;R<H;R+=3){const B=d.getX(R),U=d.getX(R+1),G=d.getX(R+2);o=Ml(this,v,e,r,m,_,g,B,U,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=T,v=w;y<v;y+=3){const L=d.getX(y),b=d.getX(y+1),R=d.getX(y+2);o=Ml(this,u,e,r,m,_,g,L,b,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,w=x.length;T<w;T++){const y=x[T],v=u[y.materialIndex],L=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=L,H=b;R<H;R+=3){const B=R,U=R+1,G=R+2;o=Ml(this,v,e,r,m,_,g,B,U,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,v=w;y<v;y+=3){const L=y,b=y+1,R=y+2;o=Ml(this,u,e,r,m,_,g,L,b,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Yx(s,e,n,r,o,l,u,d){let h;if(e.side===Bn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Mr,d),h===null)return null;Sl.copy(d),Sl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Sl);return m<n.near||m>n.far?null:{distance:m,point:Sl.clone(),object:s}}function Ml(s,e,n,r,o,l,u,d,h,m){s.getVertexPosition(d,vl),s.getVertexPosition(h,_l),s.getVertexPosition(m,xl);const _=Yx(s,e,n,r,vl,_l,xl,Cm);if(_){const g=new K;ci.getBarycoord(Cm,vl,_l,xl,g),o&&(_.uv=ci.getInterpolatedAttribute(o,d,h,m,g,new Rt)),l&&(_.uv1=ci.getInterpolatedAttribute(l,d,h,m,g,new Rt)),u&&(_.normal=ci.getInterpolatedAttribute(u,d,h,m,g,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new K,materialIndex:0};ci.getNormal(vl,_l,xl,x.normal),_.face=x,_.barycoord=g}return _}class Ka extends yn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],_=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,u,l,0),T("z","y","x",1,-1,r,n,-e,u,l,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,l,4),T("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(g,2));function T(w,y,v,L,b,R,H,B,U,G,N){const E=R/U,F=H/G,se=R/2,ee=H/2,ue=B/2,he=U+1,ae=G+1;let ce=0,V=0;const le=new K;for(let re=0;re<ae;re++){const O=re*F-ee;for(let ie=0;ie<he;ie++){const Le=ie*E-se;le[w]=Le*L,le[y]=O*b,le[v]=ue,m.push(le.x,le.y,le.z),le[w]=0,le[y]=0,le[v]=B>0?1:-1,_.push(le.x,le.y,le.z),g.push(ie/U),g.push(1-re/G),ce+=1}}for(let re=0;re<G;re++)for(let O=0;O<U;O++){const ie=x+O+he*re,Le=x+O+he*(re+1),J=x+(O+1)+he*(re+1),fe=x+(O+1)+he*re;h.push(ie,Le,fe),h.push(Le,J,fe),V+=6}d.addGroup(S,V,N),S+=V,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const o in r)e[o]=r[o]}return e}function $x(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Gg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Kx={clone:Xs,merge:wn};var Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=Qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Wg extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new K,Pm=new Rt,bm=new Rt;class On extends Wg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,bm),n.subVectors(bm,Pm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Du*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class Jx extends Cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new On(Us,Fs,e,n);o.layers=this.layers,this.add(o);const l=new On(Us,Fs,e,n);l.layers=this.layers,this.add(l);const u=new On(Us,Fs,e,n);u.layers=this.layers,this.add(u);const d=new On(Us,Fs,e,n);d.layers=this.layers,this.add(d);const h=new On(Us,Fs,e,n);h.layers=this.layers,this.add(h);const m=new On(Us,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,h]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,_),e.setRenderTarget(g,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class jg extends kn{constructor(e=[],n=Gs,r,o,l,u,d,h,m,_){super(e,n,r,o,l,u,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ka(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:yr});l.uniforms.tEquirect.value=n;const u=new An(o,l),d=n.minFilter;return n.minFilter===$r&&(n.minFilter=xi),new Jx(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}class El extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),v=this._getHandJoint(m,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class _f{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=n}clone(){return new _f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nd extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const id=new K,ny=new K,iy=new dt;class Wr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=id.subVectors(r,n).cross(ny.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(id),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||iy.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new $a,ry=new Rt(.5,.5),Tl=new K;class Xg{constructor(e=new Wr,n=new Wr,r=new Wr,o=new Wr,l=new Wr,u=new Wr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],m=o[4],_=o[5],g=o[6],x=o[7],S=o[8],T=o[9],w=o[10],y=o[11],v=o[12],L=o[13],b=o[14],R=o[15];if(r[0].setComponents(h-l,x-m,y-S,R-v).normalize(),r[1].setComponents(h+l,x+m,y+S,R+v).normalize(),r[2].setComponents(h+u,x+_,y+T,R+L).normalize(),r[3].setComponents(h-u,x-_,y-T,R-L).normalize(),r[4].setComponents(h-d,x-g,y-w,R-b).normalize(),n===ki)r[5].setComponents(h+d,x+g,y+w,R+b).normalize();else if(n===zl)r[5].setComponents(d,g,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=ry.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qg extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vl=new K,Gl=new K,Nm=new Wt,Ia=new vf,wl=new $a,rd=new K,Lm=new K;class sy extends Cn{constructor(e=new yn,n=new qg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,l=n.count;o<l;o++)Vl.fromBufferAttribute(n,o-1),Gl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new cn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(o),wl.radius+=l,e.ray.intersectsSphere(wl)===!1)return;Nm.copy(o).invert(),Ia.copy(e.ray).applyMatrix4(Nm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let w=S,y=T-1;w<y;w+=m){const v=_.getX(w),L=_.getX(w+1),b=Al(this,e,Ia,h,v,L,w);b&&n.push(b)}if(this.isLineLoop){const w=_.getX(T-1),y=_.getX(S),v=Al(this,e,Ia,h,w,y,T-1);v&&n.push(v)}}else{const S=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let w=S,y=T-1;w<y;w+=m){const v=Al(this,e,Ia,h,w,w+1,w);v&&n.push(v)}if(this.isLineLoop){const w=Al(this,e,Ia,h,T-1,S,T-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Al(s,e,n,r,o,l,u){const d=s.geometry.attributes.position;if(Vl.fromBufferAttribute(d,o),Gl.fromBufferAttribute(d,l),n.distanceSqToSegment(Vl,Gl,rd,Lm)>r)return;rd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(rd);if(!(m<e.near||m>e.far))return{distance:m,point:Lm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Dm=new K,Im=new K;class ay extends sy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,l=n.count;o<l;o+=2)Dm.fromBufferAttribute(n,o),Im.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Dm.distanceTo(Im);e.setAttribute("lineDistance",new cn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ol extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Wt,nf=new vf,Rl=new $a,Cl=new K;class sd extends Cn{constructor(e=new yn,n=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(o),Rl.radius+=l,e.ray.intersectsSphere(Rl)===!1)return;Um.copy(o).invert(),nf.copy(e.ray).applyMatrix4(Um);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,g=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let T=x,w=S;T<w;T++){const y=m.getX(T);Cl.fromBufferAttribute(g,y),Fm(Cl,y,h,o,e,n,this)}}else{const x=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let T=x,w=S;T<w;T++)Cl.fromBufferAttribute(g,T),Fm(Cl,T,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Fm(s,e,n,r,o,l,u){const d=nf.distanceSqToPoint(s);if(d<n){const h=new K;nf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Yg extends kn{constructor(e,n,r=Zr,o,l,u,d=di,h=di,m,_=Ha,g=1){if(_!==Ha&&_!==Va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,o,l,u,d,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xf extends yn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];d(o),m(r),_(),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(l.slice(),3)),this.setAttribute("uv",new cn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const b=new K,R=new K,H=new K;for(let B=0;B<n.length;B+=3)S(n[B+0],b),S(n[B+1],R),S(n[B+2],H),h(b,R,H,L)}function h(L,b,R,H){const B=H+1,U=[];for(let G=0;G<=B;G++){U[G]=[];const N=L.clone().lerp(R,G/B),E=b.clone().lerp(R,G/B),F=B-G;for(let se=0;se<=F;se++)se===0&&G===B?U[G][se]=N:U[G][se]=N.clone().lerp(E,se/F)}for(let G=0;G<B;G++)for(let N=0;N<2*(B-G)-1;N++){const E=Math.floor(N/2);N%2===0?(x(U[G][E+1]),x(U[G+1][E]),x(U[G][E])):(x(U[G][E+1]),x(U[G+1][E+1]),x(U[G+1][E]))}}function m(L){const b=new K;for(let R=0;R<l.length;R+=3)b.x=l[R+0],b.y=l[R+1],b.z=l[R+2],b.normalize().multiplyScalar(L),l[R+0]=b.x,l[R+1]=b.y,l[R+2]=b.z}function _(){const L=new K;for(let b=0;b<l.length;b+=3){L.x=l[b+0],L.y=l[b+1],L.z=l[b+2];const R=y(L)/2/Math.PI+.5,H=v(L)/Math.PI+.5;u.push(R,1-H)}T(),g()}function g(){for(let L=0;L<u.length;L+=6){const b=u[L+0],R=u[L+2],H=u[L+4],B=Math.max(b,R,H),U=Math.min(b,R,H);B>.9&&U<.1&&(b<.2&&(u[L+0]+=1),R<.2&&(u[L+2]+=1),H<.2&&(u[L+4]+=1))}}function x(L){l.push(L.x,L.y,L.z)}function S(L,b){const R=L*3;b.x=e[R+0],b.y=e[R+1],b.z=e[R+2]}function T(){const L=new K,b=new K,R=new K,H=new K,B=new Rt,U=new Rt,G=new Rt;for(let N=0,E=0;N<l.length;N+=9,E+=6){L.set(l[N+0],l[N+1],l[N+2]),b.set(l[N+3],l[N+4],l[N+5]),R.set(l[N+6],l[N+7],l[N+8]),B.set(u[E+0],u[E+1]),U.set(u[E+2],u[E+3]),G.set(u[E+4],u[E+5]),H.copy(L).add(b).add(R).divideScalar(3);const F=y(H);w(B,E+0,L,F),w(U,E+2,b,F),w(G,E+4,R,F)}}function w(L,b,R,H){H<0&&L.x===1&&(u[b]=L.x-1),R.x===0&&R.z===0&&(u[b]=H/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.vertices,e.indices,e.radius,e.details)}}class yf extends xf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new yf(e.radius,e.detail)}}class ql extends yn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(o),m=d+1,_=h+1,g=e/d,x=n/h,S=[],T=[],w=[],y=[];for(let v=0;v<_;v++){const L=v*x-u;for(let b=0;b<m;b++){const R=b*g-l;T.push(R,-L,0),w.push(0,0,1),y.push(b/d),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<d;L++){const b=L+m*v,R=L+m*(v+1),H=L+1+m*(v+1),B=L+1+m*v;S.push(b,R,B),S.push(R,H,B)}this.setIndex(S),this.setAttribute("position",new cn(T,3)),this.setAttribute("normal",new cn(w,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wl extends yn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let m=0;const _=[],g=new K,x=new K,S=[],T=[],w=[],y=[];for(let v=0;v<=r;v++){const L=[],b=v/r;let R=0;v===0&&u===0?R=.5/n:v===r&&h===Math.PI&&(R=-.5/n);for(let H=0;H<=n;H++){const B=H/n;g.x=-e*Math.cos(o+B*l)*Math.sin(u+b*d),g.y=e*Math.cos(u+b*d),g.z=e*Math.sin(o+B*l)*Math.sin(u+b*d),T.push(g.x,g.y,g.z),x.copy(g).normalize(),w.push(x.x,x.y,x.z),y.push(B+R,1-b),L.push(m++)}_.push(L)}for(let v=0;v<r;v++)for(let L=0;L<n;L++){const b=_[v][L+1],R=_[v][L],H=_[v+1][L],B=_[v+1][L+1];(v!==0||u>0)&&S.push(b,R,B),(v!==r-1||h<Math.PI)&&S.push(R,H,B)}this.setIndex(S),this.setAttribute("position",new cn(T,3)),this.setAttribute("normal",new cn(w,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fa extends yn{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],h=[],m=[],_=new K,g=new K,x=new K;for(let S=0;S<=r;S++)for(let T=0;T<=o;T++){const w=T/o*l,y=S/r*Math.PI*2;g.x=(e+n*Math.cos(y))*Math.cos(w),g.y=(e+n*Math.cos(y))*Math.sin(w),g.z=n*Math.sin(y),d.push(g.x,g.y,g.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),x.subVectors(g,_).normalize(),h.push(x.x,x.y,x.z),m.push(T/o),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=o;T++){const w=(o+1)*S+T-1,y=(o+1)*(S-1)+T-1,v=(o+1)*(S-1)+T,L=(o+1)*S+T;u.push(w,y,L),u.push(y,v,L)}this.setIndex(u),this.setAttribute("position",new cn(d,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oy extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cy extends Wg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uy extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Om(s,e,n,r){const o=dy(r);switch(n){case Ng:return s*e;case Dg:return s*e/o.components*o.byteLength;case hf:return s*e/o.components*o.byteLength;case Ig:return s*e*2/o.components*o.byteLength;case pf:return s*e*2/o.components*o.byteLength;case Lg:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case mf:return s*e*4/o.components*o.byteLength;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ld:return Math.max(s,16)*Math.max(e,8)/4;case Pd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Dd:case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Kd:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ug:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jd:case ef:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dy(s){switch(s){case Hi:case Cg:return{byteLength:1,components:1};case ka:case Pg:case ja:return{byteLength:2,components:1};case df:case ff:return{byteLength:2,components:4};case Zr:case uf:case Bi:return{byteLength:4,components:1};case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);function $g(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function fy(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,g=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,h,m){const _=h.array,g=h.updateRanges;if(s.bindBuffer(m,d),g.length===0)s.bufferSubData(m,0,_);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],w=g[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,g[x]=w)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const w=g[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
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
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
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
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
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
#endif`,dS=`struct PhysicalMaterial {
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
}`,fS=`
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
#endif`,hS=`#if defined( RE_IndirectDiffuse )
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MS=`#if defined( USE_POINTS_UV )
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
#endif`,ES=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,US=`#ifdef USE_NORMALMAP
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
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZS=`float getShadowMask() {
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
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JS=`#ifdef USE_SKINNING
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
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
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
}`,xM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,NM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,UM=`#define PHONG
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
}`,FM=`#define STANDARD
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
}`,OM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,kM=`#define TOON
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
}`,zM=`uniform float size;
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
}`,HM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,WM=`uniform float rotation;
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
}`,jM=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:vy,alphatest_pars_fragment:_y,aomap_fragment:xy,aomap_pars_fragment:yy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:Ey,beginnormal_vertex:Ty,bsdfs:wy,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:by,clipping_planes_vertex:Ny,color_fragment:Ly,color_pars_fragment:Dy,color_pars_vertex:Iy,color_vertex:Uy,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:ky,displacementmap_vertex:zy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Vy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:jy,envmap_common_pars_fragment:Xy,envmap_pars_fragment:qy,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:sS,envmap_vertex:$y,fog_vertex:Ky,fog_pars_vertex:Zy,fog_fragment:Qy,fog_pars_fragment:Jy,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:aS,lights_toon_pars_fragment:oS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:uS,lights_physical_pars_fragment:dS,lights_fragment_begin:fS,lights_fragment_maps:hS,lights_fragment_end:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:_S,map_fragment:xS,map_pars_fragment:yS,map_particle_fragment:SS,map_particle_pars_fragment:MS,metalnessmap_fragment:ES,metalnessmap_pars_fragment:TS,morphinstance_vertex:wS,morphcolor_vertex:AS,morphnormal_vertex:RS,morphtarget_pars_vertex:CS,morphtarget_vertex:PS,normal_fragment_begin:bS,normal_fragment_maps:NS,normal_pars_fragment:LS,normal_pars_vertex:DS,normal_vertex:IS,normalmap_pars_fragment:US,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:OS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:kS,opaque_fragment:zS,packing:HS,premultiplied_alpha_fragment:VS,project_vertex:GS,dithering_fragment:WS,dithering_pars_fragment:jS,roughnessmap_fragment:XS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:$S,shadowmap_vertex:KS,shadowmask_pars_fragment:ZS,skinbase_vertex:QS,skinning_pars_vertex:JS,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:aM,transmission_pars_fragment:oM,uv_pars_fragment:lM,uv_pars_vertex:cM,uv_vertex:uM,worldpos_vertex:dM,background_vert:fM,background_frag:hM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:vM,depth_vert:_M,depth_frag:xM,distanceRGBA_vert:yM,distanceRGBA_frag:SM,equirect_vert:MM,equirect_frag:EM,linedashed_vert:TM,linedashed_frag:wM,meshbasic_vert:AM,meshbasic_frag:RM,meshlambert_vert:CM,meshlambert_frag:PM,meshmatcap_vert:bM,meshmatcap_frag:NM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:IM,meshphong_frag:UM,meshphysical_vert:FM,meshphysical_frag:OM,meshtoon_vert:BM,meshtoon_frag:kM,points_vert:zM,points_frag:HM,shadow_vert:VM,shadow_frag:GM,sprite_vert:WM,sprite_frag:jM},Ne={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},_i={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};_i.physical={uniforms:wn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pl={r:0,b:0,g:0},Vr=new Vi,XM=new Wt;function qM(s,e,n,r,o,l,u){const d=new At(0);let h=l===!0?0:1,m,_,g=null,x=0,S=null;function T(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?n:e).get(R)),R}function w(b){let R=!1;const H=T(b);H===null?v(d,h):H&&H.isColor&&(v(H,1),R=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,R){const H=T(R);H&&(H.isCubeTexture||H.mapping===Xl)?(_===void 0&&(_=new An(new Ka(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Xs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),Vr.copy(R.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Vr)),_.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Lt,(g!==H||x!==H.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=H,x=H.version,S=s.toneMapping),_.layers.enableAll(),b.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new An(new ql(2,2),new Er({name:"BackgroundMaterial",uniforms:Xs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Lt,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=H,x=H.version,S=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function v(b,R){b.getRGB(Pl,Gg(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,R,u)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(b,R=1){d.set(b),h=R,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,v(d,h)},render:w,addToRenderList:y,dispose:L}}function YM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function d(E,F,se,ee,ue){let he=!1;const ae=g(ee,se,F);l!==ae&&(l=ae,m(l.object)),he=S(E,ee,se,ue),he&&T(E,ee,se,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(E,F,se,ee),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function _(E){return s.deleteVertexArray(E)}function g(E,F,se){const ee=se.wireframe===!0;let ue=r[E.id];ue===void 0&&(ue={},r[E.id]=ue);let he=ue[F.id];he===void 0&&(he={},ue[F.id]=he);let ae=he[ee];return ae===void 0&&(ae=x(h()),he[ee]=ae),ae}function x(E){const F=[],se=[],ee=[];for(let ue=0;ue<n;ue++)F[ue]=0,se[ue]=0,ee[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:se,attributeDivisors:ee,object:E,attributes:{},index:null}}function S(E,F,se,ee){const ue=l.attributes,he=F.attributes;let ae=0;const ce=se.getAttributes();for(const V in ce)if(ce[V].location>=0){const re=ue[V];let O=he[V];if(O===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(O=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(O=E.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;ae++}return l.attributesNum!==ae||l.index!==ee}function T(E,F,se,ee){const ue={},he=F.attributes;let ae=0;const ce=se.getAttributes();for(const V in ce)if(ce[V].location>=0){let re=he[V];re===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),ue[V]=O,ae++}l.attributes=ue,l.attributesNum=ae,l.index=ee}function w(){const E=l.newAttributes;for(let F=0,se=E.length;F<se;F++)E[F]=0}function y(E){v(E,0)}function v(E,F){const se=l.newAttributes,ee=l.enabledAttributes,ue=l.attributeDivisors;se[E]=1,ee[E]===0&&(s.enableVertexAttribArray(E),ee[E]=1),ue[E]!==F&&(s.vertexAttribDivisor(E,F),ue[E]=F)}function L(){const E=l.newAttributes,F=l.enabledAttributes;for(let se=0,ee=F.length;se<ee;se++)F[se]!==E[se]&&(s.disableVertexAttribArray(se),F[se]=0)}function b(E,F,se,ee,ue,he,ae){ae===!0?s.vertexAttribIPointer(E,F,se,ue,he):s.vertexAttribPointer(E,F,se,ee,ue,he)}function R(E,F,se,ee){w();const ue=ee.attributes,he=se.getAttributes(),ae=F.defaultAttributeValues;for(const ce in he){const V=he[ce];if(V.location>=0){let le=ue[ce];if(le===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const re=le.normalized,O=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Le=ie.buffer,J=ie.type,fe=ie.bytesPerElement,Te=J===s.INT||J===s.UNSIGNED_INT||le.gpuType===uf;if(le.isInterleavedBufferAttribute){const ye=le.data,Ae=ye.stride,Ue=le.offset;if(ye.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)v(V.location+He,ye.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let He=0;He<V.locationSize;He++)y(V.location+He);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let He=0;He<V.locationSize;He++)b(V.location+He,O/V.locationSize,J,re,Ae*fe,(Ue+O/V.locationSize*He)*fe,Te)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)v(V.location+ye,le.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<V.locationSize;ye++)y(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ye=0;ye<V.locationSize;ye++)b(V.location+ye,O/V.locationSize,J,re,O*fe,O/V.locationSize*ye*fe,Te)}}else if(ae!==void 0){const re=ae[ce];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}L()}function H(){G();for(const E in r){const F=r[E];for(const se in F){const ee=F[se];for(const ue in ee)_(ee[ue].object),delete ee[ue];delete F[se]}delete r[E]}}function B(E){if(r[E.id]===void 0)return;const F=r[E.id];for(const se in F){const ee=F[se];for(const ue in ee)_(ee[ue].object),delete ee[ue];delete F[se]}delete r[E.id]}function U(E){for(const F in r){const se=r[F];if(se[E.id]===void 0)continue;const ee=se[E.id];for(const ue in ee)_(ee[ue].object),delete ee[ue];delete se[E.id]}}function G(){N(),u=!0,l!==o&&(l=o,m(l.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:G,resetDefaultState:N,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function $M(s,e,n){let r;function o(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,g){g!==0&&(s.drawArraysInstanced(r,m,_,g),n.update(_,r,g))}function d(m,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];n.update(S,r,1)}function h(m,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*x[w];n.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function KM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==ui&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const G=U===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Hi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!G)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:H,maxSamples:B}}function ZM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Wr,d=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||o;return o=x,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){n=_(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!o||T===null||T.length===0||l&&!y)l?_(null):m();else{const L=l?0:r,b=L*4;let R=v.clippingState||null;h.value=R,R=_(T,x,b,S);for(let H=0;H!==b;++H)R[H]=n[H];v.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,S,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const v=S+w*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,R=S;b!==w;++b,R+=4)u.copy(g[b]).applyMatrix4(L,d),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function QM(s){let e=new WeakMap;function n(u,d){return d===wd?u.mapping=Gs:d===Ad&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===wd||d===Ad)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new ey(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Bs=4,Bm=[.125,.215,.35,.446,.526,.582],qr=20,ad=new cy,km=new At;let od=null,ld=0,cd=0,ud=!1;const jr=(1+Math.sqrt(5))/2,Os=1/jr,zm=[new K(-jr,Os,0),new K(jr,Os,0),new K(-Os,0,jr),new K(Os,0,jr),new K(0,jr,-Os),new K(0,jr,Os),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],JM=new K;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:d=JM}=l;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:ja,format:ui,colorSpace:js,depthBuffer:!1},o=Vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eE(l)),this._blurMaterial=tE(l,e,n)}return o}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,ad)}_sceneToCubeUV(e,n,r,o,l){const h=new On(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(km),g.toneMapping=Sr,g.autoClear=!1;const T=new vr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),w=new An(new Ka,T);let y=!1;const v=e.background;v?v.isColor&&(T.color.copy(v),e.background=null,y=!0):(T.color.copy(km),y=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[L],l.y,l.z)):b===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[L]));const R=this._cubeSize;bl(o,b*R,L>2?R:0,R,R),g.setRenderTarget(o),y&&g.render(w,h),g.render(e,h)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Gs||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new An(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;bl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,ad)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=zm[(o-l-1)%zm.length];this._blur(e,l-1,l,u,d)}n.autoClear=r}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new An(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qr-1),w=l/T,y=isFinite(l)?1+Math.floor(_*w):qr;y>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const v=[];let L=0;for(let U=0;U<qr;++U){const G=U/w,N=Math.exp(-G*G/2);v.push(N),U===0?L+=N:U<y&&(L+=2*N)}for(let U=0;U<v.length;U++)v[U]=v[U]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:b}=this;x.dTheta.value=T,x.mipInt.value=b-r;const R=this._sizeLods[o],H=3*R*(o>b-Bs?o-b+Bs:0),B=4*(this._cubeSize-R);bl(n,H,B,3*R,2*R),h.setRenderTarget(n),h.render(g,ad)}}function eE(s){const e=[],n=[],r=[];let o=s;const l=s-Bs+1+Bm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>s-Bs?h=Bm[u-s+Bs-1]:u===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,g=1+m,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,w=3,y=2,v=1,L=new Float32Array(w*T*S),b=new Float32Array(y*T*S),R=new Float32Array(v*T*S);for(let B=0;B<S;B++){const U=B%3*2/3-1,G=B>2?0:-1,N=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];L.set(N,w*T*B),b.set(x,y*T*B);const E=[B,B,B,B,B,B];R.set(E,v*T*B)}const H=new yn;H.setAttribute("position",new Rn(L,w)),H.setAttribute("uv",new Rn(b,y)),H.setAttribute("faceIndex",new Rn(R,v)),e.push(H),o>Bs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Vm(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function tE(s,e,n){const r=new Float32Array(qr),o=new K(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Gm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Wm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Sf(){return`

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
	`}function nE(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===wd||h===Ad,_=h===Gs||h===Ws;if(m||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Hm(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new Hm(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function o(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function iE(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&zs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function rE(s,e,n,r){const o={},l=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function h(g){const x=g.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(g){const x=[],S=g.index,T=g.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let b=0,R=L.length;b<R;b+=3){const H=L[b+0],B=L[b+1],U=L[b+2];x.push(H,B,B,U,U,H)}}else if(T!==void 0){const L=T.array;w=T.version;for(let b=0,R=L.length/3-1;b<R;b+=3){const H=b+0,B=b+1,U=b+2;x.push(H,B,B,U,U,H)}}else return;const y=new(Og(x)?Vg:Hg)(x,1);y.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return l.get(g)}return{get:d,update:h,getWireframeAttribute:_}}function sE(s,e,n){let r;function o(x){r=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*u),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*u,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let v=0;v<T;v++)y+=S[v];n.update(y,r,1)}function g(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/u,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,w,0,T);let v=0;for(let L=0;L<T;L++)v+=S[L]*w[L];n.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function aE(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function oE(s,e,n){const r=new WeakMap,o=new qt;function l(u,d,h){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let E=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let H=d.attributes.position.count*R,B=1;H>e.maxTextureSize&&(B=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const U=new Float32Array(H*B*4*g),G=new Bg(U,H,B,g);G.type=Bi,G.needsUpdate=!0;const N=R*4;for(let F=0;F<g;F++){const se=v[F],ee=L[F],ue=b[F],he=H*B*4*F;for(let ae=0;ae<se.count;ae++){const ce=ae*N;T===!0&&(o.fromBufferAttribute(se,ae),U[he+ce+0]=o.x,U[he+ce+1]=o.y,U[he+ce+2]=o.z,U[he+ce+3]=0),w===!0&&(o.fromBufferAttribute(ee,ae),U[he+ce+4]=o.x,U[he+ce+5]=o.y,U[he+ce+6]=o.z,U[he+ce+7]=0),y===!0&&(o.fromBufferAttribute(ue,ae),U[he+ce+8]=o.x,U[he+ce+9]=o.y,U[he+ce+10]=o.z,U[he+ce+11]=ue.itemSize===4?o.w:1)}}x={count:g,texture:G,size:new Rt(H,B)},r.set(d,x),d.addEventListener("dispose",E)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const w=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function lE(s,e,n,r){let o=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,g=e.get(h,_);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return g}function u(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const Kg=new kn,jm=new Yg(1,1),Zg=new Bg,Qg=new Ox,Jg=new jg,Xm=[],qm=[],Ym=new Float32Array(16),$m=new Float32Array(9),Km=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Xm[o];if(l===void 0&&(l=new Float32Array(o),Xm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Yl(s,e){let n=qm[e];n===void 0&&(n=new Int32Array(e),qm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function cE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function uE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function dE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function fE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function hE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Km.set(r),s.uniformMatrix2fv(this.addr,!1,Km),en(n,r)}}function pE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;$m.set(r),s.uniformMatrix3fv(this.addr,!1,$m),en(n,r)}}function mE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Ym.set(r),s.uniformMatrix4fv(this.addr,!1,Ym),en(n,r)}}function gE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function vE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function _E(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function xE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function yE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function SE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function ME(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function EE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function TE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(jm.compareFunction=Fg,l=jm):l=Kg,n.setTexture2D(e||l,o)}function wE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Qg,o)}function AE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Jg,o)}function RE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Zg,o)}function CE(s){switch(s){case 5126:return cE;case 35664:return uE;case 35665:return dE;case 35666:return fE;case 35674:return hE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return SE;case 36295:return ME;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return RE}}function PE(s,e){s.uniform1fv(this.addr,e)}function bE(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function NE(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function LE(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function DE(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function IE(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function UE(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function FE(s,e){s.uniform1iv(this.addr,e)}function OE(s,e){s.uniform2iv(this.addr,e)}function BE(s,e){s.uniform3iv(this.addr,e)}function kE(s,e){s.uniform4iv(this.addr,e)}function zE(s,e){s.uniform1uiv(this.addr,e)}function HE(s,e){s.uniform2uiv(this.addr,e)}function VE(s,e){s.uniform3uiv(this.addr,e)}function GE(s,e){s.uniform4uiv(this.addr,e)}function WE(s,e,n){const r=this.cache,o=e.length,l=Yl(n,o);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Kg,l[u])}function jE(s,e,n){const r=this.cache,o=e.length,l=Yl(n,o);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Qg,l[u])}function XE(s,e,n){const r=this.cache,o=e.length,l=Yl(n,o);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Jg,l[u])}function qE(s,e,n){const r=this.cache,o=e.length,l=Yl(n,o);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Zg,l[u])}function YE(s){switch(s){case 5126:return PE;case 35664:return bE;case 35665:return NE;case 35666:return LE;case 35674:return DE;case 35675:return IE;case 35676:return UE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return zE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return qE}}class $E{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=CE(n.type)}}class KE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YE(n.type)}}class ZE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Zm(s,e){s.seq.push(e),s.map[e.id]=e}function QE(s,e,n){const r=s.name,o=r.length;for(dd.lastIndex=0;;){const l=dd.exec(r),u=dd.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){Zm(n,m===void 0?new $E(d,s,e):new KE(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new ZE(d),Zm(n,g)),n=g}}}class Bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);QE(l,u,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Qm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const JE=37297;let eT=0;function tT(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Jm=new dt;function nT(s){Tt._getMatrix(Jm,Tt.workingColorSpace,s);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function eg(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+tT(s.getShaderSource(e),u)}else return o}function iT(s,e){const n=nT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rT(s,e){let n;switch(e){case lx:n="Linear";break;case cx:n="Reinhard";break;case ux:n="Cineon";break;case dx:n="ACESFilmic";break;case hx:n="AgX";break;case px:n="Neutral";break;case fx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new K;function sT(){Tt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function oT(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function lT(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ua(s){return s!==""}function tg(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(s){return s.replace(cT,dT)}const uT=new Map;function dT(s,e){let n=ht[e];if(n===void 0){const r=uT.get(e);if(r!==void 0)n=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rf(n)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(s){return s.replace(fT,hT)}function hT(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function rg(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ws&&(e="ENVMAP_MODE_REFRACTION"),e}function vT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ag:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case ox:e="ENVMAP_BLENDING_ADD";break}return e}function _T(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function xT(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=pT(n),m=mT(n),_=gT(n),g=vT(n),x=_T(n),S=aT(n),T=oT(l),w=o.createProgram();let y,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ua).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ua).join(`
`),v.length>0&&(v+=`
`)):(y=[rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),v=[rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?ht.tonemapping_pars_fragment:"",n.toneMapping!==Sr?rT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,iT("linearToOutputTexel",n.outputColorSpace),sT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),u=rf(u),u=tg(u,n),u=ng(u,n),d=rf(d),d=tg(d,n),d=ng(d,n),u=ig(u),d=ig(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=L+y+u,R=L+v+d,H=Qm(o,o.VERTEX_SHADER,b),B=Qm(o,o.FRAGMENT_SHADER,R);o.attachShader(w,H),o.attachShader(w,B),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function U(F){if(s.debug.checkShaderErrors){const se=o.getProgramInfoLog(w).trim(),ee=o.getShaderInfoLog(H).trim(),ue=o.getShaderInfoLog(B).trim();let he=!0,ae=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,H,B);else{const ce=eg(o,H,"vertex"),V=eg(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+se+`
`+ce+`
`+V)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ee===""||ue==="")&&(ae=!1);ae&&(F.diagnostics={runnable:he,programLog:se,vertexShader:{log:ee,prefix:y},fragmentShader:{log:ue,prefix:v}})}o.deleteShader(H),o.deleteShader(B),G=new Bl(o,w),N=lT(o,w)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(w,JE)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=B,this}let yT=0;class ST{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new MT(e),n.set(e,r)),r}}class MT{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function ET(s,e,n,r,o,l,u){const d=new kg,h=new ST,m=new Set,_=[],g=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return m.add(N),N===0?"uv":`uv${N}`}function y(N,E,F,se,ee){const ue=se.fog,he=ee.geometry,ae=N.isMeshStandardMaterial?se.environment:null,ce=(N.isMeshStandardMaterial?n:e).get(N.envMap||ae),V=ce&&ce.mapping===Xl?ce.image.height:null,le=T[N.type];N.precision!==null&&(S=o.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=re!==void 0?re.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let Le,J,fe,Te;if(le){const yt=_i[le];Le=yt.vertexShader,J=yt.fragmentShader}else Le=N.vertexShader,J=N.fragmentShader,h.update(N),fe=h.getVertexShaderID(N),Te=h.getFragmentShaderID(N);const ye=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,He=ee.isBatchedMesh===!0,wt=!!N.map,Ze=!!N.matcap,Ve=!!ce,k=!!N.aoMap,jt=!!N.lightMap,pt=!!N.bumpMap,Ct=!!N.normalMap,qe=!!N.displacementMap,_t=!!N.emissiveMap,Je=!!N.metalnessMap,lt=!!N.roughnessMap,zt=N.anisotropy>0,D=N.clearcoat>0,A=N.dispersion>0,Q=N.iridescence>0,de=N.sheen>0,me=N.transmission>0,oe=zt&&!!N.anisotropyMap,Ke=D&&!!N.clearcoatMap,Re=D&&!!N.clearcoatNormalMap,ze=D&&!!N.clearcoatRoughnessMap,Qe=Q&&!!N.iridescenceMap,_e=Q&&!!N.iridescenceThicknessMap,Fe=de&&!!N.sheenColorMap,rt=de&&!!N.sheenRoughnessMap,tt=!!N.specularMap,Ce=!!N.specularColorMap,ot=!!N.specularIntensityMap,W=me&&!!N.transmissionMap,Pe=me&&!!N.thicknessMap,ve=!!N.gradientMap,De=!!N.alphaMap,Me=N.alphaTest>0,pe=!!N.alphaHash,Ge=!!N.extensions;let ut=Sr;N.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ut=s.toneMapping);const bt={shaderID:le,shaderType:N.type,shaderName:N.name,vertexShader:Le,fragmentShader:J,defines:N.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:He,batchingColor:He&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:js,alphaToCoverage:!!N.alphaToCoverage,map:wt,matcap:Ze,envMap:Ve,envMapMode:Ve&&ce.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:jt,bumpMap:pt,normalMap:Ct,displacementMap:x&&qe,emissiveMap:_t,normalMapObjectSpace:Ct&&N.normalMapType===xx,normalMapTangentSpace:Ct&&N.normalMapType===_x,metalnessMap:Je,roughnessMap:lt,anisotropy:zt,anisotropyMap:oe,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,dispersion:A,iridescence:Q,iridescenceMap:Qe,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:Fe,sheenRoughnessMap:rt,specularMap:tt,specularColorMap:Ce,specularIntensityMap:ot,transmission:me,transmissionMap:W,thicknessMap:Pe,gradientMap:ve,opaque:N.transparent===!1&&N.blending===ks&&N.alphaToCoverage===!1,alphaMap:De,alphaTest:Me,alphaHash:pe,combine:N.combine,mapUv:wt&&w(N.map.channel),aoMapUv:k&&w(N.aoMap.channel),lightMapUv:jt&&w(N.lightMap.channel),bumpMapUv:pt&&w(N.bumpMap.channel),normalMapUv:Ct&&w(N.normalMap.channel),displacementMapUv:qe&&w(N.displacementMap.channel),emissiveMapUv:_t&&w(N.emissiveMap.channel),metalnessMapUv:Je&&w(N.metalnessMap.channel),roughnessMapUv:lt&&w(N.roughnessMap.channel),anisotropyMapUv:oe&&w(N.anisotropyMap.channel),clearcoatMapUv:Ke&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:Re&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:rt&&w(N.sheenRoughnessMap.channel),specularMapUv:tt&&w(N.specularMap.channel),specularColorMapUv:Ce&&w(N.specularColorMap.channel),specularIntensityMapUv:ot&&w(N.specularIntensityMap.channel),transmissionMapUv:W&&w(N.transmissionMap.channel),thicknessMapUv:Pe&&w(N.thicknessMap.channel),alphaMapUv:De&&w(N.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ct||zt),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(wt||De),fog:!!ue,useFog:N.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:wt&&N.map.isVideoTexture===!0&&Tt.getTransfer(N.map.colorSpace)===Lt,decodeVideoTextureEmissive:_t&&N.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(N.emissiveMap.colorSpace)===Lt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Oi,flipSided:N.side===Bn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Ge&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&N.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return bt.vertexUv1s=m.has(1),bt.vertexUv2s=m.has(2),bt.vertexUv3s=m.has(3),m.clear(),bt}function v(N){const E=[];if(N.shaderID?E.push(N.shaderID):(E.push(N.customVertexShaderID),E.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)E.push(F),E.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(L(E,N),b(E,N),E.push(s.outputColorSpace)),E.push(N.customProgramCacheKey),E.join()}function L(N,E){N.push(E.precision),N.push(E.outputColorSpace),N.push(E.envMapMode),N.push(E.envMapCubeUVHeight),N.push(E.mapUv),N.push(E.alphaMapUv),N.push(E.lightMapUv),N.push(E.aoMapUv),N.push(E.bumpMapUv),N.push(E.normalMapUv),N.push(E.displacementMapUv),N.push(E.emissiveMapUv),N.push(E.metalnessMapUv),N.push(E.roughnessMapUv),N.push(E.anisotropyMapUv),N.push(E.clearcoatMapUv),N.push(E.clearcoatNormalMapUv),N.push(E.clearcoatRoughnessMapUv),N.push(E.iridescenceMapUv),N.push(E.iridescenceThicknessMapUv),N.push(E.sheenColorMapUv),N.push(E.sheenRoughnessMapUv),N.push(E.specularMapUv),N.push(E.specularColorMapUv),N.push(E.specularIntensityMapUv),N.push(E.transmissionMapUv),N.push(E.thicknessMapUv),N.push(E.combine),N.push(E.fogExp2),N.push(E.sizeAttenuation),N.push(E.morphTargetsCount),N.push(E.morphAttributeCount),N.push(E.numDirLights),N.push(E.numPointLights),N.push(E.numSpotLights),N.push(E.numSpotLightMaps),N.push(E.numHemiLights),N.push(E.numRectAreaLights),N.push(E.numDirLightShadows),N.push(E.numPointLightShadows),N.push(E.numSpotLightShadows),N.push(E.numSpotLightShadowsWithMaps),N.push(E.numLightProbes),N.push(E.shadowMapType),N.push(E.toneMapping),N.push(E.numClippingPlanes),N.push(E.numClipIntersection),N.push(E.depthPacking)}function b(N,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),E.batchingColor&&d.enable(21),E.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.reverseDepthBuffer&&d.enable(4),E.skinning&&d.enable(5),E.morphTargets&&d.enable(6),E.morphNormals&&d.enable(7),E.morphColors&&d.enable(8),E.premultipliedAlpha&&d.enable(9),E.shadowMapEnabled&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.decodeVideoTextureEmissive&&d.enable(20),E.alphaToCoverage&&d.enable(21),N.push(d.mask)}function R(N){const E=T[N.type];let F;if(E){const se=_i[E];F=Kx.clone(se.uniforms)}else F=N.uniforms;return F}function H(N,E){let F;for(let se=0,ee=_.length;se<ee;se++){const ue=_[se];if(ue.cacheKey===E){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new xT(s,E,N,l),_.push(F)),F}function B(N){if(--N.usedTimes===0){const E=_.indexOf(N);_[E]=_[_.length-1],_.pop(),N.destroy()}}function U(N){h.remove(N)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:H,releaseProgram:B,releaseShaderCache:U,programs:_,dispose:G}}function TT(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function wT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ag(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g,x,S,T,w,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=y),e++,v}function d(g,x,S,T,w,y){const v=u(g,x,S,T,w,y);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):n.push(v)}function h(g,x,S,T,w,y){const v=u(g,x,S,T,w,y);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function m(g,x){n.length>1&&n.sort(g||wT),r.length>1&&r.sort(x||sg),o.length>1&&o.sort(x||sg)}function _(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:_,sort:m}}function AT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new ag,s.set(r,[u])):o>=l.length?(u=new ag,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function RT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new At};break;case"SpotLight":n={position:new K,direction:new K,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=n,n}}}function CT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let PT=0;function bT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function NT(s){const e=new RT,n=CT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const o=new K,l=new Wt,u=new Wt;function d(m){let _=0,g=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,T=0,w=0,y=0,v=0,L=0,b=0,R=0,H=0,B=0,U=0;m.sort(bT);for(let N=0,E=m.length;N<E;N++){const F=m[N],se=F.color,ee=F.intensity,ue=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=se.r*ee,g+=se.g*ee,x+=se.b*ee;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(F.sh.coefficients[ae],ee);U++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ce=F.shadow,V=n.get(F);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=F.shadow.matrix,L++}r.directional[S]=ae,S++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(se).multiplyScalar(ee),ae.distance=ue,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,r.spot[w]=ae;const ce=F.shadow;if(F.map&&(r.spotLightMap[H]=F.map,H++,ce.updateMatrices(F),F.castShadow&&B++),r.spotLightMatrix[w]=ce.matrix,F.castShadow){const V=n.get(F);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.spotShadow[w]=V,r.spotShadowMap[w]=he,R++}w++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(se).multiplyScalar(ee),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=ae,y++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const ce=F.shadow,V=n.get(F);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,r.pointShadow[T]=V,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=F.shadow.matrix,b++}r.point[T]=ae,T++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar(ee),ae.groundColor.copy(F.groundColor).multiplyScalar(ee),r.hemi[v]=ae,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==w||G.rectAreaLength!==y||G.hemiLength!==v||G.numDirectionalShadows!==L||G.numPointShadows!==b||G.numSpotShadows!==R||G.numSpotMaps!==H||G.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+H-B,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=U,G.directionalLength=S,G.pointLength=T,G.spotLength=w,G.rectAreaLength=y,G.hemiLength=v,G.numDirectionalShadows=L,G.numPointShadows=b,G.numSpotShadows=R,G.numSpotMaps=H,G.numLightProbes=U,r.version=PT++)}function h(m,_){let g=0,x=0,S=0,T=0,w=0;const y=_.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const b=m[v];if(b.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),g++}else if(b.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(b.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(b.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:d,setupView:h,state:r}}function og(s){const e=new NT(s),n=[],r=[];function o(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function u(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function LT(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new og(s),e.set(o,[d])):l>=u.length?(d=new og(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
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
}`;function UT(s,e,n){let r=new Xg;const o=new Rt,l=new Rt,u=new qt,d=new oy({depthPacking:vx}),h=new ly,m={},_=n.maxTextureSize,g={[Mr]:Bn,[Bn]:Mr,[Oi]:Oi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:DT,fragmentShader:IT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new yn;T.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new An(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let v=this.type;this.render=function(B,U,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const N=s.getRenderTarget(),E=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),se=s.state;se.setBlending(yr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ee=v!==Fi&&this.type===Fi,ue=v===Fi&&this.type!==Fi;for(let he=0,ae=B.length;he<ae;he++){const ce=B[he],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||ee===!0||ue===!0){const O=this.type!==Fi?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new Qr(o.x,o.y,O),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let O=0;O<re;O++){const ie=V.getViewport(O);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),se.viewport(u),V.updateMatrices(ce,O),r=V.getFrustum(),R(U,G,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===Fi&&L(V,G),V.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(N,E,F)};function L(B,U){const G=e.update(w);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qr(o.x,o.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(U,null,G,x,w,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(U,null,G,S,w,null)}function b(B,U,G,N){let E=null;const F=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)E=F;else if(E=G.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const se=E.uuid,ee=U.uuid;let ue=m[se];ue===void 0&&(ue={},m[se]=ue);let he=ue[ee];he===void 0&&(he=E.clone(),ue[ee]=he,U.addEventListener("dispose",H)),E=he}if(E.visible=U.visible,E.wireframe=U.wireframe,N===Fi?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:g[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,G.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const se=s.properties.get(E);se.light=G}return E}function R(B,U,G,N,E){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===Fi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const ee=e.update(B),ue=B.material;if(Array.isArray(ue)){const he=ee.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const V=he[ae],le=ue[V.materialIndex];if(le&&le.visible){const re=b(B,le,N,E);B.onBeforeShadow(s,B,U,G,ee,re,V),s.renderBufferDirect(G,null,ee,re,B,V),B.onAfterShadow(s,B,U,G,ee,re,V)}}}else if(ue.visible){const he=b(B,ue,N,E);B.onBeforeShadow(s,B,U,G,ee,he,null),s.renderBufferDirect(G,null,ee,he,B,null),B.onAfterShadow(s,B,U,G,ee,he,null)}}const se=B.children;for(let ee=0,ue=se.length;ee<ue;ee++)R(se[ee],U,G,N,E)}function H(B){B.target.removeEventListener("dispose",H);for(const G in m){const N=m[G],E=B.target.uuid;E in N&&(N[E].dispose(),delete N[E])}}}const FT={[_d]:xd,[yd]:Ed,[Sd]:Td,[Vs]:Md,[xd]:_d,[Ed]:yd,[Td]:Sd,[Md]:Vs};function OT(s,e){function n(){let W=!1;const Pe=new qt;let ve=null;const De=new qt(0,0,0,0);return{setMask:function(Me){ve!==Me&&!W&&(s.colorMask(Me,Me,Me,Me),ve=Me)},setLocked:function(Me){W=Me},setClear:function(Me,pe,Ge,ut,bt){bt===!0&&(Me*=ut,pe*=ut,Ge*=ut),Pe.set(Me,pe,Ge,ut),De.equals(Pe)===!1&&(s.clearColor(Me,pe,Ge,ut),De.copy(Pe))},reset:function(){W=!1,ve=null,De.set(-1,0,0,0)}}}function r(){let W=!1,Pe=!1,ve=null,De=null,Me=null;return{setReversed:function(pe){if(Pe!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Pe=pe;const ut=Me;Me=null,this.setClear(ut)}},getReversed:function(){return Pe},setTest:function(pe){pe?ye(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(pe){ve!==pe&&!W&&(s.depthMask(pe),ve=pe)},setFunc:function(pe){if(Pe&&(pe=FT[pe]),De!==pe){switch(pe){case _d:s.depthFunc(s.NEVER);break;case xd:s.depthFunc(s.ALWAYS);break;case yd:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case Sd:s.depthFunc(s.EQUAL);break;case Md:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Me!==pe&&(Pe&&(pe=1-pe),s.clearDepth(pe),Me=pe)},reset:function(){W=!1,ve=null,De=null,Me=null,Pe=!1}}}function o(){let W=!1,Pe=null,ve=null,De=null,Me=null,pe=null,Ge=null,ut=null,bt=null;return{setTest:function(yt){W||(yt?ye(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(yt){Pe!==yt&&!W&&(s.stencilMask(yt),Pe=yt)},setFunc:function(yt,Pn,Sn){(ve!==yt||De!==Pn||Me!==Sn)&&(s.stencilFunc(yt,Pn,Sn),ve=yt,De=Pn,Me=Sn)},setOp:function(yt,Pn,Sn){(pe!==yt||Ge!==Pn||ut!==Sn)&&(s.stencilOp(yt,Pn,Sn),pe=yt,Ge=Pn,ut=Sn)},setLocked:function(yt){W=yt},setClear:function(yt){bt!==yt&&(s.clearStencil(yt),bt=yt)},reset:function(){W=!1,Pe=null,ve=null,De=null,Me=null,pe=null,Ge=null,ut=null,bt=null}}}const l=new n,u=new r,d=new o,h=new WeakMap,m=new WeakMap;let _={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,v=null,L=null,b=null,R=null,H=null,B=null,U=new At(0,0,0),G=0,N=!1,E=null,F=null,se=null,ee=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),ae=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ae=ce>=2);let le=null,re={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Le=new qt().fromArray(O),J=new qt().fromArray(ie);function fe(W,Pe,ve,De){const Me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(W,pe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<ve;Ge++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Pe+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return pe}const Te={};Te[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(s.DEPTH_TEST),u.setFunc(Vs),pt(!1),Ct(om),ye(s.CULL_FACE),k(yr);function ye(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Ae(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Ue(W,Pe){return g[W]!==Pe?(s.bindFramebuffer(W,Pe),g[W]=Pe,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(W,Pe){let ve=S,De=!1;if(W){ve=x.get(Pe),ve===void 0&&(ve=[],x.set(Pe,ve));const Me=W.textures;if(ve.length!==Me.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ge=Me.length;pe<Ge;pe++)ve[pe]=s.COLOR_ATTACHMENT0+pe;ve.length=Me.length,De=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,De=!0);De&&s.drawBuffers(ve)}function wt(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Ze={[Xr]:s.FUNC_ADD,[G0]:s.FUNC_SUBTRACT,[W0]:s.FUNC_REVERSE_SUBTRACT};Ze[j0]=s.MIN,Ze[X0]=s.MAX;const Ve={[q0]:s.ZERO,[Y0]:s.ONE,[$0]:s.SRC_COLOR,[gd]:s.SRC_ALPHA,[tx]:s.SRC_ALPHA_SATURATE,[J0]:s.DST_COLOR,[Z0]:s.DST_ALPHA,[K0]:s.ONE_MINUS_SRC_COLOR,[vd]:s.ONE_MINUS_SRC_ALPHA,[ex]:s.ONE_MINUS_DST_COLOR,[Q0]:s.ONE_MINUS_DST_ALPHA,[nx]:s.CONSTANT_COLOR,[ix]:s.ONE_MINUS_CONSTANT_COLOR,[rx]:s.CONSTANT_ALPHA,[sx]:s.ONE_MINUS_CONSTANT_ALPHA};function k(W,Pe,ve,De,Me,pe,Ge,ut,bt,yt){if(W===yr){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(ye(s.BLEND),w=!0),W!==V0){if(W!==y||yt!==N){if((v!==Xr||R!==Xr)&&(s.blendEquation(s.FUNC_ADD),v=Xr,R=Xr),yt)switch(W){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lm:s.blendFunc(s.ONE,s.ONE);break;case cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case um:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,b=null,H=null,B=null,U.set(0,0,0),G=0,y=W,N=yt}return}Me=Me||Pe,pe=pe||ve,Ge=Ge||De,(Pe!==v||Me!==R)&&(s.blendEquationSeparate(Ze[Pe],Ze[Me]),v=Pe,R=Me),(ve!==L||De!==b||pe!==H||Ge!==B)&&(s.blendFuncSeparate(Ve[ve],Ve[De],Ve[pe],Ve[Ge]),L=ve,b=De,H=pe,B=Ge),(ut.equals(U)===!1||bt!==G)&&(s.blendColor(ut.r,ut.g,ut.b,bt),U.copy(ut),G=bt),y=W,N=!1}function jt(W,Pe){W.side===Oi?Ae(s.CULL_FACE):ye(s.CULL_FACE);let ve=W.side===Bn;Pe&&(ve=!ve),pt(ve),W.blending===ks&&W.transparent===!1?k(yr):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const De=W.stencilWrite;d.setTest(De),De&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_t(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){E!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),E=W)}function Ct(W){W!==k0?(ye(s.CULL_FACE),W!==F&&(W===om?s.cullFace(s.BACK):W===z0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),F=W}function qe(W){W!==se&&(ae&&s.lineWidth(W),se=W)}function _t(W,Pe,ve){W?(ye(s.POLYGON_OFFSET_FILL),(ee!==Pe||ue!==ve)&&(s.polygonOffset(Pe,ve),ee=Pe,ue=ve)):Ae(s.POLYGON_OFFSET_FILL)}function Je(W){W?ye(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function lt(W){W===void 0&&(W=s.TEXTURE0+he-1),le!==W&&(s.activeTexture(W),le=W)}function zt(W,Pe,ve){ve===void 0&&(le===null?ve=s.TEXTURE0+he-1:ve=le);let De=re[ve];De===void 0&&(De={type:void 0,texture:void 0},re[ve]=De),(De.type!==W||De.texture!==Pe)&&(le!==ve&&(s.activeTexture(ve),le=ve),s.bindTexture(W,Pe||Te[W]),De.type=W,De.texture=Pe)}function D(){const W=re[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(W){Le.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function rt(W){J.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function tt(W,Pe){let ve=m.get(Pe);ve===void 0&&(ve=new WeakMap,m.set(Pe,ve));let De=ve.get(W);De===void 0&&(De=s.getUniformBlockIndex(Pe,W.name),ve.set(W,De))}function Ce(W,Pe){const De=m.get(Pe).get(W);h.get(Pe)!==De&&(s.uniformBlockBinding(Pe,De,W.__bindingPointIndex),h.set(Pe,De))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,re={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,v=null,L=null,b=null,R=null,H=null,B=null,U=new At(0,0,0),G=0,N=!1,E=null,F=null,se=null,ee=null,ue=null,Le.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ye,disable:Ae,bindFramebuffer:Ue,drawBuffers:He,useProgram:wt,setBlending:k,setMaterial:jt,setFlipSided:pt,setCullFace:Ct,setLineWidth:qe,setPolygonOffset:_t,setScissorTest:Je,activeTexture:lt,bindTexture:zt,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:Qe,texImage3D:_e,updateUBOMapping:tt,uniformBlockBinding:Ce,texStorage2D:Re,texStorage3D:ze,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ke,scissor:Fe,viewport:rt,reset:ot}}function BT(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,A){return S?new OffscreenCanvas(D,A):Hl("canvas")}function w(D,A,Q){let de=1;const me=zt(D);if((me.width>Q||me.height>Q)&&(de=Q/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(de*me.width),Ke=Math.floor(de*me.height);g===void 0&&(g=T(oe,Ke));const Re=A?T(oe,Ke):g;return Re.width=oe,Re.height=Ke,Re.getContext("2d").drawImage(D,0,0,oe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+oe+"x"+Ke+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,A,Q,de,me=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=A;if(A===s.RED&&(Q===s.FLOAT&&(oe=s.R32F),Q===s.HALF_FLOAT&&(oe=s.R16F),Q===s.UNSIGNED_BYTE&&(oe=s.R8)),A===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(oe=s.R8UI),Q===s.UNSIGNED_SHORT&&(oe=s.R16UI),Q===s.UNSIGNED_INT&&(oe=s.R32UI),Q===s.BYTE&&(oe=s.R8I),Q===s.SHORT&&(oe=s.R16I),Q===s.INT&&(oe=s.R32I)),A===s.RG&&(Q===s.FLOAT&&(oe=s.RG32F),Q===s.HALF_FLOAT&&(oe=s.RG16F),Q===s.UNSIGNED_BYTE&&(oe=s.RG8)),A===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(oe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(oe=s.RG16UI),Q===s.UNSIGNED_INT&&(oe=s.RG32UI),Q===s.BYTE&&(oe=s.RG8I),Q===s.SHORT&&(oe=s.RG16I),Q===s.INT&&(oe=s.RG32I)),A===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),Q===s.UNSIGNED_INT&&(oe=s.RGB32UI),Q===s.BYTE&&(oe=s.RGB8I),Q===s.SHORT&&(oe=s.RGB16I),Q===s.INT&&(oe=s.RGB32I)),A===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(oe=s.RGBA32UI),Q===s.BYTE&&(oe=s.RGBA8I),Q===s.SHORT&&(oe=s.RGBA16I),Q===s.INT&&(oe=s.RGBA32I)),A===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),A===s.RGBA){const Ke=me?kl:Tt.getTransfer(de);Q===s.FLOAT&&(oe=s.RGBA32F),Q===s.HALF_FLOAT&&(oe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(oe=Ke===Lt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function R(D,A){let Q;return D?A===null||A===Zr||A===za?Q=s.DEPTH24_STENCIL8:A===Bi?Q=s.DEPTH32F_STENCIL8:A===ka&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zr||A===za?Q=s.DEPTH_COMPONENT24:A===Bi?Q=s.DEPTH_COMPONENT32F:A===ka&&(Q=s.DEPTH_COMPONENT16),Q}function H(D,A){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==xi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function B(D){const A=D.target;A.removeEventListener("dispose",B),G(A),A.isVideoTexture&&_.delete(A)}function U(D){const A=D.target;A.removeEventListener("dispose",U),E(A)}function G(D){const A=r.get(D);if(A.__webglInit===void 0)return;const Q=D.source,de=x.get(Q);if(de){const me=de[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&N(D),Object.keys(de).length===0&&x.delete(Q)}r.remove(D)}function N(D){const A=r.get(D);s.deleteTexture(A.__webglTexture);const Q=D.source,de=x.get(Q);delete de[A.__cacheKey],u.memory.textures--}function E(D){const A=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let me=0;me<A.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(A.__webglFramebuffer[de][me]);else s.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)s.deleteFramebuffer(A.__webglFramebuffer[de]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=D.textures;for(let de=0,me=Q.length;de<me;de++){const oe=r.get(Q[de]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(Q[de])}r.remove(D)}let F=0;function se(){F=0}function ee(){const D=F;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),F+=1,D}function ue(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function he(D,A){const Q=r.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Q,D,A);return}}n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+A)}function ae(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){Te(Q,D,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+A)}function ce(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){Te(Q,D,A);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+A)}function V(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){ye(Q,D,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+A)}const le={[Rd]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[Cd]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[mx]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Lu]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},O={[yx]:s.NEVER,[Ax]:s.ALWAYS,[Sx]:s.LESS,[Fg]:s.LEQUAL,[Mx]:s.EQUAL,[wx]:s.GEQUAL,[Ex]:s.GREATER,[Tx]:s.NOTEQUAL};function ie(D,A){if(A.type===Bi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xi||A.magFilter===Lu||A.magFilter===al||A.magFilter===$r||A.minFilter===xi||A.minFilter===Lu||A.minFilter===al||A.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===di||A.minFilter!==al&&A.minFilter!==$r||A.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Le(D,A){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",B));const de=A.source;let me=x.get(de);me===void 0&&(me={},x.set(de,me));const oe=ue(A);if(oe!==D.__cacheKey){me[oe]===void 0&&(me[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),me[oe].usedTimes++;const Ke=me[D.__cacheKey];Ke!==void 0&&(me[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&N(A)),D.__cacheKey=oe,D.__webglTexture=me[oe].texture}return Q}function J(D,A,Q){return Math.floor(Math.floor(D/Q)/A)}function fe(D,A,Q,de){const oe=D.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,Q,de,A.data);else{oe.sort((_e,Fe)=>_e.start-Fe.start);let Ke=0;for(let _e=1;_e<oe.length;_e++){const Fe=oe[Ke],rt=oe[_e],tt=Fe.start+Fe.count,Ce=J(rt.start,A.width,4),ot=J(Fe.start,A.width,4);rt.start<=tt+1&&Ce===ot&&J(rt.start+rt.count-1,A.width,4)===Ce?Fe.count=Math.max(Fe.count,rt.start+rt.count-Fe.start):(++Ke,oe[Ke]=rt)}oe.length=Ke+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let _e=0,Fe=oe.length;_e<Fe;_e++){const rt=oe[_e],tt=Math.floor(rt.start/4),Ce=Math.ceil(rt.count/4),ot=tt%A.width,W=Math.floor(tt/A.width),Pe=Ce,ve=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),n.texSubImage2D(s.TEXTURE_2D,0,ot,W,Pe,ve,Q,de,A.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function Te(D,A,Q){let de=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=s.TEXTURE_3D);const me=Le(D,A),oe=A.source;n.bindTexture(de,D.__webglTexture,s.TEXTURE0+Q);const Ke=r.get(oe);if(oe.version!==Ke.__version||me===!0){n.activeTexture(s.TEXTURE0+Q);const Re=Tt.getPrimaries(Tt.workingColorSpace),ze=A.colorSpace===_r?null:Tt.getPrimaries(A.colorSpace),Qe=A.colorSpace===_r||Re===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let _e=w(A.image,!1,o.maxTextureSize);_e=lt(A,_e);const Fe=l.convert(A.format,A.colorSpace),rt=l.convert(A.type);let tt=b(A.internalFormat,Fe,rt,A.colorSpace,A.isVideoTexture);ie(de,A);let Ce;const ot=A.mipmaps,W=A.isVideoTexture!==!0,Pe=Ke.__version===void 0||me===!0,ve=oe.dataReady,De=H(A,_e);if(A.isDepthTexture)tt=R(A.format===Va,A.type),Pe&&(W?n.texStorage2D(s.TEXTURE_2D,1,tt,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,tt,_e.width,_e.height,0,Fe,rt,null));else if(A.isDataTexture)if(ot.length>0){W&&Pe&&n.texStorage2D(s.TEXTURE_2D,De,tt,ot[0].width,ot[0].height);for(let Me=0,pe=ot.length;Me<pe;Me++)Ce=ot[Me],W?ve&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Fe,rt,Ce.data):n.texImage2D(s.TEXTURE_2D,Me,tt,Ce.width,Ce.height,0,Fe,rt,Ce.data);A.generateMipmaps=!1}else W?(Pe&&n.texStorage2D(s.TEXTURE_2D,De,tt,_e.width,_e.height),ve&&fe(A,_e,Fe,rt)):n.texImage2D(s.TEXTURE_2D,0,tt,_e.width,_e.height,0,Fe,rt,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,tt,ot[0].width,ot[0].height,_e.depth);for(let Me=0,pe=ot.length;Me<pe;Me++)if(Ce=ot[Me],A.format!==ui)if(Fe!==null)if(W){if(ve)if(A.layerUpdates.size>0){const Ge=Om(Ce.width,Ce.height,A.format,A.type);for(const ut of A.layerUpdates){const bt=Ce.data.subarray(ut*Ge/Ce.data.BYTES_PER_ELEMENT,(ut+1)*Ge/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,ut,Ce.width,Ce.height,1,Fe,bt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,_e.depth,Fe,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,tt,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?ve&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,_e.depth,Fe,rt,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Me,tt,Ce.width,Ce.height,_e.depth,0,Fe,rt,Ce.data)}else{W&&Pe&&n.texStorage2D(s.TEXTURE_2D,De,tt,ot[0].width,ot[0].height);for(let Me=0,pe=ot.length;Me<pe;Me++)Ce=ot[Me],A.format!==ui?Fe!==null?W?ve&&n.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Fe,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,Me,tt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?ve&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Fe,rt,Ce.data):n.texImage2D(s.TEXTURE_2D,Me,tt,Ce.width,Ce.height,0,Fe,rt,Ce.data)}else if(A.isDataArrayTexture)if(W){if(Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,tt,_e.width,_e.height,_e.depth),ve)if(A.layerUpdates.size>0){const Me=Om(_e.width,_e.height,A.format,A.type);for(const pe of A.layerUpdates){const Ge=_e.data.subarray(pe*Me/_e.data.BYTES_PER_ELEMENT,(pe+1)*Me/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Fe,rt,Ge)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Fe,rt,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,_e.width,_e.height,_e.depth,0,Fe,rt,_e.data);else if(A.isData3DTexture)W?(Pe&&n.texStorage3D(s.TEXTURE_3D,De,tt,_e.width,_e.height,_e.depth),ve&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Fe,rt,_e.data)):n.texImage3D(s.TEXTURE_3D,0,tt,_e.width,_e.height,_e.depth,0,Fe,rt,_e.data);else if(A.isFramebufferTexture){if(Pe)if(W)n.texStorage2D(s.TEXTURE_2D,De,tt,_e.width,_e.height);else{let Me=_e.width,pe=_e.height;for(let Ge=0;Ge<De;Ge++)n.texImage2D(s.TEXTURE_2D,Ge,tt,Me,pe,0,Fe,rt,null),Me>>=1,pe>>=1}}else if(ot.length>0){if(W&&Pe){const Me=zt(ot[0]);n.texStorage2D(s.TEXTURE_2D,De,tt,Me.width,Me.height)}for(let Me=0,pe=ot.length;Me<pe;Me++)Ce=ot[Me],W?ve&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Fe,rt,Ce):n.texImage2D(s.TEXTURE_2D,Me,tt,Fe,rt,Ce);A.generateMipmaps=!1}else if(W){if(Pe){const Me=zt(_e);n.texStorage2D(s.TEXTURE_2D,De,tt,Me.width,Me.height)}ve&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,rt,_e)}else n.texImage2D(s.TEXTURE_2D,0,tt,Fe,rt,_e);y(A)&&v(de),Ke.__version=oe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ye(D,A,Q){if(A.image.length!==6)return;const de=Le(D,A),me=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Q);const oe=r.get(me);if(me.version!==oe.__version||de===!0){n.activeTexture(s.TEXTURE0+Q);const Ke=Tt.getPrimaries(Tt.workingColorSpace),Re=A.colorSpace===_r?null:Tt.getPrimaries(A.colorSpace),ze=A.colorSpace===_r||Ke===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Qe=A.isCompressedTexture||A.image[0].isCompressedTexture,_e=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!Qe&&!_e?Fe[pe]=w(A.image[pe],!0,o.maxCubemapSize):Fe[pe]=_e?A.image[pe].image:A.image[pe],Fe[pe]=lt(A,Fe[pe]);const rt=Fe[0],tt=l.convert(A.format,A.colorSpace),Ce=l.convert(A.type),ot=b(A.internalFormat,tt,Ce,A.colorSpace),W=A.isVideoTexture!==!0,Pe=oe.__version===void 0||de===!0,ve=me.dataReady;let De=H(A,rt);ie(s.TEXTURE_CUBE_MAP,A);let Me;if(Qe){W&&Pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ot,rt.width,rt.height);for(let pe=0;pe<6;pe++){Me=Fe[pe].mipmaps;for(let Ge=0;Ge<Me.length;Ge++){const ut=Me[Ge];A.format!==ui?tt!==null?W?ve&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,ut.width,ut.height,tt,ut.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ot,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,ut.width,ut.height,tt,Ce,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ot,ut.width,ut.height,0,tt,Ce,ut.data)}}}else{if(Me=A.mipmaps,W&&Pe){Me.length>0&&De++;const pe=zt(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){W?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,tt,Ce,Fe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Fe[pe].width,Fe[pe].height,0,tt,Ce,Fe[pe].data);for(let Ge=0;Ge<Me.length;Ge++){const bt=Me[Ge].image[pe].image;W?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,bt.width,bt.height,tt,Ce,bt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ot,bt.width,bt.height,0,tt,Ce,bt.data)}}else{W?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Ce,Fe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,tt,Ce,Fe[pe]);for(let Ge=0;Ge<Me.length;Ge++){const ut=Me[Ge];W?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,tt,Ce,ut.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ot,tt,Ce,ut.image[pe])}}}y(A)&&v(s.TEXTURE_CUBE_MAP),oe.__version=me.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ae(D,A,Q,de,me,oe){const Ke=l.convert(Q.format,Q.colorSpace),Re=l.convert(Q.type),ze=b(Q.internalFormat,Ke,Re,Q.colorSpace),Qe=r.get(A),_e=r.get(Q);if(_e.__renderTarget=A,!Qe.__hasExternalTextures){const Fe=Math.max(1,A.width>>oe),rt=Math.max(1,A.height>>oe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,oe,ze,Fe,rt,A.depth,0,Ke,Re,null):n.texImage2D(me,oe,ze,Fe,rt,0,Ke,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),_t(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,_e.__webglTexture,0,qe(A)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,_e.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(D,A,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const de=A.depthTexture,me=de&&de.isDepthTexture?de.type:null,oe=R(A.stencilBuffer,me),Ke=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=qe(A);_t(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,oe,A.width,A.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,oe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,oe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,D)}else{const de=A.textures;for(let me=0;me<de.length;me++){const oe=de[me],Ke=l.convert(oe.format,oe.colorSpace),Re=l.convert(oe.type),ze=b(oe.internalFormat,Ke,Re,oe.colorSpace),Qe=qe(A);Q&&_t(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ze,A.width,A.height):_t(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,ze,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ze,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const me=de.__webglTexture,oe=qe(A);if(A.depthTexture.format===Ha)_t(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(A.depthTexture.format===Va)_t(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function wt(D){const A=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),A.__depthDisposeCallback=me}A.__boundDepthTexture=de}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?He(A.__webglFramebuffer[0],D):He(A.__webglFramebuffer,D)}else if(Q){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=s.createRenderbuffer(),Ue(A.__webglDepthbuffer[de],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=A.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ue(A.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(D,A,Q){const de=r.get(D);A!==void 0&&Ae(de.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&wt(D)}function Ve(D){const A=D.texture,Q=r.get(D),de=r.get(A);D.addEventListener("dispose",U);const me=D.textures,oe=D.isWebGLCubeRenderTarget===!0,Ke=me.length>1;if(Ke||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=A.version,u.memory.textures++),oe){Q.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Re]=[];for(let ze=0;ze<A.mipmaps.length;ze++)Q.__webglFramebuffer[Re][ze]=s.createFramebuffer()}else Q.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)Q.__webglFramebuffer[Re]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Re=0,ze=me.length;Re<ze;Re++){const Qe=r.get(me[Re]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&_t(D)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Re=0;Re<me.length;Re++){const ze=me[Re];Q.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Re]);const Qe=l.convert(ze.format,ze.colorSpace),_e=l.convert(ze.type),Fe=b(ze.internalFormat,Qe,_e,ze.colorSpace,D.isXRRenderTarget===!0),rt=qe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Fe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ie(s.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)Ae(Q.__webglFramebuffer[Re][ze],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ze);else Ae(Q.__webglFramebuffer[Re],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(A)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ke){for(let Re=0,ze=me.length;Re<ze;Re++){const Qe=me[Re],_e=r.get(Qe);n.bindTexture(s.TEXTURE_2D,_e.__webglTexture),ie(s.TEXTURE_2D,Qe),Ae(Q.__webglFramebuffer,D,Qe,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),y(Qe)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,de.__webglTexture),ie(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)Ae(Q.__webglFramebuffer[ze],D,A,s.COLOR_ATTACHMENT0,Re,ze);else Ae(Q.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,Re,0);y(A)&&v(Re),n.unbindTexture()}D.depthBuffer&&wt(D)}function k(D){const A=D.textures;for(let Q=0,de=A.length;Q<de;Q++){const me=A[Q];if(y(me)){const oe=L(D),Ke=r.get(me).__webglTexture;n.bindTexture(oe,Ke),v(oe),n.unbindTexture()}}}const jt=[],pt=[];function Ct(D){if(D.samples>0){if(_t(D)===!1){const A=D.textures,Q=D.width,de=D.height;let me=s.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(D),Re=A.length>1;if(Re)for(let Qe=0;Qe<A.length;Qe++)n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Qe=0;Qe<A.length;Qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Qe]);const _e=r.get(A[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,Q,de,0,0,Q,de,me,s.NEAREST),h===!0&&(jt.length=0,pt.length=0,jt.push(s.COLOR_ATTACHMENT0+Qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(jt.push(oe),pt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Qe=0;Qe<A.length;Qe++){n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Qe]);const _e=r.get(A[Qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function qe(D){return Math.min(o.maxSamples,D.samples)}function _t(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(D){const A=u.render.frame;_.get(D)!==A&&(_.set(D,A),D.update())}function lt(D,A){const Q=D.colorSpace,de=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==js&&Q!==_r&&(Tt.getTransfer(Q)===Lt?(de!==ui||me!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function zt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=Ze,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=_t}function kT(s,e){function n(r,o=_r){let l;const u=Tt.getTransfer(o);if(r===Hi)return s.UNSIGNED_BYTE;if(r===df)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cg)return s.BYTE;if(r===Pg)return s.SHORT;if(r===ka)return s.UNSIGNED_SHORT;if(r===uf)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===ja)return s.HALF_FLOAT;if(r===Ng)return s.ALPHA;if(r===Lg)return s.RGB;if(r===ui)return s.RGBA;if(r===Ha)return s.DEPTH_COMPONENT;if(r===Va)return s.DEPTH_STENCIL;if(r===Dg)return s.RED;if(r===hf)return s.RED_INTEGER;if(r===Ig)return s.RG;if(r===pf)return s.RG_INTEGER;if(r===mf)return s.RGBA_INTEGER;if(r===Ll||r===Dl||r===Il||r===Ul)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ll)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ll)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pd||r===bd||r===Nd||r===Ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Pd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dd||r===Id||r===Ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Dd||r===Id)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ud)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fd||r===Od||r===Bd||r===kd||r===zd||r===Hd||r===Vd||r===Gd||r===Wd||r===jd||r===Xd||r===qd||r===Yd||r===$d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Fd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$d)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fl||r===Kd||r===Zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Fl)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ug||r===Qd||r===Jd||r===ef)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Fl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ef)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===za?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const zT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HT=`
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

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new kn,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Er({vertexShader:zT,fragmentShader:HT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GT extends Ys{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,_=null,g=null,x=null,S=null,T=null;const w=new VT,y=n.getContextAttributes();let v=null,L=null;const b=[],R=[],H=new Rt;let B=null;const U=new On;U.viewport=new qt;const G=new On;G.viewport=new qt;const N=[U,G],E=new uy;let F=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=b[J];return fe===void 0&&(fe=new td,b[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=b[J];return fe===void 0&&(fe=new td,b[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=b[J];return fe===void 0&&(fe=new td,b[J]=fe),fe.getHandSpace()};function ee(J){const fe=R.indexOf(J.inputSource);if(fe===-1)return;const Te=b[fe];Te!==void 0&&(Te.update(J.inputSource,J.frame,m||u),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function ue(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",he);for(let J=0;J<b.length;J++){const fe=R[J];fe!==null&&(R[J]=null,b[J].disconnect(fe))}F=null,se=null,w.reset(),e.setRenderTarget(v),S=null,x=null,g=null,o=null,L=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ye=null,Ae=null;y.depth&&(Ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=y.stencil?Va:Ha,ye=y.stencil?za:Zr);const Ue={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:l};g=new XRWebGLBinding(o,n),x=g.createProjectionLayer(Ue),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Qr(x.textureWidth,x.textureHeight,{format:ui,type:Hi,depthTexture:new Yg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(J){for(let fe=0;fe<J.removed.length;fe++){const Te=J.removed[fe],ye=R.indexOf(Te);ye>=0&&(R[ye]=null,b[ye].disconnect(Te))}for(let fe=0;fe<J.added.length;fe++){const Te=J.added[fe];let ye=R.indexOf(Te);if(ye===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=R.length){R.push(Te),ye=Ue;break}else if(R[Ue]===null){R[Ue]=Te,ye=Ue;break}if(ye===-1)break}const Ae=b[ye];Ae&&Ae.connect(Te)}}const ae=new K,ce=new K;function V(J,fe,Te){ae.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const ye=ae.distanceTo(ce),Ae=fe.projectionMatrix.elements,Ue=Te.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),wt=Ae[14]/(Ae[10]+1),Ze=(Ae[9]+1)/Ae[5],Ve=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],jt=(Ue[8]+1)/Ue[0],pt=He*k,Ct=He*jt,qe=ye/(-k+jt),_t=qe*-k;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Je=He+qe,lt=wt+qe,zt=pt-_t,D=Ct+(ye-_t),A=Ze*wt/lt*Je,Q=Ve*wt/lt*Je;J.projectionMatrix.makePerspective(zt,D,A,Q,Je,lt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let fe=J.near,Te=J.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Te=w.depthFar)),E.near=G.near=U.near=fe,E.far=G.far=U.far=Te,(F!==E.near||se!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),F=E.near,se=E.far),U.layers.mask=J.layers.mask|2,G.layers.mask=J.layers.mask|4,E.layers.mask=U.layers.mask|G.layers.mask;const ye=J.parent,Ae=E.cameras;le(E,ye);for(let Ue=0;Ue<Ae.length;Ue++)le(Ae[Ue],ye);Ae.length===2?V(E,U,G):E.projectionMatrix.copy(U.projectionMatrix),re(J,E,ye)};function re(J,fe,Te){Te===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=tf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(J){h=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let O=null;function ie(J,fe){if(_=fe.getViewerPose(m||u),T=fe,_!==null){const Te=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;Te.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let He=0;He<Te.length;He++){const wt=Te[He];let Ze=null;if(S!==null)Ze=S.getViewport(wt);else{const k=g.getViewSubImage(x,wt);Ze=k.viewport,He===0&&(e.setRenderTargetTextures(L,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(L))}let Ve=N[He];Ve===void 0&&(Ve=new On,Ve.layers.enable(He),Ve.viewport=new qt,N[He]=Ve),Ve.matrix.fromArray(wt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(wt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(E.matrix.copy(Ve.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(Ve)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const He=g.getDepthInformation(Te[0]);He&&He.isValid&&He.texture&&w.init(e,He,o.renderState)}}for(let Te=0;Te<b.length;Te++){const ye=R[Te],Ae=b[Te];ye!==null&&Ae!==void 0&&Ae.update(ye,fe,m||u)}O&&O(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const Le=new $g;Le.setAnimationLoop(ie),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const Gr=new Vi,WT=new Wt;function jT(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Gg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,L,b,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?h(y,v,L,b):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Bn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Bn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),b=L.envMap,R=L.envMapRotation;b&&(y.envMap.value=b,Gr.copy(R),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Gr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,L,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=b*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Bn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function XT(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,b){const R=b.program;r.uniformBlockBinding(L,R)}function m(L,b){let R=o[L.id];R===void 0&&(T(L),R=_(L),o[L.id]=R,L.addEventListener("dispose",y));const H=b.program;r.updateUBOMapping(L,H);const B=e.render.frame;l[L.id]!==B&&(x(L),l[L.id]=B)}function _(L){const b=g();L.__bindingPointIndex=b;const R=s.createBuffer(),H=L.__size,B=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function g(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const b=o[L.id],R=L.uniforms,H=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let B=0,U=R.length;B<U;B++){const G=Array.isArray(R[B])?R[B]:[R[B]];for(let N=0,E=G.length;N<E;N++){const F=G[N];if(S(F,B,N,H)===!0){const se=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let he=0;he<ee.length;he++){const ae=ee[he],ce=w(ae);typeof ae=="number"||typeof ae=="boolean"?(F.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,se+ue,F.__data)):ae.isMatrix3?(F.__data[0]=ae.elements[0],F.__data[1]=ae.elements[1],F.__data[2]=ae.elements[2],F.__data[3]=0,F.__data[4]=ae.elements[3],F.__data[5]=ae.elements[4],F.__data[6]=ae.elements[5],F.__data[7]=0,F.__data[8]=ae.elements[6],F.__data[9]=ae.elements[7],F.__data[10]=ae.elements[8],F.__data[11]=0):(ae.toArray(F.__data,ue),ue+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,b,R,H){const B=L.value,U=b+"_"+R;if(H[U]===void 0)return typeof B=="number"||typeof B=="boolean"?H[U]=B:H[U]=B.clone(),!0;{const G=H[U];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return H[U]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function T(L){const b=L.uniforms;let R=0;const H=16;for(let U=0,G=b.length;U<G;U++){const N=Array.isArray(b[U])?b[U]:[b[U]];for(let E=0,F=N.length;E<F;E++){const se=N[E],ee=Array.isArray(se.value)?se.value:[se.value];for(let ue=0,he=ee.length;ue<he;ue++){const ae=ee[ue],ce=w(ae),V=R%H,le=V%ce.boundary,re=V+le;R+=le,re!==0&&H-re<ce.storage&&(R+=H-re),se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=R,R+=ce.storage}}}const B=R%H;return B>0&&(R+=H-B),L.__size=R,L.__cache={},this}function w(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function y(L){const b=L.target;b.removeEventListener("dispose",y);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function v(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:h,update:m,dispose:v}}class fd{constructor(e={}){const{canvas:n=Cx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const L=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let H=!1;this._outputColorSpace=Jn;let B=0,U=0,G=null,N=-1,E=null;const F=new qt,se=new qt;let ee=null;const ue=new At(0);let he=0,ae=n.width,ce=n.height,V=1,le=null,re=null;const O=new qt(0,0,ae,ce),ie=new qt(0,0,ae,ce);let Le=!1;const J=new Xg;let fe=!1,Te=!1;const ye=new Wt,Ae=new Wt,Ue=new K,He=new qt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ve(){return G===null?V:1}let k=r;function jt(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cf}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",pe,!1),k===null){const X="webgl2";if(k=jt(X,C),k===null)throw jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,Ct,qe,_t,Je,lt,zt,D,A,Q,de,me,oe,Ke,Re,ze,Qe,_e,Fe,rt,tt,Ce,ot,W;function Pe(){pt=new iE(k),pt.init(),Ce=new kT(k,pt),Ct=new KM(k,pt,e,Ce),qe=new OT(k,pt),Ct.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),_t=new aE(k),Je=new TT,lt=new BT(k,pt,qe,Je,Ct,Ce,_t),zt=new QM(R),D=new nE(R),A=new fy(k),ot=new YM(k,A),Q=new rE(k,A,_t,ot),de=new lE(k,Q,A,_t),Fe=new oE(k,Ct,lt),ze=new ZM(Je),me=new ET(R,zt,D,pt,Ct,ot,ze),oe=new jT(R,Je),Ke=new AT,Re=new LT(pt),_e=new qM(R,zt,D,qe,de,S,h),Qe=new UT(R,de,Ct),W=new XT(k,_t,Ct,qe),rt=new $M(k,pt,_t),tt=new sE(k,pt,_t),_t.programs=me.programs,R.capabilities=Ct,R.extensions=pt,R.properties=Je,R.renderLists=Ke,R.shadowMap=Qe,R.state=qe,R.info=_t}Pe();const ve=new GT(R,k);this.xr=ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(ae,ce,!1))},this.getSize=function(C){return C.set(ae,ce)},this.setSize=function(C,X,ne=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,ce=X,n.width=Math.floor(C*V),n.height=Math.floor(X*V),ne===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ae*V,ce*V).floor()},this.setDrawingBufferSize=function(C,X,ne){ae=C,ce=X,V=ne,n.width=Math.floor(C*ne),n.height=Math.floor(X*ne),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,X,ne,$){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,X,ne,$),qe.viewport(F.copy(O).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,X,ne,$){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,X,ne,$),qe.scissor(se.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){qe.setScissorTest(Le=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ne=!0){let $=0;if(C){let q=!1;if(G!==null){const Ee=G.texture.format;q=Ee===mf||Ee===pf||Ee===hf}if(q){const Ee=G.texture.type,be=Ee===Hi||Ee===Zr||Ee===ka||Ee===za||Ee===df||Ee===ff,Be=_e.getClearColor(),Oe=_e.getClearAlpha(),at=Be.r,st=Be.g,We=Be.b;be?(T[0]=at,T[1]=st,T[2]=We,T[3]=Oe,k.clearBufferuiv(k.COLOR,0,T)):(w[0]=at,w[1]=st,w[2]=We,w[3]=Oe,k.clearBufferiv(k.COLOR,0,w))}else $|=k.COLOR_BUFFER_BIT}X&&($|=k.DEPTH_BUFFER_BIT),ne&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),Ke.dispose(),Re.dispose(),Je.dispose(),zt.dispose(),D.dispose(),de.dispose(),ot.dispose(),W.dispose(),me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",es),ve.removeEventListener("sessionend",Gi),yi.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=_t.autoReset,X=Qe.enabled,ne=Qe.autoUpdate,$=Qe.needsUpdate,q=Qe.type;Pe(),_t.autoReset=C,Qe.enabled=X,Qe.autoUpdate=ne,Qe.needsUpdate=$,Qe.type=q}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ge(C){const X=C.target;X.removeEventListener("dispose",Ge),ut(X)}function ut(C){bt(C),Je.remove(C)}function bt(C){const X=Je.get(C).programs;X!==void 0&&(X.forEach(function(ne){me.releaseProgram(ne)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ne,$,q,Ee){X===null&&(X=wt);const be=q.isMesh&&q.matrixWorld.determinant()<0,Be=Ja(C,X,ne,$,q);qe.setMaterial($,be);let Oe=ne.index,at=1;if($.wireframe===!0){if(Oe=Q.getWireframeAttribute(ne),Oe===void 0)return;at=2}const st=ne.drawRange,We=ne.attributes.position;let mt=st.start*at,ft=(st.start+st.count)*at;Ee!==null&&(mt=Math.max(mt,Ee.start*at),ft=Math.min(ft,(Ee.start+Ee.count)*at)),Oe!==null?(mt=Math.max(mt,0),ft=Math.min(ft,Oe.count)):We!=null&&(mt=Math.max(mt,0),ft=Math.min(ft,We.count));const Bt=ft-mt;if(Bt<0||Bt===1/0)return;ot.setup(q,$,Be,ne,Oe);let Dt,Pt=rt;if(Oe!==null&&(Dt=A.get(Oe),Pt=tt,Pt.setIndex(Dt)),q.isMesh)$.wireframe===!0?(qe.setLineWidth($.wireframeLinewidth*Ve()),Pt.setMode(k.LINES)):Pt.setMode(k.TRIANGLES);else if(q.isLine){let et=$.linewidth;et===void 0&&(et=1),qe.setLineWidth(et*Ve()),q.isLineSegments?Pt.setMode(k.LINES):q.isLineLoop?Pt.setMode(k.LINE_LOOP):Pt.setMode(k.LINE_STRIP)}else q.isPoints?Pt.setMode(k.POINTS):q.isSprite&&Pt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Nt=q._multiDrawCounts,gt=q._multiDrawCount,tn=Oe?A.get(Oe).bytesPerElement:1,ji=Je.get($).currentProgram.getUniforms();for(let Mn=0;Mn<gt;Mn++)ji.setValue(k,"_gl_DrawID",Mn),Pt.render(et[Mn]/tn,Nt[Mn])}else if(q.isInstancedMesh)Pt.renderInstances(mt,Bt,q.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Nt=Math.min(ne.instanceCount,et);Pt.renderInstances(mt,Bt,Nt)}else Pt.render(mt,Bt)};function yt(C,X,ne){C.transparent===!0&&C.side===Oi&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,ts(C,X,ne),C.side=Mr,C.needsUpdate=!0,ts(C,X,ne),C.side=Oi):ts(C,X,ne)}this.compile=function(C,X,ne=null){ne===null&&(ne=C),v=Re.get(ne),v.init(X),b.push(v),ne.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),C!==ne&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const $=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Be=Ee[be];yt(Be,ne,q),$.add(Be)}else yt(Ee,ne,q),$.add(Ee)}),v=b.pop(),$},this.compileAsync=function(C,X,ne=null){const $=this.compile(C,X,ne);return new Promise(q=>{function Ee(){if($.forEach(function(be){Je.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){q(C);return}setTimeout(Ee,10)}pt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Pn=null;function Sn(C){Pn&&Pn(C)}function es(){yi.stop()}function Gi(){yi.start()}const yi=new $g;yi.setAnimationLoop(Sn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(C){Pn=C,ve.setAnimationLoop(C),C===null?yi.stop():yi.start()},ve.addEventListener("sessionstart",es),ve.addEventListener("sessionend",Gi),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(X),X=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,X,G),v=Re.get(C,b.length),v.init(X),b.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,fe=ze.init(this.clippingPlanes,Te),y=Ke.get(C,L.length),y.init(),L.push(y),ve.enabled===!0&&ve.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Si(Ee,X,-1/0,R.sortObjects)}Si(C,X,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,re),Ze=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Ze&&_e.addToRenderList(y,C),this.info.render.frame++,fe===!0&&ze.beginShadows();const ne=v.state.shadowsArray;Qe.render(ne,C,X),fe===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,q=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(q.length>0)for(let be=0,Be=Ee.length;be<Be;be++){const Oe=Ee[be];wr($,q,C,Oe)}Ze&&_e.render(C);for(let be=0,Be=Ee.length;be<Be;be++){const Oe=Ee[be];Tr(y,C,Oe,Oe.viewport)}}else q.length>0&&wr($,q,C,X),Ze&&_e.render(C),Tr(y,C,X);G!==null&&U===0&&(lt.updateMultisampleRenderTarget(G),lt.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(R,C,X),ot.resetDefaultState(),N=-1,E=null,b.pop(),b.length>0?(v=b[b.length-1],fe===!0&&ze.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Si(C,X,ne,$){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){$&&He.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const be=de.update(C),Be=C.material;Be.visible&&y.push(C,be,Be,ne,He.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const be=de.update(C),Be=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),He.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),He.copy(be.boundingSphere.center)),He.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Be)){const Oe=be.groups;for(let at=0,st=Oe.length;at<st;at++){const We=Oe[at],mt=Be[We.materialIndex];mt&&mt.visible&&y.push(C,be,mt,ne,He.z,We)}}else Be.visible&&y.push(C,be,Be,ne,He.z,null)}}const Ee=C.children;for(let be=0,Be=Ee.length;be<Be;be++)Si(Ee[be],X,ne,$)}function Tr(C,X,ne,$){const q=C.opaque,Ee=C.transmissive,be=C.transparent;v.setupLightsView(ne),fe===!0&&ze.setGlobalState(R.clippingPlanes,ne),$&&qe.viewport(F.copy($)),q.length>0&&Wi(q,X,ne),Ee.length>0&&Wi(Ee,X,ne),be.length>0&&Wi(be,X,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function wr(C,X,ne,$){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[$.id]===void 0&&(v.state.transmissionRenderTarget[$.id]=new Qr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ja:Hi,minFilter:$r,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[$.id],be=$.viewport||F;Ee.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const Be=R.getRenderTarget(),Oe=R.getActiveCubeFace(),at=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(ue),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Ze&&_e.render(ne);const st=R.toneMapping;R.toneMapping=Sr;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),fe===!0&&ze.setGlobalState(R.clippingPlanes,$),Wi(C,ne,$),lt.updateMultisampleRenderTarget(Ee),lt.updateRenderTargetMipmap(Ee),pt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let ft=0,Bt=X.length;ft<Bt;ft++){const Dt=X[ft],Pt=Dt.object,et=Dt.geometry,Nt=Dt.material,gt=Dt.group;if(Nt.side===Oi&&Pt.layers.test($.layers)){const tn=Nt.side;Nt.side=Bn,Nt.needsUpdate=!0,Za(Pt,ne,$,et,Nt,gt),Nt.side=tn,Nt.needsUpdate=!0,mt=!0}}mt===!0&&(lt.updateMultisampleRenderTarget(Ee),lt.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Be,Oe,at),R.setClearColor(ue,he),We!==void 0&&($.viewport=We),R.toneMapping=st}function Wi(C,X,ne){const $=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ee=C.length;q<Ee;q++){const be=C[q],Be=be.object,Oe=be.geometry,at=be.group;let st=be.material;st.allowOverride===!0&&$!==null&&(st=$),Be.layers.test(ne.layers)&&Za(Be,X,ne,Oe,st,at)}}function Za(C,X,ne,$,q,Ee){C.onBeforeRender(R,X,ne,$,q,Ee),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(R,X,ne,$,C,Ee),q.transparent===!0&&q.side===Oi&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,R.renderBufferDirect(ne,X,$,q,C,Ee),q.side=Mr,q.needsUpdate=!0,R.renderBufferDirect(ne,X,$,q,C,Ee),q.side=Oi):R.renderBufferDirect(ne,X,$,q,C,Ee),C.onAfterRender(R,X,ne,$,q,Ee)}function ts(C,X,ne){X.isScene!==!0&&(X=wt);const $=Je.get(C),q=v.state.lights,Ee=v.state.shadowsArray,be=q.state.version,Be=me.getParameters(C,q.state,Ee,X,ne),Oe=me.getProgramCacheKey(Be);let at=$.programs;$.environment=C.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(C.isMeshStandardMaterial?D:zt).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",Ge),at=new Map,$.programs=at);let st=at.get(Oe);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===be)return fi(C,Be),st}else Be.uniforms=me.getUniforms(C),C.onBeforeCompile(Be,R),st=me.acquireProgram(Be,Oe),at.set(Oe,st),$.uniforms=Be.uniforms;const We=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=ze.uniform),fi(C,Be),$.needsLights=$l(C),$.lightsStateVersion=be,$.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=st,$.uniformsList=null,st}function Qa(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Bl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function fi(C,X){const ne=Je.get(C);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Ja(C,X,ne,$,q){X.isScene!==!0&&(X=wt),lt.resetTextureUnits();const Ee=X.fog,be=$.isMeshStandardMaterial?X.environment:null,Be=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:js,Oe=($.isMeshStandardMaterial?D:zt).get($.envMap||be),at=$.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,st=!!ne.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,ft=!!ne.morphAttributes.color;let Bt=Sr;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Bt=R.toneMapping);const Dt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Pt=Dt!==void 0?Dt.length:0,et=Je.get($),Nt=v.state.lights;if(fe===!0&&(Te===!0||C!==E)){const un=C===E&&$.id===N;ze.setState($,C,un)}let gt=!1;$.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Nt.state.version||et.outputColorSpace!==Be||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==Oe||$.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ze.numPlanes||et.numIntersection!==ze.numIntersection)||et.vertexAlphas!==at||et.vertexTangents!==st||et.morphTargets!==We||et.morphNormals!==mt||et.morphColors!==ft||et.toneMapping!==Bt||et.morphTargetsCount!==Pt)&&(gt=!0):(gt=!0,et.__version=$.version);let tn=et.currentProgram;gt===!0&&(tn=ts($,X,q));let ji=!1,Mn=!1,Mi=!1;const It=tn.getUniforms(),hn=et.uniforms;if(qe.useProgram(tn.program)&&(ji=!0,Mn=!0,Mi=!0),$.id!==N&&(N=$.id,Mn=!0),ji||E!==C){qe.buffers.depth.getReversed()?(ye.copy(C.projectionMatrix),bx(ye),Nx(ye),It.setValue(k,"projectionMatrix",ye)):It.setValue(k,"projectionMatrix",C.projectionMatrix),It.setValue(k,"viewMatrix",C.matrixWorldInverse);const rn=It.map.cameraPosition;rn!==void 0&&rn.setValue(k,Ue.setFromMatrixPosition(C.matrixWorld)),Ct.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&It.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Mn=!0,Mi=!0)}if(q.isSkinnedMesh){It.setOptional(k,q,"bindMatrix"),It.setOptional(k,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),It.setValue(k,"boneTexture",un.boneTexture,lt))}q.isBatchedMesh&&(It.setOptional(k,q,"batchingTexture"),It.setValue(k,"batchingTexture",q._matricesTexture,lt),It.setOptional(k,q,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",q._indirectTexture,lt),It.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",q._colorsTexture,lt));const nn=ne.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Fe.update(q,ne,tn),(Mn||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,It.setValue(k,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(hn.envMap.value=Oe,hn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),Mn&&(It.setValue(k,"toneMappingExposure",R.toneMappingExposure),et.needsLights&&eo(hn,Mi),Ee&&$.fog===!0&&oe.refreshFogUniforms(hn,Ee),oe.refreshMaterialUniforms(hn,$,V,ce,v.state.transmissionRenderTarget[C.id]),Bl.upload(k,Qa(et),hn,lt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bl.upload(k,Qa(et),hn,lt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&It.setValue(k,"center",q.center),It.setValue(k,"modelViewMatrix",q.modelViewMatrix),It.setValue(k,"normalMatrix",q.normalMatrix),It.setValue(k,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const hi=un[rn];W.update(hi,tn),W.bind(hi,tn)}}return tn}function eo(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function $l(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,X,ne){const $=Je.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Je.get(C.texture).__webglTexture=X,Je.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ne,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ne=Je.get(C);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const to=k.createFramebuffer();this.setRenderTarget=function(C,X=0,ne=0){G=C,B=X,U=ne;let $=!0,q=null,Ee=!1,be=!1;if(C){const Oe=Je.get(C);if(Oe.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(Oe.__webglFramebuffer===void 0)lt.setupRenderTarget(C);else if(Oe.__hasExternalTextures)lt.rebindTextures(C,Je.get(C.texture).__webglTexture,Je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Oe.__boundDepthTexture!==We){if(We!==null&&Je.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(be=!0);const st=Je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[X])?q=st[X][ne]:q=st[X],Ee=!0):C.samples>0&&lt.useMultisampledRTT(C)===!1?q=Je.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?q=st[ne]:q=st,F.copy(C.viewport),se.copy(C.scissor),ee=C.scissorTest}else F.copy(O).multiplyScalar(V).floor(),se.copy(ie).multiplyScalar(V).floor(),ee=Le;if(ne!==0&&(q=to),qe.bindFramebuffer(k.FRAMEBUFFER,q)&&$&&qe.drawBuffers(C,q),qe.viewport(F),qe.scissor(se),qe.setScissorTest(ee),Ee){const Oe=Je.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,ne)}else if(be){const Oe=Je.get(C.texture),at=X;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,ne,at)}else if(C!==null&&ne!==0){const Oe=Je.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,ne)}N=-1},this.readRenderTargetPixels=function(C,X,ne,$,q,Ee,be,Be=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){qe.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const at=C.textures[Be],st=at.format,We=at.type;if(!Ct.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-$&&ne>=0&&ne<=C.height-q&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels(X,ne,$,q,Ce.convert(st),Ce.convert(We),Ee))}finally{const at=G!==null?Je.get(G).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(C,X,ne,$,q,Ee,be,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe)if(X>=0&&X<=C.width-$&&ne>=0&&ne<=C.height-q){qe.bindFramebuffer(k.FRAMEBUFFER,Oe);const at=C.textures[Be],st=at.format,We=at.type;if(!Ct.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels(X,ne,$,q,Ce.convert(st),Ce.convert(We),0);const ft=G!==null?Je.get(G).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,ft);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Px(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(mt),k.deleteSync(Bt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ne=0){const $=Math.pow(2,-ne),q=Math.floor(C.image.width*$),Ee=Math.floor(C.image.height*$),be=X!==null?X.x:0,Be=X!==null?X.y:0;lt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,be,Be,q,Ee),qe.unbindTexture()};const no=k.createFramebuffer(),io=k.createFramebuffer();this.copyTextureToTexture=function(C,X,ne=null,$=null,q=0,Ee=null){Ee===null&&(q!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=q,q=0):Ee=0);let be,Be,Oe,at,st,We,mt,ft,Bt;const Dt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(ne!==null)be=ne.max.x-ne.min.x,Be=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,at=ne.min.x,st=ne.min.y,We=ne.isBox3?ne.min.z:0;else{const nn=Math.pow(2,-q);be=Math.floor(Dt.width*nn),Be=Math.floor(Dt.height*nn),C.isDataArrayTexture?Oe=Dt.depth:C.isData3DTexture?Oe=Math.floor(Dt.depth*nn):Oe=1,at=0,st=0,We=0}$!==null?(mt=$.x,ft=$.y,Bt=$.z):(mt=0,ft=0,Bt=0);const Pt=Ce.convert(X.format),et=Ce.convert(X.type);let Nt;X.isData3DTexture?(lt.setTexture3D(X,0),Nt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(lt.setTexture2DArray(X,0),Nt=k.TEXTURE_2D_ARRAY):(lt.setTexture2D(X,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ji=k.getParameter(k.UNPACK_SKIP_PIXELS),Mn=k.getParameter(k.UNPACK_SKIP_ROWS),Mi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,at),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const It=C.isDataArrayTexture||C.isData3DTexture,hn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const nn=Je.get(C),un=Je.get(X),rn=Je.get(nn.__renderTarget),St=Je.get(un.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let hi=0;hi<Oe;hi++)It&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Je.get(C).__webglTexture,q,We+hi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Je.get(X).__webglTexture,Ee,Bt+hi)),k.blitFramebuffer(at,st,be,Be,mt,ft,be,Be,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Je.has(C)){const nn=Je.get(C),un=Je.get(X);qe.bindFramebuffer(k.READ_FRAMEBUFFER,no),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,io);for(let rn=0;rn<Oe;rn++)It?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,q,We+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,q),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,Ee,Bt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,Ee),q!==0?k.blitFramebuffer(at,st,be,Be,mt,ft,be,Be,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Nt,Ee,mt,ft,Bt+rn,at,st,be,Be):k.copyTexSubImage2D(Nt,Ee,mt,ft,at,st,be,Be);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Nt,Ee,mt,ft,Bt,be,Be,Oe,Pt,et,Dt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,Ee,mt,ft,Bt,be,Be,Oe,Pt,Dt.data):k.texSubImage3D(Nt,Ee,mt,ft,Bt,be,Be,Oe,Pt,et,Dt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,mt,ft,be,Be,Pt,et,Dt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,mt,ft,Dt.width,Dt.height,Pt,Dt.data):k.texSubImage2D(k.TEXTURE_2D,Ee,mt,ft,be,Be,Pt,et,Dt);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Mi),Ee===0&&X.generateMipmaps&&k.generateMipmap(Nt),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ne=null,$=null,q=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,ne,$,q)},this.initRenderTarget=function(C){Je.get(C).__webglFramebuffer===void 0&&lt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?lt.setTextureCube(C,0):C.isData3DTexture?lt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?lt.setTexture2DArray(C,0):lt.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){B=0,U=0,G=null,qe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const lg=[{label:"Problem",id:"problem-section"},{label:"Solution",id:"solution-section"},{label:"Demo",id:"demo-section"},{label:"Impact",id:"impact-section"}],cg=["DPDP Act 2023","EU AI Act 2026","OWASP LLM Top 10","Gemini Powered","Zero Code Changes","500+ Prompt Pairs","Hindi · Tamil · Bengali","SDG 10 Aligned","Under 4 Minutes"];function qT(){const[s,e]=$e.useState("problem-section"),n=$e.useMemo(()=>[...cg,...cg],[]);$e.useEffect(()=>{const o=[],l=document.getElementById("hero-canvas");if(l){const g=new fd({canvas:l,antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(393999,1);const x=new nd,S=new On(60,1,.1,1e3);S.position.z=5;const T=()=>{const Ze=l.clientWidth,Ve=l.clientHeight||window.innerHeight;g.setSize(Ze,Ve,!1),S.aspect=Ze/Ve,S.updateProjectionMatrix()};T(),window.addEventListener("resize",T),x.fog=new _f(393999,.05);const w=120,y=new Wl(.04,8,8),v=new vr({color:8353757}),L=[],b=[];for(let Ze=0;Ze<w;Ze+=1){const Ve=new An(y,v.clone()),k=Math.acos(-1+2*Ze/w),jt=Math.sqrt(w*Math.PI)*k,pt=2.8+Math.random()*.8;Ve.position.set(pt*Math.sin(k)*Math.cos(jt),pt*Math.sin(k)*Math.sin(jt),pt*Math.cos(k)),Ve.userData={ox:Ve.position.x,oy:Ve.position.y,oz:Ve.position.z,speed:.3+Math.random()*.5,phase:Math.random()*Math.PI*2,amp:.05+Math.random()*.15},b.push(Ve.position.clone()),x.add(Ve),L.push(Ve)}const R=new yn,H=[];for(let Ze=0;Ze<w;Ze+=1)for(let Ve=Ze+1;Ve<w;Ve+=1)b[Ze].distanceTo(b[Ve])<1.3&&(H.push(b[Ze].x,b[Ze].y,b[Ze].z),H.push(b[Ve].x,b[Ve].y,b[Ve].z));const B=new Float32Array(H);R.setAttribute("position",new Rn(B,3));const U=new qg({color:5458615,transparent:!0,opacity:.18}),G=new ay(R,U);x.add(G);const N=new Wl(.55,64,64),E=new vr({color:5458615,transparent:!0,opacity:.35,wireframe:!1}),F=new An(N,E);x.add(F);const se=new yf(.72,2),ee=new vr({color:8353757,wireframe:!0,transparent:!0,opacity:.15}),ue=new An(se,ee);x.add(ue);const he=new Fa(1.4,.008,8,120),ae=new vr({color:11512300,transparent:!0,opacity:.25}),ce=new An(he,ae);ce.rotation.x=Math.PI/2,x.add(ce);const V=new Fa(1.9,.005,8,120),le=new vr({color:13915006,transparent:!0,opacity:.15}),re=new An(V,le);re.rotation.x=Math.PI/3,re.rotation.y=Math.PI/5,x.add(re);const O=600,ie=new yn,Le=new Float32Array(O*3);for(let Ze=0;Ze<O;Ze+=1)Le[Ze*3]=(Math.random()-.5)*14,Le[Ze*3+1]=(Math.random()-.5)*10,Le[Ze*3+2]=(Math.random()-.5)*10;ie.setAttribute("position",new Rn(Le,3));const J=new Ol({color:8353757,size:.025,transparent:!0,opacity:.6}),fe=new sd(ie,J);x.add(fe);let Te=0,ye=0;const Ae=Ze=>{Te=(Ze.clientX/window.innerWidth-.5)*2,ye=-(Ze.clientY/window.innerHeight-.5)*2};document.addEventListener("mousemove",Ae);let Ue=0,He=0;const wt=()=>{He=window.requestAnimationFrame(wt),Ue+=.008,F.rotation.y=Ue*.4,F.rotation.x=Ue*.2,ue.rotation.y=-Ue*.3,ue.rotation.z=Ue*.1,ce.rotation.z=Ue*.2,re.rotation.y=Ue*.15,re.rotation.x=Ue*.1,L.forEach(Ze=>{const Ve=Ze.userData;Ze.position.x=Ve.ox+Math.sin(Ue*Ve.speed+Ve.phase)*Ve.amp,Ze.position.y=Ve.oy+Math.cos(Ue*Ve.speed+Ve.phase*.7)*Ve.amp}),fe.rotation.y=Ue*.04,S.position.x+=(Te*.6-S.position.x)*.04,S.position.y+=(ye*.4-S.position.y)*.04,S.lookAt(0,0,0),g.render(x,S)};wt(),o.push(()=>{window.cancelAnimationFrame(He),window.removeEventListener("resize",T),document.removeEventListener("mousemove",Ae),y.dispose(),v.dispose(),L.forEach(Ze=>{Ze.material&&typeof Ze.material.dispose=="function"&&Ze.material.dispose()}),R.dispose(),U.dispose(),N.dispose(),E.dispose(),se.dispose(),ee.dispose(),he.dispose(),ae.dispose(),V.dispose(),le.dispose(),ie.dispose(),J.dispose(),g.dispose()})}const u=document.getElementById("scene2-canvas");if(u){const g=new fd({canvas:u,antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(393999,1);const x=u.clientWidth||800,S=500;g.setSize(x,S,!1);const T=new nd,w=new On(70,x/S,.1,100);w.position.z=6;const y=2e3,v=new yn,L=new Float32Array(y*3),b=new Float32Array(y*3),R=new Float32Array(y*3);for(let E=0;E<y;E+=1){L[E*3]=(Math.random()-.5)*18,L[E*3+1]=(Math.random()-.5)*8,L[E*3+2]=(Math.random()-.5)*6,R[E*3]=(Math.random()-.5)*.003,R[E*3+1]=(Math.random()-.5)*.003,R[E*3+2]=(Math.random()-.5)*.002;const F=Math.random();F<.5?(b[E*3]=.498,b[E*3+1]=.467,b[E*3+2]=.867):F<.75?(b[E*3]=.831,b[E*3+1]=.325,b[E*3+2]=.494):(b[E*3]=.937,b[E*3+1]=.624,b[E*3+2]=.153)}v.setAttribute("position",new Rn(L,3)),v.setAttribute("color",new Rn(b,3));const H=new Ol({vertexColors:!0,size:.035,transparent:!0,opacity:.7}),B=new sd(v,H);T.add(B);let U=0,G=0;const N=()=>{G=window.requestAnimationFrame(N),U+=.005;const E=v.attributes.position.array;for(let F=0;F<y;F+=1)E[F*3]+=R[F*3]+Math.sin(U+F*.05)*.001,E[F*3+1]+=R[F*3+1]+Math.cos(U+F*.07)*.001,E[F*3]>9&&(E[F*3]=-9),E[F*3]<-9&&(E[F*3]=9),E[F*3+1]>4&&(E[F*3+1]=-4),E[F*3+1]<-4&&(E[F*3+1]=4);v.attributes.position.needsUpdate=!0,B.rotation.z=Math.sin(U*.3)*.05,g.render(T,w)};N(),o.push(()=>{window.cancelAnimationFrame(G),v.dispose(),H.dispose(),g.dispose()})}const d=document.getElementById("cta-canvas");if(d){const g=new fd({canvas:d,antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(0,0);const x=d.clientWidth||800,S=d.clientHeight||500;g.setSize(x,S,!1);const T=new nd,w=new On(60,x/S,.1,100);w.position.z=5;const y=[],v=[];for(let E=0;E<12;E+=1){const F=.4+E*.3,se=new Fa(F,.003+E*.001,8,120),ee=new vr({color:E%2===0?8353757:13915006,transparent:!0,opacity:.15-E*.008}),ue=new An(se,ee);ue.userData={speed:(.5+E*.08)*(E%2?1:-1),tilt:E*.12},T.add(ue),y.push(se),v.push(ee)}const L=800,b=new yn,R=new Float32Array(L*3);for(let E=0;E<L;E+=1)R[E*3]=(Math.random()-.5)*12,R[E*3+1]=(Math.random()-.5)*8,R[E*3+2]=(Math.random()-.5)*6;b.setAttribute("position",new Rn(R,3));const H=new Ol({color:8353757,size:.02,transparent:!0,opacity:.4}),B=new sd(b,H);T.add(B);let U=0,G=0;const N=()=>{G=window.requestAnimationFrame(N),U+=.008,T.children.forEach(E=>{E.userData&&E.userData.speed&&(E.rotation.z+=E.userData.speed*.01,E.rotation.x=Math.sin(U*.3)*E.userData.tilt)}),g.render(T,w)};N(),o.push(()=>{window.cancelAnimationFrame(G),y.forEach(E=>E.dispose()),v.forEach(E=>E.dispose()),b.dispose(),H.dispose(),g.dispose()})}const h=new IntersectionObserver(g=>{g.forEach((x,S)=>{x.isIntersecting&&window.setTimeout(()=>{x.target.classList.add("vis")},S*60)})},{threshold:.08});document.querySelectorAll(".reveal").forEach(g=>h.observe(g));const m=new IntersectionObserver(g=>{g.forEach(x=>{x.isIntersecting&&e(x.target.id)})},{threshold:.4});lg.forEach(g=>{const x=document.getElementById(g.id);x&&m.observe(x)});const _=window.setTimeout(()=>{const g=document.getElementById("b1"),x=document.getElementById("b2");g&&(g.style.width="74%"),x&&(x.style.width="18%")},1600);return o.push(()=>{h.disconnect(),m.disconnect(),window.clearTimeout(_)}),()=>{o.forEach(g=>g())}},[]);const r=o=>{e(o);const l=document.getElementById(o);if(!l)return;const d=l.getBoundingClientRect().top+window.scrollY-92;window.scrollTo({top:d,behavior:"smooth"})};return P.jsxs("div",{className:"page",children:[P.jsxs("nav",{className:"nav",children:[P.jsx("div",{className:"nlogo",children:"SamataAI"}),P.jsx("div",{className:"npills",children:lg.map(o=>P.jsx("button",{className:s===o.id?"np a":"np",onClick:()=>r(o.id),type:"button",children:o.label},o.id))}),P.jsx("button",{className:"nbtn",type:"button",children:"Request Audit"})]}),P.jsxs("div",{className:"hero-wrap",style:{position:"relative",overflow:"hidden"},children:[P.jsx("canvas",{id:"hero-canvas"}),P.jsx("div",{className:"hero-overlay",children:P.jsxs("div",{className:"scroll-hint",style:{position:"absolute",bottom:"32px",left:"50%",transform:"translateX(-50%)"},children:[P.jsx("span",{children:"Scroll"}),P.jsx("div",{className:"scroll-line"})]})})]}),P.jsx("div",{className:"ticker-outer",children:P.jsx("div",{className:"ticker-inner",id:"tkr",children:n.map((o,l)=>P.jsxs("span",{className:"ti",children:[P.jsx("em",{children:"⬡"}),o]},`${o}-${l}`))})}),P.jsxs("div",{className:"scene2-wrap",id:"problem-section",style:{position:"relative"},children:[P.jsx("canvas",{id:"scene2-canvas"}),P.jsxs("div",{className:"scene2-text reveal",style:{position:"absolute",top:"50%",left:"60px",transform:"translateY(-50%)",zIndex:3,maxWidth:"400px"},children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"The Problem"]}),P.jsxs("div",{className:"st",style:{fontSize:"clamp(24px,3.5vw,42px)"},children:["Invisible bias.",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"Automated at scale."})]}),P.jsx("p",{className:"sd",style:{fontSize:"15px"},children:"AI learns from historical data. India's data carries decades of discrimination. That discrimination is now running on servers at scale — making real decisions about real people."})]})]}),P.jsxs("div",{className:"section reveal",children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"Attack Scenarios"]}),P.jsxs("div",{className:"st",children:["Five domains.",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"All broken."})]}),P.jsxs("div",{className:"bento",children:[P.jsxs("div",{className:"bc bc-a",style:{background:"linear-gradient(145deg,rgba(83,74,183,.14),rgba(212,83,126,.07))"},children:[P.jsx("div",{className:"bc-big",children:"2×"}),P.jsx("div",{className:"bc-t",children:"Loan approval disparity"}),P.jsx("div",{className:"bc-d2",children:"Upper-caste applicants approved at double the rate of SC/ST applicants with identical financial profiles. The AI doesn't see people — it replays biased history."}),P.jsx("span",{className:"sev sc",children:"Critical"})]}),P.jsxs("div",{className:"bc bc-b",children:[P.jsx("div",{className:"bc-t",style:{fontFamily:"'Unbounded',sans-serif",fontSize:"17px",fontWeight:700,letterSpacing:"-.4px"},children:"Education AI pushes women away from STEM"}),P.jsx("div",{className:"bc-d2",style:{marginTop:"10px"},children:"Student counseling bots discourage female applicants from engineering programs based solely on gender markers. The gender gap gets automated into every interaction."}),P.jsx("span",{className:"sev sh",children:"High Severity"})]}),P.jsxs("div",{className:"bc bc-c",children:[P.jsx("div",{className:"bc-t",style:{fontFamily:"'Unbounded',sans-serif",fontSize:"17px",fontWeight:700,letterSpacing:"-.4px"},children:"Healthcare triage deprioritizes lower-income patients"}),P.jsx("div",{className:"bc-d2",style:{marginTop:"10px"},children:"Trained on urban hospital data, triage AI systematically deprioritizes patients from lower-income areas. Unequal healthcare access, now delivered at algorithmic speed."}),P.jsx("span",{className:"sev sc",children:"Critical"})]}),P.jsxs("div",{className:"bc bc-d",children:[P.jsx("div",{className:"bc-t",children:"HR screening"}),P.jsx("div",{className:"bc-d2",children:"Resume filters eliminate candidates based on college names correlated with caste — invisible to every recruiter who trusts the AI output."}),P.jsx("span",{className:"sev sh",children:"High"})]}),P.jsxs("div",{className:"bc bc-e",children:[P.jsx("div",{className:"bc-t",children:"Gov services"}),P.jsx("div",{className:"bc-d2",children:"Scheme eligibility AI denies benefits to religious minorities at disproportionate rates — exclusion by algorithm, at government scale."}),P.jsx("span",{className:"sev sh",children:"High"})]}),P.jsxs("div",{className:"bc bc-f",style:{background:"rgba(239,159,39,.05)",borderColor:"rgba(239,159,39,.14)"},children:[P.jsx("div",{className:"bc-t",style:{color:"#FAC775"},children:"Legal exposure"}),P.jsx("div",{className:"bc-d2",children:"DPDP Act 2023. EU AI Act 2026. OWASP LLM Top 10. Real financial liability. No comprehensive audit tool exists yet."})]})]})]}),P.jsx("div",{id:"solution-section",style:{padding:"110px 60px",background:"rgba(127,119,221,.03)",borderTop:"1px solid rgba(127,119,221,.07)"},className:"reveal",children:P.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"How It Works"]}),P.jsxs("div",{className:"st",children:["Six steps.",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"Zero guesswork."})]}),P.jsxs("div",{className:"flow-grid",children:[P.jsxs("div",{className:"fc",children:[P.jsx("div",{className:"fn",children:"Step 01"}),P.jsx("div",{className:"fring",children:"🔗"}),P.jsx("div",{className:"ft",children:"Connect"}),P.jsx("div",{className:"fd",children:"Link to any deployed AI via API endpoint — zero code changes to the target system required."})]}),P.jsxs("div",{className:"fc",children:[P.jsx("div",{className:"fn",children:"Step 02"}),P.jsx("div",{className:"fring",children:"⚡"}),P.jsx("div",{className:"ft",children:"Probe"}),P.jsx("div",{className:"fd",children:"Gemini generates 500+ demographically varied prompt pairs across gender, caste, religion, income axes."})]}),P.jsxs("div",{className:"fc",children:[P.jsx("div",{className:"fn",children:"Step 03"}),P.jsx("div",{className:"fring",children:"📊"}),P.jsx("div",{className:"ft",children:"Analyze"}),P.jsx("div",{className:"fd",children:"Response pairs statistically compared for demographic-correlated divergence with real significance testing."})]}),P.jsxs("div",{className:"fc",children:[P.jsx("div",{className:"fn",children:"Step 04"}),P.jsx("div",{className:"fring",children:"🎯"}),P.jsx("div",{className:"ft",children:"Score"}),P.jsx("div",{className:"fd",children:"Each disparity classified by severity, affected group, and financial exposure quantified in rupees."})]}),P.jsxs("div",{className:"fc",children:[P.jsx("div",{className:"fn",children:"Step 05"}),P.jsx("div",{className:"fring",children:"📋"}),P.jsx("div",{className:"ft",children:"Report"}),P.jsx("div",{className:"fd",children:"Fairness Dashboard surfaces plain-language findings. PDF exportable aligned to DPDP Act 2023."})]}),P.jsxs("div",{className:"fc",children:[P.jsx("div",{className:"fn",children:"Step 06"}),P.jsx("div",{className:"fring",children:"✅"}),P.jsx("div",{className:"ft",children:"Fix & Verify"}),P.jsx("div",{className:"fd",children:"Remediation Engine generates prompt patches and auto-reruns the full probe to confirm resolution."})]})]})]})}),P.jsxs("div",{className:"section reveal",children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"Core Modules"]}),P.jsxs("div",{className:"st",children:["Four engines.",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"One mission."})]}),P.jsxs("div",{className:"mg",children:[P.jsxs("div",{className:"mc",children:[P.jsx("div",{className:"mac",style:{background:"radial-gradient(circle,#534AB7,transparent)"}}),P.jsx("div",{className:"mn",children:"Module 01"}),P.jsx("div",{className:"mt",children:"Bias Probe Engine"}),P.jsx("div",{className:"md",children:"Gemini 1.5 Flash generates semantically equivalent prompts differing only in demographic signals. Fires 500+ pairs at any target across gender, caste, religion, income — in Hindi, Tamil, Bengali and more."}),P.jsxs("div",{className:"mts",children:[P.jsx("span",{className:"mtag",children:"Gemini 1.5 Flash"}),P.jsx("span",{className:"mtag",children:"500+ pairs"}),P.jsx("span",{className:"mtag",children:"Multilingual"})]})]}),P.jsxs("div",{className:"mc",children:[P.jsx("div",{className:"mac",style:{background:"radial-gradient(circle,#D4537E,transparent)"}}),P.jsx("div",{className:"mn",children:"Module 02"}),P.jsx("div",{className:"mt",children:"Fairness Dashboard"}),P.jsx("div",{className:"md",children:"Translates raw statistics into actionable findings for compliance teams, not data scientists. Bias Risk Score 0–100, visual charts, flagged pairs side-by-side, exportable PDF for DPDP Act 2023."}),P.jsxs("div",{className:"mts",children:[P.jsx("span",{className:"mtag",children:"Score 0–100"}),P.jsx("span",{className:"mtag",children:"Flutter"}),P.jsx("span",{className:"mtag",children:"DPDP Aligned"})]})]}),P.jsxs("div",{className:"mc",children:[P.jsx("div",{className:"mac",style:{background:"radial-gradient(circle,#EF9F27,transparent)"}}),P.jsx("div",{className:"mn",children:"Module 03"}),P.jsx("div",{className:"mt",children:"Financial Impact Scorer"}),P.jsx("div",{className:"md",children:'Every bias flag becomes a rupee-denominated exposure estimate. "This gender bias carries ₹18.4 Lakh DPDP Act exposure affecting 12,000 female users annually." Concrete. Immediate.'}),P.jsxs("div",{className:"mts",children:[P.jsx("span",{className:"mtag",children:"₹ Exposure"}),P.jsx("span",{className:"mtag",children:"DPDP Fines"}),P.jsx("span",{className:"mtag",children:"Reputational Risk"})]})]}),P.jsxs("div",{className:"mc",children:[P.jsx("div",{className:"mac",style:{background:"radial-gradient(circle,#AFA9EC,transparent)"}}),P.jsx("div",{className:"mn",children:"Module 04"}),P.jsx("div",{className:"mt",children:"Remediation Engine"}),P.jsx("div",{className:"md",children:"Generates corrective system prompt patches, auto-reruns the Bias Probe after applying changes, and tracks score improvement over time. 74/100 High → 18/100 Low. Confirmed."}),P.jsxs("div",{className:"mts",children:[P.jsx("span",{className:"mtag",children:"Auto-retest"}),P.jsx("span",{className:"mtag",children:"Prompt Patches"}),P.jsx("span",{className:"mtag",children:"Tracking"})]})]})]})]}),P.jsx("div",{id:"demo-section",style:{padding:"110px 60px",background:"rgba(83,74,183,.04)",borderTop:"1px solid rgba(127,119,221,.07)"},className:"reveal",children:P.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"Live Demo"]}),P.jsxs("div",{className:"st",children:["Caught in",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"3 minutes 47 seconds."})]}),P.jsxs("div",{className:"demo-wrap",children:[P.jsxs("div",{className:"term",children:[P.jsxs("div",{className:"tb",children:[P.jsx("div",{className:"td_ tr"}),P.jsx("div",{className:"td_ ty"}),P.jsx("div",{className:"td_ tg"}),P.jsx("span",{className:"tname",children:"samataai-probe · student-loan-advisory"})]}),P.jsxs("div",{className:"tbody",children:[P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"cmd",children:"›"})," Connecting to target API endpoint..."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"ok",children:"✓"})," Attack surface mapped. Model: GPT-4-turbo"]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"cmd",children:"›"})," Generating ",P.jsx("span",{className:"v",children:"100"})," prompt pairs (caste axis)..."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"ok",children:"✓"}),' "Arjun Sharma, ₹5L" vs "Rajan Chamar, ₹5L"']}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"cmd",children:"›"})," Firing probes. Collecting responses..."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"w",children:"⚠"})," Approval language: ",P.jsx("span",{className:"v",children:"81%"})," upper-caste / ",P.jsx("span",{className:"er",children:"43%"})," SC/ST"]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"er",children:"✕"})," CASTE BIAS flagged — ",P.jsx("span",{className:"er",children:"HIGH severity"})]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"cmd",children:"›"})," Running gender axis (100 pairs)..."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"w",children:"⚠"})," Female discouragement: ",P.jsx("span",{className:"v",children:"67%"})," vs ",P.jsx("span",{className:"er",children:"12%"})," male"]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"er",children:"✕"})," GENDER BIAS flagged — ",P.jsx("span",{className:"er",children:"HIGH severity"})]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"cmd",children:"›"})," Generating remediation patch..."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"ok",children:"✓"})," Patch applied. Re-running full probe set..."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"ok",children:"✓"})," ",P.jsx("span",{className:"w",children:"74 HIGH"})," → ",P.jsx("span",{className:"ok",children:"18 LOW"}),". Both flags resolved."]}),P.jsxs("div",{className:"tl",children:[P.jsx("span",{className:"ok",children:"✓"})," Audit complete in 3m 47s ",P.jsx("span",{className:"blk"})]})]})]}),P.jsxs("div",{className:"rcol",children:[P.jsxs("div",{className:"rc",children:[P.jsxs("div",{className:"rh",children:[P.jsx("span",{className:"rl",children:"Pre-remediation bias score"}),P.jsx("span",{className:"rb rbh",children:"High Risk"})]}),P.jsx("div",{className:"btrack",children:P.jsx("div",{className:"bfill bfh",id:"b1",style:{width:"0%"}})}),P.jsxs("div",{className:"rf",children:[P.jsx("span",{children:"74 / 100"}),P.jsx("span",{children:"2 critical flags"})]})]}),P.jsxs("div",{className:"rc",children:[P.jsxs("div",{className:"rh",children:[P.jsx("span",{className:"rl",children:"Post-remediation bias score"}),P.jsx("span",{className:"rb rbl",children:"Low Risk"})]}),P.jsx("div",{className:"btrack",children:P.jsx("div",{className:"bfill bfl",id:"b2",style:{width:"0%"}})}),P.jsxs("div",{className:"rf",children:[P.jsx("span",{children:"18 / 100"}),P.jsx("span",{children:"0 flags"})]})]}),P.jsxs("div",{className:"imp",children:[P.jsx("div",{className:"in",children:"₹74 Lakh"}),P.jsx("div",{className:"it",children:"DPDP Act exposure detected and eliminated in under 4 minutes. Zero ML expertise required."})]}),P.jsxs("div",{className:"rc",children:[P.jsxs("div",{className:"rh",children:[P.jsx("span",{className:"rl",children:"Audit duration"}),P.jsx("span",{className:"rb rbl",children:"Complete"})]}),P.jsx("div",{style:{fontFamily:"'Unbounded',sans-serif",fontSize:"36px",fontWeight:900,color:"#AFA9EC",marginTop:"8px"},children:"3m 47s"}),P.jsx("div",{style:{fontSize:"12px",color:"rgba(175,169,236,.35)",marginTop:"4px"},children:"Connection → Remediation confirmed"})]})]})]})]})}),P.jsxs("div",{className:"section reveal",id:"impact-section",children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"Impact"]}),P.jsxs("div",{className:"st",children:["Built for the",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"goals that matter."})]}),P.jsxs("div",{className:"sg",children:[P.jsxs("div",{className:"scard s1",children:[P.jsx("div",{className:"sn",children:"10"}),P.jsx("div",{className:"stit",children:"Reduced Inequalities"}),P.jsx("div",{className:"sdesc",children:"Primary SDG. Detects AI discrimination by caste, gender, religion, income — stops inequality from being automated at scale."})]}),P.jsxs("div",{className:"scard s2",children:[P.jsx("div",{className:"sn",children:"3"}),P.jsx("div",{className:"stit",children:"Good Health"}),P.jsx("div",{className:"sdesc",children:"Ensures healthcare AI doesn't deprioritize patients by socioeconomic or geographic origin."})]}),P.jsxs("div",{className:"scard s3",children:[P.jsx("div",{className:"sn",children:"5"}),P.jsx("div",{className:"stit",children:"Gender Equality"}),P.jsx("div",{className:"sdesc",children:"Tests gender disparities in career counseling, loan advisory, and HR AI systems across India."})]}),P.jsxs("div",{className:"scard s4",children:[P.jsx("div",{className:"sn",children:"16"}),P.jsx("div",{className:"stit",children:"Justice & Institutions"}),P.jsx("div",{className:"sdesc",children:"Supports transparent AI governance — verifiable fairness audits for regulators and organizations."})]})]})]}),P.jsx("div",{style:{padding:"100px 60px",background:"rgba(127,119,221,.03)",borderTop:"1px solid rgba(127,119,221,.07)"},className:"reveal",children:P.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:[P.jsxs("div",{className:"chip",children:[P.jsx("div",{className:"cd"}),"Architecture"]}),P.jsxs("div",{className:"st",children:["Google tech.",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"Not a wrapper."})]}),P.jsxs("div",{className:"tg2",children:[P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"🤖"}),P.jsx("div",{className:"tn",children:"Gemini 1.5 Flash"}),P.jsx("div",{className:"tr2",children:"Adversarial generation, classification, remediation via Vertex AI"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"🔥"}),P.jsx("div",{className:"tn",children:"Firebase"}),P.jsx("div",{className:"tr2",children:"Firestore audit storage, Auth for multi-tenant access"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"📱"}),P.jsx("div",{className:"tn",children:"Flutter"}),P.jsx("div",{className:"tr2",children:"Fairness Dashboard — web + mobile, audit wizard, PDF viewer"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"☁"}),P.jsx("div",{className:"tn",children:"Cloud Run"}),P.jsx("div",{className:"tr2",children:"Serverless scanner engine — auto-scaling, pay-per-audit"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"📊"}),P.jsx("div",{className:"tn",children:"BigQuery"}),P.jsx("div",{className:"tr2",children:"Aggregated bias trend analysis across audit sessions"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"🐍"}),P.jsx("div",{className:"tn",children:"Python + FastAPI"}),P.jsx("div",{className:"tr2",children:"Core scanner engine, real significance testing pipeline"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"📄"}),P.jsx("div",{className:"tn",children:"Cloud Functions"}),P.jsx("div",{className:"tr2",children:"DPDP Act & OWASP compliance PDF report generation"})]}),P.jsxs("div",{className:"tcard",children:[P.jsx("div",{className:"tico",children:"🌐"}),P.jsx("div",{className:"tn",children:"Multilingual"}),P.jsx("div",{className:"tr2",children:"Hindi, Tamil, Bengali — where bias manifests most severely"})]})]})]})}),P.jsxs("div",{className:"cta reveal",children:[P.jsx("canvas",{id:"cta-canvas"}),P.jsxs("div",{className:"cta-inner",children:[P.jsxs("div",{className:"chip",style:{display:"inline-flex"},children:[P.jsx("div",{className:"cd"}),"Get Started"]}),P.jsxs("div",{className:"cta-t",children:["The security layer every",P.jsx("br",{}),P.jsx("span",{className:"hl",children:"AI product needs."})]}),P.jsx("p",{className:"cta-s",children:"Connect your deployed AI. Full bias audit in under 4 minutes. No ML expertise. No code changes."}),P.jsxs("div",{className:"cta-row",style:{justifyContent:"center",opacity:1,animation:"none"},children:[P.jsx("button",{className:"btn-p",type:"button",children:"Request Early Access →"}),P.jsx("button",{className:"btn-g",type:"button",children:"View on GitHub"})]})]})]}),P.jsxs("footer",{children:[P.jsx("div",{className:"flogo",children:"SamataAI"}),P.jsx("div",{className:"fcopy",children:"Team Strawhats · Solution Challenge 2026 · Confidential"}),P.jsxs("div",{className:"flinks",children:[P.jsx("a",{href:"#",children:"SDG 10"}),P.jsx("a",{href:"#",children:"DPDP Act"}),P.jsx("a",{href:"#",children:"OWASP"}),P.jsx("a",{href:"#",children:"Privacy"})]})]})]})}function YT(){return P.jsxs(U0,{children:[P.jsx(pd,{path:"/",element:P.jsx(qT,{})}),P.jsx(pd,{path:"*",element:P.jsx(D0,{to:"/",replace:!0})})]})}function $T(){return P.jsx(YT,{})}V_.createRoot(document.getElementById("root")).render(P.jsx(dg.StrictMode,{children:P.jsx(B0,{children:P.jsx($T,{})})}));
//# sourceMappingURL=index-CL43Pojr.js.map
