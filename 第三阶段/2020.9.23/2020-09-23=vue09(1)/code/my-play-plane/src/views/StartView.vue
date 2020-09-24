<template>
  <container>
    <sprite :texture="startPageImg"> </sprite>
    <sprite
      :texture="startBtnImg"
      x="228"
      y="515"
      :interactive="true"
      @click="handleClick"
    >
    </sprite>
  </container>
</template>

<script>
import startPageImg from "../assets/start_page.jpg";
import startBtnImg from "../assets/startBtn.png";

export default {
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    function handleClick() {
      console.log("click");
      emit("change-view", "GameView");
    }
//     function createRect() {
//       const container = createContainer();
//       const rect = new Graphics();
//       rect.beginFill(0xff0000);
//       rect.drawRect(0, 0, 50, 50);
//       rect.endFill();
// const container = new Container();
//       // 添加点击事件
//       rect.interactive = true;
//       //   game.stage.addChild(rect);
//       container.addChild(rect);
//     }

    return {
      handleClick,
      startPageImg,
      startBtnImg,
    };
  },
};
</script>

<style scoped></style>
