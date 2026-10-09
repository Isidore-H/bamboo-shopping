import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from '@/stores/userStore'
import { postCart, getCart, deleteCart } from '@/apis/cart'

export const useCartStore = defineStore('cartStore', () => {
  const cartStoreList = ref([])

  const userStore = useUserStore()

  const isLogin = computed(() => userStore.userInfo.token)

  const updateNewList = async () => {
    const res = await getCart()
    cartStoreList.value = res.result
  }

  const addCartStore = async (goods) => {
    if (isLogin.value) {
      const { skuId, count } = goods
      await postCart({ skuId, count })
      updateNewList()
    }
    else {
      const isExist = cartStoreList.value.find((item) => item.skuId === goods.skuId)
      if (isExist) {
        isExist.count += goods.count
      } else {
        cartStoreList.value.push(goods)
      }
    }
  }

  const delCartStore = async (skuId) => {
    if (isLogin.value) {
      await deleteCart([skuId])
      updateNewList()
    } else {
      const ids = cartStoreList.value.findIndex((item) => item.skuId === skuId)
      cartStoreList.value.splice(ids, 1)
    }
  }

  const singleCheck = (skuId, selected) => {
    const item = cartStoreList.value.find(i => i.skuId === skuId)
    item.selected = selected
  }

  const allCheck = (selected) => {
    cartStoreList.value.forEach(i => i.selected = selected)
  }

  // 商品总数
  const allCount = computed(() => {
    return cartStoreList.value.reduce((count, item) => {
      return count += item.count
    }, 0)
  })

  // 商品总价格
  const allPrice = computed(() => {
    return cartStoreList.value.reduce((count, item) => {
      return count += item.count * item.price
    }, 0)
  })

  // 选择商品总数
  const selectCount = computed(() => cartStoreList.value.filter((item) => item.selected).reduce((count, item) => count + item.count, 0))

  // 选择商品总价格
  const selectPrice = computed(() => cartStoreList.value.filter((item) => item.selected).reduce((count, item) => count + (item.count * item.price), 0))

  // 是否全选
  const isAll = computed(() => {
    return cartStoreList.value.every(i => i.selected)
  })

  return {
    cartStoreList,
    addCartStore,
    delCartStore,
    singleCheck,
    allCheck,
    allCount,
    allPrice,
    selectCount,
    selectPrice,
    isAll
  }
}, {
  persist: true
})
