<template>
  <div class="model" v-if="showModel">
    <div class="mask">123</div>
    <div class="model-dialog">
      <div class="model-header">
        <span>二维码登录</span>
        <button href="#" class="icon-close" @click="$emit('close-window','failed')">X</button>
      </div>
      <div class="model-body">
        <button class="btn" @click="getQrCode">点我获取二维码</button>
        <img :src="qrCodeUrl" alt="请重新获取二维码" :title="qrStateCode" @click="getState">
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
    name:"qrCodeLoginVue",
    props:{
        showModel:Boolean,
    },
    data(){
        return{
            Apiurl:this.$store.state.CloudMusicApi,
            result:"",
            key:"",//二维码的key
            qrCodeUrl:"",//二维码图片base46
            qrState:{}//二维码状态
        }
    },
    methods:{
        //拿二维码
        getQrCode(){
            this.$axios({
		        method: 'get',
		        url: `${this.Apiurl}/login/qr/key`,//拿key
    	        
	        }).then(res=>{
		        console.log(res.data);
                console.log("key = "+res.data.data.unikey);
                this.key=res.data.data.unikey;
                return this.key
	        },err=>{
		        console.log(err);
	        })
            .then(key=>{//拿二维码
                this.$axios({
                    method:"get",
                    url:`${this.Apiurl}/login/qr/create?key=${this.key}&qrimg=${this.key}`,

                })
                .then(res=>{//拿二维码状态
                    console.log(res);
                    this.qrCodeUrl = res.data.data.qrimg;
                    return res;
                })
            })
            .then(()=>{
                this.$axios({
                    method:"get",
                    url:`${this.Apiurl}/login/qr/check?key=${this.key}`
                })
                .then(res=>{
                    console.log("二维码状态如下");
                    console.log(res);
                    this.qrState = res.data;
                })
            })
            

        },
        //检查二维码状态
        getState(){
           
            this.$axios({
                method:"get",
                url:`${this.Apiurl}/login/qr/check?key=${this.key}`,
            })
            .then(res=>{
                this.qrState = res.data;
                return res.data.code;
            })
            .then(res=>{
                
            })
        },
        //完成登录
        checkLogin(){
             this.$axios({
                method:"get",
                url:`${this.Apiurl}/login/qr/check?key=${this.key}`,
            })
            .then(res=>{
                this.qrState = res.data;
                this.result=res===803?"success":"failed";
                return res.data.code;
            })
            .then(res=>{//存储到localStorage
                if(res===803){
                    // localStorage.setItem("CloudMusicUerInfo",this.qrState.cookie);
                // localStorage.setItem("usercookie",JSON.stringify(this.qrState.cookie));
                // console.log("cookie已存到本地"+this.qrState.cookie);
                }
            })
            .then(res=>{
                // if(res===803){
                //     this.result="success";
                // }else {
                //     this.result="failed";
                // }
                
                this.$emit('close-window',this.result);
            })
            
        }
    },
    
    watch:{
    },
    component:{
        // qrCode,
    },
    computed:{
        qrStateCode(){
            switch(this.qrState.code){
                case 800:
                    return "二维码已过期";
                    break;
                case 801:
                    return "等待扫码";
                    break;
                case 802:
                    return "等待确认";
                    break;
                case 803:
                    return "登录成功";
                    break;
                default:
                    return "null";
               }
            // if(===800){
                
            // }else if(this.qrState.code===801){
                
            // }
            // else if(this.qrState.code===802){
                
            // }else if(this.qrState.code===803){
                
            // }else{
                
            // }
        }
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
  height: 150px;
  line-height: 150px;
  font-size: 28px;
  text-align: center;
  background-color: #fff;
}
button:hover{
    cursor: pointer;
}
.model-body>button.btn{
    float:left;
    width:200px;
    height:30px;
    background-color:#fff;
    border:black 1px solid;
    color:black;
}
.model-body>button.btn:hover{
    background-color:rgb(180,103,103);
    color:#f5f5f5;
}
.model-body>img{
    position:relative;
    top:10%;
    left:38%;
    width:130px;
    height:130px;

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