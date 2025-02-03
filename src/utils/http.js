import axios from 'axios'

//创建实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 500
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
    
  })
  const resp = await axios.get('/api/a1',{
	headers:{
		Authorization: 'anc'
	},
    params:{
        name: '123'
    }
})

export default httpInstance