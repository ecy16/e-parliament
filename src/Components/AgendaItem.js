import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AgendaItem.css';
import AgendaList from './AgendaList';

function AgendaManager() {
  const [agendas, setAgenda] = useState([
    {
      title: "Agenda 1",
      description: 'Lorem ispsum.......'
    },
    {
      title: "Agenda 2",
      description: "Test descripion"
    }

  ]);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleAddItem = () => {

  };

  const handleDeleteItem = (index) => {
    const newAgenda = [...agendas];
    newAgenda.splice(index, 1);
    setAgenda(newAgenda);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling submission")
    console.log(title, description)
    const newItem = { title: title, description: description };
    setAgenda([...agendas, newItem]);
  }

  console.log("agendas", agendas)
  return (
    <div className='agenda-form'>
      <h1>Agenda Manager</h1>
      <form onSubmit={handleSubmit}>
        <label> Title</label>
        <input
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Description</label>
        <input
          type='text'
          name='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <select>
          <option>Session 1</option>
          <option>Session 2</option>
          <option>Session 3</option>
          <option>Session 4</option>

        </select>
        <input type="submit"
          value="Add Agenda" />

      </form>
      <button className='AgendaList'>
        <Link to="/Agendalist">SessionDetails</Link>
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Session</th>
            </tr>
          </thead>
          <tbody>
            {agendas.map((ag) => {
              return <tr>
                <td>{ag.title}</td>
                <td>{ag.description}</td>
                <td>Session 1</td>
              </tr>
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default AgendaManager;
