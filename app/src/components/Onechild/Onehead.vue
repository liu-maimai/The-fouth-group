<template>
  <div>
    <ul class="top">
      <li @click="del"><van-icon name="arrow-left" /></li>
      <li class="one">一对一辅导</li>
      <li><van-icon name="search" /></li>
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
    del() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
  padding: 0 2vw;
  height: 11.73333vw;
  font-size: 4.4vw;
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #595959;
  .one {
    font-size: 4.8vw;
  }
  .van-icon {
    font-size: 6vw;
  }
}
</style>
