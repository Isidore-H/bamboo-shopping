import http from '@/utils/http'

export function postLoginApi ({ account, password }) {
  return http({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}
