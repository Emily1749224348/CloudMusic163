<template>
<div>
    <keep-alive>
      <h1>个人设置</h1>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="基本设置" name="basic">
        <div v-if="activeName==='basic'">
        <el-form v-model="basicInfo">
            <el-form-item label="昵称">
                <el-input v-model="basicInfo.nickname"></el-input>
            </el-form-item>
            <el-form-item label="介绍">
                <el-input type="textarea" v-model="basicInfo.signature"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="basicInfo.sex">
                 <el-radio label="男"></el-radio>
                 <el-radio label="女"></el-radio>   
                </el-radio-group>
                
            </el-form-item>
            <el-form-item label="出生日期">
                <el-date-picker type="date" v-model="basicInfo.birthday"></el-date-picker>
            </el-form-item>
            <el-form-item label="所在地区" disabled>
                <el-select  disabled v-model="basicInfo.place">
                    <el-option value="重庆"></el-option>
                </el-select>
            </el-form-item>
                <el-button @click="onSubmit">提交</el-button>    
            </el-form>
            
        </div>
        </el-tab-pane>
        <el-tab-pane label="绑定设置" name="binding">2</el-tab-pane>
        <el-tab-pane label="隐私设置" name="private">3</el-tab-pane>
    </el-tabs>   
    </keep-alive>
  
</div>
</template>
<script>
import { getUserDetail } from '../../../../network/server';
import axios from 'axios';
// import vuex from '../store/index';
const AxiosRequest = axios.create({
    baseURL: 'https://api.hanling.space',
    timeout: 30000,
    withCredentials: true,
  });
export default{
    name:"update",
    data(){
        return{
            activeName:"basic",//basic binding private
            basicInfo:{
                nickname:"",
                signature:"",
                birthday:"",
                sex:"",
                place:"",
            },
            bindingInfo:{

            },
            privateInfo:{

            },
            //这里的userDetail不等于userInfo , profile只是其中的一个属性
            userDetail:{ },
            AxiosRequest : axios.create({
                baseURL: this.$store.state.CloudMusicApi,
                timeout: 30000,
                withCredentials: true,
                })

        }
    } ,
    methods:{
        async onSubmit(){
            
            console.log(this.basicInfo);
            let nickname = this.basicInfo.nickname;
            let gender = this.basicInfo.sex=='男'?1:2;
            let signature = this.basicInfo.signature;
            let birthday = this.basicInfo.birthday;
            let params = {
                city:500101,
                nickname:nickname,
                gender:gender,
                signature:signature,
                birthday:birthday,
            };
            //重复昵称检测
            let isDuplicated = await this.$request("nickname/check",{nickname:nickname});
            //重复
            if(isDuplicated.data.duplicated){
                this.$message.error("昵称重复，请另写昵称");
            }
            //
            else{
                let result = await this.AxiosRequest.post("/user/update",params);
                if(result.data.code==200){
                    this.$message("提交成功");
                    this.updateUserInfo();
                }else{
                    this.$message.error("提交失败");
                }
            }
            },//submit函数结束
            //更新store里的用户信息
            async updateUserInfo(){
                let profile = this.$checkLogin();
                this.$store.commit("updateUserInfo",profile);
            }
              
           
        },
        
    
    async created(){
       let result = await getUserDetail({uid:this.$store.state.userInfo.userId});
       this.userDetail = result.data;
    //    console.log(this.userDetail);

        this.basicInfo.nickname = this.userDetail.profile.nickname;
        this.basicInfo.signature = this.userDetail.profile.signature;
        this.basicInfo.sex = this.userDetail.profile.gender==1? '男':'女';
        this.basicInfo.birthday = this.userDetail.profile.birthday;

    }  
}
</script>
<style scoped>
.el-input{
    width:400px;
}
</style>