<template>
  <div>
    <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeft" />
    <div class="sy_top">
      <van-form>
        <van-field
          v-model="username"
          name="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="text"
          type="text"
          name="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round native-type="submit" @click="onLogin">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
    <p class="p-uu" @click="add" v-show="shaw">获取验证码</p>
    <span v-show="!shaw" class="count">{{ count }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      username: "",
      password: "",
      shaw: true,
      count: "",
      timer: null,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    onLogin() {
      this.$axios.post("http://120.53.31.103:84/api/app/password",{
        mobile:this.username,
        password:this.password,
        sms_code:this.text,
      }).then(res=>{
        console.log(res);
        this.$router.push({path:"/login"})
      })
    },
    add() {
      if (this.username == "") {
        return alert("手机号必填");
      }
      var phone = /^[1]([3-9])[0-9]{9}$/;
      if (!phone.test(this.username)) {
        Toast.loading({
          message: "手机号码格式不正确",
          position: "center",
        });
        return;
      } else {
      }
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.shaw = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.shaw = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
      this.$axios
        .post("http://120.53.31.103:84/api/app/smsCode", {
          mobile: this.username,
          sms_type:"getPassword",
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.sy_top {
  width: 100%;
  margin-top: 3rem;
}
.van-button {
  width: 19rem;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 1rem;
  color: white;
}
.van-form {
  margin-left: 1rem;
}
.p-uu {
  font-size: 0.45rem;
  color: orangered;
  position: fixed;
  right: 2rem;
  top: 7.3rem;
}
.count {
  position: fixed;
  right: 2.7rem;
  top: 7.3rem;
}
</style>