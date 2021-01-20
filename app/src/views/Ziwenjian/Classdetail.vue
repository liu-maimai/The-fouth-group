<template>
  <div class="box">
    <div class="immg">
      <img class="info-img" :src="list.info.cover_img" />
    </div>
    <div class="cd-info">
      <p class="info-title">{{ list.info.title }}</p>
      <p class="info-com">
        共{{ list.info.total_periods }}课时 |
        {{ list.info.real_sales_num }}人已报名
      </p>
      <p class="info-price">
        {{ list.info.status ? "免费" : "付费" }}
      </p>
    </div>
    <div class="cd-teachers">
      <div class="cd-title">教学团队</div>
      <ul>
        <li>
          <img :src="list.teachers[0].teacher_avatar" />
          <span>{{ list.teachers[0].teacher_name }}</span>
        </li>
      </ul>
    </div>
    <header>
      <span
        v-for="(item, index) in acc"
        :key="index"
        @click="qie(index)"
        :class="{ active: active == index }"
      >
        {{ item }}
      </span>
    </header>
    <div class="cd-tro">
      <p class="cd-title">课程介绍</p>
      <div class="cd-details" v-html="list.info.course_details"></div>
    </div>
    <div class="cd-list">
      <div class="cd-title">课程大纲</div>
      <div class="charpter">
        <div>
          <div class="period" v-for="item in list2" :key="item.id">
            {{ item.periods_title }}
          </div>
        </div>
      </div>
    </div>
    <div class="cd-comment">
      <p class="cd-title">课程评论</p>
      <ul>
        <li>
          <div class="evaluate-top">
            <img src="" />
            <div class="info">
              <p class="font">就服 真的脑袋智障了吧</p>
              <p>
                <van-icon name="star" />
                <van-icon name="star" />
                <van-icon name="star" />
                <van-icon name="star" />
                <van-icon name="star" />
              </p>
              <p class="dis">2021/01/19 16:18:03</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <p @click="learn" class="defaults-btn">立即报名</p>
    </footer>
  </div>
</template>

<script>
import { getClassify, getSyllabus } from "@/utils/api";
export default {
  data() {
    return {
      list: [],
      active: "",
      acc: ["课程介绍", "课程大纲", "课程评价"],
      list2: [],
    };
  },
  mounted() {
    //获取上半部分数据
    getClassify(this.$store.state.id).then((res) => {
      this.list = res.data;
      console.log(this.list);
    });
    //获取下半部分数据
    getSyllabus({ id: this.$store.state.id }).then((res) => {
      this.list2 = res;
    });
  },
  methods: {
    //点击选项卡切换
    qie(i) {
      this.active = i;
    },
    //点击立即去学习
    learn() {
      this.$router.push({ path: "/getLearn" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  overflow-y: scroll;
  background-color: #f0f2f5;
  width: 100%;
  height: 100%;
  .immg {
    height: 58.66667vw;
    display: block;
    .info-img {
      width: 100%;
      height: 100%;
    }
  }

  .cd-info {
    padding: 4vw;
    background: #fff;
    position: relative;
    .info-title {
      font-size: 4.26667vw;
      font-family: PingFangSC-Medium;
      font-weight: 400;
      color: #333;
      padding-right: 10.66667vw;
      line-height: 6.13333vw;
    }
    .info-com {
      font-size: 3.73333vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 8vw;
    }
    .info-price {
      font-size: 4.53333vw;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #ee1f1f;
      line-height: 8.53333vw;
    }
  }
  .cd-teachers {
    margin-top: 2.66667vw;
    background: #fff;
    padding: 1.33333vw 2.66667vw;
    .cd-title {
      font-size: 4vw;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #262626;
      padding-top: 2.66667vw;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 2.66667vw 0;
      li {
        padding: 2.66667vw 0;
        width: 20%;
        height: 24vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        img {
          width: 10.4vw;
          height: 10.4vw;
          border-radius: 50%;
        }
        span {
          width: 100%;
          box-sizing: border-box;
          padding: 2.13333vw 0.8vw 0;
          padding-top: 0.21333rem;
          padding-top: 2.13333vw;
          font-size: 3.2vw;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #595959;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
    }
  }
  header {
    height: 11.73333vw;
    line-height: 11.73333vw;
    margin-top: 2.66667vw;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: 1px solid #f0f2f5;
    color: #8c8c8c;
    font-size: 4vw;
    .active {
      color: red;
    }
  }
  .cd-tro {
    background: #fff;
    padding: 1.33333vw 2.66667vw;
    .cd-title {
      font-size: 4vw;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #262626;
      padding-top: 2.66667vw;
    }
    .cd-details {
      font-size: 3.73333vw;
      padding: 4vw 1.33333vw;
      line-height: 4.8vw;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
  .cd-list {
    margin-top: 2.66667vw;
    background: #fff;
    padding: 1.33333vw 2.66667vw;
    .cd-title {
      font-size: 4vw;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #262626;
      padding-top: 2.66667vw;
    }
    .charpter {
      padding: 0 4vw 2.66667vw;
      .period {
        padding: 2.66667vw 0 0 0;
        padding-left: 4vw;
        line-height: 8vw;
        font-size: 3.2vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #595959;
        position: relative;
      }
      .period::after {
        content: "";
        position: absolute;
        left: 0.53333vw;
        top: 55%;
        width: 1.06667vw;
        height: 1.06667vw;
        border-radius: 50%;
        background: #e60012;
      }
    }
  }
  .cd-comment {
    margin-bottom: 0.5rem;
    margin-top: 2.66667vw;
    background: #fff;
    padding: 1.33333vw 2.66667vw;
    .cd-title {
      font-size: 4vw;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #262626;
      padding-top: 2.66667vw;
    }
    li {
      padding: 2.66667vw 2.66667vw;
      .evaluate-top {
        display: flex;
        img {
          width: 6.66667vw;
          height: 6.66667vw;
          border-radius: 50%;
        }
        .info {
          display: flex;
          padding-left: 2.66667vw;
          height: 6.66667vw;
          align-items: center;
          .dis {
            width: 0.8rem;
            font-size: 0.14rem;
            margin-left: 0.1rem;
          }
          .font {
            font-size: 0.14rem;
          }
          .van-icon {
            color: #ea7a2f;
            font-size: 0.1rem;
          }
        }
      }
    }
  }
  footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 13.33333vw;
    background: #fff;
    box-shadow: 0 -1.33333vw 2.13333vw 0 rgba(0, 0, 0, 0.02);
    .defaults-btn {
      width: 91.73333vw;
      height: 9.86667vw;
      margin: 1.73333vw auto;
      border-radius: 4.93333vw;
      background: #e60012;
      font-size: 3.46667vw;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
      text-align: center;
      line-height: 9.86667vw;
      position: relative;
    }
  }
}
</style>
