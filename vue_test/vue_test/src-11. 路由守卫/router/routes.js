// 注册路由
/*
	语法：
	{
		path: '路由路径',
		component: '路由组件'
	}
 */
import Index from  '../pages/index/index.vue'
import Cart from  '../pages/cart/cart.vue'
import Personal from  '../pages/personal/personal.vue'
import CateGory from  '../pages/cateGory/cateGory.vue'
import Login from  '../pages/login/login.vue'
import CateRight from '../pages/cateGory/cateRight/cateRight.vue'

/*
	元信息：
		1. 信息： 用来描述一个指定的事物， 人等
		2. 元信息： 用来描述信息本身
		3. 例子：
			- 信息： 他是一个NBA球星，他的名字叫curry，年龄33
			- 元信息： 该信息是关于一个NBA球星的
 
 */

export default [
	{
		path: '/home',
		component: Index,
		name: 'Home',
		meta: { // 用来描述当前路由自身的
			isShowFooter: true // 在当前的路由下显示底部footer
		},
	},
	{
		path: '/cateGory',
		component: CateGory,
		meta: { // 用来描述当前路由自身的
			isShowFooter: true // 在当前的路由下显示底部footer
		},
		children: [
			{
				// path: '/cateGory/right', // 方式一
				path: 'right/:xxx', // 方式二： 注意，不能加根路径
				component: CateRight
			}
		]
	},
	{
		path: '/cart',
		component: Cart,
		name: 'Cart',
		meta: { // 用来描述当前路由自身的
			isShowFooter: true // 在当前的路由下显示底部footer
		}
	},
	// {
	// 	path: '/personal',
	// 	component: Personal,
	// 	meta: { // 用来描述当前路由自身的
	// 		isShowFooter: false // 在当前的路由下不显示底部footer
	// 	}
	// },
 
	// 命名视图
  {
    path: '/personal',
    components: {
    	default: Personal,
			a: Cart
		},
    meta: { // 用来描述当前路由自身的
      isShowFooter: false // 在当前的路由下不显示底部footer
    }
  },
	// params参数
	// {
	// 	path: '/',
	// 	redirect: '/home/1'
	// }
 
	{
		path:'/login',
		component: Login
	},
	
	// query参数
  {
    path: '/',
    redirect: '/home'
  }
]
