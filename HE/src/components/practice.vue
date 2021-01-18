<template>
  <div class="item-body">
    <!-- 头部索引栏 -->
    <div class="item-nav-bar">
      <h3>练习</h3>
    </div>
    <!-- 第一快版心 -->
    <div class="item-type-area-one">
      <div class="item-grid" @click="onclick1">
        <p class="item-p1"><img src="../assets/image/下载1.png" alt="" /></p>
        <p class="item-p2">考点练习</p>
      </div>
      <div class="item-grid" @click="onclick2">
        <p class="item-p1"><img src="../assets/image/下载2.png" alt="" /></p>
        <p class="item-p2">套卷练习</p>
      </div>
      <div class="item-grid" @click="onclick3">
        <p class="item-p1"><img src="../assets/image/下载3.png" alt="" /></p>
        <p class="item-p2">仿真模考</p>
      </div>
      <div class="item-grid" @click="onclick4">
        <p class="item-p1"><img src="../assets/image/下载4.png" alt="" /></p>
        <p class="item-p2">错题练习</p>
      </div>
      <div class="item-grid" @click="onclick5">
        <p class="item-p1"><img src="../assets/image/下载5.png" alt="" /></p>
        <p class="item-p2">测评记录</p>
      </div>
      <div class="item-grid" @click="onclick6">
        <p class="item-p1"><img src="../assets/image/下载6.png" alt="" /></p>
        <p class="item-p2">习题收藏</p>
      </div>
    </div>
    <!-- 第三个板心 -->
    <div class="item-type-area-two">
      <p class="item-exam">近期模考</p>
      <p class="item-time">
        <span @click="show = true" :class="show == true ? 'active' : ''"
          >默认排序</span
        >
        <span @click="change" :class="show == false ? 'active' : ''">
          时间
          <span v-show="show == false">
            <span
              class="iconfont icon-xiaosanjiaodown"
              v-show="shows == true"
            ></span>
            <span class="iconfont icon-xiaosanjiaoup" v-show="showse == true">
            </span>
          </span>
        </span>
      </p>
      <div class="item-type-area-two-img">
        <img src="../assets/image/图0.png" alt="" />
      </div>
      <div class="item-texts">暂无模考安排，敬请期待</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      shows: false,
      showse: false,
    };
  },
  methods: {
    change() {
      if (this.show == true) {
        this.show = false;
        this.shows = true;
        this.showse = false;
      } else {
        if (this.shows == true) {
          this.shows = false;
          this.showse = true;
        } else {
          this.showse = false;
          this.shows = true;
        }
      }
    },
    onclick1() {
      this.$router.push({
        path: "/exercise",
      });
    },
    onclick2() {
      this.$router.push({
        path: "/taojuan",
      });
    },
    onclick3() {
      this.$router.push({
        path: "/fangzhen",
      });
    },
    onclick4() {
      this.$router.push({
        path: "/cuoti",
      });
    },
    onclick5() {
      this.$router.push({
        path: "/ceping",
      });
    },
    onclick6() {
      this.$router.push({
        path: "/xiti",
      });
    },
  },
};
</script>

<style scoped>
.item-body {
  background: #eee;
  height: 97vh;
}
/* 头部样式 */
.item-nav-bar {
  width: 100%;
  height: 5vh;
  background: white;
  margin-bottom: 1rem;
}
/* 字体样式 */
h3 {
  text-align: center;
  color: black;
}
/* 第一版心样式 */
.item-type-area-one {
  width: 95%;
  height: 10rem;
  /* border: 1px solid #000; */
  background: white;
  margin: 3%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
/* 宫格样式 */
.item-grid {
  width: 4rem;
  height: 5rem;
  /* border: 1px solid #000; */
  margin-left: 1rem;
}
.item-p1 {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: cornsilk;
  margin: 0.8rem auto;
}
.item-p1 img {
  width: 100%;
  height: 100%;
  text-align: center;
}
.item-p1 {
  font-style: 0.5rem;
}
/* 第二版心样式 */
.item-type-area-two {
  width: 100%;
  height: 16rem;
  background: white;
  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}
.item-exam {
  color: gray;
  /* margin-left: 0.5rem;
  margin-top: 1rem; */
  padding: 0.5rem;
}
.active {
  color: red;
}
.iconfont {
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  text-align: center;
}

/* 0000 */
.item-time {
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
}
.item-type-area-two-img {
  width: 5.5rem;
  height: 7.7rem;
  /* border: 1px solid #000; */
  margin: 1rem auto;
}
.item-type-area-two-img img {
  width: 100%;
  height: 100%;
}
.item-texts {
  width: 100%;
  text-align: center;
}
</style>