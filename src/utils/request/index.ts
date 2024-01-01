import type {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import axios from "axios";
// import {useEnv} from "../request";

// const {VITE_BASE_API} = useEnv();

const service: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000, // 请求超时时间
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "POST,GET"
    }
});


//请求拦截
//就是你请求接口的时候，我会先拦截下来，对你的数据做一个判断，或者携带个token给你
service.interceptors.request.use((config) => {//请求的数据
    config.headers = config.headers || {} as any  // 没有数据的话就设置为空设置为数据
    if (localStorage.getItem("token")) {//先确保登录
        config.headers.token = localStorage.getItem("token") || ""
    }
    return config//必须返回出去，不然请求发不出去
}, error => {
    //处理错误请求
    return Promise.reject(error)
})

//响应拦截：后端返回来的结果
service.interceptors.response.use((res) => {
    const code: number = res.data.code//code是后端的状态码
    if (code !== 200) {
        //请求失败（包括token失效，302，404...根据和后端约定好的状态码做出不同的处理）
        return Promise.reject(res)
    } else {
        //请求成功
        console.log(res, '成功----')
        return Promise.resolve(res.data)
    }
}, (err) => {
    console.log(err, '错误信息的处理')//错误信息的处理
    //处理错误响应
    return Promise.reject(err)
})

export default service