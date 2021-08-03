import styles from '../styles/index.less'
import getUser from '../services/getUser'
import { useRequest } from 'umi'

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
      <h1 className={styles.title}>{data.users[0]}</h1>
    </div>
  )
}
