<template>
    <div class="videoApp">
        <top-download></top-download>
        <video-top :videoImg="form.indexImg"></video-top>
        <video-tittle :form="form"></video-tittle>
        <video-read :form="form"></video-read>
        <go-pay :form="form"></go-pay>
    </div>
</template>

<script>
    import topDownload from "../components/topdownload.vue";
    import videoTop from "./components/videoTop.vue";
    import videoTittle from "./components/classTittle.vue";
    import goPay from "./components/goPay.vue";
    import videoRead from "./components/videoRead.vue";
    import {getLiveDetail} from '@/api/live.js';
    import OSS from "ali-oss";

    export default {
        name: "classVideo",
        components: {
            videoTop,
            videoTittle,
            videoRead,
            goPay,
            topDownload
        },
        data() {
            return {
                form: {
                    indexImg: ''
                }
            };
        },
        created() {
            localStorage.clear()
            this.getData();
        },
        methods: {
            getData() {
                var liveId = this.getUrlParam('courseId');
                var userId = this.getUrlParam('userId');
                var sp = this.getUrlParam('sp');
                getLiveDetail(sp, liveId).then(res => {
                    if (res.code == 0) {
                        if (res.data.dataSet !== null) {
                            this.form = res.data
                            this.form.userId = userId
                            this.form.sp = sp
                            this.form.videoImg = this.form.indexImg

                            this.form.shareType = 'live'
                            var price = this.form.discount
                            var money = this.form.money
                            this.form.money = price > 0 ? price : money
                            this.form.description = this.form.description.replace(/\n/gm, "<br/>");
                        } else {
                            return;
                        }
                    }
                })
            },
            getUrlParam(name) {
                var context = null;
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
                if (r != null)
                    context = r[2];
                reg = null;
                r = null;
                return context;
            }
        }
    };
</script>

<style lang="less" scoped="scoped">
    // .videoApp {
    // }
</style>
