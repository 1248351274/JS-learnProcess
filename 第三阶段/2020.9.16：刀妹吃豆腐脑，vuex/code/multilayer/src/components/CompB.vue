<template>
  <div>
    CompB
    <CompC v-bind="$attrs"></CompC>
  </div>
</template>

<script>
import CompC from "./CompC";
export default {
  inject: ["foo", "compA"],
  //   props: ["title"],
  components: {
    CompC,
  },
  mounted() {
    console.log(this.$attrs);
    console.log(this.foo);
    console.log(this.$listeners)
  },
};
</script>

<style scoped></style>
