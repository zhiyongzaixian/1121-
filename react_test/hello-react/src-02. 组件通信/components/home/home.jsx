import React from 'react'

class Home extends React.Component {
  componentDidMount(){
    this.props.getHomeData('子组件Home的数据')
  }
  render(){
    return (
      <div>
        <h2>Home 组件</h2>
        <p>父组件传递过来的数据： {this.props.num}</p>
      </div>
    )
  }
}

export default Home;
