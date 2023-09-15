import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/login/login.jsx'
import Navigation from './pages/navbar';

import './App.css';


function App() {
  // const { isLoading, isAuthenticated } = useAuth0();
  // if (isLoading) return <div>Loading...</div>

  return (
    <>
      {< Navigation />}
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
