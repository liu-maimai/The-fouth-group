<template>
  <div>
    <div>
      <p class="pp">课程相关</p>
      <div class="sy_button">
        <Button columnNum="2" :data="lists"></Button>
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
      lists: [
        {
          icon:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602685946058&di=7dcddb359bbeb8a2b85f5720114dd7ae&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F00%2F99%2F28%2F58ddddfbc346f_610.jpg",
          name: "关注的老师",
          path:"/guan"
        },
        {
          icon:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2453338252,3540944447&fm=26&gp=0.jpg",
          name: "我的收藏",
          path:"/shou"
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
.sy_button {
  width: 50%;
}
</style>