import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { a_getindexgoods,a_getcatetree,a_cartlist,
   a_getcate,a_getbanner,a_getseckill} from "../request/request.js";

export default new Vuex.Store({
  state: {
     logList:{},
     getcateArr:[],
     getbannerArr:[],
     getseckillArr:[],
     getindexgoodArr:[],
     getcatetree:[],
     cartlistArr:[],
     
  },
  mutations: {

  },
  actions: {
    ac_login({state},list){
      state.logList = list;
    },
    //获取分类页信息
    ac_getcate({state}){
      a_getcate().then(data=>{
        state.getcateArr = data.list;

      })
    },
    // main轮播图
    ac_getbanner({state}){
      a_getbanner().then(data=>{
        state.getbannerArr = data.list;
      })
    },
    // 限时秒杀,没数据
    ac_getseckill({state}){
      a_getseckill().then(data=>{
        // console.log(data);
        state.getseckillArr = data.list;
      })
    },
    // 获取商品信息
    ac_getindexgoods({state}){
      a_getindexgoods().then(data=>{ 
        console.log(data);
        state.getindexgoodArr = data.list;
        
      })
    },
    // 五、获取分类树形结构
    ac_getcatetree({state}){
      a_getcatetree().then(data=>{
        state.getcatetree = data.list;
        
      })
    },
    // 购物车列表
    ac_cartlist({state},obj){
      a_cartlist(obj).then(data=>{
        state.cartlistArr = data.list;
        
        
      })
    }
  },
  // modules: {
  // }
})
