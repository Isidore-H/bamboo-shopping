import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

export function useBanner(site) {
  const bannerList = ref([])

  const getBannerList = async () => {
    try {
      const res = await getBannerAPI(site)
      bannerList.value = res.result
    }
    catch {}
  }

  onMounted(() => {
    getBannerList()
  })

  return {
    bannerList
  }
}
