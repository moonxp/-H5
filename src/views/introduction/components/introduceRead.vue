<template>
  <div class="introduce-read">
    <p class="read-head">
      <b>订阅须知</b>
    </p>
    <p>1.本课程为免费课程,即可永久阅读本栏目出品的所有的内容；</p>
    <p>2.“算法与数据结构知识”为“图文 + 音频”内容课程</p>
    <p class="read-mb">3.本课程为虚拟内容服务,一经购买成功后概不退款,请您谅解</p>
    
  </div>
</template>

<script>
export default {
  name: "introduceRead",
  props:{
	  form:Object
  }

};
</script>

<style lang="less" scoped="scoped">
.introduce-read {
  background-color: #fff;
  padding: 30px 30px 40px 30px;

  > .read-head {
    font-size: 17px;
    color: #333;
  }

  > p {
    margin-bottom: 15px;
    font-size: 14px;
  }

  .read-mb {
    margin-bottom: 72px;
  }

  .buyBtn {
    font-size: 10px;
  }
}
</style>
