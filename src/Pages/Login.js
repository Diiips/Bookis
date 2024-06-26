// src/Login.js
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="LoginPage">
      <div className="LoginBackground">
        <h1>Login</h1>
      </div>
      <div className="LoginContent">
        <form>
         
            <input type="text" id="username" placeholder='Username'  name="username" required />
            <input type="password" id="password" placeholder='Password' name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
            

export default Login;

// #f00906
// #fd1d1d
