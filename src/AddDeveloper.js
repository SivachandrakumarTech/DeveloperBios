import React from 'react'
import  {useState} from 'react'
import Developer from './Developer'

function AddDeveloper(props){

    const[firstName, setFirstName] =  useState('');
    const[lastName, setLasteName] =  useState('');
    const[favoriteLanguage, setfavoriteLanguage] =  useState('');
    const[yearStarted, setyearStarted] =  useState('');    

    
   const addDeveloper = () => {
    let newDev = new Developer(null, firstName, lastName, favoriteLanguage, yearStarted)
    //API Call
    fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDev),
    }) 
    .then(()=> clearForm())
    .catch(err => console.log(err));
   }


   const clearForm = () => {
    setFirstName('');
    setLasteName('');
    setfavoriteLanguage('');
    setyearStarted('');
    document.getElementById("devForm").reset();
}

  return (
    <div className="container">
            <h1> ADD Developer Bio</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="devForm" onSubmit={addDeveloper}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" data-testid="firstName" name="firstName"  className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" data-testid="lastName" name="lastName"  className="form-control" onChange={(e) => setLasteName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteLanguage">Favorite Language</label>
                            <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage"  className="form-control" onChange={(e) => setfavoriteLanguage(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearStarted">Year Started</label>
                            <input type="text" data-testid="yearStarted" name="yearStarted"  className="form-control" onChange={(e) => setyearStarted(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit"  className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )

}

export default AddDeveloper;

/*
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
    let newDev = new Developer(null, this.state.firstName, this.state.lastName, this.state.favoriteLanguage, this.state.yearStarted)
    //API Call
    fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDev),
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
*/

