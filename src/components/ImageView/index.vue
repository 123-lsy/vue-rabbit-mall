<script setup>
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";
import { watch } from "vue";

defineProps({
    imageList: {
        type: Array,
        default: () => []
    }
})
const target = ref(null)
console.log(333,target)

const { elementX, elementY, isOutside } = useMouseInElement(target);

const left = ref(0);
const top = ref(0);
const positionX = ref(0)
const positionY = ref(0)
watch([elementX,elementY,isOutside], () =>{
    console.log(elementX.value,elementY.value)
    // 如果鼠标没有移入到盒子里面 直接不执行后面的逻辑
  if (isOutside.value) return

// 有效范围内控制滑块距离
// 横向
if (elementX.value > 100 && elementX.value < 300) {
  left.value = elementX.value - 100
}
// 纵向
if (elementY.value > 100 && elementY.value < 300) {
  top.value = elementY.value - 100
}

// 处理边界
if (elementX.value > 300) { left.value = 200 }
if (elementX.value < 100) { left.value = 0 }

if (elementY.value > 300) { top.value = 200 }
if (elementY.value < 100) { top.value = 0 }
  // 控制大图的显示
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2
}

)

// const imageList = [
//   "https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png",
//   "https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg",
//   "https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg",
//   "https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg",
//   "https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg",
// ];

const curIndex = ref(0);
const mouseenterFn = (i) => {
  curIndex.value = i;
};
</script>

<template>
  <div class="good-images">
    <!-- 左侧大图 -->
    <div class="big-image" ref="target">
      <img :src="imageList[curIndex]" alt="" />
      <!-- 大图中的黑色滑块 -->
       <div class="layer"  v-show="!isOutside" :style="{
     left: `${left}px`,
     top: `${top}px`
       }" ></div>
    </div>
    <div class="float-image" v-show="!isOutside" :style = "{
       backgroundImage: `url(${imageList[curIndex]})`,
       backgroundPositionX: `${positionX}px`,
       backgroundPositionY: `${positionY}px`
    }">
    
    </div>
    <!-- 小图 -->
    <ul class="small-image">
      <li v-for="(item, i) in imageList" :key="i">
        <img
          :src="item"
          alt=""
          @mouseenter="mouseenterFn(i)"
          :class="{ active: i == curIndex }"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.good-images {
  display: flex;
  width: 480px;
  height: 400px;
  position: relative;

  .big-image {
    position: relative;

    img {
      width: 400px;
      height: 400px;
    }
    .layer {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 500;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .float-image {
    position: absolute;
    top: 0;
    left: 412px;
    z-index: 500;
    width: 400px;
    height: 400px;
    background-size: 800px 800px;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .small-image {
    li {
      img {
        width: 68px;
        height: 68px;
        margin-left: 12px;
        margin-bottom: 15px;
        cursor: pointer;
        &:hover {
          border: 2px solid $xtxColor;
        }
      }
    }
  }
  .active {
    border: 2px solid $xtxColor;
  }
}
</style>