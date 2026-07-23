<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <router-link class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <router-link to="/">首页</router-link>
        </li>
        <li class="home" v-for="item in homeCategoryStore.homeCategoryList" :key="item.id">
          <router-link active-class="active" :to="`/category/${item.id}`">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeCategoryStore } from '@/stores/category';
import { useScroll } from '@vueuse/core'

const homeCategoryStore = useHomeCategoryStore()
const { y } = useScroll(window)
</script>

<style scoped lang="scss">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 14px / contain;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $bbsColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $bbsColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $bbsColor;
        border-bottom: 1px solid $bbsColor;
      }
    }

    .active {
      color: $bbsColor;
      border-bottom: 1px solid $bbsColor;
    }
  }
}
</style>
