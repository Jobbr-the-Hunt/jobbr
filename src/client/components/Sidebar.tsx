import React, { useEffect, useState } from 'react';
import { Listing } from '../../types';

type SidebarProps = {
  setListings: React.Dispatch<React.SetStateAction<Listing>>;
};

const Sidebar = ({ setListings }: SidebarProps) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [progress, setProgress] = useState('Applied');
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  console.log('jobTitle state: ', jobTitle);
  console.log('company state: ', company);
  console.log('progress state: ', progress);
  console.log('url state: ', url);
  console.log('summary state: ', summary);

  const makeListing = (e: any) => {
    e.preventDefault();
    const obj = {
      jobTitle: jobTitle,
      company: company,
      progress: progress,
      url: url,
      summary: summary,
    };
    console.log('logging obj on button push:', obj);
    setListings(obj);
  };

  return (
    <div>
      <h2>Sidebar</h2>
      <form>
        <label>Add a job!</label>
        <div>
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
          <label>Progress</label>
          <select
            className="dropdown"
            onChange={(e) => setProgress(e.target.value)}
          >
            <option>Applied</option>
            <option>Followed Up</option>
            <option>Currently Interviewing</option>
            <option>Stop Tracking</option>
          </select>
          <label>URL</label>
          <input
            className="input"
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <label>Summary</label>
          <input
            className="input"
            onChange={(e) => setSummary(e.target.value)}
          ></input>
          <button onClick={makeListing}>+</button>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
