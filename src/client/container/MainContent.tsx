import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import JobTiles from '../components/JobTiles';

function MainContent() {
  const [listings, setListings] = useState({});
  return (
    <div>
      <h1>Main Content</h1>
      <Sidebar setListings={setListings} />
      <JobTiles />
    </div>
  );
}

export default MainContent;
