(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[287],{2742:(e,t,r)=>{"use strict";let n;r.d(t,{default:()=>L});var l=r(5155),a=r(2115);let i=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,o=e=>"init"in e,d=e=>!!e.write,u=e=>"v"in e||"e"in e,s=e=>{if("e"in e)throw e.e;if(!("v"in e))throw Error("[Bug] atom state is not initialized");return e.v},f=new WeakMap,c=e=>{var t;return g(e)&&!!(null==(t=f.get(e))?void 0:t[0])},h=e=>{let t=f.get(e);(null==t?void 0:t[0])&&(t[0]=!1,t[1].forEach(e=>e()))},v=(e,t)=>{let r=f.get(e);if(!r){r=[!0,new Set],f.set(e,r);let t=()=>{r[0]=!1};e.then(t,t)}r[1].add(t)},g=e=>"function"==typeof(null==e?void 0:e.then),w=(e,t,r)=>{r.p.has(e)||(r.p.add(e),t.then(()=>{r.p.delete(e)},()=>{r.p.delete(e)}))},y=(e,t,r)=>{let n=r(e),l="v"in n,a=n.v;if(g(t))for(let l of n.d.keys())w(e,t,r(l));n.v=t,delete n.e,l&&Object.is(a,n.v)||(++n.n,g(a)&&h(a))},p=(e,t,r)=>{var n;let l=new Set;for(let t of(null==(n=r.get(e))?void 0:n.t)||[])r.has(t)&&l.add(t);for(let e of t.p)l.add(e);return l},_=()=>{let e=new Set,t=()=>{e.forEach(e=>e())};return t.add=t=>(e.add(t),()=>{e.delete(t)}),t},b=()=>{let e={},t=new WeakMap,r=r=>{var n,l;null==(n=t.get(e))||n.forEach(e=>e(r)),null==(l=t.get(r))||l.forEach(e=>e())};return r.add=(r,n)=>{let l=r||e,a=(t.has(l)?t:t.set(l,new Set)).get(l);return a.add(n),()=>{null==a||a.delete(n),a.size||t.delete(l)}},r},m=Symbol(),E=(e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new Set,l=new Set,a=new Set,f={},h=(e,...t)=>e.read(...t),_=(e,...t)=>e.write(...t),b=(e,t)=>{var r;return null==(r=e.unstable_onInit)?void 0:r.call(e,t)},E=(e,t)=>{var r;return null==(r=e.onMount)?void 0:r.call(e,t)},...k)=>{let S=k[0]||(t=>{if(!t)throw Error("Atom is undefined or null");let r=e.get(t);return r||(r={d:new Map,p:new Set,n:0},e.set(t,r),null==b||b(t,z)),r}),T=k[1]||(()=>{let e=[],r=t=>{try{t()}catch(t){e.push(t)}};do{f.f&&r(f.f);let e=new Set,i=e.add.bind(e);n.forEach(e=>{var r;return null==(r=t.get(e))?void 0:r.l.forEach(i)}),n.clear(),a.forEach(i),a.clear(),l.forEach(i),l.clear(),e.forEach(r),n.size&&j()}while(n.size||a.size||l.size);if(e.length)throw AggregateError(e)}),j=k[2]||(()=>{let e=[],l=new WeakSet,a=new WeakSet,i=Array.from(n);for(;i.length;){let n=i[i.length-1],o=S(n);if(a.has(n)){i.pop();continue}if(l.has(n)){if(r.get(n)===o.n)e.push([n,o]);else if(r.has(n))throw Error("[Bug] invalidated atom exists");a.add(n),i.pop();continue}for(let e of(l.add(n),p(n,o,t)))l.has(e)||i.push(e)}for(let t=e.length-1;t>=0;--t){let[l,a]=e[t],i=!1;for(let e of a.d.keys())if(e!==l&&n.has(e)){i=!0;break}i&&(A(l),M(l)),r.delete(l)}}),A=k[3]||(e=>{var l;let a,p;let _=S(e);if(u(_)&&(t.has(e)&&r.get(e)!==_.n||Array.from(_.d).every(([e,t])=>A(e).n===t)))return _;_.d.clear();let b=!0,m=()=>{t.has(e)&&(M(e),j(),T())},E=_.n;try{let r=h(e,r=>{var n;if(i(e,r)){let e=S(r);if(!u(e)){if(o(r))y(r,r.init,S);else throw Error("no atom init")}return s(e)}let l=A(r);try{return s(l)}finally{_.d.set(r,l.n),c(_.v)&&w(e,_.v,l),null==(n=t.get(r))||n.t.add(e),b||m()}},{get signal(){return a||(a=new AbortController),a.signal},get setSelf(){return d(e)||console.warn("setSelf function cannot be used with read-only atom"),!p&&d(e)&&(p=(...t)=>{if(b&&console.warn("setSelf function cannot be called in sync"),!b)try{return x(e,...t)}finally{j(),T()}}),p}});return y(e,r,S),g(r)&&(v(r,()=>null==a?void 0:a.abort()),r.then(m,m)),_}catch(e){return delete _.v,_.e=e,++_.n,_}finally{b=!1,E!==_.n&&r.get(e)===E&&(r.set(e,_.n),n.add(e),null==(l=f.c)||l.call(f,e))}}),O=k[4]||(e=>{let n=[e];for(;n.length;){let e=n.pop(),l=S(e);for(let a of p(e,l,t)){let e=S(a);r.set(a,e.n),n.push(a)}}}),x=k[5]||((e,...t)=>{let r=!0;try{return _(e,e=>s(A(e)),(t,...l)=>{var a;let d=S(t);try{if(!i(e,t))return x(t,...l);{if(!o(t))throw Error("atom not writable");let e=d.n,r=l[0];y(t,r,S),M(t),e!==d.n&&(n.add(t),null==(a=f.c)||a.call(f,t),O(t));return}}finally{r||(j(),T())}},...t)}finally{r=!1}}),M=k[6]||(e=>{var r;let l=S(e),a=t.get(e);if(a&&!c(l.v)){for(let[t,i]of l.d)if(!a.d.has(t)){let l=S(t);W(t).t.add(e),a.d.add(t),i!==l.n&&(n.add(t),null==(r=f.c)||r.call(f,t),O(t))}for(let t of a.d||[])if(!l.d.has(t)){a.d.delete(t);let r=C(t);null==r||r.t.delete(e)}}}),W=k[7]||(e=>{var r;let n=S(e),a=t.get(e);if(!a){for(let t of(A(e),n.d.keys()))W(t).t.add(e);a={l:new Set,d:new Set(n.d.keys()),t:new Set},t.set(e,a),null==(r=f.m)||r.call(f,e),d(e)&&l.add(()=>{let t=!0;try{let r=E(e,(...r)=>{try{return x(e,...r)}finally{t||(j(),T())}});r&&(a.u=()=>{t=!0;try{r()}finally{t=!1}})}finally{t=!1}})}return a}),C=k[8]||(e=>{var r;let n=S(e),l=t.get(e);if(l&&!l.l.size&&!Array.from(l.t).some(r=>{var n;return null==(n=t.get(r))?void 0:n.d.has(e)})){for(let i of(l.u&&a.add(l.u),l=void 0,t.delete(e),null==(r=f.u)||r.call(f,e),n.d.keys())){let t=C(i);null==t||t.t.delete(e)}return}return l}),z={get:e=>s(A(e)),set:(e,...t)=>{try{return x(e,...t)}finally{j(),T()}},sub:(e,t)=>{let r=W(e).l;return r.add(t),T(),()=>{r.delete(t),C(e),T()}}};return Object.defineProperty(z,m,{value:[e,t,r,n,l,a,f,h,_,b,E,S,T,j,A,O,x,M,W,C]}),z},k=e=>(e.c||(e.c=b()),e.m||(e.m=b()),e.u||(e.u=b()),e.f||(e.f=_()),e),S=0;function T(e,t){let r=`atom${++S}`,n={toString(){return this.debugLabel?r+":"+this.debugLabel:r}};return"function"==typeof e?n.read=e:(n.init=e,n.read=j,n.write=A),t&&(n.write=t),n}function j(e){return e(this)}function A(e,t,r){return t(this,"function"==typeof r?r(e(this)):r)}let O=()=>{let e=0,t=k({}),r=new WeakMap,n=new WeakMap,l=E(r,n,void 0,void 0,void 0,void 0,t,void 0,(t,r,n,...l)=>e?n(t,...l):t.write(r,n,...l)),a=new Set;return t.m.add(void 0,e=>{a.add(e),r.get(e).m=n.get(e)}),t.u.add(void 0,e=>{a.delete(e);let t=r.get(e);delete t.m}),Object.assign(l,{dev4_get_internal_weak_map:()=>r,dev4_get_mounted_atoms:()=>a,dev4_restore_atoms:t=>{l.set({read:()=>null,write:(r,n)=>{++e;try{for(let[e,r]of t)"init"in e&&n(e,r)}finally{--e}}})}})},x=(0,a.createContext)(void 0);function M(e){let t=(0,a.useContext)(x);return(null==e?void 0:e.store)||t||(!n&&(n=O(),globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=n),globalThis.__JOTAI_DEFAULT_STORE__!==n&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")),n)}let W=e=>"function"==typeof(null==e?void 0:e.then),C=e=>{e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})},z=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw C(e),e}),D=new WeakMap,N=(e,t)=>{let r=D.get(e);return r||(r=new Promise((n,l)=>{let a=e,i=e=>t=>{a===e&&n(t)},o=e=>t=>{a===e&&l(t)},d=()=>{try{let e=t();W(e)?(D.set(e,r),a=e,e.then(i(e),o(e)),v(e,d)):n(e)}catch(e){l(e)}};e.then(i(e),o(e)),v(e,d)}),D.set(e,r)),r};T(0);let I=T({raidType:"",raidName:"",raidDiff:""});function L(){var e;let[t,r]=[function(e,t){let r=M(t),[[n,l,i],o]=(0,a.useReducer)(t=>{let n=r.get(e);return Object.is(t[0],n)&&t[1]===r&&t[2]===e?t:[n,r,e]},void 0,()=>[r.get(e),r,e]),d=n;(l!==r||i!==e)&&(o(),d=r.get(e));let u=null==t?void 0:t.delay;return((0,a.useEffect)(()=>{let t=r.sub(e,()=>{if("number"==typeof u){let t=r.get(e);W(t)&&C(N(t,()=>r.get(e))),setTimeout(o,u);return}o()});return o(),t},[r,e,u]),(0,a.useDebugValue)(d),W(d))?z(N(d,()=>r.get(e))):d}(I,void 0),function(e,t){let r=M(t);return(0,a.useCallback)(function(){for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];if(!("write"in e))throw Error("not writable atom");return r.set(e,...n)},[r,e])}(I,e)];return(0,l.jsxs)("div",{children:[(0,l.jsx)("hr",{}),(0,l.jsx)("div",{children:"카테고리"}),(0,l.jsxs)("div",{children:["선택된 카테고리: ",t.raidType," ",t.raidName," ",t.raidDiff]}),(0,l.jsx)("button",{onClick:()=>r({...t,raidName:"쿠크"}),children:" 쿠크로 변경"}),(0,l.jsx)("button",{onClick:()=>r({...t,raidName:"비아키스"}),children:" 비아키스로 변경"}),(0,l.jsx)("hr",{})]})}},6153:(e,t,r)=>{Promise.resolve().then(r.bind(r,2742))}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(6153)),_N_E=e.O()}]);