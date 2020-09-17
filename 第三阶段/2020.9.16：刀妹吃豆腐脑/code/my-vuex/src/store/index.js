import Vuex from "vuex";
import Vue from "vue";

// 使用插件
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,

  },
  getters: {
    
    addCount(state) {
      return state.count++;
    },
    reduceCount(state) {
      return state.count--;
    }
  },
  mutations: {
    changeCount(state, payload) {
      console.log(state);
      console.log('payload',payload);
      state.count = payload;

    },
  }
});

export default store;
