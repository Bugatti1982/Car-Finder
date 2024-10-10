// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: 'rgba(34, 34, 34, 0.8)',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                padding: '16px',
                textAlign: 'center',
                backdropFilter: 'blur(5px)',
            }}
        >
            <Typography variant="body2" sx={{ color: '#EAEAEA' }}>
                © 2024 Car Finder
            </Typography>
        </Box>
    );
};

export default Footer;
