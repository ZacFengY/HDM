import { Button, Input, PageHeader, Radio, Select, Table } from 'antd'
import { useMemo, useState } from 'react'
import Title from '../components/Title'
import '../styles/detail.less'

const Detail = props => {
  const [platform, setPlatform] = useState(1)

  const columns = useMemo(() => [
    {
      title: 'Column Name',
      dataIndex: 'name',
    },
    {
      title: 'Format',
      dataIndex: 'format',
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      render: () => <>s</>,
    },
    {
      title: 'Formula',
      dataIndex: 'formula',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <a>Delete</a>,
    },
  ])

  const platformOnChange = e => {
    setPlatform(e.target.value)
  }

  const newColumn = () => {}

  return (
    <div className='detail'>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title='HDM Onboarding'
        extra={
          <Button key='1' type='primary'>
            Submit
          </Button>
        }
      />
      <div className='detail-wrapper'>
        <Title text='Basic Info' />
        <div className='row'>
          <div className='label'>Domain</div>
          <Select defaultValue='Search' className='w300' />
        </div>
        <div className='row'>
          <div className='label'>Data Source Name</div>
          <Input className='w300' />
        </div>
        <Title text='Source Table Info' />
        <div className='row'>
          <div className='label'>Platform</div>
          <Select defaultValue='hermes' className='w300' />
        </div>
        <div className='row'>
          <Radio.Group onChange={platformOnChange} value={platform}>
            <Radio value={1} style={{ width: 172 }}>
              Single Table
            </Radio>
            <Radio value={2}>Custom Query</Radio>
          </Radio.Group>
        </div>
        <div className='row'>
          <div className='label'>Table</div>
          {platform === 1 ? (
            <Input className='w300' />
          ) : (
            <Input.TextArea rows={4} className='w600'></Input.TextArea>
          )}
          <Button className='get-schema' type='primary'>
            Get Schema
          </Button>
        </div>
        <Title text='Schema Setting' />
        <div className='schema-setting'>
          <Button onClick={newColumn}>New Column</Button>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Detail
