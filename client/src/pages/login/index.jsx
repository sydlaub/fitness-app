import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../title";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    // const { loginWithRedirect, isAuthenticated } = useAuth0();

    const { loginWithRedirect } = useAuth0();


    return (
            <div>
                <Title />
                <div className='loginCard'>
                    <h2 id="welcome">Welcome to My Fitness Tracker</h2>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                
        
                </div>
            </div>
        )
}

export default Login;