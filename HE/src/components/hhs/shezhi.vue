<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <div class="sy_dvv" @click="mima">
      <p>设置密码</p>
      <p>></p>
    </div>
    <van-button round native-type="submit" @click="tui"> 退出登录 </van-button>
  </div>
</template>

<script>
export default {
  methods: {
    tui() {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      this.$router.go("-1");
    },
    onClickLeft() {
      this.$router.go("-1");
    },
    mima() {
      this.$router.push("/mima");
    },
  },
};
</script>

<style scoped>
.van-button {
  width: 20rem;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 25px;
  color: white;
  margin-left: 1rem;
}
.sy_dvv {
  width: 90%;
  font-size: 0.5rem;
  margin-left: 1rem;
  display: inline-flex;
  justify-content: space-between;
}
</style>