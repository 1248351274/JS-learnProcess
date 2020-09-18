<template>
  <div>
    <div class="container">
      <div class="photoHeader">
        <div class="imgContainer">
          <img class="photoName" src="public/img/1.jpg" />
        </div>
        <div class="btnContainer">
          <span class="photoTitle">相册名称</span>
          <button class="mybtn" @click="showUploadView = true">上传照片</button>
        </div>
      </div>

      <div class="photoContainer">
        <template v-for="item in photos">
          <router-link
            :key="item.id"
            :to="{ name: 'detail', params: { id: item.id } }"
          >
            <PhotoItem :imgName="item.name" :imgUrl="item.imgUrl"></PhotoItem>
          </router-link>
        </template>
      </div>
      <el-pagination
        layout="prev, pager, next"
        :total="pageTotal"
        :page-size="pageSize"
        @current-change="handlePaginationChange"
      >
      </el-pagination>
    </div>
    <!-- 上传相关 -->
    <el-dialog
      :visible.sync="showUploadView"
      width="85%"
      title="上传照片-普通上传(H5)"
    >
      <UploadView @uploadComplete="handleUploadComplete"></UploadView>
    </el-dialog>
  </div>
</template>

<script>
import { getPhotos } from "../api";
import PhotoItem from "../components/PhotoItem";
import UploadView from "../components/UploadView";
import { mapState } from "vuex";
export default {
  components: {
    PhotoItem,
    UploadView,
  },
  data() {
    return {
      showUploadView: false,
    };
  },
  computed: {
    ...mapState(["photos", "pageTotal", "pageSize"]),
  },
  created() {
    this.updatePhotos(1);
  },
  methods: {
    handlePaginationChange(currentPaeg) {
      console.log(currentPaeg);
      this.updatePhotos(currentPaeg);
      // 请求后端接口
      // 更新相册数据
    },
    handleUploadComplete() {
      // this.updatePhotos();
    },

    async updatePhotos(p) {
      this.$store.dispatch("updatePhotos", {
        p,
      });
      // const { data: responseData } = await getPhotos();
      // this.photos = responseData.data;
    },
  },
};
</script>

<style scoped></style>
