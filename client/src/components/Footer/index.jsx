import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <footer className="w-100 mt-auto bg-secondary p-4 footer">
            <div className="container text-center mb-5">
                {/* {location.pathname !== '/' && (
                    <button
                        className="btn btn-dark mb-3"
                        onClick={() => navigate(-1)}
                    >
                        &larr; Go Back
                    </button>
                    
                )}
                {location.pathname !== '/' && (
                    <button
                        className="btn btn-dark mb-3"
                        onClick={() => navigate(+1)}
                    >
                        Next &rarr;
                    </button>

                )} */}
                <h4>
                    {' '}
                    <span
                        className="emoji"
                        role="img"
                        aria-label="dumbbell"
                        aria-hidden="false"
                    >
                        ❚█══█❚
                    </span>{' '}
                    <br/>
                    Proudly designed and coded by the TONE Team.
                </h4>
            </div>
        </footer>
    );
};

export default Footer;