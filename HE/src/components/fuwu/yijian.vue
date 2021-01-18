<template>
  <div>
      <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
      <div>
          <div class="shi">
              <p class="p2">请输入你的意见</p>
          </div>
          <p class="p3"><span>0</span>/<span>500</span></p>
          <button class="bu">提交</button>
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

<style scoped>
.shi{
    width: 90%;
    height: 10rem;
    border: 1px solid rgb(219, 219, 219);
    margin: 0 auto;
    margin-top: 2rem;
}
.p2{
    font-size: 0.5rem;
    color: rgb(160, 160, 160);
    margin-left: 0.3rem;
}
.p3{
      font-size: 0.5rem;
    color: rgb(160, 160, 160);
    float: right;
    margin-right: 1rem;
}
.bu{
    width: 90%;
    height: 3rem;
    border-radius:5px ;
    background: coral;
    border: 0px;
    color: white;
    text-align: center;
    line-height: 100%;
    margin-left:1rem ;
}
</style>