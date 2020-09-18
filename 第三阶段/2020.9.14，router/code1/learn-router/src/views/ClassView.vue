<template>
  <div>
    my name is a classView
    {{ $route.params.id }}
    <router-view></router-view>
    <button @click="handleGoBack">go back</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    // output
    console.log(this.$route);
    // console.log(this.id);
  },
  beforeRouteEnter(to, from, next) {
    console.log("----beforeRouteEnter----");
    console.log(to);
    console.log(from);
    console.log(next);
    next();
  },
  beforeRouteLeave() {
    console.log("离开");
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
