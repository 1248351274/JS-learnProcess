<template>
  <div>
    <button @click="show = true">open</button>
    <div v-if="show">
      <teleport to="body">
        <div>
          modal
          <button @click="show = false">close</button>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped></style>
