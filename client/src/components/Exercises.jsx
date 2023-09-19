import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ bodyPart }) => {
    const [exercises, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);
    const [loading, setLoading] = useState(true);
    const [selectedExercise, setSelectedExercise] = useState(null);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            if (Array.isArray(exercisesData)) {
                setExercises(exercisesData);
                setLoading(false);
            } else {
                // Handle the case where exercisesData is not an array (e.g., an error occurred during fetching).
                setLoading(false); // Set loading to false to stop the loader.
            }
        };

        fetchExercisesData();
    }, [bodyPart]);

    // Function to handle exercise card click and set the selected exercise
    const handleExerciseCardClick = (exercise) => {
        setSelectedExercise(exercise);
    };

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Choose exercises to add to today's game plan!</Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard
                        key={idx}
                        exercise={exercise}
                        onClick={() => handleExerciseCardClick(exercise)} // Pass the click handler to ExerciseCard
                    />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
