<template>
  <div></div>
</template>
<script>
// composition api
// import { onMounted } from "vue";
import { eat } from "../use/index";

export default {
  setup() {
    // 组件初始化的入口
    // composition api  入口
    // 所有的逻辑都放在 setup 里面调用
    // 变成意大利面条
    // 生命周期

    eat();
  },

  mounted() {},
};
</script>

<style scoped></style>
