<script setup>
</script>

<template>
  <router-view></router-view>
  <div class="divColor">测试scss变量自动导入</div>
</template>

<style scoped lang="scss">
.divColor {
  color: $priceColor;
}
</style>
