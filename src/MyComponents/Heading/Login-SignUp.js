// LoginSignup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const LoginSignup = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login submission
    console.log('Login submitted:', loginData);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle signup submission
    console.log('Signup submitted:', signupData);
  };

  return (
    <div className='auth-container'>
      <h2>Login</h2>
      <form className='auth-form' onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input
           className='l-input'
            type="text"
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input className='l-input'
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </label>
        <br />
        <button className='l-btn' type="submit">Login</button>
      </form>

      <hr />

      <h2>Sign Up</h2>
      <form className='auth-form' onSubmit={handleSignupSubmit}>
        <label>
          Username:
          <input
           className='l-input'
            type="text"
            value={signupData.username}
            onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
           className='l-input'
            type="email"
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
           className='l-input'
            type="password"
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />
        </label>
        <br />
        <button className='l-btn' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

