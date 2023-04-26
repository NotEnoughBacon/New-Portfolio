import React from 'react';
import Box from '@mui/material/Box';

export default function Header() {
    return(

        <Box
            sx={{
                width: '100%',
                height: '100%',
                bgcolor: 'blue',
                color: 'white',
                borderRadius: '0px 0px 20px 20px',
                p: 1,
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
            }}>
        </Box>    
    )
}