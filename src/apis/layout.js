import http from '@/utils/http'

// 获取全部分类（包含推荐商品）
export function getHomeCategoryAPI () {
  return http({
    url: 'home/category/head',
    method: 'get'
  })
}
