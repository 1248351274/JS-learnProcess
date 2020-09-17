<template>
  <div>
    <button :disabled="$attrs.disabled">click</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
