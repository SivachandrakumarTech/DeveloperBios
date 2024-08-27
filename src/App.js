import './App.css';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props){
      super(props);  
      
      this.state = {        
        developers:[]                                
      }
    }

componentDidMount(){
  fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
  .then((response) => response.json()).then((data) => {    
   /* const developerObject = data.map(dev => new Developer(dev.id, dev.firstName, dev.lastName, dev.favoriteLanguage, dev.yearStarted));*/
    this.setState({developers: data});
  })
  .catch((error=>console.log(error)))
}

  render() {
    return (                     
    <Router> 
      <div>  
      <Navbar/>       
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/DisplayBios" element={<DisplayBios developers = {this.state.developers}/>}/>  
        <Route path="/AddDeveloper" element={<AddDeveloper/>}/>       
       </Routes>
       </div>
    </Router>                
    )
  }
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React
        </a>
      <DisplayBios/>
      </header>
    </div>
  );
}
  */
