import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/login';
import Navigation from './components/navbar';

import './App.css';


function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {isAuthenticated && <Navigation />}
      <Router>
        <Routes>
        <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
