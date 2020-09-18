import Vuex from "vuex";
import Vue from "vue";
import { fetchLogin, fetchPhotos } from "../api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
    photos: [],
    pageSize: 5,
    pageTotal: 10,
  },
  getters: {
    getPhotoItemById(state) {
      // this.$store.getters.getPhotoItemById()
      return (id) => {
        return state.photos.find((photo) => {
          return photo.id == id;
        });
      };
    },
  },

  mutations: {
    login(state, payload) {
      state.token = payload.token;
      // 持久化保存 token
      // 方便下次获取
      localStorage.setItem("token", payload.token);
    },

    logout(state) {
      state.token = "";
      localStorage.removeItem("token");
    },

    updatePhotos(state, payload) {
      console.log(payload);
      state.photos = payload.photos;
    },

    updatePageInfo(state, payload) {
      state.pageSize = payload.prepage;
      state.pageTotal = payload.total;
      console.log(state);
    },
  },

  actions: {
    login({ commit }, payload) {
      // 异步的
      // action  支持返回 promise
      const { username, password } = payload;
      return fetchLogin({ username, password }).then((res) => {
        commit("login", {
          token: res.data.data.token,
        });
      });
    },

    updatePhotos({ commit }, payload) {
      const { p } = payload;
      return fetchPhotos(p).then((res) => {
        console.log(res.data);
        commit("updatePhotos", {
          photos: res.data.data.photos,
        });
        const { prepage, total } = res.data.data.page;
        commit("updatePageInfo", {
          prepage,
          total,
        });
      });
    },
  },
});

export default store;
