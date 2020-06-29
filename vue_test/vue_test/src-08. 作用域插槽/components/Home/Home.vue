<template>
  <div>
    <h2>Home 组件</h2>
    <slot name="left" :user="user">firstName --- {{user.firstName}}</slot>
    <slot name="right" :user="user"></slot>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        user: {
          firstName: 'kobe',
          lastName: 'bryant'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
