<template>
  <div>
    <!-- 一对一辅导顶部导航栏 -->
    <van-nav-bar fixed>
      <template #title>
        <span class="Solo_top_title">一对一辅导</span>
      </template>
      <template #left>
        <van-icon name="arrow-left" size="30px" color="gray" @click="Onback" />
        <!-- <van-icon name="arrow-left" size="30px" color="gray"  @click="lefts"/> -->
      </template>
      <template #right>
        <van-icon name="search" size="25px" color="gray" @click="search" />
      </template>
    </van-nav-bar>
    <!-- 选择栏 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1">
        <div class="Solo_Popup">
          <van-calendar
            :show-title="false"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '450px' }"
          />
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 选择框结束 -->
    <!-- 渲染讲师列表 -->
    <div class="Solo_list_box">
      <div v-for="(item, index) in order" :key="index" class="Solo_list">
        <ul class="Solo_list_ul">
          <li>
            <img :src="item.teacher_avatar" alt="" />
            <span class="Solo_list_p">{{ item.teacher_name }}</span>
            <p class="Solo_list_title">8年金牌讲师</p>
            <div @click="Ongo(item)">预约</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 如果没有token则展示请求登录页 -->
    <van-popup v-model="show" closeable class="Solo_Prpup">
      <img
        src="https://wap.365msmk.com/img/feiji.decaf161.png"
        alt=""
        width="100%"
      />
      <p class="Solo_Prpup_title">赶紧登录一下吧</p>
      <p class="Solo_Prpup_titles">立即预约一对一辅导，浏览更多视频教程~</p>
      <van-button
        round
        type="info"
        color="rgb(235, 97, 0)"
        class="Solo_Prpup_but"
        @click="Onpath"
        >立即登录</van-button
      >
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: [], //预约老师名单
      value1: 0, //第一个下拉框
      value2: "a", //第二个下拉框
      show: false, //弹出框状态
      option1: [{ text: "选择上课时间", value: 0 }],
      option2: [{ text: "选择老师条件", value: "a" }],
    };
  },
  methods: {
    Onback() {
      this.$router.back();
    },
    Ongo(item) {
      var token = localStorage.getItem("token");
      if ((token = !token)) {
        this.show = true;
      } else if ((token = !token)) {
        this.$router.push({
          path: "/sololist",
          query: {
            id: item.teacher_id,
          },
        });
      }
    },
    Onpath() {
      this.$router.push({
        path: "/login",
      });
    },
    search() {
      this.$router.push("/search");
    },
  },
  created() {
    this.$Net.List().then((res) => {
      this.order = res.data.data[4].list;
      console.log(this.order);
    });
  },
};
</script>
<style scoped>
.Solo_top_title {
  font-size: 1.2rem;
  color: gray;
}
.Solo_Popup {
  width: 100%;
  height: 26rem;
}
.Solo_list_box {
  width: 100%;
  height: 55rem;
  background: rgb(240, 240, 240);
}
.Solo_list {
  width: 90%;
  margin-left: 5%;
  height: 6rem;
  background: #fff;
  border-radius: 1rem;
  margin-top: 0.6rem;
}
.Solo_list_ul {
  width: 100%;
  height: 6rem;
}
.Solo_list_ul img {
  width: 3rem;
  height: 3rem;
  margin-top: 1.5rem;
  border-radius: 2rem;
  margin-left: 1rem;
  border: rgb(240, 240, 240) solid 0.1rem;
  float: left;
}
.Solo_list_p {
  margin-left: 1rem;
  font-size: 0.99rem;
  margin-top: 2rem;
}
.Solo_list_title {
  font-size: 0.7rem;
  color: gray;
  margin-top: 2rem;
}
.Solo_list_ul div {
  width: 4rem;
  height: 1.5rem;
  border: 0.1rem solid rgb(240, 240, 240);
  color: rgb(235, 97, 0);
  margin-left: 14rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 0.8rem;
  background: gainsboro;
}
.Solo_Prpup {
  width: 18rem;
  height: 20rem;
  border-radius: 1rem;
  text-align: center;
}
.Solo_Prpup img {
  width: 100%;
  height: 10rem;
}
.Solo_Prpup_title {
  font-size: 0.9rem;
}
.Solo_Prpup_titles {
  font-size: 0.7rem;
  color: gray;
}
.Solo_Prpup_but {
  margin-top: 1rem;
  width: 80%;
}
</style>
