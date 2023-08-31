<template>
    <div id="userHome">
       <keep-alive>
       <el-container direction="vertical">
    <div class="header">
            <img :src="userInfo.avatarUrl" width="100px" height="100px"> 
        <el-descriptions :title="userInfo.nickname" :column="2" size="medium" width="400px" font-size="24px">
            <!-- <el-descriptions-item label="用户名">{{ userInfo.nickname }} </el-descriptions-item> -->
            <el-descriptions-item label="个人介绍">{{ userInfo.signature }}</el-descriptions-item>
            <el-descriptions-item label="等级">Lv{{ userDetail.level }} </el-descriptions-item>
            <el-descriptions-item label="动态">{{ userInfo.eventCount }}</el-descriptions-item>
            <el-descriptions-item label="关注">{{ userInfo.follows }}</el-descriptions-item>
            <el-descriptions-item label="粉丝">{{ userInfo.followeds }}</el-descriptions-item>
        </el-descriptions>
           
            
    </div>
    <div>
        <div class="djradio part">
            <h3>我创建的电台({{ userSubcount.createDjRadioCount }})</h3>
          <el-divider></el-divider>
            <el-row :gutter="10"  
            v-for="(item,index) in createdDjRadio"
             :key="index">
                <el-col :span="6"><img :src="item.intervenePicUrl"  width="40" height="40"> </el-col> 
                <el-col :span="8" class="names">{{ item.name }}</el-col>  
                <el-col :span="6">订阅 {{ item.subCount }} 次</el-col>
                <el-col :span="2">{{ item.programCount }} 期</el-col>
            </el-row>
        </div>
        <div class="part">
            <h3>听歌排行</h3>
            <el-divider></el-divider>
            <el-row :gutter="10" width="100%"  class="records"
            v-for="(item,index) in playRecord" :key="index" 
           >
            <el-col :span="10" class="name songName" style="width:250px;" @click="playMusic(item)">{{ item.song.name }}</el-col>
            <el-col :span="6"  style="{color:gray}" class="name" :offset="2"> -{{ item.song.ar[0].name }}</el-col><!--singer-->
            <el-col :span="6" >{{ item.playCount }}</el-col>
            <el-col :span="2" ><i @click.prevent="playMusic(item)" class="el-icon-video-play"></i></el-col>
            </el-row>
        </div>
        <div class="part">
            <h3>我创建的歌单({{ userSubcount.createdPlaylistCount}})</h3>
            <el-divider></el-divider>
            <el-card class="cards" :body-style="{ padding: '0px' }"  shadow="hover" 
            v-for="(item,index) in createdPlaylist" :key="index" >
                <img :src="item.coverImgUrl" class="image">
                <div style="padding: 14px;display:flex;flex-flow:nowrap column;">
                    <div class="names playlist">{{ item.name }}</div>
                    <div class="bottom clearfix">
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="part">
            <h3>我收藏的歌单({{ userSubcount.subPlaylistCount  }}) </h3>
            <el-divider></el-divider>
            <el-card class="cards" :body-style="{ padding: '0px' }"  shadow="hover" 
            v-for="(item,index) in collectPlaylist" :key="index" >
                <img :src="item.coverImgUrl" class="image">
                <div style="padding: 14px;display:flex;flex-flow:nowrap column;">
                    <div class="names playlist"> {{ item.name }}</div>
                    <div class="bottom clearfix">
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
       </el-container>
       </keep-alive> 
    </div>
</template>
<script>
// import { ElDivider } from "element-ui/types/divider";
import {getUserDetail ,getUserSubcount,
     getUserPlaylist,getUserFollows,
     getUserEvent,getUserFolloweds,
     getUserRecord, getUserDj,getCreatedDjRadio,
     getMusicUrl} from "../../../../network/server"
//深克隆
import {deepClone} from "../../../../plugins/utils" 

export default{
    name: "home",
    data() {
        return {
            userId: '',
            userDetail: {},
            userInfo: {},
            userSubcount: {},
            createdDjRadio: [],
            createdPlaylist: [],
            collectPlaylist: [],
            playRecord: [],
            playlist: [],
        };
    },
    methods: {
        async init() {
            await this.getUerDetail();
            await this.getUserSubcount();
            let dj = await this.getCreatedDjRadio();
            await console.log("createdDjRadio");
            await console.log(dj);
            this.createdDjRadio = await dj.data.djRadios;
            let record = await this.getUserRecord();
            await console.log("record");
            await console.log(record);
            this.playRecord = record.data.allData.slice(0, 10);
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
            return getUserPlaylist({ uid: this.userId, limit: 10, offset: 1 });
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
        }
    },
    async created() {
        this.userId = await this.$route.query.id;
        await this.init();
        await console.log("user detail");
        await console.log(this.userDetail);
        await console.log("userInfo");
        await console.log(this.userInfo);
        await console.log("userSubcount");
        await console.log(this.userSubcount);
    },

    watch: {},
    computed: {},
    components: {  }
}
</script>
<style>
.header{
    display:inline-flex;

}

.el-descriptions{
    margin-left:10px;
    width:450px;
}

div.part{
    margin-top:50px;
    user-select: none;
}
.names{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis ;
}
.names.playlist{
    width:130px;
    overflow: hidden;
    text-overflow: ellipsis;
    height:20px;
}

.cards{
    width:150px;
    height:230px;
    display:inline-block;
    margin-left:10px;
}
.records .el-col{
    height :20px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
.bottom {
    margin-top: 13px;
    line-height: 12px;
  }

.button {
    padding: 0;
    float: right;
  }

.image {
    width: 100%;
    display: block;
  }
</style>