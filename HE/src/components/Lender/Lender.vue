<template>
  <div>
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="25px" color="gray" @click="Onback" />
      </template>
      <template #title>
        <span class="Calendar_top_title">学习日历</span>
      </template>
    </van-nav-bar>
    <van-calendar
      :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '450px' }"
    />

    <p class="title">
      {{ nowDate }}
    </p>
    <span class="title_rigth"> 当天0节课 </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      nowWeek: "", //星期几
      nowDate: "", //本地日期
      active: 1,
    };
  },
  methods: {
    Onback() {
      this.$router.go(-1);
    },
    setNowTimes() {
      let myDate = new Date();
      // console.log(myDate)
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.nowDate = yy + "-" + mm + "-" + dd;
      this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
};
</script>
<style scoped>
.Calendar_top_title {
  font-size: 1.2rem;
  color: gray;
}
.title {
  color: rgb(235, 97, 0);

}
.title_rigth {
  font-size: 0.7rem;
  color: gray;;
  
}
</style>