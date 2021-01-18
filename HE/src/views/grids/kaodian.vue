<template>
  <div>
    <Navbar></Navbar>
    <div class="harer">
      <div height=".34rem">
        <van-search
          shape="round"
          v-model="value"
          placeholder="请输入搜索关键词"
        />
      </div>

      <div class="box">
        <div class="item-lianxi-kaodiao">
          <!-- 侧边导航 -->
          <van-sidebar v-model="activeKey" @change="change">
            <van-sidebar-item v-for="(item, index) in list" :key="index">
              <template #title>
                {{ item.name }}
              </template>
            </van-sidebar-item>
          </van-sidebar>
        </div>
        <!-- 右边内容显示部分 -->
        <div class="exercise-footer-right">
          <van-tag
            class="biaoqian"
            v-for="(item, index) in hlist"
            :key="index"
            @click="nav"
            size="large"
            >{{item.name}}</van-tag
          >
        </div>
      </div>
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
      value: "",
      activeKey: 0,
      hlist: [],
      list: [],
      li:[]
    };
  },
  mounted() {
    // this.hlist=[  { pid: "1", activeKey: "0", title: "小学英语" },]
    this.$Net.LIANXI().then((res) => {
      // console.log(res.data.data);
      this.list = res.data.data;
    });
    this.$Net.TIKU().then((res) => {
      this.hlist = res.data.data;
      // console.log(this.hlist)
    });
  },
  methods: {
    async change(index) {
      // this.list=[]
      console.log(index)
      // console.log(this.hlist[index].id);
      var fl = await this.$Net.TIKU(this.hlist[index].id);
  
      this.li.push(fl.data.data);
      console.log(this.li)
    },
    nav() {
      this.$router.push({
        path: "/exercise",
      });
    },
  },
};
</script>

<style scoped>
.box{
  display: flex;
}
.harer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.exercise-footer-box {
  width: 100%;
  height: 4rem;
  display: flex;
  border-top: 0.01rem solid gainsboro;
}
.exercise-footer {
  width: 25%;
  height: 4rem;
  /* border: 1px solid palegoldenrod; */
}
.exercise-footer-right {
  width: 75%;
  height: 4rem;
  font-size: 0.14rem;
  border: 1px solid palegreen;
}
.biaoqian {
  margin: 0.2rem;
}
</style>