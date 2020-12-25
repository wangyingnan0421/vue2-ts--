<template>
  <div>
    <van-nav-bar title="首页" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#000">
      <van-swipe-item v-for="item in $store.state.getbannerArr" :key="item.img">
        <img :src="$baseUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- tab -->
    <van-tabs v-model="active">
      <van-tab title="热门推荐"></van-tab>
      <van-tab title="发现新品"></van-tab>
      <van-tab title="所有商品"></van-tab>
    </van-tabs>
    <!-- 商品列表 -->
    <div class="goodsList">
      <div
        class="goodsTeam"
        v-for="item in $store.state.getindexgoodArr"
        :key="item.id"
      >
        <van-card
          v-for="i in item.content"
          :key="i.id"
          :tag="tag"
          num="999"
          :origin-price="i.market_price"
          :price="i.price"
          desc="描述信息"
          :title="i.goodsname"
          :thumb="$baseUrl + i.img"
        >
          <template #footer>
            <van-button
              size="mini"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              icon="shopping-cart"
              @click="car(i)"
            />
            <van-button
              size="mini"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
            >
              购买
            </van-button>
          </template>
        </van-card>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { a_cartadd } from "../../../request/request";
interface car {
  uid: string;
  goodsid: string;
  num: string;
}
@Component({})
export default class Home extends Vue {
  active: number = 1;
  tag: string = "hot";
  carObj: car = {
    uid: "",
    goodsid: "",
    num: "1",
  };

  car(i) {
    this.carObj.goodsid = i.id;
    this.carObj.uid = this.$store.state.logList.uid;
    a_cartadd(this.carObj).then((data) => {
      this.$notify({
        type: "success",
        message: data.msg,
      });
    });
  }
  mounted() {
    this.$store.dispatch("ac_getbanner");
    this.$store.dispatch("ac_getindexgoods");
  }
  @Watch("active")
  changeTag(newVal) {
    switch (newVal) {
      case 0:
        this.tag = "hot";
        return;
      case 1:
        this.tag = "new";
        return;
      case 2:
        this.tag = "";
        return;
    }
  }
}
</script>
<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
  }
}
.goodsList {
  margin-bottom: 50px;
}
</style>