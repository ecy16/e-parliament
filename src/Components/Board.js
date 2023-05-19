import React, { useState } from 'react';

function BoardPage() {
  const [members, setMembers] = useState([]);
  const [resolutionQueue, setResolutionQueue] = useState([]);
  const [approvedResolutions, setApprovedResolutions] = useState([]);

  const addResolution = (resolution) => {
    setResolutionQueue([...resolutionQueue, resolution]);
  };

  return (
    <div>
      <h1>Board Page</h1>

      <h2>Resolution Queue:</h2>
      <ul>
        {resolutionQueue.map((resolution, index) => (
          <li key={index}>{resolution}</li>
        ))}
      </ul>

      <button onClick={() => addResolution('New Resolution')}>
        Add Resolution to Queue
      </button>

      <h2>Approved Resolutions:</h2>
      <ul>
        {approvedResolutions.map((resolution, index) => (
          <li key={index}>{resolution}</li>
        ))}
      </ul>

    </div>
  );
}

export default BoardPage;
