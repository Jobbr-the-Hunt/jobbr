import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(username, password);
      await axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          username: username,
          password: password,
        },
        withCredentials: true,
      });
      navigate('/Home');
    } catch (err) {
      setError(true);
    }
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <p><strong>Invalid credentials, please try again</strong></p>
      </div >
    );
  };

  return (
    <div className="form-container">
      <h1> Login </h1>
      <div className="messages">{errorMessage()}</div>
      <form className="login-form">
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
        <button onClick={handleSubmit} className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <Outlet />
    </div>
  );
}

export default Login;
