<template>
  <div class="shareClass">
    <ul>
      <li @click="goToShare">
        <span class="icon iconfont iconqianbao"></span>
      </li>
      <li>
        发现免费好课
        <br />点击分享
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shareClass",
  methods: {
    goToShare() {
      this.$router.replace("/qrcanvas");
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.shareClass {
  position: fixed;
  width: 128px;
  height: 36.8px;
  background: orange;
  right: 0;
  top: 96px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  > ul {
  }

  > ul > li:first-child > span {
    font-size: 24px;
    margin-right: 9px;
    margin-left: 12px;
  }

  > ul > li {
    float: left;
    vertical-align: middle;
    color: #fff;
    font-size: 10px;
  }

  > ul > li:last-child {
    // line-height: 1.3rem;
  }
}
</style>
