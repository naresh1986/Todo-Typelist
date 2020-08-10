import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App'
import Login from '../login'



class Container extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="main">
        
        <Switch>
            <Route exact path='/home' component={App} />
            <Route exact path="/" component={Login} />
            
        </Switch>
       
        </div>
        </React.Fragment>
      
    )
  }
}

export default Container;
