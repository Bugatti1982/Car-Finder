// src/components/Header.tsx
// imports the dependencies
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import theme from '../theme'; // Adjust the import path as necessary

// Header component
// This is main container for Header component
// The position prop is set to fixed to ensure that the header remains at the top of the page when scrolling
// The title of the application is displayed using the Typography component 
// 
const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={theme.header.appBar}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography variant="h6" sx={theme.header.title}>
                    Car Finder
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;