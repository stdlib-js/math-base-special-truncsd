"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=p(function(I,o){
var f=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-infinite/dist'),N=require('@stdlib/math-base-special-pow/dist'),g=require('@stdlib/math-base-special-log10/dist'),q=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/math-base-special-abs/dist'),m=require('@stdlib/math-base-special-floor/dist'),d=require('@stdlib/number-float64-base-exponent/dist'),l=require('@stdlib/math-base-special-trunc/dist');function h(r,e,n){var u,i,a,s;if(f(r)||f(e)||e<1||t(e))return NaN;if(arguments.length>2){if(f(n)||n<=0||t(n))return NaN;u=n}else u=10;return t(r)||r===0||(u===10?i=g(v(r)):u===2?i=d(v(r)):i=q(v(r))/q(u),i=m(i-e+1),a=N(u,v(i)),t(a))||(i<0?s=l(r*a)/a:s=l(r/a)*a,t(s))?r:s}o.exports=h
});var w=c();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
