<template>
    <div id="userHome">
        user/home?id=88888888
        这是展示用户信息的界面
    </div>
</template>
<script>
export default{
    name:"home",
    data(){
    return {
        userInfo:this.$route.state.userInfo(),

    }},
    methods:{

    }
}
</script>
<style>

</style>
