<template>
  <div class="model" v-if="showModel">
    <div class="mask">123</div>
    <div class="model-dialog">
      <div class="model-header">
        <span>手机验证码登录</span>
        <button href="#" class="icon-close" @click="$emit('close-window','failed')">X</button>
      </div>
      <div class="model-body">
        <input type="text" v-model="phone" placeholder="请输入电话号码">
        <button @click="getCaptcha">获取验证码</button>
        <input type="text" v-model="captcha" placeholder="请输入验证码">
      </div>
      <div class="model-footer">
        <button class="btn" @click="checkLogin">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
// import qrCode from "../../../views/111.vue"

export default{
name:"phoneLoginVue",
    props:{
        showModel:Boolean,
    },
    data(){
        return{
            Apiurl:this.$store.state.CloudMusicApi,
            ctcode:86,//国家码  中国
            phone:"",
            captcha:"",
            result:"",

            key:"",//二维码的key
            qrCodeUrl:"",//二维码图片base46
            qrState:{},//二维码状态
            
        }
    },
    methods:{
        //获取验证码
        getCaptcha(){
         
        const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
        if(!reg.test(this.phone)){
            alert("请输入正确的电话号码");
        }else{
            this.$axios({
                methods:"get",
                url:this.Apiurl+'/captcha/sent',
                params:{
                    phone:this.phone,
                },
            })
            console.log("发送请求");
        }

            
        },
        checkLogin(){
            this.$axios({
                method:"get",
                url:this.Apiurl+'/captcha/verify',
                params:{
                    phone:this.phone,
                    captcha:this.captcha,
                },
            })
            .then(res=>{
                console.log("验证环节");
                console.log(res);
                if(res.data.code==200){
                this.$store.state.user.account = res.data.account;
                //把登录数据存入localStorage库
                localStorage.setItem("userData",JSON.stringify(res.data.account));
                this.result = 'success';   
                }else{
                    this.result = 'failed'
                }
             })
             .then(()=>{
                console.log("获取登录状态")
                this.$axios({
                    method:"get",
                    url:this.Apiurl + "/login/status"
                })
                .then((res)=>{
                    console.log(res);
                })
             })
            .then(()=>{
            this.$emit('close-window',this.result)
            });
        }
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

.mask {
  position: fixed;/*这里用固定定位，后面设置动画时才不受影响*/
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(167, 165, 165, 0.486);
  opacity: 0.5;
  z-index: 9;
}
.model-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  width: 600px;
  height: 300px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 10;
}
.model-header {
  position: relative;
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  line-height: 50px;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgb(177, 176, 176);
}
/**------------------------身体-------------- */
.model-body {
  position:relative;
  height: 150px;
  display:flex;
  text-align: center;
  background-color: #fff;
  justify-content: center;
  flex-flow:column nowrap;
}
.model-body>button{
    position:relative;
    top:0;
    left:40%;
    width:90px;
}
.model-body>input[type="text"]{
    position:relative;
    left:10%;
    top:10%;
    width:150px;
    height:25px;
}


/**-------------------脚------------------ */
.model-footer {
  background-color: #f5f5f5;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.btn {
  width: 180px;
  height: 40px;
  border-radius: 8px;
  background-color: rgb(180, 103, 103);
  color: #fff;
  font-size: 18px;
  border: none;
}
.icon-close {
  position: absolute;
  background-color: pink;
  right: 15px;
  top: 16px;
  width: 30px;
  height: 30px;
  z-index: 10;
  background-size: contain;
}

</style>