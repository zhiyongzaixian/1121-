import React from 'react'

class Home extends React.Component {
  componentDidMount(){
  
  }
  render(){
    return (
      <div>
        <h2>Home 组件</h2>
        {/*<p>params参数： {this.props.match.params.a}</p>*/}
        
        <p>props参数： {this.props.num}</p>
        <p>props参数： {this.props.a}</p>
      </div>
    )
  }
}

export default Home;
