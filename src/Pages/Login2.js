import React, { useState } from "react";
import "./Login2.css";

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (

    <div className="LoginForm-page">

    
    <div className="formbox">
      <h1 id="title">{isSignUp ? "Sign Up" : "Sign In"}</h1>
      <form>


        <div className="input-group">
          {isSignUp && (
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input-field" id="emailfield">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email Id"/>
          </div>
          <div className="input-field" id="passwordfield">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <p>
            Lost Password? <a href="#">Click Here!</a>
          </p>
        </div>


        <div className="btn-field">
          <button
            type="button"
            id="signupBtn"
            className={isSignUp ? "" : "disable"}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            type="button"
            id="signinBtn"
            className={!isSignUp ? "" : "disable"}
            onClick={toggleForm}
          >
            Sign In
          </button>
        </div>


      </form>
    </div>
    </div>
  );
};

export default Form;
