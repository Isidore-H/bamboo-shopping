import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cartStore', () => {
  const cartStoreList = ref([])

  const addCartStore = (goods) => {
    const isExist = cartStoreList.value.find((item) => item.skuId === goods.skuId)
    if (isExist) {
      isExist.count++
    } else {
      cartStoreList.value.push(goods)
    }
  }

  const delCartStore = (skuId) => {
    const delId = cartStoreList.value.find((item) => item.skuId === skuId)
    cartStoreList.value.splice(delId, 1)
  }

  // 商品总数
  const allCount = computed(() => {
    return cartStoreList.value.reduce((count, item) => {
      count += item.count
    }, 0)
  })

  // 商品总价格
  const allPrice = computed(() => {
    return cartStoreList.value.reduce((count, item) => {
      count += item.count * item.price
    }, 0)
  })

  return {
    cartStoreList,
    addCartStore,
    delCartStore,
    allCount,
    allPrice
  }
}, {
  persist: true
})
