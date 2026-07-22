import http from '@/utils/http'

// 获取 - 轮播图数据
export function getBannerAPI(distributionSite) {
  return http({
    url: '/home/banner',
    method: 'get',
    params: {
      distributionSite
    }
  })
}
// 获取 - 新鲜好物
export function getHomeNewAPI() {
  return http({
    url: '/home/new',
    method: 'get'
  })
}
// 获取 - 人气推荐
export function getHomeHotAPI() {
  return http({
    url: '/home/hot',
    method: 'get'
  })
}
// 获取 - 产品列表
export function getGoodsAPI() {
  return http({
    url: '/home/goods',
    method: 'get'
  })
}
