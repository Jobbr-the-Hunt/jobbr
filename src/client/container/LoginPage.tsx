import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Login from '../components/Login';

function LoginPage() {
  return (
    <div>
      <Login />
      <nav>
        <ul>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default LoginPage;
