<template>
    <div id="pane">
            <el-dropdown>
                <span><el-avatar :src="userInfo.avatarUrl"></el-avatar>  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><router-link :to="userHome">我的主页</router-link></el-dropdown-item>
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>我的等级</el-dropdown-item>
                    <el-dropdown-item>VIP会员</el-dropdown-item>
                    <el-dropdown-item>个人设置</el-dropdown-item>
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