import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import JobTiles from './JobTiles';
import { Listing } from '../../types';

function MainContent() {
  const [listings, setListings] = useState<Listing | {}>({});
  console.log('this is the listings: ', listings);
  return (
    <div>
      <h1>MainContent</h1>
      <Sidebar setListings={setListings} />
      <JobTiles />
    </div>
  );
}

export default MainContent;
