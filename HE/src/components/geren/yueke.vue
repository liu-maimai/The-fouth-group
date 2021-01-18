<template>
  <div>
      <van-nav-bar title="约课订单" left-arrow @click-left="onClickLeft" />
      <ul class="uuuuu">
        <li @click="wo(1)" :class="show==1?'suu-p':'lli'">全部订单</li>
        <li @click="wo(2)" :class="show==2?'suu-p':'lli'">待支付</li>
        <li @click="wo(3)" :class="show==3?'suu-p':'lli'">已完成</li>
        <li @click="wo(4)" :class="show==4?'suu-p':'lli'">已取消</li>
    </ul>
    <div class="sy-dvv">
          <img src="../../assets/icon/收藏.png" alt="">
          <p class="sy_p">暂无订单</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show:1
        }
    },
methods: {
    onClickLeft(){
        this.$router.go("-1")
    },
       wo(i){
        this.show=i
    }
},
}
</script>

<style scoped>
.suu-p{
    width: 3.5rem;
    color: orange;
    border-bottom:0.01rem solid orange;
    font-size: 0.5rem;
}
.uuuuu{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
}
.uuuuu .lli{
    width: 3.5rem;
    color: grey;
    font-size: 0.5rem;
}
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
</style>