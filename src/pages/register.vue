<template>
  <div class="register">
      <van-cell-group>
        <van-field
            v-model="user.nickname"
            required
            label="用户名"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="user.phone"
            required
            label="手机号"
            placeholder="请输入手机号"
        />
        <van-field
            v-model="user.password"
            required
            label="密码"
            placeholder="请输入密码"
        />
        </van-cell-group>
        <van-button plain type="primary" @click="btn">提交</van-button>
      <van-button plain type="primary" @click="tolog">去登录</van-button>
  
  </div>
  
</template>

<script lang="ts">
import {a_register} from '../request/request.js';
import { Component,Vue } from "vue-property-decorator";
interface t_user {
    nickname:string
    phone:string
    password:string
}
@Component({

})
export default class Register extends Vue{
 user:t_user = {
     nickname:'',
     phone:'',
     password:''
 }
 btn(){
          a_register(this.user).then(data =>{
              console.log(data);
              if(data.code === 200){
                  this.$notify({
                 type:'success',
                 message:'注册成功'
                });
                this.$router.push('/home')
              }
          })
             

 }
 tolog(){
     this.$router.push('/login')
 }
 mounted(){
   
 }


}
</script>

<style lang="scss">
.register{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
}

</style>