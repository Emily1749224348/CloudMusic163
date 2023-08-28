<template>
    <div id="header">
        <el-menu mode='horizontal' :router=true default-active="/discover" :unique-opened=true>
            <el-menu-item index="/">
               发现音乐
               <el-submenu index="/discover">

                    <el-menu-item index="/discover">推荐</el-menu-item>
                    <el-menu-item index="/discover/toplist">排行榜</el-menu-item>
                    <el-menu-item index="/discover/playlist">歌单</el-menu-item>
                    <el-menu-item index="/discover/djradio">主播电台</el-menu-item>
                    <el-menu-item index="/discover/artist">歌手</el-menu-item>
                    <el-menu-item index="/discover/album">新碟上架</el-menu-item>
                           
               </el-submenu>
            </el-menu-item>
            <el-menu-item index="/my">
                我的音乐
            </el-menu-item>
            <el-menu-item index="/friend">
                关注
            </el-menu-item>
            <el-menu-item index="/store">
                商城
            </el-menu-item>
            <el-menu-item index="/musician">
                音乐人
            </el-menu-item>
            <el-menu-item index="/addSong">
                云推歌
            </el-menu-item>
            <el-menu-item index="/download">
                下载客户端
            </el-menu-item>
            <div class="searchBox">
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="searchText">
             </el-input>
            </div>
        </el-menu>
        
    </div>    
</template>
<script>
// import login from "./login/login.vue"
// let Apiurl  = this.$store.state.CloudMusicApi;
export default{
    name:"header-bar",
    components:{
        // login,
    },
    data(){
        return {
           searchText:"",
        }
    },
    created(){
       
    }

}
</script>
<style scoped>
*{
    list-style-type: none;
    text-decoration:none;
}
#header{
    display:flex;
    flex-flow:row nowrap;
    align-items: center;
}
.el-menu , .searchBox{
    display:inline-block;
}
</style>