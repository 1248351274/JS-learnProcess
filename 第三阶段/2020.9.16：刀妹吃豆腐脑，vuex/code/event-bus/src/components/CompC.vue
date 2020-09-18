<template>
  <div>
    CompC
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { EventBus } from "../eventBus";
export default {
  mounted() {},
  methods: {
    handleClick() {
      EventBus.$emit("child", "我是组件c");
    },
  },
};
</script>

<style scoped></style>
