<template>
  <div>
    <van-nav-bar title="我的学习" left-arrow @click-left="onClickLeft" />
    <div>
      <van-tabs>
        <van-tab v-for="(item, index) in list" :title="item.title" :key="index">
          <p v-for="(item, index) in nei" :key="index">{{ item.title }}</p>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nei: [],
      list: [
        {
          base: 0,
          title: "直播课(1)",
        },
        {
          base: 100000,
          title: "点播课(2)",
        },
        {
          base: 6,
          title: "音频课(0)",
        },
        {
          title: "图文课(0)",
        },
        {
          title: "面授课(0)",
        },
        {
          title: "会员课(0)",
        },
      ],
    };
  },
  mounted() {
    this.$Net
      .te({
        params: {
          browse_base: this.base,
        },
      })
      .then((res) => {
        console.log(res);
        this.nei = res.data.data.list;
        console.log(this.nei);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
  },
};
</script>

<style>
</style>