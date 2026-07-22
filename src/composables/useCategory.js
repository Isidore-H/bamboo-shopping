import { onMounted, ref } from "vue"
import { getCategoryAPI } from '@/apis/category'
import { onBeforeRouteUpdate, useRoute } from "vue-router"

export function useCategory() {
  const route = useRoute()
  const categoryList = ref({})

  const getCategoryList = async (id) => {
    try {
      const res = await getCategoryAPI(id)
      categoryList.value = res.result
    }
    catch {}
  }

  onBeforeRouteUpdate((to) => {
    getCategoryList(to.params.id)
  })

  onMounted(() => {
    getCategoryList(route.params.id)
  })

  return {
    categoryList
  }
}
