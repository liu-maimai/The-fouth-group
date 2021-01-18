<template>
  <div>
    <div>
      <p class="pp">自动服务</p>
      <div class="sy_button">
        <Button columnNum="4" :data="nei"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/vantbutton/vantButton";
export default {
  components: {
    Button,
  },
  data() {
    return {
      nei: [
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
          name: "我的消息",
          path:"/xiao"
        },
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
          name: "意见反馈",
          path:"/yi"
        },
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
          name: "在线客服",
          path:"/drag"
        },
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
            name: "设置",
            path: "/she",
        },
      ],
    };
  },
};
</script>

<style>
</style>