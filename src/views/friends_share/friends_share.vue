<template>
  <div class="share">
    <!-- login背景图片 -->
    <div class="login_up">
      <img class="img" src="@/assets/h5_login/背景@2x.png" />
    </div>
    <!-- login信息 -->
    <div class="login_message">
      <van-cell-group>
        <div>
          <van-field
            class="user"
            v-model="mobile"
            name="用户名"
            placeholder="请输入手机号"
            :error-message="error.mobilemsg"
          >
            <template slot="left-icon">
              <div class="login_photo">
                <img src="../../assets/h5_login/手机号 .png" alt="" />
              </div>
            </template>
          </van-field>
        </div>
        <div class="underline">
          <van-field
            class="password"
            v-model="code"
            maxlength="6"
            name="密码"
            placeholder="请输入验证码"
            :error-message="error.codemsg"
          >
            <template slot="left-icon">
              <div class="login_photo">
                <img src="../../assets/h5_login/验证码 .png" alt="" />
              </div>
              <!-- <van-icon name="success" /> -->
            </template>
            <template slot="button">
              <div class="yzm_text" @click="getCode()">
                <i>
                  {{ neirong }}
                </i>
              </div>
            </template>
          </van-field>
        </div>
      </van-cell-group>
    </div>
    <!-- 注册按钮 -->
    <div class="btn">
      <van-button class="login" round block color="#198BFE" @click="login()">
        注册
      </van-button>
    </div>
    <!-- 用户协议 -->
    <div class="agreement">
      <div class="gx_img">
        <img src="../../assets/h5_login/勾选.png" alt="" />
      </div>
      <div class="wenzi">
        <p>
          登录即表示您已阅读并同意我们的<a href="#">《用户服务协议》</a> 和<a
            href="#"
            >《隐私政策》</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getcode, Login } from "@/api/login.js";

export default {
  name: "Share",
  data() {
    return {
      neirong: "获取验证码",
      recommendUserId: "",
      mobile: "",
      code: "",
      show: true,
      count: "",
      timer: null,
      error: {
        mobilemsg: "",
        codemsg: ""
      },
      apiUrl: ""
    };
  },
  created() {
    this.apiUrl = this.getUrlParam("apiUrl");
    this.recommendUserId = this.getUrlParam("id");
  },
  methods: {
    async getCode() {
      if (this.mobile == null || this.mobile == "") {
        this.$toast("手机号码不能为空");
        return;
      }
      //准备变量记录时间
      let sec = 60;
      this.neirong = "还有60秒";

      let timerID = setInterval(() => {
        // if (sec == 59) {
        //   this.form.code = "246810";
        // }
        sec--;
        this.neirong = "还有" + sec + "秒";

        if (sec == 0) {
          //停止计时器
          clearInterval(timerID);
          //文字变回获取验证码
          this.neirong = "获取验证码";
        }
      }, 1000);
      let res = await getcode(this.apiUrl, this.mobile);
      this.code = res.data.data;

    },
    getcode(mobile) {
      return axios({
        url: `http://192.168.10.65:2020/user/${mobile}/send`,
        methods: "GET"
      });
    },
    login() {
      this.check();

      var loginData = {
        code: this.code,
        mobile: this.mobile,
        recommendUserId: this.recommendUserId
      };

      Login(this.apiUrl, loginData).then(res => {
        var resCode = res.code;
        if ("999999" == resCode) {
          this.$toast(res.errMsg);
          return;
        }
        this.$router.push({
          path: `download`
        });
      });
    },
    getUrlParam(name) {
      var context = null;
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配

      if (r != null) context = r[2];
      reg = null;
      r = null;

      return context;
    },
    check() {
      if (
        this.mobile == "" ||
        this.mobile == null ||
        this.mobile.length != 11
      ) {
        this.$toast("手机号码格式有误或者为空");
        return;
      }
      if (this.code.trim().length !== 6) {
        this.$toast("验证码只能为六位数字并且不能为空");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.share {
  height: 667px;
  background-color: #ffffff;
}

.login_photo {
  height: 100%;
  img {
    position: relative;
    top: 50%;
    margin-top: -10px;
  }
}
.login_message {
  // height: 136px;
  padding-left: 27px;
  padding-right: 28px;
  margin-top: 50px;
  .underline {
    border-bottom: 1px solid #f7f7f7;
    border-top: 1px solid #f7f7f7;
  }
  .van-cell {
    // line-height: 68px;
    line-height: 56px;
    padding: 0;
  }

  /deep/.van-field__left-icon {
    margin-right: 10px;
  }
}

.btn {
  margin-top: 43px;
  padding: 0 27.5px;
  height: 40px;
  margin-bottom: 16px;
  // border-radius: 20px;
  // overflow: hidden;
  span.van-button__text {
    font-size: 16px;
  }
}
.agreement {
  height: 28.5px;
  // padding: 0 29px 0 29px;
  padding: 0 26px 0 30px;
  font-size: 13px;
  .gx_img {
    width: 14px;
    height: 14px;
    float: left;
    img {
      margin-top: 3px;
    }
  }
  .wenzi {
    float: right;
    // width: 292.5px;
    width: 300px;

    a {
      color: #258efa;
    }
  }
}

.yzm_text {
  i {
    font-size: 14px;
    color: #198bfe;
  }

}
</style>
