import React, { useState } from 'react';
import { Button } from 'mdb-react-ui-kit';

import './DummyLogin.css';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function DummyLogin() {

  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (value) => {
    if (value === activeTab) {
      return;
    }

    setActiveTab(value);
  };

  return (
    <MDBContainer className="login-container">
        <div className='login-part'>

        
      <MDBTabs pills justify className='tabs'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleTabClick('login')} active={activeTab === 'login'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleTabClick('register')} active={activeTab === 'register'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={activeTab === 'login'}>

          <div className="text-center">
            <p>Sign in with:</p>

            <div className='social-buttons'>
              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center">or:</p>
          </div>

          <MDBInput wrapperClass='input' label='Email address' id='loginEmail' type='email'/>
          <MDBInput wrapperClass='input' label='Password' id='loginPassword' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='loginRemember' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="submit-btn">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={activeTab === 'register'}>

          <div className="text-center">
            <p>Sign up with:</p>

            <div className='social-buttons'>
              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='social-btn'>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center">or:</p>
          </div>

          <MDBInput wrapperClass='input' label='Name' id='registerName' type='text'/>
          <MDBInput wrapperClass='input' label='Username' id='registerUsername' type='text'/>
          <MDBInput wrapperClass='input' label='Email' id='registerEmail' type='email'/>
          <MDBInput wrapperClass='input' label='Password' id='registerPassword' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='registerTerms' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="submit-btn">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>
      </div>
    </MDBContainer>
  );
}

export default DummyLogin;
