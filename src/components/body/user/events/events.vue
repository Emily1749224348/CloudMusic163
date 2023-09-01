<template>
    <div id="events">
        <el-page-header @back="goBack" content="我的动态"></el-page-header>
        <el-divider></el-divider>
        <div v-for="(item,index) in events" class="part" :key="index">
            <h3 class="title">{{ item.msg }}</h3>
            <!-- 电台 -->
            <div v-if="item.program" class="item">
                <img width="50px" :src="item.program.blurCoverUrl">
                <span>{{ item.program.name }}</span>
            </div>
            <div v-if="item.song" class="item">
                <img width="50px" :src="item.song.album.picUrl">
                <span>{{ item.song.name }}</span>
            </div>
            <el-divider></el-divider>
        </div>
    </div>
</template>
<script>
export default{
    name:"events",
    data(){
        return{
            userId:"",
            events:[],
        }
    },
    methods:{
        goBack(){
            this.$router.push({path:"/user/home",query:{id:this.$store.state.userInfo.userId}});
        }
    },
    async created(){
        this.userId = this.$route.query.id;
        let result = await this.$request("/user/event",{uid:this.userId});
        result=result.data.events;
        for(var item of result){
            this.events.push(JSON.parse(item.json));
        }
        // console.log("this.events");
        // console.log(this.events);
    }
}
</script>
<style>

.part{
    margin-left: 100px;
    width:800px;
}
.title{
    font-weight: 400;
    width:500px;
    
}
.item{
    display:flex;
    align-items: center;
}
.item span{
    display: inline-block;
    font-weight:300;
    color:gray;
    width:300px;
    margin-left:10px;
}
</style>