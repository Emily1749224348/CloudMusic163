<template>
    <div id="body">
        <el-container>
           
            <!-- <el-header>
                <el-menu mode="horizontal" :router=true>
                    <el-menu-item index="/discover">推荐</el-menu-item>
                    <el-menu-item index="/discover/toplist">排行榜</el-menu-item>
                    <el-menu-item index="/discover/playlist">歌单</el-menu-item>
                    <el-menu-item index="/discover/djradio">主播电台</el-menu-item>
                    <el-menu-item index="/discover/artist">歌手</el-menu-item>
                    <el-menu-item index="/discover/album">新碟上架</el-menu-item> -->
                <!-- <ul class="second-navigator">
                <li class="sec_nav_li"><router-link to="/discover" exact>推荐</router-link> </li>
                <li class="sec_nav_li"><router-link to="/discover/toplist" exact> 排行榜</router-link></li>
                <li class="sec_nav_li"><router-link to="/discover/playlist" exact>歌单</router-link> </li>
                <li class="sec_nav_li"><router-link to="/discover/djradio" exact>主播电台</router-link> </li>
                <li class="sec_nav_li"><router-link to="/discover/artist" exact>歌手</router-link> </li>
                <li class="sec_nav_li"><router-link to="/discover/album" exact>新碟上架</router-link> </li>
                </ul> -->
            <!-- </el-menu>  
            </el-header> -->
           
            <el-main>
               <router-view></router-view> 
            </el-main>
        </el-container>
        
        
    </div>
</template>
<script>
// import recommend from "../discover/recommend/recommend.vue"

export default{
    name:"",
    component:{
        
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.second-navigator{
    display: inline-flex;
    width:100vw;
    justify-content: center;
    padding:4px;
    box-sizing: border-box;
    justify-content: center;
    width:100%;
    height:40px;
    margin-top:0;
    background:crimson;
}
.sec_nav_li{
    display:inline-flex;
    width:100px;
    height:100%;
    justify-content: center;
    align-items: center;
   
}
a{
    display: inline-flex;
    align-items: center;
    text-decoration:none;
    color:white;
  
}
a.router-link-active{
   color:black;

}
</style>