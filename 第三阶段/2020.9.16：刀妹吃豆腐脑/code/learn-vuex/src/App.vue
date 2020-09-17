<template>
  <div id="app">
    {{ mymsg }} - {{ name }} - {{ age }} 十年后的年龄:{{ tenYearsOld }}
    <!-- <button @click="handleMsg">change msg</button> -->
    <button @click="handleAsyncChangeMsg">async change msg</button>
    <!-- <button @click="handleAsyncChangeMsg">change msg</button> -->
    <button @click="changeMsg">change msg</button>
    <CompA></CompA>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import CompA from "./components/CompA";

// const mapStateInfo = mapState(["msg", "name", "age"]);
// console.log(mapStateInfo);

export default {
  name: "App",
  components: {
    CompA,
  },
  data() {
    return {
      // msg: this.$store.state.msg,
    };
  },
  computed: {
    ...mapState(["name", "age"]),
    ...mapState({
      mymsg: "msg",
    }),
    ...mapGetters(["tenYearsOld"]),
    // tenYearsOld() {
    //   return this.$store.state.age + 10;
    // },
    // msg(){
    //   return this.$store.state.msg;
    // }
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    // 动手的作业
    ...mapMutations(["changeMsg"]),
    handleAsyncChangeMsg() {
      this.$store.dispatch("getMsg");
    },
    handleAge() {
      //改变 age
    },
    // handleMsg() {
    //   // 直接修改了 state 的值
    //   // this.$store.state.msg = "change msg";
    //   // this.$emit("xxx",{})
    //   this.$store.commit("changeMsg", { msg: "heihei" });
    // },
  },
};

// function changeMsg(msg) {
//   debugger;
//   this.$store.state.msg = "change msg";
// }
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
