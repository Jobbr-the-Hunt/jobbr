import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name === '' || username === '' || password === '') {
      setError(true);
    } else {
      const signup = await axios({
        url: 'http://localhost:3000/signup',
        method: 'post',
        data: {
          username: username,
          password: password,
          name: name,
        },
      });
      console.log('SIGNUP', signup);
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none' }}>
        <p><strong>{name}</strong>, you have been successfully registeted!</p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <strong>Please enter all the fields</strong>
      </div>
    );
  };

  return (
    <div className="signup-main">
      <div className="form-container">
        <h1>Register</h1>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <form className="signup-form">
          <label className="label">Username</label>
          <input
            required
            onChange={handleUsername}
            className="input"
            value={username}
            type="text"
          />
          <label className="label">Password</label>
          <input
            required
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
          <label className="label">Name</label>
          <input
            required
            onChange={handleName}
            className="input"
            value={name}
            type="text"
          />
          <button onClick={handleSubmit} className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Link to="/">Back to Login</Link>
      <Outlet />
    </div>
  );
}

export default Signup;
