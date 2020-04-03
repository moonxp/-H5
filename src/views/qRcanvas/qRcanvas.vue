<template>
  <div class="qrcanvasApp">
    <qrcanvas-top></qrcanvas-top>
    <qr-card></qr-card>
    <qrcanvas-bottom></qrcanvas-bottom>
  </div>
</template>

<script>
import qrcanvasTop from "./components/qrcanvasTop.vue";
import qrCard from "./components/qrCard.vue";
import qrcanvasBottom from "./components/qrcanvasBottom.vue";
export default {
  name: "qRcanvas",
  components: {
    qrcanvasTop,
    qrcanvasBottom,
    qrCard
  }
};
</script>

<style lang="less">
.qrcanvasApp {
}
</style>
