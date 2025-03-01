<script setup>
defineProps({
    title:{
        type: String,
        default: ''
    },
    subTitle:{
        type: String,
        default: ''
    }
})
</script>

<template>
  <div class="home_pannel">
    <div class="container">
      <!-- 标题 -->
      <h3>{{ title }} <small>{{ subTitle }}</small></h3>

      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
    h3{
        font-size: 32px;
        font-weight: normal;
        line-height: 96px;
        margin: 0 6px;
        small{
            font-size: 16px;
            font-weight: normal;
            color: #999;
        }

    }
}
</style>