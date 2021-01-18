<template>
  <div class="waw_subject_container">
    <NavTitle @onChangeCheck="onChangeCheck"></NavTitle>
    <div class="waw_sub_box">
      <div class="waw_sub">
        <van-checkbox-group v-model="result" @change="onChangeCheck">
          <van-checkbox shape="square" name="语文">语文</van-checkbox>
          <van-checkbox shape="square" name="数学">数学</van-checkbox>
          <van-checkbox shape="square" name="英语">英语</van-checkbox>
          <van-checkbox shape="square" name="物理">物理</van-checkbox>
          <van-checkbox shape="square" name="化学">化学</van-checkbox>
          <van-checkbox shape="square" name="政治">政治</van-checkbox>
          <van-checkbox shape="square" name="信息技术">信息技术</van-checkbox>
        </van-checkbox-group>
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
      result:JSON.parse(localStorage.getItem("result")) || ["语文"],
      checked: false,
    };
  },
  methods: {
    onChangeCheck(item){//点击改变复选框的状态
      // console.log(item);
      this.result = item;
    },
    onChangeCheck(){//点击保存修改完成
      localStorage.setItem("result",JSON.stringify(this.result));
      this.$router.go(-1);
    }
  },
};
</script>
<style lang='scss' scoped>
.waw_subject_container {
  width: 100%;
  height: 100vh;
  background: whitesmoke;
}
.waw_sub_box {
  width: 100%;
  margin-top: 0.5rem;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.waw_sub {
  width: 96%;
}
.van-checkbox {
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
}
</style>