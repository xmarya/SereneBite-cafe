function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e=globalThis,i={},n={},o=e.parcelRequire71a9;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequire71a9=o),(0,o.register)("2Tywo",function(e,i){function n(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}t(e.exports,"_config",()=>O),t(e.exports,"_isString",()=>F),t(e.exports,"_isUndefined",()=>W),t(e.exports,"_numExp",()=>J),t(e.exports,"_numWithUnitExp",()=>$),t(e.exports,"_relExp",()=>tt),t(e.exports,"gsap",()=>iC),t(e.exports,"_missingPlugin",()=>ts),t(e.exports,"_plugins",()=>tm),t(e.exports,"GSCache",()=>eH),t(e.exports,"_getCache",()=>tb),t(e.exports,"_getProperty",()=>tT),t(e.exports,"_forEachName",()=>tP),t(e.exports,"_round",()=>tL),t(e.exports,"_parseRelative",()=>tC),t(e.exports,"_ticker",()=>eC),t(e.exports,"getUnit",()=>ee),t(e.exports,"_replaceRandom",()=>ed),t(e.exports,"_getSetter",()=>ii),t(e.exports,"PropTween",()=>id),t(e.exports,"_colorExp",()=>eP),t(e.exports,"_colorStringFilter",()=>eM),t(e.exports,"_renderComplexString",()=>is),t(e.exports,"_checkPlugin",()=>eQ),t(e.exports,"_sortPropTweensByPriority",()=>ic);/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var r,s,a,h,u,l,c,d,p,_,f,m,g,v,y,x,w,b,T,P,M,C,S,E,k,/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */z,O={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},A={duration:.5,overwrite:!1,delay:0},B=2*Math.PI,I=B/4,Z=0,R=Math.sqrt,D=Math.cos,N=Math.sin,F=function(t){return"string"==typeof t},j=function(t){return"function"==typeof t},H=function(t){return"number"==typeof t},W=function(t){return void 0===t},U=function(t){return"object"==typeof t},q=function(t){return!1!==t},Y=function(){return"undefined"!=typeof window},V=function(t){return j(t)||F(t)},X="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},G=Array.isArray,K=/(?:-?\.?\d|\.)+/gi,J=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Q=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tt=/[+-]=-?[.\d]+/,te=/[^,'"\[\]\s]+/gi,ti=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tn={},to={},tr=function(t){return(to=tB(t,tn))&&iC},ts=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},th=function(t,e){return t&&(tn[t]=e)&&to&&(to[t]=e)||tn},tu=function(){return 0},tl={suppressEvents:!0,isStart:!0,kill:!1},tc={suppressEvents:!0,kill:!1},td={suppressEvents:!0},tp={},t_=[],tf={},tm={},tg={},tv=30,ty=[],tx="",tw=function(t){var e,i,n=t[0];if(U(n)||j(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(// find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
i=ty.length;i--&&!ty[i].targetTest(n););e=ty[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new eH(t[i],e)))||t.splice(i,1);return t},tb=function(t){return t._gsap||tw(eo(t))[0]._gsap},tT=function(t,e,i){return(i=t[e])&&j(i)?t[e]():W(i)&&t.getAttribute&&t.getAttribute(e)||i},tP=function(t,e){return(t=t.split(",")).forEach(e)||t},tL=function(t){return Math.round(1e5*t)/1e5||0},tM=function(t){return Math.round(1e7*t)/1e7||0},tC=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),"+"===i?t+n:"-"===i?t-n:"*"===i?t*n:t/n},tS=function(t,e){for(//searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
var i=e.length,n=0;0>t.indexOf(e[n])&&++n<i;);return n<i},tE=function(){var t,e,i=t_.length,n=t_.slice(0);for(t=0,tf={},t_.length=0;t<i;t++)(e=n[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},tk=function(t,e,i,n){t_.length&&!w&&tE(),t.render(e,i,n||w&&e<0&&(t._initted||t._startAt)),t_.length&&!w&&tE()},tz=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(te).length<2?e:F(t)?t.trim():t},tO=function(t){return t},tA=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},tB=function(t,e){for(var i in e)t[i]=e[i];return t},tI=function t(e,i){for(var n in i)"__proto__"!==n&&"constructor"!==n&&"prototype"!==n&&(e[n]=U(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},tZ=function(t,e){var i,n={};for(i in t)i in e||(n[i]=t[i]);return n},tR=function(t){var e,i=t.parent||T,n=t.keyframes?(e=G(t.keyframes),function(t,i){for(var n in i)n in t||"duration"===n&&e||"ease"===n||(t[n]=i[n])}):tA;if(q(t.inherit))for(;i;)n(t,i.vars.defaults),i=i.parent||i._dp;return t},tD=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},tN=function(t,e,i,n,o){void 0===i&&(i="_first"),void 0===n&&(n="_last");var r,s=t[n];if(o)for(r=e[o];s&&s[o]>r;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=s,e.parent=e._dp=t,e},tF=function(t,e,i,n){void 0===i&&(i="_first"),void 0===n&&(n="_last");var o=e._prev,r=e._next;o?o._next=r:t[i]===e&&(t[i]=r),r?r._prev=o:t[n]===e&&(t[n]=o),e._next=e._prev=e.parent=null},tj=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},tH=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(// performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
var i=t;i;)i._dirty=1,i=i.parent;return t},tW=function(t){for(var e=t.parent;e&&e.parent;)//sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
e._dirty=1,e.totalDuration(),e=e.parent;return t},tU=function(t,e,i,n){return t._startAt&&(w?t._startAt.revert(tc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},tq=function(t){return t._repeat?tY(t._tTime,t=t.duration()+t._rDelay)*t:0},tY=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},tV=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},tX=function(t){return t._end=tM(t._start+(t._tDur/Math.abs(t._ts||t._rts||1e-8)||0))},tG=function(t,e){// adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=tM(i._time-(t._ts>0?e/t._ts:-(((t._dirty?t.totalDuration():t._tDur)-e)/t._ts))),tX(t),i._dirty||tH(i,t)),t},/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/tK=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(// in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
i=tV(t.rawTime(),e),(!e._dur||et(0,e.totalDuration(),i)-e._tTime>1e-8)&&e.render(i,!0)),tH(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){//in case any of the ancestors had completed but should now be enabled...
if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-.00000001;// helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
}},tJ=function(t,e,i,n){return e.parent&&tj(e),e._start=tM((H(i)?i:i||t!==T?t6(t,i,e):t._time)+e._delay),e._end=tM(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),tN(t,e,"_first","_last",t._sort?"_start":0),t1(e)||(t._recent=e),n||tK(t,e),t._ts<0&&tG(t,t._tTime),t},t$=function(t,e){return(tn.ScrollTrigger||ts("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},tQ=function(t,e,i,n,o){return(e0(t,e,o),t._initted)?!i&&t._pt&&!w&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&E!==eC.frame?(t_.push(t),t._lazy=[o,n],1):void 0:1},t0=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(0>i.rawTime()||t(i))},t1=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},t2=function(t,e,i,n){var o,r,s,a=t.ratio,h=e<0||!e&&(!t._start&&t0(t)&&!(!t._initted&&t1(t))||(t._ts<0||t._dp._ts<0)&&!t1(t))?0:1,u=t._rDelay,l=0;if(u&&t._repeat&&(r=tY(// in case there's a zero-duration tween that has a repeat with a repeatDelay
l=et(0,t._tDur,e),u),t._yoyo&&1&r&&(h=1-h),r!==tY(t._tTime,u)&&(// if iteration changed
a=1-h,t.vars.repeatRefresh&&t._initted&&t.invalidate())),h!==a||w||n||1e-8===t._zTime||!e&&t._zTime){if(!t._initted&&tQ(t,e,n,i,l))return;for(s=t._zTime,t._zTime=e||(i?1e-8:0),i||(i=e&&!s),t.ratio=h,t._from&&(h=1-h),t._time=0,t._tTime=l,o=t._pt;o;)o.r(h,o.d),o=o._next;e<0&&tU(t,e,i,!0),t._onUpdate&&!i&&ef(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ef(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===h&&(h&&tj(t,1),i||w||(ef(t,h?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},t5=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if("isPause"===n.data&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if("isPause"===n.data&&n._start<e)return n;n=n._prev}},t3=function(t,e,i,n){var o=t._repeat,r=tM(e)||0,s=t._tTime/t._tDur;return s&&!n&&(t._time*=r/t._dur),t._dur=r,t._tDur=o?o<0?1e10:tM(r*(o+1)+t._rDelay*o):r,s>0&&!n&&tG(t,t._tTime=t._tDur*s),t.parent&&tX(t),i||tH(t.parent,t),t},t8=function(t){return t instanceof eW?tH(t):t3(t,t._dur)},t4={_start:0,endTime:tu,totalDuration:tu},t6=function t(e,i,n){var o,r,s,a=e.labels,h=e._recent||t4,u=e.duration()>=1e8?h.endTime(!1):e._dur;return F(i)&&(isNaN(i)||i in a)?(//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
r=i.charAt(0),s="%"===i.substr(-1),o=i.indexOf("="),"<"===r||">"===r)?(o>=0&&(i=i.replace(/=/,"")),("<"===r?h._start:h.endTime(h._repeat>=0))+(parseFloat(i.substr(1))||0)*(s?(o<0?h:n).totalDuration()/100:1)):o<0?(i in a||(a[i]=u),a[i]):(r=parseFloat(i.charAt(o-1)+i.substr(o+1)),s&&n&&(r=r/100*(G(n)?n[0]:n).totalDuration()),o>1?t(e,i.substr(0,o-1),n)+r:u+r):null==i?u:+i},t9=function(t,e,i){var n,o,r=H(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s];if(r&&(a.duration=e[1]),a.parent=i,t){for(n=a,o=i;o&&!("immediateRender"in n);)// inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
n=o.vars.defaults||{},o=q(o.vars.inherit)&&o.parent;a.immediateRender=q(n.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new e6(e[0],a,e[s+1])},t7=function(t,e){return t||0===t?e(t):e},et=function(t,e,i){return i<t?t:i>e?e:i},ee=function(t,e){return F(t)&&(e=ti.exec(t))?e[1]:""},ei=[].slice,en=function(t,e){return t&&U(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&U(t[0]))&&!t.nodeType&&t!==P},eo=function(t,e,i){var n;return b&&!e&&b.selector?b.selector(t):F(t)&&!i&&(M||!eS())?ei.call((e||C).querySelectorAll(t),0):G(t)?(void 0===n&&(n=[]),t.forEach(function(t){var e;return F(t)&&!i||en(t,1)?(e=n).push.apply(e,eo(t)):n.push(t)})||n):en(t)?ei.call(t,0):t?[t]:[]},er=function(t){return t=eo(t)[0]||ta("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return eo(e,i.querySelectorAll?i:i===t?ta("Invalid scope")||C.createElement("div"):t)}},es=function(t){return t.sort(function(){return .5-Math.random()})},//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
ea=function(t){if(j(t))return t;var e=U(t)?t:{each:t},i=eR(e.ease),n=e.from||0,o=parseFloat(e.base)||0,r={},s=n>0&&n<1,a=isNaN(n)||s,h=e.axis,u=n,l=n;return F(n)?u=l=({center:.5,edges:.5,end:1})[n]||0:!s&&a&&(u=n[0],l=n[1]),function(t,s,c){var d,p,_,f,m,g,v,y,x,w=(c||e).length,b=r[w];if(!b){if(!(x="auto"===e.grid?0:(e.grid||[1,1e8])[1])){for(v=-1e8;v<(v=c[x++].getBoundingClientRect().left)&&x<w;);x--}for(g=0,b=r[w]=[],d=a?Math.min(x,w)*u-.5:n%x,p=1e8===x?0:a?w*l/x-.5:n/x|0,v=0,y=1e8;g<w;g++)_=g%x-d,f=p-(g/x|0),b[g]=m=h?Math.abs("y"===h?f:_):R(_*_+f*f),m>v&&(v=m),m<y&&(y=m);"random"===n&&es(b),b.max=v-y,b.min=y,b.v=w=(parseFloat(e.amount)||parseFloat(e.each)*(x>w?w-1:h?"y"===h?w/x:x:Math.max(x,w/x))||0)*("edges"===n?-1:1),b.b=w<0?o-w:o,b.u=ee(e.amount||e.each)||0,i=i&&w<0?eI(i):i}return w=(b[t]-b.min)/b.max||0,tM(b.b+(i?i(w):w)*b.v)+b.u;//round in order to work around floating point errors
}},eh=function(t){//pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
var e=Math.pow(10,((t+"").split(".")[1]||"").length);//to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
return function(i){var n=tM(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(H(i)?0:ee(i));// n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
}},eu=function(t,e){var i,n,o=G(t);return!o&&U(t)&&(i=o=t.radius||1e8,t.values?(n=!H((t=eo(t.values))[0]))&&(i*=i):t=eh(t.increment)),t7(e,o?j(t)?function(e){return Math.abs((n=t(e))-e)<=i?n:e}:function(e){for(var o,r,s=parseFloat(n?e.x:e),a=parseFloat(n?e.y:0),h=1e8,u=0,l=t.length;l--;)(o=n?(o=t[l].x-s)*o+(r=t[l].y-a)*r:Math.abs(t[l]-s))<h&&(h=o,u=l);return u=!i||h<=i?t[u]:e,n||u===e||H(e)?u:u+ee(e)}:eh(t))},el=function(t,e,i,n){return t7(G(t)?!e:!0===i?(i=0,!1):!n,function(){return G(t)?t[~~(Math.random()*t.length)]:(n=(i=i||1e-5)<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+.99*i))/i)*i*n)/n})},ec=function(t,e,i){return t7(i,function(i){return t[~~e(i)]})},ed=function(t){for(//replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
var e,i,n,o,r=0,s="";~(e=t.indexOf("random(",r));)n=t.indexOf(")",e),o="["===t.charAt(e+7),i=t.substr(e+7,n-e-7).match(o?te:K),s+=t.substr(r,e-r)+el(o?i:+i[0],o?0:+i[1],+i[2]||1e-5),r=n+1;return s+t.substr(r,t.length-r)},ep=function(t,e,i,n,o){var r=e-t,s=n-i;return t7(o,function(e){return i+((e-t)/r*s||0)})},e_=function(t,e,i){//used for nextLabel() and previousLabel()
var n,o,r,s=t.labels,a=1e8;for(n in s)(o=s[n]-e)<0==!!i&&o&&a>(o=Math.abs(o))&&(r=n,a=o);return r},ef=function(t,e,i){var n,o,r,s=t.vars,a=s[e],h=b,u=t._ctx;if(a)return n=s[e+"Params"],o=s.callbackScope||t,i&&t_.length&&tE(),u&&(b=u),r=n?a.apply(o,n):a.call(o),b=h,r},em=function(t){return tj(t),t.scrollTrigger&&t.scrollTrigger.kill(!!w),1>t.progress()&&ef(t,"onInterrupt"),t},eg=[],ev=function(t){if(Y()&&t){var e=// edge case: some build tools may pass in a null/undefined value
(t=!t.name&&t.default||t).name,i=j(t),Plugin=e&&!i&&t.init?function(){this._props=[]}:t,n={init:tu,render:ia,add:eJ,kill:iu,modifier:ih,rawVars:0},o={targetTest:0,get:0,getSetter:ii,aliases:{},register:0};if(eS(),t!==Plugin){if(tm[e])return;tA(Plugin,tA(tZ(t,n),o)),tB(Plugin.prototype,tB(n,tZ(t,o))),tm[Plugin.prop=e]=Plugin,t.targetTest&&(ty.push(Plugin),tp[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}th(e,Plugin),t.register&&t.register(iC,Plugin,id)}else t&&eg.push(t)},ey={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
ex=function(t,e,i){return(6*(t+=t<0?1:t>1?-1:0)<1?e+(i-e)*t*6:t<.5?i:3*t<2?e+(i-e)*(2/3-t)*6:e)*255+.5|0},ew=function(t,e,i){var n,o,r,s,a,h,u,l,c,d,p=t?H(t)?[t>>16,t>>8&255,255&t]:0:ey.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),ey[t])p=ey[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+//for shorthand like #9F0 or #9F0F (could have alpha)
(n=t.charAt(1))+n+(o=t.charAt(2))+o+(r=t.charAt(3))+r+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[// hex with alpha, like #fd5e53ff
(p=parseInt(t.substr(1,6),16))>>16,p>>8&255,255&p,parseInt(t.substr(7),16)/255];p=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t]}else if("hsl"===t.substr(0,3)){if(p=d=t.match(K),e){if(~t.indexOf("="))return(//if relative values are found, just return the raw strings with the relative prefixes in place.
p=t.match(J),i&&p.length<4&&(p[3]=1),p)}else s=+p[0]%360/360,a=+p[1]/100,o=(h=+p[2]/100)<=.5?h*(a+1):h+a-h*a,n=2*h-o,p.length>3&&(p[3]*=1),p[0]=ex(s+1/3,n,o),p[1]=ex(s,n,o),p[2]=ex(s-1/3,n,o)}else p=t.match(K)||ey.transparent;p=p.map(Number)}return e&&!d&&(h=((u=Math.max(n=p[0]/255,o=p[1]/255,r=p[2]/255))+(l=Math.min(n,o,r)))/2,u===l?s=a=0:(c=u-l,a=h>.5?c/(2-u-l):c/(u+l),s=(u===n?(o-r)/c+(o<r?6:0):u===o?(r-n)/c+2:(n-o)/c+4)*60),p[0]=~~(s+.5),p[1]=~~(100*a+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p},eb=function(t){// strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
var e=[],i=[],n=-1;return t.split(eP).forEach(function(t){var o=t.match($)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},eT=function(t,e,i){var n,o,r,s,a="",h=(t+a).match(eP),u=e?"hsla(":"rgba(",l=0;if(!h)return t;if(h=h.map(function(t){return(t=ew(t,e,1))&&u+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),i&&(r=eb(t),(n=i.c).join(a)!==r.c.join(a)))for(s=(o=t.replace(eP,"1").split($)).length-1;l<s;l++)a+=o[l]+(~n.indexOf(l)?h.shift()||u+"0,0,0,0)":(r.length?r:h.length?h:i).shift());if(!o)for(s=(o=t.split(eP)).length-1;l<s;l++)a+=o[l]+h[l];return a+o[s]},eP=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in ey)e+="|"+t+"\\b";return RegExp(e+")","gi")}(),eL=/hsl[a]?\(/,eM=function(t){var e,i=t.join(" ");if(eP.lastIndex=0,eP.test(i))return e=eL.test(i),t[1]=eT(t[1],e),t[0]=eT(t[0],e,eb(t[1])),!0},eC=(c=Date.now,d=500,p=33,f=_=c(),m=1e3/240,g=1e3/240,v=[],y=function t(e){var i,n,o,a,y=c()-f,x=!0===e;if(y>d&&(_+=y-p),f+=y,((i=(o=f-_)-g)>0||x)&&(a=++h.frame,u=o-1e3*h.time,h.time=o/=1e3,g+=i+(i>=m?4:m-i),n=1),x||(r=s(t)),n)for(l=0;l<v.length;l++)v[l](o,u,a,e)},h={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(t){return u/(1e3/(t||60))},wake:function(){S&&(!M&&Y()&&(C=(P=M=window).document||{},tn.gsap=iC,(P.gsapVersions||(P.gsapVersions=[])).push(iC.version),tr(to||P.GreenSockGlobals||!P.gsap&&P||{}),a=P.requestAnimationFrame,eg.forEach(ev)),r&&h.sleep(),s=a||function(t){return setTimeout(t,g-1e3*h.time+1|0)},z=1,y(2))},sleep:function(){(a?P.cancelAnimationFrame:clearTimeout)(r),z=0,s=tu},lagSmoothing:function(t,e){p=Math.min(e||33,d=t||1/0)},fps:function(t){m=1e3/(t||240),g=1e3*h.time+m},add:function(t,e,i){var n=e?function(e,i,o,r){t(e,i,o,r),h.remove(n)}:t;return h.remove(t),v[i?"unshift":"push"](n),eS(),n},remove:function(t,e){~(e=v.indexOf(t))&&v.splice(e,1)&&l>=e&&l--},_listeners:v}),eS=function(){return!z&&eC.wake()},/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/eE={},ek=/^[\d.\-M][\d.\-,\s]/,ez=/["']/g,eO=function(t){for(//takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
var e,i,n,o={},r=t.substr(1,t.length-3).split(":"),s=r[0],a=1,h=r.length;a<h;a++)i=r[a],e=a!==h-1?i.lastIndexOf(","):i.length,n=i.substr(0,e),o[s]=isNaN(n)?n.replace(ez,"").trim():+n,s=i.substr(e+1).trim();return o},eA=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},eB=function(t){//name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
var e=(t+"").split("("),i=eE[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[eO(e[1])]:eA(t).split(",").map(tz)):eE._CE&&ek.test(t)?eE._CE("",t):i},eI=function(t){return function(e){return 1-t(1-e)}},eZ=function t(e,i){for(var n,o=e._first;o;)o instanceof eW?t(o,i):!o.vars.yoyoEase||o._yoyo&&o._repeat||o._yoyo===i||(o.timeline?t(o.timeline,i):(n=o._ease,o._ease=o._yEase,o._yEase=n,o._yoyo=i)),o=o._next},eR=function(t,e){return t&&(j(t)?t:eE[t]||eB(t))||e},eD=function(t,e,i,n){void 0===i&&(i=function(t){return 1-e(1-t)}),void 0===n&&(n=function(t){return t<.5?e(2*t)/2:1-e((1-t)*2)/2});var o,r={easeIn:e,easeOut:i,easeInOut:n};return tP(t,function(t){for(var e in eE[t]=tn[t]=r,eE[o=t.toLowerCase()]=i,r)eE[o+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=eE[t+"."+e]=r[e]}),r},eN=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t((e-.5)*2)/2}},eF=function t(e,i,n){var o=i>=1?i:1,r=(n||(e?.3:.45))/(i<1?i:1),s=r/B*(Math.asin(1/o)||0),a=function(t){return 1===t?1:o*Math.pow(2,-10*t)*N((t-s)*r)+1},h="out"===e?a:"in"===e?function(t){return 1-a(1-t)}:eN(a);return r=B/r,h.config=function(i,n){return t(e,i,n)},h},ej=function t(e,i){void 0===i&&(i=1.70158);var n=function(t){return t?--t*t*((i+1)*t+i)+1:0},o="out"===e?n:"in"===e?function(t){return 1-n(1-t)}:eN(n);return o.config=function(i){return t(e,i)},o};// a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
tP("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;eD(t+",Power"+(i-1),e?function(t){return Math.pow(t,i)}:function(t){return t},function(t){return 1-Math.pow(1-t,i)},function(t){return t<.5?Math.pow(2*t,i)/2:1-Math.pow((1-t)*2,i)/2})}),eE.Linear.easeNone=eE.none=eE.Linear.easeIn,eD("Elastic",eF("in"),eF("out"),eF()),eq=2*(eU=1/2.75),eY=2.5*eU,eD("Bounce",function(t){return 1-eV(1-t)},eV=function(t){return t<eU?7.5625*t*t:t<eq?7.5625*Math.pow(t-1.5/2.75,2)+.75:t<eY?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*Math.pow(t-2.625/2.75,2)+.984375}),eD("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),eD("Circ",function(t){return-(R(1-t*t)-1)}),eD("Sine",function(t){return 1===t?1:-D(t*I)+1}),eD("Back",ej("in"),ej("out"),ej()),eE.SteppedEase=eE.steps=tn.SteppedEase={config:function(t,e){void 0===t&&(t=1);var i=1/t,n=t+(e?0:1),o=e?1:0;return function(t){return((n*et(0,.99999999,t)|0)+o)*i}}},A.ease=eE["quad.out"],tP("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return tx+=t+","+t+"Params,"});var eH=function(t,e){this.id=Z++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tT,this.set=e?e.getSetter:ii},Animation=/*#__PURE__*/function(){function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(// TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,t3(this,+t.duration,1,1),this.data=t.data,b&&(this._ctx=b,b.data.push(this)),z||eC.wake()}var t=Animation.prototype;return t.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},t.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},t.totalDuration=function(t){return arguments.length?(this._dirty=0,t3(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(t,e){if(eS(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
for(tG(this,t),!i._dp||i.parent||tK(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:-((i.totalDuration()-i._tTime)/i._ts))&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&tJ(this._dp,this,this._start-this._delay)}return this._tTime===t&&(this._dur||e)&&(!this._initted||1e-8!==Math.abs(this._zTime))&&(t||this._initted||!this.add&&!this._ptLookup)||(// check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
this._ts||(this._pTime=t),//if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
//   this._lock = 1;
tk(this,t,e)),this},t.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+tq(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time;// note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
},t.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-t:t)+tq(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(t,e){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*i,e):this._repeat?tY(this._tTime,i)+1:1}// potential future addition:
,t.timeScale=function(t){if(!arguments.length)return -.00000001===this._rts?0:this._rts;// recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
if(this._rts===t)return this;var e=this.parent&&this._ts?tV(this.parent._time,this):this._tTime;// make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
return(// future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
//(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
// prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
this._rts=+t||0,this._ts=this._ps||-.00000001===t?0:this._rts,this.totalTime(et(-Math.abs(this._delay),this._tDur,e),!0),tX(this),tW(this))},t.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(eS(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&1e-8!==Math.abs(this._zTime)&&(this._tTime-=1e-8)))),this):this._ps},t.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&tJ(e,this,t-this._delay),this}return this._start},t.endTime=function(t){return this._start+(q(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(t){var e=this.parent||this._dp;// _dp = detached parent
return e?t&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?tV(e.rawTime(t),this):this._tTime:this._tTime},t.revert=function(t){void 0===t&&(t=td);var e=w;return w=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),w=e,this},t.globalTime=function(t){for(var e=this,i=arguments.length?t:e.rawTime();e;)i=e._start+i/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(t):i;// the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
},t.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,t8(this)):-2===this._repeat?1/0:this._repeat},t.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,t8(this),e?this.time(e):this}return this._rDelay},t.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},t.seek=function(t,e){return this.totalTime(t6(this,t),q(e))},t.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,q(e))},t.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},t.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},t.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-.00000001:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-.00000001,this},t.isActive=function(){var t,e=this.parent||this._dp,i=this._start;return!!(!e||this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=i&&t<this.endTime(!0)-1e-8)},t.eventCallback=function(t,e,i){var n=this.vars;return arguments.length>1?(e?(n[t]=e,i&&(n[t+"Params"]=i),"onUpdate"===t&&(this._onUpdate=e)):delete n[t],this):n[t]},t.then=function(t){var e=this;return new Promise(function(i){var n=j(t)?t:tO,o=function(){var t=e.then;e.then=null,j(n)&&(n=n(e))&&(n.then||n===e)&&(e.then=t),i(n),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?o():e._prom=o})},t.kill=function(){em(this)},Animation}();tA(Animation.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-.00000001,_prom:0,_ps:!1,_rts:1});var eW=/*#__PURE__*/function(t){function e(e,i){var o;return void 0===e&&(e={}),(o=t.call(this,e)||this).labels={},o.smoothChildTiming=!!e.smoothChildTiming,o.autoRemoveChildren=!!e.autoRemoveChildren,o._sort=q(e.sortChildren),T&&tJ(e.parent||T,n(o),i),e.reversed&&o.reverse(),e.paused&&o.paused(!0),e.scrollTrigger&&t$(n(o),e.scrollTrigger),o}o(e,t);var i=e.prototype;return i.to=function(t,e,i){return t9(0,arguments,this),this},i.from=function(t,e,i){return t9(1,arguments,this),this},i.fromTo=function(t,e,i,n){return t9(2,arguments,this),this},i.set=function(t,e,i){return e.duration=0,e.parent=this,tR(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new e6(t,e,t6(this,i),1),this},i.call=function(t,e,i){return tJ(this,e6.delayedCall(0,t,e),i)}//ONLY for backward compatibility! Maybe delete?
,i.staggerTo=function(t,e,i,n,o,r,s){return i.duration=e,i.stagger=i.stagger||n,i.onComplete=r,i.onCompleteParams=s,i.parent=this,new e6(t,i,t6(this,o)),this},i.staggerFrom=function(t,e,i,n,o,r,s){return i.runBackwards=1,tR(i).immediateRender=q(i.immediateRender),this.staggerTo(t,e,i,n,o,r,s)},i.staggerFromTo=function(t,e,i,n,o,r,s,a){return n.startAt=i,tR(n).immediateRender=q(n.immediateRender),this.staggerTo(t,e,n,o,r,s,a)},i.render=function(t,e,i){var n,o,r,s,a,h,u,l,c,d,p,_,f=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:tM(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==T&&v>m&&t>=0&&(v=m),v!==this._tTime||i||y){if(f!==this._time&&g&&(//if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
v+=this._time-f,t+=this._time-f),n=v,c=this._start,h=!(l=this._ts),y&&(g||(f=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(//adjust the time for repeats and yoyos
p=this._yoyo,a=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*a+t,e,i);/*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */if(n=tM(v%a),v===m?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
s=this._repeat,n=g):((s=~~(v/a))&&s===v/a&&(n=g,s--),n>g&&(n=g)),d=tY(this._tTime,a),!f&&this._tTime&&d!==s&&this._tTime-d*a-this._dur<=0&&(d=s),p&&1&s&&(n=g-n,_=1),s!==d&&!this._lock){var x=p&&1&d,b=x===(p&&1&s);if(s<d&&(x=!x),f=x?0:v%g?g:v,this._lock=1,this.render(f||(_?0:tM(s*a)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&ef(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),f&&f!==this._time||!this._ts!==h||this.vars.onRepeat&&!this.parent&&!this._act||(g=this._dur,m=this._tDur,b&&(this._lock=2,f=x?g:-.0001,this.render(f,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!h))return this;//in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
eZ(this,_)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(u=t5(this,tM(f),tM(n)))&&(v-=n-(n=u._start)),this._tTime=v,this._time=n,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,f=0),!f&&n&&!e&&!s&&(ef(this,"onStart"),this._tTime!==v))return this;if(n>=f&&t>=0)for(o=this._first;o;){if(r=o._next,(o._act||n>=o._start)&&o._ts&&u!==o){if(o.parent!==this)return this.render(t,e,i);if(o.render(o._ts>0?(n-o._start)*o._ts:(o._dirty?o.totalDuration():o._tDur)+(n-o._start)*o._ts,e,i),n!==this._time||!this._ts&&!h){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
u=0,r&&(v+=this._zTime=-.00000001);break}}o=r}else{o=this._last;for(var P=t<0?t:n;o;){if(r=o._prev,(o._act||P<=o._end)&&o._ts&&u!==o){if(o.parent!==this)return this.render(t,e,i);if(o.render(o._ts>0?(P-o._start)*o._ts:(o._dirty?o.totalDuration():o._tDur)+(P-o._start)*o._ts,e,i||w&&(o._initted||o._startAt)),n!==this._time||!this._ts&&!h){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
u=0,r&&(v+=this._zTime=P?-.00000001:1e-8);break}}o=r}}if(u&&!e&&(this.pause(),u.render(n>=f?0:-.00000001)._zTime=n>=f?1:-1,this._ts))return(//the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
this._start=c,tX(this),this.render(t,e,i));this._onUpdate&&!e&&ef(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&f)&&(c===this._start||Math.abs(l)!==Math.abs(this._ts))&&!this._lock&&(// remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
(t||!g)&&(v===m&&this._ts>0||!v&&this._ts<0)&&tj(this,1),e||t<0&&!f||!v&&!f&&m||(ef(this,v===m&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(v<m&&this.timeScale()>0)&&this._prom()))}return this},i.add=function(t,e){var i=this;if(H(e)||(e=t6(this,e,t)),!(t instanceof Animation)){if(G(t))return t.forEach(function(t){return i.add(t,e)}),this;if(F(t))return this.addLabel(t,e);if(!j(t))return this;t=e6.delayedCall(0,t)}return this!==t?tJ(this,t,e):this;//don't allow a timeline to be added to itself as a child!
},i.getChildren=function(t,e,i,n){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===i&&(i=!0),void 0===n&&(n=-1e8);for(var o=[],r=this._first;r;)r._start>=n&&(r instanceof e6?e&&o.push(r):(i&&o.push(r),t&&o.push.apply(o,r.getChildren(!0,e,i)))),r=r._next;return o},i.getById=function(t){for(var e=this.getChildren(1,1,1),i=e.length;i--;)if(e[i].vars.id===t)return e[i]},i.remove=function(t){return F(t)?this.removeLabel(t):j(t)?this.killTweensOf(t):(tF(this,t),t===this._recent&&(this._recent=this._last),tH(this))},i.totalTime=function(e,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tM(eC.time-(this._ts>0?e/this._ts:-((this.totalDuration()-e)/this._ts)))),t.prototype.totalTime.call(this,e,i),this._forcing=0,this):this._tTime},i.addLabel=function(t,e){return this.labels[t]=t6(this,e),this},i.removeLabel=function(t){return delete this.labels[t],this},i.addPause=function(t,e,i){var n=e6.delayedCall(0,e||tu,i);return n.data="isPause",this._hasPause=1,tJ(this,n,t6(this,t))},i.removePause=function(t){var e=this._first;for(t=t6(this,t);e;)e._start===t&&"isPause"===e.data&&tj(e),e=e._next},i.killTweensOf=function(t,e,i){for(var n=this.getTweensOf(t,i),o=n.length;o--;)eX!==n[o]&&n[o].kill(t,e);return this},i.getTweensOf=function(t,e){for(var i,n=[],o=eo(t),r=this._first,s=H(e);r;)r instanceof e6?tS(r._targets,o)&&(s?(!eX||r._initted&&r._ts)&&r.globalTime(0)<=e&&r.globalTime(r.totalDuration())>e:!e||r.isActive())&&n.push(r):(i=r.getTweensOf(o,e)).length&&n.push.apply(n,i),r=r._next;return n}// potential future feature - targets() on timelines
,i.tweenTo=function(t,e){e=e||{};var i,n=this,o=t6(n,t),r=e,s=r.startAt,a=r.onStart,h=r.onStartParams,u=r.immediateRender,l=e6.to(n,tA({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:e.duration||Math.abs((o-(s&&"time"in s?s.time:n._time))/n.timeScale())||1e-8,onStart:function(){if(n.pause(),!i){var t=e.duration||Math.abs((o-(s&&"time"in s?s.time:n._time))/n.timeScale());l._dur!==t&&t3(l,t,0,1).render(l._time,!0,!0),i=1}a&&a.apply(l,h||[])}},e));return u?l.render(0):l},i.tweenFromTo=function(t,e,i){return this.tweenTo(e,tA({startAt:{time:t6(this,t)}},i))},i.recent=function(){return this._recent},i.nextLabel=function(t){return void 0===t&&(t=this._time),e_(this,t6(this,t))},i.previousLabel=function(t){return void 0===t&&(t=this._time),e_(this,t6(this,t),1)},i.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+1e-8)},i.shiftChildren=function(t,e,i){void 0===i&&(i=0);for(var n,o=this._first,r=this.labels;o;)o._start>=i&&(o._start+=t,o._end+=t),o=o._next;if(e)for(n in r)r[n]>=i&&(r[n]+=t);return tH(this)},i.invalidate=function(e){var i=this._first;for(this._lock=0;i;)i.invalidate(e),i=i._next;return t.prototype.invalidate.call(this,e)},i.clear=function(t){void 0===t&&(t=!0);for(var e,i=this._first;i;)e=i._next,this.remove(i),i=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),tH(this)},i.totalDuration=function(t){var e,i,n,o=0,r=this._last,s=1e8;if(arguments.length)return this.timeScale((this._repeat<0?this.duration():this.totalDuration())/(this.reversed()?-t:t));if(this._dirty){for(n=this.parent;r;)e=r._prev,r._dirty&&r.totalDuration(),(i=r._start)>s&&this._sort&&r._ts&&!this._lock?(//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
this._lock=1,tJ(this,r,i-r._delay,1)._lock=0):s=i,i<0&&r._ts&&(//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
o-=i,(!n&&!this._dp||n&&n.smoothChildTiming)&&(this._start+=i/this._ts,this._time-=i,this._tTime-=i),this.shiftChildren(-i,!1,-1/0),s=0),r._end>o&&r._ts&&(o=r._end),r=e;t3(this,this===T&&this._time>o?this._time:o,1,1),this._dirty=0}return this._tDur},e.updateRoot=function(t){if(T._ts&&(tk(T,tV(t,T)),E=eC.frame),eC.frame>=tv){tv+=O.autoSleep||120;var e=T._first;if((!e||!e._ts)&&O.autoSleep&&eC._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||eC.sleep()}}},e}(Animation);tA(eW.prototype,{_lock:0,_hasPause:0,_forcing:0});var eU,eq,eY,eV,eX,eG,eK=function(t,e,i,n,o,r,s){//note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
var a,h,u,l,c,d,p,_,f=new id(this._pt,t,e,0,1,is,null,o),m=0,g=0;for(f.b=i,f.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=ed(n)),r&&(r(_=[i,n],t,e),i=_[0],n=_[1]),h=i.match(Q)||[];a=Q.exec(n);)l=a[0],c=n.substring(m,a.index),u?u=(u+1)%5:"rgba("===c.substr(-5)&&(u=1),l!==h[g++]&&(d=parseFloat(h[g-1])||0,f._pt={_next:f._pt,p:c||1===g?c:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:d,c:"="===l.charAt(1)?tC(d,l)-d:parseFloat(l)-d,m:u&&u<4?Math.round:0},m=Q.lastIndex);return f.c=m<n.length?n.substring(m,n.length):"",f.fp=s,(tt.test(n)||p)&&(f.e=0),this._pt=f,f},eJ=function(t,e,i,n,o,r,s,a,h,u){j(n)&&(n=n(o||0,t,r));var l,c=t[e],d="get"!==i?i:j(c)?h?t[e.indexOf("set")||!j(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():c,p=j(c)?h?it:e7:e9;if(F(n)&&(~n.indexOf("random(")&&(n=ed(n)),"="===n.charAt(1)&&((l=tC(d,n)+(ee(d)||0))||0===l)&&(n=l)),!u||d!==n||eG)return isNaN(d*n)||""===n?(c||e in t||ts(e,n),eK.call(this,t,e,d,n,p,a||O.stringFilter,h)):(// fun fact: any number multiplied by "" is evaluated as the number 0!
l=new id(this._pt,t,e,+d||0,n-(d||0),"boolean"==typeof c?ir:io,0,p),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},e$=function(t,e,i,n,o){if(j(t)&&(t=e3(t,o,e,i,n)),!U(t)||t.style&&t.nodeType||G(t)||X(t))return F(t)?e3(t,o,e,i,n):t;var r,s={};for(r in t)s[r]=e3(t[r],o,e,i,n);return s},eQ=function(t,e,i,n,o,r){var s,a,h,u;if(tm[t]&&!1!==(s=new tm[t]).init(o,s.rawVars?e[t]:e$(e[t],n,o,r,i),i,n,r)&&(i._pt=a=new id(i._pt,o,t,0,1,s.render,s,0,s.priority),i!==k))for(h=i._ptLookup[i._targets.indexOf(o)],u=s._props.length;u--;)h[s._props[u]]=a;return s},e0=function t(e,i,n){var o,r,s,a,h,u,l,c,d,p,_,f,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,P=g.lazy,M=g.onUpdate,C=g.onUpdateParams,S=g.callbackScope,E=g.runBackwards,k=g.yoyoEase,z=g.keyframes,O=g.autoRevert,B=e._dur,I=e._startAt,Z=e._targets,R=e.parent,D=R&&"nested"===R.data?R.vars.targets:Z,N="auto"===e._overwrite&&!x,F=e.timeline;if(!F||z&&v||(v="none"),e._ease=eR(v,A.ease),e._yEase=k?eI(eR(!0===k?v:k,A.ease)):0,k&&e._yoyo&&!e._repeat&&(//there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!F&&!!g.runBackwards,!F||z&&!g.stagger){if(f=//if there's an internal timeline, skip all the parsing because we passed that task down the chain.
(c=Z[0]?tb(Z[0]).harness:0)&&g[c.prop],o=tZ(g,tp),I&&(I._zTime<0&&I.progress(1),i<0&&E&&b&&!O?I.render(-1,!0):I.revert(E&&B?tc:tl),// don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
I._lazy=0),y){if(tj(e._startAt=e6.set(Z,tA({data:"isStart",overwrite:!1,parent:R,immediateRender:!0,lazy:!I&&q(P),startAt:null,delay:0,onUpdate:M,onUpdateParams:C,callbackScope:S,stagger:0},y))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(w||!b&&!O)&&e._startAt.revert(tc),b&&B&&i<=0&&n<=0){// check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
i&&(e._zTime=i);return;//we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
}}else if(E&&B&&!I){if(i&&(b=!1),s=tA({overwrite:!1,data:"isFromStart",//we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
lazy:b&&!I&&q(P),immediateRender:b,//zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
stagger:0,parent:R//ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
},o),f&&(s[c.prop]=f),tj(e._startAt=e6.set(Z,s)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(w?e._startAt.revert(tc):e._startAt.render(-1,!0)),e._zTime=i,b){if(!i)return}else t(e._startAt,1e-8,1e-8);//ensures that the initial values are recorded
}for(r=0,e._pt=e._ptCache=0,P=B&&q(P)||P&&!B;r<Z.length;r++){if(l=(h=Z[r])._gsap||tw(Z)[r]._gsap,e._ptLookup[r]=p={},tf[l.id]&&t_.length&&tE(),_=D===Z?r:D.indexOf(h),c&&!1!==(d=new c).init(h,f||o,e,_,D)&&(e._pt=a=new id(e._pt,h,d.name,0,1,d.render,d,0,d.priority),d._props.forEach(function(t){p[t]=a}),d.priority&&(u=1)),!c||f)for(s in o)tm[s]&&(d=eQ(s,o,e,_,h,D))?d.priority&&(u=1):p[s]=a=eJ.call(e,h,s,"get",o[s],_,D,0,g.stringFilter);e._op&&e._op[r]&&e.kill(h,e._op[r]),N&&e._pt&&(eX=e,T.killTweensOf(h,p,e.globalTime(i)),m=!e.parent,eX=0),e._pt&&P&&(tf[l.id]=1)}u&&ic(e),e._onInit&&e._onInit(e)}e._onUpdate=M,e._initted=(!e._op||e._pt)&&!m,z&&i<=0&&F.render(1e8,!0,!0)},e1=function(t,e,i,n,o,r,s){var a,h,u,l,c=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,l=t._targets.length;l--;){if((a=u[l][e])&&a.d&&a.d._pt)for(// it's a plugin, so find the nested PropTween
a=a.d._pt;a&&a.p!==e&&a.fp!==e;)a=a._next;if(!a)return(// there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
// if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
eG=1,t.vars[e]="+=0",e0(t,s),eG=0,1);c.push(a)}for(l=c.length;l--;)(a=(h=c[l])._pt||h).s=(n||0===n)&&!o?n:a.s+(n||0)+r*a.c,a.c=i-a.s,h.e&&(h.e=tL(i)+ee(h.e)),h.b&&(h.b=a.s+ee(h.b))},e2=function(t,e){var i,n,o,r,s=t[0]?tb(t[0]).harness:0,a=s&&s.aliases;if(!a)return e;for(n in i=tB({},e),a)if(n in i)for(o=(r=a[n].split(",")).length;o--;)i[r[o]]=i[n];return i},e5=function(t,e,i,n){var o,r,s=e.ease||n||"power1.inOut";if(G(e))r=i[t]||(i[t]=[]),e.forEach(function(t,i){return r.push({t:i/(e.length-1)*100,v:t,e:s})});else for(o in e)r=i[o]||(i[o]=[]),"ease"===o||r.push({t:parseFloat(t),v:e[o],e:s})},e3=function(t,e,i,n,o){return j(t)?t.call(e,i,n,o):F(t)&&~t.indexOf("random(")?ed(t):t},e8=tx+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",e4={};tP(e8+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return e4[t]=1});var e6=/*#__PURE__*/function(t){function e(e,i,o,r){"number"==typeof i&&(o.duration=i,i=o,o=null);var s,a,h,u,l,c,d,p,_,f=(s=t.call(this,r?i:tR(i))||this).vars,m=f.duration,g=f.delay,v=f.immediateRender,y=f.stagger,w=f.overwrite,b=f.keyframes,P=f.defaults,M=f.scrollTrigger,C=f.yoyoEase,S=i.parent||T,E=(G(e)||X(e)?H(e[0]):"length"in i)?[e]:eo(e);if(s._targets=E.length?tw(E):ta("GSAP target "+e+" not found. https://greensock.com",!O.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=w,b||y||V(m)||V(g)){if(i=s.vars,(a=s.timeline=new eW({data:"nested",defaults:P||{},targets:S&&"nested"===S.data?S.vars.targets:E})).kill(),a.parent=a._dp=n(s),a._start=0,y||V(m)||V(g)){if(l=E.length,p=y&&ea(y),U(y))//users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
for(c in y)~e8.indexOf(c)&&(_||(_={}),_[c]=y[c]);for(h=0;h<l;h++)(u=tZ(i,e4)).stagger=0,C&&(u.yoyoEase=C),_&&tB(u,_),d=E[h],u.duration=+e3(m,n(s),h,d,E),u.delay=(+e3(g,n(s),h,d,E)||0)-s._delay,!y&&1===l&&u.delay&&(// if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
s._delay=g=u.delay,s._start+=g,u.delay=0),a.to(d,u,p?p(h,d,E):0),a._ease=eE.none;a.duration()?m=g=0:s.timeline=0}else if(b){tR(tA(a.vars.defaults,{ease:"none"})),a._ease=eR(b.ease||i.ease||"none");var k,z,A,B=0;if(G(b))b.forEach(function(t){return a.to(E,t,">")}),a.duration();else{for(c in u={},b)"ease"===c||"easeEach"===c||e5(c,b[c],u,b.easeEach);for(c in u)for(h=0,k=u[c].sort(function(t,e){return t.t-e.t}),B=0;h<k.length;h++)(A={ease:(z=k[h]).e,duration:(z.t-(h?k[h-1].t:0))/100*m})[c]=z.v,a.to(E,A,B),B+=A.duration;a.duration()<m&&a.to({},{duration:m-a.duration()})}}m||s.duration(m=a.duration())}else s.timeline=0;//speed optimization, faster lookups (no going up the prototype chain)
return!0!==w||x||(eX=n(s),T.killTweensOf(E),eX=0),tJ(S,n(s),o),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(v||!m&&!b&&s._start===tM(S._time)&&q(v)&&function t(e){return!e||e._ts&&t(e.parent)}(n(s))&&"nested"!==S.data)&&(s._tTime=-.00000001,s.render(Math.max(0,-g)||0)),M&&t$(n(s),M),s}o(e,t);var i=e.prototype;return i.render=function(t,e,i){var n,o,r,s,a,h,u,l,c,d=this._time,p=this._tDur,_=this._dur,f=t<0,m=t>p-1e-8&&!f?p:t<1e-8?0:t;if(_){if(m!==this._tTime||!t||i||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(//this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
n=m,l=this.timeline,this._repeat){if(//adjust the time for repeats and yoyos
s=_+this._rDelay,this._repeat<-1&&f)return this.totalTime(100*s+t,e,i);if(n=tM(m%s),m===p?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
r=this._repeat,n=_):((r=~~(m/s))&&r===m/s&&(n=_,r--),n>_&&(n=_)),(h=this._yoyo&&1&r)&&(c=this._yEase,n=_-n),a=tY(this._tTime,s),n===d&&!i&&this._initted)return(//could be during the repeatDelay part. No need to render and fire callbacks.
this._tTime=m,this);r===a||(l&&this._yEase&&eZ(l,h),!this.vars.repeatRefresh||h||this._lock||(this._lock=i=1,this.render(tM(s*r),!0).invalidate()._lock=0))}if(!this._initted){if(tQ(this,f?t:n,i,e,m))return this._tTime=0,this;if(d!==this._time)return this;if(_!==this._dur)return this.render(t,e,i)}if(this._tTime=m,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=u=(c||this._ease)(n/_),this._from&&(this.ratio=u=1-u),n&&!d&&!e&&!r&&(ef(this,"onStart"),this._tTime!==m))return this;for(o=this._pt;o;)o.r(u,o.d),o=o._next;l&&l.render(t<0?t:!n&&h?-.00000001:l._dur*l._ease(n/this._dur),e,i)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(f&&tU(this,t,e,i),ef(this,"onUpdate")),this._repeat&&r!==a&&this.vars.onRepeat&&!e&&this.parent&&ef(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(f&&!this._onUpdate&&tU(this,t,!0,!0),(t||!_)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&tj(this,1),!e&&!(f&&!d)&&(m||d||h)&&(// if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
ef(this,m===p?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom()))}}else t2(this,t,e,i);return this},i.targets=function(){return this._targets},i.invalidate=function(e){return(e&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e))},i.resetTo=function(t,e,i,n){z||eC.wake(),this._ts||this.play();var o=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return(// possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
// if (_isObject(property)) { // performance optimization
// 	for (p in property) {
// 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
// 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
// 		}
// 	}
// } else {
(this._initted||e0(this,o),e1(this,t,e,i,n,this._ease(o/this._dur),o))?this.resetTo(t,e,i,n):(//}
tG(this,0),this.parent||tN(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))// if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
)},i.kill=function(t,e){if(void 0===e&&(e="all"),!t&&(!e||"all"===e))return this._lazy=this._pt=0,this.parent?em(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,eX&&!0!==eX.vars.overwrite)._first||em(this),this.parent&&i!==this.timeline.totalDuration()&&t3(this,this._dur*this.timeline._tDur/i,0,1),this}var n,o,r,s,a,h,u,l=this._targets,c=t?eo(t):l,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&tD(l,c))return"all"===e&&(this._pt=0),em(this);for(n=this._op=this._op||[],"all"!==e&&(F(e)&&(a={},tP(e,function(t){return a[t]=1}),e=a),e=e2(l,e)),u=l.length;u--;)if(~c.indexOf(l[u]))for(a in o=d[u],"all"===e?(n[u]=e,s=o,r={}):(r=n[u]=n[u]||{},s=e),s)(h=o&&o[a])&&("kill"in h.d&&!0!==h.d.kill(a)||tF(this,h,"_pt"),delete o[a]),"all"!==r&&(r[a]=1);return this._initted&&!this._pt&&p&&em(this),this},e.to=function(t,i){return new e(t,i,arguments[2])},e.from=function(t,e){return t9(1,arguments)},e.delayedCall=function(t,i,n,o){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:i,onReverseComplete:i,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:o});// we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
},e.fromTo=function(t,e,i){return t9(2,arguments)},e.set=function(t,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(t,i)},e.killTweensOf=function(t,e,i){return T.killTweensOf(t,e,i)},e}(Animation);tA(e6.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
tP("staggerTo,staggerFrom,staggerFromTo",function(t){e6[t]=function(){var e=new eW,i=ei.call(arguments,0);return i.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,i)}});/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */var e9=function(t,e,i){return t[e]=i},e7=function(t,e,i){return t[e](i)},it=function(t,e,i,n){return t[e](n.fp,i)},ie=function(t,e,i){return t.setAttribute(e,i)},ii=function(t,e){return j(t[e])?e7:W(t[e])&&t.setAttribute?ie:e9},io=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ir=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},is=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(1===t&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c;//we use the "c" of the PropTween to store the final chunk of non-numeric text.
}e.set(e.t,e.p,n,e)},ia=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},ih=function(t,e,i,n){for(var o,r=this._pt;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},iu=function(t){for(var e,i,n=this._pt;n;)i=n._next,(n.p!==t||n.op)&&n.op!==t?n.dep||(e=1):tF(this,n,"_pt"),n=i;return!e},il=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},ic=function(t){for(var e,i,n,o,r=t._pt;r;){for(e=r._next,i=n;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:o)?r._prev._next=r:n=r,(r._next=i)?i._prev=r:o=r,r=e}t._pt=n},id=/*#__PURE__*/function(){function t(t,e,i,n,o,r,s,a,h){this.t=e,this.s=n,this.c=o,this.p=i,this.r=r||io,this.d=s||this,this.set=a||e9,this.pr=h||0,this._next=t,t&&(t._prev=this)}return t.prototype.modifier=function(t,e,i){this.mSet=this.mSet||this.set,this.set=il,this.m=t,this.mt=i,this.tween=e},t}();//PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
tP(tx+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return tp[t]=1}),tn.TweenMax=tn.TweenLite=e6,tn.TimelineLite=tn.TimelineMax=eW,T=new eW({sortChildren:!1,defaults:A,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),O.stringFilter=eM;var ip=[],i_={},im=[],ig=0,iv=0,iy=function(t){return(i_[t]||im).map(function(t){return t()})},ix=function(){var t=Date.now(),e=[];t-ig>2&&(iy("matchMediaInit"),ip.forEach(function(t){var i,n,o,r,s=t.queries,a=t.conditions;for(n in s)(i=P.matchMedia(s[n]).matches)&&(o=1),i!==a[n]&&(a[n]=i,r=1);r&&(t.revert(),o&&e.push(t))}),iy("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t)}),ig=t,iy("matchMedia"))},iw=/*#__PURE__*/function(){function t(t,e){this.selector=e&&er(e),this.data=[],this._r=[],this.isReverted=!1,this.id=iv++,t&&this.add(t)}var e=t.prototype;return e.add=function(t,e,i){j(t)&&(i=e,e=t,t=j);var n=this,o=function(){var t,o=b,r=n.selector;return o&&o!==n&&o.data.push(n),i&&(n.selector=er(i)),b=n,t=e.apply(n,arguments),j(t)&&n._r.push(t),b=o,n.selector=r,n.isReverted=!1,t};return n.last=o,t===j?o(n):t?n[t]=o:o},e.ignore=function(t){var e=b;b=null,t(this),b=e},e.getTweens=function(){var e=[];return this.data.forEach(function(i){return i instanceof t?e.push.apply(e,i.getTweens()):i instanceof e6&&!(i.parent&&"nested"===i.parent.data)&&e.push(i)}),e},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,e){var i=this;if(t){var n=this.getTweens();this.data.forEach(function(t){// Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return n.splice(n.indexOf(t),1)}))}),n.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(e){return e.t.revert(t)}),this.data.forEach(function(e){return!(e instanceof e6)&&e.revert&&e.revert(t)}),this._r.forEach(function(e){return e(t,i)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),e)for(var o=ip.length;o--;)ip[o].id===this.id&&ip.splice(o,1)},e.revert=function(t){this.kill(t||{})},t}(),ib=/*#__PURE__*/function(){function t(t){this.contexts=[],this.scope=t}var e=t.prototype;return e.add=function(t,e,i){U(t)||(t={matches:t});var n,o,r,s=new iw(0,i||this.scope),a=s.conditions={};for(o in b&&!s.selector&&(s.selector=b.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t,t)"all"===o?r=1:(n=P.matchMedia(t[o]))&&(0>ip.indexOf(s)&&ip.push(s),(a[o]=n.matches)&&(r=1),n.addListener?n.addListener(ix):n.addEventListener("change",ix));return r&&e(s),this}// refresh() {
,e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(e){return e.kill(t,!0)})},t}(),iT={registerPlugin:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(t){return ev(t)})},timeline:function(t){return new eW(t)},getTweensOf:function(t,e){return T.getTweensOf(t,e)},getProperty:function(t,e,i,n){F(t)&&(t=eo(t)[0]);var o=tb(t||{}).get,r=i?tO:tz;return"native"===i&&(i=""),t?e?r((tm[e]&&tm[e].get||o)(t,e,i,n)):function(e,i,n){return r((tm[e]&&tm[e].get||o)(t,e,i,n))}:t},quickSetter:function(t,e,i){if((t=eo(t)).length>1){var n=t.map(function(t){return iC.quickSetter(t,e,i)}),o=n.length;return function(t){for(var e=o;e--;)n[e](t)}}t=t[0]||{};var Plugin=tm[e],r=tb(t),s=r.harness&&(r.harness.aliases||{})[e]||e,a=Plugin?function(e){var n=new Plugin;k._pt=0,n.init(t,i?e+i:e,k,0,[t]),n.render(1,n),k._pt&&ia(1,k)}:r.set(t,s);return Plugin?a:function(e){return a(t,s,i?e+i:e,r,1)}},quickTo:function(t,e,i){var n,o=iC.to(t,tB(((n={})[e]="+=0.1",n.paused=!0,n),i||{})),r=function(t,i,n){return o.resetTo(e,t,i,n)};return r.tween=o,r},isTweening:function(t){return T.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=eR(t.ease,A.ease)),tI(A,t||{})},config:function(t){return tI(O,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,o=t.defaults,r=t.extendTimeline;(n||"").split(",").forEach(function(t){return t&&!tm[t]&&!tn[t]&&ta(e+" effect requires "+t+" plugin.")}),tg[e]=function(t,e,n){return i(eo(t),tA(e||{},o),n)},r&&(eW.prototype[e]=function(t,i,n){return this.add(tg[e](t,U(i)?i:(n=i)&&{},this),n)})},registerEase:function(t,e){eE[t]=eR(e)},parseEase:function(t,e){return arguments.length?eR(t,e):eE},getById:function(t){return T.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var i,n,o=new eW(t);for(o.smoothChildTiming=q(t.smoothChildTiming),T.remove(o),o._dp=0,o._time=o._tTime=T._time,i=T._first;i;)n=i._next,(e||!(!i._dur&&i instanceof e6&&i.vars.onComplete===i._targets[0]))&&tJ(o,i,i._start-i._delay),i=n;return tJ(T,o,0),o},context:function(t,e){return t?new iw(t,e):b},matchMedia:function(t){return new ib(t)},matchMediaRefresh:function(){return ip.forEach(function(t){var e,i,n=t.conditions;for(i in n)n[i]&&(n[i]=!1,e=1);e&&t.revert()})||ix()},addEventListener:function(t,e){var i=i_[t]||(i_[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=i_[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:function t(e,i,n){// NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
var o=i-e;return G(e)?ec(e,t(0,e.length),i):t7(n,function(t){return(o+(t-e)%o)%o+e})},wrapYoyo:function t(e,i,n){var o=i-e,r=2*o;return G(e)?ec(e,t(0,e.length-1),i):t7(n,function(t){return t=(r+(t-e)%r)%r||0,e+(t>o?r-t:t)})},distribute:ea,random:el,snap:eu,normalize:function(t,e,i){return ep(t,e,0,1,i)},getUnit:ee,clamp:function(t,e,i){return t7(i,function(i){return et(t,e,i)})},splitColor:ew,toArray:eo,selector:er,mapRange:ep,pipe:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function(t,e){return function(i){return t(parseFloat(i))+(e||ee(i))}},interpolate:function t(e,i,n,o){var r=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!r){var s,a,h,u,l,c=F(e),d={};if(!0===n&&(o=1)&&(n=null),c)e={p:e},i={p:i};else if(G(e)&&!G(i)){for(a=1,h=[],l=(u=e.length)-2;a<u;a++)h.push(t(e[a-1],e[a]));//build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
u--,r=function(t){var e=Math.min(l,~~(t*=u));return h[e](t-e)},n=i}else o||(e=tB(G(e)?[]:{},e));if(!h){for(s in i)eJ.call(d,e,s,"get",i[s]);r=function(t){return ia(t,d)||(c?e.p:e)}}}return t7(n,r)},shuffle:es},install:tr,effects:tg,ticker:eC,updateRoot:eW.updateRoot,plugins:tm,globalTimeline:T,core:{PropTween:id,globals:th,Tween:e6,Timeline:eW,Animation:Animation,getCache:tb,_removeLinkedListItem:tF,reverting:function(){return w},context:function(t){return t&&b&&(b.data.push(t),t._ctx=b),b},suppressOverwrites:function(t){return x=t}}};tP("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return iT[t]=e6[t]}),eC.add(eW.updateRoot),k=iT.to({},{duration:0});var iP=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},iL=function(t,e){var i,n,o,r=t._targets;for(i in e)for(n=r.length;n--;)(o=t._ptLookup[n][i])&&(o=o.d)&&(o._pt&&(o=iP(o,i)),o&&o.modifier&&o.modifier(e[i],t,r[n],i))},iM=function(t,e){return{name:t,rawVars:1,//don't pre-process function-based values or "random()" strings.
init:function(t,i,n){n._onInit=function(t){var n,o;if(F(i)&&(n={},tP(i,function(t){return n[t]=1}),i=n),e){for(o in n={},i)n[o]=e(i[o]);i=n}iL(t,i)}}}},iC=iT.registerPlugin({name:"attr",init:function(t,e,i,n,o){var r,s,a;for(r in this.tween=i,e)a=t.getAttribute(r)||"",(s=this.add(t,"setAttribute",(a||0)+"",e[r],n,o,0,0,r)).op=r,s.b=a,this._props.push(r)},render:function(t,e){for(var i=e._pt;i;)w?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},iM("roundProps",eh),iM("modifiers"),iM("snap",eu))||iT;//register core plugins
e6.version=eW.version=iC.version="3.12.2",S=1,Y()&&eS(),eE.Power0,eE.Power1,eE.Power2,eE.Power3,eE.Power4,eE.Linear,eE.Quad,eE.Cubic,eE.Quart,eE.Quint,eE.Strong,eE.Elastic,eE.Back,eE.SteppedEase,eE.Bounce,eE.Sine,eE.Expo,eE.Circ});const r=document.querySelectorAll(".about__button"),s=document.querySelectorAll(".content-holder"),a=document.querySelectorAll(".picture-holder"),h=document.querySelectorAll(".hidden-paragraph");function u(t,e="",i="",n=""){"event"===n?h.forEach(e=>{e!==t&&e.classList.add("display-none")}):(s.forEach(e=>{e!==t&&e.parentElement.classList.add("display-none")}),r.forEach(t=>{t!==e&&(t.classList.remove("button--active"),t.setAttribute("aria-expanded","false"),t.setAttribute("data-content-state",""))}),a.forEach(t=>{t!==i&&t.classList.add("display-none")}))}const l=function(t,e=""){if("event"===e){let e=t.querySelector(".hidden-paragraph");e.classList.toggle("display-none"),u(e,"","","event")}else{let e;let i=document.querySelector(`#${t.getAttribute("aria-controls")}`);a.forEach(t=>{t.dataset.img===i.id&&(t.classList.remove("display-none"),e=t)}),t.setAttribute("aria-expanded","true"),t.setAttribute("data-content-state","open"),i.parentElement.classList.toggle("display-none"),t.classList.toggle("button--active"),u(i,t,e)}};/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var c,d,p,_,f,m,g,v=(o("2Tywo"),o("2Tywo")),y={},x=180/Math.PI,w=Math.PI/180,b=Math.atan2,T=/([A-Z])/g,P=/(left|right|width|margin|padding|x)/i,M=/[\s,\(]\S/,C={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},S=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},E=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},k=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},z=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},O=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},A=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},B=function(t,e,i){return t.style[e]=i},I=function(t,e,i){return t.style.setProperty(e,i)},Z=function(t,e,i){return t._gsap[e]=i},R=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},D=function(t,e,i,n,o){var r=t._gsap;r.scaleX=r.scaleY=i,r.renderTransform(o,r)},N=function(t,e,i,n,o){var r=t._gsap;r[e]=i,r.renderTransform(o,r)},F="transform",j=F+"Origin",H=function t(e,i){var n=this,o=this.target,r=o.style;if(e in y&&r){if(this.tfm=this.tfm||{},"transform"===e)return C.transform.split(",").forEach(function(e){return t.call(n,e,i)});if(~(e=C[e]||e).indexOf(",")?e.split(",").forEach(function(t){return n.tfm[t]=ts(o,t)}):this.tfm[e]=o._gsap.x?o._gsap[e]:ts(o,e),this.props.indexOf(F)>=0)return;o._gsap.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(j,i,"")),e=F}(r||i)&&this.props.push(e,i,r[e])},W=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},U=function(){var t,e,i=this.props,n=this.target,o=n.style,r=n._gsap;for(t=0;t<i.length;t+=3)i[t+1]?n[i[t]]=i[t+2]:i[t+2]?o[i[t]]=i[t+2]:o.removeProperty("--"===i[t].substr(0,2)?i[t]:i[t].replace(T,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)r[e]=this.tfm[e];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),(t=m())&&t.isStart||o[F]||(W(o),r.uncache=1)}},q=function(t,e){var i={target:t,props:[],revert:U,save:H};return t._gsap||(0,v.gsap).core.getCache(t),e&&e.split(",").forEach(function(t){return i.save(t)}),i},Y=function(t,e){var i=c.createElementNS?c.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):c.createElement(t);//some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
return i.style?i:c.createElement(t);//some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},V=function t(e,i,n){var o=getComputedStyle(e);return o[i]||o.getPropertyValue(i.replace(T,"-$1").toLowerCase())||o.getPropertyValue(i)||!n&&t(e,G(i)||i,1)||"";//css variables may not need caps swapped out for dashes and lowercase.
},X="O,Moz,ms,Ms,Webkit".split(","),G=function(t,e,i){var n=(e||_).style,o=5;if(t in n&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(X[o]+t in n););return o<0?null:(3===o?"ms":o>=0?X[o]:"")+t},K=function(){"undefined"!=typeof window&&window.document&&(d=(c=window.document).documentElement,_=Y("div")||{style:{}},Y("div"),j=(F=G(F))+"Origin",_.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",g=!!G("perspective"),m=v.gsap.core.reverting,p=1)},J=function t(e){//works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
var i,n=Y("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=this.parentNode,r=this.nextSibling,s=this.style.cssText;if(d.appendChild(n),n.appendChild(this),this.style.display="block",e)try{i=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(t){}else this._gsapBBox&&(i=this._gsapBBox());return o&&(r?o.insertBefore(this,r):o.appendChild(this)),d.removeChild(n),this.style.cssText=s,i},$=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Q=function(t){var e;try{e=t.getBBox();//Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
}catch(i){e=J.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===J||(e=J.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+$(t,["x","cx","x1"])||0,y:+$(t,["y","cy","y1"])||0,width:0,height:0}},tt=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Q(t))},te=function(t,e){if(e){var i=t.style;e in y&&e!==j&&(e=F),i.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),i.removeProperty(e.replace(T,"-$1").toLowerCase())):i.removeAttribute(e)}},ti=function(t,e,i,n,o,r){var s=new v.PropTween(t._pt,e,i,0,1,r?A:O);return t._pt=s,s.b=n,s.e=o,t._props.push(i),s},tn={deg:1,rad:1,turn:1},to={grid:1,flex:1},tr=function t(e,i,n,o){var r,s,a,h,u=parseFloat(n)||0,l=(n+"").trim().substr((u+"").length)||"px",d=_.style,p=P.test(i),f="svg"===e.tagName.toLowerCase(),m=(f?"client":"offset")+(p?"Width":"Height"),g="px"===o,x="%"===o;return o===l||!u||tn[o]||tn[l]?u:("px"===l||g||(u=t(e,i,n,"px")),h=e.getCTM&&tt(e),(x||"%"===l)&&(y[i]||~i.indexOf("adius")))?(r=h?e.getBBox()[p?"width":"height"]:e[m],(0,v._round)(x?u/r*100:u/100*r)):(d[p?"width":"height"]=100+(g?l:o),s=~i.indexOf("adius")||"em"===o&&e.appendChild&&!f?e:e.parentNode,h&&(s=(e.ownerSVGElement||{}).parentNode),s&&s!==c&&s.appendChild||(s=c.body),(a=s._gsap)&&x&&a.width&&p&&a.time===v._ticker.time&&!a.uncache)?(0,v._round)(u/a.width*100):((x||"%"===l)&&!to[V(s,"display")]&&(d.position=V(e,"position")),s===e&&(d.position="static"),s.appendChild(_),r=_[m],s.removeChild(_),d.position="absolute",p&&x&&((a=(0,v._getCache)(s)).time=v._ticker.time,a.width=s[m]),(0,v._round)(g?r*u/100:r&&u?100/r*u:0))},ts=function(t,e,i,n){var o;return p||K(),e in C&&"transform"!==e&&~(e=C[e]).indexOf(",")&&(e=e.split(",")[0]),y[e]&&"transform"!==e?(o=tv(t,n),o="transformOrigin"!==e?o[e]:o.svg?o.origin:ty(V(t,j))+" "+o.zOrigin+"px"):(!(o=t.style[e])||"auto"===o||n||~(o+"").indexOf("calc("))&&(o=tc[e]&&tc[e](t,e,i)||V(t,e)||(0,v._getProperty)(t,e)||("opacity"===e?1:0)),i&&!~(o+"").trim().indexOf(" ")?tr(t,e,o,i)+i:o},ta=function(t,e,i,n){// note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
if(!i||"none"===i){// some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
var o=G(e,t,1),r=o&&V(t,o,1);r&&r!==i?(e=o,i=r):"borderColor"===e&&(i=V(t,"borderTopColor"));// Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
}var s,a,h,u,l,c,d,p,_,f,m,g=new v.PropTween(this._pt,t.style,e,0,1,v._renderComplexString),y=0,x=0;if(g.b=i,g.e=n,i+="","auto"==(n+="")&&(t.style[e]=n,n=V(t,e)||n,t.style[e]=i),s=[i,n],(0,v._colorStringFilter)(s),i=s[0],n=s[1],h=i.match(v._numWithUnitExp)||[],(n.match(v._numWithUnitExp)||[]).length){for(;a=(0,v._numWithUnitExp).exec(n);)d=a[0],_=n.substring(y,a.index),l?l=(l+1)%5:("rgba("===_.substr(-5)||"hsla("===_.substr(-5))&&(l=1),d!==(c=h[x++]||"")&&(u=parseFloat(c)||0,m=c.substr((u+"").length),"="===d.charAt(1)&&(d=(0,v._parseRelative)(u,d)+m),p=parseFloat(d),f=d.substr((p+"").length),y=v._numWithUnitExp.lastIndex-f.length,f||(//if something like "perspective:300" is passed in and we must add a unit to the end
f=f||v._config.units[e]||m,y!==n.length||(n+=f,g.e+=f)),m!==f&&(u=tr(t,e,c,f)||0),// these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
g._pt={_next:g._pt,p:_||1===x?_:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:u,c:p-u,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=y<n.length?n.substring(y,n.length):"";//we use the "c" of the PropTween to store the final part of the string (after the last number)
}else g.r="display"===e&&"none"===n?A:O;return(0,v._relExp).test(n)&&(g.e=0),this._pt=g,g},th={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tu=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return("top"===i||"bottom"===i||"left"===n||"right"===n)&&(//the user provided them in the wrong order, so flip them
t=i,i=n,n=t),e[0]=th[i]||i,e[1]=th[n]||n,e.join(" ")},tl=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i,n,o,r=e.t,s=r.style,a=e.u,h=r._gsap;if("all"===a||!0===a)s.cssText="",n=1;else for(o=(a=a.split(",")).length;--o>-1;)y[i=a[o]]&&(n=1,i="transformOrigin"===i?j:F),te(r,i);n&&(te(r,F),h&&(h.svg&&r.removeAttribute("transform"),tv(r,1),h.uncache=1,W(s)))}},tc={clearProps:function(t,e,i,n,o){if("isFromStart"!==o.data){var r=t._pt=new v.PropTween(t._pt,e,i,0,0,tl);return r.u=n,r.pr=-10,r.tween=o,t._props.push(i),1}}},/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */td=[1,0,0,1,0,0],tp={},t_=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},tf=function(t){var e=V(t,F);return t_(e)?td:e.substr(7).match(v._numExp).map(v._round)},tm=function(t,e){var i,n,o,r,s=t._gsap||(0,v._getCache)(t),a=t.style,h=tf(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(h=[(o=t.transform.baseVal.consolidate().matrix).a,o.b,o.c,o.d,o.e,o.f]).join(",")?td:h:(h!==td||t.offsetParent||t===d||s.svg||(//note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
o=a.display,a.display="block",(i=t.parentNode)&&t.offsetParent||(// note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
r=1,n=t.nextElementSibling,d.appendChild(t)),h=tf(t),o?a.display=o:te(t,"display"),r&&(n?i.insertBefore(t,n):i?i.appendChild(t):d.removeChild(t))),e&&h.length>6?[h[0],h[1],h[4],h[5],h[12],h[13]]:h)},tg=function(t,e,i,n,o,r){var s,a,h,u,l=t._gsap,c=o||tm(t,!0),d=l.xOrigin||0,p=l.yOrigin||0,_=l.xOffset||0,f=l.yOffset||0,m=c[0],g=c[1],v=c[2],y=c[3],x=c[4],w=c[5],b=e.split(" "),T=parseFloat(b[0])||0,P=parseFloat(b[1])||0;i?c!==td&&(a=m*y-g*v)&&(//if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
h=T*(y/a)+P*(-v/a)+(v*w-y*x)/a,u=T*(-g/a)+P*(m/a)-(m*w-g*x)/a,T=h,P=u):(T=(s=Q(t)).x+(~b[0].indexOf("%")?T/100*s.width:T),P=s.y+(~(b[1]||b[0]).indexOf("%")?P/100*s.height:P)),n||!1!==n&&l.smooth?(x=T-d,w=P-p,l.xOffset=_+(x*m+w*v)-x,l.yOffset=f+(x*g+w*y)-w):l.xOffset=l.yOffset=0,l.xOrigin=T,l.yOrigin=P,l.smooth=!!n,l.origin=e,l.originIsAbsolute=!!i,t.style[j]="0px 0px",r&&(ti(r,l,"xOrigin",d,T),ti(r,l,"yOrigin",p,P),ti(r,l,"xOffset",_,l.xOffset),ti(r,l,"yOffset",f,l.yOffset)),t.setAttribute("data-svg-origin",T+" "+P)},tv=function(t,e){var i=t._gsap||new v.GSCache(t);if("x"in i&&!e&&!i.uncache)return i;var n,o,r,s,a,h,u,l,c,d,p,_,f,m,y,T,P,M,C,S,E,k,z,O,A,B,I,Z,R,D,N,H,W=t.style,U=i.scaleX<0,q=getComputedStyle(t),Y=V(t,j)||"0";return n=o=r=h=u=l=c=d=p=0,s=a=1,i.svg=!!(t.getCTM&&tt(t)),q.translate&&(("none"!==q.translate||"none"!==q.scale||"none"!==q.rotate)&&(W[F]=("none"!==q.translate?"translate3d("+(q.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==q.rotate?"rotate("+q.rotate+") ":"")+("none"!==q.scale?"scale("+q.scale.split(" ").join(",")+") ":"")+("none"!==q[F]?q[F]:"")),W.scale=W.rotate=W.translate="none"),m=tm(t,i.svg),i.svg&&(i.uncache?(// if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
A=t.getBBox(),Y=i.xOrigin-A.x+"px "+(i.yOrigin-A.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),tg(t,O||Y,!!O||i.originIsAbsolute,!1!==i.smooth,m)),_=i.xOrigin||0,f=i.yOrigin||0,m!==td&&(M=m[0],C=m[1],S=m[2],E=m[3],n=k=m[4],o=z=m[5],6===m.length?(s=Math.sqrt(M*M+C*C),a=Math.sqrt(E*E+S*S),h=M||C?b(C,M)*x:0,(c=S||E?b(S,E)*x+h:0)&&(a*=Math.abs(Math.cos(c*w))),i.svg&&(n-=_-(_*M+f*S),o-=f-(_*C+f*E))):(H=m[6],D=m[7],I=m[8],Z=m[9],R=m[10],N=m[11],n=m[12],o=m[13],r=m[14],u=(y=b(H,R))*x,y&&(O=k*(T=Math.cos(-y))+I*(P=Math.sin(-y)),A=z*T+Z*P,B=H*T+R*P,I=-(k*P)+I*T,Z=-(z*P)+Z*T,R=-(H*P)+R*T,N=-(D*P)+N*T,k=O,z=A,H=B),l=(y=b(-S,R))*x,y&&(O=M*(T=Math.cos(-y))-I*(P=Math.sin(-y)),A=C*T-Z*P,B=S*T-R*P,N=E*P+N*T,M=O,C=A,S=B),h=(y=b(C,M))*x,y&&(O=M*(T=Math.cos(y))+C*(P=Math.sin(y)),A=k*T+z*P,C=C*T-M*P,z=z*T-k*P,M=O,k=A),u&&Math.abs(u)+Math.abs(h)>359.9&&(//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
u=h=0,l=180-l),s=(0,v._round)(Math.sqrt(M*M+C*C+S*S)),a=(0,v._round)(Math.sqrt(z*z+H*H)),c=Math.abs(y=b(k,z))>2e-4?y*x:0,p=N?1/(N<0?-N:N):0),i.svg&&(//sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!t_(V(t,F)),O&&t.setAttribute("transform",O))),Math.abs(c)>90&&270>Math.abs(c)&&(U?(s*=-1,c+=h<=0?180:-180,h+=h<=0?180:-180):(a*=-1,c+=c<=0?180:-180)),e=e||i.uncache,i.x=n-((i.xPercent=n&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+"px",i.y=o-((i.yPercent=o&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-o)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+"px",i.z=r+"px",i.scaleX=(0,v._round)(s),i.scaleY=(0,v._round)(a),i.rotation=(0,v._round)(h)+"deg",i.rotationX=(0,v._round)(u)+"deg",i.rotationY=(0,v._round)(l)+"deg",i.skewX=c+"deg",i.skewY=d+"deg",i.transformPerspective=p+"px",(i.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(W[j]=ty(Y)),i.xOffset=i.yOffset=0,i.force3D=v._config.force3D,i.renderTransform=i.svg?tP:g?tT:tw,i.uncache=0,i},ty=function(t){return(t=t.split(" "))[0]+" "+t[1]},tx=function(t,e,i){var n=(0,v.getUnit)(e);return(0,v._round)(parseFloat(e)+parseFloat(tr(t,"x",i+"px",n)))+n},tw=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tT(t,e)},tb="0deg",tT=function(t,e){var i=e||this,n=i.xPercent,o=i.yPercent,r=i.x,s=i.y,a=i.z,h=i.rotation,u=i.rotationY,l=i.rotationX,c=i.skewX,d=i.skewY,p=i.scaleX,_=i.scaleY,f=i.transformPerspective,m=i.force3D,g=i.target,v=i.zOrigin,y="",x="auto"===m&&t&&1!==t||!0===m;// Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
if(v&&(l!==tb||u!==tb)){var b,T=parseFloat(u)*w,P=Math.sin(T),M=Math.cos(T);r=tx(g,r,-(P*(b=Math.cos(T=parseFloat(l)*w))*v)),s=tx(g,s,-(-Math.sin(T)*v)),a=tx(g,a,-(M*b*v)+v)}"0px"!==f&&(y+="perspective("+f+") "),(n||o)&&(y+="translate("+n+"%, "+o+"%) "),(x||"0px"!==r||"0px"!==s||"0px"!==a)&&(y+="0px"!==a||x?"translate3d("+r+", "+s+", "+a+") ":"translate("+r+", "+s+") "),h!==tb&&(y+="rotate("+h+") "),u!==tb&&(y+="rotateY("+u+") "),l!==tb&&(y+="rotateX("+l+") "),(c!==tb||d!==tb)&&(y+="skew("+c+", "+d+") "),(1!==p||1!==_)&&(y+="scale("+p+", "+_+") "),g.style[F]=y||"translate(0, 0)"},tP=function(t,e){var i,n,o,r,s,a=e||this,h=a.xPercent,u=a.yPercent,l=a.x,c=a.y,d=a.rotation,p=a.skewX,_=a.skewY,f=a.scaleX,m=a.scaleY,g=a.target,y=a.xOrigin,x=a.yOrigin,b=a.xOffset,T=a.yOffset,P=a.forceCSS,M=parseFloat(l),C=parseFloat(c);d=parseFloat(d),p=parseFloat(p),(_=parseFloat(_))&&(p+=//for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
_=parseFloat(_),d+=_),d||p?(d*=w,p*=w,i=Math.cos(d)*f,n=Math.sin(d)*f,o=-(Math.sin(d-p)*m),r=Math.cos(d-p)*m,p&&(_*=w,o*=s=Math.sqrt(1+(s=Math.tan(p-_))*s),r*=s,_&&(i*=s=Math.sqrt(1+(s=Math.tan(_))*s),n*=s)),i=(0,v._round)(i),n=(0,v._round)(n),o=(0,v._round)(o),r=(0,v._round)(r)):(i=f,r=m,n=o=0),(M&&!~(l+"").indexOf("px")||C&&!~(c+"").indexOf("px"))&&(M=tr(g,"x",l,"px"),C=tr(g,"y",c,"px")),(y||x||b||T)&&(M=(0,v._round)(M+y-(y*i+x*o)+b),C=(0,v._round)(C+x-(y*n+x*r)+T)),(h||u)&&(//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
s=g.getBBox(),M=(0,v._round)(M+h/100*s.width),C=(0,v._round)(C+u/100*s.height)),s="matrix("+i+","+n+","+o+","+r+","+M+","+C+")",g.setAttribute("transform",s),P&&(g.style[F]=s)},tL=function(t,e,i,n,o){var r,s,a=(0,v._isString)(o),h=parseFloat(o)*(a&&~o.indexOf("rad")?x:1)-n,u=n+h+"deg";return a&&("short"===(r=o.split("_")[1])&&(h%=360)!=h%180&&(h+=h<0?360:-360),"cw"===r&&h<0?h=(h+36e9)%360-360*~~(h/360):"ccw"===r&&h>0&&(h=(h-36e9)%360-360*~~(h/360))),t._pt=s=new v.PropTween(t._pt,e,i,n,h,E),s.e=u,s.u="deg",t._props.push(i),s},tM=function(t,e){// Internet Explorer doesn't have Object.assign(), so we recreate it here.
for(var i in e)t[i]=e[i];return t},tC=function(t,e,i){//for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
var n,o,r,s,a,h,u,l=tM({},i._gsap),c=i.style;for(o in l.svg?(r=i.getAttribute("transform"),i.setAttribute("transform",""),c[F]=e,n=tv(i,1),te(i,F),i.setAttribute("transform",r)):(r=getComputedStyle(i)[F],c[F]=e,n=tv(i,1),c[F]=r),y)(r=l[o])!==(s=n[o])&&0>"perspective,force3D,transformOrigin,svgOrigin".indexOf(o)&&(a=(0,v.getUnit)(r)!==(u=(0,v.getUnit)(s))?tr(i,o,r,u):parseFloat(r),h=parseFloat(s),t._pt=new v.PropTween(t._pt,n,o,a,h-a,S),t._pt.u=u||0,t._props.push(o));tM(n,l)};(0,v._forEachName)("padding,margin,Width,Radius",function(t,e){var i="Right",n="Bottom",o="Left",r=(e<3?["Top",i,n,o]:["Top"+o,"Top"+i,n+i,n+o]).map(function(i){return e<2?t+i:"border"+i+t});tc[e>1?"border"+t:t]=function(t,e,i,n,o){var s,a;if(arguments.length<4)return 5===(a=// getter, passed target, property, and unit (from _get())
(s=r.map(function(e){return ts(t,e,i)})).join(" ")).split(s[0]).length?s[0]:a;s=(n+"").split(" "),a={},r.forEach(function(t,e){return a[t]=s[e]=s[e]||s[(e-1)/2|0]}),t.init(e,a,o)}});var tS={name:"css",register:K,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,o){var r,s,a,h,u,l,c,d,_,f,m,g,x,w,b,T,P=this._props,E=t.style,O=i.vars.startAt;for(c in p||K(),this.styles=this.styles||q(t),T=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(s=e[c],!(v._plugins[c]&&(0,v._checkPlugin)(c,e,i,n,t,o)))){if(u=typeof s,l=tc[c],"function"===u&&(u=typeof(s=s.call(i,n,t,o))),"string"===u&&~s.indexOf("random(")&&(s=(0,v._replaceRandom)(s)),l)l(this,t,c,s,i)&&(b=1);else if("--"===c.substr(0,2))//CSS variable
r=(getComputedStyle(t).getPropertyValue(c)+"").trim(),s+="",v._colorExp.lastIndex=0,(0,v._colorExp).test(r)||(// colors don't have units
d=(0,v.getUnit)(r),_=(0,v.getUnit)(s)),_?d!==_&&(r=tr(t,c,r,_)+_):d&&(s+=d),this.add(E,"setProperty",r,s,n,o,0,0,c),P.push(c),T.push(c,0,E[c]);else if("undefined"!==u){if(O&&c in O?(// in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
r="function"==typeof O[c]?O[c].call(i,n,t,o):O[c],(0,v._isString)(r)&&~r.indexOf("random(")&&(r=(0,v._replaceRandom)(r)),(0,v.getUnit)(r+"")||(r+=v._config.units[c]||(0,v.getUnit)(ts(t,c))||""),"="===(r+"").charAt(1)&&(r=ts(t,c))):r=ts(t,c),h=parseFloat(r),(f="string"===u&&"="===s.charAt(1)&&s.substr(0,2))&&(s=s.substr(2)),a=parseFloat(s),c in C&&("autoAlpha"===c&&(1===h&&"hidden"===ts(t,"visibility")&&a&&(h=0),T.push("visibility",0,E.visibility),ti(this,E,"visibility",h?"inherit":"hidden",a?"inherit":"hidden",!a)),"scale"!==c&&"transform"!==c&&~(c=C[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in y){if(this.styles.save(c),g||((x=t._gsap).renderTransform&&!e.parseTransform||tv(t,e.parseTransform),w=!1!==e.smoothOrigin&&x.smooth,(g=this._pt=new v.PropTween(this._pt,E,F,0,1,x.renderTransform,x,0,-1)).dep=1),"scale"===c)this._pt=new v.PropTween(this._pt,x,"scaleY",x.scaleY,(f?(0,v._parseRelative)(x.scaleY,f+a):a)-x.scaleY||0,S),this._pt.u=0,P.push("scaleY",c),c+="X";else if("transformOrigin"===c){T.push(j,0,E[j]),s=tu(s),x.svg?tg(t,s,0,w,0,this):((_=parseFloat(s.split(" ")[2])||0)!==x.zOrigin&&ti(this,x,"zOrigin",x.zOrigin,_),ti(this,E,c,ty(r),ty(s)));continue}else if("svgOrigin"===c){tg(t,s,1,w,0,this);continue}else if(c in tp){tL(this,x,c,h,f?(0,v._parseRelative)(h,f+s):s);continue}else if("smoothOrigin"===c){ti(this,x,"smooth",x.smooth,s);continue}else if("force3D"===c){x[c]=s;continue}else if("transform"===c){tC(this,s,t);continue}}else c in E||(c=G(c)||c);if(m||(a||0===a)&&(h||0===h)&&!M.test(s)&&c in E)d=(r+"").substr((h+"").length),a||(a=0),_=(0,v.getUnit)(s)||(c in v._config.units?v._config.units[c]:d),d!==_&&(h=tr(t,c,r,_)),this._pt=new v.PropTween(this._pt,m?x:E,c,h,(f?(0,v._parseRelative)(h,f+a):a)-h,m||"px"!==_&&"zIndex"!==c||!1===e.autoRound?S:z),this._pt.u=_||0,d!==_&&"%"!==_&&(//when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
this._pt.b=r,this._pt.r=k);else if(c in E)ta.call(this,t,c,r,f?f+s:s);else if(c in t)this.add(t,c,r||t[c],f?f+s:s,n,o);else if("parseTransform"!==c){(0,v._missingPlugin)(c,s);continue}m||(c in E?T.push(c,0,E[c]):T.push(c,1,r||t[c])),P.push(c)}}b&&(0,v._sortPropTweensByPriority)(this)},render:function(t,e){if(e.tween._time||!m())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ts,aliases:C,getSetter:function(t,e,i){//returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
var n=C[e];return n&&0>n.indexOf(",")&&(e=n),e in y&&e!==j&&(t._gsap.x||ts(t,"x"))?i&&f===i?"scale"===e?R:Z:(f=i||{},"scale"===e?D:N):t.style&&!(0,v._isUndefined)(t.style[e])?B:~e.indexOf("-")?I:(0,v._getSetter)(t,e)},core:{_removeProperty:te,_getMatrix:tm}};v.gsap.utils.checkPrefix=G,v.gsap.core.getStyleSaver=q,tz="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",tO="rotation,rotationX,rotationY,skewX,skewY",tA=(0,v._forEachName)(tz+","+tO+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){y[t]=1}),(0,v._forEachName)(tO,function(t){v._config.units[t]="deg",tp[t]=1}),C[tA[13]]=tz+","+tO,(0,v._forEachName)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");C[e[1]]=tA[e[0]]}),(0,v._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){v._config.units[t]="px"}),(0,v.gsap).registerPlugin(tS);var tE=(0,v.gsap).registerPlugin(tS)||v.gsap;/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */function tk(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}tE.core.Tween;/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var tz,tO,tA,tB,tI,tZ,tR,tD,tN,tF,tj,tH,tW,tU,tq,tY,tV=function(){return tB||"undefined"!=typeof window&&(tB=window.gsap)&&tB.registerPlugin&&tB},tX=1,tG=[],tK=[],tJ=[],t$=Date.now,tQ=function(t,e){return e},t0=function(){var t=tH.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,tK),n.push.apply(n,tJ),tK=i,tJ=n,tQ=function(t,i){return e[t](i)}},t1=function(t,e){return~tJ.indexOf(t)&&tJ[tJ.indexOf(t)+1][e]},t2=function(t){return!!~tW.indexOf(t)},t5=function(t,e,i,n,o){return t.addEventListener(e,i,{passive:!n,capture:!!o})},t3=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},t8="scrollLeft",t4="scrollTop",t6=function(){return tU&&tU.isPressed||tK.cache++},t9=function(t,e){var i=function i(n){// since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
if(n||0===n){tX&&(tZ.history.scrollRestoration="manual");var o=tU&&tU.isPressed;t(n=i.v=Math.round(n)||(tU&&tU.iOS?1:0)),i.cacheID=tK.cache,o&&tQ("ss",n)}else(e||tK.cache!==i.cacheID||tQ("ref"))&&(i.cacheID=tK.cache,i.v=t());return i.v+i.offset};return i.offset=0,t&&i},t7={s:t8,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:t9(function(t){return arguments.length?tZ.scrollTo(t,et.sc()):tZ.pageXOffset||tR[t8]||tD[t8]||tN[t8]||0})},et={s:t4,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:t7,sc:t9(function(t){return arguments.length?tZ.scrollTo(t7.sc(),t):tZ.pageYOffset||tR[t4]||tD[t4]||tN[t4]||0})},ee=function(t,e){return(e&&e._ctx&&e._ctx.selector||tB.utils.toArray)(t)[0]||("string"==typeof t&&!1!==tB.config().nullTargetWarn?console.warn("Element not found:",t):null)},ei=function(t,e){var i=e.s,n=e.sc;// we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
t2(t)&&(t=tR.scrollingElement||tD);var o=tK.indexOf(t),r=n===et.sc?1:2;~o||(o=tK.push(t)-1),tK[o+r]||t5(t,"scroll",t6);var s=tK[o+r],a=s||(tK[o+r]=t9(t1(t,i),!0)||(t2(t)?n:t9(function(e){return arguments.length?t[i]=e:t[i]})));return a.target=t,s||(a.smooth="smooth"===tB.getProperty(t,"scrollBehavior")),a},en=function(t,e,i){var n=t,o=t,r=t$(),s=r,a=e||50,h=Math.max(500,3*a),u=function(t,e){var h=t$();e||h-r>a?(o=n,n=t,s=r,r=h):i?n+=t:n=o+(t-o)/(h-s)*(r-s)};return{update:u,reset:function(){o=n=i?0:n,s=r=0},getVelocity:function(t){var e=s,a=o,l=t$();return(t||0===t)&&t!==n&&u(t),r===s||l-s>h?0:(n+(i?a:-a))/((i?l:r)-e)*1e3}}},eo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},er=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},es=function(){(tH=tB.core.globals().ScrollTrigger)&&tH.core&&t0()},ea=function(t){return(tB=t||tV())&&"undefined"!=typeof document&&document.body&&(tZ=window,tD=(tR=document).documentElement,tN=tR.body,tW=[tZ,tR,tD,tN],tB.utils.clamp,tY=tB.core.context||function(){},tj="onpointerenter"in tN?"pointer":"mouse",tF=eh.isTouch=tZ.matchMedia&&tZ.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in tZ||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tq=eh.eventTypes=("ontouchstart"in tD?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tD?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tX=0},500),es(),tI=1),tI};t7.op=et,tK.cache=0;var eh=/*#__PURE__*/function(){var t;function e(t){this.init(t)}return e.prototype.init=function(t){tI||ea(tB)||console.warn("Please gsap.registerPlugin(Observer)"),tH||es();var e=t.tolerance,i=t.dragMinimum,n=t.type,o=t.target,r=t.lineHeight,s=t.debounce,a=t.preventDefault,h=t.onStop,u=t.onStopDelay,l=t.ignore,c=t.wheelSpeed,d=t.event,p=t.onDragStart,_=t.onDragEnd,f=t.onDrag,m=t.onPress,g=t.onRelease,v=t.onRight,y=t.onLeft,x=t.onUp,w=t.onDown,b=t.onChangeX,T=t.onChangeY,P=t.onChange,M=t.onToggleX,C=t.onToggleY,S=t.onHover,E=t.onHoverEnd,k=t.onMove,z=t.ignoreCheck,O=t.isNormalizer,A=t.onGestureStart,B=t.onGestureEnd,I=t.onWheel,Z=t.onEnable,R=t.onDisable,D=t.onClick,N=t.scrollSpeed,F=t.capture,j=t.allowClicks,H=t.lockAxis,W=t.onLockAxis;this.target=o=ee(o)||tD,this.vars=t,l&&(l=tB.utils.toArray(l)),e=e||1e-9,i=i||0,c=c||1,N=N||1,n=n||"wheel,touch,pointer",s=!1!==s,r||(r=parseFloat(tZ.getComputedStyle(tN).lineHeight)||22);var U,q,Y,V,X,G,K,J=this,$=0,Q=0,tt=ei(o,t7),te=ei(o,et),ti=tt(),tn=te(),to=~n.indexOf("touch")&&!~n.indexOf("pointer")&&"pointerdown"===tq[0],tr=t2(o),ts=o.ownerDocument||tR,ta=[0,0,0],th=[0,0,0],tu=0,tl=function(){return tu=t$()},tc=function(t,e){return(J.event=t)&&l&&~l.indexOf(t.target)||e&&to&&"touch"!==t.pointerType||z&&z(t,e)},td=function(){var t=J.deltaX=er(ta),i=J.deltaY=er(th),n=Math.abs(t)>=e,o=Math.abs(i)>=e;P&&(n||o)&&P(J,t,i,ta,th),n&&(v&&J.deltaX>0&&v(J),y&&J.deltaX<0&&y(J),b&&b(J),M&&J.deltaX<0!=$<0&&M(J),$=J.deltaX,ta[0]=ta[1]=ta[2]=0),o&&(w&&J.deltaY>0&&w(J),x&&J.deltaY<0&&x(J),T&&T(J),C&&J.deltaY<0!=Q<0&&C(J),Q=J.deltaY,th[0]=th[1]=th[2]=0),(V||Y)&&(k&&k(J),Y&&(f(J),Y=!1),V=!1),G&&(G=!1,1)&&W&&W(J),X&&(I(J),X=!1),U=0},tp=function(t,e,i){ta[i]+=t,th[i]+=e,J._vx.update(t),J._vy.update(e),s?U||(U=requestAnimationFrame(td)):td()},t_=function(t,e){H&&!K&&(J.axis=K=Math.abs(t)>Math.abs(e)?"x":"y",G=!0),"y"!==K&&(ta[2]+=t,J._vx.update(t,!0)),"x"!==K&&(th[2]+=e,J._vy.update(e,!0)),s?U||(U=requestAnimationFrame(td)):td()},tf=function(t){if(!tc(t,1)){var e=(t=eo(t,a)).clientX,n=t.clientY,o=e-J.x,r=n-J.y,s=J.isDragging;J.x=e,J.y=n,(s||Math.abs(J.startX-e)>=i||Math.abs(J.startY-n)>=i)&&(f&&(Y=!0),s||(J.isDragging=!0),t_(o,r),s||p&&p(J))}},tm=J.onPress=function(t){tc(t,1)||t&&t.button||(J.axis=K=null,q.pause(),J.isPressed=!0,t=eo(t),$=Q=0,J.startX=J.x=t.clientX,J.startY=J.y=t.clientY,J._vx.reset(),J._vy.reset(),t5(O?o:ts,tq[1],tf,a,!0),J.deltaX=J.deltaY=0,m&&m(J))},tg=J.onRelease=function(t){if(!tc(t,1)){t3(O?o:ts,tq[1],tf,!0);var e=!isNaN(J.y-J.startY),i=J.isDragging&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),n=eo(t);!i&&e&&(J._vx.reset(),J._vy.reset(),a&&j&&tB.delayedCall(.08,function(){// some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
if(t$()-tu>300&&!t.defaultPrevented){if(t.target.click)t.target.click();else if(ts.createEvent){var e=ts.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,tZ,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,h&&!O&&q.restart(!0),_&&i&&_(J),g&&g(J,i)}},tv=function(t){return t.touches&&t.touches.length>1&&(J.isGesturing=!0)&&A(t,J.isDragging)},ty=function(){return J.isGesturing=!1,B(J)},tx=function(t){if(!tc(t)){var e=tt(),i=te();tp((e-ti)*N,(i-tn)*N,1),ti=e,tn=i,h&&q.restart(!0)}},tw=function(t){if(!tc(t)){t=eo(t,a),I&&(X=!0);var e=(1===t.deltaMode?r:2===t.deltaMode?tZ.innerHeight:1)*c;tp(t.deltaX*e,t.deltaY*e,0),h&&!O&&q.restart(!0)}},tb=function(t){if(!tc(t)){var e=t.clientX,i=t.clientY,n=e-J.x,o=i-J.y;J.x=e,J.y=i,V=!0,(n||o)&&t_(n,o)}},tT=function(t){J.event=t,S(J)},tP=function(t){J.event=t,E(J)},tL=function(t){return tc(t)||eo(t,a)&&D(J)};q=J._dc=tB.delayedCall(u||.25,function(){J._vx.reset(),J._vy.reset(),q.pause(),h&&h(J)}).pause(),J.deltaX=J.deltaY=0,J._vx=en(0,50,!0),J._vy=en(0,50,!0),J.scrollX=tt,J.scrollY=te,J.isDragging=J.isGesturing=J.isPressed=!1,tY(this),J.enable=function(t){return!J.isEnabled&&(t5(tr?ts:o,"scroll",t6),n.indexOf("scroll")>=0&&t5(tr?ts:o,"scroll",tx,a,F),n.indexOf("wheel")>=0&&t5(o,"wheel",tw,a,F),(n.indexOf("touch")>=0&&tF||n.indexOf("pointer")>=0)&&(t5(o,tq[0],tm,a,F),t5(ts,tq[2],tg),t5(ts,tq[3],tg),j&&t5(o,"click",tl,!1,!0),D&&t5(o,"click",tL),A&&t5(ts,"gesturestart",tv),B&&t5(ts,"gestureend",ty),S&&t5(o,tj+"enter",tT),E&&t5(o,tj+"leave",tP),k&&t5(o,tj+"move",tb)),J.isEnabled=!0,t&&t.type&&tm(t),Z&&Z(J)),J},J.disable=function(){J.isEnabled&&(// only remove the _onScroll listener if there aren't any others that rely on the functionality.
tG.filter(function(t){return t!==J&&t2(t.target)}).length||t3(tr?ts:o,"scroll",t6),J.isPressed&&(J._vx.reset(),J._vy.reset(),t3(O?o:ts,tq[1],tf,!0)),t3(tr?ts:o,"scroll",tx,F),t3(o,"wheel",tw,F),t3(o,tq[0],tm,F),t3(ts,tq[2],tg),t3(ts,tq[3],tg),t3(o,"click",tl,!0),t3(o,"click",tL),t3(ts,"gesturestart",tv),t3(ts,"gestureend",ty),t3(o,tj+"enter",tT),t3(o,tj+"leave",tP),t3(o,tj+"move",tb),J.isEnabled=J.isPressed=J.isDragging=!1,R&&R(J))},J.kill=J.revert=function(){J.disable();var t=tG.indexOf(J);t>=0&&tG.splice(t,1),tU===J&&(tU=0)},tG.push(J),O&&t2(o)&&(tU=J),J.enable(d)},tk(e.prototype,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t&&tk(e,t),e}();eh.version="3.12.2",eh.create=function(t){return new eh(t)},eh.register=ea,eh.getAll=function(){return tG.slice()},eh.getById=function(t){return tG.filter(function(e){return e.vars.id===t})[0]},tV()&&tB.registerPlugin(eh);var eu,el,ec,ed,ep,e_,ef,em,eg,ev,ey,ex,ew,eb,eT,eP,eL,eM,eC,eS,eE,ek,ez,eO,eA,eB,eI,eZ,eR,eD,eN,eF,ej,eH,eW,eU,eq=1,eY=Date.now,eV=eY(),eX=0,eG=0,eK=function(t,e,i){var n=it(t)&&("clamp("===t.substr(0,6)||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},eJ=function(t,e){return e&&(!it(t)||"clamp("!==t.substr(0,6))?"clamp("+t+")":t},e$=function(){return eb=1},eQ=function(){return eb=0},e0=function(t){return t},e1=function(t){return Math.round(1e5*t)/1e5||0},e2=function(){return"undefined"!=typeof window},e5=function(){return eu||e2()&&(eu=window.gsap)&&eu.registerPlugin&&eu},e3=function(t){return!!~ef.indexOf(t)},e8=function(t){return("Height"===t?eN:ec["inner"+t])||ep["client"+t]||e_["client"+t]},e4=function(t){return t1(t,"getBoundingClientRect")||(e3(t)?function(){return nn.width=ec.innerWidth,nn.height=eN,nn}:function(){return iP(t)})},e6=function(t,e,i){var n=i.d,o=i.d2,r=i.a;return(r=t1(t,"getBoundingClientRect"))?function(){return r()[n]}:function(){return(e?e8(o):t["client"+o])||0}},e9=function(t,e){var i=e.s,n=e.d2,o=e.d,r=e.a;return Math.max(0,(r=t1(t,i="scroll"+n))?r()-e4(t)()[o]:e3(t)?(ep[i]||e_[i])-e8(n):t[i]-t["offset"+n])},e7=function(t,e){for(var i=0;i<eC.length;i+=3)(!e||~e.indexOf(eC[i+1]))&&t(eC[i],eC[i+1],eC[i+2])},it=function(t){return"string"==typeof t},ie=function(t){return"function"==typeof t},ii=function(t){return"number"==typeof t},io=function(t){return"object"==typeof t},ir=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},is=function(t,e){if(t.enabled){var i=e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},ia=Math.abs,ih="left",iu="right",il="bottom",ic="width",id="height",ip="Right",i_="Left",im="Bottom",ig="padding",iv="margin",iy="Width",ix="Height",iw=function(t){return ec.getComputedStyle(t)},ib=function(t){// if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
var e=iw(t).position;t.style.position="absolute"===e||"fixed"===e?e:"relative"},iT=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},iP=function(t,e){var i=e&&"matrix(1, 0, 0, 1, 0, 0)"!==iw(t)[eT]&&eu.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect();return i&&i.progress(0).kill(),n},iL=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},iM=function(t){var e,i=[],n=t.labels,o=t.duration();for(e in n)i.push(n[e]/o);return i},iC=function(t){var e=eu.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(t,e){return t-e});return i?function(t,n,o){var r;if(void 0===o&&(o=.001),!n)return e(t);if(n>0){for(t-=o,r=0;r<i.length;r++)if(i[r]>=t)return i[r];return i[r-1]}for(r=i.length,t+=o;r--;)if(i[r]<=t)return i[r];return i[0]}:function(i,n,o){void 0===o&&(o=.001);var r=e(i);return!n||Math.abs(r-i)<o||r-i<0==n<0?r:e(n<0?i-t:i+t)}},iS=function(t,e,i,n){return i.split(",").forEach(function(i){return t(e,i,n)})},iE=function(t,e,i,n,o){return t.addEventListener(e,i,{passive:!n,capture:!!o})},ik=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},iz=function(t,e,i){(i=i&&i.wheelHandler)&&(t(e,"wheel",i),t(e,"touchmove",i))},iO={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},iA={toggleActions:"play",anticipatePin:0},iB={top:0,left:0,center:.5,bottom:1,right:1},iI=function(t,e){if(it(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in iB?iB[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},iZ=function(t,e,i,n,o,r,s,a){var h=o.startColor,u=o.endColor,l=o.fontSize,c=o.indent,d=o.fontWeight,p=ed.createElement("div"),_=e3(i)||"fixed"===t1(i,"pinType"),f=-1!==t.indexOf("scroller"),m=_?e_:i,g=-1!==t.indexOf("start"),v=g?h:u,y="border-color:"+v+";font-size:"+l+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((f||a)&&_?"fixed;":"absolute;"),(f||a||!_)&&(y+=(n===et?iu:il)+":"+(r+parseFloat(c))+"px;"),s&&(y+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),p._isStart=g,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||0===e?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+n.op.d2],iR(p,0,n,g),p},iR=function(t,e,i,n){var o={display:"block"},r=i[n?"os2":"p2"],s=i[n?"p2":"os2"];t._isFlipped=n,o[i.a+"Percent"]=n?-100:0,o[i.a]=n?"1px":0,o["border"+r+iy]=1,o["border"+s+iy]=0,o[i.p]=e+"px",eu.set(t,o)},iD=[],iN={},iF=function(){return eY()-eX>34&&(ej||(ej=requestAnimationFrame(i3)))},ij=function(){// previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
ez&&ez.isPressed&&!(ez.startX>e_.clientWidth)||(tK.cache++,ez?ej||(ej=requestAnimationFrame(i3)):i3(),eX||iV("scrollStart"),eX=eY())},iH=function(){eB=ec.innerWidth,eA=ec.innerHeight},iW=function(){tK.cache++,!(!ew&&!ek&&!ed.fullscreenElement&&!ed.webkitFullscreenElement&&(!eO||eB!==ec.innerWidth||Math.abs(ec.innerHeight-eA)>.25*ec.innerHeight))||em.restart(!0)},iU={},iq=[],iY=function t(){return ik(nl,"scrollEnd",t)||i1(!0)},iV=function(t){return iU[t]&&iU[t].map(function(t){return t()})||iq},iX=[],iG=function(t){for(var e=0;e<iX.length;e+=5)(!t||iX[e+4]&&iX[e+4].query===t)&&(iX[e].style.cssText=iX[e+1],iX[e].getBBox&&iX[e].setAttribute("transform",iX[e+2]||""),iX[e+3].uncache=1)},iK=function(t,e){var i;for(eP=0;eP<iD.length;eP++)(i=iD[eP])&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));e&&iG(e),e||iV("revert")},iJ=function(t,e){tK.cache++,(e||!eH)&&tK.forEach(function(t){return ie(t)&&t.cacheID++&&(t.rec=0)}),it(t)&&(ec.history.scrollRestoration=eR=t)},i$=0,iQ=function(){// we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
if(eW!==i$){var t=eW=i$;requestAnimationFrame(function(){return t===i$&&i1(!0)})}},i0=function(){e_.appendChild(eD),eN=eD.offsetHeight||ec.innerHeight,e_.removeChild(eD)},i1=function(t,e){if(eX&&!t){iE(nl,"scrollEnd",iY);return}i0(),eH=nl.isRefreshing=!0,tK.forEach(function(t){return ie(t)&&++t.cacheID&&(t.rec=t())});var i=iV("refreshInit");eS&&nl.sort(),e||iK(),tK.forEach(function(t){ie(t)&&(t.smooth&&(t.target.style.scrollBehavior="auto"),t(0))}),iD.slice(0).forEach(function(t){return t.refresh()}),iD.forEach(function(t,e){// nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
if(t._subPinOffset&&t.pin){var i=t.vars.horizontal?"offsetWidth":"offsetHeight",n=t.pin[i];t.revert(!0,1),t.adjustPinSpacing(t.pin[i]-n),t.refresh()}}),iD.forEach(function(t){// the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
var e=e9(t.scroller,t._dir);("max"===t.vars.end||t._endClamp&&t.end>e)&&t.setPositions(t.start,Math.max(t.start+1,e),!0)}),i.forEach(function(t){return t&&t.render&&t.render(-1)}),tK.forEach(function(t){ie(t)&&(t.smooth&&requestAnimationFrame(function(){return t.target.style.scrollBehavior="smooth"}),t.rec&&t(t.rec))}),iJ(eR,1),em.pause(),i$++,eH=2,i3(2),iD.forEach(function(t){return ie(t.vars.onRefresh)&&t.vars.onRefresh(t)}),eH=nl.isRefreshing=!1,iV("refresh")},i2=0,i5=1,i3=function(t){if(!eH||2===t){nl.isUpdating=!0,eU&&eU.update(0);var e=iD.length,i=eY(),n=i-eV>=50,o=e&&iD[0].scroll();if(i5=i2>o?-1:1,eH||(i2=o),n&&(eX&&!eb&&i-eX>200&&(eX=0,iV("scrollEnd")),ey=eV,eV=i),i5<0){for(eP=e;eP-- >0;)iD[eP]&&iD[eP].update(0,n);i5=1}else for(eP=0;eP<e;eP++)iD[eP]&&iD[eP].update(0,n);nl.isUpdating=!1}ej=0},i8=[ih,"top",il,iu,iv+im,iv+ip,iv+"Top",iv+i_,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],i4=i8.concat([ic,id,"boxSizing","max"+iy,"max"+ix,"position",iv,ig,ig+"Top",ig+ip,ig+im,ig+i_]),i6=function(t,e,i){nt(i);var n=t._gsap;if(n.spacerIsNative)nt(n.spacerState);else if(t._gsap.swappedIn){var o=e.parentNode;o&&(o.insertBefore(t,e),o.removeChild(e))}t._gsap.swappedIn=!1},i9=function(t,e,i,n){if(!t._gsap.swappedIn){for(var o,r=i8.length,s=e.style,a=t.style;r--;)s[o=i8[r]]=i[o];s.position="absolute"===i.position?"absolute":"relative","inline"===i.display&&(s.display="inline-block"),a[il]=a[iu]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[ic]=iL(t,t7)+"px",s[id]=iL(t,et)+"px",s[ig]=a[iv]=a.top=a[ih]="0",nt(n),a[ic]=a["max"+iy]=i[ic],a[id]=a["max"+ix]=i[id],a[ig]=i[ig],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},i7=/([A-Z])/g,nt=function(t){if(t){var e,i,n=t.t.style,o=t.length,r=0;for((t.t._gsap||eu.core.getCache(t.t)).uncache=1;r<o;r+=2)i=t[r+1],e=t[r],i?n[e]=i:n[e]&&n.removeProperty(e.replace(i7,"-$1").toLowerCase())}},ne=function(t){for(// returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
var e=i4.length,i=t.style,n=[],o=0;o<e;o++)n.push(i4[o],i[i4[o]]);return n.t=t,n},ni=function(t,e,i){for(var n,o=[],r=t.length,s=i?8:0;s<r;s+=2)n=t[s],o.push(n,n in e?e[n]:t[s+1]);return o.t=t.t,o},nn={left:0,top:0},// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
no=function(t,e,i,n,o,r,s,a,h,u,l,c,d,p){ie(t)&&(t=t(a)),it(t)&&"max"===t.substr(0,3)&&(t=c+("="===t.charAt(4)?iI("0"+t.substr(3),i):0));var _,f,m,g=d?d.time():0;if(d&&d.seek(0),isNaN(t)||(t=+t),ii(t))d&&(t=eu.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,c,t)),s&&iR(s,i,n,!0);else{ie(e)&&(e=e(a));var v,y,x,w,b=(t||"0").split(" ");(v=iP(m=ee(e,a)||e_)||{}).left||v.top||"none"!==iw(m).display||(// if display is "none", it won't report getBoundingClientRect() properly
w=m.style.display,m.style.display="block",v=iP(m),w?m.style.display=w:m.style.removeProperty("display")),y=iI(b[0],v[n.d]),x=iI(b[1]||"0",i),t=v[n.p]-h[n.p]-u+y+o-x,s&&iR(s,x,n,i-x<20||s._isStart&&x>20),i-=i-x}if(p&&(a[p]=t||-.001,t<0&&(t=0)),r){var T=t+i,P=r._isStart;_="scroll"+n.d2,iR(r,T,n,P&&T>20||!P&&(l?Math.max(e_[_],ep[_]):r.parentNode[_])<=T+1),l&&(h=iP(s),l&&(r.style[n.op.p]=h[n.op.p]-n.op.m-r._offset+"px"))}return d&&m&&(_=iP(m),d.seek(c),f=iP(m),d._caScrollDist=_[n.p]-f[n.p],t=t/d._caScrollDist*c),d&&d.seek(g),d?t:Math.round(t)},nr=/(webkit|moz|length|cssText|inset)/i,ns=function(t,e,i,n){if(t.parentNode!==e){var o,r,s=t.style;if(e===e_){for(o in t._stOrig=s.cssText,r=iw(t))+o||nr.test(o)||!r[o]||"string"!=typeof s[o]||"0"===o||(s[o]=r[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;eu.core.getCache(t).uncache=1,e.appendChild(t)}},na=function(t,e,i){var n=e,o=n;return function(e){var r=Math.round(t());// round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.
return r!==n&&r!==o&&Math.abs(r-n)>3&&Math.abs(r-o)>3&&(// if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
e=r,i&&i()),o=n,n=e,e}},nh=function(t,e,i){var n={};n[e.p]="+="+i,eu.set(t,n)},// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
nu=function(t,e){var i=ei(t,e),n="_scroll"+e.p2,o=function e(o,r,s,a,h){var u=e.tween,l=r.onComplete,c={};s=s||i();var d=na(i,s,function(){u.kill(),e.tween=0});return h=a&&h||0,a=a||o-s,u&&u.kill(),r[n]=o,r.modifiers=c,c[n]=function(){return d(s+a*u.ratio+h*u.ratio*u.ratio)},r.onUpdate=function(){tK.cache++,i3()},r.onComplete=function(){e.tween=0,l&&l.call(u)},u=e.tween=eu.to(t,r)};return t[n]=i,i.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},iE(t,"wheel",i.wheelHandler),nl.isTouch&&iE(t,"touchmove",i.wheelHandler),o},nl=/*#__PURE__*/function(){function t(e,i){el||t.register(eu)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eZ(this),this.init(e,i)}return t.prototype.init=function(e,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eG){this.update=this.refresh=this.kill=e0;return}var n,o,r,s,a,h,u,l,c,d,p,_,f,m,g,v,y,x,w,b,T,P,M,C,S,E,k,z,O,A,B,I,Z,R,D,N,F,j,H,W,U,q=e=iT(it(e)||ii(e)||e.nodeType?{trigger:e}:e,iA),Y=q.onUpdate,V=q.toggleClass,X=q.id,G=q.onToggle,K=q.onRefresh,J=q.scrub,$=q.trigger,Q=q.pin,tt=q.pinSpacing,te=q.invalidateOnRefresh,ti=q.anticipatePin,tn=q.onScrubComplete,to=q.onSnapComplete,tr=q.once,ts=q.snap,ta=q.pinReparent,th=q.pinSpacer,tu=q.containerAnimation,tl=q.fastScrollEnd,tc=q.preventOverlaps,td=e.horizontal||e.containerAnimation&&!1!==e.horizontal?t7:et,tp=!J&&0!==J,t_=ee(e.scroller||ec),tf=eu.core.getCache(t_),tm=e3(t_),tg=("pinType"in e?e.pinType:t1(t_,"pinType")||tm&&"fixed")==="fixed",tv=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],ty=tp&&e.toggleActions.split(" "),tx="markers"in e?e.markers:iA.markers,tw=tm?0:parseFloat(iw(t_)["border"+td.p2+iy])||0,tb=this,tT=e.onRefreshInit&&function(){return e.onRefreshInit(tb)},tP=e6(t_,tm,td),tL=!tm||~tJ.indexOf(t_)?e4(t_):function(){return nn},tM=0,tC=0,tS=0,tE=ei(t_,td);// for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.
if(tb._startClamp=tb._endClamp=!1,tb._dir=td,ti*=45,tb.scroller=t_,tb.scroll=tu?tu.time.bind(tu):tE,h=tE(),tb.vars=e,i=i||e.animation,"refreshPriority"in e&&(eS=1,-9999===e.refreshPriority&&(eU=tb)),tf.tweenScroll=tf.tweenScroll||{top:nu(t_,et),left:nu(t_,t7)},tb.tweenTo=r=tf.tweenScroll[td.p],tb.scrubDuration=function(t){(D=ii(t)&&t)?R?R.duration(t):R=eu.to(i,{ease:"expo",totalProgress:"+=0",duration:D,paused:!0,onComplete:function(){return tn&&tn(tb)}}):(R&&R.progress(1).kill(),R=0)},i&&(i.vars.lazy=!1,i._initted&&!tb.isReverted||!1!==i.vars.immediateRender&&!1!==e.immediateRender&&i.duration()&&i.render(0,!0,!0),tb.animation=i.pause(),i.scrollTrigger=tb,tb.scrubDuration(J),I=0,X||(X=i.vars.id)),ts&&((!io(ts)||ts.push)&&(ts={snapTo:ts}),"scrollBehavior"in e_.style&&eu.set(tm?[e_,ep]:t_,{scrollBehavior:"auto"}),tK.forEach(function(t){return ie(t)&&t.target===(tm?ed.scrollingElement||ep:t_)&&(t.smooth=!1)}),a=ie(ts.snapTo)?ts.snapTo:"labels"===ts.snapTo?(n=i,function(t){return eu.utils.snap(iM(n),t)}):"labelsDirectional"===ts.snapTo?(o=i,function(t,e){return iC(iM(o))(t,e.direction)}):!1!==ts.directional?function(t,e){return iC(ts.snapTo)(t,eY()-tC<500?0:e.direction)}:eu.utils.snap(ts.snapTo),N=io(N=ts.duration||{min:.1,max:2})?ev(N.min,N.max):ev(N,N),F=eu.delayedCall(ts.delay||D/2||.1,function(){var t=tE(),e=eY()-tC<500,n=r.tween;if((e||10>Math.abs(tb.getVelocity()))&&!n&&!eb&&tM!==t){var o=(t-l)/v,s=i&&!tp?i.totalProgress():o,h=e?0:(s-Z)/(eY()-ey)*1e3||0,u=eu.utils.clamp(-o,1-o,ia(h/2)*h/.185),d=o+(!1===ts.inertia?0:u),p=ev(0,1,a(d,tb)),_=Math.round(l+p*v),f=ts,m=f.onStart,g=f.onInterrupt,y=f.onComplete;if(t<=c&&t>=l&&_!==t){if(n&&!n._initted&&n.data<=ia(_-t))return;!1===ts.inertia&&(u=p-o),r(_,{duration:N(ia(.185*Math.max(ia(d-s),ia(p-s))/h/.05||0)),ease:ts.ease||"power3",data:ia(_-t),// record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
onInterrupt:function(){return F.restart(!0)&&g&&g(tb)},onComplete:function(){tb.update(),tM=tE(),I=Z=i&&!tp?i.totalProgress():tb.progress,to&&to(tb),y&&y(tb)}},t,u*v,_-t-u*v),m&&m(tb,r.tween)}}else tb.isActive&&tM!==t&&F.restart(!0)}).pause()),X&&(iN[X]=tb),(U=($=tb.trigger=ee($||!0!==Q&&Q))&&$._gsap&&$._gsap.stRevert)&&(U=U(tb)),Q=!0===Q?$:ee(Q),it(V)&&(V={targets:$,className:V}),Q&&(!1===tt||tt===iv||(tt=(!!tt||!Q.parentNode||!Q.parentNode.style||"flex"!==iw(Q.parentNode).display)&&ig),tb.pin=Q,(s=eu.core.getCache(Q)).spacer?y=s.pinState:(th&&((th=ee(th))&&!th.nodeType&&(th=th.current||th.nativeElement),s.spacerIsNative=!!th,th&&(s.spacerState=ne(th))),s.spacer=b=th||ed.createElement("div"),b.classList.add("pin-spacer"),X&&b.classList.add("pin-spacer-"+X),s.pinState=y=ne(Q)),!1!==e.force3D&&eu.set(Q,{force3D:!0}),tb.spacer=b=s.spacer,E=(B=iw(Q))[tt+td.os2],P=eu.getProperty(Q),M=eu.quickSetter(Q,td.a,"px"),i9(Q,b,B),w=ne(Q)),tx){m=io(tx)?iT(tx,iO):iO,_=iZ("scroller-start",X,t_,td,m,0),f=iZ("scroller-end",X,t_,td,m,0,_),T=_["offset"+td.op.d2];var tk=ee(t1(t_,"content")||t_);d=this.markerStart=iZ("start",X,tk,td,m,T,0,tu),p=this.markerEnd=iZ("end",X,tk,td,m,T,0,tu),tu&&(W=eu.quickSetter([d,p],td.a,"px")),tg||tJ.length&&!0===t1(t_,"fixedMarkers")||(ib(tm?e_:t_),eu.set([_,f],{force3D:!0}),z=eu.quickSetter(_,td.a,"px"),A=eu.quickSetter(f,td.a,"px"))}if(tu){var tz=tu.vars.onUpdate,tO=tu.vars.onUpdateParams;tu.eventCallback("onUpdate",function(){tb.update(0,0,1),tz&&tz.apply(tu,tO||[])})}if(tb.previous=function(){return iD[iD.indexOf(tb)-1]},tb.next=function(){return iD[iD.indexOf(tb)+1]},tb.revert=function(t,e){if(!e)return tb.kill(!0);// for compatibility with gsap.context() and gsap.matchMedia() which call revert()
var n=!1!==t||!tb.enabled,o=ew;n!==tb.isReverted&&(n&&(j=Math.max(tE(),tb.scroll.rec||0),tS=tb.progress,H=i&&i.progress()),d&&[d,p,_,f].forEach(function(t){return t.style.display=n?"none":"block"}),n&&(ew=tb,tb.update(n)),!Q||ta&&tb.isActive||(n?i6(Q,b,y):i9(Q,b,iw(Q),k)),n||tb.update(n),ew=o,tb.isReverted=n)},tb.refresh=function(n,o,s,a){// position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
if(!ew&&tb.enabled||o){if(Q&&n&&eX){iE(t,"scrollEnd",iY);return}!eH&&tT&&tT(tb),ew=tb,r.tween&&!s&&(// we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
r.tween.kill(),r.tween=0),R&&R.pause(),te&&i&&i.revert({kill:!1}).invalidate(),tb.isReverted||tb.revert(!0,!0),tb._subPinOffset=!1;var m,T,M,E,z,A,B,I,Z,D,N,W,U,q=tP(),Y=tL(),V=tu?tu.duration():e9(t_,td),X=v<=.01,G=0,J=a||0,ti=io(s)?s.end:e.end,tn=e.endTrigger||$,to=io(s)?s.start:e.start||(0!==e.start&&$?Q?"0 0":"0 100%":0),tr=tb.pinnedContainer=e.pinnedContainer&&ee(e.pinnedContainer,tb),ts=$&&Math.max(0,iD.indexOf(tb))||0,th=ts;for(tx&&io(s)&&(// if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
W=eu.getProperty(_,td.p),U=eu.getProperty(f,td.p));th--;)// user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
(A=iD[th]).end||A.refresh(0,1)||(ew=tb),(B=A.pin)&&(B===$||B===Q||B===tr)&&!A.isReverted&&(D||(D=[]),D.unshift(A),A.revert(!0,!0)),A!==iD[th]&&(// in case it got removed.
ts--,th--);for(ie(to)&&(to=to(tb)),l=no(to=eK(to,"start",tb),$,q,td,tE(),d,_,tb,Y,tw,tg,V,tu,tb._startClamp&&"_startClamp")||(Q?-.001:0),ie(ti)&&(ti=ti(tb)),it(ti)&&!ti.indexOf("+=")&&(~ti.indexOf(" ")?ti=(it(to)?to.split(" ")[0]:"")+ti:(G=iI(ti.substr(2),q),ti=it(to)?to:(tu?eu.utils.mapRange(0,tu.duration(),tu.scrollTrigger.start,tu.scrollTrigger.end,l):l)+G,tn=$)),ti=eK(ti,"end",tb),c=Math.max(l,no(ti||(tn?"100% 0":V),tn,q,td,tE()+G,p,f,tb,Y,tw,tg,V,tu,tb._endClamp&&"_endClamp"))||-.001,G=0,th=ts;th--;)(B=(A=iD[th]).pin)&&A.start-A._pinPush<=l&&!tu&&A.end>0&&(m=A.end-(tb._startClamp?Math.max(0,A.start):A.start),(B===$&&A.start-A._pinPush<l||B===tr)&&isNaN(to)&&(G+=m*(1-A.progress)),B===Q&&(J+=m));if(l+=G,c+=G,tb._startClamp&&(tb._startClamp+=G),tb._endClamp&&!eH&&(tb._endClamp=c||-.001,c=Math.min(c,e9(t_,td))),v=c-l||(l-=.01)&&.001,X&&(tS=eu.utils.clamp(0,1,eu.utils.normalize(l,c,j))),tb._pinPush=J,d&&G&&(// offset the markers if necessary
(m={})[td.a]="+="+G,tr&&(m[td.p]="-="+tE()),eu.set([d,p],m)),Q)m=iw(Q),E=td===et,M=tE(),C=parseFloat(P(td.a))+J,!V&&c>1&&(N={style:// makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
N=(tm?ed.scrollingElement||ep:t_).style,value:N["overflow"+td.a.toUpperCase()]},tm&&"scroll"!==iw(e_)["overflow"+td.a.toUpperCase()]&&(N.style["overflow"+td.a.toUpperCase()]="scroll")),i9(Q,b,m),w=ne(Q),T=iP(Q,!0),I=tg&&ei(t_,E?t7:et)(),tt&&((k=[tt+td.os2,v+J+"px"]).t=b,(th=tt===ig?iL(Q,td)+v+J:0)&&k.push(td.d,th+"px"),nt(k),tr&&iD.forEach(function(t){t.pin===tr&&!1!==t.vars.pinSpacing&&(t._subPinOffset=!0)}),tg&&tE(j)),tg&&((z={top:T.top+(E?M-l:I)+"px",left:T.left+(E?I:M-l)+"px",boxSizing:"border-box",position:"fixed"})[ic]=z["max"+iy]=Math.ceil(T.width)+"px",z[id]=z["max"+ix]=Math.ceil(T.height)+"px",z[iv]=z[iv+"Top"]=z[iv+ip]=z[iv+im]=z[iv+i_]="0",z[ig]=m[ig],z[ig+"Top"]=m[ig+"Top"],z[ig+ip]=m[ig+ip],z[ig+im]=m[ig+im],z[ig+i_]=m[ig+i_],x=ni(y,z,ta),eH&&tE(0)),i?(// the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
Z=i._initted,eE(1),i.render(i.duration(),!0,!0),S=P(td.a)-C+v+J,O=Math.abs(v-S)>1,tg&&O&&x.splice(x.length-2,2),i.render(0,!0,!0),Z||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),eE(0)):S=v,N&&(N.value?N.style["overflow"+td.a.toUpperCase()]=N.value:N.style.removeProperty("overflow-"+td.a));else if($&&tE()&&!tu)for(// it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
T=$.parentNode;T&&T!==e_;)T._pinOffset&&(l-=T._pinOffset,c-=T._pinOffset),T=T.parentNode;D&&D.forEach(function(t){return t.revert(!1,!0)}),tb.start=l,tb.end=c,h=u=eH?j:tE(),tu||eH||(h<j&&tE(j),tb.scroll.rec=0),tb.revert(!1,!0),tC=eY(),F&&(tM=-1,// self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.
F.restart(!0)),ew=0,i&&tp&&(i._initted||H)&&i.progress()!==H&&i.progress(H||0,!0).render(i.time(),!0,!0),(X||tS!==tb.progress||tu)&&(// ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
i&&!tp&&i.totalProgress(tu&&l<-.001&&!tS?eu.utils.normalize(l,c,0):tS,!0),tb.progress=X||(h-l)/v===tS?0:tS),Q&&tt&&(b._pinOffset=Math.round(tb.progress*S)),R&&R.invalidate(),isNaN(W)||(// numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
W-=eu.getProperty(_,td.p),U-=eu.getProperty(f,td.p),nh(_,td,W),nh(d,td,W-(a||0)),nh(f,td,U),nh(p,td,U-(a||0))),X&&!eH&&tb.update(),!K||eH||g||(// when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
g=!0,K(tb),g=!1)}},tb.getVelocity=function(){return(tE()-u)/(eY()-ey)*1e3||0},tb.endAnimation=function(){ir(tb.callbackAnimation),i&&(R?R.progress(1):i.paused()?tp||ir(i,tb.direction<0,1):ir(i,i.reversed()))},tb.labelToScroll=function(t){return i&&i.labels&&(l||tb.refresh()||l)+i.labels[t]/i.duration()*v||0},tb.getTrailing=function(t){var e=iD.indexOf(tb),i=tb.direction>0?iD.slice(0,e).reverse():iD.slice(e+1);return(it(t)?i.filter(function(e){return e.vars.preventOverlaps===t}):i).filter(function(t){return tb.direction>0?t.end<=l:t.start>=c})},tb.update=function(t,e,n){if(!tu||n||t){var o,s,a,d,p,f,m,g=!0===eH?j:tb.scroll(),y=t?0:(g-l)/v,T=y<0?0:y>1?1:y||0,P=tb.progress;if(e&&(u=h,h=tu?tE():g,ts&&(Z=I,I=i&&!tp?i.totalProgress():T)),ti&&!T&&Q&&!ew&&!eq&&eX&&l<g+(g-u)/(eY()-ey)*ti&&(T=1e-4),T!==P&&tb.enabled){if(d=(p=(o=tb.isActive=!!T&&T<1)!=(!!P&&P<1))||!!T!=!!P,tb.direction=T>P?1:-1,tb.progress=T,d&&!ew&&(s=T&&!P?0:1===T?1:1===P?2:3,tp&&(a=!p&&"none"!==ty[s+1]&&ty[s+1]||ty[s],m=i&&("complete"===a||"reset"===a||a in i))),tc&&(p||m)&&(m||J||!i)&&(ie(tc)?tc(tb):tb.getTrailing(tc).forEach(function(t){return t.endAnimation()})),!tp&&(!R||ew||eq?i&&i.totalProgress(T,!!(ew&&(tC||t))):(R._dp._time-R._start!==R._time&&R.render(R._dp._time-R._start),R.resetTo?R.resetTo("totalProgress",T,i._tTime/i._tDur):(// legacy support (courtesy), before 3.10.0
R.vars.totalProgress=T,R.invalidate().restart()))),Q){if(t&&tt&&(b.style[tt+td.os2]=E),tg){if(d){if(f=!t&&T>P&&c+1>g&&g+1>=e9(t_,td),ta){if(!t&&(o||f)){var k=iP(Q,!0),B=g-l;ns(Q,e_,k.top+(td===et?B:0)+"px",k.left+(td===et?0:B)+"px")}else ns(Q,b)}nt(o||f?x:w),O&&T<1&&o||M(C+(1!==T||f?0:S))}}else M(e1(C+S*T))}!ts||r.tween||ew||eq||F.restart(!0),V&&(p||tr&&T&&(T<1||!eF))&&eg(V.targets).forEach(function(t){return t.classList[o||tr?"add":"remove"](V.className)}),!Y||tp||t||Y(tb),d&&!ew?(tp&&(m&&("complete"===a?i.pause().totalProgress(1):"reset"===a?i.restart(!0).pause():"restart"===a?i.restart(!0):i[a]()),Y&&Y(tb)),(p||!eF)&&(// on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
G&&p&&is(tb,G),tv[s]&&is(tb,tv[s]),tr&&(1===T?tb.kill(!1,1):tv[s]=0),!p&&tv[// it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
s=1===T?1:3]&&is(tb,tv[s])),tl&&!o&&Math.abs(tb.getVelocity())>(ii(tl)?tl:2500)&&(ir(tb.callbackAnimation),R?R.progress(1):ir(i,"reverse"===a?1:!T,1))):tp&&Y&&!ew&&Y(tb)}// update absolutely-positioned markers (only if the scroller isn't the viewport)
if(A){var D=tu?g/tu.duration()*(tu._caScrollDist||0):g;z(D+(_._isFlipped?1:0)),A(D)}W&&W(-g/tu.duration()*(tu._caScrollDist||0))}},tb.enable=function(e,i){tb.enabled||(tb.enabled=!0,iE(t_,"resize",iW),tm||iE(t_,"scroll",ij),tT&&iE(t,"refreshInit",tT),!1!==e&&(tb.progress=tS=0,h=u=tM=tE()),!1!==i&&tb.refresh())},tb.getTween=function(t){return t&&r?r.tween:R},tb.setPositions=function(t,e,i,n){// doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
if(tu){// convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
var o=tu.scrollTrigger,r=tu.duration(),s=o.end-o.start;t=o.start+s*t/r,e=o.start+s*e/r}tb.refresh(!1,!1,{start:eJ(t,i&&!!tb._startClamp),end:eJ(e,i&&!!tb._endClamp)},n),tb.update()},tb.adjustPinSpacing=function(t){if(k&&t){var e=k.indexOf(td.d)+1;k[e]=parseFloat(k[e])+t+"px",k[1]=parseFloat(k[1])+t+"px",nt(k)}},tb.disable=function(e,i){if(tb.enabled&&(!1!==e&&tb.revert(!0,!0),tb.enabled=tb.isActive=!1,i||R&&R.pause(),j=0,s&&(s.uncache=1),tT&&ik(t,"refreshInit",tT),F&&(F.pause(),r.tween&&r.tween.kill()&&(r.tween=0)),!tm)){for(var n=iD.length;n--;)if(iD[n].scroller===t_&&iD[n]!==tb)return;//don't remove the listeners if there are still other triggers referencing it.
ik(t_,"resize",iW),tm||ik(t_,"scroll",ij)}},tb.kill=function(t,n){tb.disable(t,n),R&&!n&&R.kill(),X&&delete iN[X];var o=iD.indexOf(tb);o>=0&&iD.splice(o,1),o===eP&&i5>0&&eP--,// if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.
o=0,iD.forEach(function(t){return t.scroller===tb.scroller&&(o=1)}),o||eH||(tb.scroll.rec=0),i&&(i.scrollTrigger=null,t&&i.revert({kill:!1}),n||i.kill()),d&&[d,p,_,f].forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),eU===tb&&(eU=0),Q&&(s&&(s.uncache=1),o=0,iD.forEach(function(t){return t.pin===Q&&o++}),o||(s.spacer=0)),e.onKill&&e.onKill(tb)},iD.push(tb),tb.enable(!1,!1),U&&U(tb),i&&i.add&&!v){// if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
var tA=tb.update;// some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().
tb.update=function(){tb.update=tA,l||c||tb.refresh()},eu.delayedCall(.01,tb.update),v=.01,l=c=0}else tb.refresh();Q&&iQ()},t.register=function(e){return el||(eu=e||e5(),e2()&&window.document&&t.enable(),el=eG),el},t.defaults=function(t){if(t)for(var e in t)iA[e]=t[e];return iA},t.disable=function(t,e){eG=0,iD.forEach(function(i){return i[e?"kill":"disable"](t)}),ik(ec,"wheel",ij),ik(ed,"scroll",ij),clearInterval(ex),ik(ed,"touchcancel",e0),ik(e_,"touchstart",e0),iS(ik,ed,"pointerdown,touchstart,mousedown",e$),iS(ik,ed,"pointerup,touchend,mouseup",eQ),em.kill(),e7(ik);for(var i=0;i<tK.length;i+=3)iz(ik,tK[i],tK[i+1]),iz(ik,tK[i],tK[i+2])},t.enable=function(){if(ec=window,ep=(ed=document).documentElement,e_=ed.body,eu&&(eg=eu.utils.toArray,ev=eu.utils.clamp,eZ=eu.core.context||e0,eE=eu.core.suppressOverwrites||e0,eR=ec.history.scrollRestoration||"auto",i2=ec.pageYOffset,eu.core.globals("ScrollTrigger",t),e_)){eG=1,(eD=document.createElement("div")).style.height="100vh",eD.style.position="absolute",i0(),function t(){return eG&&requestAnimationFrame(t)}(),eh.register(eu),t.isTouch=eh.isTouch,eI=eh.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),iE(ec,"wheel",ij),ef=[ec,ed,ep,e_],eu.matchMedia?(t.matchMedia=function(t){var e,i=eu.matchMedia();for(e in t)i.add(e,t[e]);return i},eu.addEventListener("matchMediaInit",function(){return iK()}),eu.addEventListener("matchMediaRevert",function(){return iG()}),eu.addEventListener("matchMedia",function(){i1(0,1),iV("matchMedia")}),eu.matchMedia("(orientation: portrait)",function(){return(// when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
iH(),iH)})):console.warn("Requires GSAP 3.11.0 or later"),iH(),iE(ed,"scroll",ij);var e,i,n=e_.style,o=n.borderTopStyle,r=eu.core.Animation.prototype;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",e=iP(e_),et.m=Math.round(e.top+et.sc())||0,t7.m=Math.round(e.left+t7.sc())||0,o?n.borderTopStyle=o:n.removeProperty("border-top-style"),ex=setInterval(iF,250),eu.delayedCall(.5,function(){return eq=0}),iE(ed,"touchcancel",e0),iE(e_,"touchstart",e0),iS(iE,ed,"pointerdown,touchstart,mousedown",e$),iS(iE,ed,"pointerup,touchend,mouseup",eQ),eT=eu.utils.checkPrefix("transform"),i4.push(eT),el=eY(),em=eu.delayedCall(.2,i1).pause(),eC=[ed,"visibilitychange",function(){var t=ec.innerWidth,e=ec.innerHeight;ed.hidden?(eL=t,eM=e):(eL!==t||eM!==e)&&iW()},ed,"DOMContentLoaded",i1,ec,"load",i1,ec,"resize",iW],e7(iE),iD.forEach(function(t){return t.enable(0,1)}),i=0;i<tK.length;i+=3)iz(ik,tK[i],tK[i+1]),iz(ik,tK[i],tK[i+2])}},t.config=function(e){"limitCallbacks"in e&&(eF=!!e.limitCallbacks);var i=e.syncInterval;i&&clearInterval(ex)||(ex=i)&&setInterval(iF,i),"ignoreMobileResize"in e&&(eO=1===t.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(e7(ik)||e7(iE,e.autoRefreshEvents||"none"),ek=-1===(e.autoRefreshEvents+"").indexOf("resize"))},t.scrollerProxy=function(t,e){var i=ee(t),n=tK.indexOf(i),o=e3(i);~n&&tK.splice(n,o?6:2),e&&(o?tJ.unshift(ec,e,e_,e,ep,e):tJ.unshift(i,e))},t.clearMatchMedia=function(t){iD.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},t.isInViewport=function(t,e,i){var n=(it(t)?ee(t):t).getBoundingClientRect(),o=n[i?ic:id]*e||0;return i?n.right-o>0&&n.left+o<ec.innerWidth:n.bottom-o>0&&n.top+o<ec.innerHeight},t.positionInViewport=function(t,e,i){it(t)&&(t=ee(t));var n=t.getBoundingClientRect(),o=n[i?ic:id],r=null==e?o/2:e in iB?iB[e]*o:~e.indexOf("%")?parseFloat(e)*o/100:parseFloat(e)||0;return i?(n.left+r)/ec.innerWidth:(n.top+r)/ec.innerHeight},t.killAll=function(t){if(iD.slice(0).forEach(function(t){return"ScrollSmoother"!==t.vars.id&&t.kill()}),!0!==t){var e=iU.killAll||[];iU={},e.forEach(function(t){return t()})}},t}();nl.version="3.12.2",nl.saveStyles=function(t){return t?eg(t).forEach(function(t){// saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
if(t&&t.style){var e=iX.indexOf(t);e>=0&&iX.splice(e,5),iX.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),eu.core.getCache(t),eZ())}}):iX},nl.revert=function(t,e){return iK(!t,e)},nl.create=function(t,e){return new nl(t,e)},nl.refresh=function(t){return t?iW():(el||nl.register())&&i1(!0)},nl.update=function(t){return++tK.cache&&i3(!0===t?2:0)},nl.clearScrollMemory=iJ,nl.maxScroll=function(t,e){return e9(t,e?t7:et)},nl.getScrollFunc=function(t,e){return ei(ee(t),e?t7:et)},nl.getById=function(t){return iN[t]},nl.getAll=function(){return iD.filter(function(t){return"ScrollSmoother"!==t.vars.id})},nl.isScrolling=function(){return!!eX},nl.snapDirectional=iC,nl.addEventListener=function(t,e){var i=iU[t]||(iU[t]=[]);~i.indexOf(e)||i.push(e)},nl.removeEventListener=function(t,e){var i=iU[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},nl.batch=function(t,e){var i,n=[],o={},r=e.interval||.016,s=e.batchMax||1e9,a=function(t,e){var i=[],n=[],o=eu.delayedCall(r,function(){e(i,n),i=[],n=[]}).pause();return function(t){i.length||o.restart(!0),i.push(t.trigger),n.push(t),s<=i.length&&o.progress(1)}};for(i in e)o[i]="on"===i.substr(0,2)&&ie(e[i])&&"onRefreshInit"!==i?a(i,e[i]):e[i];return ie(s)&&(s=s(),iE(nl,"refresh",function(){return s=e.batchMax()})),eg(t).forEach(function(t){var e={};for(i in o)e[i]=o[i];e.trigger=t,n.push(nl.create(e))}),n};var nc,nd=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},np=function t(e,i){!0===i?e.style.removeProperty("touch-action"):e.style.touchAction=!0===i?"auto":i?"pan-"+i+(eh.isTouch?" pinch-zoom":""):"none",e===ep&&t(e_,i)},n_={auto:1,scroll:1},nf=function(t){var e,i=t.event,n=t.target,o=t.axis,r=(i.changedTouches?i.changedTouches[0]:i).target,s=r._gsap||eu.core.getCache(r),a=eY();if(!s._isScrollT||a-s._isScrollT>2e3){// cache for 2 seconds to improve performance.
for(;r&&r!==e_&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(n_[(e=iw(r)).overflowY]||n_[e.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!e3(r)&&(n_[(e=iw(r)).overflowY]||n_[e.overflowX]),s._isScrollT=a}(s._isScroll||"x"===o)&&(i.stopPropagation(),i._gsapAllow=!0)},nm=function(t,e,i,n){return eh.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&nf,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&iE(ed,eh.eventTypes[0],nv,!1,!0)},onDisable:function(){return ik(ed,eh.eventTypes[0],nv,!0)}})},ng=/(input|label|select|textarea)/i,nv=function(t){var e=ng.test(t.target.tagName);(e||nc)&&(t._gsapAllow=!0,nc=e)},ny=function(t){io(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e,i,n,o,r,s,a,h,u=t,l=u.normalizeScrollX,c=u.momentum,d=u.allowNestedScroll,p=u.onRelease,_=ee(t.target)||ep,f=eu.core.globals().ScrollSmoother,m=f&&f.get(),g=eI&&(t.content&&ee(t.content)||m&&!1!==t.content&&!m.smooth()&&m.content()),v=ei(_,et),y=ei(_,t7),x=1,w=(eh.isTouch&&ec.visualViewport?ec.visualViewport.scale*ec.visualViewport.width:ec.outerWidth)/ec.innerWidth,b=0,T=ie(c)?function(){return c(e)}:function(){return c||2.8},P=nm(_,t.type,!0,d),M=function(){return o=!1},C=e0,S=e0,E=function(){i=e9(_,et),S=ev(eI?1:0,i),l&&(C=ev(0,e9(_,t7))),n=i$},k=function(){g._gsap.y=e1(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},z=function(){if(o){requestAnimationFrame(M);var t=e1(e.deltaY/2),i=S(v.v-t);if(g&&i!==v.v+v.offset){v.offset=i-v.v;var n=e1((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+n+", 0, 1)",g._gsap.y=n+"px",v.cacheID=tK.cache,i3()}return!0}v.offset&&k(),o=!0},O=function(){// if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
E(),r.isActive()&&r.vars.scrollY>i&&(v()>i?r.progress(1)&&v(i):r.resetTo("scrollY",i))};return g&&eu.set(g,{y:"+=0"}),t.ignoreCheck=function(t){return eI&&"touchmove"===t.type&&z(t)||x>1.05&&"touchstart"!==t.type||e.isGesturing||t.touches&&t.touches.length>1},t.onPress=function(){o=!1;var t=x;x=e1((ec.visualViewport&&ec.visualViewport.scale||1)/w),r.pause(),t!==x&&np(_,x>1.01||!l&&"x"),s=y(),a=v(),E(),n=i$},t.onRelease=t.onGestureStart=function(t,e){if(v.offset&&k(),e){tK.cache++;// alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
var n,o,s=T();l&&(o=(n=y())+-(.05*s*t.velocityX)/.227,s*=nd(y,n,o,e9(_,t7)),r.vars.scrollX=C(o)),o=(n=v())+-(.05*s*t.velocityY)/.227,s*=nd(v,n,o,e9(_,et)),r.vars.scrollY=S(o),r.invalidate().duration(s).play(.01),(eI&&r.vars.scrollY>=i||n>=i-1)&&eu.to({},{onUpdate:O,duration:s})}else h.restart(!0);p&&p(t)},t.onWheel=function(){r._ts&&r.pause(),eY()-b>1e3&&(// after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
n=0,b=eY())},t.onChange=function(t,e,i,o,r){if(i$!==n&&E(),e&&l&&y(C(o[2]===e?s+(t.startX-t.x):y()+e-o[1])),i){v.offset&&k();var h=r[2]===i,u=h?a+t.startY-t.y:v()+i-r[1],c=S(u);h&&u!==c&&(a+=c-u),v(c)}(i||e)&&i3()},t.onEnable=function(){np(_,!l&&"x"),nl.addEventListener("refresh",O),iE(ec,"resize",O),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=y.smooth=!1),P.enable()},t.onDisable=function(){np(_,!0),ik(ec,"resize",O),nl.removeEventListener("refresh",O),P.kill()},t.lockAxis=!1!==t.lockAxis,(e=new eh(t)).iOS=eI,eI&&!v()&&v(1),eI&&eu.ticker.add(e0),h=e._dc,r=eu.to(e,{ease:"power4",paused:!0,scrollX:l?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:na(v,v(),function(){return r.pause()})},onUpdate:i3,onComplete:h.vars.onComplete}),e};nl.sort=function(t){return iD.sort(t||function(t,e){return -1e6*(t.vars.refreshPriority||0)+t.start-(e.start+-1e6*(e.vars.refreshPriority||0))})},nl.observe=function(t){return new eh(t)},nl.normalizeScroll=function(t){if(void 0===t)return ez;if(!0===t&&ez)return ez.enable();if(!1===t)return ez&&ez.kill();var e=t instanceof eh?t:ny(t);return ez&&ez.target===e.target&&ez.kill(),e3(e.target)&&(ez=e),e},nl.core={// smaller file size way to leverage in ScrollSmoother and Observer
_getVelocityProp:en,_inputObserver:nm,_scrollers:tK,_proxies:tJ,bridge:{// when normalizeScroll sets the scroll position (ss = setScroll)
ss:function(){eX||iV("scrollStart"),eX=eY()},// a way to get the _refreshing value in Observer
ref:function(){return ew}}},e5()&&eu.registerPlugin(nl),tE.registerPlugin(nl);const nx=document.querySelector("#header-to-about path"),nw=nx.getTotalLength(),nb=tE.utils.toArray(".menu__box"),nT=()=>{tE.defaults({ease:"none"}),nx.style.strokeDasharray=nw+" "+nw,nx.style.strokeDashoffset=nw,tE.timeline({scrollTrigger:{trigger:nx,scrub:.6,start:"top 20%",end:"center top",id:"svg"}}).to(nx,{strokeDashoffset:nw-(nw-(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight))}),nb.forEach(t=>{let e=t.querySelector("img"),i=t.querySelector(".menu__box__photo__haikei"),n=t.querySelector(".menu__box__items"),o=tE.timeline({defaults:{opacity:0,ease:"sine.inOut"}}).from(i,{height:0,duration:.6}).from(e,{x:-80,duration:1}).from(n,{x:50,duration:.8},"-=0.6");nl.create({trigger:t,start:"10% 90%",id:"menu",animation:o})})};!function(t){/*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function e(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++)for(e in o=arguments[i])t[e]=o[e];return t}// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var i,n,o,r,s,a,h,u,l,c,d=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function p(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var _=0;// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function f(t){return"_leaflet_id"in t||(t._leaflet_id=++_),t._leaflet_id}// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function m(t,e,i){var n,o,r,s;return s=function(){// reset lock and call if queued
n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(// call and lock until later
t.apply(i,arguments),setTimeout(s,e),n=!0)}}// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function g(t,e,i){var n=e[1],o=e[0],r=n-o;return t===n&&i?t:((t-o)%r+r)%r+o}// @function falseFn(): Function
// Returns a function which always returns `false`.
function v(){return!1}// @function formatNum(num: Number, precision?: Number|false): Number
// Returns the number `num` rounded with specified `precision`.
// The default `precision` value is 6 decimal places.
// `false` can be passed to skip any processing (can be useful to avoid round-off errors).
function y(t,e){if(!1===e)return t;var i=Math.pow(10,void 0===e?6:e);return Math.round(t*i)/i}// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function x(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function w(t){return x(t).split(/\s+/)}// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function b(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?d(t.options):{}),e)t.options[i]=e[i];return t.options}// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function T(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")}var P=/\{ *([\w_ -]+) *\}/g;// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function M(t,e){return t.replace(P,function(t,i){var n=e[i];if(void 0===n)throw Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n})}// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var C=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function S(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return -1}// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var E="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";// inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
function k(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var z=0;// fallback for IE 7-8
function O(t){var e=+new Date,i=Math.max(0,16-(e-z));return z=e+i,window.setTimeout(t,i)}var A=window.requestAnimationFrame||k("RequestAnimationFrame")||O,B=window.cancelAnimationFrame||k("CancelAnimationFrame")||k("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function I(t,e,i){if(!i||A!==O)return A.call(window,p(t,e));t.call(e)}// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function Z(t){t&&B.call(window,t)}// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
function R(){}R.extend=function(t){// @function extend(props: Object): Function
// [Extends the current class](#class-inheritance) given the properties to be included.
// Returns a Javascript function that is a class constructor (to be called with `new`).
var i=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),// call all constructor hooks
this.callInitHooks()},n=i.__super__=this.prototype,o=d(n);// inherit parent's statics
for(var r in o.constructor=i,i.prototype=o,this)Object.prototype.hasOwnProperty.call(this,r)&&"prototype"!==r&&"__super__"!==r&&(i[r]=this[r]);return t.statics&&e(i,t.statics),t.includes&&(function(t){/* global L: true */if("undefined"!=typeof L&&L&&L.Mixin){t=C(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",Error().stack)}}(t.includes),e.apply(null,[o].concat(t.includes))),// mix given properties into the prototype
e(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?d(n.options):{},e(o.options,t.options)),o._initHooks=[],// add method for calling all hooks
o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},i},// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
R.include=function(t){var i=this.prototype.options;return e(this.prototype,t),t.options&&(this.prototype.options=i,this.mergeOptions(t.options)),this},// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
R.mergeOptions=function(t){return e(this.prototype.options,t),this},// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
R.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};/*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */var D={/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */on:function(t,e,i){// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],e);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i)}return this},/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */off:function(t,e,i){if(arguments.length){if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=w(t);for(var o=1==arguments.length,r=0,s=t.length;r<s;r++)o?this._off(t[r]):this._off(t[r],e,i)}}else delete this._events;return this},// attach listener (without syntactic sugar now)
_on:function(t,e,i,n){if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// check if fn already there
if(!1===this._listens(t,e,i)){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){if(this._events&&(n=this._events[t])){if(1==arguments.length){if(this._firingCount)// so they are not called if remove happens in fire
for(o=0,r=n.length;o<r;o++)n[o].fn=v;// clear all listeners for a type if function isn't specified
delete this._events[t];return}if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// find fn and remove it
var n,o,r,s=this._listens(t,e,i);if(!1!==s){var a=n[s];this._firingCount&&(// set the removed listener to noop so that's not called if remove happens in fire
a.fn=v,/* copy array in case events are being fired */this._events[t]=n=n.slice()),n.splice(s,1)}}},// @method fire(type: String, data?: Object, propagate?: Boolean): this
// Fires an event of the specified type. You can optionally provide a data
// object — the first argument of the listener function will contain its
// properties. The event can optionally be propagated to event parents.
fire:function(t,i,n){if(!this.listens(t,n))return this;var o=e({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var r=this._events[t];if(r){this._firingCount=this._firingCount+1||1;for(var s=0,a=r.length;s<a;s++){var h=r[s],u=h.fn;h.once&&this.off(t,u,h.ctx),u.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},// @method listens(type: String, propagate?: Boolean): Boolean
// @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
// Returns `true` if a particular event type has any listeners attached to it.
// The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');// we don't overwrite the input `fn` value, because we need to use it for propagation
var o=e;"function"!=typeof e&&(n=!!e,o=void 0,i=void 0);var r=this._events&&this._events[t];if(r&&r.length&&!1!==this._listens(t,o,i))return!0;if(n){for(var s in this._eventParents)if(this._eventParents[s].listens(t,e,i,n))return!0}return!1},// returns the index (number) or false
_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,r=n.length;o<r;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},// @method once(…): this
// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
once:function(t,e,i){// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],e,!0);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i,!0)}return this},// @method addEventParent(obj: Evented): this
// Adds an event parent - an `Evented` that will receive propagated events
addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},// @method removeEventParent(obj: Evented): this
// Removes an event parent, so it will stop receiving propagated events
removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,e({layer:t.target,propagatedFrom:t.target},t),!0)}};// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
D.addEventListener=D.on,// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
D.removeEventListener=D.clearAllEventListeners=D.off,// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
D.addOneTimeEventListener=D.once,// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
D.fireEvent=D.fire,// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
D.hasEventListeners=D.listens;var N=R.extend(D);/*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function F(t,e,i){// @property x: Number; The `x` coordinate of the point
this.x=i?Math.round(t):t,// @property y: Number; The `y` coordinate of the point
this.y=i?Math.round(e):e}var j=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function H(t,e,i){return t instanceof F?t:C(t)?new F(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new F(t.x,t.y):new F(t,e,i)}/*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function W(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function U(t,e){return!t||t instanceof W?t:new W(t,e)}/*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function q(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function Y(t,e){return t instanceof q?t:new q(t,e)}/* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function V(t,e,i){if(isNaN(t)||isNaN(e))throw Error("Invalid LatLng object: ("+t+", "+e+")");// @property lat: Number
// Latitude in degrees
this.lat=+t,// @property lng: Number
// Longitude in degrees
this.lng=+e,void 0!==i&&(this.alt=+i)}// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
function X(t,e,i){return t instanceof V?t:C(t)&&"object"!=typeof t[0]?3===t.length?new V(t[0],t[1],t[2]):2===t.length?new V(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new V(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new V(t,e,i)}F.prototype={// @method clone(): Point
// Returns a copy of the current point.
clone:function(){return new F(this.x,this.y)},// @method add(otherPoint: Point): Point
// Returns the result of addition of the current and the given points.
add:function(t){// non-destructive, returns a new point
return this.clone()._add(H(t))},_add:function(t){return(// destructive, used directly for performance in situations where it's safe to modify existing point
this.x+=t.x,this.y+=t.y,this)},// @method subtract(otherPoint: Point): Point
// Returns the result of subtraction of the given point from the current.
subtract:function(t){return this.clone()._subtract(H(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},// @method divideBy(num: Number): Point
// Returns the result of division of the current point by the given number.
divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},// @method multiplyBy(num: Number): Point
// Returns the result of multiplication of the current point by the given number.
multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},// @method scaleBy(scale: Point): Point
// Multiply each coordinate of the current point by each coordinate of
// `scale`. In linear algebra terms, multiply the point by the
// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
// defined by `scale`.
scaleBy:function(t){return new F(this.x*t.x,this.y*t.y)},// @method unscaleBy(scale: Point): Point
// Inverse of `scaleBy`. Divide each coordinate of the current point by
// each coordinate of `scale`.
unscaleBy:function(t){return new F(this.x/t.x,this.y/t.y)},// @method round(): Point
// Returns a copy of the current point with rounded coordinates.
round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},// @method floor(): Point
// Returns a copy of the current point with floored coordinates (rounded down).
floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},// @method ceil(): Point
// Returns a copy of the current point with ceiled coordinates (rounded up).
ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},// @method trunc(): Point
// Returns a copy of the current point with truncated coordinates (rounded towards zero).
trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=j(this.x),this.y=j(this.y),this},// @method distanceTo(otherPoint: Point): Number
// Returns the cartesian distance between the current and the given points.
distanceTo:function(t){var e=(t=H(t)).x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},// @method equals(otherPoint: Point): Boolean
// Returns `true` if the given point has the same coordinates.
equals:function(t){return(t=H(t)).x===this.x&&t.y===this.y},// @method contains(otherPoint: Point): Boolean
// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
contains:function(t){return Math.abs((t=H(t)).x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},// @method toString(): String
// Returns a string representation of the point for debugging purposes.
toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}},W.prototype={// @method extend(point: Point): this
// Extends the bounds to contain the given point.
// @alternative
// @method extend(otherBounds: Bounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,i;if(!t)return this;if(t instanceof F||"number"==typeof t[0]||"x"in t)e=i=H(t);else if(e=(t=U(t)).min,i=t.max,!e||!i)return this;return this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone()),this},// @method getCenter(round?: Boolean): Point
// Returns the center point of the bounds.
getCenter:function(t){return H((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},// @method getBottomLeft(): Point
// Returns the bottom-left point of the bounds.
getBottomLeft:function(){return H(this.min.x,this.max.y)},// @method getTopRight(): Point
// Returns the top-right point of the bounds.
getTopRight:function(){return H(this.max.x,this.min.y)},// @method getTopLeft(): Point
// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
getTopLeft:function(){return this.min;// left, top
},// @method getBottomRight(): Point
// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
getBottomRight:function(){return this.max;// right, bottom
},// @method getSize(): Point
// Returns the size of the given bounds
getSize:function(){return this.max.subtract(this.min)},// @method contains(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains(point: Point): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){var e,i;return(t="number"==typeof t[0]||t instanceof F?H(t):U(t))instanceof W?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},// @method intersects(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds
// intersect if they have at least one point in common.
intersects:function(t){t=U(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>=e.x&&n.x<=i.x,s=o.y>=e.y&&n.y<=i.y;return r&&s},// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds
// overlap if their intersection is an area.
overlaps:function(t){t=U(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>e.x&&n.x<i.x,s=o.y>e.y&&n.y<i.y;return r&&s},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this.min&&this.max)},// @method pad(bufferRatio: Number): Bounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return U(H(e.x-n,e.y-o),H(i.x+n,i.y+o))},// @method equals(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle is equivalent to the given bounds.
equals:function(t){return!!t&&(t=U(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},q.prototype={// @method extend(latlng: LatLng): this
// Extend the bounds to contain the given point
// @alternative
// @method extend(otherBounds: LatLngBounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof V)e=t,i=t;else if(!(t instanceof q))return t?this.extend(X(t)||Y(t)):this;else if(e=t._southWest,i=t._northEast,!e||!i)return this;return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new V(e.lat,e.lng),this._northEast=new V(i.lat,i.lng)),this},// @method pad(bufferRatio: Number): LatLngBounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new q(new V(e.lat-n,e.lng-o),new V(i.lat+n,i.lng+o))},// @method getCenter(): LatLng
// Returns the center point of the bounds.
getCenter:function(){return new V((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},// @method getSouthWest(): LatLng
// Returns the south-west point of the bounds.
getSouthWest:function(){return this._southWest},// @method getNorthEast(): LatLng
// Returns the north-east point of the bounds.
getNorthEast:function(){return this._northEast},// @method getNorthWest(): LatLng
// Returns the north-west point of the bounds.
getNorthWest:function(){return new V(this.getNorth(),this.getWest())},// @method getSouthEast(): LatLng
// Returns the south-east point of the bounds.
getSouthEast:function(){return new V(this.getSouth(),this.getEast())},// @method getWest(): Number
// Returns the west longitude of the bounds
getWest:function(){return this._southWest.lng},// @method getSouth(): Number
// Returns the south latitude of the bounds
getSouth:function(){return this._southWest.lat},// @method getEast(): Number
// Returns the east longitude of the bounds
getEast:function(){return this._northEast.lng},// @method getNorth(): Number
// Returns the north latitude of the bounds
getNorth:function(){return this._northEast.lat},// @method contains(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains (latlng: LatLng): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){t="number"==typeof t[0]||t instanceof V||"lat"in t?X(t):Y(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof q?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},// @method intersects(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
intersects:function(t){t=Y(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&n.lat<=i.lat,s=o.lng>=e.lng&&n.lng<=i.lng;return r&&s},// @method overlaps(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
overlaps:function(t){t=Y(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&n.lat<i.lat,s=o.lng>e.lng&&n.lng<i.lng;return r&&s},// @method toBBoxString(): String
// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=Y(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this._southWest&&this._northEast)}},V.prototype={// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=X(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},// @method toString(): String
// Returns a string representation of the point (for debugging purposes).
toString:function(t){return"LatLng("+y(this.lat,t)+", "+y(this.lng,t)+")"},// @method distanceTo(otherLatLng: LatLng): Number
// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
distanceTo:function(t){return K.distance(this,X(t))},// @method wrap(): LatLng
// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
wrap:function(){return K.wrapLatLng(this)},// @method toBounds(sizeInMeters: Number): LatLngBounds
// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return Y([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new V(this.lat,this.lng,this.alt)}};/*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */var G={// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
// Projects geographical coordinates into pixel coordinates for a given zoom.
latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},// @method pointToLatLng(point: Point, zoom: Number): LatLng
// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
// zoom into geographical coordinates.
pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},// @method project(latlng: LatLng): Point
// Projects geographical coordinates into coordinates in units accepted for
// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
project:function(t){return this.projection.project(t)},// @method unproject(point: Point): LatLng
// Given a projected coordinate returns the corresponding LatLng.
// The inverse of `project`.
unproject:function(t){return this.projection.unproject(t)},// @method scale(zoom: Number): Number
// Returns the scale used when transforming projected coordinates into
// pixel coordinates for a particular zoom. For example, it returns
// `256 * 2^zoom` for Mercator-based CRS.
scale:function(t){return 256*Math.pow(2,t)},// @method zoom(scale: Number): Number
// Inverse of `scale()`, returns the zoom level corresponding to a scale
// factor of `scale`.
zoom:function(t){return Math.log(t/256)/Math.LN2},// @method getProjectedBounds(zoom: Number): Bounds
// Returns the projection's bounds scaled and transformed for the provided `zoom`.
getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t);return new W(this.transformation.transform(e.min,i),this.transformation.transform(e.max,i))},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates.
// @property code: String
// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
//
// @property wrapLng: Number[]
// An array of two numbers defining whether the longitude (horizontal) coordinate
// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
//
// @property wrapLat: Number[]
// Like `wrapLng`, but for the latitude (vertical) axis.
// wrapLng: [min, max],
// wrapLat: [min, max],
// @property infinite: Boolean
// If true, the coordinate space will be unbounded (infinite in both axes)
infinite:!1,// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where lat and lng has been wrapped according to the
// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
wrapLatLng:function(t){var e=this.wrapLng?g(t.lng,this.wrapLng,!0):t.lng;return new V(this.wrapLat?g(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring
// that its center is within the CRS's bounds.
// Only accepts actual `L.LatLngBounds` instances, not arrays.
wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(0===n&&0===o)return t;var r=t.getSouthWest(),s=t.getNorthEast();return new q(new V(r.lat-n,r.lng-o),new V(s.lat-n,s.lng-o))}},K=e({},G,{wrapLng:[-180,180],// Mean Earth Radius, as recommended for use by
// the International Union of Geodesy and Geophysics,
// see https://rosettacode.org/wiki/Haversine_formula
R:6371e3,// distance between two geographical points using spherical law of cosines approximation
distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,r=Math.sin((e.lat-t.lat)*i/2),s=Math.sin((e.lng-t.lng)*i/2),a=r*r+Math.cos(n)*Math.cos(o)*s*s,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),J={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.sin(Math.max(Math.min(i,t.lat),-i)*e);return new F(this.R*t.lng*e,this.R*Math.log((1+n)/(1-n))/2)},unproject:function(t){var e=180/Math.PI;return new V((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:new W([-(h=6378137*Math.PI),-h],[h,h])};/*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function $(t,e,i,n){if(C(t)){// use array properties
this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
function Q(t,e,i,n){return new $(t,e,i,n)}$.prototype={// @method transform(point: Point, scale?: Number): Point
// Returns a transformed point, optionally multiplied by the given scale.
// Only accepts actual `L.Point` instances, not arrays.
transform:function(t,e){return this._transform(t.clone(),e)},// destructive transform (faster)
_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},// @method untransform(point: Point, scale?: Number): Point
// Returns the reverse transformation of the given point, optionally divided
// by the given scale. Only accepts actual `L.Point` instances, not arrays.
untransform:function(t,e){return e=e||1,new F((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};/*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */var tt=e({},K,{code:"EPSG:3857",projection:J,transformation:Q(u=.5/(Math.PI*J.R),.5,-u,.5)}),te=e({},tt,{code:"EPSG:900913"});// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function ti(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function tn(t,e){var i,n,o,r,s,a,h="";for(i=0,o=t.length;i<o;i++){for(n=0,r=(s=t[i]).length;n<r;n++)a=s[n],h+=(n?"L":"M")+a.x+" "+a.y;// closes the ring for polygons; "x" is VML syntax
h+=e?tZ.svg?"z":"x":""}// SVG complains about empty path strings
return h||"M0 0"}/*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */var to=document.documentElement.style,tr="ActiveXObject"in window,ts=tr&&!document.addEventListener,ta="msLaunchUri"in navigator&&!("documentMode"in document),th=tI("webkit"),tu=tI("android"),tl=tI("android 2")||tI("android 3"),tc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),td=tu&&tI("Google")&&tc<537&&!("AudioNode"in window),tp=!!window.opera,t_=!ta&&tI("chrome"),tf=tI("gecko")&&!th&&!tp&&!tr,tm=!t_&&tI("safari"),tg=tI("phantom"),tv="OTransition"in to,ty=0===navigator.platform.indexOf("Win"),tx=tr&&"transition"in to,tw="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!tl,tb="MozPerspective"in to,tT=!window.L_DISABLE_3D&&(tx||tw||tb)&&!tv&&!tg,tP="undefined"!=typeof orientation||tI("mobile"),tL=!window.PointerEvent&&window.MSPointerEvent,tM=!!(window.PointerEvent||tL),tC="ontouchstart"in window||!!window.TouchEvent,tS=!window.L_NO_TOUCH&&(tC||tM),tE=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,tk=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",v,e),window.removeEventListener("testPassiveEventSupport",v,e)}catch(t){// Errors can safely be ignored since this is only a browser support test.
}return t}(),tz=!!document.createElement("canvas").getContext,tO=!!(document.createElementNS&&ti("svg").createSVGRect),tA=!!tO&&((l=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(l.firstChild&&l.firstChild.namespaceURI)),tB=!tO&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}();function tI(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var tZ={ie:tr,ielt9:ts,edge:ta,webkit:th,android:tu,android23:tl,androidStock:td,opera:tp,chrome:t_,gecko:tf,safari:tm,phantom:tg,opera12:tv,win:ty,ie3d:tx,webkit3d:tw,gecko3d:tb,any3d:tT,mobile:tP,mobileWebkit:tP&&th,mobileWebkit3d:tP&&tw,msPointer:tL,pointer:tM,touch:tS,touchNative:tC,mobileOpera:tP&&tp,mobileGecko:tP&&tf,retina:tE,passiveEvents:tk,canvas:tz,svg:tO,vml:tB,inlineSvg:tA,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},tR=tZ.msPointer?"MSPointerDown":"pointerdown",tD=tZ.msPointer?"MSPointerMove":"pointermove",tN=tZ.msPointer?"MSPointerUp":"pointerup",tF=tZ.msPointer?"MSPointerCancel":"pointercancel",tj={touchstart:tR,touchmove:tD,touchend:tN,touchcancel:tF},tH={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&eb(e),tX(t,e)},touchmove:tX,touchend:tX,touchcancel:tX},tW={},tU=!1;function tq(t){tW[t.pointerId]=t}function tY(t){tW[t.pointerId]&&(tW[t.pointerId]=t)}function tV(t){delete tW[t.pointerId]}function tX(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],tW)e.touches.push(tW[i]);e.changedTouches=[e],t(e)}}/*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var tG=ee(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),tK=ee(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),tJ="webkitTransition"===tK||"OTransition"===tK?tK+"End":"transitionend";// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function t$(t){return"string"==typeof t?document.getElementById(t):t}// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function tQ(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||"auto"===i)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return"auto"===i?null:i}// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function t0(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function t1(t){var e=t.parentNode;e&&e.removeChild(t)}// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function t2(t){for(;t.firstChild;)t.removeChild(t.firstChild)}// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function t5(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function t3(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function t8(t,e){if(void 0!==t.classList)return t.classList.contains(e);var i=t7(t);return i.length>0&&RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function t4(t,e){if(void 0!==t.classList)for(var i=w(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!t8(t,e)){var r=t7(t);t9(t,(r?r+" ":"")+e)}}// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function t6(t,e){void 0!==t.classList?t.classList.remove(e):t9(t,x((" "+t7(t)+" ").replace(" "+e+" "," ")))}// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function t9(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}// @function getClass(el: HTMLElement): String
// Returns the element's class.
function t7(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function et(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";// filters collection throws an error if we try to retrieve a filter that doesn't exist
try{i=t.filters.item(n)}catch(t){// don't set opacity to 1 if we haven't already set an opacity,
// it isn't needed and breaks transparent pngs.
if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}(t,e)}// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function ee(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function ei(t,e,i){var n=e||new F(0,0);t.style[tG]=(tZ.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function en(t,e){/*eslint-disable */t._leaflet_pos=e,tZ.any3d?ei(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function eo(t){// this method is only used for elements previously positioned using setPosition,
// so it's safe to cache the position for performance
return t._leaflet_pos||new F(0,0)}if("onselectstart"in document)i=function(){ed(window,"selectstart",eb)},n=function(){e_(window,"selectstart",eb)};else{var er=ee(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);i=function(){if(er){var t=document.documentElement.style;o=t[er],t[er]="none"}},n=function(){er&&(document.documentElement.style[er]=o,o=void 0)}}// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function es(){ed(window,"dragstart",eb)}// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function ea(){e_(window,"dragstart",eb)}// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function eh(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(eu(),r=t,s=t.style.outlineStyle,t.style.outlineStyle="none",ed(window,"keydown",eu))}// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function eu(){r&&(r.style.outlineStyle=s,r=void 0,s=void 0,e_(window,"keydown",eu))}// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function el(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body)return t}// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function ec(t){var e=t.getBoundingClientRect();// Read-only in old browsers.
return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}/*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function ed(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)eg(t,o,e[o],i);else{e=w(e);for(var r=0,s=e.length;r<s;r++)eg(t,e[r],i,n)}return this}var ep="_leaflet_events";// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
// @alternative
// @function off(el: HTMLElement, types: String): this
// Removes all previously added listeners of given types.
// @alternative
// @function off(el: HTMLElement): this
// Removes all previously added listeners from given HTMLElement
function e_(t,e,i,n){if(1==arguments.length)ef(t),delete t[ep];else if(e&&"object"==typeof e)for(var o in e)ev(t,o,e[o],i);else if(e=w(e),2==arguments.length)ef(t,function(t){return -1!==S(e,t)});else for(var r=0,s=e.length;r<s;r++)ev(t,e[r],i,n);return this}function ef(t,e){for(var i in t[ep]){var n=i.split(/\d/)[0];(!e||e(n))&&ev(t,n,null,null,i)}}var em={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function eg(t,e,i,n){var o=e+f(i)+(n?"_"+f(n):"");if(t[ep]&&t[ep][o])return this;var r=function(e){return i.call(n||t,e||window.event)},s=r;!tZ.touchNative&&tZ.pointer&&0===e.indexOf("touch")?r=// Provides a touch events wrapper for (ms)pointer events.
// ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
function(t,e,i){return("touchstart"===e&&(tU||(// we listen document as any drags that end by moving the touch off the screen get fired there
document.addEventListener(tR,tq,!0),document.addEventListener(tD,tY,!0),document.addEventListener(tN,tV,!0),document.addEventListener(tF,tV,!0),tU=!0)),tH[e])?(i=tH[e].bind(this,i),t.addEventListener(tj[e],i,!1),i):(console.warn("wrong event specified:",e),v)}(t,e,r):tZ.touch&&"dblclick"===e?r=function(t,e){// Most browsers handle double tap natively
t.addEventListener("dblclick",e);// On some platforms the browser doesn't fire native dblclicks for touch events.
// It seems that in all such cases `detail` property of `click` event is always `1`.
// So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
var i,n=0;function o(t){if(1!==t.detail){i=t.detail;// keep in sync to avoid false dblclick in some cases
return}if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){// When clicking on an <input>, the browser generates a click on its
// <label> (and vice versa) triggering two clicks in quick succession.
// This ignores clicks on elements which are a label with a 'for'
// attribute (or children of such a label), but not children of
// a <input>.
var o=eP(t);if(!o.some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})||o.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})){var r=Date.now();r-n<=200?2==++i&&e(/*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */function(t){// in modern browsers `type` cannot be just overridden:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return t=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):i=1,n=r}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}(t,r):"addEventListener"in t?"touchstart"===e||"touchmove"===e||"wheel"===e||"mousewheel"===e?t.addEventListener(em[e]||e,r,!!tZ.passiveEvents&&{passive:!1}):"mouseenter"===e||"mouseleave"===e?(r=function(e){eS(t,e=e||window.event)&&s(e)},t.addEventListener(em[e],r,!1)):t.addEventListener(e,s,!1):t.attachEvent("on"+e,r),t[ep]=t[ep]||{},t[ep][o]=r}function ev(t,e,i,n,o){o=o||e+f(i)+(n?"_"+f(n):"");var r=t[ep]&&t[ep][o];if(!r)return this;!tZ.touchNative&&tZ.pointer&&0===e.indexOf("touch")?function(t,e,i){if(!tj[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(tj[e],i,!1)}(t,e,r):tZ.touch&&"dblclick"===e?(t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)):"removeEventListener"in t?t.removeEventListener(em[e]||e,r,!1):t.detachEvent("on"+e,r),t[ep][o]=null}// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function ey(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
function ex(t){return eg(t,"wheel",ey),this}// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function ew(t){return ed(t,"mousedown touchstart dblclick contextmenu",ey),t._leaflet_disable_click=!0,this}// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function eb(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function eT(t){return eb(t),ey(t),this}// @function getPropagationPath(ev: DOMEvent): Array
// Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
// Returns an array containing the `HTMLElement`s that the given DOM event
// should propagate to (if not stopped).
function eP(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function eL(t,e){if(!e)return new F(t.clientX,t.clientY);var i=ec(e),n=i.boundingClientRect;// left and top  values are in page scale (like the event clientX/Y)
return new F(// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
(t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}//  except , Safari and
// We need double the scroll pixels (see #7403 and #4538) for all Browsers
// except OSX (Mac) -> 3x, Chrome running on Linux 1x
var eM=tZ.linux&&tZ.chrome?window.devicePixelRatio:tZ.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a wheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function eC(t){return tZ.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/eM:t.deltaY&&1===t.deltaMode?-(20*t.deltaY):t.deltaY&&2===t.deltaMode?-(60*t.deltaY):t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&32765>Math.abs(t.detail)?-(20*t.detail):t.detail?-(60*(t.detail/32765)):0}// check if element really left/entered the event target (for mouseenter/mouseleave)
function eS(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}/*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */var eE=N.extend({// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
// Run an animation of a given element to a new position, optionally setting
// duration in seconds (`0.25` by default) and easing linearity factor (3rd
// argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
// `0.5` by default).
run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=eo(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,// @event start: Event
// Fired when the animation starts
this.fire("start"),this._animate()},// @method stop()
// Stops the animation (if currently running).
stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){// animation loop
this._animId=I(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),en(this._el,i),// @event step: Event
// Fired continuously during the animation.
this.fire("step")},_complete:function(){Z(this._animId),this._inProgress=!1,// @event end: Event
// Fired when the animation ends.
this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Map=N.extend({options:{// @section Map State Options
// @option crs: CRS = L.CRS.EPSG3857
// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
// sure what it means.
crs:tt,// @option center: LatLng = undefined
// Initial geographic center of the map
center:void 0,// @option zoom: Number = undefined
// Initial map zoom level
zoom:void 0,// @option minZoom: Number = *
// Minimum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the lowest of their `minZoom` options will be used instead.
minZoom:void 0,// @option maxZoom: Number = *
// Maximum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the highest of their `maxZoom` options will be used instead.
maxZoom:void 0,// @option layers: Layer[] = []
// Array of layers that will be added to the map initially
layers:[],// @option maxBounds: LatLngBounds = null
// When this option is set, the map restricts the view to the given
// geographical bounds, bouncing the user back if the user tries to pan
// outside the view. To set the restriction dynamically, use
// [`setMaxBounds`](#map-setmaxbounds) method.
maxBounds:void 0,// @option renderer: Renderer = *
// The default method for drawing vector layers on the map. `L.SVG`
// or `L.Canvas` by default depending on browser support.
renderer:void 0,// @section Animation Options
// @option zoomAnimation: Boolean = true
// Whether the map zoom animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
zoomAnimation:!0,// @option zoomAnimationThreshold: Number = 4
// Won't animate zoom if the zoom difference exceeds this value.
zoomAnimationThreshold:4,// @option fadeAnimation: Boolean = true
// Whether the tile fade animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
fadeAnimation:!0,// @option markerZoomAnimation: Boolean = true
// Whether markers animate their zoom with the zoom animation, if disabled
// they will disappear for the length of the animation. By default it's
// enabled in all browsers that support CSS3 Transitions except Android.
markerZoomAnimation:!0,// @option transform3DLimit: Number = 2^23
// Defines the maximum size of a CSS translation transform. The default
// value should not be changed unless a web browser positions layers in
// the wrong place after doing a large `panBy`.
transform3DLimit:8388608,// @section Interaction Options
// @option zoomSnap: Number = 1
// Forces the map's zoom level to always be a multiple of this, particularly
// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
// By default, the zoom level snaps to the nearest integer; lower values
// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
zoomSnap:1,// @option zoomDelta: Number = 1
// Controls how much the map's zoom level will change after a
// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
zoomDelta:1,// @option trackResize: Boolean = true
// Whether the map automatically handles browser window resize to update itself.
trackResize:!0},initialize:function(t,e){e=b(this,e),// Make sure to assign internal flags at the beginning,
// to avoid inconsistent state in some edge cases.
this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),// hack for https://github.com/Leaflet/Leaflet/issues/1980
this._onResize=p(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(X(e.center),e.zoom,{reset:!0}),this.callInitHooks(),// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
this._zoomAnimated=tK&&tZ.any3d&&!tZ.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ed(this._proxy,tJ,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},// @section Methods for modifying map state
// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) with the given
// animation options.
setView:function(t,i,n){return(i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(X(t),i,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=e({animate:n.animate},n.zoom),n.pan=e({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,n.zoom):this._tryAnimatedPan(t,n.pan)))?// prevent resize handler call, the view will refresh after animation anyway
clearTimeout(this._sizeTimer):// animation didn't start, just reset the map view
this._resetView(t,i,n.pan&&n.pan.noMoveStart),this},// @method setZoom(zoom: Number, options?: Zoom/pan options): this
// Sets the zoom of the map.
setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},// @method zoomIn(delta?: Number, options?: Zoom options): this
// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomIn:function(t,e){return t=t||(tZ.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},// @method zoomOut(delta?: Number, options?: Zoom options): this
// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomOut:function(t,e){return t=t||(tZ.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified geographical point on the map
// stationary (e.g. used internally for scroll zoom and double-click zoom).
// @alternative
// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),r=(t instanceof F?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),s=this.containerPointToLatLng(o.add(r));return this.setView(s,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():Y(t);var i=H(e.paddingTopLeft||e.padding||[0,0]),n=H(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if((o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var r=n.subtract(i).divideBy(2),s=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(s.add(a).divideBy(2).add(r),o),zoom:o}},// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets a map view that contains the given geographical bounds with the
// maximum zoom level possible.
fitBounds:function(t,e){if(!(t=Y(t)).isValid())throw Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},// @method fitWorld(options?: fitBounds options): this
// Sets a map view that mostly contains the whole world with the maximum
// zoom level possible.
fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},// @method panTo(latlng: LatLng, options?: Pan options): this
// Pans the map to a given center.
panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},// @method panBy(offset: Point, options?: Pan options): this
// Pans the map by a given number of pixels (animated).
panBy:function(t,e){if(t=H(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");// If we pan too far, Chrome gets issues with tiles
// and makes them disappear or appear in the wrong place (slightly offset) #2602
if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;// animate pan unless animate: false specified
if(this._panAnim||(this._panAnim=new eE,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){t4(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) performing a smooth
// pan-zoom animation.
flyTo:function(t,e,i){if(!1===(i=i||{}).animate||!tZ.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),s=this._zoom;t=X(t),e=void 0===e?s:e;var a=Math.max(r.x,r.y),h=a*this.getZoomScale(s,e),u=o.distanceTo(n)||1;function l(t){var e=(h*h-a*a+(t?-1:1)*4.0658689599999995*u*u)/(2*(t?h:a)*2.0164*u),i=Math.sqrt(e*e+1)-e;return i<1e-9?-18:Math.log(i)}function c(t){return(Math.exp(t)-Math.exp(-t))/2}function d(t){return(Math.exp(t)+Math.exp(-t))/2}var p=l(0),_=Date.now(),f=(l(1)-p)/1.42,m=i.duration?1e3*i.duration:1e3*f*.8;return this._moveStart(!0,i.noMoveStart),(function i(){var r,h=(Date.now()-_)/m,l=(1-Math.pow(1-h,1.5))*f;h<=1?(this._flyToFrame=I(i,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(a*(d(p)*(c(r=p+1.42*l)/d(r))-c(p))/2.0164/u)),s),this.getScaleZoom(a/(a*(d(p)/d(p+1.42*l))),s),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}).call(this),this},// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},// @method setMaxBounds(bounds: LatLngBounds): this
// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
setMaxBounds:function(t){return(t=Y(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid())?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},// @method setMinZoom(zoom: Number): this
// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
setMinZoom:function(t){var e=this.options.minZoom;return(this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom))?this.setZoom(t):this},// @method setMaxZoom(zoom: Number): this
// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
setMaxZoom:function(t){var e=this.options.maxZoom;return(this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom))?this.setZoom(t):this},// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,Y(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},// @method panInside(latlng: LatLng, options?: padding options): this
// Pans the map the minimum amount to make the `latlng` visible. Use
// padding options to fit the display to more restricted bounds.
// If `latlng` is already within the (optionally padded) display bounds,
// the map will not be panned.
panInside:function(t,e){var i=H((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=H(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),s=this.getPixelBounds(),a=U([s.min.add(i),s.max.subtract(n)]),h=a.getSize();if(!a.contains(r)){this._enforcingBounds=!0;var u=r.subtract(a.getCenter()),l=a.extend(r).getSize().subtract(h);o.x+=u.x<0?-l.x:l.x,o.y+=u.y<0?-l.y:l.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},// @method invalidateSize(options: Zoom/pan options): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default. If `options.pan` is `false`, panning will not occur.
// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
// that it doesn't happen often even if the method is called many
// times in a row.
// @alternative
// @method invalidateSize(animate: Boolean): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default.
invalidateSize:function(t){if(!this._loaded)return this;t=e({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),o=i.divideBy(2).round(),r=n.divideBy(2).round(),s=o.subtract(r);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(p(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:n})):this},// @section Methods for modifying map state
// @method stop(): this
// Stops the currently running `panTo` or `flyTo` animation, if any.
stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},// @section Geolocation methods
// @method locate(options?: Locate options): this
// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
// and optionally sets the map view to the user's location with respect to
// detection accuracy (or to the world view if geolocation failed).
// Note that, if your page doesn't use HTTPS, this method will fail in
// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
// See `Locate options` for more details.
locate:function(t){if(t=this._locateOptions=e({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=p(this._handleGeolocationResponse,this),n=p(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,n,t):navigator.geolocation.getCurrentPosition(i,n,t),this},// @method stopLocate(): this
// Stops watching location previously initiated by `map.locate({watch: true})`
// and aborts resetting the map view if map.locate was called with
// `{setView: true}`.
stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),// @section Location events
// @event locationerror: ErrorEvent
// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=new V(t.coords.latitude,t.coords.longitude),i=e.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(i);this.setView(e,n.maxZoom?Math.min(o,n.maxZoom):o)}var r={latlng:e,bounds:i,timestamp:t.timestamp};for(var s in t.coords)"number"==typeof t.coords[s]&&(r[s]=t.coords[s]);// @event locationfound: LocationEvent
// Fired when geolocation (using the [`locate`](#map-locate) method)
// went successfully.
this.fire("locationfound",r)}},// TODO Appropriate docs section?
// @section Other Methods
// @method addHandler(name: String, HandlerClass: Function): this
// Adds a new `Handler` to the map, given its name and constructor function.
addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},// @method remove(): this
// Destroys the map and clears all related event listeners.
remove:function(){var t;if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error("Map container is being reused by another instance");try{// throws error in IE6-8
delete this._container._leaflet_id,delete this._containerId}catch(t){/*eslint-disable */this._container._leaflet_id=void 0,/* eslint-enable */this._containerId=void 0}for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),t1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&// @event unload: Event
// Fired when the map is destroyed with [remove](#map-remove) method.
this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)t1(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},// @section Other Methods
// @method createPane(name: String, container?: HTMLElement): HTMLElement
// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
// then returns it. The pane is created as a child of `container`, or
// as a child of the main map pane if not set.
createPane:function(t,e){var i=t0("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=i),i},// @section Methods for Getting Map State
// @method getCenter(): LatLng
// Returns the geographical center of the map view
getCenter:function(){return(this._checkIfLoaded(),this._lastCenter&&!this._moved())?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},// @method getZoom(): Number
// Returns the current zoom level of the map view
getZoom:function(){return this._zoom},// @method getBounds(): LatLngBounds
// Returns the geographical bounds visible in the current map view
getBounds:function(){var t=this.getPixelBounds();return new q(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},// @method getMinZoom(): Number
// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},// @method getMaxZoom(): Number
// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
getBoundsZoom:function(t,e,i){t=Y(t),i=H(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),s=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(i),u=U(this.project(a,n),this.project(s,n)).getSize(),l=tZ.any3d?this.options.zoomSnap:1,c=h.x/u.x,d=h.y/u.y,p=e?Math.max(c,d):Math.min(c,d);return n=this.getScaleZoom(p,n),l&&(n=Math.round(n/(l/100))*(l/100),n=e?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(r,n))},// @method getSize(): Point
// Returns the current size of the map container (in pixels).
getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new F(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},// @method getPixelBounds(): Bounds
// Returns the bounds of the current map view in projected pixel
// coordinates (sometimes useful in layer and overlay implementations).
getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new W(i,i.add(this.getSize()))},// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
// the map pane? "left point of the map layer" can be confusing, specially
// since there can be negative offsets.
// @method getPixelOrigin(): Point
// Returns the projected pixel coordinates of the top left point of
// the map layer (useful in custom layer and overlay implementations).
getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},// @method getPixelWorldBounds(zoom?: Number): Bounds
// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
// If `zoom` is omitted, the map's current zoom level is used.
getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},// @section Other Methods
// @method getPane(pane: String|HTMLElement): HTMLElement
// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
getPane:function(t){return"string"==typeof t?this._panes[t]:t},// @method getPanes(): Object
// Returns a plain object containing the names of all [panes](#map-pane) as keys and
// the panes as values.
getPanes:function(){return this._panes},// @method getContainer: HTMLElement
// Returns the HTML element that contains the map.
getContainer:function(){return this._container},// @section Conversion Methods
// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
// Returns the scale factor to be applied to a map transition from zoom level
// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
getZoomScale:function(t,e){// TODO replace with universal implementation after refactoring projections
var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
getScaleZoom:function(t,e){var i=this.options.crs;e=void 0===e?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(X(t),e)},// @method unproject(point: Point, zoom: Number): LatLng
// Inverse of [`project`](#map-project).
unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(H(t),e)},// @method layerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding geographical coordinate (for the current zoom level).
layerPointToLatLng:function(t){var e=H(t).add(this.getPixelOrigin());return this.unproject(e)},// @method latLngToLayerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the [origin pixel](#map-getpixelorigin).
latLngToLayerPoint:function(t){return this.project(X(t))._round()._subtract(this.getPixelOrigin())},// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
// CRS's bounds.
// By default this means longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees.
wrapLatLng:function(t){return this.options.crs.wrapLatLng(X(t))},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring that
// its center is within the CRS's bounds.
// By default this means the center longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees, and the majority of the bounds
// overlaps the CRS's bounds.
wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(Y(t))},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates according to
// the map's CRS. By default this measures distance in meters.
distance:function(t,e){return this.options.crs.distance(X(t),X(e))},// @method containerPointToLayerPoint(point: Point): Point
// Given a pixel coordinate relative to the map container, returns the corresponding
// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
containerPointToLayerPoint:function(t){return H(t).subtract(this._getMapPanePos())},// @method layerPointToContainerPoint(point: Point): Point
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding pixel coordinate relative to the map container.
layerPointToContainerPoint:function(t){return H(t).add(this._getMapPanePos())},// @method containerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the map container, returns
// the corresponding geographical coordinate (for the current zoom level).
containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(H(t));return this.layerPointToLatLng(e)},// @method latLngToContainerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the map container.
latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(X(t)))},// @method mouseEventToContainerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to the
// map container where the event took place.
mouseEventToContainerPoint:function(t){return eL(t,this._container)},// @method mouseEventToLayerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to
// the [origin pixel](#map-getpixelorigin) where the event took place.
mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},// @method mouseEventToLatLng(ev: MouseEvent): LatLng
// Given a MouseEvent object, returns geographical coordinate where the
// event took place.
mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},// map initialization methods
_initContainer:function(t){var e=this._container=t$(t);if(e){if(e._leaflet_id)throw Error("Map container is already initialized.")}else throw Error("Map container not found.");ed(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&tZ.any3d,t4(t,"leaflet-container"+(tZ.touch?" leaflet-touch":"")+(tZ.retina?" leaflet-retina":"")+(tZ.ielt9?" leaflet-oldie":"")+(tZ.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=tQ(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},// @section
//
// Panes are DOM elements used to control the ordering of layers on the map. You
// can access panes with [`map.getPane`](#map-getpane) or
// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
// [`map.createPane`](#map-createpane) method.
//
// Every map has the following default panes that differ only in zIndex.
//
// @pane mapPane: HTMLElement = 'auto'
// Pane that contains all other map panes
this._mapPane=this.createPane("mapPane",this._container),en(this._mapPane,new F(0,0)),// @pane tilePane: HTMLElement = 200
// Pane for `GridLayer`s and `TileLayer`s
this.createPane("tilePane"),// @pane overlayPane: HTMLElement = 400
// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
this.createPane("overlayPane"),// @pane shadowPane: HTMLElement = 500
// Pane for overlay shadows (e.g. `Marker` shadows)
this.createPane("shadowPane"),// @pane markerPane: HTMLElement = 600
// Pane for `Icon`s of `Marker`s
this.createPane("markerPane"),// @pane tooltipPane: HTMLElement = 650
// Pane for `Tooltip`s.
this.createPane("tooltipPane"),// @pane popupPane: HTMLElement = 700
// Pane for `Popup`s.
this.createPane("popupPane"),this.options.markerZoomAnimation||(t4(t.markerPane,"leaflet-zoom-hide"),t4(t.shadowPane,"leaflet-zoom-hide"))},// private methods that modify map state
// @section Map state change events
_resetView:function(t,e,i){en(this._mapPane,new F(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),// @event viewreset: Event
// Fired when the map needs to redraw its content (this usually happens
// on map zoom or load). Very useful for creating custom overlays.
this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),// @event move: Event
// Fired repeatedly during any movement of the map,
// including pan and fly animations.
this.fire("move",i)),this},_moveEnd:function(t){// @event moveend: Event
// Fired when the center of the map stops changing
// (e.g. user stopped dragging the map or after non-centered zoom).
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){en(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error("Set map center and zoom first.")},// DOM event handling
// @section Interaction events
_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?e_:ed;// @event click: MouseEvent
// Fired when the user clicks (or taps) the map.
// @event dblclick: MouseEvent
// Fired when the user double-clicks (or double-taps) the map.
// @event mousedown: MouseEvent
// Fired when the user pushes the mouse button on the map.
// @event mouseup: MouseEvent
// Fired when the user releases the mouse button on the map.
// @event mouseover: MouseEvent
// Fired when the mouse enters the map.
// @event mouseout: MouseEvent
// Fired when the mouse leaves the map.
// @event mousemove: MouseEvent
// Fired while the mouse moves over the map.
// @event contextmenu: MouseEvent
// Fired when the user pushes the right mouse button on the map, prevents
// default browser context menu from showing if there are listeners on
// this event. Also fired on mobile when the user holds a single touch
// for a second (also called long press).
// @event keypress: KeyboardEvent
// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
// @event keydown: KeyboardEvent
// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
// the `keydown` event is fired for keys that produce a character value and for keys
// that do not produce a character value.
// @event keyup: KeyboardEvent
// Fired when the user releases a key from the keyboard while the map is focused.
e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),tZ.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Z(this._resizeRequest),this._resizeRequest=I(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&// a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,s=!1;r;){if((i=this._targets[f(r)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){// Prevent firing click after you just dragged an object.
s=!0;break}if(i&&i.listens(e,!0)&&(o&&!eS(r,t)||(n.push(i),o))||r===this._container)break;r=r.parentNode}return!n.length&&!s&&!o&&this.listens(e,!0)&&(n=[this]),n},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(e))){var i=t.type;"mousedown"===i&&eh(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,n){if("click"===t.type){// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
// @event preclick: MouseEvent
// Fired before mouse click on the map (sometimes useful when you
// want something to happen on click before any existing click
// handlers start running).
var o=e({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}// Find the layer the event is propagating from and its parents.
var r=this._findEventTargets(t,i);if(n){for(var s=[],a=0;a<n.length;a++)n[a].listens(i,!0)&&s.push(n[a]);r=s.concat(r)}if(r.length){"contextmenu"===i&&eb(t);var h=r[0],u={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var l=h.getLatLng&&(!h._radius||h._radius<=10);u.containerPoint=l?this.latLngToContainerPoint(h.getLatLng()):this.mouseEventToContainerPoint(t),u.layerPoint=this.containerPointToLayerPoint(u.containerPoint),u.latlng=l?h.getLatLng():this.layerPointToLatLng(u.layerPoint)}for(a=0;a<r.length;a++)if(r[a].fire(i,u,!0),u.originalEvent._stopped||!1===r[a].options.bubblingMouseEvents&&-1!==S(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},// @section Other Methods
// @method whenReady(fn: Function, context?: Object): this
// Runs the given function `fn` when the map gets initialized with
// a view (center and zoom) and at least one layer, or immediately
// if it's already initialized, optionally passing a function context.
whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},// private methods for getting map state
_getMapPanePos:function(){return eo(this._mapPane)||new F(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return U([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},// layer point of the current center
_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},// offset of the specified place to the current center in pixels
_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},// adjust center for view to get inside bounds
_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),r=new W(n.subtract(o),n.add(o)),s=this._getBoundsOffset(r,i,e);return(// If offset is less than a pixel, ignore.
// This prevents unstable projections from getting into
// an infinite loop of tiny offsets.
1>=Math.abs(s.x)&&1>=Math.abs(s.y)?t:this.unproject(n.add(s),e))},// adjust offset for view to get inside bounds
_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new W(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
_getBoundsOffset:function(t,e,i){var n=U(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),r=n.max.subtract(t.max);return new F(this._rebound(o.x,-r.x),this._rebound(o.y,-r.y))},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=tZ.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){t6(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){// difference between the new and current centers in pixels
var i=this._getCenterOffset(t)._trunc();return(// don't animate too far unless animate: true specified in options
!!(!0===(e&&e.animate)||this.getSize().contains(i))&&(this.panBy(i,e),!0))},_createAnimProxy:function(){var t=this._proxy=t0("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=this._proxy.style[tG];ei(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[tG]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){t1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();ei(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;// don't animate if disabled, not supported or zoom difference is too large
if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;// offset is the pixel coords of the zoom origin relative to the current center
var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return(// don't animate if the zoom origin isn't within one screen from the current center, unless forced
!!(!0===i.animate||this.getSize().contains(o))&&(I(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0))},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,// remember what center/zoom to set after animation
this._animateToCenter=t,this._animateToZoom=e,t4(this._mapPane,"leaflet-zoom-anim")),// @section Other Events
// @event zoomanim: ZoomAnimEvent
// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
setTimeout(p(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&t6(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}}),ek=R.extend({// @section
// @aka Control Options
options:{// @option position: String = 'topright'
// The position of the control (one of the map corners). Possible values are `'topleft'`,
// `'topright'`, `'bottomleft'` or `'bottomright'`
position:"topright"},initialize:function(t){b(this,t)},/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */getPosition:function(){return this.options.position},// @method setPosition(position: string): this
// Sets the position of the control.
setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},// @method getContainer: HTMLElement
// Returns the HTMLElement that contains the control.
getContainer:function(){return this._container},// @method addTo(map: Map): this
// Adds the control to the given map.
addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return t4(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},// @method remove: this
// Removes the control from the map it is currently active on.
remove:function(){return this._map&&(t1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){// if map exists and event is not a keyboard event
this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ez=function(t){return new ek(t)};/* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   *//* @namespace Map
   * @section Methods for Layers and Controls
   */Map.include({// @method addControl(control: Control): this
// Adds the given control to the map
addControl:function(t){return t.addTo(this),this},// @method removeControl(control: Control): this
// Removes the given control from the map
removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=t0("div",e+"control-container",this._container);function n(n,o){t[n+o]=t0("div",e+n+" "+e+o,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)t1(this._controlCorners[t]);t1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});/*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */var eO=ek.extend({// @section
// @aka Control.Layers options
options:{// @option collapsed: Boolean = true
// If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
collapsed:!0,position:"topright",// @option autoZIndex: Boolean = true
// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
autoZIndex:!0,// @option hideSingleBase: Boolean = false
// If `true`, the base layers in the control will be hidden when there is only one.
hideSingleBase:!1,// @option sortLayers: Boolean = false
// Whether to sort the layers. When `false`, layers will keep the order
// in which they were added to the control.
sortLayers:!1,// @option sortFunction: Function = *
// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// that will be used for sorting the layers, when `sortLayers` is `true`.
// The function receives both the `L.Layer` instances and their names, as in
// `sortFunction(layerA, layerB, nameA, nameB)`.
// By default, it sorts layers alphabetically by their name.
sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in b(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
return ek.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},// @method addBaseLayer(layer: Layer, name: String): this
// Adds a base layer (radio button entry) with the given name to the control.
addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},// @method addOverlay(layer: Layer, name: String): this
// Adds an overlay (checkbox entry) with the given name to the control.
addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},// @method removeLayer(layer: Layer): this
// Remove the given layer from the control.
removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},// @method expand(): this
// Expand the control container if collapsed.
expand:function(){t4(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(t4(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):t6(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},// @method collapse(): this
// Collapse the control container if expanded.
collapse:function(){return t6(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=t0("div",t),i=this.options.collapsed;// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
e.setAttribute("aria-haspopup",!0),ew(e),ex(e);var n=this._section=t0("section",t+"-list");i&&(this._map.on("click",this.collapse,this),ed(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=t0("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),ed(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},// Certain screen readers intercept the key event and instead send a click event
click:function(t){eb(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=t0("div",t+"-base",n),this._separator=t0("div",t+"-separator",n),this._overlaysList=t0("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(p(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;t2(this._baseLayersList),t2(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
_createRadioElement:function(t,e){var i=document.createElement("div");return i.innerHTML='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",i.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+f(this),n),this._layerControlInputs.push(e),e.layerId=f(t.layer),ed(e,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;// Helps from preventing layer control flicker when checkboxes are disabled
// https://github.com/Leaflet/Leaflet/issues/2771
var r=document.createElement("span");return i.appendChild(r),r.appendChild(e),r.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){// expanding the control on mobile with a click can cause adding a layer - we don't want this
if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var r=i.length-1;r>=0;r--)t=i[r],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);// Bugfix issue 2318: Should remove all old layers before readding new ones
for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<n.length;r++)this._map.hasLayer(n[r])||this._map.addLayer(n[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;o>=0;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,ed(t,"click",eb),this.expand();var e=this;setTimeout(function(){e_(t,"click",eb),e._preventClick=!1})}}),eA=ek.extend({// @section
// @aka Control.Zoom options
options:{position:"topleft",// @option zoomInText: String = '<span aria-hidden="true">+</span>'
// The text set on the 'zoom in' button.
zoomInText:'<span aria-hidden="true">+</span>',// @option zoomInTitle: String = 'Zoom in'
// The title set on the 'zoom in' button.
zoomInTitle:"Zoom in",// @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
// The text set on the 'zoom out' button.
zoomOutText:'<span aria-hidden="true">&#x2212;</span>',// @option zoomOutTitle: String = 'Zoom out'
// The title set on the 'zoom out' button.
zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=t0("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var r=t0("a",i,n);return r.innerHTML=t,r.href="#",r.title=e,/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */r.setAttribute("role","button"),r.setAttribute("aria-label",e),ew(r),ed(r,"click",eT),ed(r,"click",o,this),ed(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";t6(this._zoomInButton,e),t6(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(t4(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(t4(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Map.mergeOptions({zoomControl:!0}),Map.addInitHook(function(){this.options.zoomControl&&(// @section Controls
// @property zoomControl: Control.Zoom
// The default zoom control (only available if the
// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
this.zoomControl=new eA,this.addControl(this.zoomControl))});/*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */var eB=ek.extend({// @section
// @aka Control.Scale options
options:{position:"bottomleft",// @option maxWidth: Number = 100
// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
maxWidth:100,// @option metric: Boolean = True
// Whether to show the metric scale line (m/km).
metric:!0,// @option imperial: Boolean = True
// Whether to show the imperial scale line (mi/ft).
imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=t0("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=t0("div",e,i)),t.imperial&&(this._iScale=t0("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t);this._updateScale(this._mScale,e<1e3?e+" m":e/1e3+" km",e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t;o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return e*(i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),eI=ek.extend({// @section
// @aka Control.Attribution options
options:{position:"bottomright",// @option prefix: String|false = 'Leaflet'
// The HTML text shown before the attributions. Pass `false` to disable.
prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(tZ.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){b(this,t),this._attributions={}},onAdd:function(t){// TODO ugly, refactor
for(var e in t.attributionControl=this,this._container=t0("div","leaflet-control-attribution"),ew(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},// @method setPrefix(prefix: String|false): this
// The HTML text shown before the attributions. Pass `false` to disable.
setPrefix:function(t){return this.options.prefix=t,this._update(),this},// @method addAttribution(text: String): this
// Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},// @method removeAttribution(text: String): this
// Removes an attribution text.
removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Map.mergeOptions({attributionControl:!0}),Map.addInitHook(function(){this.options.attributionControl&&new eI().addTo(this)}),ek.Layers=eO,ek.Zoom=eA,ek.Scale=eB,ek.Attribution=eI,ez.layers=function(t,e,i){return new eO(t,e,i)},ez.zoom=function(t){return new eA(t)},ez.scale=function(t){return new eB(t)},ez.attribution=function(t){return new eI(t)};/*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers
var eZ=R.extend({initialize:function(t){this._map=t},// @method enable(): this
// Enables the handler
enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},// @method disable(): this
// Disables the handler
disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},// @method enabled(): Boolean
// Returns `true` if the handler is enabled
enabled:function(){return!!this._enabled}});// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
eZ.addTo=function(t,e){return t.addHandler(e,this),this};/*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */var eR=tZ.touch?"touchstart mousedown":"mousedown",eD=N.extend({options:{// @section
// @aka Draggable options
// @option clickTolerance: Number = 3
// The max number of pixels a user can shift the mouse pointer during a click
// for it to be considered a valid click (as opposed to a mouse drag).
clickTolerance:3},// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
initialize:function(t,e,i,n){b(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},// @method enable()
// Enables the dragging ability
enable:function(){this._enabled||(ed(this._dragStartTarget,eR,this._onDown,this),this._enabled=!0)},// @method disable()
// Disables the dragging ability
disable:function(){this._enabled&&(eD._dragging===this&&this.finishDrag(!0),e_(this._dragStartTarget,eR,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!(!this._enabled||(this._moved=!1,t8(this._element,"leaflet-zoom-anim")))){if(t.touches&&1!==t.touches.length){// Finish dragging to avoid conflict with touchZoom
eD._dragging===this&&this.finishDrag();return}if(!eD._dragging&&!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(eD._dragging=this,this._preventOutline&&eh(this._element),es(),i(),!this._moving)){// @event down: Event
// Fired when a drag is about to start.
this.fire("down");var e=t.touches?t.touches[0]:t,n=el(this._element);this._startPoint=new F(e.clientX,e.clientY),this._startPos=eo(this._element),// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
this._parentScale=ec(n);var o="mousedown"===t.type;ed(document,o?"mousemove":"touchmove",this._onMove,this),ed(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new F(e.clientX,e.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(// We assume that the parent container's position, border and scale do not change for the duration of the drag.
// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
// and we can use the cached value for the scale.
i.x/=this._parentScale.x,i.y/=this._parentScale.y,eb(t),this._moved||(// @event dragstart: Event
// Fired when a drag starts
this.fire("dragstart"),this._moved=!0,t4(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),t4(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};// @event predrag: Event
// Fired continuously during dragging *before* each corresponding
// update of the element's position.
this.fire("predrag",t),en(this._element,this._newPos),// @event drag: Event
// Fired continuously during dragging.
this.fire("drag",t)},_onUp:function(){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
this._enabled&&this.finishDrag()},finishDrag:function(t){t6(document.body,"leaflet-dragging"),this._lastTarget&&(t6(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),e_(document,"mousemove touchmove",this._onMove,this),e_(document,"mouseup touchend touchcancel",this._onUp,this),ea(),n();var e=this._moved&&this._moving;this._moving=!1,eD._dragging=!1,e&&// Fired when the drag ends.
this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});/*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   *//* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */function eN(t,e,i){var n,o,r,s,a,h,u,l,c,d=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=eY(t[o],e);// for each edge (left, bottom, right, top)
for(s=0;s<4;s++){for(o=0,l=d[s],n=[],r=(u=t.length)-1;o<u;r=o++)a=t[o],h=t[r],a._code&l?h._code&l||((c=eq(h,a,l,e,i))._code=eY(c,e),n.push(c)):(h._code&l&&((c=eq(h,a,l,e,i))._code=eY(c,e),n.push(c)),n.push(a));t=n}return t}/* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */function eF(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eX(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var i,n,o,r,s,a,h,u,l,c=X([0,0]),d=Y(t);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(c=ej(t));var p=t.length,_=[];for(i=0;i<p;i++){var f=X(t[i]);_.push(e.project(X([f.lat-c.lat,f.lng-c.lng])))}// polygon centroid algorithm;
for(i=0,a=h=u=0,n=p-1;i<p;n=i++)o=_[i],r=_[n],s=o.y*r.x-r.y*o.x,h+=(o.x+r.x)*s,u+=(o.y+r.y)*s,a+=3*s;l=0===a?_[0]:[h/a,u/a];var m=e.unproject(H(l));return X([m.lat+c.lat,m.lng+c.lng])}/* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */function ej(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var r=X(t[o]);e+=r.lat,i+=r.lng,n++}return X([e/n,i/n])}/*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
function eH(t,e){if(!e||!t.length)return t.slice();var i=e*e;return(// stage 2: Douglas-Peucker simplification
t=// Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
function(t,e){var i=t.length,n=new("undefined"!=typeof Uint8Array?Uint8Array:Array)(i);n[0]=n[i-1]=1,function t(e,i,n,o,r){var s,a,h,u=0;for(a=o+1;a<=r-1;a++)(h=eV(e[a],e[o],e[r],!0))>u&&(s=a,u=h);u>n&&(i[s]=1,t(e,i,n,o,s),t(e,i,n,s,r))}(t,n,e,0,i-1);var o,r=[];for(o=0;o<i;o++)n[o]&&r.push(t[o]);return r}(// stage 1: vertex reduction
t=// reduce points that are too close to each other to a single point
function(t,e){for(var i=[t[0]],n=1,o=0,r=t.length;n<r;n++)// square distance (to avoid unnecessary Math.sqrt calls)
(function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n})(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<r-1&&i.push(t[r-1]),i}(t,i),i))}// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function eW(t,e,i){return Math.sqrt(eV(t,e,i,!0))}// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function eU(t,e,i,n,o){var r,s,h,u=n?a:eY(t,i),l=eY(e,i);for(// save 2nd code to avoid calculating it on the next segment
a=l;;){// if a,b is inside the clip window (trivial accept)
if(!(u|l))return[t,e];// if a,b is outside the clip window (trivial reject)
if(u&l)return!1;h=eY(s=eq(t,e,// other cases
r=u||l,i,o),i),r===u?(t=s,u=h):(e=s,l=h)}}function eq(t,e,i,n,o){var r,s,a=e.x-t.x,h=e.y-t.y,u=n.min,l=n.max;return 8&i?(r=t.x+a*(l.y-t.y)/h,s=l.y):4&i?(r=t.x+a*(u.y-t.y)/h,s=u.y):2&i?(r=l.x,s=t.y+h*(l.x-t.x)/a):1&i&&(r=u.x,s=t.y+h*(u.x-t.x)/a),new F(r,s,o)}function eY(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}// return closest point on segment or distance to that point
function eV(t,e,i,n){var o,r=e.x,s=e.y,a=i.x-r,h=i.y-s,u=a*a+h*h;return u>0&&((o=((t.x-r)*a+(t.y-s)*h)/u)>1?(r=i.x,s=i.y):o>0&&(r+=a*o,s+=h*o)),a=t.x-r,h=t.y-s,n?a*a+h*h:new F(r,s)}// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function eX(t){return!C(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function eG(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),eX(t)}/* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */function eK(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eX(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var i,n,o,r,s,a,h,u,l=X([0,0]),c=Y(t);// tests showed that below 1700 rounding errors are happening
c.getNorthWest().distanceTo(c.getSouthWest())*c.getNorthEast().distanceTo(c.getNorthWest())<1700&&(l=ej(t));var d=t.length,p=[];for(i=0;i<d;i++){var _=X(t[i]);p.push(e.project(X([_.lat-l.lat,_.lng-l.lng])))}for(i=0,n=0;i<d-1;i++)n+=p[i].distanceTo(p[i+1])/2;// The line is so small in the current view that all points are on the same pixel.
if(0===n)u=p[0];else for(i=0,r=0;i<d-1;i++)if(s=p[i],a=p[i+1],(r+=o=s.distanceTo(a))>n){h=(r-n)/o,u=[a.x-h*(a.x-s.x),a.y-h*(a.y-s.y)];break}var f=e.unproject(H(u));return X([f.lat+l.lat,f.lng+l.lng])}/*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */var eJ={project:function(t){return new F(t.lng,t.lat)},unproject:function(t){return new V(t.y,t.x)},bounds:new W([-180,-90],[180,90])},e$={R:6378137,R_MINOR:6356752.314245179,bounds:new W([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),s=r*Math.sin(n);return n=-i*Math.log(Math.max(Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),r/2),1e-10)),new F(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,r=Math.sqrt(1-o*o),s=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(s),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)u=Math.PI/2-2*Math.atan(s*(e=Math.pow((1-(e=r*Math.sin(a)))/(1+e),r/2)))-a,a+=u;return new V(a*i,t.x*i/n)}},eQ=e({},K,{code:"EPSG:3395",projection:e$,transformation:Q(c=.5/(Math.PI*e$.R),.5,-c,.5)}),e0=e({},K,{code:"EPSG:4326",projection:eJ,transformation:Q(1/180,1,-1/180,.5)}),e1=e({},G,{projection:eJ,transformation:Q(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});G.Earth=K,G.EPSG3395=eQ,G.EPSG3857=tt,G.EPSG900913=te,G.EPSG4326=e0,G.Simple=e1;/*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */var e2=N.extend({// Classes extending `L.Layer` will inherit the following options:
options:{// @option pane: String = 'overlayPane'
// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
pane:"overlayPane",// @option attribution: String = null
// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
attribution:null,bubblingMouseEvents:!0},/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */addTo:function(t){return t.addLayer(this),this},// @method remove: this
// Removes the layer from the map it is currently active on.
remove:function(){return this.removeFrom(this._map||this._mapToAdd)},// @method removeFrom(map: Map): this
// Removes the layer from the given map
//
// @alternative
// @method removeFrom(group: LayerGroup): this
// Removes the layer from the given `LayerGroup`
removeFrom:function(t){return t&&t.removeLayer(this),this},// @method getPane(name? : String): HTMLElement
// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},// @method getAttribution: String
// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;// check in case layer gets added and then removed before the map is ready
if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});/* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   *//* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */Map.include({// @method addLayer(layer: Layer): this
// Adds the given layer to the map
addLayer:function(t){if(!t._layerAdd)throw Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]||(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the map.
removeLayer:function(t){var e=f(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the map
hasLayer:function(t){return f(t) in this._layers},/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?C(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),e=void 0===o.maxZoom?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});/*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */var e5=e2.extend({initialize:function(t,e){var i,n;if(b(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},// @method addLayer(layer: Layer): this
// Adds the given layer to the group.
addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the group.
// @alternative
// @method removeLayer(id: Number): this
// Removes the layer with the given internal ID from the group.
removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the group.
// @alternative
// @method hasLayer(id: Number): Boolean
// Returns `true` if the given internal ID is currently added to the group.
hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},// @method clearLayers(): this
// Removes all the layers from the group.
clearLayers:function(){return this.eachLayer(this.removeLayer,this)},// @method invoke(methodName: String, …): this
// Calls `methodName` on every layer contained in this group, passing any
// additional parameters. Has no effect if the layers contained do not
// implement `methodName`.
invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},// @method eachLayer(fn: Function, context?: Object): this
// Iterates over the layers of the group, optionally specifying context of the iterator function.
// ```js
// group.eachLayer(function (layer) {
// 	layer.bindPopup('Hello');
// });
// ```
eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},// @method getLayer(id: Number): Layer
// Returns the layer with the given internal ID.
getLayer:function(t){return this._layers[t]},// @method getLayers(): Layer[]
// Returns an array of all the layers added to the group.
getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},// @method setZIndex(zIndex: Number): this
// Calls `setZIndex` on every layer contained in this group, passing the z-index.
setZIndex:function(t){return this.invoke("setZIndex",t)},// @method getLayerId(layer: Layer): Number
// Returns the internal ID for a layer
getLayerId:function(t){return f(t)}}),e3=e5.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),e5.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),e5.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},// @method setStyle(style: Path options): this
// Sets the given path options to each layer of the group that has a `setStyle` method.
setStyle:function(t){return this.invoke("setStyle",t)},// @method bringToFront(): this
// Brings the layer group to the top of all other layers
bringToFront:function(){return this.invoke("bringToFront")},// @method bringToBack(): this
// Brings the layer group to the back of all other layers
bringToBack:function(){return this.invoke("bringToBack")},// @method getBounds(): LatLngBounds
// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
getBounds:function(){var t=new q;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),e8=R.extend({/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */options:{popupAnchor:[0,0],tooltipAnchor:[0,0],// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1},initialize:function(t){b(this,t)},// @method createIcon(oldIcon?: HTMLElement): HTMLElement
// Called internally when the icon has to be shown, returns a `<img>` HTML element
// styled according to the options.
createIcon:function(t){return this._createIcon("icon",t)},// @method createShadow(oldIcon?: HTMLElement): HTMLElement
// As `createIcon`, but for the shadow beneath it.
createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var o=H(n),r=H("shadow"===e&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return tZ.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),e4=e8.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){// @option imagePath: String
// `Icon.Default` will try to auto-detect the location of the
// blue icon images. If you are placing these images in a non-standard
// way, set this option to point to the right path.
return"string"!=typeof e4.imagePath&&(e4.imagePath=this._detectIconPath()),(this.options.imagePath||e4.imagePath)+e8.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(t,e,i){var n=e.exec(t);return n&&n[i]};return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=t0("div","leaflet-default-icon-path",document.body),e=tQ(t,"background-image")||tQ(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e))return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),e6=eZ.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new eD(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),t4(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&t6(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=eo(e._icon),s=i.getPixelBounds(),a=i.getPixelOrigin(),h=U(s.min._subtract(a).add(o),s.max._subtract(a).subtract(o));if(!h.contains(r)){// Compute incremental movement
var u=H((Math.max(h.max.x,r.x)-h.max.x)/(s.max.x-h.max.x)-(Math.min(h.min.x,r.x)-h.min.x)/(s.min.x-h.min.x),(Math.max(h.max.y,r.y)-h.max.y)/(s.max.y-h.max.y)-(Math.min(h.min.y,r.y)-h.min.y)/(s.min.y-h.min.y)).multiplyBy(n);i.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),en(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=I(this._adjustPan.bind(this,t))}},_onDragStart:function(){// @section Dragging events
// @event dragstart: Event
// Fired when the user starts dragging the marker.
// @event movestart: Event
// Fired when the marker starts moving (because of dragging).
this._oldLatLng=this._marker.getLatLng(),// When using ES6 imports it could not be set when `Popup` was not imported as well
this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(Z(this._panRequest),this._panRequest=I(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=eo(e._icon),o=e._map.layerPointToLatLng(n);i&&en(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,// @event drag: Event
// Fired repeatedly while the user drags the marker.
e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){// @event dragend: DragEndEvent
// Fired when the user stops dragging the marker.
Z(this._panRequest),// @event moveend: Event
// Fired when the marker stops moving (because of dragging).
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),e9=e2.extend({// @section
// @aka Marker options
options:{// @option icon: Icon = *
// Icon instance to use for rendering the marker.
// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
// If not specified, a common instance of `L.Icon.Default` is used.
icon:new e4,// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option keyboard: Boolean = true
// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
keyboard:!0,// @option title: String = ''
// Text for the browser tooltip that appear on marker hover (no tooltip by default).
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
title:"",// @option alt: String = 'Marker'
// Text for the `alt` attribute of the icon image.
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
alt:"Marker",// @option zIndexOffset: Number = 0
// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
zIndexOffset:0,// @option opacity: Number = 1.0
// The opacity of the marker.
opacity:1,// @option riseOnHover: Boolean = false
// If `true`, the marker will get on top of others when you hover the mouse over it.
riseOnHover:!1,// @option riseOffset: Number = 250
// The z-index offset used for the `riseOnHover` feature.
riseOffset:250,// @option pane: String = 'markerPane'
// `Map pane` where the markers icon will be added.
pane:"markerPane",// @option shadowPane: String = 'shadowPane'
// `Map pane` where the markers shadow will be added.
shadowPane:"shadowPane",// @option bubblingMouseEvents: Boolean = false
// When `true`, a mouse event on this marker will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!1,// @option autoPanOnFocus: Boolean = true
// When `true`, the map will pan whenever the marker is focused (via
// e.g. pressing `tab` on the keyboard) to ensure the marker is
// visible within the map's bounds
autoPanOnFocus:!0,// @section Draggable marker options
// @option draggable: Boolean = false
// Whether the marker is draggable with mouse/touch or not.
draggable:!1,// @option autoPan: Boolean = false
// Whether to pan the map when dragging this marker near its edge or not.
autoPan:!1,// @option autoPanPadding: Point = Point(50, 50)
// Distance (in pixels to the left/right and to the top/bottom) of the
// map edge to start panning the map.
autoPanPadding:[50,50],// @option autoPanSpeed: Number = 10
// Number of pixels the map should pan by.
autoPanSpeed:10},/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */initialize:function(t,e){b(this,e),this._latlng=X(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},// @method getLatLng: LatLng
// Returns the current geographical position of the marker.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Changes the marker position to the given point.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=X(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method setZIndexOffset(offset: Number): this
// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},// @method getIcon: Icon
// Returns the current icon used by the marker
getIcon:function(){return this.options.icon},// @method setIcon(icon: Icon): this
// Changes the marker icon.
setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),t4(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ed(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(t4(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&e_(this._icon,"focus",this._panOnFocus,this),t1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&t1(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&en(this._icon,t),this._shadow&&en(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(t4(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),e6)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new e6(this),t&&this.dragging.enable()}},// @method setOpacity(opacity: Number): this
// Changes the opacity of the marker.
setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&et(this._icon,t),this._shadow&&et(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?H(e.iconSize):H(0,0),n=e.iconAnchor?H(e.iconAnchor):H(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),e7=e2.extend({// @section
// @aka Path options
options:{// @option stroke: Boolean = true
// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
stroke:!0,// @option color: String = '#3388ff'
// Stroke color
color:"#3388ff",// @option weight: Number = 3
// Stroke width in pixels
weight:3,// @option opacity: Number = 1.0
// Stroke opacity
opacity:1,// @option lineCap: String= 'round'
// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
lineCap:"round",// @option lineJoin: String = 'round'
// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
lineJoin:"round",// @option dashArray: String = null
// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashArray:null,// @option dashOffset: String = null
// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashOffset:null,// @option fill: Boolean = depends
// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
fill:!1,// @option fillColor: String = *
// Fill color. Defaults to the value of the [`color`](#path-color) option
fillColor:null,// @option fillOpacity: Number = 0.2
// Fill opacity.
fillOpacity:.2,// @option fillRule: String = 'evenodd'
// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
fillRule:"evenodd",// className: '',
// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option bubblingMouseEvents: Boolean = true
// When `true`, a mouse event on this path will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!0},beforeAdd:function(t){// Renderer is set here because we need to call renderer.getEvents
// before this.getEvents.
this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},// @method redraw(): this
// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
redraw:function(){return this._map&&this._renderer._updatePath(this),this},// @method setStyle(style: Path options): this
// Changes the appearance of a Path based on the options in the `Path options` object.
setStyle:function(t){return b(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},// @method bringToFront(): this
// Brings the layer to the top of all path layers.
bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},// @method bringToBack(): this
// Brings the layer to the bottom of all path layers.
bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){// defined in child classes
this._project(),this._update()},_clickTolerance:function(){// used when doing hit detection for Canvas layers
return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),it=e7.extend({// @section
// @aka CircleMarker options
options:{fill:!0,// @option radius: Number = 10
// Radius of the circle marker, in pixels
radius:10},initialize:function(t,e){b(this,e),this._latlng=X(t),this._radius=this.options.radius},// @method setLatLng(latLng: LatLng): this
// Sets the position of a circle marker to a new location.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=X(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method getLatLng(): LatLng
// Returns the current geographical position of the circle marker
getLatLng:function(){return this._latlng},// @method setRadius(radius: Number): this
// Sets the radius of a circle marker. Units are in pixels.
setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of the circle
getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return e7.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new W(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),ie=it.extend({initialize:function(t,i,n){if("number"==typeof i&&(i=e({},n,{radius:i})),b(this,i),this._latlng=X(t),isNaN(this.options.radius))throw Error("Circle radius cannot be NaN");// @section
// @aka Circle options
// @option radius: Number; Radius of the circle, in meters.
this._mRadius=this.options.radius},// @method setRadius(radius: Number): this
// Sets the radius of a circle. Units are in meters.
setRadius:function(t){return this._mRadius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of a circle. Units are in meters.
getRadius:function(){return this._mRadius},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new q(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:e7.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===K.distance){var o=Math.PI/180,r=this._mRadius/K.R/o,s=i.project([e+r,t]),a=i.project([e-r,t]),h=s.add(a).divideBy(2),u=i.unproject(h).lat,l=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(u*o))/(Math.cos(e*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=r/Math.cos(Math.PI/180*e)),this._point=h.subtract(i.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-i.project([u,t-l]).x,this._radiusY=h.y-s.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(c).x}this._updateBounds()}}),ii=e7.extend({// @section
// @aka Polyline options
options:{// @option smoothFactor: Number = 1.0
// How much to simplify the polyline on each zoom level. More means
// better performance and smoother look, and less means more accurate representation.
smoothFactor:1,// @option noClip: Boolean = false
// Disable polyline clipping.
noClip:!1},initialize:function(t,e){b(this,e),this._setLatLngs(t)},// @method getLatLngs(): LatLng[]
// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
getLatLngs:function(){return this._latlngs},// @method setLatLngs(latlngs: LatLng[]): this
// Replaces all the points in the polyline with the given array of geographical points.
setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},// @method isEmpty(): Boolean
// Returns `true` if the Polyline has no LatLngs.
isEmpty:function(){return!this._latlngs.length},// @method closestLayerPoint(p: Point): Point
// Returns the point closest to `p` on the Polyline.
closestLayerPoint:function(t){for(var e,i,n=1/0,o=null,r=eV,s=0,a=this._parts.length;s<a;s++)for(var h=this._parts[s],u=1,l=h.length;u<l;u++){var c=r(t,e=h[u-1],i=h[u],!0);c<n&&(n=c,o=r(t,e,i))}return o&&(o.distance=Math.sqrt(n)),o},// @method getCenter(): LatLng
// Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return eK(this._defaultShape(),this._map.options.crs)},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){return this._bounds},// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
// Adds a given point to the polyline. By default, adds to the first ring of
// the polyline in case of a multi-polyline, but can be overridden by passing
// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
addLatLng:function(t,e){return e=e||this._defaultShape(),t=X(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new q,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return eX(this._latlngs)?this._latlngs:this._latlngs[0]},// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
_convertLatLngs:function(t){for(var e=[],i=eX(t),n=0,o=t.length;n<o;n++)i?(e[n]=X(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new W;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new F(t,t);this._rawPxBounds&&(this._pxBounds=new W([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},// recursively turns latlngs into a set of rings with projected coordinates
_projectLatlngs:function(t,e,i){var n,o,r=t[0]instanceof V,s=t.length;if(r){for(n=0,o=[];n<s;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<s;n++)this._projectLatlngs(t[n],e,i)},// clip polyline by renderer bounds so that we have less to render for performance
_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}var e,i,n,o,r,s,a,h=this._parts;for(e=0,n=0,o=this._rings.length;e<o;e++)for(i=0,r=(a=this._rings[e]).length;i<r-1;i++)(s=eU(a[i],a[i+1],t,i,!0))&&(h[n]=h[n]||[],h[n].push(s[0]),(s[1]!==a[i+1]||i===r-2)&&(h[n].push(s[1]),n++))}},// simplify each clipped part of the polyline for performance
_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=eH(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t,e){var i,n,o,r,s,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// hit detection for polylines
for(i=0,r=this._parts.length;i<r;i++)for(n=0,o=(s=(a=this._parts[i]).length)-1;n<s;o=n++)if((e||0!==n)&&eW(t,a[o],a[n])<=h)return!0;return!1}});// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
ii._flat=eG;/*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */var io=ii.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},// @method getCenter(): LatLng
// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return eF(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=ii.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof V&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){ii.prototype._setLatLngs.call(this,t),eX(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return eX(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){// polygons need a different clipping algorithm so we redefine that
var t=this._renderer._bounds,e=this.options.weight,i=new F(e,e);if(// increase clip padding by stroke width to avoid stroke on clip edges
t=new W(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}for(var n,o=0,r=this._rings.length;o<r;o++)(n=eN(this._rings[o],t,!0)).length&&this._parts.push(n)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){var e,i,n,o,r,s,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// ray casting algorithm for detecting if point is in polygon
for(o=0,a=this._parts.length;o<a;o++)for(r=0,s=(h=(e=this._parts[o]).length)-1;r<h;s=r++)i=e[r],n=e[s],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);// also check if it's on polygon stroke
return u||ii.prototype._containsPoint.call(this,t,!0)}}),ir=e3.extend({/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */initialize:function(t,e){b(this,e),this._layers={},t&&this.addData(t)},// @method addData( <GeoJSON> data ): this
// Adds a GeoJSON object to the layer.
addData:function(t){var e,i,n,o=C(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)(// only add this if geometry or geometries are set and not null
(n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var s=is(t,r);return s?(s.feature=ip(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},// @method resetStyle( <Path> layer? ): this
// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
// If `layer` is omitted, the style of all features in the current layer is reset.
resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(// reset any custom styles
t.options=e({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},// @method setStyle( <Function> style ): this
// Changes styles of GeoJSON vector layers with the given style function.
setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});// @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function is(t,e){var i,n,o,r="Feature"===t.type?t.geometry:t,s=r?r.coordinates:null,a=[],h=e&&e.pointToLayer,u=e&&e.coordsToLatLng||ih;if(!s&&!r)return null;switch(r.type){case"Point":return ia(h,t,i=u(s),e);case"MultiPoint":for(n=0,o=s.length;n<o;n++)i=u(s[n]),a.push(ia(h,t,i,e));return new e3(a);case"LineString":case"MultiLineString":return new ii(iu(s,"LineString"===r.type?0:1,u),e);case"Polygon":case"MultiPolygon":return new io(iu(s,"Polygon"===r.type?1:2,u),e);case"GeometryCollection":for(n=0,o=r.geometries.length;n<o;n++){var l=is({geometry:r.geometries[n],type:"Feature",properties:t.properties},e);l&&a.push(l)}return new e3(a);case"FeatureCollection":for(n=0,o=r.features.length;n<o;n++){var c=is(r.features[n],e);c&&a.push(c)}return new e3(a);default:throw Error("Invalid GeoJSON object.")}}function ia(t,e,i,n){return t?t(e,i):new e9(i,n&&n.markersInheritOptions&&n)}// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function ih(t){return new V(t[1],t[0],t[2])}// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function iu(t,e,i){for(var n=[],o=0,r=t.length;o<r;o++)n.push(e?iu(t[o],e-1,i):(i||ih)(t[o]));return n}// @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function il(t,e){return void 0!==(t=X(t)).alt?[y(t.lng,e),y(t.lat,e),y(t.alt,e)]:[y(t.lng,e),y(t.lat,e)]}// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function ic(t,e,i,n){for(var o=[],r=0,s=t.length;r<s;r++)o.push(e?ic(t[r],eX(t[r])?0:e-1,i,n):il(t[r],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function id(t,i){return t.feature?e({},t.feature,{geometry:i}):ip(i)}// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function ip(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var i_={toGeoJSON:function(t){return id(this,{type:"Point",coordinates:il(this.getLatLng(),t)})}};// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function im(t,e){return new ir(t,e)}// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
e9.include(i_),// @namespace CircleMarker
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
ie.include(i_),it.include(i_),// @namespace Polyline
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
ii.include({toGeoJSON:function(t){var e=!eX(this._latlngs),i=ic(this._latlngs,e?1:0,!1,t);return id(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),// @namespace Polygon
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
io.include({toGeoJSON:function(t){var e=!eX(this._latlngs),i=e&&!eX(this._latlngs[0]),n=ic(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),id(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),// @namespace LayerGroup
e5.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),id(this,{type:"MultiPoint",coordinates:e})},// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var i="GeometryCollection"===e,n=[];return(this.eachLayer(function(e){if(e.toGeoJSON){var o=e.toGeoJSON(t);if(i)n.push(o.geometry);else{var r=ip(o);// Squash nested feature collections
"FeatureCollection"===r.type?n.push.apply(n,r.features):n.push(r)}}}),i)?id(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});/*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */var ig=e2.extend({// @section
// @aka ImageOverlay options
options:{// @option opacity: Number = 1.0
// The opacity of the image overlay.
opacity:1,// @option alt: String = ''
// Text for the `alt` attribute of the image (useful for accessibility).
alt:"",// @option interactive: Boolean = false
// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
interactive:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the image.
// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option errorOverlayUrl: String = ''
// URL to the overlay image to show in place of the overlay that failed to load.
errorOverlayUrl:"",// @option zIndex: Number = 1
// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
zIndex:1,// @option className: String = ''
// A custom class name to assign to the image. Empty by default.
className:""},initialize:function(t,e,i){this._url=t,this._bounds=Y(e),b(this,i)},onAdd:function(){!this._image&&(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(t4(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){t1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},// @method setOpacity(opacity: Number): this
// Sets the opacity of the overlay.
setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},// @method bringToFront(): this
// Brings the layer to the top of all overlays.
bringToFront:function(){return this._map&&t5(this._image),this},// @method bringToBack(): this
// Brings the layer to the bottom of all overlays.
bringToBack:function(){return this._map&&t3(this._image),this},// @method setUrl(url: String): this
// Changes the URL of the image.
setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},// @method setBounds(bounds: LatLngBounds): this
// Update the bounds that this ImageOverlay covers
setBounds:function(t){return this._bounds=Y(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method setZIndex(value: Number): this
// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method getBounds(): LatLngBounds
// Get the bounds that this ImageOverlay covers
getBounds:function(){return this._bounds},// @method getElement(): HTMLElement
// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
// used by this overlay.
getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:t0("img");if(t4(e,"leaflet-image-layer"),this._zoomAnimated&&t4(e,"leaflet-zoom-animated"),this.options.className&&t4(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the ImageOverlay layer has loaded its image
e.onload=p(this.fire,this,"load"),e.onerror=p(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;ei(this._image,i,e)},_reset:function(){var t=this._image,e=new W(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();en(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){et(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){// @event error: Event
// Fired when the ImageOverlay layer fails to load its image
this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},// @method getCenter(): LatLng
// Returns the center of the ImageOverlay.
getCenter:function(){return this._bounds.getCenter()}}),iv=ig.extend({// @section
// @aka VideoOverlay options
options:{// @option autoplay: Boolean = true
// Whether the video starts playing automatically when loaded.
// On some browsers autoplay will only work with `muted: true`
autoplay:!0,// @option loop: Boolean = true
// Whether the video will loop back to the beginning when played.
loop:!0,// @option keepAspectRatio: Boolean = true
// Whether the video will save aspect ratio after the projection.
// Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
keepAspectRatio:!0,// @option muted: Boolean = false
// Whether the video starts on mute when loaded.
muted:!1,// @option playsInline: Boolean = true
// Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:t0("video");if(t4(e,"leaflet-image-layer"),this._zoomAnimated&&t4(e,"leaflet-zoom-animated"),this.options.className&&t4(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the video has finished loading the first frame
e.onloadeddata=p(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}C(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var s=t0("source");s.src=this._url[r],e.appendChild(s)}}}),iy=ig.extend({_initImage:function(){var t=this._image=this._url;t4(t,"leaflet-image-layer"),this._zoomAnimated&&t4(t,"leaflet-zoom-animated"),this.options.className&&t4(t,this.options.className),t.onselectstart=v,t.onmousemove=v}}),ix=e2.extend({// @section
// @aka DivOverlay options
options:{// @option interactive: Boolean = false
// If true, the popup/tooltip will listen to the mouse events.
interactive:!1,// @option offset: Point = Point(0, 0)
// The offset of the overlay position.
offset:[0,0],// @option className: String = ''
// A custom CSS class name to assign to the overlay.
className:"",// @option pane: String = undefined
// `Map pane` where the overlay will be added.
pane:void 0,// @option content: String|HTMLElement|Function = ''
// Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
// passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
content:""},initialize:function(t,e){t&&(t instanceof V||C(t))?(this._latlng=X(t),b(this,e)):(b(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},// @method openOn(map: Map): this
// Adds the overlay to the map.
// Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},// @method close(): this
// Closes the overlay.
// Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
// and `layer.closePopup()`/`.closeTooltip()`.
close:function(){return this._map&&this._map.removeLayer(this),this},// @method toggle(layer?: Layer): this
// Opens or closes the overlay bound to layer depending on its current state.
// Argument may be omitted only for overlay bound to layer.
// Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),// open the overlay on the map
this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&et(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&et(this._container,1),this.bringToFront(),this.options.interactive&&(t4(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(et(this._container,0),this._removeTimeout=setTimeout(p(t1,void 0,this._container),200)):t1(this._container),this.options.interactive&&(t6(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},// @namespace DivOverlay
// @method getLatLng: LatLng
// Returns the geographical point of the overlay.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Sets the geographical point where the overlay will open.
setLatLng:function(t){return this._latlng=X(t),this._map&&(this._updatePosition(),this._adjustPan()),this},// @method getContent: String|HTMLElement
// Returns the content of the overlay.
getContent:function(){return this._content},// @method setContent(htmlContent: String|HTMLElement|Function): this
// Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
// The function should return a `String` or `HTMLElement` to be used in the overlay.
setContent:function(t){return this._content=t,this.update(),this},// @method getElement: String|HTMLElement
// Returns the HTML container of the overlay.
getElement:function(){return this._container},// @method update: null
// Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method isOpen: Boolean
// Returns `true` when the overlay is visible on the map.
isOpen:function(){return!!this._map&&this._map.hasLayer(this)},// @method bringToFront: this
// Brings this overlay in front of other overlays (in the same map pane).
bringToFront:function(){return this._map&&t5(this._container),this},// @method bringToBack: this
// Brings this overlay to the back of other overlays (in the same map pane).
bringToBack:function(){return this._map&&t3(this._container),this},// prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof e3){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;// Unable to get source layer.
// set overlay source to this layer
this._source=e}if(!t){if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw Error("Unable to get source layer LatLng.")}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}// @namespace DivOverlay
// @section DivOverlay events
// @event contentupdate: Event
// Fired when the content of the overlay is updated
this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=H(this.options.offset),i=this._getAnchor();this._zoomAnimated?en(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;// bottom position the overlay in case the height of the overlay changes (images loading etc)
this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});Map.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),e2.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(b(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}});/*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */// @namespace Popup
var iw=ix.extend({// @section
// @aka Popup options
options:{// @option pane: String = 'popupPane'
// `Map pane` where the popup will be added.
pane:"popupPane",// @option offset: Point = Point(0, 7)
// The offset of the popup position.
offset:[0,7],// @option maxWidth: Number = 300
// Max width of the popup, in pixels.
maxWidth:300,// @option minWidth: Number = 50
// Min width of the popup, in pixels.
minWidth:50,// @option maxHeight: Number = null
// If set, creates a scrollable container of the given height
// inside a popup if its content exceeds it.
// The scrollable container can be styled using the
// `leaflet-popup-scrolled` CSS class selector.
maxHeight:null,// @option autoPan: Boolean = true
// Set it to `false` if you don't want the map to do panning animation
// to fit the opened popup.
autoPan:!0,// @option autoPanPaddingTopLeft: Point = null
// The margin between the popup and the top left corner of the map
// view after autopanning was performed.
autoPanPaddingTopLeft:null,// @option autoPanPaddingBottomRight: Point = null
// The margin between the popup and the bottom right corner of the map
// view after autopanning was performed.
autoPanPaddingBottomRight:null,// @option autoPanPadding: Point = Point(5, 5)
// Equivalent of setting both top left and bottom right autopan padding to the same value.
autoPanPadding:[5,5],// @option keepInView: Boolean = false
// Set it to `true` if you want to prevent users from panning the popup
// off of the screen while it is open.
keepInView:!1,// @option closeButton: Boolean = true
// Controls the presence of a close button in the popup.
closeButton:!0,// @option autoClose: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the popup closing when another popup is opened.
autoClose:!0,// @option closeOnEscapeKey: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the ESC key for closing of the popup.
closeOnEscapeKey:!0,// @option closeOnClick: Boolean = *
// Set it if you want to override the default behavior of the popup closing when user clicks
// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:""},// @namespace Popup
// @method openOn(map: Map): this
// Alternative to `map.openPopup(popup)`.
// Adds the popup to the map and closes the previous one.
openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ix.prototype.openOn.call(this,t)},onAdd:function(t){ix.prototype.onAdd.call(this,t),// @namespace Map
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup is opened in the map
t.fire("popupopen",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup bound to this layer is opened
this._source.fire("popupopen",{popup:this},!0),this._source instanceof e7||this._source.on("preclick",ey))},onRemove:function(t){ix.prototype.onRemove.call(this,t),// @namespace Map
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup in the map is closed
t.fire("popupclose",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup bound to this layer is closed
this._source.fire("popupclose",{popup:this},!0),this._source instanceof e7||this._source.off("preclick",ey))},getEvents:function(){var t=ix.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=t0("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=t0("div",t+"-content-wrapper",e);if(this._contentNode=t0("div",t+"-content",i),ew(e),ex(this._contentNode),ed(e,"contextmenu",ey),this._tipContainer=t0("div",t+"-tip-container",e),this._tip=t0("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=t0("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',ed(n,"click",function(t){eb(t),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.max(i=Math.min(i,this.options.maxWidth),this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",t4(t,r)):t6(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();en(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){// We can endlessly recurse if keepInView is set and the view resets.
// Let's guard against that by exiting early if we're responding to our own autopan.
if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(tQ(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new F(this._containerLeft,-i-this._containerBottom);o._add(eo(this._container));var r=t.layerPointToContainerPoint(o),s=H(this.options.autoPanPadding),a=H(this.options.autoPanPaddingTopLeft||s),h=H(this.options.autoPanPaddingBottomRight||s),u=t.getSize(),l=0,c=0;r.x+n+h.x>u.x&&(l=r.x+n-u.x+h.x),r.x-l-a.x<0&&(l=r.x-a.x),r.y+i+h.y>u.y&&(c=r.y+i-u.y+h.y),r.y-c-a.y<0&&(c=r.y-a.y),(l||c)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([l,c]))}},_getAnchor:function(){// Where should we anchor the popup on the source layer?
return H(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});/* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */Map.mergeOptions({closePopupOnClick:!0}),// @namespace Map
// @section Methods for Layers and Controls
Map.include({// @method openPopup(popup: Popup): this
// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
// @alternative
// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
// Creates a popup with the specified content and options and opens it in the given point on a map.
openPopup:function(t,e,i){return this._initOverlay(iw,t,e,i).openOn(this),this},// @method closePopup(popup?: Popup): this
// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),/*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */// @section Popup methods
e2.include({// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
// Binds a popup to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindPopup:function(t,e){return this._popup=this._initOverlay(iw,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},// @method unbindPopup(): this
// Removes the popup previously bound with `bindPopup`.
unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},// @method openPopup(latlng?: LatLng): this
// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
openPopup:function(t){return this._popup&&(this instanceof e3||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},// @method closePopup(): this
// Closes the popup bound to this layer if it is open.
closePopup:function(){return this._popup&&this._popup.close(),this},// @method togglePopup(): this
// Opens or closes the popup bound to this layer depending on its current state.
togglePopup:function(){return this._popup&&this._popup.toggle(this),this},// @method isPopupOpen(): boolean
// Returns `true` if the popup bound to this layer is currently open.
isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},// @method setPopupContent(content: String|HTMLElement|Popup): this
// Sets the content of the popup bound to this layer.
setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},// @method getPopup(): Popup
// Returns the popup bound to this layer.
getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){// prevent map click
eT(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof e7)){// treat it like a marker and figure out
// if we should toggle it open/closed
this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});/*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */// @namespace Tooltip
var ib=ix.extend({// @section
// @aka Tooltip options
options:{// @option pane: String = 'tooltipPane'
// `Map pane` where the tooltip will be added.
pane:"tooltipPane",// @option offset: Point = Point(0, 0)
// Optional offset of the tooltip position.
offset:[0,0],// @option direction: String = 'auto'
// Direction where to open the tooltip. Possible values are: `right`, `left`,
// `top`, `bottom`, `center`, `auto`.
// `auto` will dynamically switch between `right` and `left` according to the tooltip
// position on the map.
direction:"auto",// @option permanent: Boolean = false
// Whether to open the tooltip permanently or only on mouseover.
permanent:!1,// @option sticky: Boolean = false
// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
sticky:!1,// @option opacity: Number = 0.9
// Tooltip container opacity.
opacity:.9},onAdd:function(t){ix.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),// @namespace Map
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip is opened in the map.
t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip bound to this layer is opened.
this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ix.prototype.onRemove.call(this,t),// @namespace Map
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip in the map is closed.
t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip bound to this layer is closed.
this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ix.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=t0("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,r=n.latLngToContainerPoint(n.getCenter()),s=n.layerPointToContainerPoint(t),a=this.options.direction,h=o.offsetWidth,u=o.offsetHeight,l=H(this.options.offset),c=this._getAnchor();"top"===a?(e=h/2,i=u):"bottom"===a?(e=h/2,i=0):("center"===a?e=h/2:"right"===a?e=0:"left"===a?e=h:s.x<r.x?(a="right",e=0):(a="left",e=h+(l.x+c.x)*2),i=u/2),t=t.subtract(H(e,i,!0)).add(l).add(c),t6(o,"leaflet-tooltip-right"),t6(o,"leaflet-tooltip-left"),t6(o,"leaflet-tooltip-top"),t6(o,"leaflet-tooltip-bottom"),t4(o,"leaflet-tooltip-"+a),en(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&et(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){// Where should we anchor the tooltip on the source layer?
return H(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});// @namespace Map
// @section Methods for Layers and Controls
Map.include({// @method openTooltip(tooltip: Tooltip): this
// Opens the specified tooltip.
// @alternative
// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
// Creates a tooltip with the specified content and options and open it.
openTooltip:function(t,e,i){return this._initOverlay(ib,t,e,i).openOn(this),this},// @method closeTooltip(tooltip: Tooltip): this
// Closes the tooltip given as parameter.
closeTooltip:function(t){return t.close(),this}}),/*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */// @section Tooltip methods
e2.include({// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
// Binds a tooltip to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ib,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},// @method unbindTooltip(): this
// Removes the tooltip previously bound with `bindTooltip`.
unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,e.click=this._openTooltip,this._map?this._addFocusListeners():e.add=this._addFocusListeners),this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),this[t?"off":"on"](e),this._tooltipHandlersAdded=!t}},// @method openTooltip(latlng?: LatLng): this
// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
openTooltip:function(t){return this._tooltip&&(this instanceof e3||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(// open the tooltip on the map
this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},// @method closeTooltip(): this
// Closes the tooltip bound to this layer if it is open.
closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},// @method toggleTooltip(): this
// Opens or closes the tooltip bound to this layer depending on its current state.
toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},// @method isTooltipOpen(): boolean
// Returns `true` if the tooltip bound to this layer is currently open.
isTooltipOpen:function(){return this._tooltip.isOpen()},// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
// Sets the content of the tooltip bound to this layer.
setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},// @method getTooltip(): Tooltip
// Returns the tooltip bound to this layer.
getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(ed(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),ed(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map){// If the map is moving, we will show the tooltip after it's done.
if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}});/*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */var iT=e8.extend({options:{// @section
// @aka DivIcon options
iconSize:[12,12],// iconAnchor: (Point),
// popupAnchor: (Point),
// @option html: String|HTMLElement = ''
// Custom HTML code to put inside the div element, empty by default. Alternatively,
// an instance of `HTMLElement`.
html:!1,// @option bgPos: Point = [0, 0]
// Optional relative position of the background, in pixels
bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(t2(e),e.appendChild(i.html)):e.innerHTML=!1!==i.html?i.html:"",i.bgPos){var n=H(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});e8.Default=e4;/*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */var iP=e2.extend({// @section
// @aka GridLayer options
options:{// @option tileSize: Number|Point = 256
// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
tileSize:256,// @option opacity: Number = 1.0
// Opacity of the tiles. Can be used in the `createTile()` function.
opacity:1,// @option updateWhenIdle: Boolean = (depends)
// Load new tiles only when panning ends.
// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
updateWhenIdle:tZ.mobile,// @option updateWhenZooming: Boolean = true
// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
updateWhenZooming:!0,// @option updateInterval: Number = 200
// Tiles will not update more than once every `updateInterval` milliseconds when panning.
updateInterval:200,// @option zIndex: Number = 1
// The explicit zIndex of the tile layer.
zIndex:1,// @option bounds: LatLngBounds = undefined
// If set, tiles will only be loaded inside the set `LatLngBounds`.
bounds:null,// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = undefined
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:void 0,// @option maxNativeZoom: Number = undefined
// Maximum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
// from `maxNativeZoom` level and auto-scaled.
maxNativeZoom:void 0,// @option minNativeZoom: Number = undefined
// Minimum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
// from `minNativeZoom` level and auto-scaled.
minNativeZoom:void 0,// @option noWrap: Boolean = false
// Whether the layer is wrapped around the antimeridian. If `true`, the
// GridLayer will only be displayed once at low zoom levels. Has no
// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
// tiles outside the CRS limits.
noWrap:!1,// @option pane: String = 'tilePane'
// `Map pane` where the grid layer will be added.
pane:"tilePane",// @option className: String = ''
// A custom class name to assign to the tile layer. Empty by default.
className:"",// @option keepBuffer: Number = 2
// When panning the map, keep this many rows and columns of tiles before unloading them.
keepBuffer:2},initialize:function(t){b(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),t1(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},// @method bringToFront: this
// Brings the tile layer to the top of all tile layers.
bringToFront:function(){return this._map&&(t5(this._container),this._setAutoZIndex(Math.max)),this},// @method bringToBack: this
// Brings the tile layer to the bottom of all tile layers.
bringToBack:function(){return this._map&&(t3(this._container),this._setAutoZIndex(Math.min)),this},// @method getContainer: HTMLElement
// Returns the HTML element that contains the tiles for this layer.
getContainer:function(){return this._container},// @method setOpacity(opacity: Number): this
// Changes the [opacity](#gridlayer-opacity) of the grid layer.
setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},// @method setZIndex(zIndex: Number): this
// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method isLoading: Boolean
// Returns `true` if any tile in the grid layer has not finished loading.
isLoading:function(){return this._loading},// @method redraw: this
// Causes the layer to clear all the tiles and request them again.
redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @section Extension methods
// Layers extending `GridLayer` shall reimplement the following method.
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, must be overridden by classes extending `GridLayer`.
// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
// is specified, it must be called when the tile has finished loading and drawing.
createTile:function(){return document.createElement("div")},// @section
// @method getTileSize: Point
// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
getTileSize:function(){var t=this.options.tileSize;return t instanceof F?t:new F(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,r=i.length;o<r;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!tZ.ielt9){et(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var r=Math.min(1,(t-o.loaded)/200);et(o.el,r),r<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(Z(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=t0("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(t1(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=t0("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),// force the browser to consider the newly added element for transition
v(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)t1(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),r=Math.floor(e/2),s=i-1,a=new F(+o,+r);a.z=+s;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),s>n&&this._retainParent(o,r,s,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var s=new F(o,r);s.z=i+1;var a=this._tileCoordsToKey(s),h=this._tiles[a];if(h&&h.active){h.retain=!0;continue}h&&h.loaded&&(h.retain=!0),i+1<n&&this._retainChildren(o,r,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),// Flag to prevent _updateOpacity from pruning tiles during
// a zoom anim or a pinch gesture
this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();tZ.any3d?ei(t.el,o,n):en(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*n);return new W(o.subtract(r),o.add(r))},// Private method to load tiles in the grid's active zoom level according to map bounds
_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){// if out of minzoom/maxzoom
var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),r=o.getCenter(),s=[],a=this.options.keepBuffer,h=new W(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));// Sanity check: panic if the tile range contains Infinity somewhere.
if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new F(l.x,l.y))||(this._tiles[u].current=!1)}// _update just loads more tiles. If the tile zoom level differs too much
// from the map's, let _setView reset levels and prune old tiles.
if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}// create a queue of coordinates to load tiles from
for(var c=o.min.y;c<=o.max.y;c++)for(var d=o.min.x;d<=o.max.x;d++){var p=new F(d,c);if(p.z=this._tileZoom,this._isValidTile(p)){var _=this._tiles[this._tileCoordsToKey(p)];_?_.current=!0:s.push(p)}}if(// sort tile queue to load tiles in order of their distance to center
s.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)}),0!==s.length){// if it's the first batch of tiles to load
this._loading||(this._loading=!0,// @event loading: Event
// Fired when the grid layer starts loading tiles.
this.fire("loading"));// create DOM fragment to append tiles in one batch
var f=document.createDocumentFragment();for(d=0;d<s.length;d++)this._addTile(s[d],f);this._level.el.appendChild(f)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){// don't load tile if it's out of bounds and not wrapped
var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;// don't load tile if it doesn't intersect the bounds in options
var n=this._tileCoordsToBounds(t);return Y(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i);return[e.unproject(n,t.z),e.unproject(o,t.z)]},// converts tile coordinates to its geographical bounds
_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new q(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},// converts tile coordinates to key for the tile cache
_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},// converts tile cache key to coordinates
_keyToTileCoords:function(t){var e=t.split(":"),i=new F(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(t1(e.el),delete this._tiles[t],// @event tileunload: TileEvent
// Fired when a tile is removed (e.g. when a tile goes off the screen).
this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){t4(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=v,t.onmousemove=v,tZ.ielt9&&this.options.opacity<1&&et(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),p(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&I(p(this._tileReady,this,t,null,o)),en(o,i),// save tile in cache
this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),// @event tileloadstart: TileEvent
// Fired when a tile is requested and starts loading.
this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&// Fired when there is an error loading a tile.
this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(et(i.el,0),Z(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(t4(i.el,"leaflet-tile-loaded"),// @event tileload: TileEvent
// Fired when a tile loads.
this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,// @event load: Event
// Fired when the grid layer loaded all visible tiles.
this.fire("load"),tZ.ielt9||!this._map._fadeAnimated?I(this._pruneTiles,this):// to trigger a pruning.
setTimeout(p(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new F(this._wrapX?g(t.x,this._wrapX):t.x,this._wrapY?g(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new W(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),iL=iP.extend({// @section
// @aka TileLayer options
options:{// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = 18
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:18,// @option subdomains: String|String[] = 'abc'
// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
subdomains:"abc",// @option errorTileUrl: String = ''
// URL to the tile image to show in place of the tile that failed to load.
errorTileUrl:"",// @option zoomOffset: Number = 0
// The zoom number used in tile URLs will be offset with this value.
zoomOffset:0,// @option tms: Boolean = false
// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
tms:!1,// @option zoomReverse: Boolean = false
// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
zoomReverse:!1,// @option detectRetina: Boolean = false
// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
detectRetina:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option referrerPolicy: Boolean|String = false
// Whether the referrerPolicy attribute will be added to the tiles.
// If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
// This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
// (e.g. to validate an API token).
// Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=b(this,e)).detectRetina&&tZ.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},// @method setUrl(url: String, noRedraw?: Boolean): this
// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
// If the URL does not change, the layer will not be redrawn unless
// the noRedraw parameter is set to false.
setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
// callback is called when the tile has been loaded.
createTile:function(t,e){var i=document.createElement("img");return ed(i,"load",p(this._tileOnLoad,this,e,i)),ed(i,"error",p(this._tileOnError,this,e,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),// The alt attribute is set to the empty string,
// allowing screen readers to ignore the decorative image tiles.
// https://www.w3.org/WAI/tutorials/images/decorative/
// https://www.w3.org/TR/html-aria/#el-img-empty-alt
i.alt="",i.src=this.getTileUrl(t),i},// @section Extension methods
// @uninheritable
// Layers extending `TileLayer` might reimplement the following method.
// @method getTileUrl(coords: Object): String
// Called only internally, returns the URL for a tile given its coordinates.
// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
getTileUrl:function(t){var i={r:tZ.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=n),i["-y"]=n}return M(this._url,e(i,this.options))},_tileOnLoad:function(t,e){// For https://github.com/Leaflet/Leaflet/issues/3332
tZ.ielt9?setTimeout(p(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},// stops loading all tiles in the background layer
_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=v,e.onerror=v,!e.complete)){e.src=E;var i=this._tiles[t].coords;t1(e),delete this._tiles[t],// @event tileabort: TileEvent
// Fired when a tile was loading but is now not wanted.
this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return(// Cancels any pending http requests associated with the tile
e.el.setAttribute("src",E),iP.prototype._removeTile.call(this,t))},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==E))return iP.prototype._tileReady.call(this,t,e,i)}});// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.
function iM(t,e){return new iL(t,e)}/*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */var iC=iL.extend({// @section
// @aka TileLayer.WMS options
// If any custom options not documented here are used, they will be sent to the
// WMS server as extra parameters in each request URL. This can be useful for
// [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
defaultWmsParams:{service:"WMS",request:"GetMap",// @option layers: String = ''
// **(required)** Comma-separated list of WMS layers to show.
layers:"",// @option styles: String = ''
// Comma-separated list of WMS styles.
styles:"",// @option format: String = 'image/jpeg'
// WMS image format (use `'image/png'` for layers with transparency).
format:"image/jpeg",// @option transparent: Boolean = false
// If `true`, the WMS service will return images with transparency.
transparent:!1,// @option version: String = '1.1.1'
// Version of the WMS service to use
version:"1.1.1"},options:{// @option crs: CRS = null
// Coordinate Reference System to use for the WMS requests, defaults to
// map CRS. Don't change this if you're not sure what it means.
crs:null,// @option uppercase: Boolean = false
// If `true`, WMS request parameter keys will be uppercase.
uppercase:!1},initialize:function(t,i){this._url=t;var n=e({},this.defaultWmsParams);// all keys that are not TileLayer options go to WMS params
for(var o in i)o in this.options||(n[o]=i[o]);var r=(i=b(this,i)).detectRetina&&tZ.retina?2:1,s=this.getTileSize();n.width=s.x*r,n.height=s.y*r,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,iL.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=U(i.project(e[0]),i.project(e[1])),o=n.min,r=n.max,s=(this._wmsVersion>=1.3&&this._crs===e0?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),a=iL.prototype.getTileUrl.call(this,t);return a+T(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},// @method setParams(params: Object, noRedraw?: Boolean): this
// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
setParams:function(t,i){return e(this.wmsParams,t),i||this.redraw(),this}});iL.WMS=iC,iM.wms=// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function(t,e){return new iC(t,e)};/*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */var iS=e2.extend({// @section
// @aka Renderer options
options:{// @option padding: Number = 0.1
// How much to extend the clip area around the map view (relative to its size)
// e.g. 0.1 would be 10% of map view in each direction
padding:.1},initialize:function(t){b(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),// always keep transform-origin as 0 0
t4(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));tZ.any3d?ei(this._container,r,i):en(this._container,r)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
// Subclasses are responsible of firing the 'update' event.
var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new W(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),iE=iS.extend({// @section
// @aka Canvas options
options:{// @option tolerance: Number = 0
// How much to extend the click tolerance around a path/object on the map.
tolerance:0},getEvents:function(){var t=iS.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
this._postponeUpdatePaths=!0},onAdd:function(){iS.prototype.onAdd.call(this),// Redraw vectors since canvas is cleared upon removal,
// in case of removing the renderer itself from the map.
this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");ed(t,"mousemove",this._onMouseMove,this),ed(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ed(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){Z(this._redrawRequest),delete this._ctx,t1(this._container),e_(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){iS.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=tZ.retina?2:1;en(e,t.min),// set canvas size (also clearing it); use double size on retina
e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",tZ.retina&&this._ctx.scale(2,2),// translate so we use the same path coordinates after canvas element moves
this._ctx.translate(-t.min.x,-t.min.y),// Tell paths to redraw themselves
this.fire("update")}},_reset:function(){iS.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){// Redraw the union of the layer's old pixel
// bounds and the new pixel bounds.
this._extendRedrawBounds(t),t._project(),t._update(),// The redraw will extend the redraw bounds
// with the new pixel bounds.
this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,i,n=t.options.dashArray.split(/[, ]+/),o=[];for(i=0;i<n.length;i++){// Ignore dash array containing invalid lengths
if(isNaN(e=Number(n[i])))return;o.push(e)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||I(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new W,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,r,s=t._parts,a=s.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=s[i].length;n<o;n++)r=s[i][n],h[n?"lineTo":"moveTo"](r.x,r.y);e&&h.closePath()}this._fillStroke(h,t)}}// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},// Canvas obviously doesn't have mouse events for individual drawn objects,
// so we emulate that by calculating what's under the mouse on mousemove/click manually
_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(!("click"===t.type||"preclick"===t.type)||!this._map._draggableMoved(e))&&(i=e);this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving())&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(// if we're leaving the layer, fire mouseout
t6(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(t4(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(p(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(!i)return;i.prev=n,n?n.next=i:i&&// single entry
(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(!n)return;n.next=i,i?i.prev=n:n&&// single entry
(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function ik(t){return tZ.canvas?new iE(t):null}/*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */var iz=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){// Do not return fn from catch block so `e` can be garbage collected
// See https://github.com/Leaflet/Leaflet/pull/7279
}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),iO=tZ.vml?iz:ti,iA=iS.extend({_initContainer:function(){this._container=iO("svg"),// makes it possible to click through svg root; we'll reset it back in individual paths
this._container.setAttribute("pointer-events","none"),this._rootGroup=iO("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){t1(this._container),e_(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){iS.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),// movement: update container viewBox so that we don't have to change coordinates of individual layers
en(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},// methods below are called by vector layers implementations
_initPath:function(t){var e=t._path=iO("path");t.options.className&&t4(e,t.options.className),t.options.interactive&&t4(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){t1(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,tn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+-(2*i)+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
_bringToFront:function(t){t5(t._path)},_bringToBack:function(t){t3(t._path)}});// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function iB(t){return tZ.svg||tZ.vml?new iA(t):null}tZ.vml&&iA.include({_initContainer:function(){this._container=t0("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(iS.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=iz("shape");t4(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=iz("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;t1(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=iz("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=C(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=iz("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){t5(t._container)},_bringToBack:function(t){t3(t._container)}}),Map.include({// @namespace Map; @method getRenderer(layer: Path): Renderer
// Returns the instance of `Renderer` that should be used to render the given
// `Path`. It will ensure that the `renderer` options of the map and paths
// are respected, and that the renderers do exist on the map.
getRenderer:function(t){// @namespace Path; @option renderer: Renderer
// Use this specific instance of `Renderer` for this path. Takes
// precedence over the map's [default renderer](#map-renderer).
var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){// @namespace Map; @option preferCanvas: Boolean = false
// Whether `Path`s should be rendered on a `Canvas` renderer.
// By default, all `Path`s are rendered in a `SVG` renderer.
return this.options.preferCanvas&&ik(t)||iB(t)}});/*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   *//*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */var iI=io.extend({initialize:function(t,e){io.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},// @method setBounds(latLngBounds: LatLngBounds): this
// Redraws the rectangle with the passed bounds.
setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=Y(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});iA.create=iO,iA.pointsToPath=tn,ir.geometryToLayer=is,ir.coordsToLatLng=ih,ir.coordsToLatLngs=iu,ir.latLngToCoords=il,ir.latLngsToCoords=ic,ir.getFeature=id,ir.asFeature=ip,/*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */// @namespace Map
// @section Interaction Options
Map.mergeOptions({// @option boxZoom: Boolean = true
// Whether the map can be zoomed to a rectangular area specified by
// dragging the mouse while pressing the shift key.
boxZoom:!0});var iZ=eZ.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){ed(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){e_(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){t1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;// Clear the deferred resetState if it hasn't executed yet, otherwise it
// will interrupt the interaction and orphan a box element in the container.
this._clearDeferredResetState(),this._resetState(),i(),es(),this._startPoint=this._map.mouseEventToContainerPoint(t),ed(document,{contextmenu:eT,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=t0("div","leaflet-zoom-box",this._container),t4(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new W(this._point,this._startPoint),i=e.getSize();en(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(t1(this._box),t6(this._container,"leaflet-crosshair")),n(),ea(),e_(document,{contextmenu:eT,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){// Postpone to next JS tick so internal click event handling
// still see it as "moved".
this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(p(this._resetState,this),0);var e=new q(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Map.addInitHook("addHandler","boxZoom",iZ),/*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */// @namespace Map
// @section Interaction Options
Map.mergeOptions({// @option doubleClickZoom: Boolean|String = true
// Whether the map can be zoomed in by double clicking on it and
// zoomed out by double clicking while holding shift. If passed
// `'center'`, double-click zoom will zoom to the center of the
//  view regardless of where the mouse was.
doubleClickZoom:!0});var iR=eZ.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Map.addInitHook("addHandler","doubleClickZoom",iR),/*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */// @namespace Map
// @section Interaction Options
Map.mergeOptions({// @option dragging: Boolean = true
// Whether the map is draggable with mouse/touch or not.
dragging:!0,// @section Panning Inertia Options
// @option inertia: Boolean = *
// If enabled, panning of the map will have an inertia effect where
// the map builds momentum while dragging and continues moving in
// the same direction for some time. Feels especially nice on touch
// devices. Enabled by default.
inertia:!0,// @option inertiaDeceleration: Number = 3000
// The rate with which the inertial movement slows down, in pixels/second².
inertiaDeceleration:3400,// @option inertiaMaxSpeed: Number = Infinity
// Max speed of the inertial movement, in pixels/second.
inertiaMaxSpeed:1/0,// @option easeLinearity: Number = 0.2
easeLinearity:.2,// TODO refactor, move to CRS
// @option worldCopyJump: Boolean = false
// With this option enabled, the map tracks when you pan to another "copy"
// of the world and seamlessly jumps to the original one so that all overlays
// like markers and vector layers are still visible.
worldCopyJump:!1,// @option maxBoundsViscosity: Number = 0.0
// If `maxBounds` is set, this option will control how solid the bounds
// are when dragging the map around. The default value of `0.0` allows the
// user to drag outside the bounds at normal speed, higher values will
// slow down map dragging outside bounds, and `1.0` makes the bounds fully
// solid, preventing the user from dragging outside the bounds.
maxBoundsViscosity:0});var iD=eZ.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new eD(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}t4(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){t6(this._map._container,"leaflet-grab"),t6(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=Y(this._map.options.maxBounds);this._offsetLimit=U(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){// TODO refactor to be able to adjust map pane position after zoom
var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,r=(n+e+i)%t-e-i,s=Math.abs(o+i)<Math.abs(r+i)?o:r;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=s},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,s=i.easeLinearity,a=o.multiplyBy(s/r),h=a.distanceTo([0,0]),u=Math.min(i.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(i.inertiaDeceleration*s),d=l.multiplyBy(-c/2).round();d.x||d.y?(d=e._limitOffset(d,e.options.maxBounds),I(function(){e.panBy(d,{duration:c,easeLinearity:s,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}});// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Map.addInitHook("addHandler","dragging",iD),/*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */// @namespace Map
// @section Keyboard Navigation Options
Map.mergeOptions({// @option keyboard: Boolean = true
// Makes the map focusable and allows users to navigate the map with keyboard
// arrows and `+`/`-` keys.
keyboard:!0,// @option keyboardPanDelta: Number = 80
// Amount of pixels to pan when pressing an arrow key.
keyboardPanDelta:80});var iN=eZ.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),ed(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),e_(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;e<i;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;e<i;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;e<i;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;e<i;e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;e<i;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;e<i;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){ed(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){e_(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e,i=t.keyCode,n=this._map;if(i in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress){if(e=this._panKeys[i],t.shiftKey&&(e=H(e).multiplyBy(3)),n.options.maxBounds&&(e=n._limitOffset(H(e),n.options.maxBounds)),n.options.worldCopyJump){var o=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(e)));n.panTo(o)}else n.panBy(e)}}else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}eT(t)}}});// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Map.addInitHook("addHandler","keyboard",iN),/*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */// @namespace Map
// @section Interaction Options
Map.mergeOptions({// @section Mouse wheel options
// @option scrollWheelZoom: Boolean|String = true
// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
// it will zoom to the center of the view regardless of where the mouse was.
scrollWheelZoom:!0,// @option wheelDebounceTime: Number = 40
// Limits the rate at which a wheel can fire (in milliseconds). By default
// user can't zoom via wheel more often than once per 40 ms.
wheelDebounceTime:40,// @option wheelPxPerZoomLevel: Number = 60
// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
// mean a change of one full zoom level. Smaller values will make wheel-zooming
// faster (and vice versa).
wheelPxPerZoomLevel:60});var iF=eZ.extend({addHooks:function(){ed(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){e_(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=eC(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(p(this._performZoom,this),n),eT(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();// map the delta with a sigmoid function to -4..4 range leaning on -1..1
var n=4*Math.log(2/(1+Math.exp(-Math.abs(this._delta/(4*this._map.options.wheelPxPerZoomLevel)))))/Math.LN2,o=i?Math.ceil(n/i)*i:n,r=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}});// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Map.addInitHook("addHandler","scrollWheelZoom",iF),// @namespace Map
// @section Interaction Options
Map.mergeOptions({// @section Touch interaction options
// @option tapHold: Boolean
// Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
tapHold:tZ.touchNative&&tZ.safari&&tZ.mobile,// @option tapTolerance: Number = 15
// The max number of pixels a user can shift his finger during touch
// for it to be considered a valid tap.
tapTolerance:15});var ij=eZ.extend({addHooks:function(){ed(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){e_(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var e=t.touches[0];this._startPos=this._newPos=new F(e.clientX,e.clientY),this._holdTimeout=setTimeout(p(function(){this._cancel(),this._isTapValid()&&(// prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
ed(document,"touchend",eb),ed(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),ed(document,"touchend touchcancel contextmenu",this._cancel,this),ed(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){e_(document,"touchend",eb),e_(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),e_(document,"touchend touchcancel contextmenu",this._cancel,this),e_(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new F(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,// detail: 1,
screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});// @section Handlers
// @property tapHold: Handler
// Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
Map.addInitHook("addHandler","tapHold",ij),/*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */// @namespace Map
// @section Interaction Options
Map.mergeOptions({// @section Touch interaction options
// @option touchZoom: Boolean|String = *
// Whether the map can be zoomed by touch-dragging with two fingers. If
// passed `'center'`, it will zoom to the center of the view regardless of
// where the touch events (fingers) were. Enabled for touch-capable web
// browsers.
touchZoom:tZ.touch,// @option bounceAtZoomLimits: Boolean = true
// Set it to false if you don't want the map to zoom beyond min/max zoom
// and then bounce back when pinch-zooming.
bounceAtZoomLimits:!0});var iH=eZ.extend({addHooks:function(){t4(this._map._container,"leaflet-touch-zoom"),ed(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){t6(this._map._container,"leaflet-touch-zoom"),e_(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),ed(document,"touchmove",this._onTouchMove,this),ed(document,"touchend touchcancel",this._onTouchEnd,this),eb(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===o)return}else{// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===o&&0===r.x&&0===r.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),Z(this._animRequest);var s=p(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=I(s,this,!0),eb(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Z(this._animRequest),e_(document,"touchmove",this._onTouchMove,this),e_(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Map.addInitHook("addHandler","touchZoom",iH),Map.BoxZoom=iZ,Map.DoubleClickZoom=iR,Map.Drag=iD,Map.Keyboard=iN,Map.ScrollWheelZoom=iF,Map.TapHold=ij,Map.TouchZoom=iH,t.Bounds=W,t.Browser=tZ,t.CRS=G,t.Canvas=iE,t.Circle=ie,t.CircleMarker=it,t.Class=R,t.Control=ek,t.DivIcon=iT,t.DivOverlay=ix,t.DomEvent={__proto__:null,on:ed,off:e_,stopPropagation:ey,disableScrollPropagation:ex,disableClickPropagation:ew,preventDefault:eb,stop:eT,getPropagationPath:eP,getMousePosition:eL,getWheelDelta:eC,isExternalTarget:eS,addListener:ed,removeListener:e_},t.DomUtil={__proto__:null,TRANSFORM:tG,TRANSITION:tK,TRANSITION_END:tJ,get:t$,getStyle:tQ,create:t0,remove:t1,empty:t2,toFront:t5,toBack:t3,hasClass:t8,addClass:t4,removeClass:t6,setClass:t9,getClass:t7,setOpacity:et,testProp:ee,setTransform:ei,setPosition:en,getPosition:eo,get disableTextSelection(){return i},get enableTextSelection(){return n},disableImageDrag:es,enableImageDrag:ea,preventOutline:eh,restoreOutline:eu,getSizedParentNode:el,getScale:ec},t.Draggable=eD,t.Evented=N,t.FeatureGroup=e3,t.GeoJSON=ir,t.GridLayer=iP,t.Handler=eZ,t.Icon=e8,t.ImageOverlay=ig,t.LatLng=V,t.LatLngBounds=q,t.Layer=e2,t.LayerGroup=e5,t.LineUtil={__proto__:null,simplify:eH,pointToSegmentDistance:eW,closestPointOnSegment:// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function(t,e,i){return eV(t,e,i)},clipSegment:eU,_getEdgeIntersection:eq,_getBitCode:eY,_sqClosestPointOnSegment:eV,isFlat:eX,_flat:eG,polylineCenter:eK},t.Map=Map,t.Marker=e9,t.Mixin={Events:D},t.Path=e7,t.Point=F,t.PolyUtil={__proto__:null,clipPolygon:eN,polygonCenter:eF,centroid:ej},t.Polygon=io,t.Polyline=ii,t.Popup=iw,t.PosAnimation=eE,t.Projection={__proto__:null,LonLat:eJ,Mercator:e$,SphericalMercator:J},t.Rectangle=iI,t.Renderer=iS,t.SVG=iA,t.SVGOverlay=iy,t.TileLayer=iL,t.Tooltip=ib,t.Transformation=$,t.Util={__proto__:null,extend:e,create:d,bind:p,get lastId(){return _},stamp:f,throttle:m,wrapNum:g,falseFn:v,formatNum:y,trim:x,splitWords:w,setOptions:b,getParamString:T,template:M,isArray:C,indexOf:S,emptyImageUrl:E,requestFn:A,cancelFn:B,requestAnimFrame:I,cancelAnimFrame:Z},t.VideoOverlay=iv,t.bind=p,t.bounds=U,t.canvas=ik,t.circle=// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function(t,e,i){return new ie(t,e,i)},t.circleMarker=// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function(t,e){return new it(t,e)},t.control=ez,t.divIcon=// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function(t){return new iT(t)},t.extend=e,t.featureGroup=function(t,e){return new e3(t,e)},t.geoJSON=im,t.geoJson=im,t.gridLayer=// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function(t){return new iP(t)},t.icon=// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function(t){return new e8(t)},t.imageOverlay=function(t,e,i){return new ig(t,e,i)},t.latLng=X,t.latLngBounds=Y,t.layerGroup=function(t,e){return new e5(t,e)},t.map=// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function(t,e){return new Map(t,e)},t.marker=// factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function(t,e){return new e9(t,e)},t.point=H,t.polygon=// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function(t,e){return new io(t,e)},t.polyline=// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function(t,e){return new ii(t,e)},t.popup=function(t,e){return new iw(t,e)},t.rectangle=// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function(t,e){return new iI(t,e)},t.setOptions=b,t.stamp=f,t.svg=iB,t.svgOverlay=// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.
function(t,e,i){return new iy(t,e,i)},t.tileLayer=iM,t.tooltip=function(t,e){return new ib(t,e)},t.transformation=Q,t.version="1.9.4",t.videoOverlay=// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.
function(t,e,i){return new iv(t,e,i)};var iW=window.L;t.noConflict=function(){return window.L=iW,this},// Always export us to window global (see #2364)
window.L=t}({});var nP={};nP=new URL("map-marker.62fe4bb5.png",import.meta.url).toString();const nL=()=>{var t;let e=L.map("map",{dragging:!1}).setView([51.50073355020347,-.12462496081611447],17);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),L.marker([51.50073355020347,-.12462496081611447],{icon:L.icon({iconUrl:(t=nP)&&t.__esModule?t.default:t,iconSize:[34,34],iconAnchor:[24,15],popupAnchor:[-7,-5]})}).addTo(e).bindPopup(L.popup({className:"custome-popup",minWidth:100})).setPopupContent("WE ARE HERE").openPopup()},nM=document.querySelector(".reservation-popup"),nC=document.querySelector(".overlay"),nS=function(t){t.preventDefault(),nM.classList.remove("display-none"),nC.classList.remove("display-none")},nE=()=>{nM.classList.add("display-none"),nC.classList.add("display-none"),document.querySelector(".reservation-popup__form").reset()},nk=document.querySelectorAll("input"),nz=document.querySelector(".error p"),nO=new RegExp(/^(\+44|44)\d{9}$/),nA=(new Date).toJSON().slice(0,10);window.matchMedia("(max-width: 63.1em)");let nB={formComplete:{status:!1,message:"Please Fill out all the Fields before Submitting"},phoneFormatIsCorrect:{status:!1,message:"Please Insert a valid Phone number!"}};const nI=function(t){t.classList.add("shaking"),setTimeout(()=>{t.classList.remove("shaking")},400)},nZ=t=>{nz.textContent=t,nz.parentElement.style.top="0rem",setTimeout(()=>{nz.parentElement.style.top="-12rem"},2500)},nR=()=>(nB.formComplete.status=!0,nk.forEach(t=>{""===t.value.trim()&&(nB.formComplete.status=!1)}),nB),nD=document.querySelector(".testimonials-tp__review-slider"),nN=document.querySelectorAll(".testimonials-tp__review-slider__slide"),nF=nN.length-1;nN[nF].classList.add("previous"),nN[0].classList.add("active"),nN[1].classList.add("next");let nj,nH=0;const nW=()=>{nj=setInterval(nU,4e3)},nU=()=>{nq()},nq=()=>{nN[nH].classList.remove("active"),nN[nH].classList.add("previous");let t=nH<nF?nH+1:0;nN[t].classList.remove("previous"),nN[t].classList.remove("next"),nN[t].classList.add("active"),t<nF?(nN[t+1].classList.remove("previous"),nN[t+1].classList.add("next")):(nN[0].classList.remove("previous"),nN[0].classList.add("next")),trackSlide=nH=t};nD.addEventListener("touchstart",t=>{t.preventDefault(),clearInterval(nj)}),nD.addEventListener("touchend",t=>{t.preventDefault(),nj=setInterval(nU,4e3)});const nY=window.matchMedia("(max-width: 40.2em)");document.querySelector(".testimonials-tp"),window.addEventListener("DOMContentLoaded",()=>{nT(),nL(),nY.matches&&nW()}),document.querySelector(".about__left-side").addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".about__button");e&&l(e)}),document.querySelector(".events").addEventListener("click",function(t){t.preventDefault();let e=t.target.closest(".events__event-box");e&&l(e,"event")});const nV=document.querySelectorAll(".reservation-btn"),nX=document.querySelector(".close-popup"),nG=document.querySelector(".overlay"),nK=document.getElementById("phone"),nJ=document.getElementById("date"),n$=document.querySelector(".form-btn"),nQ=document.querySelector(".success");nV.forEach(t=>t.addEventListener("click",nS)),nX.addEventListener("click",nE),nG.addEventListener("click",nE),nK.addEventListener("blur",function(t){nB.phoneFormatIsCorrect.status=!0;let e=t.target.value;(""===e||nO.test(e))&&nO.test(e)||(nI(t.target),nZ(nB.phoneFormatIsCorrect.message),nB.phoneFormatIsCorrect.status=!1)}),nJ.addEventListener("input",function(t){t.target.value<=nA&&(nI(t.target),nZ("Please Insert a correct Date!"))}),n$.addEventListener("click",()=>{let t=nR();t.formComplete.status?t.phoneFormatIsCorrect.status?(nE(),nQ.style.top="0rem",setTimeout(()=>{nQ.style.top="-12rem"},3e3)):nZ(t.phoneFormatIsCorrect.message):nZ(t.formComplete.message)});const n0=document.querySelector(".navigation__tablet-phone"),n1=document.querySelector(".arrow-navi");n1.addEventListener("click",t=>{t.preventDefault(),n0.classList.toggle("open-navi"),n1.classList.toggle("rotate-arrow")});//# sourceMappingURL=index-min.7acb6db3.js.map

//# sourceMappingURL=index-min.7acb6db3.js.map
