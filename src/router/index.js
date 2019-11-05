import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/city'
import AddrDetail from '@/components/addr-detail/addr-detail'
import HostList from '@/components/host-list/HostList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/addr',
      name: 'addr',
      component: AddrDetail
    },
    {
      path: '/hostlist',
      name: 'HostList',
      component: HostList
    }
  ]
})
