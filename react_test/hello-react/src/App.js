import  React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom'
import Home from './components/home/home'
import Personal from './components/personal/personal'
import Test from './components/test/test'

//  定义组件方式： 1) class 2) 工厂函数
class App extends React.Component {
  state = {
    num: 1,
    listArr: null
  }
  // 类的构造方法： 用来生成实例，为实例添加属性或者方法 等同于构造函数
  constructor(props){
    super(props)
   
  }
  
  getHomeData(homeData){
    console.log('子组件传递给父组件的数据： ', homeData);
  }
  
  componentDidMount(){
    // 发请求获取数据
    setTimeout(() => {
      const listArr = [
        {
          name: 'kobe',
          age: 43
        },
        {
          name: 'wade',
          age: 38
        },
        {
          name: 'curry',
          age: 33
        }
      ];
      
      this.setState({
        listArr
      })
    }, 2000)
  }
 
  render(){
    let { num, listArr } = this.state;
    const liArr = listArr?listArr.map((item, index) => <li key={index}>{item.name} --- {item.age}</li>):[];
    return (
      <div>
        <h1>App 组件</h1>
  
        <p>num: {num}</p>
        
        {/*<ul>
          {
            listArr && listArr.map((item, index) => <li key={index}>{item.name} --- {item.age}</li>)
          }
        </ul>*/}
        <ul>
          { liArr }
        </ul>
        <br/>
        <br/>
        <br/>
  
        {/*路由链接*/}
        {/*params链接测试*/}
        {/*<Link to='/home/123?b=222&c=333'>Home 链接</Link>*/}
        
        
        <Link to='/home'>Home 链接</Link>
        <Link to='/personal'>Personal 链接</Link>
        
        <br/>
        {/*注册路由Route === Vue注册路由 + router-view*/}
        
        {/*
        
          react-router-dom
          1. 默认是模糊匹配, 如果想要精准匹配的话，需要给Route标签添加exact属性
          2. 默认情况下每次路由匹配会匹配所有注册的路由
          3. 为了解决 匹配所有注册的路由性能的问题，可以使用Switch(一旦匹配到对应的路由就停止继续匹配)进行性能优化
          
          
          路由传参：
            1. params可以用： this.props.match.params
            2. query不能直接使用： this.props.location中， 如：？a=1&b=2
            3. props： <Router path='路由路径' render={() => 路由组件} 通过标签属性的形式向路由组件导入数据
        */}
        {/*<Route path='/' component={Test} exact></Route>*/}
        <Switch>
          {/*params参数*/}
          {/*<Route path='/home/:a' component={Home}></Route>*/}
          
          {/*props参数*/}
          <Route path='/home' render={() => <Home num={123} a='abc'/>}></Route>
  
          <Route path='/personal' component={Personal}></Route>
          <Redirect to='/home/1'></Redirect>
        </Switch>
      
        
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
