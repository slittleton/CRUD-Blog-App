import React from 'react';
import { Link } from 'react-router-dom';
import cblogo from '../../assets/img/cblogo.png';


export default function Banner() {
  return (

    <div className="banner">
      <h1>THE COFFEE BREAK</h1>
      <Link to="/" id="homelink">
        <img id="logo" src={cblogo} alt=""/>
      </Link>
    </div>
  )
}