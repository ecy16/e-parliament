import { faCheck, faCircle, faCommentAlt, faComments, faEdit, faList, faListAlt, faPencil, faQuestion, faSearch, faTimes, faUser, faUsers, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './VotingSession.css';
import { } from "@fortawesome/free-solid-svg-icons";

const VotingSession = ({ agenda }) => {
  const [votes, setVotes] = useState({});

  const startVotingSession = () => {
    const newVotes = {};
    for (let i = 0; i < agenda.length; i++) {
      const item = agenda[i];
      newVotes[item.title] = {};
    }
    setVotes(newVotes);
  };

  const endVotingSession = () => {
    let result = '';
    for (let title in votes) {
      let yesVotes = 0;
      let noVotes = 0;
      for (let memberName in votes[title]) {
        if (votes[title][memberName] === 'yes') {
          yesVotes++;
        } else if (votes[title][memberName] === 'no') {
          noVotes++;
        }
      }
      result += `Agenda item: ${title}\nYes votes: ${yesVotes}\nNo votes: ${noVotes}\n\n`;
    }
    return result;
  };

  const recordVote = (member, title, vote) => {
    const newVotes = { ...votes };
    newVotes[title][member.name] = vote;
    setVotes(newVotes);
  };

  return (

    <div className='voting-container'>
      <div className='voting-header'>
        <h1>Vote Item</h1>
        <FontAwesomeIcon icon={faListAlt} />
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faCommentAlt} />
        <FontAwesomeIcon icon={faPencil} />
        <FontAwesomeIcon icon={faUsers} />
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faQuestion} />
      </div>
      <section>
        <vl/>
      <p>Which strategy should we implement?</p>
      <div className='right-side'>
      <p>Tap a Voters name to input their vote.</p>
      <h4>Voters</h4>
      </div>
      <div className='btn'>
        <button onClick={() => this.startVotingSession()}>Start Voting Session</button>
          {agenda && agenda.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        <button onClick={() => this.endVotingSession()} >End Voting Session</button>
        </div>
        
      <h2>My vote</h2> 
      <span>Add notes</span>

       <button className='yes'> Yes<FontAwesomeIcon icon={faCheck}/></button>
      <button className='no'>No <FontAwesomeIcon icon={faTimes}/></button>
      <button className='abstain'>Abstain <FontAwesomeIcon icon={faCircle}/></button>
      <div className='votes-count'>
      <h3>Vote Results</h3>
      <ul>
        <li><FontAwesomeIcon icon={faCheck}/>Yes:0</li>
        <li> <FontAwesomeIcon icon={faTimes}/>No:0</li>
        <li> <FontAwesomeIcon icon={faCircle}/>Abstain:0</li>
        <li>Pending:6</li>
      </ul>
      </div>
      </section>
      

    </div>
  );
};

export default VotingSession;
