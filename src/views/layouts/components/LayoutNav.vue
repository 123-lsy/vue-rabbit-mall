<script setup>

</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="true">
          <li><a href="javascript:;"> 周周</a></li>
          <el-popconfirm title="确认退出登录吗？" confirm-button-text="确认" cancel-button-text="取消">
            <template #reference>
              <li><a href="javascript:;"> 退出登录</a></li>
            </template>
          </el-popconfirm>

          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;"> 请先登录</a></li>
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
    /* 当鼠标悬停时把链接颜色更改为 #111（黑色） */
    li a:hover {
      background-color: #111;
    }
  }
}
</style>