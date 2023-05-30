import React, { useState } from 'react';
import './MeetingPreparation.css';

const MeetingPreparation = () => {
  const [agenda, setAgenda] = useState('');
  const [documents, setDocuments] = useState([]);

  const handleAgendaChange = (event) => {
    setAgenda(event.target.value);
  };

  const handleDocumentChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const documentContent = reader.result;
      setDocuments((prevDocuments) => [
        ...prevDocuments,
        { name: file.name, content: documentContent },
      ]);
    };
    reader.readAsText(file);
  };

  return (
    <div className="meeting-preparation">
      <h1>Meeting Preparation</h1>
      <div className="agenda">
        <h2>Agenda:</h2>
        <textarea
          value={agenda}
          onChange={handleAgendaChange}
          rows={4}
          cols={50}
        />
      </div>
      <div className="documents">
        <h2>Documents:</h2>
        <input type="file" onChange={handleDocumentChange} />
        <ul>
          {documents.map((document, index) => (
            <li key={index}>
              <strong>{document.name}</strong> - {document.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeetingPreparation;
