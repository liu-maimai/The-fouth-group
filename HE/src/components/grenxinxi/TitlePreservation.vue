<template>
  <div>
    <van-nav-bar
      title="修改个人信息"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <div>
          <van-icon name="arrow-left" color="black" />
        </div>
      </template>
      <template #right>
        <small>保存</small>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      //点击返回
      //点击返回上一页
      this.$router.go(-1);
    },
    onClickRight() {
      //点击保存更改昵称
      this.$emit("onClickRight");
      this.$emit("onClickChangeSex")
    },
  },
};
</script>
<style scoped>
</style>