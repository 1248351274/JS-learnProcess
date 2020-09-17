<template>
  <div>
    CompA 十年后的年龄:
    {{ tenYearsOld }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // tenYearsOld() {
    //   //   return this.$store.state.age + 10;
    //   // 麻烦
    //   return this.$store.getters.tenYearsOld;
    // },
    ...mapGetters(["tenYearsOld"]),
  },
  mounted() {
    // this.$store.state.msg = "change msg";
  },
};
</script>

<style scoped></style>
