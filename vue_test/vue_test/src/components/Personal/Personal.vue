<template>
  <div>
    <h2>Personal 组件</h2>
    <ul>
      <li v-for="(item, index) in listArr" :key="index">{{item.name}} --- {{item.age}}</li>
    </ul>
  </div>
</template>

<script>

  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {

    computed: {
      ...mapState({
        listArr: state => state.total.personArr
      })
    },
    beforeMount(){
      //2. 读取sessionStorage中保存的数据
      let result = sessionStorage.getItem('listArr')

      // 3. 更新Vuex中的状态数据
      result && this.changePersonArr(JSON.parse(result))
    },
    mounted(){

      // 页面即将刷新之前执行
      window.addEventListener('beforeunload', () => {
        // sessionStorage.setItem('test', 123)
        // 1. 将Vuex映射的数据保存至sessionStorage
        sessionStorage.setItem('listArr', JSON.stringify(this.listArr))
      })
    },
    methods: {
      ...mapMutations(['changePersonArr'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
