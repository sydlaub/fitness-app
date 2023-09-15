// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { Box } from "@mui/material";

// import Exercises from "../../components/Exercises";
// import './index.css';

// const newExercise = () => {
//     const [exercises, setExercises] = useState([]);
//     const [bodyPart, setBodyPart] = useState("all");

//     return (
//         <main>
//             <Box>
//                 <Exercises
//                     setExercises={setExercises}
//                     exercises={exercises}
//                     bodyPart={bodyPart}
//                 />
//             </Box>
//             <div>
//                 <button><Link to='/music'>
//                     Connect to Spotify
//                 </Link>
//                 </button>
//                 <button><Link to='/startworkout'>

//                     Start Workout
//                 </Link>
//                 </button>
//             </div>
//         </main>

//     );
// };

// export default newExercise;