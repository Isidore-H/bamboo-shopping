import { defineStore } from "pinia";
import { ref } from "vue";
import { getHomeCategoryAPI } from '@/apis/layout.js'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])

  const getcategoryList = async () => {
    try {
      const res = await getHomeCategoryAPI()
      categoryList.value = res.result
    }
    catch (error) {}
  }

  return {
    categoryList,
    getcategoryList
  }
})
