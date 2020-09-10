<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Button :disabled="disabled" @clickFn="clickFn">点击</Button> -->
    <Photo></Photo>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Button from './components/Button'
import Photo from './components/photo'
export default {
  name: 'App',
  components: {
    // Button,
    Photo
  },
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    clickFn() {
      console.log('dianjila');
    }
  },
}
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
