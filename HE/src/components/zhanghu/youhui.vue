<template>
  <div>
    <van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" />
    <div>
      <!-- <van-tabs v-model="active">
        <van-tab title="未使用" @click="wo(1)" :class="show==1?'suu-p':''"></van-tab>
        <van-tab title="已使用" @click="wo(2)" :class="show==1?'suu-p':''"></van-tab>
        <van-tab title="已过期" @click="wo(3)" :class="show==1?'suu-p':''"></van-tab>
      </van-tabs> -->
    <ul class="uuuuu">
        <li @click="wo(1)" :class="show==1?'suu-p':'lli'">未使用</li>
        <li @click="wo(2)" :class="show==2?'suu-p':'lli'">已使用</li>
        <li @click="wo(3)" :class="show==3?'suu-p':'lli'">已过期</li>
    </ul>
    </div>
     <div class="sy-dvv">
          <img src="../../assets/icon/收藏.png" alt="">
          <p class="sy_p">暂无优惠券</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active:2,
            show:1
        }
    },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    wo(i){
        this.show=i
    }
  },
};
</script>

<style scoped>
.sy-dvv{
    width: 100%;
    margin-top:3rem ;
}
.sy-dvv img{
    width:50%;
    height: 50%;
    margin-left: 6rem;
}
.sy_p{
    font-size: 0.5rem;
    color: rgb(182, 179, 179);
    text-align: center; 
}
.suu-p{
    color: orange;
    border-bottom:0.01rem solid orange;
}
.uuuuu{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
}
.uuuuu .lli{
    width: 3rem;
    color: grey;
}
</style>