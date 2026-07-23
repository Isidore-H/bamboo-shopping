<template>
  <div>
    <HeaderFixed></HeaderFixed>
    <Nav></Nav>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useHomeCategoryStore } from '@/stores/category.js';
import { onMounted } from 'vue';
import HeaderFixed from './components/HeaderFixed.vue';

const homeCategoryStore = useHomeCategoryStore()
onMounted(() => {
  homeCategoryStore.getHomeCategoryList()
})
</script>

<style scoped>

</style>
