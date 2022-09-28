// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var u=Math.floor;function i(r){return u(r)===r}function f(r){return i(r/2)}function o(r){return f(r>0?r-1:r+1)}var a=Math.sqrt;function c(r){return Math.abs(r)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var A=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[p],i=p,n=null!=(u=r)&&l.call(u,i);try{r[p]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[p]=t:delete r[p],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null;var U,N="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var h=U,m="function"==typeof Float64Array;var s="function"==typeof Float64Array?Float64Array:null;var I,d="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(m&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var F=I,S="function"==typeof Uint8Array;var g="function"==typeof Uint8Array?Uint8Array:null;var H,O="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var E=H,j="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,L="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,W={uint16:G,uint8:E};(M=new W.uint16(1))[0]=4660;var x,P,V=52===new W.uint8(M.buffer)[0];!0===V?(x=1,P=0):(x=0,P=1);var Y={HIGH:x,LOW:P},_=new F(1),q=new h(_.buffer),k=Y.HIGH,z=Y.LOW;function B(r,n){return _[0]=n,r[0]=q[k],r[1]=q[z],r}function C(r,n){return 1===arguments.length?B([0,0],r):B(r,n)}var D=!0===V?0:1,J=new F(1),K=new h(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}function R(r){return 0|r}var X,Z,$=!0===V?1:0,rr=new F(1),nr=new h(rr.buffer);function tr(r){return rr[0]=r,nr[$]}!0===V?(X=1,Z=0):(X=0,Z=1);var er={HIGH:X,LOW:Z},ur=new F(1),ir=new h(ur.buffer),fr=er.HIGH,or=er.LOW;function ar(r,n){return ir[fr]=r,ir[or]=n,ur[0]}var cr=[0,0];function yr(r,n){var t,e;return C(cr,r),t=cr[0],t&=2147483647,e=tr(n),ar(t|=e&=2147483648,cr[1])}var vr=!0===V?1:0,lr=new F(1),pr=new h(lr.buffer);function Ar(r,n){return lr[0]=r,pr[vr]=n>>>0,lr[0]}var wr=[1,1.5],br=[0,.5849624872207642],Ur=[0,1.350039202129749e-8];function Nr(n,t){return r(t)||e(t)?(n[0]=t,n[1]=0,n):0!==t&&c(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}function hr(r){var n=tr(r);return(n=(2146435072&n)>>>20)-1023|0}var mr=[0,0],sr=[0,0];function Ir(u,i){var f,o;return 0===i||0===u||r(u)||e(u)?u:(function(r,n){1===arguments.length?Nr([0,0],r):Nr(r,n)}(mr,u),i+=mr[1],(i+=hr(u=mr[0]))<-1074?yr(0,u):i>1023?u<0?t:n:(i<=-1023?(i+=52,o=2220446049250313e-31):o=1,C(sr,u),f=sr[0],f&=2148532223,o*ar(f|=i+1023<<20,sr[1])))}var dr=1e300,Fr=1e-300,Sr=[0,0],gr=[0,0];function Hr(u,f){var y,v,l,p,A,w,b,U,N,h,m,s,I,d;if(r(u)||r(f))return NaN;if(C(Sr,f),A=Sr[0],0===Sr[1]){if(0===f)return 1;if(1===f)return u;if(-1===f)return 1/u;if(.5===f)return a(u);if(-.5===f)return 1/a(u);if(2===f)return u*u;if(3===f)return u*u*u;if(4===f)return(u*=u)*u;if(e(f))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(u,f)}if(C(Sr,u),p=Sr[0],0===Sr[1]){if(0===p)return function(r,e){return e===t?n:e===n?0:e>0?o(e)?r:0:o(e)?yr(n,r):n}(u,f);if(1===u)return 1;if(-1===u&&o(f))return-1;if(e(u))return u===t?Hr(-0,-f):f<0?0:n}if(u<0&&!1===i(f))return(u-u)/(u-u);if(l=c(u),y=2147483647&p|0,v=2147483647&A|0,b=A>>>31|0,w=(w=p>>>31|0)&&o(f)?-1:1,v>1105199104){if(v>1139802112)return function(r,n){return(2147483647&tr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(u,f);if(y<1072693247)return 1===b?w*dr*dr:w*Fr*Fr;if(y>1072693248)return 0===b?w*dr*dr:w*Fr*Fr;m=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Q(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(gr,l)}else m=function(r,n,t){var e,u,i,f,o,a,c,y,v,l,p,A,w,b,U,N,h,m,s,I,d;return m=0,t<1048576&&(m-=53,t=tr(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(s=1048575&t|0),s<=235662?I=0:s<767610?I=1:(I=0,m+=1,t-=1048576),f=Q(u=(N=(n=Ar(n,t))-(c=wr[I]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ar(0,e+=I<<18),U=(i=u*u)*i*(0===(d=i)?.5999999999999946:.5999999999999946+d*(.4285714285785502+d*(.33333332981837743+d*(.272728123808534+d*(.23066074577556175+.20697501780033842*d))))),a=Q(a=3+(i=f*f)+(U+=(o=h*(N-f*a-f*(n-(a-c))))*(f+u)),0),w=(p=-7.028461650952758e-9*(v=Q(v=(N=f*a)+(h=o*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(v-N))+Ur[I])-((A=Q(A=(l=.9617967009544373*v)+p+(y=br[I])+(b=m),0))-b-y-l),r[0]=A,r[1]=w,r}(gr,l,y);if(h=(f-(U=Q(f,0)))*m[0]+f*m[1],N=U*m[0],C(Sr,s=h+N),I=R(Sr[0]),d=R(Sr[1]),I>=1083179008){if(0!=(I-1083179008|d))return w*dr*dr;if(h+8008566259537294e-32>s-N)return w*dr*dr}else if((2147483647&I)>=1083231232){if(0!=(I-3230714880|d))return w*Fr*Fr;if(h<=s-N)return w*Fr*Fr}return s=function(r,n,t){var e,u,i,f,o,a,c,y,v,l,p;return l=((v=2147483647&r|0)>>20)-1023|0,y=0,v>1071644672&&(e=((y=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-l>>>0,r<0&&(y=-y),n-=i=Ar(0,e)),r=R(r=tr(c=1-((c=(f=.6931471824645996*(i=Q(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Ir(c,y):Ar(c,r)}(I,N,h),w*s}function Or(n){var e,u,i,f,o,a,c;return r(n)||n<0?NaN:0===n?t:(o=0,(u=tr(n))<1048576&&(o-=54,u=tr(n*=0x40000000000000)),u>=2146435072?n+n:(o+=(u>>20)-1023|0,a=o+=(f=(u&=1048575)+614244&1048576|0)>>20|0,i=function(r){var n,t,e,u,i,f,o,a,c,y,v;return i=r-1,(1048575&2+(u=tr(r)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(u&=1048575)-398458|0,v=440401-u|0,t=(c=(o=(f=i/(2+i))*f)*o)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=o*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(y|=v)>0?f*((n=.5*i*i)+a)-n:f*(a-i))}(n=Ar(n,u|1072693248^f)),c=3694239077158931e-28*a+25082946711645275e-27*((n-=1)+i),(c+=.4342944818781689*(n-(e=Q(n,0))+i)+.4342944818781689*e)+.30102999566361177*a))}var Er=.6931471803691238,jr=1.9082149292705877e-10;function Tr(n){var e,u,i,f,o,a,c,y,v,l,p,A;return 0===n?t:r(n)||n<0?NaN:(o=0,(u=tr(n))<1048576&&(o-=54,u=tr(n*=0x40000000000000)),u>=2146435072?n+n:(o+=(u>>20)-1023|0,o+=(y=(u&=1048575)+614244&1048576|0)>>20|0,c=(n=Ar(n,u|1072693248^y))-1,(1048575&2+u)<3?0===c?0===o?0:o*Er+o*jr:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Er-(a-o*jr-c)):(y=u-398458|0,v=440401-u|0,f=(p=(A=(l=c/(2+c))*l)*A)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=A*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=i+f,(y|=v)>0?(e=.5*c*c,0===o?c-(e-l*(e+a)):o*Er-(e-(l*(e+a)+o*jr)-c)):0===o?c-l*(c-a):o*Er-(l*(c-a)-o*jr-c))))}var Gr=Math.ceil;function Lr(r){return r<0?Gr(r):u(r)}function Mr(n,t,i){var f,o,a,y;if(r(n)||r(t)||t<1||e(t))return NaN;if(arguments.length>2){if(r(i)||i<=0||e(i))return NaN;f=i}else f=10;return e(n)||0===n?n:(o=10===f?Or(c(n)):2===f?hr(c(n)):Tr(c(n))/Tr(f),e(a=Hr(f,c(o=u(o-t+1))))||e(y=o<0?Lr(n*a)/a:Lr(n/a)*a)?n:y)}export{Mr as default};
//# sourceMappingURL=mod.js.map
