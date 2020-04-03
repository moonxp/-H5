<template>
  <div class="videoDiv" :style="{ backgroundImage: 'url(' + videoImg + ')' }">
    <!-- <img :src="videoImg"> -->
  </div>
</template>

<script>
export default {
  name: "videoTop",
  props: {
    videoImg: String
  }
};
</script>

<style lang="less" scoped="scoped">
.videoDiv {
  width: 100%;
  height: 240px;
  background-position: center;
  overflow: hidden;
  background-size: cover;
}

.img1 {
  // background: transparent url('') 50% 50% no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
