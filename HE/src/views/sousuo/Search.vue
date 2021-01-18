<template>
  <div>
    <div class="search_container">
      <!-- 左边按钮 -->
      <div class="search_left_container" @click="callBack">
        <van-icon name="arrow-left" size="20" />
      </div>
      <!-- 搜索框 -->
      <div class="search_right_container">
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            shape="round"
            action-text="搜索"
          />
        </form>
      </div>
    </div>
    <!-- 历史记录 -->
    <div class="lishi_container">
      <div class="lishi_top">
        <span>搜索记录</span>
        <span class="del" @click="del"><van-icon name="delete" /></span>
      </div>
      <div>
        <!-- 搜索添加的每一类 -->
        <span
          class="list"
          v-for="(item, index) in history"
          :key="index"
          v-show="index <= 3"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      history: JSON.parse(localStorage.getItem("history")) || [],
    };
  },
  methods: {
    //取消按钮
    onCancel() {
      this.$router.go(-1);
    },
    //搜索按钮  保存本地存储 跳转至搜索结果列表页
    onSearch() {
      this.history.unshift(this.value);
      localStorage.history = JSON.stringify(this.history);
      this.$router.go(-1);
    },
    //返回按钮
    callBack() {
      this.$router.go(-1);
    },
    //删除按钮
    del() {
      this.$dialog.confirm({
        title: "确认清空？",
        message: "你确定要给你的搜索记录清空吗？？？",
      })
        .then(() => {
          // on confirm
          console.log("确认清空");
          this.history = [];
          localStorage.removeItem("history");
        })
        .catch(() => {
          // on cancel
          console.log("取消清空");

        });
    },
  },
};
</script>
<style scoped>
.search_container {
  width: 100vw;
  height: 10vh;
  /* border-bottom: 1px solid #ccc; */
  display: flex;
  align-content: center;
  align-items: center;
}
.search_right_container {
  width: 85%;
}
.search_left_container {
  width: 15%;
  display: flex;
  justify-content: center;
}
.lishi_container {
  width: 100vw;
  height: 20vh;
}
.del {
  width: 70%;
  text-align: right;
}
.list {
  margin: 10px 10px;
}
.lishi_top {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>