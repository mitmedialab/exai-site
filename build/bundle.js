var app=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function i(){}function o(t){return t()}function c(){return Object.create(null)}function r(t){t.forEach(o)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function g(){return p("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n,i){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function y(t,e,n){t.classList[n?"add":"remove"](e)}let x;function w(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}const D=[],C=[],q=[],I=[],A=Promise.resolve();let L=!1;function j(t){q.push(t)}const F=new Set;let P=0;function _(){const t=x;do{for(;P<D.length;){const t=D[P];P++,w(t),S(t.$$)}for(w(null),D.length=0,P=0;C.length;)C.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];F.has(e)||(F.add(e),e())}q.length=0}while(D.length);for(;I.length;)I.pop()();L=!1,F.clear(),w(t)}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const O=new Set;let W;function E(){W={r:0,c:[],p:W}}function M(){W.r||r(W.c),W=W.p}function N(t,e){t&&t.i&&(O.delete(t),t.i(e))}function R(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),W.c.push((()=>{O.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function T(t){t&&t.c()}function B(t,e,n,i){const{fragment:c,on_mount:l,on_destroy:s,after_update:u}=t.$$;c&&c.m(e,n),i||j((()=>{const e=l.map(o).filter(a);s?s.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(j)}function Q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(D.push(t),L||(L=!0,A.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,o,a,l,s,u=[-1]){const d=x;w(t);const f=t.$$={fragment:null,ctx:null,props:l,update:i,not_equal:a,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:c(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};s&&s(f.root);let p=!1;if(f.ctx=n?n(t,e.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&U(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&N(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),_()}w(d)}class G{$destroy(){Q(this,1),this.$destroy=i}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(t,e,n){const i=t.slice();return i[1]=e[n],i}function V(t){let e,n,i=t[1]+"";return{c(){e=f("span"),n=p(i),v(e,"class","mx-5")},m(t,i){u(t,e,i),s(e,n)},p(t,e){1&e&&i!==(i=t[1]+"")&&b(n,i)},d(t){t&&m(e)}}}function J(t){let e,n,o,c,r=t[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=V(z(t,r,e));return{c(){e=f("nav"),n=f("div"),n.innerHTML='<span class="module-nav-label align-middle svelte-1jnrc04">Go Home</span>',o=h(),c=f("div");for(let t=0;t<a.length;t+=1)a[t].c();v(n,"class","navbar-brand"),$(n,"cursor","pointer"),v(e,"class","navbar fixed-bottom module-nav ibm-plex px-5 svelte-1jnrc04")},m(t,i){u(t,e,i),s(e,n),s(e,o),s(e,c);for(let t=0;t<a.length;t+=1)a[t].m(c,null)},p(t,[e]){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const i=z(t,r,n);a[n]?a[n].p(i,e):(a[n]=V(i),a[n].c(),a[n].m(c,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:i,o:i,d(t){t&&m(e),d(a,t)}}}function X(t,e,n){let{activities:i=["Activity","Blocks","Go","Here"]}=e;return t.$$set=t=>{"activities"in t&&n(0,i=t.activities)},[i]}class Y extends G{constructor(t){super(),H(this,t,X,J,l,{activities:0})}}function Z(t){let e;return{c(){e=f("h1"),e.textContent="Loading webcam..."},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function K(t){let e,n,o,c,r,a,l=t[1]&&Z();return{c(){l&&l.c(),e=h(),n=f("div"),o=f("div"),c=f("video"),r=h(),a=f("canvas"),v(c,"id","webcam"),v(c,"class","align-self-center svelte-e1esmm"),v(a,"id","overlay"),v(a,"class","svelte-e1esmm"),v(o,"id","webcam-container"),v(o,"class","svelte-e1esmm"),v(n,"class","py-3 px-3 svelte-e1esmm"),y(n,"video-border",!t[1])},m(i,m){l&&l.m(i,m),u(i,e,m),u(i,n,m),s(n,o),s(o,c),t[3](c),s(o,r),s(o,a),t[4](a)},p(t,[i]){t[1]?l||(l=Z(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),2&i&&y(n,"video-border",!t[1])},i:i,o:i,d(i){l&&l.d(i),i&&m(e),i&&m(n),t[3](null),t[4](null)}}}function tt(t,e,i){let o,c;async function r(){let t=[];const e=await n.default.detectAllFaces(l,o);console.log(e);for(const n of e)t.push(n);!function(t){c.clearRect(0,0,a.width,a.height);const e=["#F89329","#FEC040","#FD0101","#A0015B","#8AC54A","#0F9244","#0C70BC"];let n=0;for(const i of t)c.fillStyle=c.strokeStyle=e[n%e.length],c.beginPath(),c.rect(a.width-i.box.x-i.box.width,i.box.y,i.box.width,i.box.height),c.lineWidth=2,c.stroke(),c.font="21px Arial",c.fillText(`Score: ${i.score.toFixed(4)}`,a.width-i.box.x-i.box.width,i.box.y-parseInt(i.box.y/10)),n++}(t)}let a,l=null,s=!0;var u;return u=async()=>{try{const t=new Webcam(l,"user",a);i(2,a.width=l.width,a),i(2,a.height=l.height,a),t.start(),c=a.getContext("2d"),c.clearRect(0,0,a.width,a.height),async function(){await n.default.loadSsdMobilenetv1Model("./models"),o=new n.default.SsdMobilenetv1Options({minConfidence:.75}),console.log("Model loaded")}(),i(1,s=!1),setInterval(r,500)}catch(t){console.log(t)}},k().$$.on_mount.push(u),[l,s,a,function(t){C[t?"unshift":"push"]((()=>{l=t,i(0,l)}))},function(t){C[t?"unshift":"push"]((()=>{a=t,i(2,a)}))}]}class et extends G{constructor(t){super(),H(this,t,tt,K,l,{})}}function nt(t,e,n){const i=t.slice();return i[3]=e[n],i}function it(t,e,n){const i=t.slice();return i[6]=e[n][0],i[7]=e[n][1],i}function ot(t,e,n){const i=t.slice();return i[10]=e[n],i}function ct(t){let e,n,o=t[7]+"";return{c(){e=f("div"),n=p(o),v(e,"class","activity-description py-3 svelte-cemhob")},m(t,i){u(t,e,i),s(e,n)},p:i,d(t){t&&m(e)}}}function rt(t){let e,n=t[7],i=[];for(let e=0;e<n.length;e+=1)i[e]=at(ot(t,n,e));return{c(){e=f("ul");for(let t=0;t<i.length;t+=1)i[t].c()},m(t,n){u(t,e,n);for(let t=0;t<i.length;t+=1)i[t].m(e,null)},p(t,o){if(4&o){let c;for(n=t[7],c=0;c<n.length;c+=1){const r=ot(t,n,c);i[c]?i[c].p(r,o):(i[c]=at(r),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=n.length}},d(t){t&&m(e),d(i,t)}}}function at(t){let e,n,o=t[10]+"";return{c(){e=f("li"),n=p(o),v(e,"class","activity-description svelte-cemhob")},m(t,i){u(t,e,i),s(e,n)},p:i,d(t){t&&m(e)}}}function lt(t){let e,n,o="Description"!==t[6]&&function(t){let e,n,o=t[6]+"";return{c(){e=f("div"),n=p(o),v(e,"class","description-title fredoka py-2 svelte-cemhob")},m(t,i){u(t,e,i),s(e,n)},p:i,d(t){t&&m(e)}}}(t);let c=function(t,e){return Array.isArray(t[7])?rt:ct}(t),r=c(t);return{c(){o&&o.c(),e=h(),r.c(),n=g()},m(t,i){o&&o.m(t,i),u(t,e,i),r.m(t,i),u(t,n,i)},p(t,e){"Description"!==t[6]&&o.p(t,e),r.p(t,e)},d(t){o&&o.d(t),t&&m(e),r.d(t),t&&m(n)}}}function st(t){let e,n,i;return n=new et({}),{c(){e=f("div"),T(n.$$.fragment),$(e,"height","24em")},m(t,o){u(t,e,o),B(n,e,null),i=!0},i(t){i||(N(n.$$.fragment,t),i=!0)},o(t){R(n.$$.fragment,t),i=!1},d(t){t&&m(e),Q(n)}}}function ut(t){let e,n,i;var o=t[3].comp;return o&&(e=new o({})),{c(){e&&T(e.$$.fragment),n=g()},m(t,o){e&&B(e,t,o),u(t,n,o),i=!0},p(t,i){if(o!==(o=t[3].comp)){if(e){E();const t=e;R(t.$$.fragment,1,0,(()=>{Q(t,1)})),M()}o?(e=new o({}),T(e.$$.fragment),N(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&R(e.$$.fragment,t),i=!1},d(t){t&&m(n),e&&Q(e,t)}}}function mt(t){let e,n,i,o,c,r=(void 0===t[3].title?"":t[3].title)+"",a=void 0!==t[3].comp&&ut(t);return{c(){e=f("div"),n=p(r),i=h(),a&&a.c(),o=h(),v(e,"class","parameter-item svelte-cemhob")},m(t,r){u(t,e,r),s(e,n),s(e,i),a&&a.m(e,null),s(e,o),c=!0},p(t,i){(!c||1&i)&&r!==(r=(void 0===t[3].title?"":t[3].title)+"")&&b(n,r),void 0!==t[3].comp?a?(a.p(t,i),1&i&&N(a,1)):(a=ut(t),a.c(),N(a,1),a.m(e,o)):a&&(E(),R(a,1,1,(()=>{a=null})),M())},i(t){c||(N(a),c=!0)},o(t){R(a),c=!1},d(t){t&&m(e),a&&a.d()}}}function dt(t){let e,n,i,o,c,r,a,l,g,b,$,y,x,w,k,D,C,q,I,A,L,j,F,P=Object.entries(t[2]),_=[];for(let e=0;e<P.length;e+=1)_[e]=lt(it(t,P,e));let S="webcam"===t[0].interactive&&st(),O=t[0].parameters,W=[];for(let e=0;e<O.length;e+=1)W[e]=mt(nt(t,O,e));const U=t=>R(W[t],1,1,(()=>{W[t]=null}));return j=new Y({}),{c(){e=f("div"),n=f("div"),i=f("div"),i.textContent=`${t[1]}`,o=h();for(let t=0;t<_.length;t+=1)_[t].c();c=h(),r=f("div"),a=h(),l=f("div"),S&&S.c(),g=h(),b=f("br"),$=h(),y=f("div"),x=f("div"),w=p("Parameters\n        "),k=f("span"),D=p("info"),q=h();for(let t=0;t<W.length;t+=1)W[t].c();I=h(),A=f("div"),L=h(),T(j.$$.fragment),v(i,"class","activity-title fredoka svelte-cemhob"),v(r,"class","p-4"),v(n,"class","col-4 activity-description-area text-left flex-grow-1 p-5 svelte-cemhob"),v(k,"class","material-icons param-info svelte-cemhob"),v(k,"data-toggle","tooltip"),v(k,"data-placement","right"),v(k,"title",C=t[0].parameterDescription),v(x,"class","parameter-title fredoka svelte-cemhob"),v(y,"class","parameter-area d-flex flex-column text-left p-5"),v(A,"class","p-4"),v(l,"class","col-8 activity-interaction-area flex-grow-1 p-5 svelte-cemhob"),v(e,"class","row")},m(t,m){u(t,e,m),s(e,n),s(n,i),s(n,o);for(let t=0;t<_.length;t+=1)_[t].m(n,null);s(n,c),s(n,r),s(e,a),s(e,l),S&&S.m(l,null),s(l,g),s(l,b),s(l,$),s(l,y),s(y,x),s(x,w),s(x,k),s(k,D),s(y,q);for(let t=0;t<W.length;t+=1)W[t].m(y,null);s(l,I),s(l,A),u(t,L,m),B(j,t,m),F=!0},p(t,[e]){if(4&e){let i;for(P=Object.entries(t[2]),i=0;i<P.length;i+=1){const o=it(t,P,i);_[i]?_[i].p(o,e):(_[i]=lt(o),_[i].c(),_[i].m(n,c))}for(;i<_.length;i+=1)_[i].d(1);_.length=P.length}if("webcam"===t[0].interactive?S?1&e&&N(S,1):(S=st(),S.c(),N(S,1),S.m(l,g)):S&&(E(),R(S,1,1,(()=>{S=null})),M()),(!F||1&e&&C!==(C=t[0].parameterDescription))&&v(k,"title",C),1&e){let n;for(O=t[0].parameters,n=0;n<O.length;n+=1){const i=nt(t,O,n);W[n]?(W[n].p(i,e),N(W[n],1)):(W[n]=mt(i),W[n].c(),N(W[n],1),W[n].m(y,null))}for(E(),n=O.length;n<W.length;n+=1)U(n);M()}},i(t){if(!F){N(S);for(let t=0;t<O.length;t+=1)N(W[t]);N(j.$$.fragment,t),F=!0}},o(t){R(S),W=W.filter(Boolean);for(let t=0;t<W.length;t+=1)R(W[t]);R(j.$$.fragment,t),F=!1},d(t){t&&m(e),d(_,t),S&&S.d(),d(W,t),t&&m(L),Q(j,t)}}}function ft(t,e,n){let{activity:i={title:"Activity Loading...",description:{Description:"Description loading..."},interactive:"webcam",parameters:[{title:"Parameters loading..."}],parameterDescription:"Parameters are cool."}}=e;const o=i.title,c=i.description;return t.$$set=t=>{"activity"in t&&n(0,i=t.activity)},[i,o,c]}class pt extends G{constructor(t){super(),H(this,t,ft,dt,l,{activity:0})}}function ht(t){let e;return{c(){e=f("nav"),e.innerHTML='<a class="navbar-brand" style="cursor: pointer;" href="https://raise.mit.edu/"><span class="module-nav-label align-middle svelte-1jnrc04">RAISE</span></a> \n  <div><span class="mx-4">Activities</span> \n    <span class="mx-4">About</span> \n    <span class="mx-4">Contact</span></div>',v(e,"class","navbar fixed-top module-nav ibm-plex px-5 svelte-1jnrc04")},m(t,n){u(t,e,n)},p:i,i:i,o:i,d(t){t&&m(e)}}}class gt extends G{constructor(t){super(),H(this,t,null,ht,l,{})}}function vt(t){let e;return{c(){e=f("footer"),e.innerHTML='<div><span class="mx-4">© 2019 Copyright MIT.</span> \n    <a href="https://raise.mit.edu/terms.html" class="mx-4">Terms of service</a> \n    <a href="https://raise.mit.edu/faq.html" class="mx-4">FAQ</a> \n    <a href="https://raise.mit.edu/faq.html" class="mx-4">Privacy Policy</a> \n    <a href="http://accessibility.mit.edu/" class="mx-4">Accessibility</a> \n    <a href="https://svelte.dev/" class="mx-4">Powered by Svelte</a></div>',v(e,"class","module-nav w-100 ibm-plex px-5 py-4 text-left svelte-1p10mtj")},m(t,n){u(t,e,n)},p:i,i:i,o:i,d(t){t&&m(e)}}}class bt extends G{constructor(t){super(),H(this,t,null,vt,l,{})}}function $t(t){let e,n,o,c,r,a,l,d,g,y,x=t[1].title+"",w=t[1].description.Description+"";return{c(){e=f("div"),n=f("div"),n.textContent="Image Placeholder",o=h(),c=f("h3"),r=p(x),a=h(),l=f("p"),d=p(w),v(n,"class","m-2"),$(n,"background-color","#f4f4f4"),$(n,"height","8em"),v(l,"class","max-lines svelte-j1ore8"),v(e,"class","col-3 activity-border m-2 m-xl-4 py-3 svelte-j1ore8"),$(e,"cursor","pointer"),$(e,"--theme-color",t[0])},m(i,m){var f,p,h,v;u(i,e,m),s(e,n),s(e,o),s(e,c),s(c,r),s(e,a),s(e,l),s(l,d),g||(f=e,p="click",h=t[3],f.addEventListener(p,h,v),y=()=>f.removeEventListener(p,h,v),g=!0)},p(t,[n]){2&n&&x!==(x=t[1].title+"")&&b(r,x),2&n&&w!==(w=t[1].description.Description+"")&&b(d,w),1&n&&$(e,"--theme-color",t[0])},i:i,o:i,d(t){t&&m(e),g=!1,y()}}}function yt(t,e,n){let{color:i="#0C70BC"}=e,{activity:o}=e,{activityInflater:c}=e;return t.$$set=t=>{"color"in t&&n(0,i=t.color),"activity"in t&&n(1,o=t.activity),"activityInflater"in t&&n(2,c=t.activityInflater)},[i,o,c,()=>c(o)]}class xt extends G{constructor(t){super(),H(this,t,yt,$t,l,{color:0,activity:1,activityInflater:2})}}function wt(t,e,n){const i=t.slice();return i[3]=e[n],i}function kt(t,e,n){const i=t.slice();return i[6]=e[n],i[8]=n,i}function Dt(t){let e;return{c(){e=p("Loading activities...")},m(t,n){u(t,e,n)},p:i,i:i,o:i,d(t){t&&m(e)}}}function Ct(t){let e,n,i=t[0],o=[];for(let e=0;e<i.length;e+=1)o[e]=It(wt(t,i,e));const c=t=>R(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=g()},m(t,i){for(let e=0;e<o.length;e+=1)o[e].m(t,i);u(t,e,i),n=!0},p(t,n){if(7&n){let r;for(i=t[0],r=0;r<i.length;r+=1){const c=wt(t,i,r);o[r]?(o[r].p(c,n),N(o[r],1)):(o[r]=It(c),o[r].c(),N(o[r],1),o[r].m(e.parentNode,e))}for(E(),r=i.length;r<o.length;r+=1)c(r);M()}},i(t){if(!n){for(let t=0;t<i.length;t+=1)N(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)R(o[t]);n=!1},d(t){d(o,t),t&&m(e)}}}function qt(t){let e,n;return e=new xt({props:{activity:t[6],color:t[2][t[8]%t[2].length],activityInflater:t[1]}}),{c(){T(e.$$.fragment)},m(t,i){B(e,t,i),n=!0},p(t,n){const i={};1&n&&(i.activity=t[6]),2&n&&(i.activityInflater=t[1]),e.$set(i)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function It(t){let e,n,i,o,c,r=t[3].title+"",a=t[3].activities,l=[];for(let e=0;e<a.length;e+=1)l[e]=qt(kt(t,a,e));const $=t=>R(l[t],1,1,(()=>{l[t]=null}));return{c(){e=f("h3"),n=p(r),i=h();for(let t=0;t<l.length;t+=1)l[t].c();o=g(),v(e,"class","fredoka category-title svelte-17sfhw4")},m(t,r){u(t,e,r),s(e,n),u(t,i,r);for(let e=0;e<l.length;e+=1)l[e].m(t,r);u(t,o,r),c=!0},p(t,e){if((!c||1&e)&&r!==(r=t[3].title+"")&&b(n,r),7&e){let n;for(a=t[3].activities,n=0;n<a.length;n+=1){const i=kt(t,a,n);l[n]?(l[n].p(i,e),N(l[n],1)):(l[n]=qt(i),l[n].c(),N(l[n],1),l[n].m(o.parentNode,o))}for(E(),n=a.length;n<l.length;n+=1)$(n);M()}},i(t){if(!c){for(let t=0;t<a.length;t+=1)N(l[t]);c=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)R(l[t]);c=!1},d(t){t&&m(e),t&&m(i),d(l,t),t&&m(o)}}}function At(t){let e,n,i,o,c,r,a,l,d,p,g,b;n=new gt({});const $=[Ct,Dt],y=[];function x(t,e){return t[0]?0:1}return l=x(t),d=y[l]=$[l](t),g=new bt({}),{c(){e=f("div"),T(n.$$.fragment),i=h(),o=f("div"),c=f("div"),c.innerHTML='<h1 class="activity-title fredoka svelte-17sfhw4">Explainable AI</h1> \n      <p class="ibm-plex col-8 text-justify mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n        commodo consequat.</p>',r=h(),a=f("div"),d.c(),p=h(),T(g.$$.fragment),v(c,"class","explainable-ai p-5 text-middle svelte-17sfhw4"),v(a,"class","activity-list p-5"),v(o,"class","pt-5"),v(e,"class","row")},m(t,m){u(t,e,m),B(n,e,null),s(e,i),s(e,o),s(o,c),s(o,r),s(o,a),y[l].m(a,null),s(e,p),B(g,e,null),b=!0},p(t,[e]){let n=l;l=x(t),l===n?y[l].p(t,e):(E(),R(y[n],1,1,(()=>{y[n]=null})),M(),d=y[l],d?d.p(t,e):(d=y[l]=$[l](t),d.c()),N(d,1),d.m(a,null))},i(t){b||(N(n.$$.fragment,t),N(d),N(g.$$.fragment,t),b=!0)},o(t){R(n.$$.fragment,t),R(d),R(g.$$.fragment,t),b=!1},d(t){t&&m(e),Q(n),y[l].d(),Q(g)}}}function Lt(t,e,n){let{activities:i=!1}=e,{activityInflater:o=(t=>{console.log("No Activity Inflater declared")})}=e;return t.$$set=t=>{"activities"in t&&n(0,i=t.activities),"activityInflater"in t&&n(1,o=t.activityInflater)},[i,o,["#F89329","#FEC040","#FD0101","#A0015B","#8AC54A","#0F9244","#0C70BC"]]}class jt extends G{constructor(t){super(),H(this,t,Lt,At,l,{activities:0,activityInflater:1})}}function Ft(t){let e,n=t[7]+"";return{c(){e=p(n)},m(t,n){u(t,e,n)},p:i,i:i,o:i,d(t){t&&m(e)}}}function Pt(t){let e,n;return e=new jt({props:{activities:t[6],activityInflater:t[2]}}),{c(){T(e.$$.fragment)},m(t,i){B(e,t,i),n=!0},p:i,i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function _t(t){let e,n;return e=new jt({}),{c(){T(e.$$.fragment)},m(t,i){B(e,t,i),n=!0},p:i,i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function St(t){let e,n,i,o={ctx:t,current:null,token:null,hasCatch:!0,pending:_t,then:Pt,catch:Ft,value:6,error:7,blocks:[,,,]};return function(t,e){const n=e.token={};function i(t,i,o,c){if(e.token!==n)return;e.resolved=c;let r=e.ctx;void 0!==o&&(r=r.slice(),r[o]=c);const a=t&&(e.current=t)(r);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==i&&t&&(E(),R(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),M())})):e.block.d(1),a.c(),N(a,1),a.m(e.mount(),e.anchor),l=!0),e.block=a,e.blocks&&(e.blocks[i]=a),l&&_()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=k();if(t.then((t=>{w(n),i(e.then,1,e.value,t),w(null)}),(t=>{if(w(n),i(e.catch,2,e.error,t),w(null),!e.hasCatch)throw t})),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}var o}(t[1](),o),{c(){e=f("main"),n=f("div"),o.block.c(),v(n,"class","main-area"),v(e,"class","container-fluid d-flex h-100 flex-column py-0 svelte-177t831")},m(c,r){u(c,e,r),s(e,n),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null,t[3](n),i=!0},p(e,[n]){!function(t,e,n){const i=e.slice(),{resolved:o}=t;t.current===t.then&&(i[t.value]=o),t.current===t.catch&&(i[t.error]=o),t.block.p(i,n)}(o,t=e,n)},i(t){i||(N(o.block),i=!0)},o(t){for(let t=0;t<3;t+=1){R(o.blocks[t])}i=!1},d(n){n&&m(e),o.block.d(),o.token=null,o=null,t[3](null)}}}function Ot(t,e,n){let i;const o=[{title:"Facial Recognition",activities:[{title:"Face Recognition",description:{Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Definitions:["Object Detection","Image Segmentation","Image Classification"],Questions:["Why is it so hard?","What is the meaning of life?"]},interactive:"webcam",parameters:[{title:"Confidence Level",confidence:.75}],parameterDescription:"Parameters are cool."},{title:"Face Recognition",description:{Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Definitions:["Object Detection","Image Segmentation","Image Classification"],Questions:["Why is it so hard?","What is the meaning of life?"]},interactive:"webcam",parameters:[{title:"Confidence Level",confidence:.75}],parameterDescription:"Parameters are cool."},{title:"Face Recognition",description:{Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Definitions:["Object Detection","Image Segmentation","Image Classification"],Questions:["Why is it so hard?","What is the meaning of life?"]},interactive:"webcam",parameters:[{title:"Confidence Level",confidence:.75}],parameterDescription:"Parameters are cool."},{title:"Face Recognition",description:{Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Definitions:["Object Detection","Image Segmentation","Image Classification"],Questions:["Why is it so hard?","What is the meaning of life?"]},interactive:"webcam",parameters:[{title:"Confidence Level",confidence:.75}],parameterDescription:"Parameters are cool."},{title:"Face Recognition",description:{Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Definitions:["Object Detection","Image Segmentation","Image Classification"],Questions:["Why is it so hard?","What is the meaning of life?"]},interactive:"webcam",parameters:[{title:"Confidence Level",confidence:.75}],parameterDescription:"Parameters are cool."}]},{title:"Sound Processing",activities:[{title:"Audio Classification",description:{Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Definitions:["Object Detection","Image Segmentation","Image Classification"],Questions:["Why is it so hard?","What is the meaning of life?"]},interactive:"webcam",parameters:[{title:"Confidence Level",confidence:.75}],parameterDescription:"Parameters are cool."}]}];return[i,async function(){console.log("Getting activities");try{const t=await fetch("https://sheets.googleapis.com/v4/spreadsheets/1YXpNUh8SkVnvxzu3yF01QYNO7zPK82PLoXWwtHVRh04?key=AIzaSyDRSMcGZt2OOFyJ12mWMfDrJsnfq6PyZlI&includeGridData=true").then((t=>t.json()));let e=[];for(const n of t.sheets)if("Template"!==n.properties.title){let t={};for(const e of n.data[0].rowData){const n=Object.keys(e).length>0?e.values[0].formattedValue:"";"*"!==n&&""!==n&&(t[n]=e.values.length>1?e.values[1].formattedValue:"")}e.push(t)}let n=[];for(const t of e)n.push(t),console.log("To do: split them into categories");return o}catch(t){return console.log(`Activities request failed: ${t}`),o}},async function(t){!function(t,e){const n=document.createDocumentFragment(),i=new t({target:n,props:{...e}});e.target.parentNode.replaceChild(n,e.target)}(pt,{target:i,activity:t})},function(t){C[t?"unshift":"push"]((()=>{i=t,n(0,i)}))}]}return new class extends G{constructor(t){super(),H(this,t,Ot,St,l,{})}}({target:document.body})}(faceapi);
//# sourceMappingURL=bundle.js.map
