import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NewExercise = () => {
    return (
        <>
            <MDBCard>
                <MDBCardBody>LET'S BUILD TODAY'S EXERCISE PLAN</MDBCardBody>
            </MDBCard>

            <MDBRow>
                <MDBCol sm='6'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>What are your goals for today?</MDBCardTitle>
                            <MDBCardText>
                                <InputGroup className="mb-3">
                                    <Form.Control aria-label="Text input with checkbox" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control aria-label="Text input with checkbox" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control aria-label="Text input with checkbox" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control aria-label="Text input with checkbox" />
                                </InputGroup>
                            </MDBCardText>
        
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


                <MDBCol sm='6'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="Workout" placeholder="New Workout Title" />
                                </Form.Group>

                            </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
    
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
};

export default NewExercise;