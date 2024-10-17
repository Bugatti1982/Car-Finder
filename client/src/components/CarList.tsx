// src/components/CarList.tsx
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Card from './Card';
import theme from '../theme';

// Sample data for demonstration purposes
const sampleCars = [
    { id: 1, name: 'Toyota Camry', image: '/images/test1.jpg', description: 'Reliable sedan with great fuel efficiency.' },
    { id: 2, name: 'Honda Accord', image: '/images/test2.jpg', description: 'Spacious interior with advanced technology.' },
    { id: 3, name: 'Tesla Model 3', image: '/images/test3.jpg', description: 'Electric vehicle with cutting-edge features.' }
];

// This defines the expected properties for the CarList component
interface Car {
    id: number;
    name: string;
    description: string;
}

interface CarListProps {
    onSelect: (id: number) => void;
    searchQuery: string;  // Add searchQuery prop
}

// CarList component
const CarList: React.FC<CarListProps> = ({ onSelect, searchQuery }) => {
    const [filteredCars, setFilteredCars] = useState(sampleCars);

    useEffect(() => {
        // Filter cars whenever searchQuery changes
        const filtered = sampleCars.filter(car => 
            car.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCars(filtered);
    }, [searchQuery]); // Dependency on searchQuery

    return (
        <Box sx={theme.rightFrame.container}>
            {filteredCars.map(car => (
                <Card
                    key={car.id}
                    title={car.name}
                    description={car.description}
                    onViewDetails={() => onSelect(car.id)}
                />
            ))}
        </Box>
    );
};

export default CarList;
