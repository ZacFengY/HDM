import { Button, Form, Input, PageHeader, Select, Space, Table, Tag } from 'antd'
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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
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
        <Button>Onboard New Data Source</Button>
        <Table className='table' columns={columns} dataSource={data} />
      </div>
    </main>
  )
}

// Home.wrappers = ['@/wrappers/auth']

export default Home
