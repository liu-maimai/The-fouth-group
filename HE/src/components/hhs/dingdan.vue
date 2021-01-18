<template>
  <div>
    <div>
      <p class="pp">订单相关</p>
      <div class="sy_but">
        <Button columnNum="3" :data="list"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../vantbutton/vantButton";

export default {
  components: {
    Button,
  },
  data() {
    return {
      list: [
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
          name: "课程订单",
          path:"/ke"
        },
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
          name: "会员订单",
          path:"/huiyuan"
        },
        {
          icon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=875245118,278486602&fm=26&gp=0.jpg",
          name: "约课订单",
          path:"/yueke"
        },
      ],
    };
  },
};
</script>

<style scoped>
.pp {
  margin-left: 0.5rem;
}
.sy_but {
  width: 70%;
}
</style>