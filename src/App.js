import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './Components/Header';
import Button from './Components/Button';
import LoginPage from './Components/LoginPage';
import Member from './Components/Member';
import Session from './Components/Session';
import AgendaItem from './Components/AgendaItem';
import AgendaManagement from './Components/AgendaManagement';
import Document from './Components/Document';
import HomePage from './Components/Homepage';
import AgendaList from './Components/AgendaList';
import MeetingPreparation from './Components/MeetinPreparation';
import BoardPage from './Components/Board';
import Debate from './Components/Debate';
import VotingSession from './Components/VotingSession';
import VotingAndPolling from './Components/VotingAndPolling';
import TranscriptGeneration from './Components/TranscriptGeneration';
import CollaborationAndCommunication from './Components/CollaborationAndCommunication';
import RoleBasedAccessControl from './Components/RoleBasedAccessControl';
import ArchivingAndRetrieval from './Components/ArchivingAndRetrieval';

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/members" element={<Member />} />
          <Route path="/session" element={<Session />} />
          <Route path="/AgendaItem" element={<AgendaItem />} />
          <Route path="/agendalist" element={<AgendaList />} />
          <Route path="/agendamanagement" element={<AgendaManagement />} />
          <Route path="/Document" element={<Document />} />
          <Route path="/MeetingPreparation" element={<MeetingPreparation />} />
          <Route path="/Debate" element={<Debate/>} />
          <Route path="/VotingSession" element={<VotingSession/>} />
          <Route path="/VotingAndPolling" element={<VotingAndPolling/>} />
          <Route path="/TranscriptGeneration" element={<TranscriptGeneration/>} />
          <Route path="/CollaborationAndCommunication" element={<CollaborationAndCommunication/>} />
          <Route path="/RoleBasedAccessControl" element={<RoleBasedAccessControl/>}/>
          <Route path="/ArchivingAndRetrival" element={<ArchivingAndRetrieval/>}/>




          

          
          
          
          
        </Routes>

      </Router>
    </div>

  );
}
export default App;
