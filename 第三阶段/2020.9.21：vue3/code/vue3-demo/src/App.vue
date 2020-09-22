<template>
  <div>
    <!-- <div>hello</div>
    <div>word</div> -->
    <!-- <ModalButton></ModalButton> -->
    <!-- <Button></Button> -->
    <!-- <Message></Message> -->
    <Counter :count="10" @change="handleChange" :position="position"></Counter>
    <button @click="handlePosition">changePosition</button>
    <Keyboard></Keyboard>
  </div>
</template>

<script>
// import Button from "./components/Button";
// import ModalButton from "./components/ModalButton";
// import Message from "./components/Message";
import Keyboard from "./components/Keyboard";
import Counter from "./components/Counter";
import { provide, reactive } from "vue";
export default {
  name: "App",
  components: {
    // Button,
    // Message,
    Counter,
    Keyboard,
  },
  setup() {
    const handleChange = (count) => {
      console.log(count);
    };

    const position = reactive({
      x: "x",
      y: "y",
    });

    const handlePosition = () => {
      position.x = "x-1";
      position.y = "y-1";
    };

    provide("app", "123");
    return {
      position,
      handlePosition,
      handleChange,
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
