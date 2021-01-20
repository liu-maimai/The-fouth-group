<template>
  <div>
    <h2>自助服务</h2>
    <ul class="ul">
      <li @click="Mynews">
        <img src="@/assets/imgs/xiaoxi.png" />
        <p>我的消息</p>
      </li>
      <li @click="opinion">
        <img src="@/assets/imgs/xin.png" />
        <p>意见反馈</p>
      </li>
      <li @click="customer">
        <img src="@/assets/imgs/kefu.png" />
        <p>在线客服</p>
      </li>
      <li @click="setup">
        <img src="@/assets/imgs/shezhi.png" />
        <p>设置</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    //跳转到我的消息页面
    Mynews() {
      this.$router.push({ path: "/mynews" });
    },
    //跳转到意见反馈页面
    opinion() {
      this.$router.push({ path: "/opinion" });
    },
    //跳转到在线客服页面
    customer() {
      this.$router.push({ path: "/customer " });
    },
    //跳转到设置页面
    setup() {
      this.$router.push({ path: "/setup" });
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0.2rem;
}
.ul {
  margin-top: 0.14rem;
  width: 100%;
  height: 0.6rem;
  display: flex;
  border-bottom: 1px solid rgb(226, 226, 226);
  li {
    display: flex;
    flex-direction: column;
    width: 0.8rem;
    text-align: center;
    img {
      width: 0.16rem;
      height: 0.16rem;
      margin: 0 auto;
    }
    p {
      margin-top: 0.1rem;
      font-size: 0.12rem;
    }
  }
}
</style>
