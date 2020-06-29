<template>
  <div>
    <h2>ErrorComponent 组件</h2>
  </div>
</template>

<script>
  export default {
    props:['getStr'],
    data(){
      return {
        str: '子组件ErrorComponent的数据'
      }
    },
    mounted(){
      console.log(aaa); // 报错
      this.getStr(this.str)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
