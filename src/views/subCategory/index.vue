<script setup>
import GoodItem from "../home/components/GoodItem.vue";
import { getSubCategoryAPI, getCategoryFilterAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
//获取面包屑数据
const categoryData = ref({});
const getCategoryData = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  categoryData.value = res.result;
};
onMounted(() => getCategoryData());
//获取商品列表
const secondCategoryGoods = ref([]);
const req = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(req.value);
  secondCategoryGoods.value = res.result.items;
};
onMounted(() => {
  getSubCategory();
});

//tab切换
const tabChange = () => {
  console.log("tab改变了", req.value.sortField);
  req.value.page = 1;
  getSubCategory();
};
//无限加载
const disabled = ref(false);
const load = async () => {
  req.value.page++;
  const newRes = await getSubCategoryAPI(req.value);
  secondCategoryGoods.value = [
    ...secondCategoryGoods.value,
    ...newRes.result.items,
  ];
  if (newRes.result.items.length == 0) {
    disabled.value = true;
  }
};
</script>

<template>
  <div class="second_category">
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/category/${categoryData.parentId}` }"
            >{{ categoryData.parentName }}</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- tab页面 -->
      <div class="sub_containner">
        <el-tabs
          v-model="req.sortField"
          class="demo-tabs"
          @tab-change="tabChange"
        >
          <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
          <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
          <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
        </el-tabs>
        <!-- goods -->
        <div
          class="tab_body"
          v-infinite-scroll="load"
          :infinite-scroll-disabled="disabled"
        >
          <GoodItem
            v-for="item in secondCategoryGoods"
            :key="item.id"
            :good="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .bread {
    padding: 20px 10px;
    font-size: 18px;
  }
  .sub_containner {
    background-color: #fff;
    padding-left: 10px;
    padding-top: 20px;

    .tab_body {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
    }
    .good-item {
        display: block;
        margin-right: 20px;
      }
  }
}
</style>