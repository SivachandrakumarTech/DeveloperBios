import '../Styles/App.css';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../Context';
import Login from './Login';

function App() {

  const{isLoggedIn} = useContext(AuthContext)
  
    return (                     
    <Router> 
      <div>  
      <Navbar/>       
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/DisplayBios" element={<DisplayBios/>}/>    
        {
          isLoggedIn
          ?
          <Route path="/AddDeveloper" element={<AddDeveloper/>}/>  
          :
          <></>
        }            
        <Route path='/login' element={<Login/>}/>              
       </Routes>
       </div>
    </Router>                
    );
}

export default App;

/*
 <Route path="/DisplayBios" element={<DisplayBios developers = {this.state.developers}/>}/>    
 */