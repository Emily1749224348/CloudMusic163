<template>
  <div class="model" >
   此功能尚未开发
    
  </div>
</template>
<script>
// import qrCode from "../../../views/111.vue"

export default{
name:"phoneLogin",
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