<template>
  <div class="home-product">
    <HomePanel v-for="item in goodsList" :key="item.id" :title="item.name">
      <template #main>
        <div class="box">
          <router-link class="cover" to="/">
            <img v-img-lazy="item.picture">
            <strong class="label">
              <span>{{ item.name }}</span>
              <span>{{ item.saleInfo }}</span>
            </strong>
          </router-link>
          <ul class="goods-list">
            <li v-for="goods in item.goods" :key="goods.id">
              <GoodsItem :goods></GoodsItem>
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import HomePanel from './HomePanel.vue';
import GoodsItem from './GoodsItem.vue';
import { getGoodsAPI } from '@/apis/home.js'
import { ref } from 'vue'

const goodsList = ref([])

const getGoodsList = async () => {
  try {
    const res = await getGoodsAPI()
    goodsList.value = res.result
  }
  catch {}
}

onMounted(() => {
  getGoodsList()
})
</script>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $bbsColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
