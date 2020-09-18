<template>
  <div>
    home<br>
    <button @click="handleBack">返回</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {

      this.$router.back()

    },
  },
};
</script>

<style scoped></style>
