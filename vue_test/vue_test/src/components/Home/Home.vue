<template>
  <div>
    <h2>Home 组件</h2>
    <ul>
      <li v-for="(item, index) in listArr" :key="index">{{item.name}} --- {{item.age}}</li>
    </ul>
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
      // 发请求拿数据
      setTimeout(() => {
        const personArr = [
          {
            name:'kobe',
            age: 42
          },
          {
            name:'wade',
            age: 38
          },
          {
            name: 'curry',
            age: 32
          }
        ]
        this.changePersonArr(personArr)
      }, 1000)
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
