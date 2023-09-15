import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Auth from '../../utils/auth';
import './index.css'

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        window.location.href='/';
    };
    return (
        <header className="bg-primary text-light  flex-row align-center header">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                    <Navbar expand="lg" className="bg-body-tertiary navbar justify-content-between">
                        {Auth.loggedIn() ? (
                            <>
                                <Nav.Link className="btn btn-lg btn-info m-2 name" href="/me">
                                    {Auth.getProfile().data.email}
                                </Nav.Link>

                            <Nav.Link className="btn btn-lg btn-light m-2" href="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="btn btn-lg btn-light m-2" href="/profile">
                                Dashboard
                            </Nav.Link>
                                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Nav.Link className="btn btn-lg btn-info m-2" href="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link className="btn btn-lg btn-light m-2" href="/signup">
                                    Signup
                                </Nav.Link>
                            </>

                        )}
                    </ Navbar>
                <div> 
                    {Auth.loggedIn() ? (
                        <>
                    <Link className="text-light" to="/home">
                        <h1 className="m-0">TONE.</h1>
                    </Link>
                        </>
                    ) : (
                            <>
                                <Link className="text-light" to="/">
                                    <h1 className="m-0">TONE.</h1>
                                </Link>
                            </> 
                    )};
                </div>
            </div>
        </header>
    );
};

export default Header;