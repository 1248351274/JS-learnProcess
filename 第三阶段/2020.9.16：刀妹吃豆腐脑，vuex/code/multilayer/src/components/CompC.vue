<template>
  <div>
    CompC
    ------
    attrs
    {{ $attrs.title }}
    <div>
      {{ foo }}
    </div>
  </div>
</template>

<script>
export default {
  inject: ["foo", "compA"],
  // props: ["title"],

  mounted() {
    // console.log(this.compA);
    // const parentTitle = this.compA.getTitle();
    // console.log(parentTitle);
    console.log(this.$attrs);
  },
};
</script>

<style scoped></style>
