// src/pages/MainPage.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftFrame from '../components/LeftFrame';
import CarList from '../components/CarList';
import ParentFrame from '../components/ParentFrame';  // Import the ParentFrame
import Login from '../components/Login';  // Import the Login component
import theme from '../theme';  // Import the theme

// MainPage component
const MainPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleSelect = (id: number) => {
        console.log(`Selected car ID: ${id}`);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleLogin = (username: string, password: string) => {
        setIsLoggedIn(true);
    };

    return (
        <Box sx={theme.mainPage.container}>
            <Box sx={theme.mainPage.backgroundBox} />

            <Header />
            <Box sx={theme.mainPage.content}>
                <Box sx={theme.mainPage.layoutContainer}>
                    {/* Conditionally render Login component or the ParentFrame */}
                    {isLoggedIn ? (
                        <ParentFrame>
                            <LeftFrame onSearch={handleSearch} />
                            <CarList onSelect={handleSelect} searchQuery={searchQuery} />
                        </ParentFrame>
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default MainPage;
