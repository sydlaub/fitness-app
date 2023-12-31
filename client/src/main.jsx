import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx'
import Home from './pages/home/Home.jsx';
import Signup from './pages/login/Signup.jsx';
import Login from './pages/login/Login.jsx';
import ProfilePage from './pages/dashboard/ProfilePage.jsx';
import NewExercise from './pages/new-exercise/NewExercise.jsx';
import MusicPage from './pages/spotify/MusicPage.jsx';
import StartWorkout from './pages/StartWorkout.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/home',
        element: <Home />
      }, {
        path: '/profile',
        element: <ProfilePage />
      }, {
        path: '/me',
        element: <ProfilePage />
      },
      {
        path: '/newworkout',
        element: <NewExercise />
      }, {
        path: '/music',
        element: <MusicPage />
      }, {
        path: '/startworkout',
        element: <StartWorkout />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
