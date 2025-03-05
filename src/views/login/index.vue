<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
const formData = ref({
  account: "heima282",
  password: "hm#qd@23!",
  agree: true,
});

//定义规则
const rules = {
  account: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    { min: 6, max: 10, message: "密码应该是6-10位", trigger: "blur" },
  ],
  agree: [
    {
      validator: (rule, val, callback) => {
        return val ? callback() : callback(new Error("请勾选协议"));
      },
    },
  ],
};

//点击登录按钮的时候再做整体校验
const formDom = ref(null);
const userStore = useUserStore();
const router = useRouter();
const doLogin = () => {
  formDom.value.validate((valid) => {
    if (valid) {
      //验证通过，login登录
      userStore.login(formData.value);
      router.replace({ path: "/" });
    }
  });
};
</script>

<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form
              label-position="right"
              label-width="60px"
              status-icon
              :model="formData"
              :rules="rules"
              ref="formDom"
            >
              <el-form-item label="账户" prop="account">
                <el-input v-model="formData.account" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="formData.password" />
              </el-form-item>
              <el-form-item label-width="22px" prop="agree">
                <el-checkbox size="large" v-model="formData.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin"
                >点击登录</el-button
              >
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.login-header {
  background-color: #fff;
}
.m-top-20 {
  display: flex;
  justify-content: space-between;
  .logo {
    width: 200px;
    a {
      display: block;
      width: 100%;
      height: 132px;
      text-indent: -999px;
      background: url("../../assets/images/logo.png") no-repeat center / contain;
    }
  }
  .entry {
    margin: auto 0;
    i {
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}
.login-section {
  height: 488px;
  background: url("@/assets/images/login-bg.png") no-repeat center / cover;
  position: relative;
  .wrapper {
    background-color: #fff;
    width: 380px;
    height: 293px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      text-align: center;
      font-weight: normal;
      padding: 15px 0;
      border-bottom: 1px solid #efefef;
      a {
        font-size: 18px;
        font-weight: normal;
      }
    }
    .account-box {
      .form {
        padding: 20px 20px;

        &-item {
          margin-bottom: 28px;

          .input {
            position: relative;
            height: 36px;

            > i {
              width: 34px;
              height: 34px;
              background: #cfcdcd;
              color: #fff;
              position: absolute;
              left: 1px;
              top: 1px;
              text-align: center;
              line-height: 34px;
              font-size: 18px;
            }

            input {
              padding-left: 44px;
              border: 1px solid #cfcdcd;
              height: 36px;
              line-height: 36px;
              width: 100%;

              &.error {
                border-color: $priceColor;
              }

              &.active,
              &:focus {
                border-color: $xtxColor;
              }
            }

            .code {
              position: absolute;
              right: 1px;
              top: 1px;
              text-align: center;
              line-height: 34px;
              font-size: 14px;
              background: #f5f5f5;
              color: #666;
              width: 90px;
              height: 34px;
              cursor: pointer;
            }
          }

          > .error {
            position: absolute;
            font-size: 12px;
            line-height: 28px;
            color: $priceColor;

            i {
              font-size: 14px;
              margin-right: 2px;
            }
          }
        }

        .agree {
          a {
            color: #069;
          }
        }

        .btn {
          display: block;
          width: 100%;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          background: $xtxColor;

          &.disabled {
            background: #cfcdcd;
          }
        }
      }

      .action {
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .url {
          a {
            color: #999;
            margin-left: 10px;
          }
        }
      }
      .subBtn {
        background: $xtxColor;
        width: 100%;
        color: #fff;
      }
    }
  }
}
.login-footer {
  background-color: #fff;
  padding-top: 40px;
  color: #999;
  p {
    text-align: center;
    &:nth-child(2) {
      padding-top: 20px;
    }

    a {
      padding: 0 10px;
      color: #999;
      ~ a {
        border-left: 1px solid #ccc;
      }
    }
  }
}
</style>