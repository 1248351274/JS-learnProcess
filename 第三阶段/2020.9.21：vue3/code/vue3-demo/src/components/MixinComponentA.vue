<template>
  <div>
    mixin
    <button @click="add">click</button>
  </div>
</template>

<script>
import mixinA from "../mixin/index";
export default {
  mixins: [mixinA],
};
</script>

<style scoped></style>
