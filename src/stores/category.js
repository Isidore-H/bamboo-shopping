import { defineStore } from "pinia";
import { ref } from "vue";
import { getHomeCategoryAPI } from '@/apis/layout.js'

export const useHomeCategoryStore = defineStore('category', () => {
  const homeCategoryList = ref([])

  const getHomeCategoryList = async () => {
    try {
      const res = await getHomeCategoryAPI()
      homeCategoryList.value = res.result
    }
    catch (error) {}
  }

  return {
    homeCategoryList,
    getHomeCategoryList
  }
})
