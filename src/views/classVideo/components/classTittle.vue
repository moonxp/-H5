<template>
  <div class="classTittle">
    <p class="gTittle">
      <b>{{ form.name }}</b>
    </p>
    <div class="left">
      <span style="color: #50d998">开播时间 </span>
      <span>{{ this.form.startDate }} {{ this.form.startTime }}</span>
    </div>
    <div class="i_right">
      <span class="yugao">预告 </span>
      <span class="baoming">{{ this.form.studentCount }}已报名</span>
    </div>
    <!--<p class="gLearn">
          <span>{{form.playCount}}次学习</span>
          <span>
            <i class="icon iconfont iconzhongbo-m"></i> 支持回听
          </span>
        </p>-->
    <!--<van-row type="flex" justify="space-around">
          <van-col span="1">
            <span class="icon iconfont iconchakantiezifenxiang"></span>
          </van-col>
          <van-col span="1">
            <span class="icon iconfont iconshoucang"></span>
          </van-col>
          <van-col span="1">
            <span class="icon iconfont iconhuancun"></span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="2">分 享</van-col>
          <van-col span="2">收 藏</van-col>
          <van-col span="2">缓 存</van-col>
        </van-row>-->
  </div>
</template>

<script>
// import {Col, Row} from "vant";

export default {
  name: "classTittle",
  components: {
    // [Col.name]: Col,
    // [Row.name]: Row
  },
  props: {
    form: Object
  }
};
</script>

<style lang="less" scoped="scoped">
.classTittle {
  padding: 20px 15px 15px 15px;
  background-color: #fff;
  margin-bottom: 15px;
  div {
    display: inline-block;
  }

  .left {
    float: left;
    font-size: 13px;
  }

  .gTittle {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .gLearn {
    margin-bottom: 25px;

    > span:first-child {
      margin-right: 40px;
    }
  }

  .i_right {
    float: right;
    font-size: 13px;
  }

  .yugao {
    color: #06c25f;
  }

  .baoming {
    color: #a5abb0;
  }
}
</style>
