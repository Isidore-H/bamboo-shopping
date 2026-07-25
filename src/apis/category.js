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

// 获取 - 二级分类数据
export function getCategoryFilterAPI(id) {
  return http({
    url: '/category/sub/filter',
    method: 'get',
    params: {
      id
    }
  })
}

// 请求 - 二级分类商品数据
export function postCategoryGoodsTemporaryAPI(data) {
  return http({
    url: '/category/goods/temporary',
    method: 'post',
    data
  })
}
