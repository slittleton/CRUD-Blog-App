import React, { Component } from 'react'
import '../App.css';
import Banner from './layout/Banner';
import Menu from  './layout/Menu';
import Blog from './Blog';

class Blogs extends Component {


  render() {
    return(
      <div>
      <Banner/>
      <div className="main">
        <Menu/>
        <div className="content">
        <Blog/>
        </div>
      </div>
    </div>
    )
  }
}

export default Blogs;

