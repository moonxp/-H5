<template>
  <div class="qrNav">
    <span class="icon iconfont iconfanhui" @click="goBack"></span>
    <p class="qrTittle">
      <b>长按保存图片</b>
    </p>
  </div>
</template>

<script>
export default {
  name: "qrcanvasTop",
  methods: {
    goBack() {
      this.$router.replace("/introduction");
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.qrNav {
  width: 100%;
  height: 64px;
  position: relative;
  top: 0;
  background: #ffffff;

  .qrTittle {
    font-size: 18px;
    text-align: center;
    line-height: 64px;
    color: #333;
  }

  .iconfanhui {
    position: absolute;
    font-size: 24px;
    margin: auto;
    bottom: 15px;
    left: 15px;
  }
}
</style>
