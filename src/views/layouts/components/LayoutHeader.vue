<script setup>
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore()
</script>


<template>
  <div class="head-container">
    <div class="container">
      <div class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </div>
      <div class="nav">
        <ul>
          <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink to="/">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.head-container {
  background: #fff;
}

.container {
  display: flex;
  align-items: center;
}

.logo {
  width: 200px;
  a {
    width: 100%;
    height: 132px;
    display: block;
    text-indent: -9999px;
    background: url("../../../assets/images/logo.png") no-repeat center 18px /
      contain;
  }
}
.nav {
  width: 820px;
  padding: 40px;

  ul {
    font-size: 16px;
    display: flex;
    li {
      margin-right: 40px;
      margin-right: 48px;
      a {
        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }

      }
      .active{
        color: $xtxColor;
        border-bottom:1px solid $xtxColor;
      }
    }
  }
}
.search{
    width: 170px;
    height: 32px;
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search{
      font-size: 18px;
      margin-right: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
</style>
