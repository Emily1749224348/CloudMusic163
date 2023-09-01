<template>
    <div>
        <el-page-header @back="goBack" content="我的粉丝"></el-page-header>
  <div class="follows" v-for="(item,index) in fans" :key="index"> 
            <img :src="item.avatarUrl" width="80px"> 
            <div class="detail">
                <h4>{{ item.nickname }}</h4>
                <span>关注：{{ item.follows }} </span>
                <span>粉丝：{{ item.followeds }}</span>
                <span>动态：{{ item.eventCount }}</span>
                <p>{{ item.signature }}</p>
            </div>
           
        </div>
    </div>
</template>
<script>
export default{
    name:"fans",
    data(){
        return{
            userId:"",
            fans:[],
        }
    },
    async created(){
        this.userId = this.$route.query.id;
        let result = await this.$request("/user/followeds",{uid:this.userId});
        
        console.log(result);
        this.fans = result.data.followeds;
    },
    methods:{
        goBack(){
            this.$router.push({path:"/user/home",query:{id:this.$store.state.userInfo.userId}});
        }
    }
}
</script>
<style>
.follows{
    display:inline-flex;
    width:400px;
    height:80px;
    margin:5px 20px;
}
.detail{
    margin:0 0 0 20px;
    overflow: hidden;
}
.detail p,.detail span{
    color:gray;
    font-weight:400;
    font-size:14px;
}
.detail p{
    width:300px;
    height:20px;
    text-overflow:ellipsis;
    overflow: hidden;
}
</style>