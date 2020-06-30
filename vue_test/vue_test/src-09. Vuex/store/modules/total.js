// state actions mutations  getters


const state = {
  initData: 'total初始化测试数据',
  personArr: []
}


const actions = {

}
// 同步修改state状态数据

/*
* mutation 中能够异步修改数据
* 结论：
*   1. 在mutation中可以执行异步任务去修改状态数据
*   2. 但是，调试工具没有办法识别
* 思考： 设计的时候为什么不建议在mutation中异步修改, 而要设计action
*   1. vuex中的数据是集中管理被多个组件共享的
*   2. 如果支持异步修改的话，多个组件同时异步修改集中的数据，加上异步的特性，会导致数据错乱甚至是报错
*   3. 一切的设计为了数据的安全
* */
const mutations = {
  changePersonArr(state, personArr){
    state.personArr = personArr
    
  }
}

export default  {
  state,
  actions,
  mutations
}
