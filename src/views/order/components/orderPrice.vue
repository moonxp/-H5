<template>
    <div class="orderPrice">
        <ul class="orderClass">
            <li class="fll">
                <img :src="this.form.indexImg" alt="">
            </li>
            <li class="fll1">
                <p style="color: #000c17">{{this.form.name}}</p>
            </li>
        </ul>
        <div class="ofl">
            <p class="allPrice">总价：¥{{parseFloat(this.form.money / 100.0).toFixed(2)}}</p>
        </div>
    </div>
</template>

<script>
    import OSS from 'ali-oss'

    export default {
        name: "orderPrice",
        props: {
            form: Object
        },
        data() {
            return {
                // form: {}
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
            
            }
        }
    };
</script>

<style lang="less" scoped="scoped">
    .ofl {
        overflow: hidden;
    }

    .orderPrice {
        border-top: 1px solid #ccc;
        padding: 15px;
        background-color: #fff;
        margin-bottom: 15px;

        .orderClass {
            width: 100%;
            overflow: hidden;
            position: relative;
            margin-bottom: 30px;

            .fll {
                float: left;
                display: inline;
                width: 40%;
            }

            .fll1 {
                float: left;
                display: inline;
                width: 55%;
            }


            > li:first-child {
                width: 110px;
                height: 74px;
                // background: url("../image/banner@2x.png") no-repeat;
                // background-size: 100%;
                margin-right: 15px;
            }

            > li:last-child {
                > p:first-child {
                    font-size: 15px;
                    color: #333;
                    font-weight: 700;
                    margin-bottom: 10px;
                }

                > p:last-child {
                    color: #999;
                }
            }

            .orderLine {
                margin: 0 9.75px;
            }

            .price {
                position: absolute;
                bottom: 0;
                right: 0;
                color: #999;
                font-size: 15px;
            }
        }

        .discount {
            float: right;
            font-size: 14px;
            margin-bottom: 30px;

            span {
                color: #fb6436;
            }
        }

        .allPrice {
            float: right;
            font-size: 14px;
        }
    }
</style>
