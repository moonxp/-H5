<template>
  <div class="confirmOrder">
    <!-- <div class="orderIphone">
            <p>手机号码：<input type="text" v-model="mobile" placeholder="请输入手机号"/></p>
        </div> -->
    <div class="orderYH">
      <van-cell-group>
        <van-field
          v-model="youhui"
          label="选择优惠"
          placeholder="暂无可用>"
          input-align="right"
        />
      </van-cell-group>
    </div>
    <van-cell-group>
      <van-field
        v-model="mobile"
        label="手机号码："
        placeholder="请输入手机号"
        input-align="left"
      />
      <van-field
        v-model="code"
        center
        clearable
        label="验证码:"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            @click="login"
            class="order_bt"
            :disabled="btnDisabled"
            >{{ btnText }}</van-button
          >
        </template>
      </van-field>
    </van-cell-group>
    <!-- <div class="orderCode">
      <p>
        验证码:
        <input type="text" v-model="code" placeholder="请输入验证码" /><a
          v-if="!show"
          href="#"
          @click="login"
          >点击获取</a
        ><span v-show="show">{{ count }} s</span>
      </p>
    </div> -->
    <div v-if="form.type == 3" class="orderCode">
      <p>
        直播课密码:
        <input type="text" v-model="password" placeholder="请输入直播密码" />
      </p>
    </div>
    <div class="orderSubmit" v-show="hidshow">
      <ul class="orderUl">
        <li>
          <span>实际金额：</span>
          <span>¥{{ parseFloat(this.form.money / 100.0).toFixed(2) }}</span>
        </li>
        <li class="orderSub">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            color="#fb6436"
            @click="buySubmit"
            >提交订单
          </van-button>
        </li>
      </ul>
      <div class="pricePopup">
        <van-popup
          v-model="showList"
          lock-scroll
          overlay
          round
          position="bottom"
          :style="{ height: '40%' }"
        >
          <p class="priceM">
            <b>付费详情</b>
            <span class="icon iconfont iconguanbi" @click="close"></span>
          </p>
          <p class="priceClass mb15">
            <span>课程价格</span>
            <span>¥{{ parseFloat(form.money / 100.0).toFixed(2) }}</span>
          </p>
          <p class="priceClass">
            <span>优惠</span>
            <span class="orangeC">-¥0</span>
          </p>
          <div class="buyNow">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              color="#fb6436"
              @click="prepayment"
            >
              <!--¥{{parseFloat(form.money / 100).toFixed(2)}}-->
              <span v-if="form.money > 0" class="buyBtn">立即购买</span>
              <span v-if="form.money == 0" class="buyBtn">确认订单</span>
            </van-button>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { Login, getCode } from "@/api/order.js";
import { Button, Popup, Field } from "vant";
import { Signup } from "@/api/live.js";

