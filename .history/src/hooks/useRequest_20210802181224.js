import { useRequest } from 'umi'

const useFetch = (fetchFn, option) => {
  return useRequest(fetchFn, { ...option, formatResult: res => res })
}

export default useFetch
