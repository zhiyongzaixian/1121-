<template>
	<div>
		<h2>cart 页面</h2>
		<p>{{$route.query.a}}</p>
		<p>{{$route.query.b}}</p>
		<p>{{$route.query.c}}</p>
	</div>
</template>

<script>
	export default {
		mounted(){
		  console.log(this.$router);
		  console.log(this.$route);
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
