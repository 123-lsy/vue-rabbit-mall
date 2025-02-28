<script setup>
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
console.log(y.value)


</script>

<template>
  <div class="app-header-sticky" :class="{ show: y>78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/">居家</RouterLink>
        </li>
        <li>
          <RouterLink to="/">美食</RouterLink>
        </li>
        <li>
          <RouterLink to="/">服饰</RouterLink>
        </li>
        <li>
          <RouterLink to="/">母婴</RouterLink>
        </li>
        <li>
          <RouterLink to="/">个护</RouterLink>
        </li>
        <li>
          <RouterLink to="/">严选</RouterLink>
        </li>
        <li>
          <RouterLink to="/">数码</RouterLink>
        </li>
        <li>
          <RouterLink to="/">运动</RouterLink>
        </li>
        <li>
          <RouterLink to="/">杂项</RouterLink>
        </li>
      </ul>

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.app-header-sticky {
width: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  height: 80px;
  border-bottom: 1px solid #efefef;
  z-index: 999;

  //状态一
  transform: translateY(-100%);
  opacity: 0;

  &.show{
    transform: none;
    transition: all 0.3 linear;
    opacity: 1;
  }
  
}
.container {
  display: flex;
  align-items: center;
  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
    margin-right: 40px;
  }
  .right {
    a {
      padding-left: 40px;

      &:first-child {
        border-left: 2px solid #999;
      }
      &:hover {
        color: $xtxColor;
      }
    }
  }
}
.app-header-nav {
  display: flex;
  justify-content: flex-start;
  li {
    margin-right: 40px;

    a:hover {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;

    }
    .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
  }
}
</style>