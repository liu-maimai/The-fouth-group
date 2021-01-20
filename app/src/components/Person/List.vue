<template>
  <div>
    <ul>
      <li>
        <span><img src="@/assets/imgs/dizhi.png" />地址管理</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/yijian.png" />意见反馈</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/zuoye.png" />我的作业</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/shequ.png" />我的社区</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/dingdan.png" />课程订单</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/youhui.png" />优惠券</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/xuexi.png" />学习卡</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/fen.png" />分销中心</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/xiao.png" />消息中心</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/wode.png" />关于我们</span
        ><van-icon name="arrow" />
      </li>
      <li>
        <span><img src="@/assets/imgs/shezhia.png" />设置</span
        ><van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  li {
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    box-sizing: border-box;
    span {
      font-size: 0.14rem;
      display: flex;
      align-items: center;
      img {
        width: 0.16rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
