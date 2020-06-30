import Test from './Test'


const test = {
  // 必须叫install
  install(Vue){
    console.log('install()');
    Vue.component('Test', Test)
  }
}



export default test
