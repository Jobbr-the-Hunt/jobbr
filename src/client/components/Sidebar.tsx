import React, { useEffect, useState } from 'react';
import { Listing } from '../../types';
import axios from 'axios';

type SidebarProps = {
  setListings: React.Dispatch<React.SetStateAction<Listing[]>>;
  listings: Listing[] | [];
};

const Sidebar = ({ setListings, listings }: SidebarProps) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [progress, setProgress] = useState('Applied');
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');

  const makeListing = async (e: any) => {
    e.preventDefault();
    const obj = {
      jobTitle: jobTitle,
      company: company,
      progress: progress,
      url: url,
      summary: summary,
    };
    console.log('logging obj on button push:', obj);

    const response = await axios({
      url: 'http://localhost:3000/job',
      method: 'POST',
      data: {
        title: jobTitle,
        company: company,
        status: progress,
        url: url,
        summary: summary,
      },
      withCredentials: true,
    });

    const responseObj: Listing = {
      jobTitle: response.data.title,
      company: response.data.company,
      progress: response.data.status,
      url: response.data.url,
      summary: response.data.summary,
      id: response.data.user_id,
    };
    // add the id to the obj that im setting in state (could use promise chaining)
    setListings([...listings, responseObj]);
  };

  return (
    <div className="sidebar-container">
      <h2>Add a Job:</h2>
      <form className="sidebar-form">
        <label>Job Title:</label>
        <input
          className="input"
          onChange={(e) => setJobTitle(e.target.value)}
        ></input>
        <label>Company:</label>
        <input
          className="input"
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <label>Progress:</label>
        <select
          className="dropdown"
          onChange={(e) => setProgress(e.target.value)}
        >
          <option>Applied</option>
          <option>Followed Up</option>
          <option>Currently Interviewing</option>
          <option>Stop Tracking</option>
        </select>
        <label>URL:</label>
        <input
          className="input"
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <label>Summary:</label>
        <input
          className="input"
          onChange={(e) => setSummary(e.target.value)}
        ></input>
        <button onClick={makeListing}>+</button>
      </form>
    </div>
  );
};

export default Sidebar;
