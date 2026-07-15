import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from '@/apis/layout.js'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])

  const getcategoryList = async () => {
    try {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    }
    catch (error) {}
  }

  return {
    categoryList,
    getcategoryList
  }
})
