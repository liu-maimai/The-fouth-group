<template>
  <div class="hmwBox">
    <!-- 顶部 -->
    <van-sticky>
      <div class="hmw-top">
        <van-nav-bar
          title="标题看到傻瓜八卦啊回复师傅早点睡"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <!-- 这里分别是nav两侧图标 -->
          <template #right>
            <van-icon color="#595959" name="notes-o" size="22" />
          </template>
          <template #left>
            <van-icon color="#595959" name="arrow-left" size="22" />
          </template>
        </van-nav-bar>
      </div>
    </van-sticky>
    <!-- 中间主体部分 -->
    <div class="hmw-center">
      <van-list>
        <!-- 主题的上部分 -->
        <div class="hmwC-top">
          <p>共8时</p>
          <van-progress inactive :percentage="0" />
          <p>已学习0%</p>
        </div>
        <!-- 列表部分 -->
        <ul>
            <div :key="index" v-for="(item, index) in 10">
                <li>
                <p>
                  <span class="hmwS1" style="">[回放]</span
                  ><span class="hmwS2">第二讲第一课时</span>
                </p>
                <p class="hmwP3"><span>李青</span><span>03月16日 18:30 - 19:30</span></p>
                <p class="hmwJD">
                    <van-progress inactive :percentage="0" />
          <span>已观看0%</span>
                </p>
              </li>
            </div>
              
            </ul>
      </van-list>
    </div>
    <!-- 底部 -->
    <van-tabbar>
      <div class="hmw-foot">
        <p @click="hmwDian">
          <van-icon size="18" name="edit" /><span>写评论</span>
        </p>
        <p @click="$router.push('/detail')">
          <van-icon size="18" name="apps-o" /><span>课程详情</span>
        </p>
        <p @click="hmwDian">
          <van-icon size="18" name="delete" /><span>移除列表</span>
        </p>
      </div>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    底部导航
      active: 0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   导航部分事件
    onClickLeft() {
      this.$router.push("/detail");
    },
    onClickRight() {
      Toast("按钮");
    },
    // 统一点击事件，只是一个效果
    hmwDian() {
      alert("你点了一下");
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body,
.hmwBox {
  height: 100%;
}
/* 大体布局 */
.hmwBox {
  display: flex;
  flex-direction: column;
}
.hmw-top {
  /* height: 4rem; */
  height: 11.73333vw;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.hmw-center {
  flex: 1;
}
.hmw-foot {
  height: 9.86667vw;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 主体部分----------------------------------------------------------------------------- */
/* 主题的上半部分 */
.hmwC-top{
        font-size: 3.46667vw;
    color: #595959;
    height: 13.86667vw;
    line-height: 13.86667vw;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
/* 进度条 */
.van-progress{
    width: 14rem;
}
/* 列表部分 */
.hmw-center ul  li {
  list-style: disc;
  color: #eb6100;
  
}
.hmw-center ul>div{
  margin: 0 1rem;
margin-top: 1rem;
  border: .53333vw solid #e9e9e9;
    border-radius: 1.06667vw;
    padding: 4vw 4vw 4vw 7vw;
    /* width: 90%; */
}
/* span部分 */
.hmwS1 {
  /* padding: 0.2rem 0.4rem; */
  font-size: 0.1rem;
  color: #ea7a2f;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
}
.hmwS2 {
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
}
.hmw-center .hmwP3 {
  font-size: 3.6vw;
  padding: 0.5rem;
}
.hmwP3 {
  font-size: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}
/* 主体的进度条部分 */
.hmwJD{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.hmwJD span{
    color: #8c8c8c;
    font-size: 0.2rem;
}
/* 底部导航布局------------------------------------------------------------------------- */
.hmw-foot p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2vw;
  color: #8c8c8c;
  vertical-align: middle;
  margin-left: 1.33333vw;
  height: 100%;
}
.hmw-foot p span {
  margin-left: 0.2rem;
}
.van-tabbar {
  height: 9.86667vw;
}
</style>
