import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../title";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LogoutButton from '../logout/logout';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    // const { loginWithRedirect } = useAuth0();

    return (
        !isAuthenticated && (
            <div>
                <Title />
                <div className='loginCard'>
                    <h2 id="welcome">Welcome to Tone</h2>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                <LogoutButton />
                
        
                </div>
            </div>
        )
    )
}

export default Login;