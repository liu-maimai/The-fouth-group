<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="Homelist">
      <span
        ><van-icon name="arrow-left" color="#fff" size="1.5rem" @click="Onback"
      /></span>
      <span class="Homelist_rigth_title">讲师详情</span>
    </div>
    <!-- 顶部导航栏背景色 -->
    <div class="Homelist_top"></div>
    <!-- 顶部导航栏背景固定灰色 -->
    <div class="Homelist_top_footer"></div>
    <div v-for="(item, index) in Homelist" :key="index">
      <ul class="Homelist_box">
        <li>
          <img :src="Homelist" alt="" />
          <p class="ho">{{ HomelistTitle }}</p>
          <p class="Homelist_box_title">
            男 8年金牌讲师 <span class="Homelist_title">已关注</span>
          </p>
        </li>
      </ul>
    </div>
    <van-tabs
      v-model="activeName"
      title-active-color="rgb(235, 97, 0)"
      title-style="rgb(235, 97, 0)"
    >
      <van-tab title="讲师介绍" name="a">
        <ul class="Homelist_ul">
          <li>教学年龄 <span>8年金牌讲师</span></li>
          <li>授课价格 <span>400学习币</span></li>
          <li class="Homelist_li">
            老师简绍
            <span class="Homelist_li_sapn">
              马老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</span
            >
          </li>
        </ul>
      </van-tab>
      <van-tab title="主讲课程" name="b">
        <div v-for="(item, index) in date" :key="index" class="HomeLiat_Tab_A">
          <ul>
            <li>
              每时每课特级教师-自主招生冲刺讲座知识点总结————{{ item.title }}
            </li>
            <li class="HomeLiat_Tab_A_li">
              <img :src="Homelist" alt="" width="100%" />
              <p>{{ HomelistTitle }}</p>
            </li>
            <li>
              <p class="Homelist_Tab_title_p">41人已经报名 <span>免费</span></p>
            </li>
          </ul>
          <!-- 底部定位 -->
          <div class="Homelist_footer" @click="OnGo(date)">立即预约</div>
        </div>
      </van-tab>
      <van-tab title="学员评价" name="c">
        <van-empty description="暂无学员评价" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Homelist: [], //老师图片
      HomelistTitle: [], //老师名字
      activeName: "a", //分类切换
      date: [],
    };
  },
  created() {
    let item = this.$route.query.item;
    let Items = JSON.parse(item)
     this.Homelist = Items.teacher_avatar;
    this.HomelistTitle = Items.teacher_name;
    this.date = Items;
  },
  methods: {
    Onback() {
      //返回上一级
      this.$router.go(-1);
    },
    //进入预约页
    OnGo(item) {
      this.$router.push({
        path: "/homedata",
        query:{
          item
        }
      });
    },
  },
};
</script>
<style scoped>
body {
  width: 100%;
  height: 100%;
}
.Homelist {
  width: 100%;
  height: 1rem;
  position: fixed;
  top: 0.6rem;
  left: 0rem;
  color: #fff;
}
.Homelist_rigth_title {
  float: right;
  margin-right: 9rem;
  font-weight: 500;
  font-size: 1.2rem;
}
.Homelist_top {
  width: 100%;
  height: 5rem;
  background: rgb(93, 166, 245);
}
.Homelist_top_footer {
  width: 100%;
  height: 3rem;
  background: gainsboro;
}
.Homelist_box {
  width: 90%;
  margin-left: 5%;
  height: 5rem;
  background: #fff;
  position: absolute;
  border-radius: 0.3rem;
  top: 2.3rem;
}
.Homelist_box img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
  /* margin-top: 0.4rem; */
  margin-left: 1rem;
  float: left;
}
.Homelist_box .ho {
  margin-top: 0.4rem;
}
.Homelist_box_title {
  font-size: 0.7rem;
  color: gray;
  margin-left: 0.3rem;
  margin-top: 0.4rem;
}
.Homelist_title {
  font-size: 1rem;
  margin-left: 7rem;
}
.Homelist_ul {
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: gray;
}
.Homelist_ul li {
  margin-top: 1rem;
  margin-left: 1rem;
}

.Homelist_li_sapn {
  display: block;
  margin-top: 1rem;
  width: 20rem;
  height: 12rem;
}
.HomeLiat_Tab_A {
  width: 90%;
  margin-left: 5%;
  height: 10rem;
  box-shadow: 1rem;
  border: 0.01rem solid gainsboro;
  border-radius: 0.3rem;
  margin-top: 1rem;
}
.Homelist_footer {
  width: 100%;
  height: 3.5rem;
  background: rgb(235, 97, 0);
  color: #fff;
  text-align: center;
  line-height: 3.5rem;
  font-size: 1.2rem;
  position: fixed;
  bottom: 0rem;
}
.HomeLiat_Tab_A_li img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  float: left;
}
.Homelist_Tab_title_p {
  margin-top: 3.5rem;
  color: gainsboro;
  font-size: 0.9rem;
}
.Homelist_Tab_title_p span {
  margin-left: 11rem;
  color: green;
  font-size: 1rem;
}
</style>