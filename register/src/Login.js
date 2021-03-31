import React, { useState } from "react";
import "./index.css";

export default function Login() {
  
  const [values, setValues] = useState({
    email:"",
    password:""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);



  const handlepasswordInputChange = (event) =>{
    setValues({...values, password: event.target.value})
  }

  const handleemailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(values.email && values.password){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>        
        {submitted && valid? <div class="success-message">Success! Thank you for registering</div>: null}
        
        <input
          onChange={handleemailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />        
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}

        <input
          onChange={handleemailInputChange}
          value={values.password}
          id="password"
          class="form-field"
          type="password"
          placeholder="password"
          name="password"
        />        
        {submitted && !values.email ? <span id="password-error">Please enter your password</span> : null}

        <button class="form-field" type="submit">
          Login
        </button>

        <button 
        class="form-field"
        type="submit"
        onClick="login"       
        >
          Register
        </button>
      </form>
    </div>
  );
}
