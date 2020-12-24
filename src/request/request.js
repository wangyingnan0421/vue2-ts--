import axios from 'axios';
const baseUrl = '/api';
// 注册
export const a_register = (obj)=>{
    return axios({
        url:baseUrl + '/api/register',
        method:'post',
        data:obj
    })
}
// 登录
export const a_login = (obj)=>{
    return axios({
        url:baseUrl + '/api/login',
        method:'post',
        data:obj
    })
}


// 拦截器
const lala1 = axios.interceptors.request.use(config=>{
    console.log('发送拦截',config);
    return config;
})
const lala2 = axios.interceptors.response.use( response => {
    console.log('请求拦截',response);
    return response.data;
})