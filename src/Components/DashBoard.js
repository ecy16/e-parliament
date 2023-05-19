import React from 'react';
import Member from './Member';
import Session from './Session';
import AgendaItem from './AgendaItem';
import './DashBoard.css';

const Dashboard = ({ members, session, agenda }) => {
  return (
    <div className='dashboard'>
      <h1>Member Management</h1>
      {members?.map((member, index) => (
        <Member
          key={index}
          name={member.name}
          position={member.position}
          party={member.party}
          contact={member.contact}
          biometricId={member.biometricId}
        />
      ))}
      <h1>Session Management</h1>
      {session?.map((session,index) =>(
        <Session
        date={session.date}
        time={session.time}
        location={session.location}
        agenda={session.agenda}
      />
      )
      )}
      
      <h1>Agenda Management</h1>
      {agenda ?.map((item, index) => (
        <AgendaItem 
        key={index}
        title={item.title}
        description={item.description}
         />
      ))}
    </div>
  );
};

export default Dashboard;
