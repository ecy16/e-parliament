import React, { useState } from 'react';
import './collaborationAndCommunication.css';

const CollaborationAndCommunication = () => {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSenderChange = (e) => {
    setSender(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (sender && message) {
      const updatedMessages = [...messages];
      updatedMessages.push({ sender, message });
      setMessages(updatedMessages);
      setSender('');
      setMessage('');
    }
  };

  return (
    <div className="collaboration-communication-container">
      <h2>Collaboration and Communication Module</h2>
      <div className="message-input-container">
        <label>Sender:</label>
        <input type="text" value={sender} onChange={handleSenderChange} />
        <label>Message:</label>
        <input type="text" value={message} onChange={handleMessageChange} />
        <button type="button" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>

      <div className="message-history-container">
        <h2>Message History:</h2>
        <ul>
          {messages.map((item, index) => (
            <li key={index}>
              <span className="sender">{item.sender}: </span>
              {item.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollaborationAndCommunication;
