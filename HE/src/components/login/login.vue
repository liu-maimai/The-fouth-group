<template>
  <div class="sy_dv">
    <div class="sy_img">
      <img src="../../assets/login.png" alt="" />
    </div>
    <div class="sy_input">
      <van-form>
        <van-field
        @click="gao(1)"
          :class="show == 1 ? 'van-field' : 'shi'"
          v-model="username"
          name="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
        @click="gao(2)"
          :class="show == 2 ? 'van-field' : 'shi'"
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="sy_zhao">
          <span @click="zhao">找回密码</span>
          <span @click="zhuce">注册/验证码登录</span>
        </div>
        <div style="margin: 16px">
          <van-button round native-type="submit" @click="onLogin">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      type:1,
      num:0,
      show:0,
    };
  },
  methods: {
    onLogin() {
      this.$Net
        .login({
            mobile:this.username,
            password:this.password,
            type:this.type
        })
        .then((res) => {
          // console.log(res);
          var token=res.data.data.remember_token;
          var mobile=res.data.data.mobile
          var sex=res.data.data.sex
          var id=res.data.data.id;
          localStorage.setItem("id",id)
          localStorage.setItem("token",token);
          // localStorage.setItem("username",this.username)
          // console.log(username);
          localStorage.setItem("mobile",mobile)
          localStorage.setItem("sex",sex)
          console.log(id);
          this.$router.push({ path: "/mime" });
        })
        .catch((err) => {
          console.log(err);
          alert('登录失败')
        });
    },  
       gao(i) {
      this.show = i;
    },
    zhao() {
      this.$router.push({ path: "/mima" });
    },
    zhuce() {
      this.$router.push({ path: "/zhu" });
    },
  },
  mounted() {
 
  },
};
</script>

<style scoped>
.sy_dv {
  width: 100%;
}
.sy_img {
  width: 100%;
}
.sy_img img {
  width: 16.5rem;
  height: 4.3rem;
  margin-left:3rem;
  margin-top: 3rem;
}
.sy_input {
  width: 100%;
  margin-top: 3rem;
}
.van-form {
  margin-left: 1rem;
}
.van-field {
  width: 16rem;
  height: 4rem;
}
.van-button {
  width: 20rem;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 1.5rem;
  color: white;
}
.van-field {
  border-bottom: 0.01rem solid orangered;
}
.shi {
  border-bottom: 0px;
}
.sy_zhao {
  width: 85%;
  font-size: 0.5rem;
  margin-left: 1.25rem;
  margin-top: 0.8rem;
  display: inline-flex;
  justify-content: space-between;
  color: grey;
}
</style>