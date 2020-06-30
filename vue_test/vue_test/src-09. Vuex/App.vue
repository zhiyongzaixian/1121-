<template>
	<div id="app">
		<h1>app组件</h1>
    <div>
      <router-link to="/home">Home链接</router-link>  &nbsp;&nbsp;
      <router-link to="/personal">Personal链接</router-link>
    </div>
    <br>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home/Home'
  import Personal from './components/Personal/Personal'
	export default {
	  // components: {
    //   Home,
    //   Personal, // 同步加载
    // },
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
