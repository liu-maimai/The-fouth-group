<template>
  <div class="box">
    <div class="new">
      <span class="dis"></span>
      <p>{{ list[3].channel_info.name }}</p>
    </div>
    <div class="content">
      <div
        @click="starsteachers"
        class="for"
        v-for="(item, index) in list[3].list"
        :key="index"
      >
        <img :src="item.teacher_avatar" />
        <div class="spac">
          <p class="p1">
            <span class="sp1">{{ item.teacher_name }}</span>
            <span class="mm">{{ item.teacher_id }}</span>
          </p>
          <p class="p2">{{ item.introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    starsteachers() {
      this.$router.push({ path: "/starsteachers" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
}
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
.content {
  padding: 1.33333vw 2.66667vw 5.33333vw;
  .for {
    display: flex;
    align-items: center;
    padding: 0 4vw;
    background: #fff;
    border-radius: 1.06667vw;
    height: 2.16rem;
    height: 21.6vw;
    margin-top: 2.66667vw;
    img {
      display: flex;
      width: 10.66667vw;
      height: 10.66667vw;
      margin-right: 3.2vw;
      border-radius: 50%;
      flex: none;
    }
    .spac {
      padding-bottom: 0.8vw;
      .p1 {
        margin: 0;
        display: flex;
        width: .7rem;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.8vw;
        .sp1 {
          font-size: 4vw;
          color: #595959;
          line-height: 5.6vw;
          padding-right: 1.33333vw;
        }
        .mm {
          font-size: 2.93333vw;
          color: #ea7a2f;
        }
      }
      .p2 {
        margin: 0;
        width: 73.33333vw;
        font-size: 3.2vw;
        height: 4vw;
        padding-top: 1.33333vw;
        color: #b7b7b7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
