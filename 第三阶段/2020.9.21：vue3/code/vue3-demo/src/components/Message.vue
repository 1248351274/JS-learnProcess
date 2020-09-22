<template>
  <div>{{ info }}</div>
  <div>{{ message }}</div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  // data() {
  //   return {
  //     info: {},
  //     message:"haha"
  //   };
  // },
  setup() {
    // 接受 object array
    // 引用类型
    const info = reactive({ message: "heihei" });
    // 如果是值类型的话， 使用 ref 创建对应的响应式数据
    const message = ref("haha");

    // reactive vs ref
    // js  object vs string number
    // 你想用哪种就用哪种

    // const reactiveObj = { value: "1" };

    // reactiveObj.value

    // 值类型的话 

    console.log(message);
    console.log(info);

    // composition api 的入口
    // eslint-disable-next-line vue/no-parsing-error
    // 生命周期
    // bc  c
    // onMounted(() => {
    //   console.log("mounted1");
    // });
    // onMounted(() => {
    //   console.log("mounted2");
    // });
    // onBeforeMount(() => {
    //   console.log("beforeMount");
    // });
    // onBeforeMount(() => {
    //   console.log("beforeMount23");
    // });

    return {
      info,
      message,
    };
  },
};
</script>

<style scoped></style>
