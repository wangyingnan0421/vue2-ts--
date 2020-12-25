<template>
  <div class="sort">
    <van-nav-bar
      title="商品分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-sidebar v-model="activeKey" @change="sidebarChange">
      <van-sidebar-item
        v-for="item in $store.state.getcateArr"
        :key="item.catename"
        :title="item.catename"
        icon="photo-o"
      >
      </van-sidebar-item>
    </van-sidebar>
    <div class="grid">
      <van-grid
        :border="false"
        :column-num="3"
        v-for="item in secondCate"
        :key="item.id"
        router
      >
        <van-grid-item :to="'/home/list?id=' + item.pid">
          <van-image :src="$baseUrl + item.img" />
          <p>{{ item.catename }}</p>
        </van-grid-item>
      </van-grid>
      <van-empty v-show="!secondCate" description="没有了" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Sort extends Vue {
  activeKey = 0;
  firstCate = [];
  secondCate = [];
  sidebarChange(index) {
    this.secondCate = this.firstCate[index].children;
  }
  onClickLeft() {
    this.$router.go(-1);
  }
  mounted() {
    this.$store.dispatch("ac_getcate");
    this.$store.dispatch("ac_getcatetree"); //数据没渲染呢
    setTimeout(() => {
        this.firstCate = this.$store.state.getcatetree;
      this.secondCate = this.firstCate[0].children;
    }, 300);
  
  }
}
</script>

<style scoped lang="scss">
.van-grid-item {
  width: 100px;
  .van-image {
    height: 30px;
  }
  p {
    font-size: 12px;
  }
}
.van-sidebar {
  position: relative;
}
.sort {
  .grid {
    position: absolute;
    left: 100px;
    top: 50px;
    width: 250px;
    .van-image {
      width: 80px;
      height: 80px;
    }
  }
}
</style>