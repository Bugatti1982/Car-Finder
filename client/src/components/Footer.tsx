// src/components/Footer.tsx
//imports the dependencies
import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../theme'; // Adjust the import path as necessary

// Footer component
const Footer: React.FC = () => {
    return (
        // The box component is used as container for footer content
        // The typography component is used to display the copyright notice
        <Box sx={theme.footer.container}>
            <Typography variant="body2" sx={theme.footer.text}>
                © 2024 Car Finder
            </Typography>
        </Box>
    );
};

export default Footer;
