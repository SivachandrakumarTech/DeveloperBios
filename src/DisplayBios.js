import React from 'react'
import DeveloperBios from './DeveloperBios'


function DisplayBios(props){
  return (
    props.developers.map(dev => <DeveloperBios developer={dev} key={dev.id} />))
}

export default DisplayBios;