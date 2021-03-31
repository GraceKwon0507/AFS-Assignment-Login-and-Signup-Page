import React, { useState } from "react";
import "./index.css";
import login from "./Login";



export default function App() {
  
  const [values, setValues] = useState({
    firtName:"",
    lastName:"",
    email:""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) =>{
    setValues({...values, firtName: event.target.value})
  }

  const handlelastNameInputChange = (event) =>{
    setValues({...values, lastName: event.target.value})
  }

  const handleemailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(values.firtName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  } 

  const handleClick = (event)=>{
    window.location.href="/login.js";
    //this opens in a new tab (believe that is what the owner of the question wanted if not you can do window.location.href = "/insert/your/path/here". 
  }


  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>        
        {submitted && valid? <div class="success-message">Success! Thank you for registering</div>: null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firtName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />        
        {submitted && !values.firtName ? <span id="first-name-error">Please enter a first name</span>: null}

        <input
          onChange={handlelastNameInputChange}
          values={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />        
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}

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

        <button class="form-field" type="submit">
          Register
        </button>

        
        <button 
        class="form-field"
        type="submit"
        onClick={handleClick}        
        >
          Login
          </button>
       
      </form>
    </div>
  );
}
