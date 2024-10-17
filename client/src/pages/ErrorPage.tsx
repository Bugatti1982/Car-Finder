// src/pages/ErrorPage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorPage: React.FC = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4">Error 404</Typography>
            <Typography variant="body1">Page not found!</Typography>
        </Box>
    );
};

export default ErrorPage;
