(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var s in e)t.o(e,s)&&!t.o(o,s)&&Object.defineProperty(o,s,{enumerable:!0,get:e[s]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o),t.d(o,{extend:()=>J});const e=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/app"];var n=t.n(s);const r=flarum.core.compat["forum/components/NotificationGrid"];var a=t.n(r);const i=flarum.core.compat["common/components/Button"];var l=t.n(i);const c=flarum.core.compat["forum/components/CommentPost"];var u=t.n(c);const f=flarum.core.compat["common/components/Link"];var p=t.n(f);const d=flarum.core.compat["common/helpers/punctuateSeries"];var k=t.n(d);const h=flarum.core.compat["common/helpers/username"];var v=t.n(h);const g=flarum.core.compat["common/helpers/icon"];var y=t.n(g);const b=flarum.core.compat["common/components/Modal"];var _=t.n(b);const x=flarum.core.compat["common/helpers/avatar"];var L=t.n(x);const N=flarum.core.compat["common/states/PaginatedListState"];var P=t.n(N);class B extends(P()){constructor(t,o){void 0===o&&(o=1),t.page={...t.page||{},limit:10},super(t,o,10)}get type(){return"users"}}const M=flarum.core.compat["common/components/LoadingIndicator"];var S=t.n(M);class j extends(_()){oninit(t){super.oninit(t),this.state=new B({filter:{liked:this.attrs.post.id()}}),this.state.refresh()}className(){return"PostLikesModal Modal--small"}title(){return n().translator.trans("flarum-likes.forum.post_likes.title")}content(){return m("[",null,m("div",{className:"Modal-body"},this.state.isInitialLoading()?m(S(),null):m("ul",{className:"PostLikesModal-list"},this.state.getPages().map((t=>t.items.map((t=>m("li",null,m(p(),{href:n().route.user(t)},L()(t)," ",v()(t))))))))),this.state.hasNext()?m("div",{className:"Modal-footer"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m(l(),{className:"Button Button--block",onclick:()=>this.state.loadNext(),loading:this.state.isLoadingNext()},n().translator.trans("flarum-likes.forum.post_likes.load_more_button"))))):null)}}const w=flarum.core.compat["forum/components/Notification"];var C=t.n(w);const I=flarum.core.compat["common/utils/string"];class O extends(C()){icon(){return"far fa-thumbs-up"}href(){return n().route.post(this.attrs.notification.subject())}content(){const t=this.attrs.notification.fromUser();return n().translator.trans("flarum-likes.forum.notifications.post_liked_text",{user:t,count:1})}excerpt(){return(0,I.truncate)(this.attrs.notification.subject().contentPlain(),200)}}const U=flarum.core.compat["forum/components/UserPage"];var F=t.n(U);const T=flarum.core.compat["common/components/LinkButton"];var R=t.n(T);const z=flarum.core.compat["common/extenders"];var A=t.n(z);const D=flarum.core.compat["common/models/Post"];var G=t.n(D);const H=flarum.core.compat["forum/components/PostsUserPage"];var q=t.n(H);class E extends(q()){loadResults(t){return n().store.find("posts",{filter:{type:"comment",likedBy:this.user.id()},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})}}const J=[(new(A().Routes)).add("user.likes","/u/:username/likes",E),new(A().Model)(G()).hasMany("likes").attribute("likesCount").attribute("canLike")];n().initializers.add("flarum-likes",(()=>{n().notificationComponents.postLiked=O,(0,e.extend)(u().prototype,"actionItems",(function(t){const o=this.attrs.post;if(o.isHidden()||!o.canLike())return;const e=o.likes();let s=n().session.user&&e&&e.some((t=>t===n().session.user));t.add("like",m(l(),{className:"Button Button--link",onclick:()=>{s=!s,o.save({isLiked:s});const t=o.data.relationships.likes.data;t.some(((o,e)=>{if(o.id===n().session.user.id())return t.splice(e,1),!0})),s&&t.unshift({type:"users",id:n().session.user.id()})}},n().translator.trans(s?"flarum-likes.forum.post.unlike_link":"flarum-likes.forum.post.like_link")))})),(0,e.extend)(u().prototype,"footerItems",(function(t){const o=this.attrs.post,e=o.likes();if(e&&e.length){const s=4,r=o.likesCount()>s,a=e.sort((t=>t===n().session.user?-1:1)).slice(0,r?s-1:s).map((t=>m(p(),{href:n().route.user(t)},t===n().session.user?n().translator.trans("flarum-likes.forum.post.you_text"):v()(t))));if(r){const t=o.likesCount()-a.length,e=n().translator.trans("flarum-likes.forum.post.others_link",{count:t});n().forum.attribute("canSearchUsers")?a.push(m(l(),{className:"Button Button--ua-reset Button--text",onclick:t=>{t.preventDefault(),n().modal.show(j,{post:o})}},e)):a.push(m("span",null,e))}t.add("liked",m("div",{className:"Post-likedBy"},y()("far fa-thumbs-up"),n().translator.trans("flarum-likes.forum.post.liked_by".concat(e[0]===n().session.user?"_self":"","_text"),{count:a.length,users:k()(a)})))}})),(0,e.extend)(F().prototype,"navItems",(function(t){const o=this.user;t.add("likes",m(R(),{href:n().route("user.likes",{username:null==o?void 0:o.slug()}),icon:"far fa-thumbs-up"},n().translator.trans("flarum-likes.forum.user.likes_link")),88)})),(0,e.extend)(a().prototype,"notificationTypes",(function(t){t.add("postLiked",{name:"postLiked",icon:"far fa-thumbs-up",label:n().translator.trans("flarum-likes.forum.settings.notify_post_liked_label")})}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map