import React, { Component } from 'react'
import '../App.css';
import Banner from './layout/Banner';
import Menu from  './layout/Menu';
import EasyHTTP from '../http/EasyHTTP';
import {Consumer} from '../context';

class NewBlog extends Component {

  state={
    title: null,
    text: null,
    submitMsg: null
  }
  // set state to input values
  onChange = (e)=>{this.setState({[e.target.name]: e.target.value})}

 
  // add blog to database -> send user to home
  publishBlog = async (dispatch, e) => {
    e.preventDefault();

    let time = new Date();
    let newPost = {
      blogDate: `${Number(time.getMonth())+1}-${time.getDate()}-${time.getFullYear()}`,
      blogUser: 1,
      blogText: this.state.text,
      blogTitle: this.state.title,
    }

    const response = EasyHTTP.post("http://localhost:3001/blogs", newPost);

    dispatch({type: 'ADD_BLOG', payload: response}) 
    // payload should be response because response contains id from server
    
    // Let User know Blog was submitted and go to home
    this.setState({submitMsg: 'Blog Submitted'})
    setTimeout(()=>{
      this.setState({submitMsg: null});
      window.location=("/");
    }, 2000)
    

  }


  render() {
    return(
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div>
              <Banner/>
              <div className="main">
                <Menu/>
                <div className="content">
                  <div className="new-blog-title">
                    <h2>Create New Blog</h2>
                  </div>
                  <div className="submitted">{this.state.submitMsg}</div>
                  <div className="blog-container">
                      <form className="new-blog-form">
                        <div className="blog-title-container">
                            <input 
                            name="title"
                            type="text" 
                            className="title" 
                            placeholder="Blog Title"
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="blog-text-container">
                            <textarea  
                              name="text"
                              placeholder="Blog Text" 
                              className="blog-text" 
                              id="blogtext" 
                              cols="50" 
                              rows="20"
                              onChange={this.onChange}
                            ></textarea>
                        </div>
                        <div  className="blog-btn-wrapper">
                          <button 
                            className="create-blog-btn" 
                            type="submit"
                            onClick={this.publishBlog.bind(this, dispatch)}
                          >
                            Publish
                          </button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default NewBlog;