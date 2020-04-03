<template>
  <!-- 海报html元素 -->
  <div id="posterHtml" :style="{backgroundImage: 'url('+posterHtmlBg+')'}">
    <div>{{posterContent}}</div>
    <!-- 二维码 -->
    <div class="qrcode">
      <div id="qrcodeImg" style="width: 2.5rem;height: 2.5rem;"></div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      posterContent: "", // 文案内容
      posterHtmlBg: require("../image/bg.png"), // 背景图
      posterImg: "" // 最终生成的海报图片
    };
  },
  mounted() {
    this.createQrcode("localhost:8080");
  },
  methods: {
    createQrcode(text) {
      // 生成二维码
      const qrcodeImgEl = document.getElementById("qrcodeImg");
      qrcodeImgEl.innerHTML = "";
      let qrcode = new QRCode(qrcodeImgEl, {
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      qrcode.makeCode(text);
      this.createPoster();
    },
    createPoster() {
      // 生成海报
      const vm = this;
      const domObj = document.getElementById("posterHtml");
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        logging: false,
        letterRendering: true,
        onclone(doc) {
          let e = doc.querySelector("#posterHtml");
          e.style.display = "block";
        }
      }).then(function(canvas) {
        // 在微信里,可长按保存或转发
        vm.posterImg = canvas.toDataURL("image/png");
      });
    }
  }
};
</script>

<style>
#posterHtml,
.qrcode {
  width: 400px;
  height: 500px;
}
</style>
