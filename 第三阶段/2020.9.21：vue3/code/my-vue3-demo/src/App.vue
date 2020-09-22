<template>
  <div>
    <!-- <Counter :count="10" @change="handleChange" :position="position"></Counter> -->
    <!-- <button @click="handlePosition">changePosition</button> -->
    <!-- <Keyboard></Keyboard> -->
    <MouseApplication v-if="showOld"></MouseApplication>
    <button @click="handleShowOld">closeMouse</button>
  </div>
</template>

<script>
// import Keyboard from "./components/Keyboard";
// import Counter from "./components/Counter";
import MouseApplication from "./components/MouseApplication";
import { provide, reactive, ref } from "vue";
export default {
  name: "App",
  components: {
    // Counter,
    // Keyboard,
    MouseApplication
  },
  data() {
    return {
      showOld: true
    }
  },
  methods: {
    handleShowOld() {
      console.log(this.showOld);
      this.showOld = !this.showOld
    }
  },
  setup() {
    const handleChange = (count) => {
      console.log(count);
    };

    const position = reactive({
      x: "x",
      y: "y",
    });

    let show = ref(true);
    console.log(show);
    const handlePosition = () => {
      position.x = "x-1";
      position.y = "y-1";
    };

    const handleShow = () => {
      console.log(show.value);
      show.value = !show.value
    }

    provide("app", "123");
    return {
      position,
      handlePosition,
      handleChange,
      handleShow
    };
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
