<template>
  <div>
    <el-header>
      <h1>{{ item.name }}</h1>
    </el-header>
    <el-main>
      <img :src="item.imgUrl" alt="" width="50%" />
      <el-button @click="handleGoBack">go back</el-button>
    </el-main>
  </div>
</template>

<script>
import { fetchPhoto } from "../api";
export default {
  props: ["id"],
  data() {
    return {
      item: {},
    };
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },
  created() {
    // 当我们请求数据的时候，有可能有延迟
    // 用户看我们页面的时候 是不是空白?
    // getter 是可以返回函数的

    const photoInfo = this.$store.getters.getPhotoItemById(this.id);
    if (photoInfo) {
      // 从 photo 跳转到 detail 页面的情况
      this.item = photoInfo;
    } else {
      // console.log(item);
      // 直接访问 url
      // 去请求一下后端

      const loading = this.$loading({
        text: "正在请求数据 ，请骚等",
      });

      fetchPhoto(this.id).then((res) => {
        this.item = res.data.data;

        loading.close();
      });
    }
  },
};
</script>

<style scoped></style>
