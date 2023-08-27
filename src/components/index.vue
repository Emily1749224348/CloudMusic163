<template>
  <div class="index">
    <el-header class=".header">

    </el-header>

   <!-- <el-body>
     
    </el-body>  -->
    <router-view class="router">

    </router-view>

    <el-footer class="footer">

    </el-footer>
  </div>
</template>

<script>
import ElHeader from "./header/header.vue"
import ElBody from "./body/discover/body.vue"
import ElFooter from "./footer/footer.vue"
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
    ElHeader,
    ElBody,
    ElFooter,my,friend,
    musician,download,addSong,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin:0;
  padding:0;
  list-style-type: none;
}
#index{
  display:grid;
  grid-template-columns: repeat(80px,auto-fill,40px) !important;
}

.router{
  height:75vh;
}
</style>