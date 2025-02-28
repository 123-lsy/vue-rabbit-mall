<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import LayoutHeader from '@/views/layouts/components/LayoutHeader.vue'
import LayoutNav from '@/views/layouts/components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue';   
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()


onMounted(() =>{
    categoryStore.getCategory()
})

</script>

<template>

    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView></RouterView>
    <LayoutFooter/>

</template>


<style scoped>

</style>