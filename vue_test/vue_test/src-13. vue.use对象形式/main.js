import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import Test from './myComponents/Test'

Vue.use(Test)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
