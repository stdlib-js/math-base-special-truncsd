// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r===e||r===n}var i=Math.floor;function a(r){return i(r)===r}function o(r){return a(r/2)}function u(r){return o(r>0?r-1:r+1)}var c=Math.sqrt;function f(r){return Math.abs(r)}var s="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function p(r){return"number"==typeof r}function v(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function g(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+v(i):v(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!p(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=g(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=g(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===d.call(r.specifier)?d.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,b=String.prototype.toLowerCase,m=String.prototype.toUpperCase,A=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,U=/^(\d+)$/,S=/^(\d+)e/,I=/\.0$/,x=/\.0*e/,k=/(\..*[^0])0*e/;function F(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":w(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=A.call(n,k,"$1e"),n=A.call(n,x,"e"),n=A.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=A.call(n,_,"e+0$1"),n=A.call(n,E,"e-0$1"),r.alternate&&(n=A.call(n,U,"$1."),n=A.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===m.call(r.specifier)?m.call(n):b.call(n)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var j=String.fromCharCode,T=Array.isArray;function O(r){return r!=r}function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(t=r[c],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,O(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,O(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!O(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=O(a)?String(t.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=F(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=g(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+N(v):N(v)+s)),o+=t.arg||"",u+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,n,t,i;for(n=[],i=0,t=G.exec(r);t;)(e=r.slice(i,G.lastIndex-t[0].length)).length&&n.push(e),n.push(H(t)),i=G.lastIndex,t=G.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function C(r){var e,n;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return $.apply(null,e)}var L=Object.prototype,P=L.toString,R=L.__defineGetter__,M=L.__defineSetter__,Z=L.__lookupGetter__,X=L.__lookupSetter__;var Y=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Z.call(r,e)||X.call(r,e)?(t=r.__proto__,r.__proto__=L,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,n.get),o&&M&&M.call(r,e,n.set),r};function q(r,e,n){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return B.call(r);n=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[K]=n:delete r[K],t}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,tr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var ur,cr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),n=e,r=(ar&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),n=e,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr=pr,yr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yr&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:gr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Sr=new fr(1),Ir=new ir(Sr.buffer),xr=Ur.HIGH,kr=Ur.LOW;function Fr(r,e,n,t){return Sr[0]=r,e[t]=Ir[xr],e[t+n]=Ir[kr],e}function Nr(r){return Fr(r,[0,0],1,0)}q(Nr,"assign",Fr);var jr=!0===Er?0:1,Tr=new fr(1),Or=new ir(Tr.buffer);function Vr(r,e){return Tr[0]=r,Or[jr]=e>>>0,Tr[0]}function $r(r){return 0|r}var Gr,Hr,Wr=2147483647,Cr=2147483648,Lr=!0===Er?1:0,Pr=new fr(1),Rr=new ir(Pr.buffer);function Mr(r){return Pr[0]=r,Rr[Lr]}!0===Er?(Gr=1,Hr=0):(Gr=0,Hr=1);var Zr={HIGH:Gr,LOW:Hr},Xr=new fr(1),Yr=new ir(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e){return Yr[qr]=r,Yr[zr]=e,Xr[0]}var Dr=[0,0];function Jr(r,e){var n,t;return Nr.assign(r,Dr,1,0),n=Dr[0],n&=Wr,t=Mr(e),Br(n|=t&=Cr,Dr[1])}var Kr=1072693247,Qr=1e300,re=1e-300;var ee=!0===Er?1:0,ne=new fr(1),te=new ir(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}var ae=1023;var oe=1048575,ue=1048576,ce=1072693248,fe=536870912,se=524288,le=20,pe=9007199254740992,ve=.9617966939259756,ge=.9617967009544373,ye=-7.028461650952758e-9,de=[1,1.5],he=[0,.5849624872207642],we=[0,1.350039202129749e-8];var be=1.4426950408889634,me=1.4426950216293335,Ae=1.9259629911266175e-8;var _e=1023,Ee=-1023,Ue=-1074,Se=22250738585072014e-324,Ie=4503599627370496;function xe(e,n,i,a){return r(e)||t(e)?(n[a]=e,n[a+i]=0,n):0!==e&&f(e)<Se?(n[a]=e*Ie,n[a+i]=-52,n):(n[a]=e,n[a+i]=0,n)}q((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var ke=2146435072;function Fe(r){var e=Mr(r);return(e=(e&ke)>>>20)-ae|0}var Ne=2220446049250313e-31,je=2148532223,Te=[0,0],Oe=[0,0];var Ve=.6931471805599453,$e=1048575;var Ge=1048576,He=1071644672,We=20,Ce=.6931471824645996,Le=-1.904654299957768e-9;function Pe(i,a,o){var u,c,f,s,l,p,v,g,y,d,h,w,b,m;return y=((g=i&Wr|0)>>We)-ae|0,v=0,g>He&&(c=ie(0,((v=i+(Ge>>y+1)>>>0)&~($e>>(y=((v&Wr)>>We)-ae|0)))>>>0),v=(v&$e|Ge)>>We-y>>>0,i<0&&(v=-v),a-=c),i=$r(i=Mr(p=1-((p=(f=(c=Vr(c=o+a,0))*Ce)+(s=(o-(c-a))*Ve+c*Le))*(u=p-(c=p*p)*(0===(d=c)?.16666666666666602:.16666666666666602+d*(d*(6613756321437934e-20+d*(4.1381367970572385e-8*d-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((l=s-(p-f))+p*l)-p))),(i+=v<<We>>>0)>>We<=0?(h=p,p=0===(w=v)||0===h||r(h)||t(h)?h:(xe(h,Te,1,0),h=Te[0],w+=Te[1],(w+=Fe(h))<Ue?Jr(0,h):w>_e?h<0?n:e:(w<=Ee?(w+=52,m=Ne):m=1,Nr.assign(h,Oe,1,0),b=Oe[0],b&=je,m*Br(b|=w+ae<<20,Oe[1])))):p=ie(p,i),p}var Re=1072693247,Me=1105199104,Ze=1139802112,Xe=1083179008,Ye=1072693248,qe=1083231232,ze=3230714880,Be=31,De=1e300,Je=1e-300,Ke=8008566259537294e-32,Qe=[0,0],rn=[0,0];function en(i,o){var s,l,p,v,g,y,d,h,w,b,m,A,_,E;if(r(i)||r(o))return NaN;if(Nr.assign(o,Qe,1,0),g=Qe[0],0===Qe[1]){if(0===o)return 1;if(1===o)return i;if(-1===o)return 1/i;if(.5===o)return c(i);if(-.5===o)return 1/c(i);if(2===o)return i*i;if(3===o)return i*i*i;if(4===o)return(i*=i)*i;if(t(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(n===e)?0:e}(i,o)}if(Nr.assign(i,Qe,1,0),v=Qe[0],0===Qe[1]){if(0===v)return function(r,t){return t===n?e:t===e?0:t>0?u(t)?r:0:u(t)?Jr(e,r):e}(i,o);if(1===i)return 1;if(-1===i&&u(o))return-1;if(t(i))return i===n?en(-0,-o):o<0?0:e}if(i<0&&!1===a(o))return(i-i)/(i-i);if(p=f(i),s=v&Wr|0,l=g&Wr|0,d=g>>>Be|0,y=(y=v>>>Be|0)&&u(o)?-1:1,l>Me){if(l>Ze)return function(r,e){return(Mr(r)&Wr)<=Kr?e<0?Qr*Qr:re*re:e>0?Qr*Qr:re*re}(i,o);if(s<Re)return 1===d?y*De*De:y*Je*Je;if(s>Ye)return 0===d?y*De*De:y*Je*Je;m=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Ae-a*be)-((t=Vr(t=(o=me*i)+u,0))-o),r[0]=t,r[1]=n,r}(rn,p)}else m=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,v,g,y,d,h,w,b,m,A,_,E;return m=0,n<ue&&(m-=53,n=Mr(e*=pe)),m+=(n>>le)-ae|0,n=(A=n&oe|0)|ce|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ue),o=Vr(i=(w=(e=ie(e,n))-(f=de[_]))*(b=1/(e+f)),0),t=(n>>1|fe)+se,c=ie(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Vr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Vr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0),p=ge*l,y=(v=ye*l+(b-(l-w))*ve+we[_])-((g=Vr(g=p+v+(s=he[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(rn,p,s);if(A=(b=(o-(h=Vr(o,0)))*m[0]+o*m[1])+(w=h*m[0]),Nr.assign(A,Qe,1,0),_=$r(Qe[0]),E=$r(Qe[1]),_>=Xe){if(0!=(_-Xe|E))return y*De*De;if(b+Ke>A-w)return y*De*De}else if((_&Wr)>=qe){if(0!=(_-ze|E))return y*Je*Je;if(b<=A-w)return y*Je*Je}return y*(A=Pe(_,w,b))}var nn=0x40000000000000,tn=.4342944818781689,an=25082946711645275e-27,on=.30102999566361177,un=3694239077158931e-28,cn=2146435072,fn=1048576,sn=1072693248,ln=[0,0];var pn=.6931471803691238,vn=1.9082149292705877e-10,gn=0x40000000000000,yn=.3333333333333333,dn=1048575,hn=2146435072,wn=1048576,bn=1072693248;function mn(e){var t,i,a,o,u,c,f,s,l,p,v,g;return 0===e?n:r(e)||e<0?NaN:(u=0,(i=Mr(e))<wn&&(u-=54,i=Mr(e*=gn)),i>=hn?e+e:(u+=(i>>20)-ae|0,u+=(s=(i&=dn)+614244&1048576|0)>>20|0,f=(e=ie(e,i|s^bn))-1,(dn&2+i)<3?0===f?0===u?0:u*pn+u*vn:(c=f*f*(.5-yn*f),0===u?f-c:u*pn-(c-u*vn-f)):(s=i-398458|0,l=440401-i|0,o=(v=(g=(p=f/(2+f))*p)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),a=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),c=a+o,(s|=l)>0?(t=.5*f*f,0===u?f-(t-p*(t+c)):u*pn-(t-(p*(t+c)+u*vn)-f)):0===u?f-p*(f-c):u*pn-(p*(f-c)-u*vn-f))))}var An=Math.ceil;function _n(r){return r<0?An(r):i(r)}function En(e,a,o){var u,c,s;return r(e)||r(a)||a<1||t(a)||r(o)||o<=0||t(o)?NaN:t(e)||0===e?e:(u=10===o?function(e){var t,i,a,o,u,c,f,s,l,p,v,g,y,d;if(r(e)||e<0)return NaN;if(Nr.assign(e,ln,1,0),c=ln[0],f=ln[1],d=0,c<fn){if(0==(c&Wr|f))return n;d-=54,c=Mr(e*=nn)}return c>=cn?e+e:c===sn&&0===f?0:(d+=(c>>20)-ae|0,g=d+=(y=614244+(c&=$e)&fn|0)>>20|0,a=.5*(l=(e=ie(e,c|y^sn))-1)*l,p=function(r){var e,n,t,i,a,o;return e=(a=(i=(t=r/(2+r))*t)*i)*(0===(o=a)?.3999999999940942:.3999999999940942+o*(.22222198432149784+.15313837699209373*o)),n=i*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(a),t*(.5*r*r+(n+e))}(l),o=Vr(o=l-a,0),i=g*un+((u=l-o-a+p)+o)*an+u*tn,(i+=(s=g*on)-(v=s+(t=o*tn))+t)+(t=v))}(f(e)):2===o?Fe(f(e)):mn(f(e))/mn(o),t(c=en(o,f(u=i(u-a+1))))||t(s=u<0?_n(e*c)/c:_n(e/c)*c)?e:s)}export{En as default};
//# sourceMappingURL=mod.js.map
