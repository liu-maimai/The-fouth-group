<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <img :src="item.banner_img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanners } from "@/utils/api/index";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    getBanners().then((res) => {
      console.log(res);
      this.list = res.data;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 1.998rem;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
