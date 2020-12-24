<template>
  <div>
       <router-view></router-view>
       <footer>
          <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
          <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
       </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components:{
  
  }
})
export default class Home extends Vue{
   active:number = 0;
}
</script>

<style>


</style>