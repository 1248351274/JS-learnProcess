<template>
    <ball :x="ballx"></ball>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { game } from "../game";
export default {

  setup() {
    const ballx = ref(20)
    let speed = 5;
    const viewWith = 730;
    function handleTicker() {

        ballx.value += speed;
      if (ballx.value >= viewWith) {
        speed = -speed;
      }else if(ballx.value < 20){
        speed = -speed;
      }
    }
    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
    return {
      ballx
    };
  },
};
</script>

<style scoped></style>
