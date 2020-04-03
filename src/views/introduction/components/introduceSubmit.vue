<template>
  <div class="introduceSubmit">
    <div class="btnr">
      <van-button
        round
        block
        type="info"
        native-type="submit"
        color="#fb6436"
        @click="goToPay"
      >
        <div class="buyBtn">
          <div class="bigTxt">
            <span>立即报名</span>
          </div>
          <div class="smallTxt">
            <span v-if="form.money == 0">免费</span>
            <span v-if="form.money > 0"
              >¥{{ parseFloat(form.money / 100.0).toFixed(2) }}</span
            >
          </div>
        </div>
      </van-button>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "introduceSubmit",
  components: {
    [Button.name]: Button
  },
  props: {
    form: Object
  },
  methods: {
    goToPay() {
      this.$router.replace({ path: "/order", query: this.form });
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.introduceSubmit {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 5px;
  padding: 5px 15px;


  div {
    display: inline-block;
  }
  .btnr {
    width: 100%;
    height: 40px;
  }

  .buyBtn {
    background-color: #fb6436;
    line-height: 20px;
    color: #ffffff;

    .bigTxt {
      font-size: 16px;
      margin-right: 8px;
    }
    .smallTxt {
      font-size: 12px;
    }
  }
}
</style>
