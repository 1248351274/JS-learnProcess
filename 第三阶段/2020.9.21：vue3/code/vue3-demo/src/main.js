import { createApp } from "vue";
import App from "./App.vue";

// options api
// composition api ->组合api

// const App = {
//   name: "",
//   data() {
//     return {
//       key: "",
//     };
//   },
// };

// const App1 = defineComponent({
//   template: ``,
//   data: {},
// });

// 为了支持 tree-shaking
// 树摇

// vue -> A , B ,C ,D
// a,b

// esm

// 代码组织
// 我们在写组件逻辑的时候，应该更关注与组件要干什么
// 而不是要知道组件有什么选项

// 代码可读性更高
// 可维护更高
// 吃饭 -> 函数
// 睡觉
// 喝水

// 吃饭1
// 睡觉2
// 睡觉3
// 吃饭2

// 逻辑复用
// mixin 的问题
// - 来源不清晰
// - 命名冲突的问题
// - mixin $_
// mixin 使用起来没那么简单 - 副作用特别多

createApp(App).mount("#app");
