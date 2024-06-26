import './Login2.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import loginimg from '../Images/loginimg.png'

function Login2({setisloginpage}) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUpUser = async () => {

    const requestBody = {
        Name: name,
        email: email,
        password:password
    };

    try {
        const response = await fetch('http://localhost:5000/userSignUp', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result)
        if(result.newsignup)(navigate('/'))
        else if(result.newsignup==false){alert(result.Message);}
        
    } catch (error) {
        console.error(error);
    }
  }

  const handleSignUpClick = () => {
    console.log(email)
    if(isSignUp){
      signUpUser()
    }
    setIsSignUp(true);
    
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
   
  };

  return (
    <div className="LoginPage">
      {/* <div className="LoginBackground">
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      </div> */}


      <div className="LoginContent">
        <div className='left-block'>
          <div className='card'>
            {/* <h1>WelCome to Bookies</h1> */}
          </div>
        </div>

        <div className='right-block'>
        <form>
          <div className="input-group">
            {isSignUp && (
              <div className="input-field" id="nameField">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                placeholder="Email Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Lost Password? <a href="#">Click Here!</a></p>
          </div>

          <div className="btn-field">
            <button type="submit" onClick={handleSignUpClick} className={isSignUp ? '' : 'disable'}>
              Sign Up
            </button>
            <button type="submit" onClick={handleSignInClick} className={!isSignUp ? '' : 'disable'}>
              Sign In
            </button>
          </div>
        </form>
        </div>
      </div>
    
    </div>
  );
}

export default Login2;







