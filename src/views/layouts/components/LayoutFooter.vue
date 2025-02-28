<script setup>

 

</script>

<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="app-footer-top">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>

        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000 <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 其他 -->
    <div class="app-footer-middle">
      <div class="container">
        <a href="javascript:;">
          <i class="iconfont icon-footer01"></i>
          <span>价格亲民</span>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-footer02"></i>
          <span>物流快捷</span>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-footer03"></i>
          <span>品质新鲜</span>
        </a>
      </div>
    </div>
    <!-- 版权信息 -->
    <div class="app-footer-bottom">
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">配送与验收</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </p>
      <p>CopyRight © 小兔鲜儿</p>
    </div>
  </footer>
</template>



<style scoped lang="scss">
.app-footer-top {
  background-color: #fff;
  margin-top: 10px;
  overflow: hidden;
  .container {
    display: flex;
    padding: 60px 0 40px 25px;

    dl {
      height: 190px;
      color: #999;
      text-align: center;
      padding: 0 70px;
      border-right: 1px solid #efefef;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
        border: none;
      }

      dt {
        font-size: 18px;
        line-height: 1;
      }
      dd {
        width: 92px;
        height: 92px;
        float: left;
        border: 1px solid #efefef;
        padding-top: 10px;
        margin: 36px 12px 0 0;
        .iconfont {
          font-size: 36px;
          display: block;
          color: #666;

          &:hover {
            color: $xtxColor;
          }
        }
      }

      .download {
        border: none;
        span {
          display: block;
        }
        a {
          display: block;
          color: #fff;
          margin-top: 5px;
          height: 35px;
          line-height: 35px;
          background-color: $xtxColor;
          border-radius: 2px;
        }
      }
      .hotline {
        border: none;
        padding-top: 20px;
        font-size: 22px;
        color: #666;
        float: left;
        width: auto;
        height: auto;

        small {
          display: block;
          font-size: 15px;
          color: #999;
        }
      }
    }
  }
}

.app-footer-middle {
  background-color: #333;
  .container {
    display: flex;
    height: 178px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #434343;
    flex: s;
    a {
      color: #fff;
      display: flex;
      align-items: center;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }
      span {
        font-size: 28px;
        vertical-align: middle;
      }
    }
  }
}

.app-footer-bottom {
  background-color: #333;
  color: #999;
  text-align: center;
  overflow: hidden;
  padding:30px 0;


  

  p {
    margin: 10px 0;

    a {
      color: #999;
      padding: 0 10px;
      border-right: 1px solid #999;
      &:last-child{
        border: none;
      }
    }

  }
}
</style>