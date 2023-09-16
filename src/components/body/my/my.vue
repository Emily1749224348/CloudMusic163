<template>
    <div id="my">
        <el-container v-if="this.$store.state.isLogin">
            <el-aside width="200px">
                <el-collapse>
                    <el-collapse-item title="创建歌单">
                        <div class="playlist_name"  @click="changeTarget(item.id)" v-for="(item,index) in createdPlaylist"
                        :key="index">
                        {{ item.name }}
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="收藏歌单">
                        <div class="playlist_name"  @click="changeTarget(item.id)" v-for="(item,index) in collectPlaylist"
                        :key="index">{{ item.name }}</div>
                    </el-collapse-item>
                    <el-collapse-item title="电台">
                        <div class="playlist_name" @click="changeTarget(item.id)" 
                        v-for="(item,index) in createdDjRadio">
                        {{ item.name }}</div>
                    </el-collapse-item>
                </el-collapse>
            </el-aside>
            <el-main>
                <div v-if="target">

                    <img width="200" :src="target.coverImgUrl">
                    <h2>{{ target.name }}</h2>
                    <p>简介：{{ target.description }}</p>
                    <p>标签：{{ target.tags }}</p>

                </div>
          <el-row :gutter="10" width="100%"  class="records"
 
            v-for="(item,index) in tracks" :key="index" 
           >
            <el-col :span="10" class="name songName" style="width:250px;"
             @click="playMusic(item)">{{ item.name }}</el-col>
            <el-col :span="6"  style="{color:gray}" class="name" :offset="2"> 
                -{{ item.ar[0].name }}</el-col><!--singer-->
            
            <el-col :span="2" ><i @click.prevent="playMusic(item)" class="el-icon-video-play"></i></el-col>
            </el-row>
            </el-main>
        </el-container>
        <el-empty v-else description="请先登录"></el-empty>
    ...    
    </div>
</template>
<script>

import {getUserDetail ,getUserSubcount,
     getUserPlaylist,getUserFollows,
     getUserEvent,getUserFolloweds,
     getUserRecord, getUserDj,getCreatedDjRadio,
     getMusicUrl} from "../../../network/server"
//深克隆
// import {deepClone} from "../../../../plugins/utils" 

export default{
    name: "my",
    data() {
        return {
            userId: this.$store.state.userId,
            userDetail: {},
            userInfo: {},
            userSubcount: {},
            createdDjRadio: [],
            createdPlaylist: [],
            collectPlaylist: [],
            playRecord: [],
            playlist: [],
            target:{      },
            tracks:[],
        };
    },
    methods: {
        async init() {
           
            await this.getUserSubcount();
            let dj = await this.getCreatedDjRadio();
            await console.log("createdDjRadio");
            await console.log(dj);
            this.createdDjRadio = await dj.data.djRadios;
            /**获取播放记录 */
            // let record = await this.getUserRecord();
            // await console.log("record");
            // await console.log(record);
            // this.playRecord = record.data.allData.slice(0, 10);
            await this.updatePlaylist();
        },
        async getUerDetail() {
            let res = await getUserDetail({ uid: this.userId });
            this.userDetail = res.data;
            this.userInfo = res.data.profile;
        },
        async getUserSubcount() {
            let res = await getUserSubcount();
            this.userSubcount = res.data;
        },
        async getUserPlaylist() {
            return getUserPlaylist({ uid: this.userId });
        },
        async getUserDj() {
            return getUserDj({ uid: this.userId });
        },
        async getUserRecord() {
            return getUserRecord({ uid: this.userId, type: 0 });
        },
        async getCreatedDjRadio() {
            return getCreatedDjRadio({ uid: this.userId });
        },
        //分类好收藏歌单和创建歌单
        async updatePlaylist() {
            let playlist = await this.getUserPlaylist();
            await console.log("playlist");
            await console.log(playlist);
            this.playlist = await playlist.data.playlist;
            await console.log("this.playlist");
            await console.log(this.playlist);
            this.createdPlaylist = await this.playlist.filter(item => {
                return item.subscribed == false;
            });
            await console.log("this.createdPlaylist");
            await console.log(this.createdPlaylist);
            this.collectPlaylist = await this.playlist.filter(item => {
                return item.subscribed == true;
            });
            await console.log("this.collectPlaylist");
            await console.log(this.collectPlaylist);
        },
        //获取音乐url
        async getMusicUrl(val){
            return getMusicUrl(val);
        },
        //playMusic
        async playMusic(item){
            this.$store.commit('updateMusicId',item.song.id)
            this.$store.state.musicList = [];
            this.$store.state.musicList.push(item.song);
            // console.log("this.$store.state.musicList");
        },
        async changeTarget(val){
           let result = await this.$request("/playlist/detail",{id:val});
           console.log(result);
           this.target = result.data.playlist;
           let result2 = await this.$request("/playlist/track/all",{id:val})
           console.log("reuslt2");
           console.log(result2);
           this.tracks = result2.data.songs;
        },
        async changeDj(val){

        },
        //播放音乐
        async playMusic(item){
            this.$store.commit('updateMusicId',item.id)
            this.$store.state.musicList = [];
            this.$store.state.musicList.push(item);
            // console.log("this.$store.state.musicList");
        },
        
        
    },
    async created() {
        this.userId = this.$store.state.userInfo.userId;
        console.log(this.userId);
        await this.init();
        await console.log("user detail");
        await console.log(this.userDetail);
        await console.log("userInfo");
        await console.log(this.userInfo);
        await console.log("userSubcount");
        await console.log(this.userSubcount);
    },
    computed:{
        
    }
}

</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
div.playlist_name{
    width:100%;
    height:20px;
    margin:5px 0;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    cursor:pointer;
}
div.playlist_name:hover{
    background:crimson;
    color:white;
}
</style>