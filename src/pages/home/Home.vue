<template>
  <div>
       <router-view></router-view>
       <footer>
          <van-tabbar v-model="active" router>
          <van-tabbar-item to="/home/main" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item to="/home/sort" icon="search">分裂</van-tabbar-item>
          <van-tabbar-item to="/home/car" icon="friends-o">购物车</van-tabbar-item>
          <van-tabbar-item to="/home/mine" icon="setting-o">我的</van-tabbar-item>
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
   mounted(){

   }
}
</script>

<style scoped lang="scss">
footer{
  display: fixed;
  bottom: 0px;
  z-index: 12;

}


</style>