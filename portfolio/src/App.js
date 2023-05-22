import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import { Box } from '@mui/material';

export default function App() {

    return(
        <Box>
            <Nav />
            <Header />
            <About />
        </Box>   
    )
}
