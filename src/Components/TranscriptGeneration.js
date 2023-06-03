import React, { useState } from 'react';
import './transcriptGeneration.css';

const TranscriptGeneration = () => {
  const [session, setSession] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [speech, setSpeech] = useState('');
  const [transcript, setTranscript] = useState([]);

  const handleSessionChange = (e) => {
    setSession(e.target.value);
  };

  const handleSpeakerChange = (e) => {
    setSpeaker(e.target.value);
  };

  const handleSpeechChange = (e) => {
    setSpeech(e.target.value);
  };

  const handleAddSpeech = () => {
    if (speaker && speech) {
      const updatedTranscript = [...transcript];
      updatedTranscript.push({ speaker, speech });
      setTranscript(updatedTranscript);
      setSpeaker('');
      setSpeech('');
    }
  };

  return (
    <div className="transcript-generation-container">
      <h2>Transcript Generation Module</h2>
      <div className="session-container">
        <label>Session:</label>
        <input type="text" value={session} onChange={handleSessionChange} />
      </div>

      <div className="speech-input-container">
        <label>Speaker:</label>
        <input type="text" value={speaker} onChange={handleSpeakerChange} />
        <label>Speech:</label>
        <input type="text" value={speech} onChange={handleSpeechChange} />
        <button type="button" onClick={handleAddSpeech}>
          Add Speech
        </button>
      </div>

      <div className="transcript-container">
        <h2>Transcript:</h2>
        <ul>
          {transcript.map((item, index) => (
            <li key={index}>
              <span className="speaker">{item.speaker}: </span>
              {item.speech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TranscriptGeneration;
