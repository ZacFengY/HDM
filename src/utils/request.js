import { extend } from 'umi-request'

const errorHandler = function (error) {
  const codeMap = {
    '021': '发生错误啦',
    '022': '发生大大大大错误啦',
    // ....
  }
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    console.log(error.response.status)
    console.log(error.response.headers)
    console.log(error.data)
    console.log(error.request)
    console.log(codeMap[error.data.status])
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    console.log(error.message)
  }

  throw error // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return {some: 'data'};
}

function request(url, option = { method: 'get' }) {
  const fetchApi = extend({
    prefix: '',
    timeout: 2000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache',
      ...option.headers,
    },
    errorHandler,
  })
  return fetchApi[option.method](url).then(res => {
    return res
  })
}

const methods = ['POST', 'PUT', 'DELETE', 'GET']

methods.forEach(method => {
  const lowerType = method.toLowerCase()
  request[lowerType] = (url, option) =>
    request(url, { ...option, method: lowerType, credentials: 'include' })
})

export const fetchApi = extend({
  prefix: '',
  timeout: 2000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
  },
  errorHandler,
})

export default request
