<template>
  <div>
    <Navbar></Navbar>
  <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />

      </van-dropdown-menu>

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
      value2: "a",
      value3:"A",
      option1: [
        { text: "考试类型", value: 0 },
        { text: '全部', value: 1 },
        { text: '模拟考试', value: 2 },
        { text: '正式考试', value: 3 },

      ],
      option2: [
        { text: "考试状态", value: "a" },
        { text: "全部", value: "b" },
        { text: "未开始", value: "c" },
        { text: "进行中", value: "d" },
        { text: "已结束", value: "e" },

      ],
       option3: [
        { text: "考试状态", value: "A" },
        { text: "全部", value: "B" },
        { text: "已做", value: "C" },
        { text: "未做", value: "D" },

      ],
    };
  },
};
</script>

<style scoped>
.div1{
  width: 100%;
  height: 2.1rem;
  margin-top: 5rem;

}
</style>