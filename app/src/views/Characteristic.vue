<template>
  <div class="box">
    <div class="top">
      <img :src="list.avatar" />
      <p>{{ list.real_name }}</p>
    </div>
    <div class="div">
      <van-tabs v-model="active" @click="zhu">
        <van-tab title="讲师介绍">
          <p class="lao">老师简介</p>
          <h1>{{ list.introduction }}</h1>
        </van-tab>
        <van-tab title="主讲课程"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getHubteachers, getClass } from "../utils/api";
export default {
  data() {
    return {
      id: this.$route.query.id,
      list: [],
      active: 0,
      limit: "",
      page: "",
    };
  },
  mounted() {
    getHubteachers({ id: this.id }).then((res) => {
      this.list = res.teacher;
    });
    // console.log(this.id);
  },
  methods: {
    zhu() {
      getClass({ id: this.id, limit: this.limit, page: this.page }).then(
        (res) => {
          // console.log(res);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  .top {
    height: 1rem;
    width: 100%;
    display: flex;
    padding: 0.2rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.14rem;
      border-radius: 50%;
    }
    p {
      padding-top: 0.1rem;
      font-size: 4.26667vw;
      color: #030f09;
    }
  }
  .div {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.14rem;
    /deep/.van-tabs__wrap {
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
    }
  }
  .lao {
    color: #b7b7b7;
    font-size: 0.12rem;
    padding-top: 5.33333vw;
  }
  h1 {
    margin: 0.2rem 0;
    color: #20242a;
    font-size: 0.14rem;
  }
}
</style>
