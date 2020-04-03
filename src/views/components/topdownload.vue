<template>
  <div class="top_App" @click="download">
    <div class="img_logo">
      <img src="../../assets/h5_slices/icon.png" alt="" />
    </div>
    <div class="content">
      <span>点击下载APP,更多精品课程等你一起学习</span>
    </div>
    <div class="drive">
      <span>>></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //跳转下载页面
    download() {
      this.$router.push("/download");
    }
  }
};
</script>

<style lang="less" scoped>
.top_App {
  width: 100%;
  height: 36px;
  background-color: rgba(0, 0, 0, 0.5);
  // opacity: 0.5;
  position: fixed;
  top: 0;
  display: flex;
  align-content: center;
  z-index: 9;
  div {
    margin-right: 10px;
    color: #ffffff;
    font-size: 13px;
  }
  .img_logo {
    vertical-align: middle;
    position: relative;
    margin: auto 8px auto 14px;
    width: 20px;
    height: 20px;
    z-index: 666;
  }
  .content {
    height: 100%;
    line-height: 36px;
  }
  .drive {
    height: 100%;
    line-height: 36px;
  }
}
</style>
