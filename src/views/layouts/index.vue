<template>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>

</template>

<script setup>
import LayoutHeader from '@/views/layouts/components/LayoutHeader.vue'
import LayoutNav from '@/views/layouts/components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue';   
import LayoutFixed from './components/LayoutFixed.vue';
</script>