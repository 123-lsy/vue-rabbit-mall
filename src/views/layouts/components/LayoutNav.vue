<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router'; 

const userStore = useUserStore()
const router = useRouter()
const logout = () => {
  //清楚user的数据
  userStore.clearUserInfo();
  //跳转到登录页
  router.push('/login')
}

</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.token">
          <li><a href="javascript:;"> {{ userStore.userInfo.account }}</a></li>
          <el-popconfirm title="确认退出登录吗？" @confirm="logout" confirm-button-text="确认" cancel-button-text="取消">
            <template #reference>
              <li><a href="javascript:;" > 退出登录</a></li>
            </template>
          </el-popconfirm>

          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')"> 请先登录</a></li>
          <li><a href="javascript:;"> 帮助中心</a></li>
          <li><a href="javascript:;"> 关于我们</a></li>
        </template>

      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  
  

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    height: 53px;
    align-items: center;


    li {
      display: inline;

      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
           }
      }
      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
    li a:hover {
      color: $xtxColor;
    }
  }
}
</style>