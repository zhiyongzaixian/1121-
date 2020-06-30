import Test from './Test'


// const test = {
//   // 必须叫install
//   install(Vue){
//     console.log('install()');
//     Vue.component('Test', Test)
//   }
// }

const test = function (Vue) {
  Vue.component('Test', Test)
  Vue.prototype.play = function (msg) {
    alert(msg)
  }
}

export default test
