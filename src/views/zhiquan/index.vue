<template>
  <div class="body">
    <top-download></top-download>
    <!-- <div class="head">
      <img src="../../assets/ICON.png" alt="" />
      <div class="text">
        <div class="title">时间方舟</div>
        <div class="slogan">相信时间的价值</div>
      </div>
      <van-button class="button" type="info" @click="download()"
        >下载APP</van-button
      >
    </div> -->
    <div class="content">
      <van-cell>
        <template slot="title">
          <div class="commbox">
            <div class="img">
              <img :src="this.activity.userAvatar" />
            </div>
            <div class="msg">
              <div class="name">
                {{ this.activity.userName }}
              </div>
              <div class="time">
                {{ this.activity.createTime | changeTime }}
              </div>
            </div>
          </div>
          <div>
            {{ this.activity.activityName }}
          </div>
          <div
            class="picture"
            v-for="(item, index) in this.activity.files"
            :key="index"
          >
            <!-- <img :src=`http://sjfz.oss.timeonark.com${item}` alt="" /> -->
            <img :src="item" alt="" />
          </div>
          <!-- 底部icon和button -->
          <div>
            <div class="list">
              <div class="bottom_icon">
                <van-icon size="20" name="like" color="#ec6231"/>
                <span>{{ activity.likeCount }}</span>
              </div>
              <div class="bottom_icon">
                <van-icon size="20" name="chat-o" />
                <div class="num">
                  <span>{{ activity.commentCount }}</span>
                </div>
              </div>
              <div class="bottom_icon">
                <van-icon size="24" class="iconfont" class-prefix='icon' name="Icon-daochu">
                </van-icon>
                <span>{{ activity.shareCount }}</span>
              </div>
              <div class="bottom_icon">
                <van-icon size="20" name="star" color="#ec6231" />
                <span>{{ activity.collectCount }}</span>
              </div>
            </div>
            <div class="text" @click="download">
              更多精彩内容，请在app内查看
            </div>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getlist } from "../../api/login";
import topDownload from "../components/topdownload";

export default {
  components: {
    topDownload
  },
  data() {
    return {
      activityId: 1,
      activity: {},
      imgurllist: [],
      httpUrl: ""
    };
  },
  methods: {
    download() {
      this.$router.push({
        path: `/download`
      });
    },
    getUrlParam(name) {
      var context = null;
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配

      if (r != null) context = r[2];
      reg = null;
      r = null;

      return context;
    }
  },
  async created() {
    this.httpUrl = this.getUrlParam("apiUrl");
    this.activityId = this.getUrlParam("id");
    let res = await getlist(this.httpUrl, this.activityId).then(res => {
      if (res.code == "999999") {
        this.$toast("获取朋友圈信息失败，请稍后重试");
        return;
      }

      this.activity = res.data;
    });
  }
};

// };
</script>

<style lang="less" scoped>
.head {
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-left: -48px;
  }

  .slogan {
    margin-left: -48px;
  }

  font-size: 4.8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  background: #ffffff;

  > img {
    width: 48px;
  }
}

.content {
  margin-top: 36px;

  /deep/.van-cell {
    padding: 0;
  }
}
.commbox {
  display: flex;

  .img {
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}

.list {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;

  .bottom_icon {
    position: relative;
    width: 45px;
    .num {
      position: absolute;
      right: 0;
      top: -4px;
    }
  }

  div {
    display: inline-block;
  }
}

.picture {
  img {
    width: 100%;
    height: 320px;
  }

  margin-top: 1.6px;
  margin-bottom: 1.6px;
}

.text {
  margin-top: 10px;
  text-align: center;
  background-color:#dfefff;
  height: 36px;
  width: 100%;
  // padding: 0 30px;
  // border-radius: 20px;
  line-height: 40px;
  font-size: 13px;
  color: #4496f6;
}
</style>
