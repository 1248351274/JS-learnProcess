import Vuex from "vuex";
import Vue from "vue";
import actions from './actions'

// 使用插件
Vue.use(Vuex);

const moduleA = {
  state: {},
  actions: {},
  mutation: {},
};

const moduleB = {
  state: {},
  actions: {},
  mutation: {},
};

const store = new Vuex.Store({
  state: {
    msg: "hi vuex",
    name: "xiaohong",
    age: 18,
  },
  getters: {
    // 和我们计算属性一样
    // vuex
    // 有一个缓存的效果
    tenYearsOld(state) {
      return state.age + 10;
    },
  },
  mutations: {
    changeMsg(state, payload) {
      //   setTimeout(() => {
      console.log(state);
      console.log(payload);
      state.msg = "heiheihei  vuex";
      //   }, 5000);
    },

    changeName(state) {
      //   setTimeout(() => {
      state.name = "xiaohei";
      //   }, 1000);
    },
  },

  actions: {
    getMsg({ commit }) {
      console.log("getMsg");
      setTimeout(() => {
        commit("changeMsg");
      }, 1000);
    },
  },
  modules: {
    a: moduleA,
    b: moduleB,
  },
});

export default store;
