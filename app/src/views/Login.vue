<template>
  <div class="box">
    <div class="img">
      <img src="@/assets/imgs/login.jpeg" />
    </div>
    <!-- 密码登录 -->
    <div class="login-content" v-show="hide">
      <p>
        <input type="text" v-model="user" placeholder="请输入手机号" />
      </p>
      <p>
        <input type="password" v-model="pwd" placeholder="请输入密码" />
      </p>
      <div class="center">
        <p>找回密码</p>
        <p @click="xian">注册/验证码登录</p>
      </div>
    </div>
    <!-- 验证码登录 -->
    <div class="login-content" v-show="show">
      <p>
        <input type="text" v-model="mobile" placeholder="请输入手机号" />
      </p>
      <p class="pos">获取验证码</p>
      <p>
        <input type="password" v-model="sms_code" placeholder="请输入密码" />
      </p>
      <div class="center">
        <p>*未注册的手机号将自动注册</p>
        <p @click="cang">使用密码登录</p>
      </div>
    </div>

    <div class="login">
      <button @click="submit">登录</button>
      <div class="login-info">
        <img @click="laji" v-if="shi" src="../assets/imgs/duihao.png" />
        <img @click="laji" v-else src="../assets/imgs/dui.png" />
        <span>我同意</span>
        <b>用户注册协议</b>
        <span>和</span>
        <b>隐私保护协议</b>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from "../utils/api";
export default {
  data() {
    return {
      shi: false,
      show: false,
      hide: true,
      user: "15810195203",
      pwd: "6666666666",
      mobile: "",
      sms_code: "",
    };
  },
  mounted() {},
  methods: {
    // 判断是验证码登录还是密码登录
    xian() {
      this.show = true;
      this.hide = false;
    },
    cang() {
      this.show = false;
      this.hide = true;
    },
    laji() {
      this.shi = !this.shi;
    },

    //登录
    submit() {
      getLogin({
        mobile: this.user,
        password: this.pwd,
        type: 1,
      }).then((res) => {
        console.log(res);
        this.$store.commit("login", res.data.remember_token);
        this.$router.push({ path: "/" });
      });
    },
    //获取验证码
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  width: 100%;
  .img {
    width: 100%;
    height: 66.41vw;
    margin-bottom: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-content {
    position: relative;
    padding: 0 10.66667vw;
    overflow: hidden;
    .pos {
      position: absolute;
      top: 20px;
      right: 50px;
      color: #e60012;
      font-size: 0.12rem;
    }
    input {
      border: none;
      box-sizing: border-box;
      padding: 4vw 0;
      border: 0;
      width: 100%;
      height: 100%;
      font-size: 4vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      line-height: 0.53333rem;
      line-height: 5.33333vw;
      float: left;
      outline: none;
      border-bottom: 1px solid #f1f1f1;
    }
    .center {
      color: #8d8c8c;
      box-sizing: border-box;
      padding: 4vw 0;
      width: 100%;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.12rem;
    }
  }
  .login {
    box-sizing: border-box;
    height: 49.86667vw;
    background: url(../assets/imgs/bgcc.png);
    background-size: 100% 100%;
    text-align: center;
    padding-top: 0.7rem;
    button {
      border: none;
      color: #fff;
      font-size: 0.14rem;
      background-color: rgba(255, 255, 255, 0);
    }
    .login-info {
      display: flex;
      padding-top: 0.8rem;
      padding-top: 8vw;
      width: 7.73333rem;
      width: 77.33333vw;
      margin: 0.1rem auto;
      align-items: center;
      font-size: 0.12rem;
      color: rgb(105, 105, 105);
      img {
        width: 4vw;
        height: 4vw;
        margin-right: 1.33333vw;
      }
      b {
        color: #e60012;
      }
    }
  }
}
</style>
