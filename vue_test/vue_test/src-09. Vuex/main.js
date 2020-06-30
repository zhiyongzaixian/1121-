import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import store from './store'
import router from './router'

Vue.config.productionTip = false
// 全局获取错误
Vue.config.errorHandler = function (err, vm, info) {
  console.log('---- 全局捕获 errorHandler-----');
  console.log(vm);
  console.log(vm.str);
}

/*
* 组件实例: this
* 应用实例： vm
* vm.__proto__ = Vue.prototype
* vm.$Bus先在自身找，如果自身没有，去原型对象上找
*
* this.__proto__.__proto__ === Vue.prototype
*
* */

Vue.prototype.$Bus = new Vue()

const vm = new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

vm.test = 'abc'
// console.log('vm: ', vm);
