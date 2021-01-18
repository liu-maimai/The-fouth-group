<template>
  <div>
    <van-nav-bar title="课程订单" left-arrow @click-left="onClickLeft" />
    <ul class="uuuuu">
      <li @click="wo(1)" :class="show == 1 ? 'suu-p' : 'lli'" >全部订单</li>
      <li @click="wo(2)" :class="show == 2 ? 'suu-p' : 'lli'">待支付</li>
      <li @click="wo(3)" :class="show == 3 ? 'suu-p' : 'lli'">已完成</li>
      <li @click="wo(4)" :class="show == 4 ? 'suu-p' : 'lli'">已取消</li>
    </ul>
    <div class="sy-uu" v-for="item in list" :key="item.jgx">
        <p><span>{{item.dbh}}</span><button>交易完成</button></p>
        <p>{{item.title}}</p>
        <p>{{item.sj}}</p>
        <p>实付款:{{item.jgx}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 1,
      lists:[
          {
              id:0,
              title:"全部订单"
          },
          {
              id:1,
              title:"待支付"
          },
          {
              id:2,
              title:"已完成"
          },
          {
              id:3,
              title:"已取消"
          }
      ],
      list: [
        {
          dbh: "订单编号：2020092915543981554",
          title: "每时每课特级教师-自主招生冲刺讲座-1代数式求值1",
          sj: "时间：2020.09.29 15:54",
          jgx: 0,
        },
        {
          dbh: "订单编号：2020092915543981554",
          title:"自主每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题",
          sj: "时间：2020.09.29 15:54",
          jgx: 1,
          but: "加入完成",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    wo(i) {
      this.show = i;
    },
  },
  mounted() {
    this.$Net.ke().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped>
.suu-p {
  width: 3.5rem;
  color: orange;
  border-bottom: 0.01rem solid orange;
  font-size: 0.5rem;
}
.uuuuu {
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
}
.uuuuu .lli {
  width: 3.5rem;
  color: grey;
  font-size: 0.5rem;
}
.sy-dvv {
  width: 100%;
  margin-top: 3rem;
}
.sy-dvv img {
  width: 50%;
  height: 50%;
  margin-left: 6rem;
}
.sy_p {
  font-size: 0.5rem;
  color: rgb(182, 179, 179);
  text-align: center;
}
</style>