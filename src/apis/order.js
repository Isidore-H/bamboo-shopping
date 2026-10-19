import http from "@/utils/http";

export function getOrderPreApi() {
  return http({
    url: '/member/order/pre',
    method: 'get'
  })
}
