import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../../components/Exercises";
import './index.css';

const newExercise = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");

    return (
        <main>
            <Box>
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
        </main>

    );
};

export default newExercise;