<template>
	<div id="footerContainer">

    <!--params参数 -->
		<div class="footerItem " :class="{activeClass: $route.path === '/home'}">
			<!-- 静态路由 -->
			<!--<router-link to='/home/123'>首页</router-link>-->

			<!-- 命名路由 -->
			<router-link :to='{name: "Home", params: {id: 234, xxx: 456}}'>首页</router-link>

      <!-- 不能使用path + params-->
			<!--<router-link :to='{path: "/home", params: {id: 234, xxx: 456}}'>首页</router-link>-->
		</div>




		<div class="footerItem" :class="{activeClass: $route.path === '/cateGory'}">
			<router-link to='/cateGory'>分类</router-link>
		</div>

    <!-- query参数-->
		<div class="footerItem" :class="{activeClass: $route.path === '/cart'}">
			<!--<router-link to='/cart'>购物车</router-link>-->
      <!-- query + name || query + path 都可以-->
			<!--<router-link :to='{path: "/cart", query: {a: 123, b: 234,c: 456}}'>购物车</router-link>-->
			<router-link :to='{name: "Cart", query: {a: 123, b: 234,c: 456}}'>购物车</router-link>
		</div>






		<div class="footerItem" :class="{activeClass: $route.path === '/personal'}">
			<router-link to='/personal'>个人中心</router-link>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#footerContainer
		position fixed
		left 0
		bottom 0
		width 100%
		display flex
		border-top 1px solid #999
		.footerItem
			width 25%
			height 100px
			text-align center
			line-height 100px
			font-size 36px
			&.activeClass a
				color red
</style>
