import { loginAPI } from "@/apis/user";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", ()=> {
    const userInfo = ref({})
    const login = async(formData) => {
        const res = await loginAPI(formData)
        userInfo.value = res.result
        console.log('登录成功了')
    }
    //清除数据
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    return {login, userInfo,clearUserInfo}
},{
    persist: true
})