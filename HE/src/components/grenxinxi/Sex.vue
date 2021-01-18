<template>
  <div class="waw_sex_container">
    <NavTitle @onClickChangeSex="onClickChangeSex"></NavTitle>
    <div class="waw_sex_radio_box">
      <div class="waw_sex_box">
        <div class="waw_sex_success" @click="onChangeSex(0)">
          <div>男</div>
          <van-icon v-show = "num==0" name="success" color="orange"/>
        </div>
        <div class="waw_sex_success" @click="onChangeSex(1)">
          <div>女</div>
          <van-icon v-show = "num==1" name="success" color="orange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTitle from "./TitlePreservation";
export default {
  components: {
    NavTitle,
  },
  data() {
      return {
          num:localStorage.getItem("num") || 0,
          sex:localStorage.getItem("sex") || "男",
      }
  },
  methods:{
      onChangeSex(num){//点击改变性别
          this.num = num;
            if(this.num==0){
                this.sex = "男"
            }else{
                this.sex = "女"
            }
            localStorage.setItem("num",this.num);
            // localStorage.setItem("sex",this.sex);
      },
      onClickChangeSex(){
          localStorage.setItem("sex",this.sex);
            this.$router.go(-1);
      }
  }
};
</script>
<style lang='scss' scoped>
.waw_sex_container {
  width: 100%;
  height: 100vh;
  background: whitesmoke;
}
.waw_sex_radio_box {
  margin-top: 0.5rem;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
   background: white;
  .waw_sex_box {
    width: 94%;
  }
}
.waw_sex_success{
    border-bottom: 1px solid lightgray;
    width: 100%;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
</style>