export default {
  name: "orderIphone",
  computed: {
    ...mapGetters(["getUserMsg"])
  },
  data() {
    return {
      btnText: "获取验证码",
      btnDisabled: false,
      youhui: "",
      code: "",
      mobile: "",
      showList: false,
      keyJwt: "",
      password: "",
      show: false,
      timer: null,
      count: 0,
      // Authorization : '',
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      hidshow: true //显示或者隐藏footer
    };
  },
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  props: {
    form: Object
  },
  created() {
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })();
    };
  },
  watch: {
    showHeight() {
      if (this.docmHeight > this.showHeight) {
        this.hidshow = false;
      } else {
        this.hidshow = true;
      }
    }
  },
  // （1）用户打开商户网页选购商品，发起支付，在网页通过JavaScript调用getBrandWCPayRequest接口，发起微信支付请求，用户进入支付流程。
  // （2）用户成功支付点击完成按钮后，商户的前端会收到JavaScript的返回值。商户可直接跳转到支付成功的静态页面进行展示。
  // （3）商户后台收到来自微信开放平台的支付成功回调通知，标志该笔订单支付成功。
  methods: {
    // cs() {
    //   window.console.log("1111");
    // },
    ...mapMutations(["updateUserMsg"]),
    login() {
      if (this.mobile == null || this.mobile == "") {
        alert("手机号码不能为空");
        return;
      }
      //先把按钮禁用
      this.btnDisabled = true;
      //准备变量记录时间
      let sec = 60;
      this.btnText = "还有60秒";

      let timerID = setInterval(() => {
        // if (sec == 59) {
        //   this.form.code = "246810";
        // }
        sec--;
        this.btnText = "还有" + sec + "秒";

        if (sec == 0) {
          //停止计时器
          clearInterval(timerID);
          //文字变回获取验证码
          this.btnText = "获取验证码";
          //启用
          this.btnDisabled = false;
        }
      }, 1000);
      getCode(this.form.sp, this.mobile).then(res => {
        if (res.code == 0) {
          this.$toast("手机验证码已发送，请注意查收");
        }
      });
    },
    Savemessage() {},
    buySubmit() {
      var recUserId = this.form.recommendUserId;
      recUserId = recUserId.substr(0, recUserId.indexOf("/"));
      var form = {
        mobile: this.mobile,
        code: this.code,
        recommendUserId: recUserId
      };
      this.updateUserMsg(form);
      sessionStorage.setItem("userMsg", form);
      Login(this.form.sp, form).then(res => {
        var code = res.code;
        if (0 == code) {
          this.updateUserMsg(res.data);
          sessionStorage.setItem("userMsg", res.data);
          this.showList = true;
        } else {
          alert(res.errMsg);
          return;
        }
      });
    },
    prepayment() {
      localStorage.setItem("wzpayForm", JSON.stringify(this.form));
      localStorage.setItem("mobile", this.mobile);
      if (this.form.money == 0) {
        var shareType = this.form.shareType;
        if (shareType == "live") {
          var liveType = 1; //需要密码观看
          if (this.form.type == 3) {
            liveType = 2;
          }
          Signup(this.form.sp, {
            liveId: this.form.id,
            type: liveType,
            password: this.password
          }).then(res => {
            var code = res.code;
            if ("999999" == code) {
              alert(res.errMsg);
              return;
            }
            this.$router.push({
              name: "download"
            });
          });
        } else if (shareType == "course") {
          this.$router.push({
            name: "download"
          });
        }
      } else {
        var local = "https://sjfzcourses-share.timeonark.com/#/order";
        var APPID = "wx04b6648b08d15fc2";
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
          APPID +
          "&redirect_uri=" +
          encodeURIComponent(local) +
          "&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
      }
    },
    close() {
      this.showList = false;
    }
  },
  mounted() {
    var mobile = localStorage.getItem("mobile");
    if (mobile != null && mobile != "") {
      this.mobile = mobile;
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.orderYH {
  margin-bottom: 16px;

  display: none;
}

.confirmOrder {
  width: 100%;
  background-color: #ffffff;
  // padding: 16px;
}

.orderIphone {
  background-color: #fff;
  padding: 14px 15px;
  margin-bottom: 4px;

  > p {
    font-size: 15px;
  }
}

.orderCode {
  background-color: #fff;
  padding: 14px 15px;
  margin-bottom: 15px;
  position: relative;

  > p {
    font-size: 15px;

    > a {
      position: absolute;
      right: 30.4px;
    }
  }
}

.mb15 {
  margin-bottom: 15px;
}

.orangeC {
  color: #fb6436 !important;
}

.orderSubmit {
  width: 100%;
  position: absolute;
  padding: 16.5px 15px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1111;

  .orderUl {
    overflow: hidden;
    line-height: 39px;

    > li:first-child {
      float: left;
      font-size: 14px;

      > span:last-child {
        color: #fb6436;
      }
    }

    > li:last-child {
      width: 160px;
      float: right;
    }
  }

  .pricePopup {
    z-index: 100;
    position: relative;

    .priceM {
      font-size: 16px;
      color: #333;
      text-align: center;
      margin-top: 14px;
      position: relative;
      margin-bottom: 25px;

      > span {
        position: absolute;
        right: 15px;
        font-size: 15px;

      }
    }

    .priceClass {
      padding: 0 13px;
      overflow: hidden;

      > span:first-child {
        font-size: 15px;

        color: #333;
        float: left;
      }

      > span:last-child {
        font-size: 16px;
        color: #333;
        float: right;
      }
    }

    .buyNow {
      position: absolute;
      bottom: 12px;
      padding: 0 15px;
      width: 90%;
      margin-left: 16px;

      .buyBtn {
        font-size: 14px;

      }
    }
  }
}
</style>
