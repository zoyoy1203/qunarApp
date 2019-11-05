import * as types from './mutation-types'

//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const matutaions = {
  [types.SET_CITY](state,city){
    state.city = city
  },
  [types.SET_ADDRID](state,addrId){
    state.addrId = addrId
  }
}

export default matutaions
