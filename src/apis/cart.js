import http from "@/utils/http";

// 加入 购物车
export function postCart({ skuId, count }) {
  return http({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}

// 删除 购物车
export function deleteCart(ids) {
  http({
    url: '/member/cart',
    method: 'delete',
    data: {
      ids
    }
  })
}
