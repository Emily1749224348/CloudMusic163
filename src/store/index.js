import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 用来存储数据
const state = {
    isLogin:false,
    user:{
        isLogin:false,
        account:{},
        
    },
    // CloudMusicApi:"https://api.hanling.space/"
    CloudMusicApi:"https://netease-cloud-music-api-xi-tawny-81.vercel.app",
}
// 响应组件中的事件
const actions = {
 
}
// 操作数据
const mutations = {
 
}
// 用来将state数据进行加工
const getters = {
 
}
// 新建并暴露store
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
