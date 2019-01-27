import React, { Component } from 'react';
import EasyHTTP from './http/EasyHTTP';


const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_BLOG':
    return {
      ...state,
      blogs: state.blogs.filter(blog=> blog.id !== action.payload)
    };
    case 'ADD_BLOG':
    return{
      ...state,
      blogs: [...state.blogs, action.payload]
    };
    case 'UPDATE_BLOG':
    return{
      ...state,
      blogs: state.blogs.map(blog=>
        blog.id === action.payload.id ?
        (blog = action.payload) : blog)
    };
    default: return state;
  }
}


export class Provider extends Component {
  state={
    user: null,
    pass: null,
    blogs: null,
    dispatch: action => {
      this.setState(state => reducer (state, action))
    },
    newUser: null,
    newPass: null,
    oldPass: null,
    userNameErr: null,
    userPassErr: null,
  }

  onChange = (e)=>{this.setState({[e.target.name]: e.target.value})}

  setNewPass = async (e) =>{
  
    if(this.state.newPass && this.state.oldPass){
      await EasyHTTP.get('http://localhost:3001/users/1')
      .then(response=>{
        if (JSON.stringify(this.state.oldPass) === JSON.stringify(response.pass)){
          EasyHTTP.patch('http://localhost:3001/users/1',{ 'pass': this.state.newPass});
          this.setState({oldPass: '', newPass: ''});
          console.log(this.state, 'asdf')
        }else{
          this.passErrorMessage('Old Password does not match')
        }
      })
    }else{
      this.passErrorMessage('Both fields must be filled')
      e.preventDefault();
    }
  }


  setNewUser = async (e) => {
    if(this.state.newUser !== null){
      await EasyHTTP.patch('http://localhost:3001/users/1', {
        'userName': this.state.newUser 
      })
        .then( ()=> this.setState({user: this.state.newUser}))
    }else{
      this.userErrorMessage('This field must not be empty');
    }
    e.preventDefault()
  }

  userErrorMessage(errMsg){
    this.setState({userNameErr: errMsg});
    setTimeout(()=> this.setState({userNameErr: null}), 3000)
  }
  passErrorMessage(errMsg){
    this.setState({userPassErr: errMsg});
    setTimeout(()=> this.setState({userPassErr: null}), 3000)
  }

  componentDidMount(){
  EasyHTTP.get("http://localhost:3001/db")
    .then(response=>this.setState({blogs: response.blogs}))
  }

  signIn = async (e) =>{
    if(this.state.user !== null && this.state.pass !== null){

      EasyHTTP.patch("http://localhost:3001/users/1", {
        "userName": this.state.user,
        "pass": this.state.pass,
      });
      window.location=("/");
    }else{
      console.log('empty field')
    } 
    e.preventDefault();
  }


  render(){

    return(
      <Context.Provider value={{
        blogs: this.state.blogs,
        signIn: this.signIn,
        dispatch: this.state.dispatch,
        onChange: this.onChange,
        setNewUser: this.setNewUser,
        setNewPass: this.setNewPass,
        errMsg: this.state.errMsg,
        userNameErr: this.state.userNameErr,
        userPassErr: this.state.userPassErr
      }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;