import { fetchApi } from '@/utils/request'

const getUser = () => {
  return fetchApi.get('/api/users').then(res => res)
}

export default getUser
