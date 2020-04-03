<template>
  <div class="videoRead">
    <p class="mb15">
      <b>课程介绍</b>
    </p>
    <div class="mb15" v-html="form.description"></div>
    <p class="pay-tips">
      <b>购买须知</b>
    </p>
    <br />
    <p>
      1.本产品为付费课程，购买成功后，即可永久回听回放；
    </p>
    <p>
      2.本产品为虚拟内容服务，一经购买成功，概不退款，请谅解；
    </p>
    <p>
      3.版权归原作者所有，严禁翻录和在任何第三方平台传播，违者将追究法律责任。
    </p>
    <br />
    <!--<div class="videoBtn">
            <van-button plain type="primary">查看完整内容</van-button>
        </div>-->
  </div>
</template>

<script>
// import huanghang from '../huanhang'
import { Button } from "vant";

export default {
  name: "videoRead",
  props: {
    form: Object
  },
  components: {
    [Button.name]: Button
  },

};
</script>

<style lang="less" scoped="scoped">
.videoRead {
  background-color: #fff;
  padding: 20px 15px 40px 15px;

  > p:first-child {
    font-size: 17px;
    color: #333;
  }

  > p {
    font-size: 14px;
  }

  .mb15 {
    margin-bottom: 15px;
    // word-wrap:break-word;
    word-break: break-all;
  }

  .mb30 {
    margin-bottom: 30px !important;
  }

  .videoBtn {
    text-align: center;
  }

  .pay-tips {
    font-size: 17px;
    color: #333;
  }
}
</style>
