import React from "react";

class Registration extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      agree: false,
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const {name, value, type, checked} = event.target;
    this.setState({[name]: type ==="checkbox" ? checked : value });
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.setState({ submitted: true});
  }

  render(){
    return(
      <div style ={{margin : "30px"}}>
        <h2> Registration form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            Name:{" "}
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </p>

          <p>Email:{}
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </p>

          <p>
            Password:{}
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </p>

          <p>
            Gender:{}
            <input type="radio" name="gender" value="male" required checked={this.state.gender === "male"} onChange={this.handleChange} /> Male
            <input type="radio" name="gender" value="female" required checked={this.state.gender === "female"} onChange={this.handleChange} /> Female
          </p>

          <p>
            City:{}
            <select name="city" value={this.state.city} onChange={this.handleChange}>
              <option value="">--Select--</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Nashik">Nashik</option>
            </select>
          </p>

          <p>
            <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleChange} /> I agree to the terms
          </p>

          <button type="submit" disabled={!this.state.agree}>Register</button>
        </form>

        {this.state.submitted &&(
          <div>
            <h3>Registration Successful</h3>
            <p>Name: {this.state.name}</p>
            <p>Email:{this.state.email}</p>
            <p>Gender:{this.state.gender}</p>
            <p>City: {this.state.city}</p>
          </div>
        )}
      </div>
    )
  }
}
export default Registration;