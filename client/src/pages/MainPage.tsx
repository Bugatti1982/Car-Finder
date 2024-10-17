// src/pages/MainPage.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftFrame from '../components/LeftFrame';
import CarList from '../components/CarList';

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
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
            }} />

            <Header />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                paddingTop: '80px',
                paddingBottom: '64px',
                overflowY: 'auto',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxWidth: '1200px',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                }}>
                    <LeftFrame onSearch={handleSearch} />
                    <CarList onSelect={handleSelect} searchQuery={searchQuery} /> {/* Pass the search query */}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default MainPage;
