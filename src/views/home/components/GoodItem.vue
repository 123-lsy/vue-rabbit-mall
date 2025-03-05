
<script setup>
defineProps({
  good: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <RouterLink :to="`/detail/${good.id}`" class="good-item">
    <img v-img-lazy="good.picture" alt="" />
    <p class="name">{{ good.name }}</p>
    <p class="desc">{{ good.desc }}</p>
    <p class="price">¥{{ good.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
a {
  display: block;
  width: 220px;
  height: 300px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  img {
    width: 160px;
    height: 160px;
    margin-top: 20px;
  }
  p {
    margin: 0 auto;
    margin-top: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 160px;
    &.desc {
      color: #999;
    }
    &.price {
      color: $priceColor;
      font-size: 20px;
    }
  }
  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0, 0, 0, 20%);
  }
}
</style>
