<template>
  <div class="box">
    <div class="img">
      <img src="@/assets/imgs/2021-01-15_190429.jpg" />
      <p class="position" @click="tui"></p>
    </div>
    <div class="wrapper">
      <div class="wrap">
        <img src="/image" />
        <div class="center">
          <h2>李湘老师</h2>
          <p>
            <span>女</span>
            <span>32岁</span>
            <span>10年教龄</span>
            <span>关注数1012</span>
          </p>
        </div>
        <div class="right">关注</div>
      </div>
      <div class="bottom">
        <p>创造力丰富</p>
        <p>为人和善</p>
        <p>讲课方式新颖</p>
        <p>创造力丰富</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.$route.query.i,
    };
  },
  mounted() {},
  methods: {
    tui() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .img {
    width: 100%;
    position: relative;
    height: 2.2rem;
    img {
      width: 100%;
      height: 100%;
    }
    .position {
      position: absolute;
      top: 0;
      left: 0;
      height: 0.6rem;
      width: 0.6rem;
      // background-color: red;
    }
  }
  .wrapper {
    height: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.1rem;
    border-bottom: 0.2rem solid rgb(248, 248, 248);
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    color: rgb(190, 190, 190);
    p {
      background-color: #eee;
      padding: 0.04rem 0.06rem;
    }
  }
  .wrap {
    height: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      display: flex;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    .center {
      width: 2.6rem;
      h2 {
        margin-bottom: 0.14rem;
      }
      p {
        width: 2.4rem;
        display: flex;
        justify-content: space-between;
        color: rgb(206, 206, 206);
        font-size: 0.14rem;
      }
    }
  }
}
</style>
