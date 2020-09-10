<template>
  <div>
    <div class="container">
      <div class="photoHeader">
        <div class="imgContainer">
          <img class="photoName" src="public/img/1.jpg" />
        </div>
        <div class="btnContainer">
          <span class="photoTitle">相册名称</span>
          <button class="mybtn" @click="uploadPage">上传照片</button>
        </div>
      </div>

      <div class="photoContainer">
        <!-- <div class="photoItem">
          <img src="img/Home.png" />
          <span>
            home
          </span>
        </div>-->
      </div>
    </div>
    <!-- 上传相关 -->
    <div class="masking" v-show="upPage">
      <div class="addPhotoContainer"></div>
      <div class="addController">
        <h3 class="addTitle">
          上传照片-普通上传(H5)
          <span class="close" @click="upPage = false">╳</span>
        </h3>
        <div class="photoTitles">
          <span class="uploadTo">上传到</span>
          <div class="photoSelect">
            <img class="showPhoto" src="public/img/1.jpg" />
            相册名称
          </div>
        </div>

        <!-- 上传按钮 -->
        <div class="showContainer" v-show="showUploadBtn">
          <div class="uploadContainer">
            <span class="fileinput-button">
              <span>上传图片</span>
              <input class="imgFile" @change="handlePhotoMsg" type="file" name multiple="multiple" />
            </span>
            <span class="hint">按住Ctrl可多选</span>
          </div>
        </div>

        <!-- 显示待上传图片  -->
        <div class="loadContainer" v-show="showWantUpload">
          <div class="wantUpload">
              
            <div class="uploadPhotoItem"   v-for="(item,index) in toUploadPhotos" :key="index">
              <span class="myProgress" >
                <span class="plan"></span>
                30%{{item.plan}}
              </span>
              <img :src="item.imgUrl" />
              <span class="pictureName">
                home
              </span>
            </div>
          </div>
          <div class="addStyle">
            <span class="fileinput-add">
              <span></span>
              <input class="imgFile-add" type="file" multiple="multiple" />
            </span>
          </div>
          <!-- 开始上传按钮 -->
          <div class="bottomStyle">
            <span class="uploadBtn">开始上传</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPhotos } from '../api'
export default {
    data() {
        return {
            upPage: true,
            toUploadPhotos:[],
            showWantUpload:false,
            showUploadBtn:true
        }
    },
    created () {
        this.getAllPhotos();
    },
    methods: {
        uploadPage() {
            this.upPage = true
        },
        handlePhotoMsg(e){
            const photoItems = Array.from(e.target.files).map((file) => {
                return {
                    plan: 0,
                    file
                }
            })
            this.toUploadPhotos.push(...photoItems);
            this.showWantUpload = true;
            this.showUploadBtn = false
        },
        async getAllPhotos(){
            let data = await getPhotos()
            console.log(data);
        }
    },
};
</script>

<style scoped>
</style>