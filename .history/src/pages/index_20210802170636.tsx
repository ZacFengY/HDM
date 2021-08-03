import styles from '../styles/index.less'
import getUser from '../services/getUser'
import { useRequest } from 'umi'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  )
}
