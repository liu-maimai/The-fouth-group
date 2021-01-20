<template>
  <div class="home">
    <Swipe></Swipe>
    <Nav></Nav>
    <Teachers :list="list"></Teachers>
    <Courses :list="list"></Courses>
    <Recommended :list="list"></Recommended>
    <Starteachers :list="list"></Starteachers>
  </div>
</template>
<script>
import Swipe from "@/components/fu/Swipe";
import Nav from "@/components/fu/Nav";
import Teachers from "@/components/fu/Teachers";
import Courses from "@/components/fu/Courses";
import Recommended from "@/components/fu/Recommended";
import Starteachers from "@/components/fu/Starteachers";
import { getList } from "../../utils/api";
export default {
  components: {
    Swipe,
    Nav,
    Teachers,
    Courses,
    Recommended,
    Starteachers,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    getList().then((res) => {
      // console.log(res);
      this.list = res.data;
      // console.log(this.list);
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  overflow-y: scroll;
  background-color: #f0f2f5;
  height: calc(100% - 0.5rem);
  // box-sizing: border-box;
  width: 100%;
}
</style>
