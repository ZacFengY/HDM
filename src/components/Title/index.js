import './index.less'

const Title = ({ text, style }) => {
  return (
    <div className='title' style={style}>
      {text}
    </div>
  )
}

export default Title
