<template>
  <div>
    <section>
      <div class="new">
        <span class="dis"></span>
        <p>{{ list[0].channel_info.name }}</p>
      </div>
      <div class="svg">
        <div
          @click="starteachers"
          class="for"
          v-for="(item, index) in list[0].list"
          :key="index"
        >
          <img :src="item.teacher_avatar" />
          <div>
            <p>{{ item.teacher_name }}</p>
            <p>{{ item.introduction }}</p>
          </div>
        </div>
      </div>
    </section>
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
    starteachers() {
      this.$router.push({ path: "/Characteristic" });
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
.svg {
  padding: 1.33333vw 2.66667vw 5.33333vw;
}
.for {
  height: 21.6vw;
  display: flex;
  align-items: center;
  //   box-sizing: border-box;
  padding: 0 4vw;
  background: #fff;
  border-radius: 1.06667vw;
  margin-top: 2.66667vw;
  img {
    display: flex;
    width: 10.66667vw;
    height: 10.66667vw;
    margin-right: 3.2vw;
    border-radius: 50%;
  }
  div {
    p {
      &:first-child {
        padding-bottom: 0.8vw;
        font-size: 4vw;
        margin-bottom: 0.1rem;
      }
      &:last-child {
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 3vw;
        color: gray;
      }
    }
  }
}
</style>
