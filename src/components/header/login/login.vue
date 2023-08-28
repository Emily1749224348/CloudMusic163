<template>
    <div id="login">
       
       <el-tabs type="cards" stretch>
        <el-tab-pane label="二维码登录" lazy
        v-on:getUserInfo="getUserInfo">
           <qr-code-login/>
        </el-tab-pane>
        <el-tab-pane label="手机验证码登录" lazy>
            <phone-login/>
        </el-tab-pane>
       </el-tabs>
    </div>
</template>
<script>

import qrCodeLogin from "./qrCodeLogin.vue"
import phoneLogin from "./phoneLogin.vue"

export default{
    name:"login",
    components:{
        qrCodeLogin,phoneLogin,
    },
    data(){
        return {
         
           
        }
    },
    methods:{
        //获取用户数据，将二维码登录组件传上来的数据继续往上传
       getUserInfo(val){
        this.$store.state.userInfo = val;
        this.$emit('getUserInfo',val)
       }
        
    },
    
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