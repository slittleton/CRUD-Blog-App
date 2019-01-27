import React, { Component } from 'react'
import '../App.css';
import Banner from './layout/Banner';
import Menu from  './layout/Menu';
import {Consumer} from '../context';


class Settings extends Component {

  render() {

    return (
      <Consumer>
        {value => {
          const { setNewPass, setNewUser, onChange, userNameErr, userPassErr } = value;
          return (
            <div>
        <Banner/>
        <div className="main">
          <Menu/>
          <div className="content">
            <h2 className="top-setting-title">Settings</h2>
            <form className="settings-form">
              <div>
                <hr/>
                <h3 className="setting-title">Change Password</h3>
              <div className="settings-field">
                <input 
                  name="oldPass"
                  type="text" 
                  id="old-password" 
                  className="setting" 
                  placeholder="Enter Old Password"
                  onChange={onChange}
                  />
              </div>
              <div className="settings-field">
                <input 
                  name="newPass"
                  type="text" 
                  id="new-password" 
                  className="setting" 
                  placeholder="Enter New Password"
                  onChange={onChange}
                />
                <button className="settings-btn" type="submit" onClick={setNewPass}>Submit</button>
                <div className="error-message">{userPassErr}</div>  
              </div>
              
              <hr/>
              
              <h3 className="setting-title">New Username</h3>
              <div className="settings-field">
                <input 
                  name="newUser"
                  type="text" 
                  id="new-username" 
                  className="setting" 
                  placeholder="Enter New Username"
                  onChange={onChange}
                />
                <button className="settings-btn" type="submit" onClick={setNewUser}>Submit</button>
                <div className="error-message">{userNameErr}</div>  
              </div>
              </div>
              <hr/>
              <div>
                
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

export default Settings;