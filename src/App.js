import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import Member from './Components/Member';
import Session from './Components/Session';
import AgendaItem from './Components/AgendaItem';
import AgendaManagement from './Components/AgendaManagement';
import Document from './Components/Document';
import MeetingPreparation from './Components/MeetingPreparation';
import Dashboard from './Components/DashBoard';
import HomePage from './Components/Homepage';
import AgendaList from './Components/AgendaList';
import BoardPage from './Components/Board';
import VotingSession from './Components/VotingSession';

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
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/VotingSession" element={<VotingSession/>} />
          
          
          
          
        </Routes>

      </Router>
    </div>

  );
}
export default App;
