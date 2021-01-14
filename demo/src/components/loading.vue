<template>
  <div id="loading" v-show="show">
    <div>正在加载中...</div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    show: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  div {
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 0.08rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
    padding: 0.2rem;
  }
}
</style>
