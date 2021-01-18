<template>
  <div class="item-body">
    <!-- 拖拽的头部 -->
    <div class="item-tuozhuai-top">
      <span>给我们留言</span>
      <span @click="onclick"><van-icon name="arrow-down" size="28px" /></span>
    </div>
    <!-- 第二块版心 -->
    <div class="item-tuozhuai-one">
      您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
    </div>

    <ul>
      <!-- 手机号 -->

      <li>
        <div>手机号</div>
        <input type="text" placeholder="请输入手机号" class="item-input-text" />
      </li>
      <!-- 留言内容 -->
      <li>
        <div class="item-red">
          留言内容
          <span>*</span>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="item-textarea"
          placeholder="请输入留言内容"
        ></textarea>
      </li>
    </ul>
    <!-- 提交按钮 -->
    <div class="item-tijiao-btn">
      <a height="40px" width="100%" class="item-btn" 
        ><span>提交</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onclick() {
      this.$router.push("/");
    },
  },

};
</script>

<style scoped>
.item-tuozhuai-top {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  background: rgb(61, 76, 218);
  color: white;
  display: flex;
  justify-content: space-between;
}
.item-body {
  width: 100%;
  /* height: 95vh; */
  background: #eee;
}
.item-tuozhuai-one {
  padding: 1.2rem;
  font-size: 0.8rem;
  color: rgb(102, 102, 102);
  word-break: break-all;
  /* border: 0.1rem solid #000; */
}
.item-textarea {
  display: block;
  width: 100%;
  height: 6rem;
  /* padding: 0.5rem 0.8rem; */
  overflow: hidden auto;
  resize: none;
  outline: 0rem;
  background-color: rgb(255, 255, 255);
  border: none;
  word-break: break-all;
  font-size: 1rem;
  appearance: none;
}

.item-input-text {
  width: 100%;
  height: 2rem;
  /* height: auto; */
  /* padding: 1rem; */
  border: none;
  margin-bottom: 0.5rem;
}
.item-red span {
  color: red;
}
.item-btn {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  border: 0px;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  color: white;

  background: rgb(0, 122, 255);
}
.item-tijiao-btn {
  padding: 1rem 2rem 1rem 2rem;
}
.item-btn:hover {
  color: white;
  background: rgb(0, 122, 255);
  opacity: 1;
}
</style>