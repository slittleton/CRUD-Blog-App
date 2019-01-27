import React, { Component } from 'react'
import '../App.css';
import Banner from './layout/Banner';
import Menu from  './layout/Menu';
import {Consumer} from '../context';

class Home extends Component {
  render() {
    return(
      <Consumer>
        {(value)=> {
          const { blogs } = value;
          return(
            <div>
            <Banner/>
            <div className="main">
              <Menu/>
              <div className="content">
                { blogs ? blogs.map(blog=>{
                  return(
                    <div className="blog-container" key={blog.id}>
                      <div className="title-date">
                        <h2>{blog.blogTitle}</h2>
                        <p className="date">{blog.blogDate}</p>
                      </div>
                      <div className="blog-body-snippet">
                        <p>{blog.blogText}</p>
                      </div>
                      <hr/>
                    </div>
                  )
                }) : 
                  <div>  
                  LOADING
                  </div>
                }
              </div>
            </div>
          </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Home;