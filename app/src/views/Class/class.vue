<template>
  <div class="box">
    <van-sticky>
      <Tesclass></Tesclass>
    </van-sticky>
    <div id="container">
      <div
        class="for"
        v-for="(item, index) in list"
        :key="index"
        @click="classdeail(item.id)"
      >
        <img :src="item.cover_img" />
        <div class="width">
          <h2>{{ item.title }}</h2>
          <p>{{ item.sales_num }}人已报名</p>
        </div>
        <p class="ppp">{{ item.has_buy ? "收费" : "免费" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getTese } from "@/utils/api";
import Tesclass from "@/components/teseClass/Teseclass";
export default {
  components: {
    Tesclass,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    getTese().then((res) => {
      console.log(res);
      this.list = res.list;
    });
  },
  methods: {
    classdeail(i) {
      this.$router.push({ path: "/classdeail" });
      this.$store.commit("detai", i);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: calc(100% - 8vw);
  box-sizing: border-box;
  overflow-y: scroll;
}
#container {
  background-color: #f5f5f5;
  width: 100%;
  padding: 4vw;
  box-sizing: border-box;
  .for {
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.08rem;
    background-color: #fff;
    margin-bottom: 0.11rem;
    border-radius: 0.1rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.1rem;
      margin-right: 0.1rem;
    }
    .width {
      width: 2rem;
      h2 {
        font-size: 3.73333vw;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #20242a;
        margin-bottom: 0.4rem;
      }
      p {
        font-size: 0.14rem;
        color: rgba(0, 0, 0, 0.45);
      }
    }
    .ppp {
      margin-top: 0.6rem;
      width: 0.5rem;
      color: green;
    }
  }
}
</style>
