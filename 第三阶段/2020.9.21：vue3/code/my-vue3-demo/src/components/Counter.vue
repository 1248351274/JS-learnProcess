<template>
  <div>
    {{ count }} - {{ double }}

    {{ position.x }} - {{ position.y }}
    {{ x }} - {{ y }}
    <input type="text" ref="input" />
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import {
  ref,
  computed,
  watch,
  watchEffect,
  inject,
  onMounted,
  //   toRefs,
  //   reactive,
} from "vue";
import { useKeyboardMove } from "../use/useKeyboardMove";
export default {
  props: ["countA", "position"],
  setup(props, context) {
    // const { position } = props;
    // const { countA } = props;

    //解构 reactive 的值的时候，普通的值
    // const { x, y } = toRefs(position);

    // console.log(x, y);

    const position = useKeyboardMove();

    console.log(position);
    //   this
    console.log(props);
    // this.$attrs
    console.log(context);
    // 以后就没有 this 了
    const count = ref(0);
    // reactive -> readonly 是一个只能读的
    // const info = readonly({ x: 0, y: 0 });
    // info.x = 10;
    const appValue = inject("app");
    console.log(appValue);

    // refs
    const input = ref();

    onMounted(() => {
      console.log(input);
      input.value.focus();
    });

    const handleClick = () => {
      // 是不是不行啊
      // 引入了 ref 类型的一个心智负担
      count.value++;
      context.emit("change", count);
      // count++;
    };

    const double = computed(() => {
      return count.value * 2;
    });

    // watch
    watch(double, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
      console.log("watch");
    });

    watchEffect(() => {
      console.log("watchEffect");
      console.log(double.value);
    });

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      //   position,
      //   x,
      //   y,
      input,
      double,
      handleClick,
    };
  },
};
</script>

<style lang="sass" scoped></style>
