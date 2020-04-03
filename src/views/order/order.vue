<template>
    <div class="orderApp">
        <order-nav :xinxi="form.shareType"></order-nav>
        <order-price :form="form"></order-price>
        <!--<order-discount></order-discount>-->
        <order-iphone :form="form"></order-iphone>
        <order-txt></order-txt>
    </div>
</template>

<script>
    import orderNav from "./components/orderNav.vue";
    import orderPrice from "./components/orderPrice.vue";
    import orderDiscount from './components/orderDiscount.vue'
    import orderIphone from "./components/orderIphone.vue";
    import orderTxt from "./components/orderTxt.vue";
    import {mapMutations, mapGetters} from 'vuex';
    import {coursePay, Cancelpay, getAppToken,getSignature} from '@/api/order.js'
    import {LivePay, CancelLivePay} from "@/api/live";
    import wx from 'weixin-jsapi'
    import routes from "../../router";

    export default {
        name: "order",
        /*props:{
            indexImg : String,
            id: Number,
            name: String,
            money: Number
        },*/
        computed: {
            ...mapGetters(['getUserMsg'])
        },
        components: {
            orderNav,
            orderPrice,
            orderDiscount,
            orderIphone,
            orderTxt
        },
        data() {
            return {
                form: {},
                mobile: ''
            }
        },
        created() {

            if (localStorage.getItem("wzpayForm") !== '' && localStorage.getItem("wzpayForm") !== null) {
                this.form = JSON.parse(localStorage.getItem("wzpayForm"))
                /*alert(this.form.money)
                this.mobile = this.form.mobile*/
            } else {
                this.getData()
            }

            var code = this.getCode();
            if (code != null && code != '') {
                this.onBridgeReady(code); //把code传给后台获取用户信息
            }
        },
        methods: {
            ...mapMutations(['updateUserMsg']),
            getData() {
                this.form.indexImg = this.$route.query.indexImg;
                this.form.id = this.$route.query.id
                this.form.name = this.$route.query.name
                this.form.sp = this.$route.query.sp
                this.form.recommendUserId = this.$route.query.userId
                this.form.money = this.$route.query.money
                this.form.shareType = this.$route.query.shareType
                this.form.type = this.$route.query.type
            },
            wxPayInvoke(self, payRes) {
                var url = window.location.href;
                //获取js签名
                getSignature(self.form.sp, url).then(res => {
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wx04b6648b08d15fc2', // 必填，公众号的唯一标识
                        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                        signature: res.data.signature,// 必填，签名
                        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
                    });
                    //发起微信支付
                    wx.ready(function () {
                        wx.chooseWXPay({
                            appId: payRes.data.appid,
                            timestamp: payRes.data.timestamp,  // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: payRes.data.noncestr, // 支付签名随机串，不长于 32
                            package: "prepay_id=" + payRes.data.prepayid, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                            signType: "HMAC-SHA256", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: payRes.data.sign, // 支付签名
                            success: function (res) {
                                //跳转到支付成功页面有这个页面
                                routes.push({
                                    path: "download",
                                })
                            },
                            cancel: function (res) {//提示引用的是mint-UI里toast
                                Cancelpay(self.form.sp, self.form.id).then(res => {
                                    alert('已取消支付');
                                })

                            },
                            fail: function (res) {
                                Cancelpay(self.form.sp, self.form.id).then(res => {
                                    alert('支付失败，请重试');
                                })
                            }
                        })
                    })
                })
            },
            coursePay(_this, openid) {
                var payData = {
                    "amount": _this.form.money,
                    "courseId": _this.form.id,
                    "tradeType": "JSAPI",
                    "openid": openid
                }
                coursePay(_this.form.sp, payData).then(payRes => {
                    if ("999999" == payRes.code) {
                        alert(payRes.errMsg)
                        return
                    } else {
                        _this.wxPayInvoke(_this, payRes)
                    }
                }).catch(err => {
                    alert(err)
                    Cancelpay(_this.form.sp, _this.form.id)
                })
            },
            livePay(_this, openid) {
                var payData = {
                    "amount": _this.form.money,
                    "courseId": _this.form.id,
                    "tradeType": "JSAPI",
                    "openid": openid
                }
                LivePay(_this.form.sp, payData).then(payRes => {
                    if ("999999" == payRes.code) {
                        alert(payRes.errMsg)
                        return
                    } else {
                        _this.wxPayInvoke(_this, payRes)
                    }
                }).catch(err => {
                    alert(err)
                    CancelLivePay(_this.form.sp, _this.form.id)
                })
            },
            onBridgeReady(code) {
                var _this = this
                //获取token
                getAppToken(_this.form.sp, code).then(res => {
                    if ("999999" == res.code) {
                        alert(res.errMsg)
                        return
                    }
                    var openid = res.data;
                    var payType = _this.form.shareType //live 直播 course 课程
                    if (payType == "live") {
                        this.livePay(_this, openid)
                    } else if (payType == "course") {
                        this.coursePay(_this, openid)
                    } else {
                        alert("支付类型错误")
                        return;
                    }
                }).then(res => {
                    var code = res.code
                    if ("999999" == res.code) {
                        alert(res.errMsg);
                    }
                })
            },
            getCode() {
                var context = '';
                var name = 'code';
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
                if (r != null)
                    context = r[2];

                return context;
            }
        }
    };
</script>

<style lang="less">
    .orderApp {
        position: relative;
        height: 100vh;
    }
</style>
