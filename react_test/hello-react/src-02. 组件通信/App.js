import  React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/home/home'

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
        <Home num={num} getHomeData={this.getHomeData}/>
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
