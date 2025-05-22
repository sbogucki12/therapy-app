//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Home from './components/Home/Home';
import MorningAffirmation from './components/affirmations/MorningAffirmation/MorningAffirmation';
import EveningAffirmation from './components/affirmations/EveningAffirmation/EveningAffirmation';
import JournalEntry from './components/journal/JournalEntry/JournalEntry';
import JournalHistory from './components/journal/JournalHistory/JournalHistory';
import UserProfile from './components/profile/UserProfile/UserProfile';
import './App.css';
import './styles/globals.css';
import './styles/variables.css';
import './styles/responsive.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/morning" element={<MorningAffirmation />} />
            <Route path="/evening" element={<EveningAffirmation />} />
            <Route path="/journal" element={<JournalEntry />} />
            <Route path="/journal-history" element={<JournalHistory />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;