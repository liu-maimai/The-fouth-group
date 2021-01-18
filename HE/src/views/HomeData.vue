<template>
  <div>
    <div class="Homedata_box">
      <!-- 头部定位 -->
      <div class="Homedata_box_top">
        <van-icon
          name="arrow-left"
          color="#fff"
          size="1.5rem"
          @click="Onback"
          class="Home_box_top_icon"
        />
        <span class="Homedata_box_top_title">预约课程</span>
      </div>
      <div class="Homedata_top">
        <ul>
          <li>
            <img :src="HomedataImg" alt="" class="Homedata_top_img" />
            <p class="Homedata_top_title">{{ HomeTitle }}</p>
            <p class="Homedata_top_titleS">男 8年金牌讲师</p>
          </li>
        </ul>
        <div class="Home_top_but" @click="Onback">查看详情</div>
      </div>
      <!-- 顶部结束 中部开始-->
      <div class="Homedata_center">
        <p>
          <span class="Home_center_icon"></span>
          <span class="Homedata_center_title">选择时间</span>
          <span class="Homedata_center_titles">（北京时间）{{ nowWeek }}</span>
        </p>
      </div>
      <!-- 底部选择时间 -->
      <Sj />
    </div>
  </div>
</template>
<script>
import Sj from "../components/sj";
export default {
  components: {
    Sj,
  },
  data() {
    return {
      HomedataImg: [], //老师照片
      HomeTitle: [], //老师名字
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
    let item = this.$route.query.item
    console.log(item)
    // this.$Net.List().then((res) => {
      this.HomedataImg =item.teacher_avatar
    //     res.data.data[1].list[0].teachers_list[0].teacher_avatar;
      this.HomeTitle = item.teacher_name;
    // });
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
};
</script>
<style scoped>
.Homedata_box {
  width: 100%;
  height: 41.71rem;
  background: gainsboro;
}
.Homedata_box_top {
  width: 100%;
  height: 5rem;
  background: rgb(93, 166, 245);
}
.Homedata_box_top_title {
  margin-left: 10rem;
  font-size: 1.2rem;
  color: #fff;
}
.Home_box_top_icon {
  position: fixed;
  top: 0.6rem;
}
.Homedata_top {
  width: 90%;
  margin-left: 5%;
  height: 5rem;
  background: #fff;
  position: absolute;
  border-radius: 0.3rem;
  top: 2.3rem;
}
.Homedata_top_img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-left: 1rem;
  float: left;
}
.Homedata_top_title {
  margin-left: 5rem;
  font-size: 1rem;
}
.Homedata_top_titleS {
  margin-left: 5rem;
  font-size: 0.8rem;
  color: gray;
}
.Home_top_but {
  width: 5rem;
  height: 2rem;
  border: 0.05rem solid rgb(235, 97, 0);
  position: absolute;
  top: 1.3rem;
  left: 15rem;
  border-radius: 0.9rem;
  color: rgb(235, 97, 0);
  text-align: center;
  line-height: 2rem;
  font-size: 0.9rem;
}
.Homedata_center {
  width: 100%;
  margin-top: 4rem;
}
.Home_center_icon {
  display: block;
  width: 0.2rem;
  height: 1.4rem;
  background: rgb(235, 97, 0);
  margin-left: 1rem;
  float: left;
}
.Homedata_center_title {
  margin-left: 0.5rem;
  font-size: 0.99rem;
  color: gray;
}
.Homedata_center_titles {
  margin-left: 0.1rem;
  font-size: 0.9rem;
  color: gray;
}
</style>

