<template>
  <div>
    <Navbar></Navbar>
    <!-- 导航栏 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1">
        <div class="box">
          <van-sidebar v-model="activeKey" @change="OnClick">
            <van-sidebar-item
              v-for="(item, index) in About"
              :key="index"
              :title="item.name"
            />
          </van-sidebar>
          <div class="bos">{{ bout }}</div>
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 空状态 -->
    <van-empty description="请稍后，套卷正在赶来的路上啦" />
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
      activeKey: 0,
      value1: 0,
      value2: "a",
      option1: [{ text: "套卷分类", value: 0 }],
      option2: [
        { text: "全部", value: "a" },
        { text: "已做", value: "b" },
        { text: "未做", value: "c" },
      ],
      About: [],
      bout: [],
    };
  },
  created() {

  
  },
  methods: {
    OnClick(index) {
      //获取一级json下面的二级json
      this.bout = this.About[index].cname.name_z;
    },
  },
};
</script>

<style  scoped>
.box {
  display: flex;
}
.bos {
  width: 50%;
}
</style>