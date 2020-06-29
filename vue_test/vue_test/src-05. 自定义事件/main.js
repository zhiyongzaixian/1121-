import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'


Vue.config.productionTip = false
// 全局获取错误
Vue.config.errorHandler = function (err, vm, info) {
  console.log('---- 全局捕获 errorHandler-----');
  console.log(vm);
  console.log(vm.str);
}

new Vue({
  render: h => h(App),
}).$mount('#app')
