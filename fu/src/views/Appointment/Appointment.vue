<template>
  <div>
    <div id="uu">约课记录</div>
    <Appintment></Appintment>
    <div class="wrap">
      <p class="jilu">还没有待上课记录哦</p>
      <div class="button">
        <button>登陆/注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import Appintment from "@/components/Appointment/Appointment";
export default {
  components: {
    Appintment,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#uu {
  font-size: 4.8vw;
  color: #595959;
  padding: 0 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11.73333vw;
}
.wrap {
  font-size: 3vw;
  width: 100%;
  height: 80vw;
  box-sizing: border-box;
  padding-top: 25vw;
  text-align: center;
  .jilu {
    font-size: 3vw;
    color: rgb(168, 168, 168);
    margin-bottom: 8vw;
  }
  .button {
    button {
      width: 25vw;
      height: 10vw;
      border: none;
      background-color: rgb(255, 115, 0);
      border-radius: 1.5vw;
      color: #fff;
    }
  }
}
</style>
