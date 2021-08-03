import request from '@/utils/request'

const getUser = () => {
  return request.get('/api/users')
}
