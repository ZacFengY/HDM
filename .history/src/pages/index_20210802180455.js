import { useRequest } from 'umi'
import getUser from '../services/getUser'
import styles from '../styles/index.less'

export default function IndexPage() {
  const { data, error, loading } = useRequest(getUser)
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <div>
      <h1 className={styles.title}>{data}</h1>
    </div>
  )
}
