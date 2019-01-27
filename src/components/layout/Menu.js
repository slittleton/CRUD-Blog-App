import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DisplayUser from './DisplayUser';

export default class Menu extends Component {
  state={
    currentUser: "No User Yet"
  }
  async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  componentDidMount = async() =>{
    this.get('http://localhost:3001/users/1')
    .then(response=>{
      this.setState({
        currentUser: response.userName
      })
    })
  }


  render() {
    return (
      <div className="menu">

      <div className="img-centering">
        <div className="profile-pic">
        </div>
      </div>
      <DisplayUser currentUser={this.state.currentUser} />
      <div >
        <div className="links-area">
          <Link to="/" className="menu-link ">Home</Link>
        </div>

        <div className="links-area">
          <Link to="/blogs" className="menu-link ">Archive</Link>
        </div>

        <div className="links-area">
          <Link to="/newblog" className="menu-link ">Create Blog</Link>
        </div>

        <div className="links-area">
          <Link to="/settings" className="menu-link ">Settings</Link>
        </div>

        <div className="links-area">
          <Link to="/signin" className="menu-link ">Sign In</Link>
        </div>
      </div>


  </div>
    )
  }
}
