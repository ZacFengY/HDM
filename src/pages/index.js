import styles from '../styles/index.less'

const Home = () => {
  // const { data, error, loading } = useFetch(getUser)
  // console.log(data)
  // if (loading) {
  //   return <div>loading...</div>
  // }
  // if (error) {
  //   return <div>{error.message}</div>
  // }
  return (
    <div>
      {/* <h1 className={styles.title}>{data.name}</h1> */}
      <h1 className={styles.title}>刘德华</h1>
    </div>
  )
}

export default Home
