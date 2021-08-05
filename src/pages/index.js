import { Button, Form, Input, PageHeader, Select, Space, Table } from 'antd'
import { history } from 'umi'
import '../styles/index.less'

const { Item } = Form

const Home = () => {
  // const { data, error, loading } = useFetch(getUser)
  // console.log(data)
  // if (loading) {
  //   return <div>loading...</div>
  // }
  // if (error) {
  //   return <div>{error.message}</div>
  // }

  const newDataSourceClick = () => {
    history.push('/detail')
  }

  const columns = [
    {
      title: 'Data Source Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
    },
    {
      title: 'Table/Custom Query',
      dataIndex: 'table',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <a>View</a> | <a>Edit</a> | <a>Edit Schedule</a>
        </Space>
      ),
    },
  ]

  const data = [
    {
      name: 'xxx',
      domain: 'Search',
      platform: 'Hermes',
      table: 'access_views.srch_test',
      status: 'Ready',
    },
    {
      name: 'xxxxx',
      domain: 'Search',
      platform: 'Hermessss',
      table: 'access_views.srch_test',
      status: 'Not Ready',
    },
  ]
  return (
    <main className='home'>
      {/* <h1 className={styles.title}>{data.name}</h1> */}
      <PageHeader title='HDM Onboarding List' />
      <div className='container'>
        <Form layout='inline' className='form'>
          <Item label='Platform' name='platform' initialValue='hermes'>
            <Select />
          </Item>
          <Item label='Domain' name='domain' initialValue='Search'>
            <Select />
          </Item>
          <Item label='Data Source Name' name='dataSourceName'>
            <Input />
          </Item>
          <Button>Query</Button>
        </Form>
        <Button onClick={newDataSourceClick}>Onboard New Data Source</Button>
        <Table rowKey={data => data.name} className='table' columns={columns} dataSource={data} />
      </div>
    </main>
  )
}

// Home.wrappers = ['@/wrappers/auth']

export default Home
