import React from 'react'
import PropTyes from 'prop-types'
import Developer from '../Model/Developer'


function DeveloperBios(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">               
                <p className="card-text">
                    <span className="bold">{props.developer.firstName}</span>
                </p>
                <p className="card-text">
                    <span className="bold">{props.developer.lastName}</span>
                </p>
                <p className="card-text">
                    <span className="bold">{props.developer.favoriteLanguage}</span>
                </p>
                <p className="card-text">
                    <span className="bold">{props.developer.yearStarted} </span>              
                </p>              
            </div>
        </div>
    );
}

DeveloperBios.prototype = {
    developer:  PropTyes.instanceOf(Developer)
}

export default DeveloperBios
