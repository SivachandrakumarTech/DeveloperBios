import React, { useEffect, useState } from 'react'
import DeveloperBios from './DeveloperBios'

function DisplayBios(){

  const[developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
    .then((response) => response.json())
    .then((data) => setDevelopers(data))
    .catch(error=>console.log(error));
    }, []);


return (
    developers.map(data => <DeveloperBios developer={data} key={data.id} />)
  )
}

export default DisplayBios;

/*
componentDidMount(){
  fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
  .then((response) => response.json()).then((data) => {    
   /* const developerObject = data.map(dev => new Developer(dev.id, dev.firstName, dev.lastName, dev.favoriteLanguage, dev.yearStarted));
   this.setState({developers: data});
  })
  .catch((error=>console.log(error)))
}*/