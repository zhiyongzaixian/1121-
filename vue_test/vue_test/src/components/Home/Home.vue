<template>
  <div>
    <h2>Home 组件</h2>

    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    data(){
      return {

      }
    },
    mounted(){
      // console.log(this.$store.state.total.initData);
      const person = {
        name: 'curry',
        age: 32
      }

      this.changePersonArr()
    },
    methods: {
      // ...mapMutations({
      //   changePerson: 'changePersonArr'
      // })
      ...mapMutations(['changePersonArr'])
    },
    computed: {
      ...mapState({
        listArr: state => state.total.personArr
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
