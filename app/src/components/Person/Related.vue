<template>
  <div>
    <h2>课程相关</h2>
    <ul class="ul">
      <li @click="teachers">
        <img src="@/assets/imgs/guanzhulaoshi.png" />
        <p>关注的老师</p>
      </li>
      <li @click="Collections">
        <img src="@/assets/imgs/shoucang.png" />
        <p>我的收藏</p>
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
    //跳转到关注的老师页面
    teachers() {
      this.$router.push({ path: "/teachers" });
    },
    //我的收藏页面
    Collections() {
      this.$router.push({ path: "/Collections" });
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
