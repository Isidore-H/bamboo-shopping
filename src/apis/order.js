import http from "@/utils/http";

// 生成-订单（结算页）
export function getOrderPreApi() {
  return http({
    url: '/member/order/pre',
    method: 'get'
  })
}

// 提交-订单
export function postOrderApi(data) {
  return http({
    url: '/member/order',
    method: 'post',
    data
  })
}
