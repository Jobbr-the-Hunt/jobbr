import React, { useEffect, useState } from 'react';

const Sidebar = (props: { setListings:{} }) => {
      const [jobTitle, setJobTitle] = useState('');
      const [company, setCompany] = useState('');
      const [progress, setProgress] = useState('');
      const [url, setUrl] = useState('');
      const [summary, setSummary] = useState('');
  return (
    <div>
      <h2>Sidebar</h2>
      <form>
        <label>Add a job!</label>
        <div>
            <label>Job Title:</label>
            <input className='input'></input>
            <label>Company:</label>
            <input className='input'></input>
            <label>Progress</label>
            <select>
              {['Applied', 'Followed Up', 'Currently Interviewing', 'Stop Tracking']}
            </select>
            <label>URL</label>
            <input className='input'></input>
            <label>Summary</label>
            <input className='input'></input>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
