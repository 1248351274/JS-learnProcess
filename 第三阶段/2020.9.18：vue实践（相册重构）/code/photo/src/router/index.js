import VueRouter from "vue-router";
import Vue from "vue";
import Photo from "../view/Photo.vue";
import Login from "../view/Login.vue";
import Detail from "../view/Detail.vue";
import store from "../store";

// 插件使用
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/photo",
    },
    {
      path: "/photo",
      name: "photo",
      component: Photo,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail,
      props: true,
    },
  ],
});

// 导航守卫
// 提前检测有没有 token
router.beforeEach((to, from, next) => {
  // 当你访问 login 页面的时候 需要拦截吗？
  // photo 页面的时候 才需要拦截
  if (to.meta.requireAuth) {
    // 看看 store 里面有没有 token
    if (store.state.token) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  } else {
    next();
  }
});

export default router;
