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
// sort获取分类信息(首页)
export const a_getcate = ()=>{
    return axios({
        url:baseUrl + '/api/getcate',
        method:'get',
    })
}
// main轮播图
export const a_getbanner = ()=>{
    return axios({
        url:baseUrl + '/api/getbanner',
        method:'get',
    })
}
// 三、获取限时秒杀信息首页
export const a_getseckill = ()=>{
    return axios({
        url:baseUrl + '/api/getseckill',
        method:'get',
    })
}
// 四、获取商品信息首页
export const a_getindexgoods = ()=>{
    return axios({
        url:baseUrl + '/api/getindexgoods',
        method:'get',
    })
}
// 五、获取分类树形结构
export const a_getcatetree = ()=>{
    return axios({
        url:baseUrl + '/api/getcatetree',
        method:'get',
    })
}

// 十、购物车列表
export const a_cartlist = (obj)=>{
    return axios({
        url:baseUrl + '/api/cartlist',
        method:'get',
        params:obj
    })
}
// 十一、购物车添加
export const a_cartadd = (obj)=>{
    return axios({
        url:baseUrl + '/api/cartadd',
        method:'post',
        data:obj
    })
}
// 十二、购物车删除
export const a_cartdelete = (obj)=>{
    return axios({
        url:baseUrl + '/api/cartdelete',
        method:'post',
        data:obj
    })
}
// 六、获取分类商品
export const a_getgoods = (obj)=>{
    return axios({
        url:baseUrl + '/api/getgoods',
        method:'get',
        params:obj
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