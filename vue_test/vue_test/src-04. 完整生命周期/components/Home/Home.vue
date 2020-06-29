<template>
  <div>
    <h2>Home 组件</h2>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    mounted(){
      console.log('--- Home mounted ----');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
