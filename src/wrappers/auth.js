import { Redirect } from 'umi'
import useAuth from '../hooks/useAuth'

const LoginWrapper = props => {
  const { isLogin } = useAuth()
  if (isLogin) {
    return <div>{props.children}</div>
  } else {
    return <Redirect to='/' />
  }
}

export default LoginWrapper
