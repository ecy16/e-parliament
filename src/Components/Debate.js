import React, { useState } from 'react';
import './Debate.css';

const Debate = () => {
  const [speakerQueue, setSpeakerQueue] = useState([]);

  const addSpeaker = (speaker) => {
    setSpeakerQueue((prevSpeakerQueue) => [...prevSpeakerQueue, speaker]);
  };

  return (
    <div className="debate-page">
      <h1>Debates</h1>
      <div className="speaker-queue">
        <h2>Speaker Queue:</h2>
        <ul>
          {speakerQueue.map((speaker, index) => (
            <li key={index}>{speaker}</li>
          ))}
        </ul>
      </div>
      <div className="add-speaker">
        <h2>Add Speaker:</h2>
        <input
          type="text"
          placeholder="Enter speaker's name"
          onChange={(event) => addSpeaker(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Debate;
