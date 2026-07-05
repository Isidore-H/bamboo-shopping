<script setup>
import { getCategoryAPI } from '@/apis/textAPI'
getCategoryAPI().then(res => console.log(res)).catch(err => console.log(err))
</script>

<template>
  <el-button type="primary">Primary</el-button>
</template>

<style scoped></style>
