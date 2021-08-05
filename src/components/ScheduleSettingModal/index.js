import { Button, Modal, Input, Select, TimePicker } from 'antd'
import './index.less'

const ScheduleSettingModal = ({ visible, onCancel }) => {
  return (
    <Modal
      className='schedule-modal'
      title='New Schedule'
      visible={visible}
      width={1000}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <div className='row'>
          <div className='label'>Type</div>
          <Select defaultValue='Time Tigger' style={{ width: 200 }} />
        </div>
        <div className='row'>
          <div className='label'>Frequency</div>
          <Select style={{ width: 200 }} />
          <span className='span-desc'>On</span>
          <Select style={{ width: 200 }} />
          <span className='span-desc'>At</span>
          <TimePicker />
        </div>
        <div className='row end-row'>
          <Button type='primary'>Submit</Button>
        </div>
      </div>
    </Modal>
  )
}

export default ScheduleSettingModal
