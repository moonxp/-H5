<template>
    <div class="body">
        <div v-if="showGuide" class="logo">
            <img  src="http://sjfz.oss.timeonark.com/course/guide.png" alt="">
        </div>
        <div v-if="showLogo" class="logo">
            <!--<img src="http://sjfz.oss.timeonark.com/course/background.png" alt="">-->
        </div>
        <div class="button">
            <van-button type="info" @click="download()">下载app</van-button>
            <!--<button @click="download()"></button>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'download',
        data() {
            return {
                showGuide: false,
                showLogo : true
            }
        },
        methods: {
            download() {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    this.showGuide = !this.showGuide
                    this.showLogo = !this.showLogo
                    //this.isAndroid()
                } else {
                    window.location.href = "http://org-oss.timeonark.com/APP/andriod/eduapp.apk"
                }
            }
        },
        mounted() {
            // this.$toast('欢迎你的加入\n请点击下载"时间方舟"APP,手机登陆应用');
        }
    }

</script>

<style lang="less" scoped>

    .body {
        width: 100%;
        height: 100vh;
        position: relative;

    }

    .logo {
        width: 100%;
        height: 100%;
        background: url('http://sjfz.oss.timeonark.com/course/background.png');
        resize: horizontal;

        img {
            width: 100%;
            height: 100%;
        }

        .title {
            font: 8px bold;
            margin-top: 12px;
            margin-bottom: 8px;
        }

        .text {
            font-size: 5.6px;
            margin-top: 0;
            margin-bottom: 20px;
        }

    }

    .button {
        // margin-top: -150px;
        position: absolute;
        // top: 50%;
        left: 50%;
        transform: translate(-50%, -250%);
        width: 100%;

        button {
            width: 80%;
            height: 45px;
            display: block;
            margin: auto;
            border-radius: 20px;
            border: none;
            color: #fff;
            background: #198bfe;
        }
    }
</style>