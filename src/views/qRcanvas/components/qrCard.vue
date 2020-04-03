Í<template>
  <div class="qrCardApp" id="qrCardApp">
    <div
      v-show="true"
      class="card"
      id="posterHtml"
      :style="{backgroundImage: 'url('+posterHtmlBg+')'}"
    >
      <div class="cardTop">
        <img src="../image/tx.png" alt />
        <!-- question！ 最多8字 -->
        <span class="author">奔跑的罗拉</span>
        <span class="shareClass">给你分享一门好课</span>
      </div>
      <div class="cardImg">
        <img src="../image/banner@2x.png" alt />
      </div>
      <div class="cardTittle">
        <p class="ctittle">
          <b>
            <span>|</span>伯永辉力荐：你喜爱的人生，重构思维心智，突破人生进阶
          </b>
        </p>
        <p class="learnP">16.8万次学习</p>
      </div>
      <div class="cardQR">
        <div class="qrTxt">
          <p>
            <b>长按识别二维码 ></b>
          </p>
          <p>了解课程更多内容</p>
        </div>
        <!-- 二维码 -->
        <div class="qr" id="qrcodeImg">
          <!-- <img src="../image/qr.png" alt=""> -->
        </div>
      </div>
      <div class="cardNote">
        <span>&copy;深圳时间方舟科技有限公司&nbsp;提供技术支持</span>
      </div>
    </div>
    <div class="oimg">
      <img src alt id="cc" />
    </div>
  </div>
</template>

<script>
import { Image, Col, Row } from "vant";
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";
export default {
  name: "qrCard",
  components: {
    [Image.name]: Image,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data() {
    return {
      posterHtmlBg: require("../image/bg.png"),
      posterImg: undefined // 最终生成的海报图片
    };
  },
  mounted() {
    this.createQrcode("http://www.timeonark.com/mobile.html?uid=1&cid=3");
    this.createPoster();
  },
  methods: {
    createQrcode(url) {
      // 生成二维码
      const qrcodeImgEl = document.getElementById("qrcodeImg");
      qrcodeImgEl.innerHTML = "";
      let qrcode = new QRCode(qrcodeImgEl, {
        width: 80,
        height: 80,
        colorDark: "#000",
        colirLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
      });
      qrcode.makeCode(url);
    },
    createPoster() {
      // 生成海报
      const vm = this;
      const domObj = document.getElementById("posterHtml");
      // const cardApp = document.getElementById('qrCardApp')
      let cc = document.getElementById("cc");
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        onclone(doc) {
          let e = doc.querySelector("#posterHtml");
          // let c = doc.querySelector('#cc')
          e.style.display = "block";
          console.log(e);
          // e.style.width = '300px'
          // e.style.height = '300px'
          // console.log(e)
        }
      }).then(function(canvas) {
        vm.posterImg = canvas.toDataURL("image/png");
        cc.src = vm.posterImg;
        // cardApp.appendChild(cc)
        console.log(canvas);
        console.log(vm.posterImg);
      });
      // .then(canvas => {
      // 	let oImg = new Image()
      // 	oImg.src = canvas.toDataURL() // 导出图片
      // 	cardApp.appendChild(oImg)
      // })
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.taclh {
  line-height: 80px;
}

.oimg {
  z-index: 1999;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1 !important;
  width: 300px;
  height: 480px;
}

#cc {
  z-index: 2999;
}

.qrCardApp {
  width: 100%;
  height: auto;
  position: absolute;
  top: 64px;
  bottom: 44px;
  overflow: hidden;

  .card {
    width: 276px;
    height: 443px;
    // background: url(../image/bg.png);
    // opacity: 0;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    padding: 22px 12px 15px 12px;

    .cardTop {
      overflow: hidden;
      margin-bottom: 12px;

      > img {
        width: 40px;
        height: 40px;
        float: left;
        margin-right: 10px;
      }

      .author {
        font-size: 14px;
        color: #fff;
        float: left;
        line-height: 40px;
        margin-right: 10px;
      }

      .shareClass {
        float: left;
        font-size: 10px;
        line-height: 40px;
        color: #333;
      }
    }

    .cardImg {
      margin-bottom: 15px;

      > img {
        width: 100%;
      }
    }

    .cardTittle {
      margin-bottom: 15px;

      .ctittle {
        font-size: 16px;
        color: #fff;
        margin-bottom: 10px;
      }

      .learnP {
        font-size: 11px;
        color: #99ffff;
      }
    }

    .cardQR {
      overflow: hidden;
      margin-bottom: 14px;

      .qrTxt {
        float: left;
        margin-top: 20px;
        margin-left: 30px;

        > p:first-child {
          color: #fff;
          font-size: 14px;
        }

        > p:last-child {
          color: #333;
        }
      }

      .qr {
        width: 80px;
        height: 80px;
        background: #fff;
        float: right;
        margin-right: 30px;
        overflow: hidden;

        > img {
          width: 100%;
        }
      }
    }

    .cardNote {
      text-align: center;
    }
  }
}
</style>
