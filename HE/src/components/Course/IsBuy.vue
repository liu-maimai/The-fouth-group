<template>
<div class="hmwBox">
     <!-- 顶部 -->
    <!-- <van-sticky> -->
      <div class="hmw-top">
        <van-nav-bar
          title="确认订单"
          @click-left="onClickLeft"
        >
          <!-- 图标 -->
          <template #left>
            <van-icon color="#595959" name="arrow-left" size="22" />
          </template>
        </van-nav-bar>
      </div>
    <!-- </van-sticky> -->
     <!-- 中间主体部分 -->
    <div class="hmw-center" style="background: #f0f2f5;">
      <van-list style="background: #f0f2f5;">
          <!-- 中间顶部 -->
          <div class="hmwc-top">
              <div>
                  <p class="hmwP1">初中重点几何知识点——第八讲： 用描点法画二次函数y＝x^2的图象</p>
                  <span>1.00</span>
              </div>
              <p class="hmwP2">授课老师：马学斌</p>
          </div>
          <ul>
              <li class="hmwLi1">
                  <p>优惠券</p>
                  <p style="color:#969799;">无可用</p>
              </li>
              <li class="hmwLi2">
                  <p><span style="color:#969799;">商品金额</span><span class="hmwSpanNum"><van-icon color="orange" name="gold-coin" />&emsp;1.00</span></p>
                  <p><span style="color:#969799;">优惠券金额</span><span class="hmwSpanNum"><van-icon color="orange" name="gold-coin" />&emsp;0</span></p>
                  <p><span style="color:#969799;">合计</span><span class="hmwSpanNum" style="color:#eb6100;"><van-icon color="orange" name="gold-coin" />&emsp;1.00</span></p>
              </li>
          </ul>
      </van-list>
    </div>
    <!-- 底部 -->
    <van-tabbar>
      <div class="hmw-foot">
       <div>
           <span>实付价格</span>
           <van-icon color="orange" name="gold-coin" />
           <p>1.00</p>
       </div>
       <van-button type="primary" block color="#eb6100" >提交订单</van-button>
      </div>
    </van-tabbar>
</div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
   return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   返回的点击事件
    onClickLeft(){
        this.$router.push('/detail')
    }
  },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body,
.hmwBox {
  height: 100% !important;
}
/* 大体布局 */
.hmwBox {
  display: flex;
  flex-direction: column;
}
.hmw-top ,.van-nav-bar{
 height: 11.73333vw;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.hmw-center {
  flex: 1 !important;
  background: #f0f2f5;
}
.hmw-foot,.van-tabbar {
    height: 14.4vw;
 display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    justify-content: space-between;
}
/* 主体部分顶部 */
.hmwc-top{
    background: white;
    width: 86%;
    padding: 1rem;
    margin: 1rem 0.6rem;
    border-radius: 0.3rem;
}
.hmwc-top>div{
    display: flex;
    height: 4rem;
    width: 95%;
}
.hmwc-top>div .hmwP1{
font-size: 3.74vw;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    line-height: 2rem;
}
.hmwc-top>div span{
    display: block;
    font-size: 4vw;
    font-weight: 500;
    color: #8c8c8c !important;
    padding-top: 0.45rem;
}
.hmwc-top .hmwP2{
font-size: 3.2vw;
    font-weight: 400;
    line-height: 5.86667vw;
        color: #b7b7b7;
}
ul>li{
    box-sizing: border-box;
    background: white;
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
}
/* 优惠券 */
ul>.hmwLi1{
    display: flex;
    justify-content: space-between;
}
ul>.hmwLi1 p{
    font-size: 1rem !important;
}
/* 最下方列表 */
.hmwLi2 p{
    display: flex;
    justify-content: space-between;
    line-height: 1.4em;
}
.hmwLi2 p span{
    font-size: 0.8rem;
}
.hmwSpanNum{
    font-size: 1rem;
    color:#b7b7b7;
    /* color: goldenrod; */
}
.hmwLi2 .van-icon{
    padding-top: 0.2rem !important;
}
/* 底部 */
.hmw-foot .van-button{
    height: 100%;
    width: 40%;
    font-size: 1.2rem;
}
.hmw-foot>div{
    display: flex;
    box-sizing: border-box;
    padding: 1rem 1rem 1rem 2rem;
    text-align: left;
}
.hmw-foot>div>p{
    font-size: 1.6rem;
    color: #e02020 !important;
    font-weight: 500;
}
.hmw-foot .van-icon{
    padding-top: 0.5rem;
}
.hmw-foot>div>span{
        color: #8c8c8c;
    font-size: 0.75rem;
    padding-top: 0.5rem;
}
</style>
