import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Login from '../components/Login';

function LoginPage() {
  return (
    <div className="login-main">
      <Login />
      <nav>
        <Link to="/Signup">Need an account? Sign up!</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default LoginPage;
