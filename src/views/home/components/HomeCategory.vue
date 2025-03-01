<script setup>
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();

</script>

<template>
  <div class="home_category">
    <ul class="menu">
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink to="/"> {{item.name }}</RouterLink>
        <RouterLink to="/" v-for="i in item.children.slice(0,2)" :key="i.id"> {{ i.name }} </RouterLink>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul class="recommand">
            <li v-for="i in item.goods" :key="i.id">
              <RouterLink>
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">{{ i.name }}</p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
 

<style scoped lang="scss">
.home_category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  margin-bottom: 10px;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      a {
        color: #efefef;
        height: 55px;
        line-height: 55px;
        padding-right: 5px;
        &:first-child {
          font-size: 16px;
        }
      }
      &:hover {
        background-color: $xtxColor;
      }
      &:hover .layer {
        display: block;
      }
    }
    .layer {
      width: 990px;
      height: 500px;

      position: absolute;
      left: 250px;
      top: 0;
      padding: 0 15px;
      background: rgba(255, 255, 255, 0.8);
      display: none;
      h4 {
        font-size: 20px;
        font-weight: normal;
        line-height: 80px;

        small {
          font-size: 16px;
          color: #666;
        }
      }

      .recommand {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          width: 310px;
            height: 120px;
            border: 1px solid #efefef;
            background: rgba(255, 255, 255);
            margin: 10px 15px 15px 0;
            border-radius: 4px;
          &:nth-child(3n){
            margin-right: 0;
          }  
          a {
           width: 100%;
           height: 100%;
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 20px;
            padding: 10px;
            img {
              width: 95px;
              height: 95px;
              margin-right: 10px;
            }
            .info{
              line-height: 24px;
              overflow: hidden;
              color: #999;
              .name{
                color: #666;
              }
              .price{
                font-size: 20px;
                color: $priceColor;
                
                i{
                  font-size: 16px;
                }
              }
            }

          }
          &:hover {
                background: #e3f9f4;
              }

        }
      }
    }
  }
}
</style>