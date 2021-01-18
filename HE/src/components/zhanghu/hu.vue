<template>
  <div>
      <van-nav-bar title="开通会员" left-arrow @click-left="onClickLeft" />
      <div>
          <ul class="uuu-p">
              <li class="li1"> <img src="../../assets/icon/女孩.jpg" alt=""></li>
              <li class="li1">
                  <p>小嘎吧<br><span class="kai">开通会员免费学习</span></p>
              </li>
          </ul>
      </div>
      <p class="ppp1">购买会员<span class="span">购买会员后可免费观看会员课程</span></p>
      <div class="sy-dvv">
          <ul @click="dian(1)"  :class="show==1?'sss-p':'sy-uuu'">
              <li class="lii">季度会员</li>
              <li class="shii">
                  <img src="../../assets/icon/钱.png" alt="">
                  40.00
              </li>
          </ul>
             <ul @click="dian(2)"  :class="show==2?'sss-p':'sy-uuu'">
              <li class="lii">半年会员</li>
              <li class="shii">
                  <img src="../../assets/icon/钱.png" alt="">
                  75.00
              </li>
          </ul>
             <ul @click="dian(3)"  :class="show==3?'sss-p':'sy-uuu'">
              <li class="lii">月会员</li>
              <li class="shii">
                  <img src="../../assets/icon/钱.png" alt="">
                  15.00
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show:1,
        }
    },
methods: {
    onClickLeft(){
        this.$router.go("-1")
    },
    dian(i){
        this.show=i;
        console.log(this.show)
    }
},
}
</script>

<style scoped>
.uuu-p{
    width: 100%;
    display: inline-flex;
    margin-top:1rem ;
}
.sss-p{
        width: 5.5rem;
     height: 6rem;
     border-radius:10px ;
     background:#F9F0D9 ;
     border: 1px solid orange;
     text-align: center;
}
.uuu-p img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius:50% ;
    position: relative;
    top:0.5rem;
}
.li1{
    margin-left:0.5rem ;
    font-size:0.6rem ;
}
.kai{
    color: grey;
}
.ppp1{
width: 100%;
margin-left: 0.5rem;
margin-top: 3rem;
color: grey;
}
.ppp1 .span{
    margin-left: 0.5rem;
    font-size: 0.5rem;
    color: rgb(167, 167, 167);
}
.sy-dvv{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}
 .sy-uuu{
     width: 5.5rem;
     height: 6rem;
     border-radius:10px ;
     background:white ;
     border: 1px solid rgb(179, 177, 177);
     text-align: center;
 }
 .lii{
     font-size: 0.5rem;
    margin-top: 1.4rem;
 }
 .shii{
     font-size: 1.5rem;
     color: orange;
    margin-top: 0.6rem;
 }
 .shii img{
     width: 1rem;
     height: 1rem;
 }
</style>