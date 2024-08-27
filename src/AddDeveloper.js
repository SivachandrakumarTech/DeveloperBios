import React, { Component } from 'react'
import Developer from './Developer'

class AddDeveloper extends Component {

constructor(props) {
  super(props)

  this.state = {
    firstName: '',
    lastName: '',
    favoriteLanguage: '',
    yearStarted: null     
  }
}

handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
    })
}
 

handleSubmit = (event) => {
    event.preventDefault();  
    //API Call
    fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(new Developer(null, this.state.firstName, this.state.lastName, this.state.favoriteLanguage, this.state.yearStarted)),
    });   
    this.clearForm();
}

clearForm = () => {
    this.setState= {
        firstName: '',
        lastName: '',
        favoriteLanguage: '',
        yearStarted: null     
      }

      document.getElementById("devForm").reset();
}


render(){
    return  (
        <div className="container">
            <h1> ADD Developer Bio</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="devForm" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" data-testid="firstName" name="firstName"  className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" data-testid="lastName" name="lastName"  className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteLanguage">Favorite Language</label>
                            <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage"  className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearStarted">Year Started</label>
                            <input type="text" data-testid="yearStarted" name="yearStarted"  className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit"  className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

}

export default AddDeveloper;
