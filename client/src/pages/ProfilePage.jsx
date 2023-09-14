import React from 'react';
import Card from 'react-bootstrap/Card';

const ProfilePage = () => {
    return (
        <main>
        <Card>
            <Card.Header>My Profile</Card.Header>
            <Card.Body>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.{' '}
                    </p>
                    <footer>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
            </Card.Body>
        </Card>

        </main>
    );
};

export default ProfilePage;