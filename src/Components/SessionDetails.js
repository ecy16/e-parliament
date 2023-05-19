import React, { useState } from 'react';

function SessionManager() {
  const [agenda, setAgenda] = useState([]);

  const handleAddAgendaItem = (title, description) => {
    setAgenda([...agenda, { title, description }]);
  };

  const handleEditAgendaItem = (index, title, description) => {
    setAgenda(
      agenda.map((item, i) => {
        if (i === index) {
          return { title, description };
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteAgendaItem = (index) => {
    setAgenda(agenda.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>Session Manager</h1>
      <AgendaList
        agenda={agenda}
        onEdit={handleEditAgendaItem}
        onDelete={handleDeleteAgendaItem}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddAgendaItem(e.target.title.value, e.target.description.value);
          e.target.title.value = '';
          e.target.description.value = '';
        }}
      >
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default SessionManager;
