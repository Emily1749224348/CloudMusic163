<template>
    <div id="pane">
            <el-dropdown>
                <span><el-avatar :src="userInfo.avatarUrl"></el-avatar>  </span>
                <el-dropdown-menu slot="dropdown" 
                split-button
                :split-button="true" 
                >
                    <el-dropdown-item @click.native="goToUserHome">我的主页</el-dropdown-item>
                    <el-dropdown-item @click.native="goToMsg">我的消息</el-dropdown-item>
                    <el-dropdown-item @click.native="goToLevel">我的等级</el-dropdown-item>
                    <el-dropdown-item @click.native="goToVIP">VIP会员</el-dropdown-item>
                    <el-dropdown-item @click.native="goToUpdate">个人设置</el-dropdown-item>
                    <el-dropdown-item>实名认证</el-dropdown-item>
                    <el-dropdown-item>主播入口</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            
    </div>
</template>
<script>
import {getUserDetail, getUser} from "../../../network/server"

export default{
    name:"user-pane",

    data(){
        return {
            userId:this.$store.state.userInfo.userId,
            userInfo:{},
            userDetail:{},
            userAccount:{},
            UserSubcount:{},

        }
    },
    async created(){
        // await console.log(this.userInfo);
        // this.userDetail = await this.getUserDetail();
        // console.log("userDetail");
        // console.log(this.userDetail);

        // this.userAccount = await this.getUserAccount();
        // console.log("userAccount");
        // console.log(this.userAccount);

        // this.userSubcount = await this.getUserSubcount();
        // console.log("userSubcount");
        // console.log(this.userSubcount);
        let res = await getUserDetail({uid:this.userId}); 
        this.userInfo = res.data.profile;

    },
    methods:{
        //获取用户详情
        async getUserDetail(){
//          /user/detail?uid=
            return this.$request("/user/detail",{uid:this.userInfo.userId})
        },

        //获取账号信息
        async getUserAccount(){
//           /user/account
            return this.$request("/user/account");
        },
        //获取用户信息，歌单，收藏,mv,dj数量
        async getUserSubcount(){
            //  /user/subcount
            return this.$request("/user/subcount");
       },
       handleCommand(val){
        console.log(val);
        switch(val){

            case "goToUpdate":
                this.goToUpdate();
                return;
            case "goToUserHome":
                this.goToUserHome();
                return;
            case "goToLevel":
                this.goToLevel();
                return 
            default:
                this.$message.error("ERROR!!! 此功能尚未开发，敬请期待");
        }
       },
       goToUpdate(){
        this.$router.push({path:"/user/update"});
       },
       goToLevel(){
        this.$router.push({path:"user/level"})
       },
       goToUserHome(){
         this.$router.push({path:"/user/home",query:{id:this.userId}})
       },
       goToMsg(){
        this.$router.push({path:"/user/msg"});
       },
       goToVIP(){
        this.$router.push({path:"/user/VIP"});
       }
       

    },
    computed:{
       userHome(){return "/user/home"+"?id="+this.userId}
    }
}
</script>
<style>
a{
    text-decoration: none;
    color:black;
}
</style>