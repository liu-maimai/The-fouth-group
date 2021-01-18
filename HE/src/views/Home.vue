<template>
  <div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in  lunbo" :key="index">
        <img
          :src="item.banner_img"
          width="100%"
        />
      </van-swipe-item>
      
    </van-swipe>
    <!-- 主页列表 -->
    <div class="Home_overall">
      <!-- 主页推荐 -->
      <ul class="Home_advice">
        <li @click="OngoA">
          <img src="../assets/1.png" alt="" class="img" />
          <div>特色课</div>
        </li>
        <li @click="OngoC">
          <img src="../assets/2.png" alt="" class="img" />
          <div>一对一辅导</div>
        </li>
        <li @click="OngoB">
          <img src="../assets/3.png" alt="" class="img" />
          <div>学习日历</div>
        </li>
      </ul>
      <!-- 名师推荐 -->
      <div class="Hh"></div>
      <p><span class="Home_probably_P"></span>名师推荐</p>
      <div
        v-for="(item, index) in probably.slice(1, 3)"
        :key="index + 'a'"
        @click="Onclick(item)"
      >
        <div class="Home_teacher">
          <ul>
            <li>
              <img :src="item.teacher_avatar" alt="" />
              <p class="Home_teacher_title">{{ item.teacher_name }}</p>
              <p class="Home_teacher_p">{{ item.introduction }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 精品课程 -->
      <p><span class="Home_probably_P"></span>精品课程</p>
      <div class="hmwJP" v-for="(item, index) in course" :key="index + 'b'" @click="hmwJumpXQ(item)">
        <div class="Home_course">
          <div class="Home_course_box">
            <p class="hmwTitleJP">
              每时每课特级教师-自主招生冲刺讲座知识点总结————{{ item.title }}
            </p>
            <div>
              <img :src="item.cover_img" alt="" class="Home_course_img" />
            <p>{{ courseTitle }}</p>
            </div>
            
            <p class="hmwJPfoot">
              <span class="Home_course_title"
                >{{ item.sales_num }}人已报名
                <span class="Home_course_p_title"
                  >￥{{ item.total_periods }}</span
                ></span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- 推荐课程 -->
      <p><span class="Home_probably_P"></span>推荐课程</p>
      <div v-for="(item, index) in courses" :key="index + 'c'" @click="hmwJumpXQ(item)">
        <div class="Home_course">
          <div class="Home_course_box">
            <p class="hmwTitleJP">
              每时每课特级教师-自主招生冲刺讲座知识点总结————{{ item.title }}
            </p>
            <div>
              <img :src="coursesImg" alt="" class="Home_course_img" />
            <p>{{ courseTitle }}</p>
            </div>
            
            <p class="hmwJPfoot">
              <span class="Home_course_title"
                >{{ item.sales_num }}人已报名
                <span class="Home_course_p_title"
                  >￥{{ item.total_periods }}</span
                ></span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- 明星讲师 -->
      <p><span class="Home_probably_P"></span>明星讲师</p>
      <div
        v-for="(item, index) in probably.slice(1, 3)"
        :key="index"
        @click="Onclick(item)"
      >
        <div class="Home_teacher">
          <ul>
            <li>
              <img :src="item.teacher_avatar" alt="" />
              <p class="Home_teacher_title">{{ item.teacher_name }}</p>
              <p class="Home_teacher_p">{{ item.introduction }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 如果没有token显示内容 -->
    <van-popup v-model="show" closeable class="Home_Prpup">
      <img
        src="https://wap.365msmk.com/img/feiji.decaf161.png"
        alt=""
        width="100%"
      />
      <p class="Home_Prpup_title">赶紧登录一下吧</p>
      <p class="Home_Prpup_titles">立即预约一对一辅导，浏览更多视频教程~</p>
      <van-button
        round
        type="info"
        color="rgb(235, 97, 0)"
        class="Home_Prpup_but"
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
      probably: [], //名师推荐
      course: [], //精品课程
      courseTitle: [], //精品课程讲师名字
      courses: [], //推荐课程
      coursesImg: [], //推荐课程老师照片
      teacher: [], //明星讲师
      show: false,
      lunbo:[]
    };
  },
  mounted() {
    this.$Net.LUNBO().then((res) => {
      console.log(res.data.data);
      this.lunbo=res.data.data
    });
  },
  methods: {
    Onclick(item) { 
     
      var token = localStorage.getItem("token");
      if ((token = !token)) {
        this.show = true;
      } else if ((token = !token)) {
        this.$router.push({
          path: "/homelist",
          query: {
             item : JSON.stringify(item)
          }
        
        });
      }
    },
    Onpath() {
      this.$router.push({
        path: "/login",
      });
    },
    OngoA() {
      this.$router.push({
        path: "/about",
      });
    },
    OngoB() {
      this.$router.push({
        path: "/lenderData",
        name: "LenderData"
      });
    },
    OngoC() {
      this.$router.push({
        path: "/solo",
        name: "Solo",
      });
    },
    // 跳转到详情页面
    hmwJumpXQ(item){
      // console.log(item)
      sessionStorage.setItem('hmwXQ',JSON.stringify(item))
      sessionStorage.setItem('hmwPath',JSON.stringify({path:'/',name:'Home'}))
      this.$router.push({
        path: "/detail"
      });
    },
  },
};
</script>
<style  scoped>
.my-swipe{
  width: 100%;
  height: 12.5rem;
}
.my-swipe   img{
  width: 100%;
  height: 100%;
}
.Home_overall {
  width: 100%;
  height: 113rem;
  background: rgb(240, 242, 245);
}
.Home_advice {
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: absolute;
  left: 0;
  top: 11rem;
}
.Home_advice li {
  display: block;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 1rem;
  background: #fff;
  margin-left: 0.3rem;
}
.Hh {
  width: 100%;
  height: 5rem;
}
.Home_probably_P {
  width: 0.2rem;
  height: 1.3rem;
  background: rgb(235, 97, 0);
  margin-left: 1rem;
  margin-right: 0.5rem;
  float: left;
}
.Home_teacher {
  width: 90%;
  height: 5rem;
  margin-top: 1rem;
  margin-left: 5%;
  background: #fff;
  border-radius: 0.6rem;
  
}
.Home_teacher li{
padding: 1rem;
}
.Home_teacher ul li img {
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  float: left;
}
.Home_teacher_title {
  font-size: 1rem;
  line-height: 2.5rem;
  margin-left: 4rem;
}
.Home_teacher_p {
  color: gray;
  margin-left: 4rem;
  font-size: 0.8rem;
}
/* 精品课程 */
.Home_course {
  /* box-sizing: border-box; */
  width: 81%;
  height: 9.2rem;
  background: #fff;
  margin-left: 5%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  padding: 1rem;
}
.Home_course_img {
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  margin-top: 1rem;
}
.Home_course_title {
  color: gray;
  font-size: 0.7rem;
}
.Home_course_p_title {
  font-size: 0.8rem;
  color: red;
  float: right;
}
.Home_title {
  font-size: 0.6rem;
}
.img {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  width: 1.5rem;
}
.Home_advice li div{
  color: gray;
  font-size: 0.5rem;
}
.Home_Prpup {
  width: 18rem;
  height: 20rem;
  border-radius: 1rem;
  text-align: center;
}
.Home_Prpup img {
  width: 100%;
  height: 10rem;
}
.Home_Prpup_title {
  font-size: 0.9rem;
}
.Home_Prpup_titles {
  font-size: 0.7rem;
  color: gray;
}
.Home_Prpup_but {
  margin-top: 1rem;
  width: 80%;
}
/* 精品课程样式 */
/* 标题 */
.hmwTitleJP{
  margin: 0.5rem 0;
  font-size: 4.26667vw;
  color: #333;
}
/* 图文部分 */
.Home_course_box>div{
  display: flex;
  align-items: center;
}
.Home_course_box>div p{
  margin: 0.8rem 0 0 0.5rem;
font-size: 3.2vw;
color:#b7b7b7;
}
.Home_course_box>div img{
  margin: 0;
}
/* 底下部分 */
.hmwJPfoot{
  margin: 1rem 0 0 0;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
}
</style>
