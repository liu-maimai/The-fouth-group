<template>
  <div>
    <van-nav-bar title="约课记录" />
    <!-- 利用token判断 -->
    <van-tabs v-model="activeName">
      <van-tab title="待上课" name="a">
        <template #default>
          <Yueke></Yueke>
        </template>
      </van-tab>
      <van-tab title="已上课" name="b">
        <template #default>
          <Yuekes></Yuekes>
        </template>
      </van-tab>
      <van-tab title="已取消" name="c">
        <Quxiao></Quxiao>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Yueke from "@/components/yueke/Yueke";
import Yuekes from "@/components/yueke/Yuekes";
import Quxiao from "@/components/yueke/Quxiao";
export default {
  components: {
    Yueke,
    Yuekes,
    Quxiao,
  },
  data() {
    return {
      activeName: "a",
    };
  },
  created() {},
  computed: {
    // 获取token 如果没有则显示登录页
  },
};
</script>
