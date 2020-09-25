<template>
  <container>
    <sprite :texture="startPageImg"> </sprite>
    <sprite
      :texture="startBtnImg"
      x="228"
      y="510"
      :interactive="true"
      @click="handleClick"
    >
    </sprite>
    <Ball></Ball>
  </container>
</template>

<script>
import startPageImg from "../assets/start_page.jpg";
import startBtnImg from "../assets/startBtn.png";
import Ball from "../components/Ball";

export default {
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    function handleClick() {
      console.log("click");
      emit("change-view", "GameView");
    }

    return {
      handleClick,
      startPageImg,
      startBtnImg,
      Ball
    };
  },
};
</script>

<style scoped></style>
