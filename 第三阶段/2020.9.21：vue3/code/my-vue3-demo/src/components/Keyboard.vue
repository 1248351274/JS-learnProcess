<template>
  <div>
    {{ position }}
  </div>
</template>

<script>
import { useKeyboardMove } from "../use/useKeyboardMove";
export default {
  setup() {
    // 响应式对象
    const position = useKeyboardMove();
    // 功能b
    // 功能c


    return {
      position,
    };
  },
};
</script>

<style scoped></style>
