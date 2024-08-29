import React from 'react'
import AuthContext from '../Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const{setIsLoggedIn} = useContext(AuthContext); 

  return (
    <div><button type="button" onClick={()=>{navigate("/"); setIsLoggedIn(true) }}>Click Me!</button></div>    
  );
  
}
export default Login