<template>
  <div>
    <van-nav-bar title="设置密码" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onLogin">
      <van-field
        @click="gao(1)"
        :class="show == 1 ? 'van-field' : 'shi'"
        v-model="text"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        @click="gao(2)"
        :class="show == 2 ? 'van-field' : 'shi'"
        v-model="password"
        type="password"
        name="密码"
        placeholder="请再次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      text: "",
      password: "",
      show: 0,
    };
  },
  methods: {
    async onLogin() {
      var miz = /^[A-Za-z0-9_-]+$/;
      if (this.text == "" || this.password == "") {
        return alert("内容不能为空！！");
      }
      if (!(miz.test(this.text) || miz.test(this.password))) {
        Toast.loading({
          message: "密码格式不正确",
          position: "center",
        });
        return false;
      } else if (this.text !== this.password) {
        this.$toast({
          message: "两次密码不一致",
          position: "bottom",
        });
        return false;
      }
      console.log(
        Number(localStorage.getItem("username"), localStorage.getItem("sms"))
      );
      var res = await this.$Net.she({
        mobile: Number(localStorage.getItem("username")),
        sms_code: localStorage.getItem("sms"),
        sms_type: "getPassword",
        password: this.text,
      });
      if (res.data.code == 200) {
        this.$router.push({ path: "/mime" });
      } else {
        this.$toast({
          message: res.data.msg,
          position: "bottom",
        });
      }
      console.log(res);
    },
    onClickLeft() {
      this.$router.go("-1");
    },
    gao(i) {
      this.show = i;
    },
  },
};
</script>

<style scoped>
.van-form {
  margin-left: 20px;
}
.van-field {
  width: 259.2px;
  height: 54.99px;
}
.van-button {
  width: 20rem;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 25px;
  color: white;
}
.van-field {
  border-bottom: 0.01rem solid orangered;
}
.shi {
  border-bottom: 0px;
}
</style>