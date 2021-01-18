<template>
  <div>
    <Navbar></Navbar>
    <van-row>
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </van-col>
      <van-col span="8">
        <div class="gonggu">
          <div class="img"><van-icon size="18" name="failure" /></div>
          <div class="ggct">巩固全部错题</div>
        </div>
      </van-col>
      <van-col span="8">
        <div class="fenl">
          <div class="imgs"><van-icon size="18" name="failure" /></div>
          <div class="cuoti" ref="yichu" @click="onclick">移除错题</div>
        </div>
      </van-col>
    </van-row>
    <div>
      <van-empty class="div1" description="请稍等，试卷正在赶来的路上啦" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      value1: 0,
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "考点专练", value: 3 },
        { text: "仿真模考", value: 4 },
      ],
    };
  },
  methods: {
    onclick() {
      this.$dialog
        .alert({
          //加上标题
          message: "是否要移除错题", //改变弹出框的内容
          showCancelButton: true, //展示取水按钮
        })
        .then(() => {
          //点击确认按钮后的调用

          console.log("已确认");
          this.$refs.yichu.style.color = "red";
        })
        .catch(() => {
          //点击取消按钮后的调用
          console.log("已取消");
          this.$refs.yichu.style.color = "";
        });
    },
  },
};
</script>
<style scoped>
.div1 {
  width: 100%;
  height: 2.1rem;
  margin-top: 5rem;
}
.fenl {
  /* margin-top: 1rem;
  display: flex;
  padding: 0 0.1rem;
  font-size: 0.13rem;
  line-height: 2rem; */
    /* height: 3rem; */
  display: flex;
  font-size: 0.85rem;
  padding: 0 0.05rem;
  line-height: 2rem;
  font-weight: 50;
  color: gray;
  /* border: 1px solid #000; */
  margin-top: 1rem;
  background: white;

}
.cuoti {
  text-align: center;
  font-weight: 50;
  /* color: red; */
  line-height: 1.2rem;
}
.cuoti1 {
  text-align: center;
  font-weight: 50;
  /* color: red; */
  line-height: 0.43rem;
}
.img {
  line-height: 2rem;
  vertical-align: middle;
  margin-right: 0.05rem;
}
.imgs {
  line-height: 1.5rem;
  vertical-align: middle;
  margin-right: 0.05rem;
}
.ggct {
  line-height: 1.5rem;
}
.gonggu {
  /* height: 3rem; */
  display: flex;
  font-size: 0.85rem;
  padding: 0 0.05rem;
  line-height: 2rem;
  font-weight: 50;
  color: gray;
  /* border: 1px solid #000; */
  margin-top: 1rem;
  background: white;

}
</style>