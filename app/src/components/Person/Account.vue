<template>
  <div>
    <h2>我的账户</h2>
    <ul class="ul">
      <li @click="youhui">
        <img src="@/assets/imgs/youhuiquan.png" />
        <p>优惠券</p>
      </li>
      <li @click="card">
        <img src="@/assets/imgs/xuexika.png" />
        <p>学习卡</p>
      </li>
      <li @click="member">
        <img src="@/assets/imgs/huiyuan.png" />
        <p>会员</p>
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
    //   跳转到优惠券页面
    youhui() {
      this.$router.push({ path: "coupon" });
    },
    //跳转到学习卡页面
    card(){
        this.$router.push({path:'/card'})
    },
    //跳转到会员页面
    member(){
        this.$router.push({path:"/member"})
    }
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
      width: 0.2rem;
      margin: 0 auto;
    }
    p {
      margin-top: 0.1rem;
      font-size: 0.12rem;
    }
  }
}
</style>
