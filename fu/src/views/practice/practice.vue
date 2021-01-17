<template>
  <div class="box">
    <header>练习</header>
    <div class="wrapper">
      <div class="wrap">
        <van-grid :column-num="4">
          <van-grid-item
            v-for="value in 6"
            :key="value"
            icon="data:image/png;base64,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"
            text="练习"
          />
        </van-grid>
      </div>
    </div>
    <div class="kao">
      <h2>近期考点</h2>
      <div class="time">
        <p>默认排序</p>
        <p>时间</p>
      </div>
      <p class="p">暂无模考计划，敬请期待</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #f0f2f5;
}
header {
  background: #fff;
  text-align: center;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.2rem;
  color: #595959;
  font-weight: 400;
}
.wrapper {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  .wrap {
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
  }
}
.kao {
  width: 100%;
  height: 60vw;
  background-color: #fff;
  h2 {
    font-size: 4vw;
    color: #8c8c8c;
    padding: 3vw 3vw;
  }
  .time {
    font-size: 2vw;
    color: #eb6100;
    display: flex;
    justify-content: space-between;
    padding: 3vw;
  }
  .p {
    margin-top: 35vw;
    font-size: 2vw;
    color: #eb6100;
    text-align: center;
  }
}
</style>
