<template>
  <div>
    <h2>订单相关</h2>
    <ul class="ul">
      <li @click="curriculum">
        <img src="@/assets/imgs/kecheng.png" />
        <p>课程订单</p>
      </li>
      <li @click="memberorders">
        <img src="@/assets/imgs/kecheng.png" />
        <p>会员订单</p>
      </li>
      <li @click="appointmentorder">
        <img src="@/assets/imgs/kecheng.png" />
        <p>约课订单</p>
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
    //课程订单
    curriculum() {
      this.$router.push({ path: "/curriculum" });
    },
    //会员订单
    memberorders() {
      this.$router.push({ path: "/memberorders" });
    },
    //约课订单
    appointmentorder() {
      this.$router.push({ path: "/appointmentorder" });
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
