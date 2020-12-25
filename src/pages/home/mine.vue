<template>
  <div class="mine">
      <van-nav-bar
        title="会员中心"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 头像 -->
        <div class="userPic">
             <van-image
            round
            width="10rem"
            height="10rem"
            fit="fill"
            src=""
        />
        </div>
        <p>您好：{{$store.state.logList.nickname}}</p>

        <!-- 下部 -->
        <footer>
            <van-button type="danger" @click="onout">退出</van-button>
            <van-cell-group>
               <van-cell is-link title="我的收藏"  />
               <van-cell is-link title="我的评价"  />
               <van-cell is-link title="我的订单"  />


            </van-cell-group>
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
    onout(){
        localStorage.removeItem('token');
        this.$notify('已退出');
        this.$router.push('/login');
    }
    onClickLeft(){
        this.$router.go(-1);
    }
   mounted(){

   }
}
</script>

<style scoped lang="scss">
.mine{
    background: #fff;
}
.userPic{
  width: 100%;
    height: 200px;
    background: rgb(233, 233, 233);
    display: flex;
    justify-content: center;
    align-items: center;
}
footer{
    width: 100%;
        padding: 30px 10px;
        // background: rgb(230, 230, 230);
        box-sizing: border-box;

    .van-button{
        width: 100%;
    }
}
p{
    text-align: center;
}

</style>