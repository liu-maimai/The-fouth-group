<template>
  <div class="wrap">
    <ul id="uu"> 
      <li @click="tui"><van-icon name="arrow-left" /></li>
      <li>特色课</li>
      <li><van-icon name="search" /></li>
    </ul>
    <div class="wrapper">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
import { getCharacteristic } from "../../utils/api/index";
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [
        { text: "分类", value: 0 },
        { text: "初一", value: 1 },
        { text: "初二", value: 2 },
        { text: "初三", value: 3 },
        { text: "高一", value: 4 },
        { text: "高二", value: 5 },
        { text: "高三", value: 6 },
      ],
      option2: [
        { text: "排序", value: "a" },
        { text: "综合排序", value: "b" },
        { text: "最新", value: "c" },
        { text: "最热", value: "d" },
        { text: "价格从低到高", value: "e" },
        { text: "价格从高到低", value: "f" },
      ],
      option3: [
        { text: "筛选", value: "A" },
        { text: "全部", value: "B" },
        { text: "大班课", value: "C" },
        { text: "小班课", value: "D" },
        { text: "公开课", value: "E" },
        { text: "点播课", value: "F" },
        { text: "面授课", value: "G" },
        { text: "音频课", value: "H" },
        { text: "系统课", value: "I" },
        { text: "图文课", value: "J" },
        { text: "会员课", value: "K" },
      ],
    };
  },
  methods: {
    tui() {
      this.$router.go(-1);
    },
  },
  mounted() {
    getCharacteristic().then((res) => {
      // console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  // height: calc(100% - 50px);
  #uu {
    padding: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 11.73333vw;
    li {
      font-size: 4.8vw;
      color: #595959;
      .van-icon {
        font-size: 6vw;
      }
    }
  }
  .wrapper {
    flex: 1;
    overflow: auto;
    .van-nav-bar__title {
      font-size: 0.24rem;
    }
    .van-nav-bar .van-icon {
      color: black;
      font-size: 0.24rem;
    }
  }
}
</style>
