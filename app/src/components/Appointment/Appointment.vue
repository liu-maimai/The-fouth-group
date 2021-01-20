<template>
  <div>
    <van-tabs v-model="activeName">
      <van-tab title="待上课" name="a"></van-tab>
      <van-tab title="已上课" name="b"></van-tab>
      <van-tab title="已取消" name="c"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
