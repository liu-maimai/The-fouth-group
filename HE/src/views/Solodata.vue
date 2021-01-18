<template>
  <div>
    <div class="Solodata_top">
      <div class="Solist_top_box">
        <span class="Solodata_icon"
          ><van-icon
            name="arrow-left"
            color="#fff"
            size="1.5rem"
            @click="Onback"
        /></span>
        <span class="Solo_rigth_title">讲师详情</span>
      </div>
    </div>
    <!-- 老师数据 -->
    <div class="Solodata">
      <div v-for="(item, index) in data" :key="index" class="Solodata_top_top">
        <img :src="item.teacher_avatar" alt="" />
        <p>{{ item.teacher_name }}</p>
        <p class="Solodata_title">金牌讲师</p>
        <div class="Solodata_but" @click="back">预约课程</div>
      </div>
      <div class="top"></div>
      <!-- 老师介绍 -->
          <van-tabs
      v-model="activeName"
      title-active-color="rgb(235, 97, 0)"
      title-style="rgb(235, 97, 0)"
    >
      <van-tab title="讲师介绍" name="a">
        <ul class="Solodata_ul">
          <li>教学年龄 <span>8年金牌讲师</span></li>
          <li>授课价格 <span>400学习币</span></li>
          <li class="Solodata_li">
            老师简绍
            <span class="Solodata_li_sapn">
              马老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</span
            >
          </li>
        </ul>
      </van-tab>
      <van-tab title="主讲课程" name="b">
          <div v-for="(item,index) in data" :key="index" class="Solodata_Tab_A">
             <ul>
                <li>每时每课特级教师-自主招生冲刺讲座知识点总结————{{item.teacher_name}}</li>
                <li class="Solodata_Tab_A_li">
                    <img :src="item.teacher_avatar" alt="" width="100%">
                </li>
                <li>
                    <p class="Solodata_Tab_title_p">{{item.introduction}}人已经报名<span>免费</span></p> 
                </li>
             </ul>
          </div>
      </van-tab>
      <van-tab title="学员评价" name="c"> 
          <van-empty description="暂无学员评价" />
      </van-tab>
    </van-tabs>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      data: [],
      activeName:'a'
    };
  },
  created() {
    let id = this.$route.query.id;
     console.log(id)
    this.$axios.get("http://localhost:8080/data.json").then((res) => {
      var temp = res.data.data.users;
      temp.forEach((ele) => {
        if (ele.id == id) {
          this.data.push(ele);
        }
      });
      console.log(this.data);
    });
  },
  methods: {
    Onback() {
      this.$router.go(-1);
    },
    back(){
       this.$router.go(-1);
    }
  },
};
</script>
<style scoped>
.Solodata_top {
  width: 100%;
  height: 6rem;
  background: rgb(92, 169, 252);
}
.Solist_top_box {
  width: 100%;
  height: 4rem;
}
.Solo_rigth_title {
  font-size: 1.3rem;
  margin-top: 0.2rem;
  color: #fff;
  margin-left: 7rem;
  line-height: 3rem;
}
.Solodata_icon {
  margin-top: 0.5rem;
}
.Solodata_top_top {
  width: 90%;
  margin-left: 5%;
  height: 6rem;
  background: #fff;
  border-radius: 0.6rem;
  position: absolute;
  top: 3rem;
}
.Solodata_top_top img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-top: 1.5rem;
  float: left;
}
.Solodata {
  width: 100%;
  height: 33.7rem;
  background: gainsboro;
}
.Solodata_title {
  font-size: 0.7rem;
  color: gray;
}
.Solodata_but {
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border: 0.05rem solid rgb(235, 97, 0);
  margin-left: 15rem;
  border-radius: 3rem;
  color: rgb(235, 97, 0);
}
.Solodata_icon {
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
}
.Solo_icon {
  display: block;
  width: 0.3rem;
  height: 1.2rem;
  background: rgb(235, 97, 0);
  float: left;
  margin-top: 2rem;
  margin-left: 1rem;
}
.Solo_title {
  line-height: 5.5rem;
  margin-left: 1.5rem;
}
.top {
  margin-top: 2rem;
}
/*  */

.Solodata_ul{
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: gray;
}
.Solodata_ul li{
     margin-top: 1rem;
    margin-left: 1rem;
}

.Solodata_li_sapn{
    display: block;
    margin-top: 1rem;
    width: 20rem;
    height: 12rem;
}
.Solodata_Tab_A{
    width: 90%;
    margin-left: 5%;
    height: 10rem;
    box-shadow: 1rem;
    border: 0.01rem solid gainsboro;
    border-radius: 0.3rem;
    margin-top: 1rem;
    background: #fff;
}
.Solodata_footer{
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
.Solodata_Tab_A_li img{
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  float: left;
}
.Solodata_Tab_title_p{
    margin-top: 3.5rem;
    color: gainsboro;
    font-size: 0.9rem;
}
.Solodata_Tab_title_p span{
    margin-left: 11rem;
    color: green;
    font-size: 1rem;
} 
</style>