import { defineStore } from "pinia";
import { postLoginApi } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  const getUserInfo = async (account, password) => {
    const res = await postLoginApi({ account, password })
    userInfo.value = res.result
  }

  return {
    userInfo,
    getUserInfo
  }
})
