import http from '@/utils/http'

// 获取 - 商品详情
export function getGoodsDetailAPI(id) {
  return http({
    url: '/goods',
    method: 'get',
    params: {
      id
    }
  })
}
