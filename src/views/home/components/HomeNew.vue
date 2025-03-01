
<script setup>
import { onMounted, ref } from "vue";
import HomePanel from "./HomePanel.vue";
import { getHomeNewAPI } from "@/apis/home";

const newList = ref([])
const getHomeNew = async() => {
    const res = await getHomeNewAPI()
    newList.value = res.result
}
onMounted(() => getHomeNew())
</script>

<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱"> 
    <ul>
    <li v-for="item in newList" :key="item.id">
      <RouterLink>
        <img :src="item.picture" alt="" />
        <p class="title">{{item.name}}</p>
        <p class="price">¥{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePanel>

</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: space-between;

  li {
    width: 306px;
    height: 404px;
    background: #f0f9f4;
    transition: all .3s;

    a {
      img {
        width: 306px;
        height: 306px;
      }
      p {
        text-align: center;
        font-size: 22px;
        padding-top: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

      }
      .price{
        color: $priceColor;
      }
    }


    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
  }
}
</style>