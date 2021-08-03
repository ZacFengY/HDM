import useFetch from '@/hooks/useFetch'
import getUser from '../services/getUser'
import styles from '../styles/index.less'

export default function IndexPage() {
  const { data, error, loading } = useFetch(getUser, {
    formatResult: res => res,
  })
  console.log(data)
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <div>
      <h1 className={styles.title}>{data.name}</h1>
    </div>
  )
}
