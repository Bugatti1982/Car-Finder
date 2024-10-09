// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ bgcolor: 'rgba(34, 34, 34, 0.8)', backdropFilter: 'blur(5px)' }}>
            <Toolbar>
                {/* Add this Box to push the "Car Finder" text to the right */}
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography variant="h6" sx={{ color: '#EAEAEA' }}>
                    Car Finder
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;