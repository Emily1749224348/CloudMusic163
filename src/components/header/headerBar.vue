<template>
    <div id="header">
    <el-menu mode='horizontal' :router=true default-active="/discover" :unique-opened=true>
            <el-menu-item index="/discover">
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
       
   </el-menu>
    
   
    <div class="searchBox">
              <input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="searchText"
                @keyup="search($event)">
             
    </div>
    <div class="right">
            <div class="user">
                <!-- 弹出框 -->
                <el-popover  
                v-if="!this.$store.state.isLogin"
                v-model="isPopoverShow"
                placement="bottom"
                
                width="250"
                trigger="hover">
                

            <login v-if="isPopoverShow" v-on:getUserInfo="(val)=>{userInfo=val;isPopoverShow=false}"></login>
            <!-- 下拉菜单 -->
            
            <el-avatar  class="avatar" slot="reference" src="../../../static/user.png"></el-avatar>
                </el-popover>
                <!-- <img :src="userInfo.avatarUrl" slot="reference"> -->
           <user-pane v-else >
           </user-pane> 
            </div>

                <!-- 用户名 -->
            <!-- <div class="userName" v-if="userInfo.nickname">
                    {{ userInfo.nickname }}
                </div> -->
            </div>
    </div>
       
</template>
<script>
import { Avatar } from "element-ui";
import login from "./login/login.vue"
import userPane from "./userPane/userPane.vue"
// let Apiurl  = this.$store.state.CloudMusicApi;
export default{
    name:"header-bar",
    components:{
    login,
    Avatar,userPane,
},
    data(){
        return {
            isLogin:false,
            //用户信息
            
           //是否显示用户头像
           isPopoverShow:false,
           //是否显示热搜数据
           isSearchPopShow:false,
           //热搜列表
           hotSearchList:[],
            //搜索内容
           searchText:"",
           //搜索建议列表
           searchSuggestList:{},
            //是否显示注册框
           isRegisteredShow:false,
        }
    },
    created(){
       this.isLogin=this.$store.state.isLogin;
    },
    watch:{
        
    },
    methods:{
        search(e){
            if(e.keyCode==13){
                console.log(this.searchText)
                this.$router.push({path:"/search?keywords=" + this.searchText})
                this.searchText = "";
            }
        }
    }
    ,
    computed:{
        userInfo(){
            if(this.$store.state.isLogin){
                return this.$store.state.userInfo ;
            }else {
                return {};
            }
        },
        // :{
        //     setter(){
        //        return this.$store.state.isLogin?true:false; 
        //     },
        //     getter(){
        //         return this.$store.state.isLogin;
        //     }
        // },
        avatarImg(){
            return this.$store.state.isLogin?this.userInfo.avatarUrl:"/static/user.png";
        },
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
.avatar{
    user-select: none;
}
.searchBox{
    align-items: center;
    margin:auto 10px;
}
.searchBox>input{
    width:200px;
    height:30px;
    outline: none;
    border-radius:4px;
    border:1px gray solid;
    background-color:#fff;
}
.searchBox>input:focus{
    border:1px crimson solid;
}
</style>