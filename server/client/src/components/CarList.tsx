// src/components/CarList1.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Card from './Card';
import theme from '../theme';

interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    price: number;
}

interface CarListProps {
    onSelect: (id: number) => void;
    searchQuery: string;  // Add searchQuery prop
}

const CarList: React.FC<CarListProps> = ({ onSelect, searchQuery }) => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('/api/cars');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Car[] = await response.json();
                setCars(data);
            } catch (error: any) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch car data.'); // Set error message
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    // Filter cars whenever searchQuery changes
    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by make
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by model
    );

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return (
            <Box sx={theme.errorMessage.container}>
                <Typography variant="body1">{error}</Typography> {/* Use Typography for consistent text styling */}
            </Box>
        ); // Show error message with theme styles
    }

    return (
        <Box sx={theme.rightFrame.container}>
            {filteredCars.map(car => (
                <Card
                    key={car.id}
                    title={`${car.make} ${car.model} (${car.year})`} // Display make and model with year
                    description={`Price: $${car.price.toLocaleString()}`} // Display price formatted with commas
                    onViewDetails={() => onSelect(car.id)}
                />
            ))}
        </Box>
    );
};

export default CarList;
