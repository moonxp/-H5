<template>
  <div class="qrcanvasBottomApp">
    <p>长按保存图片，发送给微信好友或朋友圈，每成功邀请1位好友购买课程，即可获得74.7元奖金，即刻到账</p>
  </div>
</template>

<script>
export default {
  name: "qrcanvasBottom"
};
</script>

<style lang="less" scoped="scoped">
.qrcanvasBottomApp {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 44px;
  background: #50d998;
  padding: 0 10px;
  z-index: 1111;

  > p {
    font-size: 10px;
    color: #fff;
  }
}
</style>
