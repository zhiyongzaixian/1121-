<template>
	<div id="app">
		<h1>app组件</h1>
    <Home>
      <!--<p>我是往Home组件插入的slot内容</p>-->
      <template v-slot:left>
        <p>我是左护法</p>
      </template>

      <p>我是主公</p>

      <template v-slot:right>
        <p>我是右护法</p>
      </template>

    </Home>
    <Personal></Personal>
  </div>
</template>

<script>
  import Home from './components/Home/Home'
  import Personal from './components/Personal/Personal'
	export default {
	  components: {
      Home,
      Personal, // 同步加载
    },
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-size 36px
    .tabs
      display flex
      .tabItem
        width 50%
        height 80px
        line-height 80px
        text-align center
        border 1px solid #999
        box-sizing border-box


</style>
