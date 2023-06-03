
import './Session.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDay, faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons';


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
      <label>Date<FontAwesomeIcon icon={faCalendarDay}/>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>Time<FontAwesomeIcon icon={faClock}/>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>Location<FontAwesomeIcon icon={faLocationPin}/>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <button className='additem' data-inline="true">
        <Link to="/AgendaItem" >ADD session</Link>
      </button>
      <button className='agenda' data-inline="true">
        <Link to="/AgendaManagement">AGENDA</Link>
      </button>
      </div>
    </div>
  );
}
export default Session;
