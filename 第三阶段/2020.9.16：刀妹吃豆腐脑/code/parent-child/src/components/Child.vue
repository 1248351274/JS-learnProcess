<template>
  <div>
    <h1>
      {{ title }}
      <button @click="handleClick">emit</button>
    </h1>
    child
  </div>
</template>

<script>
export default {
  props: ["title"],

  methods: {
    getTitle() {
      return this.title;
    },
    handleClick() {
      //   this.$emit("child", "123");
      console.log(this.$parent);
    },
  },
};
</script>

<style scoped></style>
