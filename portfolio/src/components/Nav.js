import React from 'react';
import { Button, Box } from '@mui/material';

const handleResumeClick = () => {

  window.open('https://docs.google.com/document/d/1VBIZ3OtISSR8rSYseZYsqbDUBRqkwxS9tVsXOI835HA/edit?usp=sharing')
}

export default function Nav() {
  return (
    <Box className='navBox'>
      <Button href='#home' className='navButton' variant='contained'>Home</Button>
      <Button href='#about' className='navButton' variant='contained'>About</Button>
      <Button href='#projects' className='navButton' variant='contained'>Projects</Button>
      <Button href='#contactMe' className='navButton' variant='contained'>Contact Me</Button>
      <Button className='navButton' variant='contained' onClick={handleResumeClick}>Resume</Button>
    </Box>
  );
}
