import { useDynamicList, useToggle } from 'ahooks'
import { Button, Input, PageHeader, Radio, Select, Table } from 'antd'
import { useMemo } from 'react'
import Title from '../components/Title'
import ScheduleSettingModal from '../components/ScheduleSettingModal'
import '../styles/detail.less'

const Detail = () => {
  const [platform, { toggle }] = useToggle(1, 2)
  const [scheduleSettingModalVisible, { toggle: changeVisible }] = useToggle()
  const {
    list: schemaTableData,
    push: addSchemaTableData,
    replace: changeSchemaTableData,
    remove: removeSchemaTableData,
    getKey: getSchemaDataKey,
  } = useDynamicList([
    {
      name: 'CAL_DT',
      format: 'DATE',
      formula: 'SUM(ABD_FLAG)',
      type: 1,
    },
  ])
  const {
    list: scheduleTableData,
    push: addScheduleTableData,
    replace: changeScheduleTableData,
    remove: removeScheduleTableData,
    getKey: getScheduleDataKey,
  } = useDynamicList([
    {
      type: 'Time Trigger',
      frequency: 'Daily',
      at: '23:00',
      on: '',
    },
  ])

  const tableRadioChange = (e, data, index) => {
    changeSchemaTableData(index, { ...data, type: e.target.value })
  }

  const platformOnChange = e => {
    toggle(e.target.value)
  }

  const newSchemaColumn = () => {
    addSchemaTableData({
      name: 'SIT_ID',
      format: 'INT',
      formula: 'SUM(ABD_FLAG)',
      type: 1,
    })
  }

  const newScheduleColumn = () => {
    addScheduleTableData({
      type: 'Time Trigger',
      frequency: 'Daily',
      at: '23:00',
      on: '',
    })
  }

  const editScheduleTableData = index => {
    // changeScheduleTableData()
  }

  const columns = useMemo(
    () => ({
      schemaColumns: [
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
          dataIndex: 'type',
          render: (text, record, index) => (
            <Radio.Group onChange={e => tableRadioChange(e, record, index)} value={text}>
              <Radio value={1}>Dimenson</Radio>
              <Radio value={2}>Metric</Radio>
            </Radio.Group>
          ),
        },
        {
          title: 'Formula',
          dataIndex: 'formula',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record, index) => (
            <a onClick={() => removeSchemaTableData(index)}>Delete</a>
          ),
        },
      ],
      scheduleColumns: [
        {
          title: 'Type',
          dataIndex: 'type',
        },
        {
          title: 'Frequency',
          dataIndex: 'frequency',
        },
        {
          title: 'At',
          dataIndex: 'at',
        },
        {
          title: 'On',
          dataIndex: 'on',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record, index) => (
            <>
              <a onClick={() => removeScheduleTableData(index)}>Delete</a> |{' '}
              <a onClick={() => editScheduleTableData(index)}>Edit</a>
            </>
          ),
        },
      ],
    }),
    [],
  )

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
          <Button className='add' onClick={newSchemaColumn}>
            New Column
          </Button>
          <Table
            rowKey={(data, index) => getSchemaDataKey(index)}
            columns={columns.schemaColumns}
            dataSource={schemaTableData}
            pagination={{
              hideOnSinglePage: true,
            }}
          />
        </div>
        <Title text='Schedule Setting' />
        <div className='schedule-setting'>
          <Button className='add' onClick={() => changeVisible(true)}>
            New Schedule
          </Button>
          <Table
            rowKey={(data, index) => getScheduleDataKey(index)}
            columns={columns.scheduleColumns}
            dataSource={scheduleTableData}
            pagination={{
              hideOnSinglePage: true,
            }}
          />
        </div>
      </div>
      <ScheduleSettingModal
        visible={scheduleSettingModalVisible}
        onCancel={() => changeVisible(false)}
      />
    </div>
  )
}
export default Detail
