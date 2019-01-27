import React, { Component } from 'react';
import {Consumer} from '../../context';

class DisplayUser extends Component {

  render() {

    return (
      <Consumer>
        {
          ()=>{
                return(
            <div>
              <div className="user">{this.props.currentUser}'s Blog</div>
              <hr/>
            </div>
            )
          }
        }
      </Consumer>

    )
  }
}

export default DisplayUser;