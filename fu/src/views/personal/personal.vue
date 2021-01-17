<template>
  <div class="box">
    <div class="bg"></div>
    <div class="fff">
      <div class="content">
        <ul id="uu">
          <li><img src="/img.jpg" /></li>
          <li>pig</li>
          <li><p>去约课</p></li>
        </ul>
        <ul class="ul">
          <li v-for="(item, index) in list" :key="index">
            <p>
              <b>{{ item.b }}</b>
              <span class="sp1">{{ item.te }}</span>
              <span class="sp2">{{ item.detail }}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="yq">
        <p><van-icon name="send-gift-o" /></p>
        <p>
          <span>邀请好友注册APP,享多重好礼</span>
          <span>限时特惠，多邀多得</span>
        </p>
        <p><van-icon name="arrow" /></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { b: "0", te: "我的特色课", detail: "已购特色课程的学习" },
        { b: "0", te: "一对一辅导", detail: "我的一对一老师辅导" },
        { b: "0", te: "剩余学习币", detail: "查看剩余学习币" },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  height: calc(100% - 0.5rem);
  width: 100%;
  overflow: hidden;
  .bg {
    position: relative;
    top: 0;
    left: -0.36rem;
    width: 120%;
    height: 1rem;
    background-color: rgb(255, 60, 0);
    border-bottom-left-radius: 01rem;
    border-bottom-right-radius: 1rem;
  }
  .fff {
    // overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin-top: -0.8rem;
    height: 1.8rem;
    padding: 0.1rem;
    width: 100%;
    .content {
      background-color: #fff;
      height: 100%;
      width: 100%;
      border-radius: 0.1rem;
      box-shadow: 1px 1px 5px 0 rgb(228, 228, 228);
    }
  }
  #uu {
    width: 100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      img {
        margin: 0.1rem 0 0 0.1rem;
      }
    }
    li:nth-child(2) {
      width: 1.6rem;
    }
    li:nth-child(3) {
      p {
        background-color: #ff4500;
        color: #fff;
        font-size: 0.12rem;
        width: 0.8rem;
        height: 0.3rem;
        border-top-left-radius: 0.16rem;
        border-bottom-left-radius: 0.16rem;
        line-height: 0.3rem;
        text-align: center;
      }
    }
  }
  .ul {
    width: 100%;
    height: 0.99rem;
    // background-color: red;
    box-sizing: border-box;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      justify-content: space-between;
      height: 100%;

      p {
        display: flex;
        flex-direction: column;
        text-align: center;
        b {
          font-size: 0.18rem;
          font-weight: 700;
          color: red;
        }
        .sp1 {
          display: inline-block;
          margin: 0.1rem;
        }
        .sp2 {
          color: rgb(144, 144, 144);
          font-size: 0.14rem;
          width: 1rem;
        }
      }
    }
  }
  .yq {
    margin: 0.1rem auto;
    border-radius: .3rem;
    box-sizing: border-box;
    padding: 0.1rem;
    background-color: #ec670a;
    align-items: center;
    width: 95%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .van-icon {
      font-size: 0.25rem;
    }
    span {
      display: block;
      width: 2.3rem;
      font-size: 0.12rem;
      &:first-child {
        margin-bottom: 0.06rem;
      }
    }
  }
}
</style>
