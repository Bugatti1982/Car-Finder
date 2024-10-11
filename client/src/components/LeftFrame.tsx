// src/components/LeftFrame.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

interface LeftFrameProps {
    onSearch: (query: string) => void;
}

const LeftFrame: React.FC<LeftFrameProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery(''); // Clear the search input after submitting
    };

    return (
        <Box
            sx={{
                width: '250px', // Fixed width for the left frame
                bgcolor: 'rgba(255, 255, 255, 0.8)', // Light background for visibility
                borderRadius: '8px',
                padding: '16px',
                boxShadow: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }}
        >
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                Search Cars
            </Typography>
            <TextField
                variant="outlined"
                placeholder="Enter car name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
            />
            <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ bgcolor: 'primary.main', color: 'white' }}
            >
                Search
            </Button>
        </Box>
    );
};

export default LeftFrame;
