import React, { useState } from 'react';
import './AgendaManagement.css';

const AgendaManagement = () => {
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState([]);
  const [timeAllocations, setTimeAllocations] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTopicChange = (index, e) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = e.target.value;
    setTopics(updatedTopics);
  };

  const handleTimeAllocationChange = (index, e) => {
    const updatedTimeAllocations = [...timeAllocations];
    updatedTimeAllocations[index] = e.target.value;
    setTimeAllocations(updatedTimeAllocations);
  };

  const handleAddTopic = () => {
    setTopics([...topics, '']);
    setTimeAllocations([...timeAllocations, '']);
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = [...topics];
    const updatedTimeAllocations = [...timeAllocations];
    updatedTopics.splice(index, 1);
    updatedTimeAllocations.splice(index, 1);
    setTopics(updatedTopics);
    setTimeAllocations(updatedTimeAllocations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="agenda-management-container">
      <h2>Agenda Management Module</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>

        <label>
          Topics:
          {topics.map((topic, index) => (
            <div className="topic-row" key={index}>
              <input
                type="text"
                value={topic}
                onChange={(e) => handleTopicChange(index, e)}
              />
              <input
                type="text"
                value={timeAllocations[index]}
                onChange={(e) => handleTimeAllocationChange(index, e)}
              />
              <button
                type="button"
                onClick={() => handleRemoveTopic(index)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTopic} className="add-button">
            Add Topic
          </button>
        </label>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AgendaManagement;
