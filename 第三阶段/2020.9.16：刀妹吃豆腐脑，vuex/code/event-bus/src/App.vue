<template>
  <div id="app">
    <CompA></CompA>
  </div>
</template>

<script>
import CompA from "./components/CompA";
export default {
  name: "App",
  components: {
    CompA,
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
