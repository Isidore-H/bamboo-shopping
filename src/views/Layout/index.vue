<template>
  <div>
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
</script>

<style scoped>

</style>
