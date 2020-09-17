<template>
  <div>
    {{ count }}
    <button @click="addCount">增加</button>
    <button @click="reduceCount">减少</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    addCount() {

      this.$store.state.count++;
      this.$store.commit("changeCount", this.count);
    },
    reduceCount() {
      this.$store.state.count--;
      this.$store.commit("changeCount", this.count);
    },
  },
};
</script>

<style scoped></style>
