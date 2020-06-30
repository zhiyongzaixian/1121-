<template>
	<div id="app">
		<!-- 路由容器 -->
		<router-view></router-view>
		<!-- 命名视图测试 -->
		<router-view name="a"></router-view>
		<Footer v-if='$route.meta.isShowFooter'></Footer>
	</div>
</template>

<script>
	import axios from 'axios'
	import Footer from './components/footer/footer.vue'
	export default {
		components: {
			Footer
		},
		data(){
			return {

			}
		},
		mounted() {
			// 发送请求
			axios.create({
				// baseUrl: '/api'
			})
			const wangyiUrl = '/api'
			axios.get(wangyiUrl + '/xhr/search/searchAutoComplete.json', {
				params: {
					keywordPrefix: 'a'
				}
			})
			.then((res) => {
				console.log(res)
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
	*
		margin 0
		padding 0


</style>
