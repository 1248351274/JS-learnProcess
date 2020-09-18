import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Login from "./views/Login.vue";

// 插件的使用
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Login,
      },
    },
    {
      path: "/home",
      component: Home,
      name: "homeView",
      props: true,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});
export default router;
