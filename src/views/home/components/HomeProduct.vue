<script setup>
import HomePanel from "./HomePanel.vue";
import { ref, onMounted } from "vue";
import { getGoodsAPI } from "@/apis/home";
import GoodItem from "./GoodItem.vue";
// 获取数据列表
const goodsProduct = ref([]);
const getGoods = async () => {
  const res = await getGoodsAPI();
  goodsProduct.value = res.result;
};
onMounted(() => getGoods());
</script>

<template>
  <div class="home_product">
    <HomePanel title="居家" v-for="item in goodsProduct" :key="item.id">
      <div class="second_category">
        <RouterLink class="categoty_image">
          <img v-img-lazy="item.picture"  alt="" />
          <strong class="label">
            <span>{{ item.name }}馆</span>
            <span>{{ item.saleInfo }}</span>
          </strong>
        </RouterLink>

        <div class="product">
          <ul>
            <li v-for="good in item.goods" :key="good.id">
              <GoodItem :good="good"></GoodItem>
            </li>
          </ul>
        </div>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home_product {
  margin-top: 20px;

  .second_category {
    display: flex;
    .categoty_image {
      width: 240px;
      height: 610px;
      position: relative;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
      .label {
        width: 188px;
        height: 66px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate3d(0, -50%, 0);
        display: flex;
        span {
          font-size: 18px;
          color: white;
          font-weight: normal;
          line-height: 66px;
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
    .product {
      width: 990px;

      ul {
        display: flex;
        justify-content: space-left;
        flex-wrap: wrap;
        li{
            margin-right: 10px;
            margin-bottom: 10px;
        }
      }
    }
  }
}
</style>