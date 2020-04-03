<template>
  <div class="skill-app">
    <div class="skill">
      <h3>{{name}}</h3>
      <ul>
        <li>{{playCount}}次学习</li>
        <li>
          <span class="icon iconfont iconzhongbo-m"></span>
          <span class="ml4">支持回听</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "introductionSkill",
  props:{
	  name: String,
	  playCount: Number
  }
};
</script>

<style lang="less">
.skill-app {
  margin-bottom: 15px;
}

.skill {
  background-color: #fff;
  width: 100%;
  height: 86px;
  padding: 20px 0 0 15px;
  font-size: 13px;

  > h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  > ul {
    width: 100%;
    color: #999;

    li {
      float: left;
    }

    li:first-child {
      margin-right:40px;
    }
  }
}
</style>
