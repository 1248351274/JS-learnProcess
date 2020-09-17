<template>
  <div id="app">
    <CompA title="123" @a="handleA"></CompA>
    <!-- <Button disabled></Button> -->
  </div>
</template>

<script>
import CompA from "./components/CompA";
// import Button from "./components/Button";

export default {
  name: "App",
  components: {
    CompA,
    // Button,
  },
  methods: {
    handleA() {
      console.log("handleA");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
