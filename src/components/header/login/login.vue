<template>
    <div id="login">
       
    <li class="main_item" v-for="(item,index) in menulist" :key="index"
        @mouseover="item.show=!item.show"
        @mouseout="item.show=!item.show">
        <a :href="item.url">{{ item.name }}</a> 
        <ul v-show="item.show">
        <li v-for="(subitem,index) in item.subMenus" :key="index">
            <a :href="subitem.url" @click="subitem.login_method">{{ subitem.name }} </a>
        </li>
        </ul>
    </li>
    <qrCodeLoginVue :showModel="login_methods.qrCodeLoginShow"
    v-on:close-window="closeQrCodeLogin"></qrCodeLoginVue>

    <phoneLoginVue :showModel="login_methods.phoneLoginShow" 
    v-on:close-window="closePhoneLogin"
    ></phoneLoginVue>
    </div>
</template>
<script>
// import {phoneLogin,emailLogin,visitorLogin,logOut} from "./login_methods.js"
// import qrCodeLoginVue from "./qrCodeLogin.vue"
// import phoneLoginVue from "./phoneLogin.vue"

export default{
    name:"login",
    data(){
        return {
          Apiurl:this.$store.state.CloudMusicApi,
           menulist:[
             {
                name:"登录",url:"#",show:false,
                subMenus:[
                    {name:"手机登录", url:"#" ,login_method:this.phoneLogin},
                    {name:"二维码登录",url:"#",login_method:this.qrCodeLogin},
                    {name:"游客登录",url:"#",login_method:this.visitorLogin},
                    {name:"邮箱登录",url:"#",login_method:this.emailLogin},
                    {name:"退出登录",url:"#",login_method:this.logOut},
                ]
             }
           ],
           login_methods:{qrCodeLoginShow:false,phoneLoginShow:false,}
        }
    },
    methods:{
        phoneLogin(){
            this.login_methods.phoneLoginShow = true;
            console.log("手机验证码登录被调用");
        }, 
        closePhoneLogin(val){
            console.log("手机验证码登录"+val);
            
            this.$store.state.isLogin=val==="success"?true:false;
            this.login_methods.phoneLoginShow = false; 
            //请求账号信息
            this.$axios({
                method:"get",
                url:this.Apiurl+"/user/account",
            })
            .then(res=>{
                console.log(res);
            })
        },
        qrCodeLogin(){
            this.login_methods.qrCodeLoginShow = true,
            console.log("二维码登录被调用");
        },
        closeQrCodeLogin(val){
            console.log('二维码登录'+val);
            //把登录状态存入全局变量
            
            this.$store.state.isLogin=val==="success"?true:false;
            this.login_methods.qrCodeLoginShow = false;
        },
        emailLogin(){

        },
        visitorLogin(){},
        logOut(){},
       
        
    },
    components:{
        qrCodeLoginVue,phoneLoginVue,
    }
}
</script>
<style scoped>
*{
    list-style-type: none;
    text-decoration: none;
    color:black;
    /* box-sizing: border-box; */
}
#login > li{
    float:left;
    text-align:center;
    position:relative;
    align-items: center;
}
a{
    box-sizing:border-box;
    text-decoration: none;
    display: block;
    color: #fff;
    width: 120px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    border-width: 1px 0 0 0;
    background: #255f9e;
}
#app li ul{
    position:absolute;
    top:40px;
    font-size:12px;
}

[v-cloak]{
    display:none;
}
</style>