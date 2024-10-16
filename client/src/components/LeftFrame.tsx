// src/components/LeftFrame.tsx
// imports the dependencies
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import theme from '../theme'; // Ensure correct import path

// defines the expected properties
// (query: string) => void; is a function that takes a string as an argument and returns void
interface LeftFrameProps {
    onSearch: (query: string) => void;
}

// LeftFrame component
// This is the main container for the LeftFrame component ie the car search form
const LeftFrame: React.FC<LeftFrameProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery(''); // Clear the search input after submitting
    };

    return (
        <Box sx={theme.leftFrame.container}>
            <Typography variant="h6" component="h2" sx={theme.leftFrame.title}>
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
                sx={theme.leftFrame.button}
            >
                Search
            </Button>
        </Box>
    );
};

export default LeftFrame;