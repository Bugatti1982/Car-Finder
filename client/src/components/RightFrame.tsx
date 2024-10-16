// src/components/RightFrame.tsx
// Imports the dependencies
import React from 'react';
import { Box } from '@mui/material';
import Card from './Card';
import theme from '../theme';

// defines the expected properties
interface Car {
    id: number;
    name: string;
    description: string;
}

// This is the main container for the RightFrame component
interface RightFrameProps {
    cars: Car[];
    onSelect: (id: number) => void;
}
// the RightFrame is a functional Component
const RightFrame: React.FC<RightFrameProps> = ({ cars, onSelect }) => {
    // The Box component is used as a container for the car cards ie; type, description and view details button 
    return (
        <Box sx={theme.rightFrame.container}>
            {cars.map(car => (
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

export default RightFrame;
