<template>
    <div>
         展示搜索结果
         {{ $route.query.keywords }}
        <div class="part" v-if="musicList">
            <h3>搜索结果</h3>
            <el-divider></el-divider>
            <el-row :gutter="10" class="musicList"
            v-for="(item,index) in musicList" :key="index" 
           >
            <el-col :span="10" class="name songName" style="width:250px;" @click="playMusic(item)">{{ item.name }}</el-col>
            <el-col :span="5"  style="color:gray" class="name" :offset="2"> -{{ item.ar[0].name }}</el-col><!--singer-->
            <el-col :span="2" :offset="4" ><i @click.prevent="playMusic(item)" class="el-icon-video-play"></i></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default{
    name:'search',
    data(){
        return{
            searchText:"",
            musicList:[],
            // 控制翻页
            offset:1,
            //能搜索到的所有歌曲数
            total:"",
        }
        

    },

    component:{

    },
    methods:{
        async search(){
            let result = await this.$request("/cloudsearch",{keywords:this.searchText});
            console.log("result");
            console.log(result);
            this.musicList = result.data.result.songs;
            this.total = result.data.result.songCount;
        },
        //playMusic
        playMusic(item){
            this.$store.commit('updateMusicId',item.id)
            this.$store.state.musicList = [item];
        
            // console.log("this.$store.state.musicList");
        }
    },
    async created(){
        this.searchText = await this.$route.query.keywords;
        await this.search();
    },
}
</script>
<style>

.el-row.musicList{
    width:100%;
    height:25px;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height:25px;
}
.musicList>.el-col{
    min-width: 150px;
    max-width: 300px;
    overflow: hidden;
    text-overflow:ellipsis;
}
</style>