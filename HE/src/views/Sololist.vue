<template>
  <div>
    <div class="Sololist_top">
      <div class="Solist_top_box">
        <span class="Sololist_icon"
          ><van-icon
            name="arrow-left"
            color="#fff"
            size="1.5rem"
            @click="Onback"
        /></span>
        <span class="Solo_rigth_title">预约课程</span>
      </div>
    </div>
    <!-- 老师数据 -->
    <div class="Sololist">
      <div v-for="(item, index) in data" :key="index" class="Sololist_top_top">
        <img :src="item.teacher_avatar" alt="" />
        <p>{{ item.teacher_name }}</p>
        <p class="Sololist_title">金牌讲师</p>
        <div class="Sololist_but" @click="Ongo(item)">查看详情</div>
      </div>
      <div>
        <div class="Sololist_icon">
          <span class="Solo_icon"></span>
          <p class="Solo_title">选择时间</p>
        </div>
      </div>
      <!-- 引入时间组件 -->
      <div class="top"></div>
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
      data: [],
    };
  },
  created() {
    let id = this.$route.query.id;
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
    Ongo(item) {
      console.log(item)
      this.$router.push({
        path: "/solodata",
        query: {
          id: item.id
        },
      });
    },
  },
};
</script>
<style scoped>
.Sololist_top {
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
.Sololist_icon {
  margin-top: 0.5rem;
}
.Sololist_top_top {
  width: 90%;
  margin-left: 5%;
  height: 6rem;
  background: #fff;
  border-radius: 0.6rem;
  position: absolute;
  top: 3rem;
}
.Sololist_top_top img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-top: 1.5rem;
  float: left;
}
.Sololist {
  width: 100%;
  height: 33.7rem;
  background: gainsboro;
}
.Sololist_title {
  font-size: 0.7rem;
  color: gray;
}
.Sololist_but {
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border: 0.05rem solid rgb(235, 97, 0);
  margin-left: 15rem;
  border-radius: 3rem;
  color: rgb(235, 97, 0);
}
.Sololist_icon {
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
</style>