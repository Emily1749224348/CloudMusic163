webpackJsonp([0],{BO1k:function(e,t,r){e.exports={default:r("fxRn"),__esModule:!0}},NOH4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),s=r.n(n),a=r("BO1k"),i=r.n(a),u=r("exGp"),o=r.n(u),c={name:"events",data:function(){return{userId:"",events:[]}},methods:{goBack:function(){this.$router.push({path:"/user/home",query:{id:this.$store.state.userInfo.userId}})}},created:function(){var e=this;return o()(s.a.mark(function t(){var r,n,a,u,o,c,v;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.userId=e.$route.query.id,t.next=3,e.$request("/user/event",{uid:e.userId});case 3:for(r=(r=t.sent).data.events,n=!0,a=!1,u=void 0,t.prev=8,o=i()(r);!(n=(c=o.next()).done);n=!0)v=c.value,e.events.push(JSON.parse(v.json));t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),a=!0,u=t.t0;case 16:t.prev=16,t.prev=17,!n&&o.return&&o.return();case 19:if(t.prev=19,!a){t.next=22;break}throw u;case 22:return t.finish(19);case 23:return t.finish(16);case 24:case"end":return t.stop()}},t,e,[[8,12,16,24],[17,,19,23]])}))()}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"events"}},[r("el-page-header",{attrs:{content:"我的动态"},on:{back:e.goBack}}),e._v(" "),r("el-divider"),e._v(" "),e._l(e.events,function(t,n){return r("div",{key:n,staticClass:"part"},[r("h3",{staticClass:"title"},[e._v(e._s(t.msg))]),e._v(" "),t.program?r("div",{staticClass:"item"},[r("img",{attrs:{width:"50px",src:t.program.blurCoverUrl}}),e._v(" "),r("span",[e._v(e._s(t.program.name))])]):e._e(),e._v(" "),t.song?r("div",{staticClass:"item"},[r("img",{attrs:{width:"50px",src:t.song.album.picUrl}}),e._v(" "),r("span",[e._v(e._s(t.song.name))])]):e._e(),e._v(" "),r("el-divider")],1)})],2)},staticRenderFns:[]};var d=r("VU/8")(c,v,!1,function(e){r("S5T3")},null,null);t.default=d.exports},S5T3:function(e,t){},fxRn:function(e,t,r){r("+tPU"),r("zQR9"),e.exports=r("g8Ux")},g8Ux:function(e,t,r){var n=r("77Pl"),s=r("3fs2");e.exports=r("FeBl").getIterator=function(e){var t=s(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}}});
//# sourceMappingURL=0.286f03ebf608756e785c.js.map