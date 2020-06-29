<template>
	<div id="app">
		<h1>app组件</h1>
    <Home>
      <!-- 作用域插槽的基本使用-->
      <!--<template v-slot:right="mySlotProps">-->
        <!--<p>lastName &#45;&#45;&#45;&#45; {{mySlotProps.user.lastName}}</p>-->
      <!--</template>-->

      <!-- 解构props-->
      <template v-slot:right="{user}">
        <p>lastName ---- {{user.lastName}}</p>
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
