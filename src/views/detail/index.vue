<script setup>
import { getDetail } from "@/apis/detail";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import HotGood from "./components/HotGood.vue";
import ImageView from '@/components/ImageView/index.vue'
const route = useRoute();
//商品信息
const goods = ref({});
const getGoods = async () => {
  const res = await getDetail(route.params.id);
  goods.value = res.result;
};
onMounted(() => getGoods());
</script>

<template>
  <div class="app_detail container">
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread_container" v-if="goods.categories">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/categoty/${goods.categories[1].id}` }"
            >{{ goods.categories[1].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/categoty/${goods.categories[0].id}` }"
            >{{ goods.categories[0].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ goods.desc }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品信息 -->
      <div class="good_info">
        <!-- 左边区域 -->
        <div class="left">
          <!-- 图片 -->
          <div class="good_picture">
            <ImageView :image-list="goods.mainPictures"/>
          </div>
          <!-- 指标 -->
          <ul class="good_sales">
            <li>
              <p>销量人气</p>
              <p>{{ goods.salesCount }}+</p>
              <p><i class="iconfont icon-task-filling"></i>销量人气</p>
            </li>
            <li>
              <p>商品评价</p>
              <p>{{ goods.commentCount }}+</p>
              <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
            </li>
            <li>
              <p>收藏人气</p>
              <p>{{ goods.collectCount }}+</p>
              <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
            </li>
            <li>
              <p>品牌信息</p>
              <p>{{ goods.brand?.name }}</p>
              <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <!-- 描述信息 -->
          <div class="desc">
            <p class="g-name">抓绒保暖，毛毛虫儿童鞋</p>
            <p class="g-desc">好穿</p>
            <p class="g-price">
              <span>200</span>
              <span> 100</span>
            </p>
            <div class="g-service">
              <dl>
                <dt>促销</dt>
                <dd>12月好物放送，App领券购买直降120元</dd>
              </dl>
              <dl>
                <dt>服务</dt>
                <dd>
                  <span>无忧退货</span>
                  <span>快速退款</span>
                  <span>免费包邮</span>
                  <a href="javascript:;">了解详情</a>
                </dd>
              </dl>
            </div>
            <!-- sku组件 -->

            <!-- 数据组件 -->

            <!-- 按钮组件 -->
            <div>
              <el-button size="large" class="btn"> 加入购物车 </el-button>
            </div>
          </div>
        </div>
      </div>
      <!--商品详情区  -->
      <div class="goods-footer" v-if="goods.details">
        <div class="goods-article">
          <!-- 商品详情 -->
          <div class="goods-tabs">
            <nav>
              <a>商品详情</a>
            </nav>
            <div class="goods-detail">
              <!-- 属性 -->
              <div class="attrs">
                <dl v-for="item in goods.details.properties" :key="item.value">
                  <dt class="dt">{{ item.name }}</dt>
                  <dd class="dd">{{ item.value }}</dd>
                </dl>
              </div>
              <!-- 图片 -->
              <img
                v-for="img in goods.details.pictures"
                :src="img"
                :key="img"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
          <HotGood hot-type="1" />
          <HotGood hot-type="2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .bread_container {
    padding: 20px 10px;
    font-size: 18px;
  }
  .good_info {
    background-color: #fff;
    display: flex;
  }
  .left {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
    .good_sales {
      display: flex;
      width: 400px;
      align-items: center;
      text-align: center;
      height: 140px;

      li {
        flex: 1;
        position: relative;

        ~ li::after {
          position: absolute;
          left: 0;
          top: 10px;

          height: 60px;
          border-left: 1px solid #e4e4e4;
          content: "";
        }

        p {
          &:first-child {
            color: #999;
          }

          &:nth-child(2) {
            color: $priceColor;
            margin-top: 10px;
          }

          &:last-child {
            color: #666;
            margin-top: 10px;

            i {
              color: $xtxColor;
              font-size: 14px;
              margin-right: 2px;
            }

            &:hover {
              color: $xtxColor;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .right {
    width: 660px;
    height: 600px;
    padding: 30px 30px 30px 0;

    .desc {
      .g-name {
        font-size: 22px;
      }

      .g-desc {
        color: #999;
        margin-top: 10px;
      }

      .g-price {
        margin-top: 10px;

        span {
          &::before {
            content: "¥";
            font-size: 14px;
          }

          &:first-child {
            color: $priceColor;
            margin-right: 10px;
            font-size: 22px;
          }

          &:last-child {
            color: #999;
            text-decoration: line-through;
            font-size: 16px;
          }
        }
      }
    }
    .g-service {
      background: #f5f5f5;
      width: 500px;
      padding: 20px 10px 0 10px;
      margin-top: 10px;

      dl {
        padding-bottom: 20px;

        display: flex;
        dt {
          width: 50px;
          color: #999;
        }
        dd {
          span {
            margin-right: 10px;
            &::before {
              content: "•";
              color: $xtxColor;
              margin-right: 3px;
            }
          }
          a {
            color: $xtxColor;
          }
        }
      }
    }
  }
  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;

    nav {
      height: 70px;
      line-height: 70px;
      display: flex;
      border-bottom: 1px solid #f5f5f5;

      a {
        padding: 0 40px;
        font-size: 18px;
        position: relative;

        > span {
          color: $priceColor;
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }
  .goods-detail {
    padding: 40px;

    .attrs {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 30px;

      dl {
        display: flex;
        margin-bottom: 10px;
        width: 50%;

        .dt {
          width: 100px;
          color: #999;
        }

        .dd {
          flex: 1;
          color: #666;
        }
      }
    }

    > img {
      width: 100%;
    }
  }
}
</style>