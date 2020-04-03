<template>
  <div class="orderNav">
    <span class="icon iconfont iconfanhui" @click="goBack"></span>
    <p class="orderTittle">
      <b>确认订单</b>
    </p>
  </div>
</template>

<script>
export default {
  name: "orderNav",
  props: ["xinxi"],
  methods: {
    goBack() {
      // this.$router.replace("/introduction");

      // alert(this.xinxi)
      if (this.xinxi === "live") {
        this.$router.push("/classVideo");
      } else {
        this.$router.push("/introduction");
      }

      // this.$router.back()
      // this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.orderNav {
  width: 100%;
  height: 40px;
  position: relative;
  background: #ffffff;

  .orderTittle {
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    color: #333;
  }

  .iconfanhui {
    position: absolute;
    font-size: 19px;
    margin: auto;
    bottom: 5.6px;
    left: 15px;
  }
}
</style>
