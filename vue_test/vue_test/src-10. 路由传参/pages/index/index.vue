<template>
	<div>
		<h2>index页面</h2>
		<p>id --- {{$route.params.id}}</p>
		<p>xxx --- {{$route.params.xxx}}</p>

		<p>--------- props接收params参数 -----------</p>
		<p>{{id}}</p>
		<p>{{xxx}}</p>
		<p>{{a}}</p>
		<p>{{b}}</p>
	</div>
</template>

<script>
	export default {
		props:  ['id', 'xxx', 'a', 'b']
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
