<template>
  <div>
    CompA
    <CompB title="my name is CompA" v-bind="$attrs" v-on="$listeners"></CompB>
  </div>
</template>

<script>
import CompB from "./CompB";
export default {
  //   props: ["title"],
  inheritAttrs: false,
  provide() {
    return {
      foo: "bar",
      compA: this,
    };
  },
  components: {
    CompB,
  },
  mounted() {
    // attrs -> 如果你没有在 props 里面定义的参数，都会到这里来
    console.log(this.$attrs);
    console.log(this)
  },
  methods: {
    getTitle() {
      return "heiheihei";
    },
  },
};
</script>

<style scoped></style>
