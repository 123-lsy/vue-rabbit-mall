import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import { ElMessage } from 'element-plus'
import router from '@/router'




//创建实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})



// axios请求拦截器 拦截器中添加token
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  console.log(token)
  //添加token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  //统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  //token过期
  if (e.response.status === 401) {
    console.log('token过期了')
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)

})

export default httpInstance