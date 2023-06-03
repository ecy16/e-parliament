import React, { useState } from 'react';
import './archivingAndRetrieval.css';

const ArchivingAndRetrieval = () => {
  const [session, setSession] = useState('');
  const [sessions, setSessions] = useState([]);

  const handleSessionChange = (e) => {
    setSession(e.target.value);
  };

  const handleAddSession = () => {
    if (session) {
      const updatedSessions = [...sessions];
      updatedSessions.push(session);
      setSessions(updatedSessions);
      setSession('');
    }
  };

  const handleGetSession = (sessionIndex) => {
    try {
      const session = getSession(sessionIndex);
      console.log('Retrieved Session:', session);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const getSession = (sessionIndex) => {
    if (sessionIndex < sessions.length) {
      return sessions[sessionIndex];
    } else {
      throw new Error('Session index out of range');
    }
  };

  return (
    <div className="archiving-retrieval-container">
      <h2>Archiving and Retrieval Module</h2>
      <div className="session-input-container">
        <label>Session:</label>
        <input type="text" value={session} onChange={handleSessionChange} />
        <button type="button" onClick={handleAddSession}>
          Add Session
        </button>
      </div>

      <div className="session-list-container">
        <h3>Sessions:</h3>
        <ul>
          {sessions.map((session, index) => (
            <li key={index}>
              <span>{session}</span>
              <button
                type="button"
                onClick={() => handleGetSession(index)}
                className="retrieve-button"
              >
                Retrieve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArchivingAndRetrieval;
