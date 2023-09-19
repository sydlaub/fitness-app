import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Exercises from "../../components/Exercises";
import SearchExercises from "../../components/SearchExercises";
import './index.css';
import ExerciseCard from "../../components/ExerciseCard";
import ExerciseForm from "../../components/ExerciseForm";

const NewExercise = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");
    const [selectedExercises, setSelectedExercises] = useState([]);

    // Callback function to handle exercise selection
    const handleExerciseSelection = (exerciseName) => {
        const isAlreadySelected = selectedExercises.includes(exerciseName);

        if (isAlreadySelected) {
            setSelectedExercises(selectedExercises.filter((exercise) => exercise !== exerciseName));
        } else {
            setSelectedExercises([...selectedExercises, exerciseName]);
        }
    };

    return (
        <main>
            <Box>
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                <Exercises
                    setExercises={setExercises}
                    exercises={exercises}
                    bodyPart={bodyPart}
                />
            </Box>
            <div>
                <button>
                    Connect to Spotify
                </button>
                <button>
                    Start Workout
                </button>
            </div>

            {/* Render ExerciseCards */}
            <Stack direction="row" justifyContent="center" alignItems="center">
                {exercises.map((exercise, idx) => (
                    <ExerciseCard
                        key={idx}
                        exercise={exercise}
                        item={exercise}
                        onClick={() => handleExerciseSelection(exercise.name)} // Apply onClick directly to ExerciseCard
                    />
                ))}
            </Stack>

            {/* Render ExerciseForm with selected exercises */}
            {selectedExercises.length > 0 && (
                <ExerciseForm selectedExercises={selectedExercises} />
            )}
        </main>
    );
};

export default NewExercise;