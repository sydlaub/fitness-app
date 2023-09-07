import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/login';
import Navigation from './pages/navbar';

import './App.css';


function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div className="Body">
        <div style={{ margin: "2vw" }}>
      <Router>
        <Routes>
            {/* <header> */}
              {/* <div> */}
                {/* {isAuthenticated && <Navigation />} */}
              {/* </div> */}
            {/* </header> */}
        <Route path='/' element={<Login />} />
        </Routes>
      </Router>
      </div>
      </div>
    </>

  );
}

export default App;
