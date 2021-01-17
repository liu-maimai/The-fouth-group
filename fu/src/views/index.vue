<template>
  <div class="box">
    <router-view />
    <Draged class="pos" v-drag></Draged>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/class" icon="search">课程</van-tabbar-item>
      <van-tabbar-item replace to="/Appointment" icon="search"
        >约课记录</van-tabbar-item
      >
      <van-tabbar-item replace to="/practice" icon="search"
        >练习</van-tabbar-item
      >
      <van-tabbar-item replace to="/personal" icon="search"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Draged from "../components/Draged/Draged";
export default {
  components: {
    Draged,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  directives: {
    drag: {
      inserted: (el, binding, vnode) => {
        // console.log(binding, vnode);
        let index = binding.value;

        let touch, disX, disY;
        el.ontouchstart = (e) => {
          if (e.touches) {
            //有可能对象在e上也有可能对象在e.touches[0]上
            touch = e.touches[0];
          } else {
            touch = e;
          }
          disX = touch.clientX - el.offsetLeft; //鼠标位置X减去元素距离左边距离（鼠标到元素左边的距离）
          disY = touch.clientY - el.offsetTop; //鼠标位置Y减去距离顶部距离（鼠标到元素顶部的高度）
        };
        el.ontouchmove = (e) => {
          if (e.touches) {
            //有可能对象在e上也有可能对象在e.touches[0]上
            touch = e.touches[0];
          } else {
            touch = e;
          }
          //更新位置

          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = touch.clientX - disX;
          let top = touch.clientY - disY;
          //移动当前元素
          el.style.left = left + "px";
          el.style.top = top + "px";
          e.preventDefault(); //阻止页面的滑动默认事件
          // console.log(left);
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  .pos {
    height: 62px;
    width: 62px;
    position: fixed;
    right: 8vw;
    bottom: 20vw;
    background-color: rgb(0, 122, 255);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 14px;
    text-align: center;
  }
}
</style>
