<template>
  <div>
    <div>
      <p class="pp">我的账户</p>
      <div class="sy_qu">
        <Button columnNum="3" :data="liste"></Button>
        <img src="" alt="" />
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
         liste: [
        {
          icon:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1299864914,3418867127&fm=26&gp=0.jpg",
          name: "优惠券",
          path:"/you"
        },
        {
          icon:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2874328332,686638447&fm=26&gp=0.jpg",
          name: "学习卡",
          path:"/xu"
        },
        {
          icon:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=999043577,1932903934&fm=26&gp=0.jpg",
          name: "会员",
          path:"/hu"
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
.sy_qu {
  width: 70%;
}
</style>