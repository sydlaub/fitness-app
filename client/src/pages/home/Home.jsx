import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <main>
            {Auth.loggedIn() ? (
                <>
                    <div className="flex-row justify-center">
                        Are you ready to tone?
                    </div>
                    <Button href='/newworkout'>Let's Go!</Button>{' '}
                </>

            ) : (
                <>
                You are not authorized to access this page.
                </>
            )}
        </main>
    );
};

export default Home;