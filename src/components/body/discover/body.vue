<template>
    <div id="body">
        <el-container>
            <el-header>
            <el-menu mode="horizontal" :router=true :default-active="$route.path" :unique-opened=true>
                <el-menu-item index="/discover" exact>推荐</el-menu-item>
                <el-menu-item index="/discover/toplist">排行榜</el-menu-item>
                <el-menu-item index="/discover/playlist">歌单</el-menu-item>
                <el-menu-item index="/discover/djradio">主播电台</el-menu-item>
                <el-menu-item index="/discover/artist">歌手</el-menu-item>
                <el-menu-item index="/discover/album">新碟上架</el-menu-item>
            </el-menu>
            </el-header>
             
            <el-main>
               <router-view :key="$route.fullPath" class="routerView"></router-view> 
               <!-- <router-view></router-view> -->
               <el-button @click="getUserInfo">获取登录状态</el-button>
            </el-main>
        </el-container>
    </div>
</template>
<script>
// import recommend from "../discover/recommend/recommend.vue"

export default{
    name:"el-body",
    component:{
        
    },
    methods:{
        async getUserInfo(){
            let res  = await this.$request("/login/status");
            console.log(res);
        }
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
/**二级菜单 */
header.el-header{
    height:40px !important;
}
ul.el-menu--horizontal.el-menu{
    margin:0;
    height:40px;
    background:#B50901; 
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    min-width:700px;
}
/**菜单栏里的每一项 */
.el-menu--horizontal>.el-menu-item{
    height:30px;
    display: block;
    line-height:30px;
    margin : 0 30px;
    color:white;
    align-self: center;
    text-align: center;
    border-radius:10px;
    

}

.el-menu--horizontal>.el-menu-item:hover{
    background-color:#900702;
    color:#fff;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border:none;
    background-color:#900702;

}
</style>