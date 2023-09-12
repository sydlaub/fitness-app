import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { fetchData, exerciseOptions } from '../utils/fetchData';

const newExercise = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://workoutdb1.p.rapidapi.com/exercises';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/targetList/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipmentList/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        };

        fetchExercisesData();
    }, [id]);

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

export default newExercise;

