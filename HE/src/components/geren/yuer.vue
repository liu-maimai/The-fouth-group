<template>
  <div>
      <div>
      <van-nav-bar title="我的余额"  right-text="余额明细" left-arrow @click-left="onClickLeft" />
      <div class="sy_yu"><span>我的余额</span><span class="s1">0学习币</span>
      <ul class="sy-uu">
          <li @click="gao(1)" :class="show==1?'su-lili':'llii'">
              <p>30000.00学习币</p>
              <p class="xue">￥30000.00</p>
          </li>
          <li  @click="gao(2)" :class="show==2?'su-lili':'llii'"><p>20000.00学习币</p>
              <p class="xue">￥20000.00</p></li>
          <li @click="gao(3)" :class="show==3?'su-lili':'llii'"><p>10000.00学习币</p>
              <p class="xue">￥10000.00</p></li>
          <li @click="gao(4)" :class="show==4?'su-lili':'llii'"><p>40000.00学习币</p>
              <p class="xue">￥40000.00</p></li>
          <li @click="gao(5)" :class="show==5?'su-lili':'llii'"><p>50000.00学习币</p>
              <p class="xue">￥50000.00</p></li>
          <li @click="gao(6)" :class="show==6?'su-lili':'llii'"><p>1000.00学习币</p>
              <p class="xue">￥1000.00</p></li>
          <li @click="gao(7)" :class="show==7?'su-lili':'llii'"><p>6000.00学习币</p>
              <p class="xue">￥6000.00</p></li>
          <li @click="gao(8)" :class="show==8?'su-lili':'llii'"><p>0.10学习币</p>
              <p class="xue">￥0.10</p></li>
      </ul>
        <p class="p1">充值说明</p>
        <div>
            <p class="p2">1、学习币是网校中专用的一种虚拟货币，大家可以用学习币购</p>
        </div>
      </div>
    <button :class="show==0?'bu':'buuu'">立即充值</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show:0
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go('-1')
        },
        gao(i){
            this.show=i
        }
    },
}
</script>

<style scoped>

.sy_yu{
    width: 100%;
    margin-top:2rem ;
    margin-left: 0.5rem;
}
.sy_yu .s1{
    margin-left:1rem ;
    color: orange;
}
.bu{
    width: 100%;
    height: 3rem;
    text-align: center;
    line-height: 100%;
    color: white;
    border: 0px;
    background: rgb(184, 183, 183);
    position: fixed;
    bottom: 1rem;
    z-index: 4;
}
.buuu{
    width: 100%;
    height: 3rem;
    text-align: center;
    line-height: 100%;
    color: white;
    border: 0px;
    background: orangered;
    position: fixed;
    bottom: 1rem;
    z-index: 4;
}
.sy-uu .llii{
width: 100%;
display: inline-flex;
justify-content: space-between;
margin-top: 0.5rem;
    border-radius:10px ;

}
.su-lili{
    width: 100%;
    border-radius:10px ;
display: inline-flex;
justify-content: space-between;
margin-top: 0.5rem;
border:1px solid orangered;
background: #F9F0D9;
box-shadow: 0 0.2rem 0.2rem 0 orangered;
}
.xue{
    color: red;
}
.p1{
    margin-left: 0.7rem;
    font-weight: 550;
}
.p2{
    font-size: 0.5rem;
    color: grey;
}
</style>