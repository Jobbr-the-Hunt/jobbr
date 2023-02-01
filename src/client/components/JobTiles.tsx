import React, { useEffect } from 'react';

function JobTiles({ jobTitle, company, progress, url, summary }: any) {
  return (
    <tr>
      <td>{jobTitle}</td>
      <td>{company}</td>
      <td>{progress}</td>
      <td>{url}</td>
      <td>{summary}</td>
    </tr>
  );
}

export default JobTiles;
