<template>
  <div>
    <ul class="Tab_box">
      <li
        v-for="(item, index) in week"
        :class="{ active: index == num }"
        @click="tab(index)"
        :key="index"
      >
      <p class="titile">
          {{a[index]}}
      </p>
         {{ item }}
      </li>
    </ul>
    <div class="tabCon">
      <div
        v-for="(itemCon, index) in tabContents"
        v-show="index == num"
        :key="index"
      >
        {{ itemCon }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    tabContents: ["没有课程阿", "没有课程阿", "没有课程", "没有课程", "没有课程", "没有课程",],
    a: ["星期五", "星期六", "星期日", "星期一", "星期二", "星期三", "星期四"],
    week: [],
    num: 1,
  }),
  created() {
    let data = [];
    for (let i = 6; i >= 0; i--) {
      data.push(this.getWeek(-i));
    }
    this.week = data;
  },
  methods: {
    getWeek(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds);
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tMonth + "/" + tDate;
    },
    doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = "0" + month;
      }
      return m;
    },
    tab(index) {
      this.num = index;
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 0.1rem;
}
.box {
  width: 90%;
  margin-left: 5%;
  height: 8rem;
  background: #fff;
}
.Tab_box {
  width: 90%;
  margin-left: 5%;
  height: 5rem;
  background: #fff;
  border-radius: 1rem;
}
.Tab_box li {
  margin-top: 0.1rem;
  float: left;
  width: 2rem;
  height: 2rem;
  margin-left: 0.8rem;
  font-size: 0.9rem;
}
.titile{
    width: 3rem;
    font-size: 0.6rem;
    margin-left: 0.2rem;
}
</style>