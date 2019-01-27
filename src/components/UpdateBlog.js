import React, { Component } from 'react';
import '../App.css';
import Banner from './layout/Banner';
import Menu from  './layout/Menu';
import EasyHTTP from '../http/EasyHTTP';
import {Consumer} from '../context';


class UpdateBlog extends Component {
state ={
  title: '',
  text: '',
  date: '',
  user: 1,
  id: '',
  submitMsg: null,
}

  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await EasyHTTP.get(`http://localhost:3001/blogs/${id}`);

    this.setState({
      title: response.blogTitle,
      text: response.blogText,
      date: response.blogDate,
      user: response.blogUser,
      id: response.id,
    })
  }

  onChange = (e)=>{this.setState({[e.target.name]: e.target.value})}

  updateBlog = async (dispatch, e) => {


    const response = await EasyHTTP.patch(`http://localhost:3001/blogs/${this.state.id}`, {
      "blogText": this.state.text,
      "blogTitle": this.state.title,
    })

    dispatch({type: 'UPDATE_BLOG', payload: response}) 


    
    window.location=("/");
    this.setState({submitMsg: 'Blog Submitted'})

    setTimeout(()=>{
      this.setState({submitMsg: null});
      window.location=("/");
    }, 2000)

    e.preventDefault();
  }

  render() {
    const { title, text, id } = this.state;
    console.log(title, text, id)

    return(
      <Consumer>
        {value=>{
          const {dispatch} = value;
          return(
            <div>
              <Banner/>
              <div className="main">
                <Menu/>
                <div className="content">
                  <div className="new-blog-title">
                    <h2>Update Blog</h2>
                  </div>
                  <div className="submit-message">{this.state.submitMsg}</div>
                  <div className="blog-container">
                      <form className="new-blog-form">
                      
                        <div className="blog-title-container">
                            <input 
                            name="title"
                            type="text" 
                            className="title" 
                            value={title}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="blog-text-container">
                            <textarea  
                              name="text"
                              value={text}
                              className="blog-text" 
                              id={id} 
                              cols="50" 
                              rows="20"
                              onChange={this.onChange}
                            ></textarea>
                        </div>
                        <div  className="blog-btn-wrapper">
                          <button 
                            className="create-blog-btn" 
                            type="submit"
                            onClick={this.updateBlog.bind(this, dispatch)}
                            >Update</button>
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
export default UpdateBlog;