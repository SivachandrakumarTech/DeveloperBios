import React from 'react'
import '../Styles/Home.css';
import logo from '../logo.svg'

function Home () {
  return (
    (
        <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />                       
        </header>
      </div>
      )
  );
}

export default Home;