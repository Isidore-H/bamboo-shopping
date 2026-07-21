import http from '@/utils/http'

export function getBannerAPI() {
  return http({
    url: '/home/banner',
    method: 'get'
  })
}

export function getHomeNewAPI() {
  return http({
    url: '/home/new',
    method: 'get'
  })
}

export function getHomeHotAPI() {
  return http({
    url: '/home/hot',
    method: 'get'
  })
}

export function getGoodsAPI() {
  return http({
    url: '/home/goods',
    method: 'get'
  })
}
