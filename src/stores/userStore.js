import { defineStore } from "pinia";
import { postLoginApi } from '@/apis/user'
import { ref } from "vue";
import { useCartStore } from '@/stores/cartStore'
import { mergeCart } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const cartStore = useCartStore()

  const getUserInfo = async (account, password) => {
    const res = await postLoginApi({ account, password })
    userInfo.value = res.result
    await mergeCart(cartStore.cartStoreList.map((item) => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.updateNewList()
  }

  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true
})
