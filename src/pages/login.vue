<template>
  <div class="login">
    <van-field v-model="user.phone" type="tel" label="手机号" />
    <van-field v-model="user.password" type="password" label="密码" />
    <van-button plain type="primary" @click="btn">登录</van-button>
    <van-button plain type="primary" @click="reg">去注册</van-button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { a_login } from "../request/request.js";

interface t_user {
  phone: string;
  password: string;
}
@Component({})
export default class Login extends Vue {
  user: t_user = {
    phone: "",
    password: "",
  };
  btn() {
    a_login(this.user).then((data) => {
      console.log(data);
      if (data.code == 200) {
        this.$notify({
          type: "success",
          message: "登录成功",
        });
        this.$store.dispatch('ac_login',data.list)
        localStorage.setItem('token',data.list.token);
        this.$router.push("/home");
      }
    });
  }
  reg() {
    this.$router.push("/register");
  }
}
</script>

<style>
.login {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
</style>