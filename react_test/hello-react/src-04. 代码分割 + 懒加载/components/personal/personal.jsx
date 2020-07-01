import  React from 'react'
import {Route, Link} from 'react-router-dom'
import PersonalChild from './personalChild'

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>Personal 组件</h2>
        <Link to='/personal/personalChild'>personalChild 链接</Link>
        <Route path='/personal/personalChild' component={PersonalChild}></Route>
      </div>
    );
  }
}

export default Personal;
