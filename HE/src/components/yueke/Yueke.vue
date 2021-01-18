<template>
  <div>
    <van-empty description="还没有约课记录哦" class="custom-image">
      <template #image>
        <img src="../../assets/image/上课.png" alt="" />
      </template>
      <van-button class="bottom-button" @click="Ongo"> 立即约课 </van-button>
    </van-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Ongo() {
      this.$router.push("/solo");
    },
  },
};
</script>

 <style scoped>
.bottom-button {
  width: 6rem;
  height: 2rem;
  background: coral;
  color: white;
  font-size: 0.5rem;
}
</style> 