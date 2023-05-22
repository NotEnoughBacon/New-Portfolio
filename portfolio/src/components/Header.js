import React from 'react';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      <header className='header'>
        <h1 id='home'>Julian Kenyon</h1>
        <h3>EXTREMELY FULL STACK-DEVELOPER</h3>
        <img
          alt='Julian taking a selfie, smiling at the camera, in the background is Going to the sun road in Montana, along with the mountains'
          src='./images/Face pic cropped.jpg'
        ></img>
      </header>
    </Box>
  );
}
