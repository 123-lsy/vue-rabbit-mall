<script setup>
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category';

const { y } = useScroll(window)

//适用 pinia 数据

const categoryStore = useCategoryStore()

</script>

<template>
  <div class="app-header-sticky" :class="{ show: y>78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
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