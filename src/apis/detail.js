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

// 获取 - 热销商品
export function getGoodsHot({ id, type, limit = 3 }) {
  return http({
    url: '/goods/hot',
    method: 'get',
    params: {
      id,
      type,
      limit
    }
  })
}
