import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import './index.css';
import Auth from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
            window.location.href = '/home'
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className="flex-row justify-center mb-4 login-container">
            <div className="col-12 col-lg-10 login-div">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2 login-header">Login</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/home">back to the homepage.</Link>
                            </p>
                        ) : (
                            <>
                                <form onSubmit={handleFormSubmit}>
                                    <div className='input'>
                                        <input
                                            className="form-input"
                                            placeholder="Email"
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>

                                        <input
                                            className="form-input"
                                            placeholder="******"
                                            name="password"
                                            type="password"
                                            value={formState.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-block btn-primary"
                                        style={{ cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;