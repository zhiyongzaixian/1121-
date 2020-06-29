<template>
	<div id="home">
		<h1>app组件</h1>
    <p>{{msg}}</p>
    <p>{{num}}</p>
	</div>
</template>

<script>
	export default {
	  data(){
	    return {
	      msg: 'app初始化的数据',
        num: 1
      }
    },
		beforeCreate(){
		  console.log('--------- beforeCreate -------');
		  // 组件实例初始化之后并初始化了events，lifeCycle,
		  // 没有实现数据劫持，代理
		  console.log(this.msg); // undefined
      // 如何在beforeCreate中获取data中的数据
      // console.log(this.data);  // undefined
      // console.log(this.data.msg); // 不靠谱，获取不到
      // 初始化实例对象的时候会将当前组件的暴露的配置对象中的所有属性放置在实例的$options选项中
      console.log(this.$options.data().msg);
      console.log(this.$el);
		},
    created(){
      console.log('--------- created -------');
      // 实现了数据劫持，代理
      console.log(this.msg); // 有值
      console.log(this.$el);

    },
    beforeMount(){
      console.log('--------- beforeMount 组件即将挂载 -------');
      console.log(this.$el);

    },
    mounted(){
      console.log('--------- mounted 组件挂载完毕 -------');
      // $el在mounted中可见
      // $el： 当前组件虚拟DOM对象编译之后的真实DOM对象片段
      console.log(this.$el);

      // this.num // 响应式属性
      // this.a = 123;// 非响应式属性
      this.intervalId = setInterval(() => {
        console.log('--- setInterval ---');
        this.num++
      }, 1000)

      setTimeout(() =>{
        // 销毁组件
        this.$destroy()
      }, 3000)

    },
    beforeUpdate(){
      console.log('--------- beforeUpdate -------');
    },
    updated(){
      console.log('--------- updated -------');
    },
    beforeDestroy(){
      console.log('--------- beforeDestroy 组件即将被销毁-------');
      // 做一些收尾工作： 清除定时器，释放内存
      clearInterval(this.intervalId)
      // 销毁： 1) 销毁当前组件的实例对象 2) 切断和页面的关联，页面中的数据保存的是组件销毁之前的状态数据
    },
    destroyed(){
      console.log('--------- destroyed 组件已销毁-------');
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
	*
		margin 0
		padding 0


</style>
