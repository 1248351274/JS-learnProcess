<template>
  <div>
    CompB
    <CompC></CompC>
  </div>
</template>

<script>
import CompC from "./CompC";
import { EventBus } from "../eventBus";
export default {
  components: {
    CompC,
  },
  mounted() {
    // 侦听
    EventBus.$once("child", (msg) => {
      console.log(msg);
    });
  },
};
</script>

<style scoped></style>
