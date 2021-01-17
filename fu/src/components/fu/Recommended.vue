<template>
  <div>
    <div class="new">
      <span class="dis"></span>
      <p>{{ list[2].channel_info.name }}</p>
    </div>
    <div class="container">
      <div
        @click="recommend"
        class="for"
        v-for="(item, index) in list[2].list"
        :key="index"
      >
        <p class="p">{{ item.introduction }}</p>
        <div class="li-item">
          <span class="span">共1课时</span>
        </div>
        <div class="teachers">
          <img :src="item.teacher_avatar" />
          <span class="title">{{ item.teacher_name }}</span>
        </div>
        <div class="ii-info">
          <span id="bao">172人已报名</span>
          <span id="mian">免费</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      list: [
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          title: "123123",
          detail: "啊是根深蒂固第三个返回官方的复活复活地方得分回复获得丰厚",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    recommend() {
      this.$router.push({ path: "/recommend" });
    },
  },
};
</script>

<style lang="scss" scoped>
.new {
  height: 5vw;
  line-height: 5vw;
  display: flex;
  padding-left: 4.2vw;
  .dis {
    display: inline-block;
    height: 90%;
    width: 0.8vw;
    background-color: #eb6100;
    margin-right: 2vw;
  }
  p {
    color: #595959;
    margin: 0;
    font-size: 4.26667vw;
  }
}
.container {
  padding: 4vw;
}
.for {
  // box-sizing: border-box;
  margin-bottom: 4vw;
  position: relative;
  padding: 0 3.73333vw;
  border-radius: 1.33333vw;
  background: #fff;
  .p {
    padding-top: 4vw;
    margin: 0;
    font-size: 4.26667vw;
  }
  .li-item {
    display: flex;
    .span {
      padding-right: 4.53333vw;
      position: relative;

      font-size: 3.2vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #666;
      line-height: 8vw;
      display: inline-block;
      height: 8vw;
    }
  }

  .teachers {
    display: flex;
    height: 17.33333vw;
    align-items: center;
    img {
      display: flex;
      width: 7.2vw;
      height: 7.2vw;
      border-radius: 50%;
    }
    .title {
      margin-left: 2.26667vw;
      font-size: 3.2vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .ii-info {
    border-top: 1px solid #f5f5f5;
    height: 11.73333vw;
    line-height: 11.73333vw;
    display: flex;
    font-size: 3.46667vw;
    // font-family: PingFangSC-Regular;
    #bao {
      font-size: 3.46667vw;
      color: rgba(0, 0, 0, 0.45);
      flex: 1;
    }
    #mian {
      font-size: 4.26667vw;
      color: #44a426;
    }
  }
}
</style>
