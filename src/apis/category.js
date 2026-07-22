import http from '@/utils/http'

// 获取 - 二级分类列表
export function getCategoryAPI(id) {
  return http({
    url: '/category',
    method: 'get',
    params: {
      id
    }
  })
}
