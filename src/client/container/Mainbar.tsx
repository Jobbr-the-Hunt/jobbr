import React from 'react';
import { Outlet } from 'react-router-dom';

function Mainbar() {
  return (
    <div>
      <h1>JOBRR THE HUT</h1>
      <Outlet />
    </div>
  );
}

export default Mainbar;
