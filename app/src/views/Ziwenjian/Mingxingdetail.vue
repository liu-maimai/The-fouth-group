<template>
  <div class="box">
    <!-- 明星讲师列表页 -->
    <div
      class="display"
      v-for="item in list"
      :key="item.id"
      @click="tiao(item.id)"
    >
      <img :src="item.avatar" />
      <div class="div">
        <h2>{{ item.real_name }}</h2>
        <p>{{ item.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getStarteachers } from "../../utils/api";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    getStarteachers().then((res) => {
      //   console.log(res);
      this.list = res.data.list;
      // console.log(this.list);
    });
  },
  methods: {
    tiao(id) {
      this.$router.push({ path: "/stareddetail", query: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  box-sizing: border-box;
  padding: 0.1rem 0.1rem;
  overflow-y: scroll;

  .display {
    width: 100%;
    height: 0.8rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.2rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
    }
    .div {
      margin-left: 0.2rem;
      h2 {
        margin-bottom: 0.1rem;
        font-size: 4vw;
        color: #595959;
      }
      p {
        font-size: 3.2vw;
        color: #b7b7b7;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
