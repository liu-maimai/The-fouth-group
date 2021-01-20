<template>
  <div>立即学习</div>
</template>

<script>
import { getLearn } from "@/utils/api";
export default {
  data() {
    return {};
  },
  mounted() {
    //学习页面
    getLearn(this.$store.state.id).then((res) => {
      //   console.log(res);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
