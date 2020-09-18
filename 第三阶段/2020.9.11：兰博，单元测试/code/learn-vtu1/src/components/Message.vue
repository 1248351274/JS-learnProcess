<template>
  <div>
    <span>{{ count }}</span>
    <button class="vue-btn" data-testid="btn1" @click="handleClick">
      click
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      console.log("click");
      this.count++;
    },
  },
};
</script>

<style scoped></style>
