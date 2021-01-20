<template>
  <div class="box">
    <header>
      <Onehead class="inehead"></Onehead>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </header>
    <div class="section">
      <div
        @click="Starsteachers"
        class="for"
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="item.img" />
        <div class="re">
          <p class="p1">
            <span>{{ item.title }}</span>
          </p>
          <p class="p2">{{ item.detail }}</p>
        </div>
        <div class="yue">预约</div>
      </div>
    </div>
  </div>
</template>

<script>
import Onehead from "../../components/Onechild/Onehead.vue";
export default {
  components: {
    Onehead,
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      list: [
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
        {
          img: ".img.jpg",
          title: "asdasdada",
          detail: "骄傲发多少个",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    Starsteachers() {
      this.$router.push({ path: "/Starsteachers" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: scroll;
  //   overflow: hidden;
  background-color: #f0f2f5;
}
.inehead {
  height: 11.73333vw;
}
.section {
  padding: 0 2.66667vw;
  .for {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
    background: #fff;
    border-radius: 1.06667vw;
    height: 21.6vw;
    margin-top: 2.66667vw;
    img {
      width: 10.66667vw;
      height: 10.66667vw;
      margin-right: 3.2vw;
      border-radius: 50%;
      display: flex;
    }
    .re {
      width: 50vw;

      .p1 {
        padding-bottom: 0.8vw;
        margin: 0;
        display: flex;
        span {
          font-size: 4vw;
          color: #595959;
          line-height: 5.6vw;
          padding-right: 1.33333vw;
        }
      }
      .p2 {
        font-size: 3.2vw;
        color: #b7b7b7;
        line-height: 4.53333vw;
      }
    }
    .yue {
      flex: none;
      width: 18.66667vw;
      height: 8.26667vw;
      line-height: 8.26667vw;
      background: #ebeefe;
      border-radius: 4.13333vw;
      font-size: 3.73333vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #eb6100;
      border: none;
      text-align: center;
    }
  }
}
</style>
