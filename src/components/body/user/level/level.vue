<template>
    <div v-if="userLevelData">
        <div>
        <h2>当前等级 <span style="color:crimson">Lv{{userLevelData.level  }}</span></h2>    
        </div>
        <div>
            <h2>当前等级特权</h2>
            <el-row v-for="(value,index) in info" :key="index">
            <h3> {{ value }}</h3>   
            </el-row>
        </div>
        <h4> 
            nextLoginCount : {{ userLevelData.nextLoginCount }}
        </h4>
        <h4>nextPlayCount：{{ userLevelData.nextPlayCount }}</h4>
        <h4>nowLoginCount：{{ userLevelData.nowLoginCount }}</h4>
        <h4>nowPlayCount：{{ userLevelData.nowPlayCount }}</h4>
    </div>
</template>
<script>
export default{
    name:"level",
    data(){
        return{
            userLevelData:{},
        }
    },
    async created(){
        let result = await this.$request("/user/level");
        console.log(result);
        if(result.data.code===200){
            this.userLevelData = result.data.data;
        }
        else{
            this.$message.error("获取用户信息失败");
        }
    },
    computed:{
        info(){
            let result = this.userLevelData.info;
            result = result.split("$");
            return result; 
        }
    }
}
</script>
<style>

</style>