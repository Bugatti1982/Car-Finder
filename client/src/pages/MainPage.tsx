// src/pages/MainPage.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftFrame from '../components/LeftFrame';
import CarList from '../components/CarList';
import theme from '../theme';  // Import the theme

// MainPage component
const MainPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSelect = (id: number) => {
        console.log(`Selected car ID: ${id}`);
        // You can navigate to a detailed view here if desired
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);  // Update the search query state
    };

    return (
        <Box sx={theme.mainPage.container}>
            <Box sx={theme.mainPage.backgroundBox} />

            <Header />
            <Box sx={theme.mainPage.content}>
                <Box sx={theme.mainPage.layoutContainer}>
                    <LeftFrame onSearch={handleSearch} />
                    <CarList onSelect={handleSelect} searchQuery={searchQuery} />
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default MainPage;
