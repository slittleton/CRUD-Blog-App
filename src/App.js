import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import NewBlog from './components/NewBlog';
import Blogs from './components/Blogs';
import Settings from './components/Settings';
import SignIn from './components/SignIn';
import UpdateBlog from './components/UpdateBlog';

import { Provider} from './context';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route exact path="/newblog" component={NewBlog}/>
            <Route exact path="/blogs" component={Blogs}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/updateblog/:id" component={UpdateBlog} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
