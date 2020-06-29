<template>
	<div id="footerContainer">
		<div class="footerItem " :class="{activeClass: $route.path === '/home'}">
			<router-link to='/home'>首页</router-link>
		</div>
		<div class="footerItem" :class="{activeClass: $route.path === '/cateGory'}">
			<router-link to='/cateGory'>分类</router-link>
		</div>
		<div class="footerItem" :class="{activeClass: $route.path === '/cart'}">
			<router-link to='/cart'>购物车</router-link>
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
