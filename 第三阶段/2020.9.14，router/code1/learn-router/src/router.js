import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./views/Home.vue";
import ClassView from "./views/ClassView.vue";
import NotFound from "./views/NotFound.vue";
import ClassName from "./views/ClassName.vue";
import OneView from "./views/OneView.vue";
import TwoView from "./views/TwoView.vue";

// 插件的使用
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/home",
    //   //   redirect: "/",
    // },
    {
      path: "/",
      alias: ["/hei", "/home"],
      //   component: Home,
      components: {
        default: Home,
        one: OneView,
        two: TwoView,
      },
    },
    {
      path: "/classView/:id",
      component: ClassView,
      name: "classView",
      props: true,
      children: [
        {
          // /class/:id/:name
          //   path: ":name",
          path: ":name",
          component: ClassName,
          props: true,
        },
      ],
      beforeEnter(to, from, next) {
        console.log("----beforeEnter-----");
        console.log(to);
        console.log(from);
        console.log(next);
        next();
      },
      meta: {
        isRequired: true,
        check: false,
      },
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  // console.log(next);
  // next(false);
  next();
  // next(new Error("test error"));
});

router.afterEach((to, from) => {
  console.log("-----afterEach-------");
  console.log(to);
  console.log(from);
});

router.onError((err) => {
  console.log(err);
});

export default router;
