<template>
  <div class="box">
    <div class="pos" @click="showPopup"><van-icon name="envelop-o" /></div>
    <van-popup v-model="show">
      <ul id="uu">
        <li>给我们留言</li>
        <li @click="showPopup"><van-icon name="arrow-down" /></li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  methods: {
    showPopup() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  .van-popup {
    height: 100%;
    width: 100%;
  }
  .pos {
    display: flex;
    align-items: center;
    justify-content: center;
    .van-icon {
      font-size: 8vw;
      color: #fff;
    }
  }
  /deep/.van-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    left: 0;
    top: 0;
  }
  #uu {
    width: 100%;
    height: 60px;
    padding: 10px 10px 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    box-sizing: border-box;
    color: white;
    background: rgb(0, 122, 255);
  }
}
</style>
