(()=>{var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var a in t)e.o(t,a)&&!e.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:t[a]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r);const t=flarum.core.compat["admin/app"];var a=e.n(t);a().initializers.add("flarum-sticky",(()=>{a().extensionData.for("flarum-sticky").registerPermission({icon:"fas fa-thumbtack",label:a().translator.trans("flarum-sticky.admin.permissions.sticky_discussions_label"),permission:"discussion.sticky"},"moderate",95)}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map