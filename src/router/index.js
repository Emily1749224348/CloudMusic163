import Vue from 'vue'
import Router from 'vue-router'
/*以下引入各种组件 */
//hello world 弃用
import HelloWorld from '@/components/HelloWorld'
/*一级路由 */
//主页面，默认页面---->一级：发现音乐 -----> 二级：每日推荐
import index from "../components/body//discover/body.vue"
//我的音乐   个人详情页
import my from "../components/body/my/my.vue"
//关注
import friend from "../components/body/friend/friend.vue"
//--------------商城 store------------
// import store from "../"
//--------------下载客户端------------
import download from "../components/body/download/download.vue"

/*一级路由结束 */
/*二级路由 */
//每日推荐
import recommend from "../components/body/discover/recommend/recommend.vue"
/**二级路由 */

//路由！！！
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/discover"
    },
    {//发现音乐
      path: '/discover',
      // name: 'index_page',
      component: index,
      children:[
        //推荐  ---------- 二级路由 默认页
        {path:"",name:"recommend",component:recommend}
        //二级路由 ----------排行榜
       , {path:"toplist",name:"toplist", component:()=>{return import("../components/body/discover/toplist/toplist.vue") }},
        //二级路由     ---------- 歌单
        {
          path:"playlist",name:"playlist", component:()=>{return import("../components/body/discover/playlist/playlist.vue")}
        },
        //二级路由--------主播电台
        {
          path:"djradio",name:"djradio", component:()=>{return import("../components/body/discover/djradio/toplist.vue")}
        },
        //二级路由-------歌手
        {
          path:"artist" ,name:"artist",component:()=>{return import("../components/body/discover/artist/artist.vue")}
        },
        //二级路由--------------------新碟上架---------------
        {
          path:"album", name:"album", component:()=>{return import("../components/body/discover/album/album.vue")}
        },
      ]
    },
    {//我的音乐
      path:"/my",
      name:"my",
      component:my,
    },
    {//关注
      path:"/friend",
      name:"friend",
      component:friend,
    },
    {//商城
      path:"/musician",
      name:"musician",
      component:()=>{return import("../components/body/musician/musician.vue")}
    },
   {//云推歌  add_song
    path:"/addSong",
    name:"addSong",//yun tui ge
    component:()=>{return import("../components/body/add_song/add_song.vue")}
   },
   {//商城 store
    path:"/store",
    name:"store",
    component:()=>{return import("../components/body/store/store.vue")}
   },
   {
      path:"/download",
      name:"download",
      component:download,
    },
    //用户页面
    {
      path:"/user",
      name:"user",
      component:()=> import("../components/body/user/user.vue"),
      children:[
        //我的主页
        {
          path:"home",
          name:"home",
          component:()=>{return import("../components/body/user/home/home.vue")}
        },
        //我的等级
        {
          path:"level",
          name:"level",
          component:()=>{return import("../components/body/user/level/level.vue")}
        },
        //设置
        {
          path:"update",
          name:"update",
          component:()=>{return import("../components/body/user/update/update.vue")}
        },
        //vip
        {
          path:"VIP",
          name:"VIP",
          component:()=>{return import("../components/body/user/VIP/VIP.vue")}
        },
        //我的消息
        {
          path:"msg",
          name:"userMessage",
          component:()=>{return import("../components/body/user/message/message.vue")}
        },
        //我的粉丝
        {
          path:"fans",
          name:"fans",
          component:()=>{return import("../components/body/user/fans/fans.vue")}
        },
        //我的关注
        {
          path:"follows",
          name:"follows",
          component:()=>{return import("../components/body/user/follows/follows.vue")}
        },
        //我的动态
        {
          path:"events",
          name:"events",
          component:()=>{return import("../components/body/user/events/events.vue")}
        },
      ]
    },
    //-------------搜索页面---------------
    {
      path:"/search",
      name:"search",
      component:()=>{return import("../components/body/search/search.vue")}
    }
  ],
  mode:"history"
})
