import fetch from '@/axios/fetch'

// 获取轮播图
// let apiUrl = process.env.API_HOST
let apiUrl = '/api'

// 获取首页数据
export function getHome (cityname) {
  return fetch({
    url: apiUrl + '/cityDetail/cityname/'+ cityname
  })
}
// 获取热门城市数据
export function getHostList (cityname) {
  return fetch({
    url: apiUrl + '/hostList/cityname/'+ cityname
  })
}

// 获取城市热门景点数据
export function getCities () {
  return fetch({
    // url:  '/api/banner',
    url: apiUrl + '/cities'
  })
}

// 获取景点详情数据
export  function getAddrDetail (id) {
  return fetch({
    url: apiUrl + '/addrDetail/id/'+id
  })
}
