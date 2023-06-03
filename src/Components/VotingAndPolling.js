import React, { useState } from 'react';
import './votingAndPolling.css';

const VotingAndPolling = () => {
  const [issue, setIssue] = useState('');
  const [options, setOptions] = useState([]);
  const [votes, setVotes] = useState({});

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };

  const handleOptionsChange = (e, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleVote = (member, option) => {
    if (option && options.includes(option)) {
      const updatedVotes = { ...votes };
      updatedVotes[member] = option;
      setVotes(updatedVotes);
    } else {
      throw new Error('Invalid voting option');
    }
  };

  return (
    <div className="voting-polling-container">
      <h2>Voting and Polling Module</h2>
      <div className="issue-container">
        <label>Issue:</label>
        <input type="text" value={issue} onChange={handleIssueChange} />
      </div>

      <div className="options-container">
        <label>Options:</label>
        {options.map((option, index) => (
          <div className="option-input-container" key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionsChange(e, index)}
            />
            <button
              type="button"
              onClick={() => handleRemoveOption(index)}
              className="remove-option-button"
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>
      </div>

      <h2>Cast Vote</h2>
      <div className="vote-container">
        <label>Member:</label>
        <input type="text" className="member-input" />
        <select className="option-select">
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="vote-button">Vote</button>
      </div>
    </div>
  );
};

export default VotingAndPolling;
