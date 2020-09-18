<template>
  <div>
    home
    <!-- <a href="/#/class/123">go to class</a> -->
    <button @click="handleGoToClass">go to class</button>
    <router-link :to="{ name: 'classView' }">go to class</router-link>
    <!-- <router-link to="/classView/123">go to class</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// 父子关系
export default {
  methods: {
    handleGoToClass() {
      // js 来控制
      // this.$router
      console.log(this.$router);

      // 前进 后退
      // 历史栈

      this.$router.push({
        name: "classView",
      });
      // this.$router.replace({
      //   name: "classView",
      // });
    },
  },
};
</script>

<style scoped></style>
