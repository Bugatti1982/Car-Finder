// src/pages/MainPage.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParentFrame from '../components/ParentFrame';
import LeftFrame from '../components/LeftFrame';
import RightFrame from '../components/RightFrame';
import CardList, { carData } from '../components/CardList';
import theme from '../theme';

const MainPage: React.FC = () => {
    const [cars, setCars] = useState(carData);

    const handleSearch = (query: string) => {
        const filteredCars = carData.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));
        setCars(filteredCars);
    };

    const handleSelect = (id: number) => {
        console.log(`Selected car ID: ${id}`);
        // You can navigate to a detailed view here if desired
    };

    return (
        <Box sx={theme.mainPage.container}>
            {/* Background Box */}
            <Box sx={theme.mainPage.backgroundBox} />

            {/* Main content */}
            <Header />
            <Box sx={theme.mainPage.content}>
                <ParentFrame> {/* Use ParentFrame here */}
                    <LeftFrame onSearch={handleSearch} />
                    <RightFrame cars={cars} onSelect={handleSelect} />
                </ParentFrame>
            </Box>
            <Footer />
        </Box>
    );
};

export default MainPage;