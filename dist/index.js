"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=c(function(I,o){
var v=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-infinite/dist'),p=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-log10/dist'),f=require('@stdlib/math-base-special-ln/dist'),s=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-special-floor/dist'),g=require('@stdlib/number-float64-base-exponent/dist'),q=require('@stdlib/math-base-special-trunc/dist');function m(r,e,i){var u,a,n;return v(r)||v(e)||e<1||t(e)||v(i)||i<=0||t(i)?NaN:t(r)||r===0||(i===10?u=N(s(r)):i===2?u=g(s(r)):u=f(s(r))/f(i),u=d(u-e+1),a=p(i,s(u)),t(a))||(u<0?n=q(r*a)/a:n=q(r/a)*a,t(n))?r:n}o.exports=m
});var w=l();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
