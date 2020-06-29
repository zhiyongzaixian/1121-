<template>
  <div>
    <h2>Personal 组件</h2>
  </div>
</template>

<script>
  export default {
    mounted(){
      // 首次加载的时候只执行一次
      console.log('--- Personal mounted ----');
    },
    activated(){
      // 使用keep-alive缓存的组件 被激活的时候
      console.log('-------- Personal activated -------');
      // 作用： 可以用来取代之前的mounted，通常用于发送数据要求比较及时的请求
    },
    deactivated(){
      // 使用keep-alive缓存的组件 被停用的时候
      console.log('-------- Personal deactivated -------');
      // 用来取代destroyed 用来做一些收尾工作
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
