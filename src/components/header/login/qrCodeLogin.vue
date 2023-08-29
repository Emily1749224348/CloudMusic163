<template>
  <div class="model" >
    
    <img :src="qrCodeImg" width="120px">
  </div>
</template>
<script>
import {getTimeStamp} from "../../../plugins/utils"
import {request} from "../../../network/request"

export default{
    name:"qrCodeLogin",
    props:{
        showModel:Boolean,
    },
    data(){
        return{
            Apiurl:this.$store.state.CloudMusicApi,
            result:"",
            key:"",//二维码的key
            qrCodeImg:"",//二维码图片base46
            qrState:{},//二维码状态
            timer:null,
        }
    },
    created(){
        this.init();
    },
    methods:{
        // 二维码登录流程：生成key => 根据key生成二维码 => 定时获取二维码接口状态
        //二维码丝滑小连招
        async init(){
      
        await this.getQrCodeKey();
        await this.getQrCode();
        await this.checkQrCode();            
          
        },
                
        //拿二维码key
        async getQrCodeKey(){
            let res = await request("/login/qr/key");
            
            this.key = res.data.data.unikey;
        },

        //拿二维码
        async getQrCode(){
            let res = await request("/login/qr/create",{key:this.key,qrimg:true,timestamp:getTimeStamp()});
            this.qrCodeImg = res.data.data.qrimg;
        },

        //检查二维码状态
        async checkQrCode(){
           this.timer = setInterval(async()=>{
            //定时器已被清空或已处于登录状态 则不想下执行
            if(!this.timer || this.$store.state.isLogin ) return;
            let res = await request("/login/qr/check",{key:this.key, timestamp:getTimeStamp() })
            //二维码过期
            if(res.data.code===800){
                this.clearChecker();
                this.init();
            } else if(res.data.code  === 803){
                //登录成功！
                this.clearChecker();
                //查询账户信息并储存
                this.getAccountInfo();
            }
           },2000)
        },

        //获取账户信息
        async getAccountInfo(){
            // let res = request("/user/account");
           /* if(res.data.code == 200){
                window.localStorage.setItem("userId",res.data.profile.userId);
                //向外界传递事件和用户账号信息
                this.$emit('getUserInfo',res.data.profile); 
                console.log("用户账号信息如下")
                console.log(res.data);
                this.$message.success("登录成功！");
                //把账户信息传进  store里
                this.$store.commit("updataLoginState",true);
            }*/
            let res =await this.$checkLogin();
            // res.catch("获取二维码失败");
            if(res){
                this.$updateUserInfo(res);
            }
            console.log(res);
        },

        //清除定时器
        clearChecker(){
            console.log("清除定时器");
            clearInterval(this.timer);
            this.timer = null;
        }
    },

    beforeDestroy(){
        this.clearChecker();
    },
    watch:{
    },
    component:{
        // qrCode,
    },
    computed:{
        
    }
}
</script>

<style>
.model{
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>