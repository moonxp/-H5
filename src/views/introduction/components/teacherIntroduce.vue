<template>
  <div class="teacher-introduce">
    <p class="author-text">
      <b>讲师介绍</b>
    </p>
    <div class="teacher">
      <div>
        <img class="bor" :src="form.newIndexImg" alt />
      </div>
      <ul>
        <li class="teacher-text-blod">{{form.teachName}}</li>
        <li class="teacher-text-blod">(Berkeley超受欢迎算法讲师)</li>
        <li>加州伯克利大学博士、助力教授</li>
      </ul>
    </div>
    <div class="introduce">
      <p>8年的从业经验，厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害厉害</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "teacherIntroduce",
  components: {},
  props:{
	  form:Object
  }
};
</script>

<style lang="less" scoped="scoped">
.teacher-introduce {
  height: 20rem;
  padding: 30px 15px 20px 15px;
  background: #fff;
  margin-bottom: 15px;

  .author-text {
    font-size: 17px;
    margin-bottom: 20px;
  }

  .teacher {
    height: 74px;
    margin-bottom: 20px;

    > div {
      float: left;
      margin-right: 15px;

      > img {
        width: 70px;
        height: 70px;
      }
    }

    > ul {
      float: left;

      .teacher-text-blod {
        font-size: 15px;
        margin-bottom: 4px;
        font-weight: bold;
      }

      > li:last-child {
        font-size: 15px;
      }
    }
  }

  .introduce {
    float: left;

    > p {
      font-size: 15px;
      color: #666;
    }

    margin-bottom: 20px;
  }
}
.bor{
	border-radius: 50px;
}
</style>
