<template>
  <div>
    Parent

    <CompA>
      <Child title="my name is Parent" ref="compA" @child="handleChild"></Child>
    </CompA>
    <input type="text" ref="input" />
  </div>
</template>

<script>
import Child from "./Child";
import CompA from "./CompA";
export default {
  components: {
    Child,
    CompA
  },

  mounted() {
    // Parent -> child
    // console.log(this.$children);
    this.$children[0].title = "pass children set value";
    console.log(this.$children[0]);
    const child = this.$children[0];
    console.log(child.getTitle());
    // console.log(this.$refs.compA.getTitle());
    // this.$refs.input.focus();
  },
  methods: {
    handleChild(msg) {
      console.log(msg);
    },
  },
};
</script>

<style scoped></style>
