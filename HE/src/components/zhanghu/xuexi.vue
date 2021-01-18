<template>
  <div>
      <van-nav-bar title="我的学习卡"  right-text="学习卡兑换" left-arrow @click-left="onClickLeft" />
      <div class="sy-dvv">
          <img src="../../assets/icon/收藏.png" alt="">
          <p class="sy_p">暂无兑换记录</p>
      </div>
  </div>
</template>

<script>
export default {
methods: {
    onClickLeft(){
        this.$router.go("-1")
    }
},
}
</script>

<style scopde>
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