<template>
  <div>
    CompA
    <CompB></CompB>
  </div>
</template>

<script>
import CompB from "./CompB";
import { EventBus } from "../eventBus";
export default {
  components: {
    CompB,
  },
  mounted() {
    // 侦听
    // EventBus.$on("child", (msg) => {
    //   console.log(msg);
    // });
    EventBus.$on("child", this.handleChild);
  },
  methods: {
    handleChild() {
      console.log("handleChild");
      // 移除
      EventBus.$off("child", this.handleChild);
    },
  },
};
</script>

<style scoped></style>
