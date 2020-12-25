<template>
  <div>
    <van-nav-bar title="购物车" left-arrow @click-left="onClickLeft" />
    <!-- 购物车列表 -->
    <div class="box">
         <div class="carList"  v-for="item in $store.state.cartlistArr"
        :key="item.id">
        <van-checkbox id="checkbox" shape="square" v-model="check" ></van-checkbox>
      <van-card
       
        :price="item.price"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="$baseUrl + item.img"
      >
      <!-- 数量 -->
        <template #footer>
          <van-stepper v-model="item.num" theme="round" button-size="22" />
          <van-button size="mini" @click="ondel(item.id)">删除</van-button>
        </template>
      </van-card>
    </div>
    </div>
   
    <!-- 提交 -->
    <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="check">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script lang="ts">
import { Component, Vue ,Watch} from "vue-property-decorator";
import { a_cartadd, a_cartdelete } from "../../request/request";

@Component({})
export default class Sort extends Vue {
  check:boolean = false;
  arr:object[] = [];
  price:number = 0;
  uid:string = '';

  ondel(id){
     a_cartdelete({id:id}).then(data=>{
         if(data.code === 200){
             this.$notify({
            type: "success",
            message: data.msg,
            });
            this.$store.dispatch("ac_cartlist", { uid: this.uid });
         }else{
               this.$notify({
                type: "warning",
                message: "删除失败",
                });
         }
     })
  }
  onClickLeft() {
    this.$router.go(-1);
  }
  //提交
  onSubmit() {

  }
  @Watch('check')
  checkAll(newVal){
      if(this.check){
          this.arr.forEach(item=>{
              this.$set(item,'flag',true);
          })
      }else{
           this.arr.forEach(item=>{
              this.$set(item,'flag',false);
          })
      }
  }
  
  updated(){
     
  }
  mounted() {
      
    this.uid = this.$store.state.logList.uid;
    this.$store.dispatch("ac_cartlist", { uid: this.uid });
  
    

  }
}
</script>

<style scoped lang="scss">
.van-submit-bar {
  bottom: 50px;
}
.carList {
  position: relative;
}
#checkbox{
  position: absolute;
  top: 50px;
  left: 10px;
  z-index: 1;
}
.van-card{
    padding-left: 40px;
}
.box{
    margin-bottom: 100px;
}

</style>