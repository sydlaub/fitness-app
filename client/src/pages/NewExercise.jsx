// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBRow,
//     MDBCol,
//     MDBBtn,
//     MDBDropdown,
//     MDBDropdownMenu,
//     MDBDropdownToggle,
//     MDBDropdownItem
// } from 'mdb-react-ui-kit';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { fetchData, exerciseOptions } from '../utils/fetchData';

// const newExercise = () => {
//     const [exerciseDetail, setExerciseDetail] = useState({});
//     const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
//     const [equipmentExercises, setEquipmentExercises] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {

//         const fetchExercisesData = async () => {
//             const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';

//             const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);
//             setExerciseDetail(exerciseDetailData);

//             const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/targetList/${exerciseDetailData.target}`, exerciseOptions);
//             setTargetMuscleExercises(targetMuscleExercisesData);

//             const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipmentList/${exerciseDetailData.equipment}`, exerciseOptions);
//             setEquipmentExercises(equipmentExercisesData);
//         };

//         fetchExercisesData();
//     }, [id]);


// return (
//     <>
//             <MDBCard>
//                 <MDBCardBody>LET'S BUILD TODAY'S EXERCISE PLAN</MDBCardBody>
//             </MDBCard>

//             <MDBRow>
//                 <MDBCol sm='6'>
//                     <MDBCard>
//                         <MDBCardBody>
//                             <MDBCardTitle>What body part do you want to focus on?</MDBCardTitle>
//                                 <MDBDropdown>
//                                 <MDBDropdownToggle tag='a' className='btn btn-primary'>Choose a body part!</MDBDropdownToggle>
//                                     <MDBDropdownMenu>
//                                         <MDBDropdownItem link>Back</MDBDropdownItem>
//                                         <MDBDropdownItem link>Cardio</MDBDropdownItem>
//                                         <MDBDropdownItem link>Chest</MDBDropdownItem>
//                                         <MDBDropdownItem link>Lower Arms</MDBDropdownItem>
//                                         <MDBDropdownItem link>Lower Legs</MDBDropdownItem>
//                                         <MDBDropdownItem link>Neck</MDBDropdownItem>
//                                         <MDBDropdownItem link>Shoulders</MDBDropdownItem>
//                                         <MDBDropdownItem link>Upper Arms</MDBDropdownItem>
//                                         <MDBDropdownItem link>Upper Legs</MDBDropdownItem>
//                                         <MDBDropdownItem link>Waist</MDBDropdownItem>
//                                     </MDBDropdownMenu>
//                                 </MDBDropdown>
//                         </MDBCardBody>
//                     </MDBCard>
//                 </MDBCol>


//                 <MDBCol sm='6'>
//                     <MDBCard>
//                         <MDBCardBody>
//                             <MDBCardTitle>
//                                 <Form.Group className="mb-3" controlId="formGroupEmail">
//                                     <Form.Label></Form.Label>
//                                     <Form.Control type="Workout" placeholder="New Workout Title" />
//                                 </Form.Group>

//                             </MDBCardTitle>
//                             <MDBCardText>
//                                 With supporting text below as a natural lead-in to additional content.
//                             </MDBCardText>
    
//                         </MDBCardBody>
//                     </MDBCard>
//                 </MDBCol>
//             </MDBRow>
//         </>
//     );
// };

// export default newExercise;

import React, { useEffect, useState } from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/ExerciseCard'

const ExerciseNew = ({ form, onChange, onSubmit }) => (
    <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
            <Card
                {...form}
            />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
            <ExerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
    </div>
)

export default ExerciseNew