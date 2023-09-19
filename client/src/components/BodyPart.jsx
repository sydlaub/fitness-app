import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            border: '1px solid #ccc', // Add a border for spacing
            borderRadius: '20px', // Rounded corners
            padding: '50px', // Adjust padding as needed
            cursor: 'pointer',
            transition: '0.3s all ease-in-out',
            marginRight: '50px', // Adjust spacing between boxes
            background: bodyPart === item ? '#fff' : 'transparent', // Change background color on hover
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
);

export default BodyPart;
