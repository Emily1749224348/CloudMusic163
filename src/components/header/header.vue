<template>
    <div id="header">
        <nav class="navigator">
            <ul >
                <li class="li"><router-link to="/discover" >发现音乐</router-link>  </li>
                <li class="li"><router-link to="/my" exact>我的音乐</router-link> </li>
                <li class="li"><router-link to="/friend" exact>关注</router-link> </li>
                <li class="li"><router-link to="/store" exact>商城</router-link> </li>
                <li class="li"><router-link to="/musician" exact>音乐人</router-link> </li>
                <li class="li"><router-link to="/addSong" exact>云推歌</router-link> </li>
                <li class="li"><router-link to="/download" exact>下载客户端</router-link> </li>
            </ul>
        </nav>
        <div class="searchBox">
             <input type="text">
        </div>
       <login class="login"></login>

        <!-- <button class="LoginButton">登录</button> -->
        <!-- <img class="loginImg" name="login_img" v-bind:src="headSculpture" alt="denglu"> -->
    </div>
</template>
<script>
import login from "./login/login.vue"
// let Apiurl  = this.$store.state.CloudMusicApi;
export default{
    name:"el-header",
    components:{
        login,
    },
    data(){
        return {
            isLogin:false,//用户是否登录
            userdata:{

            },
            headSculpture:"../../../static/user.png",
            
            Apiurl  : this.$store.state.CloudMusicApi
        }
    },
    created(){
        console.log(this.$store.state.isLogin);
        this.$axios({
            method:"get",
            url:`${this.Apiurl}/login/status`,
            // 跨域问题处理 
            // header:"Access-Control-Allow-Origin: *",
        // header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        // header('Access-Control-Allow-Headers:x-requested-with,content-type');

        })
        .then(res=>{
            console.log("获取登录状态")
            console.log(res);
            //this.$store.state.user.account = res.data.account;
            // localStorage.setItem("userData",JSON.stringify(res.data.account));
            // return 
        })
        .then(()=>{
           this.$axios({
             method:"get",
             url:this.Apiurl+'/user/account',
             xhrFields:{withCredentials:true},
             
           }) 
           .then(res=>{
            console.log("获取用户账户");
            console.log(res);
           })
        })
        .then(res=>{
            console.log(res);
        })
    }

}
</script>
<style scoped>
*{
    list-style-type: none;
    text-decoration: none;
   
}
#header{
    display:flex;
    flex-flow: row nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:15vh;
    width:100vw;
    border-bottom: 2px crimson solid;
    margin-bottom:0;
 
}
/* 
nav,input,button,img{
  display: inline-block;
  flex-wrap:nowrap;
} */
.Login, .navigator, .searchBox{
    display:inline-block;
    position:relative;
    z-index: 0;
}
/*          -----        导航栏               */
.navigator{
    flex-flow:nowrap row;
    list-style-type:none;
    text-align: center;
    align-items: center;
    margin: 0;
    white-space:nowrap;
 }
 li.li{
    display:inline-block;
    margin:0 10px;
    white-space: normal;
 }
 a{
    color:black;
    text-decoration:none;
    padding:12px;
    border-radius: 5px;
 }
 /* nav{
    margin-left:60px;
    align-items: center;
    padding: 30px 0;
    margin-bottom: 40px;
 } */
a.router-link-active{
    background-color:crimson;
    color:#fff;
 }

/**导航栏未被选中 */

  /**导航栏活跃 */


/**                导  航栏     结束                       */

/*输入 搜索框 */
input[type="text"]{
    width:150px;
    height:26px;
    outline-style: none;
    border-radius:10px;
    border:gray 2px solid;
    background:#fff;
}
input[type="text"]:focus{
    border: 2px crimson solid;
}
.searchBox{
    margin:auto 10px;

}



/**登录按钮 */
/* .LoginButton{
    width:50px;
    height:26px;
    text-align: center;
    justify-content: center;
    align-items:center;
    border:crimson 2px solid;
    color:crimson;
    background-color:white;
    border-radius:10px;
} */

.login{
    justify-content: center;
}

/**     登录头像 */
img[name="login_img"]{
    width:40px;
    height:40px;
}
</style>