import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useMutation } from '@apollo/client';
import { ADD_GOAL } from '../../utils/mutations'

const ProfilePage = () => {
    const [formState, setFormState] = useState({ goalText: ''});
    const [goal, {error, data}] = useMutation(ADD_GOAL);
    const [goalsArray, setGoalsArray] = useState([]);

    useEffect(() => {
        // Query the database to get logged in user profile data
        // Call setGoalsArray with that user's 
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await goal ({
                variables: { ...formState },
            });

           
           setGoalsArray([...goalsArray, formState.goalText]);


        } catch (e) {
            console.error(e);
        }

        setFormState({
            goalText: ''
        })
    }


    return (
        <main>
            <Card>
                <Card.Header className='profile-header'>
                    <h2>
                        DASHBOARD
                    </h2>
                </Card.Header>

            </Card>
            <Card>
                <Card.Body>
                    <form className='goalform' onSubmit={handleFormSubmit}>
                        <label className='goals'>What are your goals today?
                            <br/>
                            <input 
                            className='form-input'
                            id='goal-input'
                            placeholder='New Goal'
                            name='goalText'
                            type='input'
                            value={formState.goalText}
                            onChange={handleChange} />
                        </label>
                        <button
                            className="btn btn-block btn-primary"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                </Card.Body>
                <div> 
                    Goal History
                </div>
                <div>
                    {goalsArray.map(goal => (
                        <p key={goal}>
                            {goal}
                        </p>
                    ))}
                </div>
            </Card>

        </main>
    );
};

export default ProfilePage;