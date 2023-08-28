<template>
  <div class="index">
<el-container>
  <el-header height="80px">
      <header-bar></header-bar>
  </el-header>

  <el-main>
     <router-view class="routerView">

      </router-view> 
  </el-main> 
  <el-footer height="50px">
      <footer-bar></footer-bar>
  </el-footer>

</el-container>

  </div>
</template>

<script>
import headerBar from "./header/headerBar.vue"

import ElBody from "./body/discover/body.vue"

import footerBar from "./footer/footerBar.vue"

import my from "./body/my/my.vue"
import friend from "./body/friend/friend.vue"
import musician from "./body/musician/musician.vue"
import store from "./body/store/store.vue"
import addSong from "./body/add_song/add_song.vue"
import download from "./body/download/download.vue"

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
   headerBar,footerBar,
    my,friend,
    musician,download,addSong,store,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  padding:0;
  margin:0;
}
.el-container{
  margin:0;
  padding:0;
}
.routerView{
  padding:0;
  margin:0;
  
}
.el-main{
  height:calc(100vh - 140px);
  margin:0;
}

</style>