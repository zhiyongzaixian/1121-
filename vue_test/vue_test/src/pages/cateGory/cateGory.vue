<template>
	<div id="cateContainer">
		<h2>cateGory 页面</h2>
		<div class="ContentContainer">
			<!-- 左侧导航区域 -->
			<div class="leftContainer">
				<ul class='navList'>
					<li class='navItem'>
						<!--<router-link :to='`/cateGory/right?id=${id}&a=123`'>-->
							<!--居家生活-->
						<!--</router-link>-->
						<router-link :to='`/cateGory/right?id=${id}&a=123`'>
							居家生活
						</router-link>
					</li>
					<li class='navItem'>
						<router-link to='/cateGory/right?id=222'>
							美食酒水
						</router-link>

					</li>
					<li class='navItem'>
						<router-link to='/cateGory/right?id=333'>
							个护清洁
						</router-link>

					</li>
					<li class='navItem'>
						----params传参-----
					</li>
					<li class='navItem'>
						<router-link to='/cateGory/right/111'>
							运动旅行
						</router-link>
					</li>
					<li class='navItem'>
						<router-link to='/cateGory/right/222'>
							数码家电
						</router-link>
					</li>
					<li class='navItem'>
						居家生活
					</li>
					<li class='navItem'>
						美食酒水
					</li>
					<li class='navItem'>
						个护清洁
					</li>
					<li class='navItem'>
						运动旅行
					</li>
					<li class='navItem'>
						数码家电
					</li>

				</ul>
			</div>
			<!-- 右侧内容区 -->
			<div class="rightContainer">
				<!--  路由组件 -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>

	/*
		需求：
			1. 点击左侧导航， 左侧导航应该为路由链接
			2. 点击不同的路由链接请求的均为右侧的路由组件
			3. 右侧路由组件内容根据点击路由链接的参数决定
		思考：
			1. 左侧的导航路由链接是几级路由？
			2. 右侧的组件需要设计几个？
			3. 如何路由传参？
			4. query params
				1. query
					- 注册路由的时候不需要干什么
					- 请求的路由的时候直接在路由路径后拼接即可 如： 路由路径？key=value&key2=value2&key3=value3
					- query支持传多个参数
					- 使用场景： 多个参数
				2. params
					- 注册路由的时候需要声明占位符， 如： path/:id
					- 请求路由的时候直接在路由路径后携带参数， 如： 路由路径/params参数
					- params只能传一个参数
					- 适用场景： 只有一个参数，通常该参数是一个id标识
	 */
	export default {
		data(){
			return {
				id: 111
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#cateContainer
		h2
			text-align center
			height 80px
			line-height 80px
			font-size 28px
		.ContentContainer
			display flex
			height calc(100vh - 180px)
			border-top 1px solid #eee
			.leftContainer
				width 20%
				border-right 1px solid #eee
				box-sizing border-box
				.navList
					.navItem
						font-size 24px
						text-align center
						line-height 80px
						height 80px
						a
							font-size 24px
							text-align center
							line-height 80px
							height 80px
			.rightContainer
				width 80%
</style>
