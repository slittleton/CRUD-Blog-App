import React, { Component } from 'react';
import Banner from './layout/Banner';
import {Consumer} from '../context';

class SignIn extends Component {

  render() {

    return(
      <Consumer>
        {(value) => {
          const { signIn, onChange, fieldErr  } = value;
          return(
            <div id="signin-body">
            <Banner/>
            <div className="signin">
              <div className="login-box">
                <form id="login-form">
                  <h2 className="h2-signin">Sign In</h2>
                  <span id="emptyFiledErr">{fieldErr}</span>
                  <input 
                    name="user" 
                    type="text" 
                    onChange={onChange} 
                    className="signin-field" 
                    id="email-s" 
                    placeholder="User Name or Email"
                  />
                  <input 
                    name="pass" 
                    type="text" 
                    onChange={onChange}
                    className="signin-field" 
                    id="password-s" 
                    placeholder="Password"/>
                  <div className="button-container-s">
                    <button 
                      className="btn-s" 
                      type="submit" 
                      id="signin-btn" 
                      onClick={signIn}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          )
        }}
      </Consumer>
    )
  }
}
export default SignIn;