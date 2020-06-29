<template>
	<div id="app">
		<h1>app组件</h1>
    <!-- tab导航 -->
    <div class="tabs">
      <div class="tabItem" @click="changeTab('Home')">
        Home 链接
      </div>
      <div class="tabItem" @click="changeTab('Personal')">
        Personal 链接
      </div>
    </div>
	  <!-- 内容区 -->
    <keep-alive :exclude="['Home']">
      <component :is="comName" :msg="123"></component>
    </keep-alive>
    <!--<Home :msg="123"></Home>-->

    <ErrorComponent :getStr="getStr"></ErrorComponent>
  </div>
</template>

<script>
  import Home from './components/Home/Home'
  import Personal from './components/Personal/Personal'
  import ErrorComponent from './components/ErrorComponent/ErrorComponent'
	export default {
    // 异步组件示例
    // components: {
    //   'my-component': () => import('./my-async-component')
    // }
	  components: {
      Home,
      Personal, // 同步加载
      // Personal: () => import('./components/Personal/Personal'),    // 异步加载

      ErrorComponent

    },
    data(){
	    return {
	      comName: 'Home'
      }
    },
    methods: {
      changeTab(comName){
        this.comName = comName
      },
      getStr(str){
        console.log(str);
      }
    },
    errorCaptured(errObj, errVM, errMsg){
	    console.log('----App  errorCaptured -----');
	    // console.log(errObj.message);
	    // console.log(errObj);
	    // errVM: 错误的组件实例，
	    // console.log(errVM);
	    // this === 子组件errorComponent
      errVM.getStr(errVM.str)
	    // console.log(errMsg);

      // return false // 阻止错误继续向上传播
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
