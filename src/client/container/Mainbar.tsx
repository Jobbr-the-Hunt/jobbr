import React from 'react';
import { Outlet } from 'react-router-dom';

function Mainbar() {
  return (
    <div className="page">
      <div className="title">
        <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/83/Jabba-the-hut.jpg?width=2240" alt="Jabba" width="100px" height="100px" />
        <div>
          <h1>Jobbr</h1>
          <p>(the Hunt)</p>
        </div>
        <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/83/Jabba-the-hut.jpg?width=2240" alt="Jabba" width="100px" height="100px" />
      </div>
      <Outlet />
    </div>
  );
}

export default Mainbar;
