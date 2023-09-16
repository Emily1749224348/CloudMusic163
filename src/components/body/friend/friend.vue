<template>
    <div id="friend">
        <el-container v-if="this.$store.state.isLogin">
            我的关注列表
        </el-container>
        <el-empty v-else description="请先登录"></el-empty>
    ...    
    </div>
</template>
<script>
export default{
    name:"friend",
}
</script>
<style scoped>

</style>