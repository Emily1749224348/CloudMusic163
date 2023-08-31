<template>
    <div id="body">
        <el-container>
            <el-main>
               <router-view :key="$route.fullPath" class="routerView"></router-view> 
               <el-button @click="getUserInfo">获取登录状态</el-button>
            </el-main>
        </el-container>
    </div>
</template>
<script>
// import recommend from "../discover/recommend/recommend.vue"

export default{
    name:"el-body",
    component:{
        
    },
    methods:{
        getUserInfo(){
            let res  = this.$request("/login/status");
            console.log(res);
        }
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}


</style>