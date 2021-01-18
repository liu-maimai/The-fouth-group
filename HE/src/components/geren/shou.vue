<template>
  <div>
      <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
      <div class="sy-dvv">
          <img src="../../assets/icon/收藏.png" alt="">
          <p class="sy_p">暂无收藏</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
methods: {
    onClickLeft(){
        this.$router.go("-1")
    }
},
mounted() {
    this.$Net.cang(
        {
            // collect_id:
        }
    ).then(res=>{
        console.log(res);
    })
},
}
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

</style>