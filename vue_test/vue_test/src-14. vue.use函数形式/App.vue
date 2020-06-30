<template>
	<div id="app">
		<h1>App 组件</h1>
		<Test></Test>
	</div>
</template>

<script>

	export default {
		mounted(){
		  this.play('我是一个弹窗')
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
	*
		margin 0
		padding 0


</style>
