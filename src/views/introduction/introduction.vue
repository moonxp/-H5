<template>
  <div class="introduction-app">
    <!-- <top-download></top-download> -->
    <introduction-top :urlImg="form.indexImg"></introduction-top>
    <introduction-skill
      :name="form.name"
      :playCount="form.playCount"
    ></introduction-skill>
    <introduce :detail="form.detail"></introduce>
    <!-- <teacher-introduce :form="form"></teacher-introduce> -->
    <!--<introduce-read :form="form"></introduce-read>-->
    <introduce-submit :form="form"></introduce-submit>
    <!-- <share-class></share-class> -->
  </div>
</template>

<script>
// 公共top去App组件
// import topDownload from "../components/topdownload.vue";

import introductionTop from "./components/introductionTop.vue";
import introductionSkill from "./components/introductionSkill.vue";
import introduce from "./components/introduce.vue";
// import teacherIntroduce from "./components/teacherIntroduce.vue";
import introduceRead from "./components/introduceRead.vue";
// import shareClass from "./components/shareClass.vue";
import introduceSubmit from "./components/introduceSubmit.vue";

// API
import { getUserInfo } from "@/api/introduction.js";
// ali-oss
import OSS from "ali-oss";

export default {
  name: "introduction",
  components: {
    introductionTop,
    introductionSkill,
    introduce,
    // teacherIntroduce,
    introduceRead,
    // shareClass,
    introduceSubmit,
    // topDownload
  },
  data() {
    return {
      form: {
        newIndexImg: ""
      }
    };
  },
  created() {
    localStorage.clear();
    this.getData();
  },
  mounted() {
    // this.getCode()
    // getToken().then(res => {
    // 	console.log(res)
    // })
  },
  methods: {
    getData() {
      var courseid = this.getUrlParam("courseid");
      var userid = this.getUrlParam("userId");
      var sp = this.getUrlParam("sp");
      getUserInfo(sp, courseid).then(res => {
        if (res.code == 0) {
          if (res.data.dataSet !== null) {
            this.form = res.data;
            this.form.userId = userid;
            this.form.sp = sp;
            this.form.newIndexImg = this.form.indexImg;

            this.form.shareType = "course";
            var price = this.form.discount;
            var money = this.form.money;
            this.form.money = price > 0 ? price : money;
          } else {
            return;
          }
        }
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
    }
    /*
                1、H5页面是运行在微信浏览器的
                2、需要与公众号关联（即需要openid）
                3、判断需求是否需要弹窗告知用户授权操作
                4、获取地址栏参数判断是否有'code',有的话直接传给后台换取openid,没有就跳转微信提供的获取code的链接
                5、获取到的openid做本地存储，判断没有openid进行获取openid操作
                6、这边的操作是不需要弹出授权框，且code不能重复使用，所以做了关注二维码弹窗且不能关闭弹窗操作
            */
    // getCode() {
    // 	if (sessionStorage.getItem("openid") && sessionStorage.getItem("openid") != "undefined") {
    // 		return false;
    // 	}
    // 	var code = this.getUrlParam('code') // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
    // 	var local = window.location.href;
    // 	var APPID = 'wx04b6648b08d15fc2';
    // 	if (code == null || code === '') {
    // 		window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=#wechat_redirect'
    // 	} else {
    // 		this.getOpenId(code) //把code传给后台获取用户信息
    // 	}
    // },
    // getOpenId(code) {
    // 	xxx(code).then(res => {
    // 		if (res.status == -1) {
    // 			// 提示没有关注公众号 没有关注公众号跳转到关注公众号页面
    // 			alert('您还未关注公众号喔');
    // 			//二维码弹窗
    // 			// $('.openPopup').click();
    // 			return;
    // 		} else {
    // 			// 本地存储这个openid，并刷新页面
    // 			sessionStorage.setItem("openid", res.data.openid);
    // 			location.reload();
    // 		}
    // 	})
    // },
    // getUrlParam(name) {
    // 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // 	var r = window.location.search.substr(1).match(reg);
    // 	if (r != null) return unescape(r[2]);
    // 	return null;
    // }
  }
};
</script>

<style lang="less">
.introduction-app {
  position: relative;
}
</style>
