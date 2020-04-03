<template>
  <div>
    <top-download></top-download>
    <div class="top-icon">
      <!--<span class="icon iconfont iconchakantiezifenxiang"></span>-->
      <img :src="urlImg" alt />
    </div>
  </div>
</template>

<script>
// 公共top去App组件
import topDownload from "../../components/topdownload";
export default {
  name: "introductionTop",
  components: {
    topDownload
  },
  props: {
    urlImg: String
  }
};
</script>

<style lang="less" scoped="scoped">
.top-icon {
  width: 100%;
  background-size: 100%;
  position: relative;

  > .iconchakantiezifenxiang {
    z-index: 10;
    color: #fff;
    display: inline-block;
    font-size: 21px;
    position: absolute;
    top: 32px;
    right: 16px;
  }
}
</style>
