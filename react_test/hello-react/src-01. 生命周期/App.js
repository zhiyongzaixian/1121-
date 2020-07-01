import  React from 'react'
import ReactDOM from 'react-dom'

//  定义组件方式： 1) class 2) 工厂函数
class App extends React.Component {
  state = {
    num: 1
  }
  // 类的构造方法： 用来生成实例，为实例添加属性或者方法 等同于构造函数
  constructor(props){
    super(props)
   
  }
  
  componentWillMount(){
    console.log('-----componentWillMount 组件将要挂载 -----');
    // debugger
  }
  componentDidMount(){
    console.log('-----componentDidMount 组件挂载完毕 -----');
    // 通常用于发送请求，开启定时器等操作
    // 修改状态数据: 1)异步修改(在自身的钩子函数中)  2) 同步修改(非自身的钩子函数中)
    // this.setState({
    //   num: 2
    // })
    // console.log(this.state.num); // 1
    
    // setTimeout(() => {
    //   this.setState({
    //     num: 2
    //   })
    //   console.log(this.state.num); // 2
    // }, 1000)
    
    this.intervalId = setInterval(() => {
      console.log('setInterval');
      this.setState({
        num: ++this.state.num
      })
    }, 1000)
    
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }, 4000)
  }
  componentWillUpdate(){
    console.log('-----componentWillUpdate 组件将要更新 -----');
  
  }
  componentDidUpdate(){
    console.log('-----componentDidUpdate 组件更新完毕 -----');
  
  }
  componentWillUnmount(){
    console.log('-----componentWillUnmount 组件将要卸载 -----');
    clearInterval(this.intervalId)
    
    
    /*
    * 组件卸载：：
    *   Vue:
    *     1. 销毁组件的实例
    *     2. 切断实例和页面的管理
    *     3. 页面还在，页面上的数据组件实例销毁之前保留的数据
    *   React:
    *     1. 直接将之前插入到页面的节点直接从页面删除
    * */
  }
  render(){
    let { num } = this.state;
    return (
      <div>
        <h1>App 组件</h1>
        <p>num: {num}</p>
      </div>
    )
  }
}


export default App;

// function Person(name,  age){
//   this.name = name;
//   this.age = age;
// }
//
//
// let person = new Person('abc', 132);
