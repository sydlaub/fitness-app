import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


import Login from './components/login';
import Navigation from './components/navbar';
import Home from './pages/homePage';
import Profile from './pages/profilePage';
import Workouts from './pages/workoutPage';

import './App.css';


function App() {
  // const { isLoading, isAuthenticated } = useAuth0();
  // if (isLoading) return <div>Loading...</div>

  return (
    <>
      {/* {isAuthenticated && <Navigation />} */}
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/workouts' element={<Workouts />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
