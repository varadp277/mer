import React, {useState} from "react";

function Registration(){
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    city:"",
    agree:false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    setForm({...form, [name]: type ==="checkbox" ? checked : value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return(
    <div style = {{margin : "30px"}}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Name:{" "}
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </p>

        <p>
          Email:{" "}
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </p>

        <p>
          Password:{" "}
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </p>

        <p>Gender:{" "}
          <input type="radio" name="gender" value="male" required
          checked={form.gender === "male"} onChange ={handleChange} /> Male
          <input type="radio" name="gender" value="female" required
          checked={form.gender === "female"} onChange = {handleChange}/> Female
        </p>

        <p>
          City:{" "}
          <select name="city" value={form.city} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Nashik">Nashik</option>
          </select>
        </p>

        <p>
          <input type="checkbox" name="agree"
          checked={form.agree} onChange={handleChange} /> I agree to the terms
        </p>
        <button type="submit" disabled={!form.agree}> Register </button>
      </form>

      {submitted && (
        <div>
          <h3>Registration Successful</h3>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Gender: {form.gender}</p>
          <p>City: {form.city}</p>
        </div>
      )}
    </div>
  )
}

export default Registration;