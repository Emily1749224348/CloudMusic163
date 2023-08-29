<template>
    <div id="pane">
            <el-dropdown>
                <span><el-avatar :src="userInfo.avatarUrl"></el-avatar>  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><router-link to="/user/home">我的主页</router-link></el-dropdown-item>
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
export default{
    name:"user-pane",

    data(){
        return {
            userInfo:this.$store.state.userInfo,
        }
    },
    async created(){
        console.log(this.userInfo);
    },
    methods:{
        //获取用户详情
        async getUserDetail(){
//          /user/detail?uid=
        },

        //获取账号信息
        async getUserAccount(){
//           /user/account
        },
        //获取用户信息，歌单，收藏,mv,dj数量
        async getUserSubcount(){
            //  /user/subcount
       }

    }
}
</script>
<style>
a{
    text-decoration: none;
    color:black;
}
</style>