<template>
  <div>
      <van-nav-bar
      title="商品分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
     <van-card
        v-for="item in arr"
        :key="item.id"
        num="2"
        :price="item.price"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="$baseUrl + item.img"
        :origin-price="item.market_price"
        >
          <template #footer>
                <van-button size="mini" color="linear-gradient(to right, #ff6034, #ee0a24)"
                   icon="shopping-cart"
                   @click="car(item)"/>
            <van-button size="mini" color="linear-gradient(to right, #ff6034, #ee0a24)">
            购买
          </van-button>
          </template>
     </van-card>
         <van-empty v-show="!arr" description="没有了" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {a_getgoods,a_cartadd} from '../../request/request';
interface car {
    uid:string
    goodsid:string
    num:string
}
@Component({})
export default class List extends Vue {
   arr = [];
    carObj:car = {
    uid:'',
    goodsid:'',
    num:'1'
  }
   onClickLeft(){
       this.$router.go(-1);
   }
    car(item){
    this.carObj.goodsid = item.id;
    this.carObj.uid = this.$store.state.logList.uid;
    a_cartadd(this.carObj).then(data=>{
       this.$notify({
          type: "success",
          message: data.msg,
        });
    })
  }
   mounted(){
       const fid = this.$route.query.id;
       a_getgoods({fid:fid}).then(data=>{
            this.arr = data.list;

            
       })
   }
} 
</script>

<style scoped lang="scss">


</style>