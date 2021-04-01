import React, { useState } from "react";
import "./index.css";
import {Link} from "react-router-dom";

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

  const handleClick = (event)=>{
    window.location.href="/";
    //this opens in a new tab (believe that is what the owner of the question wanted if not you can do window.location.href = "/insert/your/path/here".
  }

  return (
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}

          <input
              onChange={handleemailInputChange}
              value={values.email}
              id="email"
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
          />
          {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}

          <input
              onChange={handleemailInputChange}
              value={values.password}
              id="password"
              className="form-field"
              type="password"
              placeholder="password"
              name="password"
          />
          {submitted && !values.email ? <span id="password-error">Please enter your password</span> : null}

          <button className="form-field" type="submit">
            Login
          </button>

          <button className="form-field" type="submit" onClick={handleClick}>
            Register
          </button>
        </form>
      </div>
  );
}
