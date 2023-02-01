import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import JobTiles from '../components/JobTiles';
import { Listing } from '../../types';
import axios from 'axios';

function MainContent() {
  const [listings, setListings] = useState<Listing[] | []>([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:3000/job',
      method: 'GET',
      withCredentials: true,
    }).then((response) => {
      const arrayOfListings: Listing[] = response.data.map((obj: any) => {
        return {
          jobTitle: obj.title,
          company: obj.company,
          progress: obj.status,
          url: obj.url,
          summary: obj.summary,
          id: obj.user_id,
        };
      });
      setListings([...arrayOfListings]);
    });
  }, []);

  const tilesArray = [];

  for (let i = 0; i < listings.length; i++) {
    console.log('LISTINGS[i]:', listings[i]);
    tilesArray.push(
      <JobTiles
        key={i}
        jobTitle={listings[i].jobTitle}
        company={listings[i].company}
        progress={listings[i].progress}
        url={listings[i].url}
        summary={listings[i].summary}
      />
    );
  }

  return (
    <div className="main-main">
      <Sidebar setListings={setListings} listings={listings} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Progress</th>
            <th>URL</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>{tilesArray}</tbody>
      </table>
    </div>
  );
}

export default MainContent;
