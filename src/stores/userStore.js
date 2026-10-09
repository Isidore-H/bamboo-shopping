import { defineStore } from "pinia";
import { postLoginApi } from '@/apis/user'
import { ref } from "vue";
import { useCartStore } from '@/stores/cartStore'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const cartStore = useCartStore()

  const getUserInfo = async (account, password) => {
    const res = await postLoginApi({ account, password })
    userInfo.value = res.result
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
