
import './Session.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Session() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [agenda, setAgenda] = useState([]);
  const [votes, setVotes] = useState({});
  const [videoConference, setVideoConference] = useState(null);
  const [votingStarted, setVotingStarted] = useState(false);

  return (
    <div className='form-session'>
      <div className='session-form-body'>

      <h1>Session Details</h1>
      <label>Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>Time:
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <button>
        <Link to="/AgendaItem">AgendaItem</Link>
      </button>
      </div>
    </div>
  );
}
export default Session;
