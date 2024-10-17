// src/pages/MainPage.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftFrame from '../components/LeftFrame';
import RightFrame from '../components/RightFrame';
import CarList from '../components/CarList';

// Sample data for demonstration purposes
const sampleCars = [
    { id: 1, name: 'Toyota Camry', image: '/images/test1.jpg', description: 'Reliable sedan with great fuel efficiency.' },
    { id: 2, name: 'Honda Accord', image: '/images/test2.jpg', description: 'Spacious interior with advanced technology.' },
    { id: 3, name: 'Tesla Model 3', image: '/images/test3.jpg', description: 'Electric vehicle with cutting-edge features.' }
];

const MainPage: React.FC = () => {
    const [cars, setCars] = useState(sampleCars);

    const handleSearch = (query: string) => {
        const filteredCars = sampleCars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));
        setCars(filteredCars);
    };

    const handleSelect = (id: number) => {
        console.log(`Selected car ID: ${id}`);
        // You can navigate to a detailed view here if desired
    };

    return (
        <Box sx={{
            position: 'relative',
            overflow: 'hidden',
            height: '100vh',
            width: '100vw',
            backgroundImage: `url('bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            {/* Background Box */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1 // Ensure it stays behind other elements
            }} />

            {/* Main content */}
            <Header />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                flex: 1,
                paddingTop: '80px', // Space for fixed header
                paddingBottom: '64px', // Space for fixed footer
                overflowY: 'auto', // Allow scrolling in this area
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxWidth: '1200px', // Set a max width for the content
                    width: '100%', // Full width within max width
                    height: '100%', // Full height to align frames
                    justifyContent: 'space-between', // Space between left and right frames
                }}>
                    <LeftFrame onSearch={handleSearch} />
                    <RightFrame cars={cars} onSelect={handleSelect} />
                </Box>
            </Box>
            <CarList>
                
            </CarList>
            <Footer />
        </Box>
    );
};

export default MainPage;