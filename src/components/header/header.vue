<template>
    <div id="header">
        <nav>
            <ul class="navigator">
                <li class="li"><router-link to="/discover" >发现音乐</router-link>  </li>
                <li class="li"><router-link to="/my" exact>我的音乐</router-link> </li>
                <li class="li"><router-link to="/friend" exact>关注</router-link> </li>
                <li class="li"><router-link to="/store" exact>商城</router-link> </li>
                <li class="li"><router-link to="/musician" exact>音乐人</router-link> </li>
                <li class="li"><router-link to="/addSong" exact>云推歌</router-link> </li>
                <li class="li"><router-link to="/download" exact>下载客户端</router-link> </li>
            </ul>
        </nav>
        <input type="text">

        <button class="LoginButton">登录</button>
        <img name="login_img" v-bind:src="headSculpture" alt="denglu">
    </div>
</template>
<script>
export default{
    name:"el-header",
    components:{

    },
    data(){
        return {
            isLogin:false,//用户是否登录
            userdata:{

            },
            headSculpture:"../../../static/user.png",
        }
    }
}
</script>
<style scoped>
*{
    list-style-type: none;
    text-decoration: none;
   
}
#header{
    display:block;
    flex-direction: row;
    align-items: center;
    height:15vh;
    width:100vw;
    flex-wrap:nowrap;
    border-bottom: 2px crimson solid;
    margin-bottom:0;
}

nav,input,button,img{
  display: inline-flex;
  flex-wrap:nowrap;
}

/*          -----        导航栏               */
ul.navigator{
    display: inline-flex;
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
 nav{
    margin-left:60px;
    align-items: center;
    padding: 30px 0;
    margin-bottom: 40px;
 }
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
    margin:0 20px;
    outline-style: none;
    border-radius:10px;
    border:gray 2px solid;
}
input[type="text"]:focus{
    border: 2px crimson solid;
}
/**登录按钮 */
.LoginButton{
    width:50px;
    height:26px;
    text-align: center;
    justify-content: center;
    align-items:center;
    border:crimson 2px solid;
    color:crimson;
    background-color:white;
    border-radius:10px;
}

/**     登录头像 */
img[name="login_img"]{
    width:40px;
    height:40px;
    margin-left:30px;
    align-self: baseline;
}
</style>