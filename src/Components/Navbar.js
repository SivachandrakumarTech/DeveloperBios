import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>   
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/DisplayBios">DisplayBios</Link></li>
            <li><Link to="/AddDeveloper">AddDeveloper</Link></li>
            </ul>            
        </nav>
   </div>
  )
}

export default Navbar;
