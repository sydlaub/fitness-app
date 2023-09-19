// Exercise form to show on NewExercise page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const ExerciseForm = ({ exercise, item }) => {
    // Define state to hold the selected exercises
    const [selectedExercises, setSelectedExercises] = useState([]);

    // Function to handle the selection of an exercise
    const handleExerciseSelection = (selectedExercise) => {
        // Check if the exercise is already selected
        const isAlreadySelected = selectedExercises.includes(selectedExercise);

        if (isAlreadySelected) {
            // If already selected, remove it from the list
            setSelectedExercises(selectedExercises.filter((exercise) => exercise !== selectedExercise));
        } else {
            // If not selected, add it to the list
            setSelectedExercises([...selectedExercises, selectedExercise]);
        }
    };

    // Function to render the form with selected exercises
    const renderExerciseForm = () => {
        return (
            <form>
                <Typography variant="h5">Selected Exercises:</Typography>
                <FormControl component="fieldset">
                    <FormGroup>
                        {selectedExercises.map((selectedExercise, index) => (
                            <FormControlLabel
                                key={index}
                                control={<Checkbox checked={true} />} 
                                label={selectedExercise}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </form>
        );
    };

    return (
        <div>
            <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                <Stack
                    direction="row"
                    sx={exercise === item}
                    onClick={() => {
                        setExercise(item);
                        handleExerciseSelection(exercise.name); // Call the function to add/remove selected exercise
                    }}
                >
                </Stack>
            </Link>
            {selectedExercises.length > 0 && renderExerciseForm()} {/* Render the form if exercises are selected */}
        </div>
    );
};

export default ExerciseForm;