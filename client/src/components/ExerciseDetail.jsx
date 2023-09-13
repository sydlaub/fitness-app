import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const ExerciseDetail = ({ id }) => {
    const [exerciseDetail, setExerciseDetail] = useState({});

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        };

        fetchExerciseData();
    }, [id]);

    return (
        <div>
            <h3>Exercise Detail</h3>
            <pre>{JSON.stringify(exerciseDetail, null, 2)}</pre>
        </div>
    );
};

export default ExerciseDetail;
