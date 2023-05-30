import React, { useState } from 'react';
import './Document.css';

const Document = ({ title, content, category }) => {
  const [newContent, setNewContent] = useState(content);

  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };

  const updateContent = () => {
    // Call an API or update the content using other logic
    console.log('Updating content:', newContent);
  };

  return (
    <div className="document">
      <h1 className="document-title">{title}</h1>
      <p className="document-category">Category: {category}</p>
      <div className="document-content">
        <h2>Content:</h2>
        <p>{content}</p>
      </div>
      <div className="content-update">
        <h3>Update Content:</h3>
        <textarea
          value={newContent}
          onChange={handleContentChange}
          rows={4}
          cols={50}
        />
        <button onClick={updateContent}>Save</button>
      </div>
    </div>
  );
};

export default Document;
