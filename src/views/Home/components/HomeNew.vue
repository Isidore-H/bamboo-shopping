<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质保障">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in homeNewList" :key="item.id">
          <router-link to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </router-link>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<script setup>
import HomePanel from './HomePanel.vue';
import { getHomeNewAPI } from '@/apis/home.js'
import { onMounted, ref } from 'vue';

const homeNewList = ref([])

const getHomeNewList = async () => {
  try {
    const res = await getHomeNewAPI()
    homeNewList.value = res.result
  }
  catch {}
}

onMounted(() => {
  getHomeNewList()
})
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
