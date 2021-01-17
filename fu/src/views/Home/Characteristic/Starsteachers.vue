<template>
  <div class="box">
    <ul id="uu">
      <li @click="tui"><van-icon name="arrow-left" /></li>
      <li>名师</li>
      <li></li>
    </ul>
    <van-tabs v-model="active">
      <van-tab v-for="(item, index) in list" :key="index" :title="item.title">
        <div class="wrap">
          <div
            class="scroll"
            v-for="(item, index) in list2"
            :key="index"
            @click="detail(item)"
          >
            <img :src="item.img" />
            <div class="right">
              <h2>
                <b>{{ item.title }}</b
                ><span>{{ item.scholl }}</span>
              </h2>
              <span>{{ item.detail }}</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      list: [
        { title: "语文" },
        { title: "英语" },
        { title: "数学" },
        { title: "政治" },
        { title: "物理" },
        { title: "化学" },
        { title: "生物" },
      ],
      list2: [
        {
          img: "./img.jpg",
          title: "李想",
          scholl: "南开大学",
          detail: "公司的孤独感阿嘎",
        },
        {
          img: "./img.jpg",
          title: "李想",
          scholl: "南开大学",
          detail: "公司的孤独感阿嘎",
        },
        {
          img: "./img.jpg",
          title: "李想",
          scholl: "南开大学",
          detail: "公司的孤独感阿嘎",
        },
        {
          img: "./img.jpg",
          title: "李想",
          scholl: "南开大学",
          detail: "公司的孤独感阿嘎",
        },
        {
          img: "./img.jpg",
          title: "李想",
          scholl: "南开大学",
          detail: "公司的孤独感阿嘎",
        },
        {
          img: "./img.jpg",
          title: "李想",
          scholl: "南开大学",
          detail: "公司的孤独感阿嘎",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    tui() {
      this.$router.go(-1);
    },
    //跳转到老师详情页
    detail(i) {
      this.$router.push({ path: "/teachersDetail", query: { i } });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: calc(100% - 0.5rem);
  overflow: hidden;
  background-color: #fdfdfd;
}
#uu {
  height: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.2rem;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrap {
  overflow: hidden;
  overflow-y: scroll;
  height: 5.2rem;
  box-sizing: border-box;
  padding: 0.1rem;
  .scroll {
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px rgb(240, 240, 240);
    display: flex;
    font-size: 0.3rem;
    height: 0.8rem;
    margin: 0.1rem;
    box-sizing: border-box;
    padding: 0.14rem;
    .right {
      font-size: 0.14rem;
      h2 {
        margin-bottom: 0.1rem;
        b {
          font-size: 0.16rem;
          font-weight: 700;
          margin-right: 0.1rem;
        }
        span {
          font-size: 0.14rem;
          color: #a0a0a0;
        }
      }
      span {
        font-size: 0.14rem;
        color: #a0a0a0;
      }
    }
    img {
      width: 5vw;
      height: 5vw;
      border-radius: 50%;
      margin-right: 4vw;
    }
  }
}
</style>
