<template>
  <div>
    <h2>Home 组件</h2>
    <slot name="left"></slot>
    <p>-----------</p>
    <slot>
      我是默认的内容
    </slot>
    <p>-----------</p>
    <slot name="right"></slot>

    <br>
    <br>
    <br>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
