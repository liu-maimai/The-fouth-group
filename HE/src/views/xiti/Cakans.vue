<template>
  <div>
    <Navbar></Navbar>
         <div>
      <p class="tly_topsmillbox">
        <span>物理</span
        ><span><span class="tly_blue">0</span><span>/8</span></span>
      </p>
      <div class="tly_conterbox">
        <p class="tly_topp">
          <span class="tly_bluebox-duo">多选</span
          ><span>下列叙述正确的是()</span>
        </p>
        <van-radio-group v-model="radio">
          <van-radio name="1" shape="square">单选框 1</van-radio>
          <van-radio name="2" shape="square">单选框 2</van-radio>
        </van-radio-group>
      </div>
      <div class="conter_backrgray"></div>
      <div class="tly_bottomboxs">
        <div class="item-div-body">
          <p class="item-div-p">
            <span class="tly_gray-s">正确答案:</span
            ><span class="tly_gray-c">C</span>
          </p>
           <p class="item-div-p-div">
            <span class="tly_gray-s">您的答案:</span
            ><span class="tly_gray-d">D</span>
          </p>
        </div>
        <p class="tly_contep"><span class="tly_gray"> 考点 </span></p>
        <div class="tly_fl">
          <span class="tly_bluesbox">生物史学</span>
        </div>
        <p class="tly_bottombox">
          <span class="tly_gray">解析:</span>
          <span
            >生物学史是人类从古至今对生命研究的过程。<br />
            欧洲文艺复兴及近代时期，<br />
            生物学思想被新的经验主义思想彻底变革并发现了一些新的生物。<br />
            这次活动中比较突出的是对生理机能进行了实验和认真观察<br />
            的安德雷亚斯·维萨里和威廉·哈维以及开始对生物进行分类和化石记录的博物学家卡尔·林奈和蒲丰，<br />
            同时还对有机体的发展和行为进行研究，<br />
            显微镜展示了之前从未看到的世界并为细胞学说打下基础。<br />
          </span>
        </p>
        <div class="item-divv"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
 components: {
    Navbar,
  },
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}
.tly_topsmillbox {
  width: 100%;
  height: 5vh;
  border-bottom: 0.01rem solid gainsboro;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.06rem;
  font-size: 0.09rem;
}
.tly_conterbox {
  width: 100%;
  height: 40vh;
  box-sizing: border-box;
  padding: 0.5rem;
}
.tly_blue {
  color: blue;
}
.tly_bottomboxs {
  width: 100%;
  box-sizing: border-box;
  padding: 0.1rem;
}
.tly_contep {
  box-sizing: border-box;
  padding: 0.1rem 0rem 0rem 0rem;
}
.tly_topp {
  display: flex;
  font-size: 0.09rem;
}
.tly_graybox {
  height: 1vh;
  background: gainsboro;
}
.tly_gray {
  color: #818181;
  font-size: 0.14rem;
}
.tly_bluebox-duo {
  height: 3vh;
  width: 3rem;
  text-align: center;
  align-items: center;
  background: rgb(65, 161, 199);
  color: white;
  box-sizing: border-box;
  border-top-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.van-radio {
  padding: 0.1rem;
}
.tly_blue {
  color: blue;
  font-size: 0.14rem;
}
.tly_conterbox {
  width: 100%;
}
.tly_bottombox {
  height: 13rem;
  display: flex;
  font-size: 0.8rem;
}
/* span:nth-child(1) {
  flex: 0.5;
} */
span:nth-child(2) {
  flex: 4;
}
.tly_bluesbox {
  width: 4rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  padding: 0.05rem;
  background: rgb(26, 9, 204);
  color: white;
  font-size: 0.09rem;
  border-radius: 1rem;
}
.tly_fl {
  display: flex;
  box-sizing: border-box;
  margin: 0.1rem 0rem;
}
.tly_bottom_box {
  box-sizing: border-box;
  padding: 0.2rem;
}
p {
  padding: 0.1rem 0rem;
}
.conter_backrgray {
  width: 100%;
  height: 1vh;
  background: gainsboro;
}
.item-divv {
  height: 4rem;
}
.item-div-body{
  width: 100%;
  height: 2rem;
  /* line-height: 1.8rem; */
  display: flex;
  font-size: rem;
  justify-content:space-around;
  border: 1px solid #000;
}
.tly_gray-d{
  color: red;
}
.tly_gray-c{
  color: green;
}
.tly_gray-s{
  color: gray;

}
</style>