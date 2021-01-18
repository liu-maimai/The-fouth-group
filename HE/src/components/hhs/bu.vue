<template>
  <div>
    <div class="sy_yao" @click="huoDong">
      <ul class="sy_uu">
        <li><img src="../../assets/xin.png" alt="" /></li>
        <li>
          <p>邀请好友注册APP，享多重好礼</p>
          <p>限时特惠，多邀多得</p>
        </li>
      </ul>
      <span class="s2"><img src="../../assets/icon/右白.png" alt="" /></span>
    </div>
    <van-overlay :show="show" @click="huoDong">
      <div class="wrapper">
        <div class="block">
          <img src="../../assets/icon/活动.png" alt="">
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    huoDong() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 20rem;
    height: 35rem;
    background-color: #fff;
  }
  .block img{
    width: 100%;
    height: 100%;
  }
.sy_yao {
  width: 95%;
  height: 2.7rem;
  background: #ed741f;
  border: 0px;
  border-radius: 30px;
  margin-left: 0.5rem;
}
.sy_uu {
  height: 2.7rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.sy_uu li {
  font-size: 0.5rem;
  color: white;
  margin-left: 1rem;
}
.s2 {
  float: right;
  margin-top: 0.6rem;
  margin-right: 0.7rem;
  color: white;
}
.s2 img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>