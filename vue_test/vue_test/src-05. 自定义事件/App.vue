<template>
	<div id="app">
		<h1>app组件</h1>
    <Home :getHomeData="getHomeData" ref="home"></Home>
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
    methods: {
	    getHomeData(homeData){
	      console.log('home子组件传递过来的数据： ',  homeData);
      }
    },
    // beforeMount(){
    //   console.log('app beforeMount');
    //   // 获取不到refs对应的dom节点
    //   console.log(this.$refs.home);
    //   this.$refs.home.$on('myEvent', () => {
    //     console.log(' 父组件$on绑定的事件');
    //   })
    // },
    mounted(){
	    console.log('app mounted');
      this.$refs.home.$on('myEvent', (msg) => {
        console.log(' 父组件$on绑定的事件', msg);
      })
    }
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
