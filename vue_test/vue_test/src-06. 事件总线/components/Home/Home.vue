<template>
  <div>
    <h2>Home 组件</h2>
    <button @click="handleClick">触发自定义事件</button>
  </div>
</template>

<script>
  export default {
    props: ['getHomeData'],
    mounted(){
      console.log('--- Home mounted ----');
      console.log(this);
      this.getHomeData('home传递的数据')
      this.$Bus.$emit('myEventBus', 'home组件传递的数据')
    },
    methods:  {
      handleClick(){
        this.$emit('myEvent', 'home组件的数据')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
