import React, { Component } from 'react'
import vattenfall from '../../assets/Images/vattenfall.jpg'
import completeLogo from '../../assets/Images/complete-white-logo.png'


class LoginImg extends Component {
  render() {
    return(
      <div className="login-img">
        <img src={vattenfall} alt="vattenfall"/>
        <img src={completeLogo} alt="complete-logo"/>
      </div>
    )
  }
}

export default LoginImg;