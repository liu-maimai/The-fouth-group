<template>
  <div class="loading" v-show="show">
    <div class="animation-top">
      <img src="/imgs/loading.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      show: Boolean,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
  background: #123;
  opacity: 0.7;

  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  .animation-top {
    width: 2.9rem;
    height: 2.9rem;
    // background: rgba(41, 226, 41, 0.507);
    overflow: hidden;
    margin: auto;
    margin-top: 60%;
    position: relative;
    border-radius: 50%;
    border: 0.02rem solid rgb(67, 127, 206);
    img {
      width: 7rem;
      height: 7rem;
      position: absolute;
      top: -2.1rem;
      left: -2.1rem;
      opacity: 0.7;
    }
  }
}
</style>
