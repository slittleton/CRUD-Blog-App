import React, { Component } from 'react';
import '../assets/css/blogArchive.css';
import EasyHTTP from '../http/EasyHTTP';
import {Consumer} from '../context';
import { Link } from 'react-router-dom'

export default class Blog extends Component {

  deleteBlog = async (blog, dispatch) => {
    dispatch({type:'DELETE_BLOG', payload: blog.id})

    EasyHTTP.delete(`http://localhost:3001/blogs/${blog.id}`)
  }



  render() {

    return(
      <Consumer>
        {(value) => {
            const { blogs, dispatch } = value;
            return(
              <div>
              {blogs ? blogs.map(blog=>{
                return(
                  <div key={blog.id} className="blog-container">
                    <div className="title-date">
                      <h2>{blog.blogTitle}</h2>
                      <p className="date">{blog.blogDate}</p>
                    </div>
                    <div className="text-and-buttons">
                      <div className="blog-body-snippet">
                        <p>{blog.blogText}</p>
                      </div>
                      <div className="edit-del">
                        <Link to={`/updateblog/${blog.id}`} className="edit-link">
                        <i className="edit-icon">edit</i>
                        </Link>
                        <button className="del-btn" onClick={this.deleteBlog.bind(this, blog, dispatch )}>delete</button>
                      </div>
                    </div>
                    <hr/>
                  </div>
                )
              }) : <div>Loading</div>}
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}
