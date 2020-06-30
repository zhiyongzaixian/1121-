import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)


// 1. 生成路由器
const router = new VueRouter({
	routes,
	mode: 'hash'
	// mode: 'history'
})

// 全局守卫
router.beforeEach((to, from, next) => {
  console.log('------ beforeEach 全局前置守卫------')
	// 贫僧从 东土大唐而来(from)  去 西天取经(to)  途径贵宝地， 望发放关文牒(next)
	// to, from, next
	console.log(to); // 跳转目标信息对象
	// console.log(from); // l跳转发起信息对象
	// console.log(next); // 允许通过
	
	// 使用场景： 安全信息判断
	// 如： 验证用户是否登录
	/*
	* 需求:
	* 	1. 跳转至个人中心的时候需要先判断是否登录
	*   2. 如果登录就跳转至 /personal并加载Personal组件
	*   3. 如果未登录跳转至 /login 并加载Login组件
	*   const isLogin = false // 标识用户是否登录
	* */
	const isLogin = false // 标识用户是否登录
	if(to.path === '/personal'){ // 跳转至个人中心
		if(isLogin){ // 登录
      next() // 正常放行
    }else { // 未登录
			// 转至 /login 并加载Login组件
			next('/login')  // 跳转至指定的地址
		}
	}else {
		next()
	}
	
})


router.beforeResolve((to, from, next) => {
  console.log('------ beforeResolve 全局解析守卫------')
	// 路由在此被解析并加载对应的路由组件
  next()
})


router.afterEach((to, from) => {
  console.log('------ afterEach 全局后置钩子------')
})


// 2. 暴露
export default router;
