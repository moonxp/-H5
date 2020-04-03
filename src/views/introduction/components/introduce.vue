<template>
    <div class="introduce-app">
        <p class="class-introduce">
            <b>课程介绍</b>
        </p>
        <div id="contant">

        </div>
        <div class="pay-tips">
            <p class="class-introduce">
                <b>购买须知</b>
            </p>
            <p>
                1.本产品为付费课程，购买成功后，即可永久回听回放；
            </p>
			<p>
				2.本产品为虚拟内容服务，一经购买成功，概不退款，请谅解；
			</p>
			<p>
				3.版权归原作者所有，严禁翻录和在任何第三方平台传播，违者将追究法律责任。
			</p>
            <br>
        </div>
    </div>


</template>

<script>
    export default {
        name: "introduce",
        props: {
            detail: String
        },
        mounted() {

        },
        watch: {
            detail: function () {
                var _this = this
                _this.$nextTick(function () {
                    var divA = document.getElementById('contant')
                    divA.innerHTML = this.detail
                    // console.log(this.detail)
                })
            }
        }
    };
</script>

<style lang="less">
    .introduce-app {
        // height: 26rem;
        background: #fff;
        padding: 30px 15px;
        margin-bottom: 15px;

        .class-introduce {
            font-size: 17px;
            margin-bottom: 15px;
        }

        .intTxt {
            margin-bottom: 10px;
        }

        .d-purple {
            height: 16px;
            background: rgb(243, 241, 251);
            border-radius: 5px;
        }

        .pay-tips {
            background: rgba(255, 255, 255, 0.24);
            font-size: 13.6px;
            margin-bottom: 15px;
        }
    }
</style>
