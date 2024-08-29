import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from  '../Context';

function Navbar() {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);


  return (
    <div>   
        <nav>
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/DisplayBios">DisplayBios</Link>
            </li>
            {
              isLoggedIn
              ?
            <ul> 
            <li>
              <Link to="/AddDeveloper">AddDeveloper</Link>
            </li>             
            <li>
              <Link to="/" onClick={()=> setIsLoggedIn(false)}>Logout</Link>
            </li>
            </ul>
            :
            <li>
              <Link to="/Login">Login</Link>
            </li>
            }            
            </ul>            
        </nav>
   </div>
  )
}

export default Navbar;
