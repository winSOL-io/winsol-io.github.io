import{cd as be,r as S,b4 as ye,bW as K,bf as E,bj as V,w as y,b1 as le,b0 as C,aY as N,bm as R,bD as j,c2 as xe,ce as q,cf as we,aW as z,cg as Te,ch as X,ci as Se,cj as He,ck as ke,q as k,bh as Pe,cl as Ce,aT as Me,bC as _e,aX as Ee,be as We,b6 as qe,a9 as Ve,Z as $e,cm as Le,aa as Y,ab as Oe,ac as J,aJ as Ae,ad as Re,ak as je,an as ze,ae as Be}from"./vendor.88348ce0.js";import{_ as De}from"./index.edd5a0cb.js";function B(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),be.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ne={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Qe({showing:e,avoidEmit:t,configureAnchorEl:i}){const{props:l,proxy:n,emit:c}=N(),o=S(null);let r;function s(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};i===void 0&&(Object.assign(u,{hide(a){n.hide(a)},toggle(a){n.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ye(a,13)===!0&&u.toggle(a)},contextClick(a){n.hide(a),K(a),E(()=>{n.show(a),a.qAnchorHandled=!0})},prevent:K,mobileTouch(a){if(u.mobileCleanup(a),s(a)!==!0)return;n.hide(a),o.value.classList.add("non-selectable");const m=a.target;V(u,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{n.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),clearTimeout(r),e.value===!0&&a!==void 0&&B()}}),i=function(a=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let m;a===!0?n.$q.platform.is.mobile===!0?m=[[o.value,"touchstart","mobileTouch","passive"]]:m=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:m=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],V(u,"anchor",m)});function d(){R(u,"anchor")}function g(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function v(){if(l.target===!1||l.target===""||n.$el.parentNode===null)o.value=null;else if(l.target===!0)g(n.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,i()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return y(()=>l.contextMenu,a=>{o.value!==null&&(d(),i(a))}),y(()=>l.target,()=>{o.value!==null&&d(),v()}),y(()=>l.noParentEvent,a=>{o.value!==null&&(a===!0?d():i())}),le(()=>{v(),t!==!0&&l.modelValue===!0&&o.value===null&&c("update:modelValue",!1)}),C(()=>{clearTimeout(r),d()}),{anchorEl:o,canShow:s,anchorEvents:u}}function Ie(e,t){const i=S(null);let l;function n(r,s){const u=`${s!==void 0?"add":"remove"}EventListener`,d=s!==void 0?s:l;r!==window&&r[u]("scroll",d,j.passive),window[u]("scroll",d,j.passive),l=s}function c(){i.value!==null&&(n(i.value),i.value=null)}const o=y(()=>e.noParentEvent,()=>{i.value!==null&&(c(),t())});return C(o),{localScrollTarget:i,unconfigureScrollTarget:c,changeScrollEvent:n}}const Fe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ue=["before-show","show","before-hide","hide"];function Ge({showing:e,canShow:t,hideOnRouteChange:i,handleShow:l,handleHide:n,processOnMount:c}){const o=N(),{props:r,emit:s,proxy:u}=o;let d;function g(f){e.value===!0?m(f):v(f)}function v(f){if(r.disable===!0||f!==void 0&&f.qAnchorHandled===!0||t!==void 0&&t(f)!==!0)return;const b=r["onUpdate:modelValue"]!==void 0;b===!0&&(s("update:modelValue",!0),d=f,E(()=>{d===f&&(d=void 0)})),(r.modelValue===null||b===!1)&&a(f)}function a(f){e.value!==!0&&(e.value=!0,s("before-show",f),l!==void 0?l(f):s("show",f))}function m(f){if(r.disable===!0)return;const b=r["onUpdate:modelValue"]!==void 0;b===!0&&(s("update:modelValue",!1),d=f,E(()=>{d===f&&(d=void 0)})),(r.modelValue===null||b===!1)&&x(f)}function x(f){e.value!==!1&&(e.value=!1,s("before-hide",f),n!==void 0?n(f):s("hide",f))}function H(f){r.disable===!0&&f===!0?r["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):f===!0!==e.value&&(f===!0?a:x)(d)}y(()=>r.modelValue,H),i!==void 0&&xe(o)===!0&&y(()=>u.$route.fullPath,()=>{i.value===!0&&e.value===!0&&m()}),c===!0&&le(()=>{H(r.modelValue)});const W={show:v,hide:m,toggle:g};return Object.assign(u,W),W}const P=[];function pt(e){return P.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function Ke(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return q(e)}else if(e.__qPortalInnerRef!==void 0){const i=q(e);return i!==void 0&&i.$options.name==="QPopupProxy"?(e.hide(t),i):e}e=q(e)}while(e!=null)}function gt(e,t,i){for(;i!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(i--,e.$options.name==="QMenu"){e=Ke(e,t);continue}e.hide(t)}e=q(e)}}function Xe(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ye(e,t,i,l){const n=S(!1),c=S(!1);let o=null;const r={},s=l===!0&&Xe(e);function u(g){if(g===!0){X(r),c.value=!0;return}c.value=!1,n.value===!1&&(s===!1&&o===null&&(o=Se()),n.value=!0,P.push(e.proxy),He(r))}function d(g){if(c.value=!1,g!==!0)return;X(r),n.value=!1;const v=P.indexOf(e.proxy);v>-1&&P.splice(v,1),o!==null&&(ke(o),o=null)}return we(()=>{d(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:u,hidePortal:d,portalIsActive:n,portalIsAccessible:c,renderPortal:()=>s===!0?i():n.value===!0?[z(Te,{to:o},i())]:void 0}}const Je={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ze(e,t){const i=S(t.value);return y(t,l=>{E(()=>{i.value=l})}),{transition:k(()=>"q-transition--"+(i.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:k(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function et(){let e;return C(()=>{e=void 0}),{registerTick(t){e=t,E(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}function tt(){let e;return C(()=>{clearTimeout(e)}),{registerTimeout(t,i){clearTimeout(e),e=setTimeout(t,i)},removeTimeout(){clearTimeout(e)}}}let ie;const{notPassiveCapture:$}=j,T=[];function L(e){clearTimeout(ie);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let i=P.length-1;for(;i>=0;){const l=P[i].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;i--}for(let l=T.length-1;l>=0;l--){const n=T[l];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function ot(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",L,$),document.addEventListener("touchstart",L,$))}function Z(e){const t=T.findIndex(i=>i===e);t>-1&&(T.splice(t,1),T.length===0&&(clearTimeout(ie),document.removeEventListener("mousedown",L,$),document.removeEventListener("touchstart",L,$)))}let ee,te;function oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function nt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const D={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{D[`${e}#ltr`]=e,D[`${e}#rtl`]=e});function ne(e,t){const i=e.split(" ");return{vertical:i[0],horizontal:D[`${i[1]}#${t===!0?"rtl":"ltr"}`]}}function lt(e,t){let{top:i,left:l,right:n,bottom:c,width:o,height:r}=e.getBoundingClientRect();return t!==void 0&&(i-=t[1],l-=t[0],c+=t[1],n+=t[0],o+=t[0],r+=t[1]),{top:i,left:l,right:n,bottom:c,width:o,height:r,middle:l+(n-l)/2,center:i+(c-i)/2}}function it(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function at(e){if(Pe.is.ios===!0&&window.visualViewport!==void 0){const r=document.body.style,{offsetLeft:s,offsetTop:u}=window.visualViewport;s!==ee&&(r.setProperty("--q-pe-left",s+"px"),ee=s),u!==te&&(r.setProperty("--q-pe-top",u+"px"),te=u)}let t;const{scrollLeft:i,scrollTop:l}=e.el;if(e.absoluteOffset===void 0)t=lt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:r,left:s}=e.anchorEl.getBoundingClientRect(),u=r+e.absoluteOffset.top,d=s+e.absoluteOffset.left;t={top:u,left:d,width:1,height:1,right:d+1,center:u,middle:d,bottom:u+1}}let n={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(n.minWidth=t.width+"px",e.cover===!0&&(n.minHeight=t.height+"px")),Object.assign(e.el.style,n);const c=it(e.el),o={top:t[e.anchorOrigin.vertical]-c[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-c[e.selfOrigin.horizontal]};rt(o,t,c,e.anchorOrigin,e.selfOrigin),n={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(n.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(n.minHeight=n.maxHeight)),o.maxWidth!==void 0&&(n.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(n.minWidth=n.maxWidth)),Object.assign(e.el.style,n),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==i&&(e.el.scrollLeft=i)}function rt(e,t,i,l,n){const c=i.bottom,o=i.right,r=Ce(),s=window.innerHeight-r,u=document.body.clientWidth;if(e.top<0||e.top+c>s)if(n.vertical==="center")e.top=t[l.vertical]>s/2?Math.max(0,s-c):0,e.maxHeight=Math.min(c,s);else if(t[l.vertical]>s/2){const d=Math.min(s,l.vertical==="center"?t.center:l.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,s-e.top);if(e.left<0||e.left+o>u)if(e.maxWidth=Math.min(o,u),n.horizontal==="middle")e.left=t[l.horizontal]>u/2?Math.max(0,u-o):0;else if(t[l.horizontal]>u/2){const d=Math.min(u,l.horizontal==="middle"?t.middle:l.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(o,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(o,u-e.left)}var st=Me({name:"QTooltip",inheritAttrs:!1,props:{...Ne,...Fe,...Je,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:oe},self:{type:String,default:"top middle",validator:oe},offset:{type:Array,default:()=>[14,14],validator:nt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ue],setup(e,{slots:t,emit:i,attrs:l}){let n,c;const o=N(),{proxy:{$q:r}}=o,s=S(null),u=S(!1),d=k(()=>ne(e.anchor,r.lang.rtl)),g=k(()=>ne(e.self,r.lang.rtl)),v=k(()=>e.persistent!==!0),{registerTick:a,removeTick:m}=et(),{registerTimeout:x,removeTimeout:H}=tt(),{transition:W,transitionStyle:f}=Ze(e,u),{localScrollTarget:b,changeScrollEvent:ae,unconfigureScrollTarget:re}=Ie(e,U),{anchorEl:p,canShow:se,anchorEvents:M}=Qe({showing:u,configureAnchorEl:ve}),{show:ue,hide:O}=Ge({showing:u,canShow:se,handleShow:de,handleHide:fe,hideOnRouteChange:v,processOnMount:!0});Object.assign(M,{delayShow:he,delayHide:me});const{showPortal:Q,hidePortal:I,renderPortal:ce}=Ye(o,s,ge);if(r.platform.is.mobile===!0){const h={anchorEl:p,innerRef:s,onClickOutside(w){return O(w),w.target.classList.contains("q-dialog__backdrop")&&qe(w),!0}},A=k(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);y(A,w=>{(w===!0?ot:Z)(h)}),C(()=>{Z(h)})}function de(h){m(),H(),Q(),a(()=>{c=new MutationObserver(()=>_()),c.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),_(),U()}),n===void 0&&(n=y(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,_)),x(()=>{Q(!0),i("show",h)},e.transitionDuration)}function fe(h){m(),H(),I(),F(),x(()=>{I(!0),i("hide",h)},e.transitionDuration)}function F(){c!==void 0&&(c.disconnect(),c=void 0),n!==void 0&&(n(),n=void 0),re(),R(M,"tooltipTemp")}function _(){const h=s.value;p.value===null||!h||at({el:h,offset:e.offset,anchorEl:p.value,anchorOrigin:d.value,selfOrigin:g.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function he(h){if(r.platform.is.mobile===!0){B(),document.body.classList.add("non-selectable");const A=p.value,w=["touchmove","touchcancel","touchend","click"].map(G=>[A,G,"delayHide","passiveCapture"]);V(M,"tooltipTemp",w)}x(()=>{ue(h)},e.delay)}function me(h){H(),r.platform.is.mobile===!0&&(R(M,"tooltipTemp"),B(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),x(()=>{O(h)},e.hideDelay)}function ve(){if(e.noParentEvent===!0||p.value===null)return;const h=r.platform.is.mobile===!0?[[p.value,"touchstart","delayShow","passive"]]:[[p.value,"mouseenter","delayShow","passive"],[p.value,"mouseleave","delayHide","passive"]];V(M,"anchor",h)}function U(){if(p.value!==null||e.scrollTarget!==void 0){b.value=_e(p.value,e.scrollTarget);const h=e.noParentEvent===!0?_:O;ae(b.value,h)}}function pe(){return u.value===!0?z("div",{...l,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",l.class],style:[l.style,f.value],role:"complementary"},We(t.default)):null}function ge(){return z(Ee,{name:W.value,appear:!0},pe)}return C(F),Object.assign(o.proxy,{updatePosition:_}),ce}});const ut=Ve({props:{text:{type:String,required:!0}},setup(e){const{notify:t}=$e();return{copy(){Le(e.text),t({message:"Copied to clipboard"})}}}}),ct=Be("path",{d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},null,-1),dt=[ct],ft=ze(" Copy to clipboard ");function ht(e,t,i,l,n,c){return Y(),Oe(je,{flat:"",round:"",dense:""},{default:J(()=>[(Y(),Ae("svg",{fill:"none",height:"24",stroke:"currentColor",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",onClick:t[0]||(t[0]=(...o)=>e.copy&&e.copy(...o))},dt)),Re(st,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:J(()=>[ft]),_:1})]),_:1})}var bt=De(ut,[["render",ht]]);export{bt as _,Ze as a,et as b,tt as c,B as d,Ne as e,Fe as f,nt as g,Ue as h,Ie as i,Qe as j,Ge as k,Ye as l,ot as m,Ke as n,pt as o,ne as p,gt as q,Z as r,at as s,Je as u,oe as v};
