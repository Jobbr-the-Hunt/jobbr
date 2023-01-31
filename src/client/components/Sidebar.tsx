import React, { useEffect, useState } from 'react';
import { Listing } from '../../types';
import axios from 'axios';

type SidebarProps = {
  setListings: React.Dispatch<React.SetStateAction<Listing>>;
};

const Sidebar = ({ setListings }: SidebarProps) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [progress, setProgress] = useState('Applied');
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState(new Date('2023/01/31' + 'Z'));
  console.log('jobTitle state: ', jobTitle);
  console.log('company state: ', company);
  console.log('progress state: ', progress);
  console.log('url state: ', url);
  console.log('summary state: ', summary);
  console.log('date: ', date);

  // title: { type: String, required: true },
  // company: { type: String, required: true },
  // dateApplied: { type: Date, required: true },
  // status: { type: String, required: true },
  // url: { type: String, required: true },
  // summary: { type: String },

  const makeListing = (e: any) => {
    e.preventDefault();
    const obj = {
      jobTitle: jobTitle,
      company: company,
      progress: progress,
      url: url,
      summary: summary,
      date: date,
    };
    console.log('logging obj on button push:', obj);

    // axios.post('/job', {
    //   title: jobTitle,
    //   company: company,
    //   dateApplied: date,
    //   status: progress,
    //   url: url,
    //   summary: summary,
    // });

    // add the id to the obj that im setting in state (could use promise chaining)
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
          <label>Application Date:</label>
          <input
            className="datePicker"
            type="date"
            // value="2023-01-31"
            min="2022/01/01"
            max="2024/01/01"
            onChange={(e) => {
              let date = new Date(e.target.value);
              date = new Date(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate()
              );
              setDate(date);
            }}
          ></input>
          <button onClick={makeListing}>+</button>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
