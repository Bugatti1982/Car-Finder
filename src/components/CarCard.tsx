// src/components/CarCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface CarCardProps {
    car: {
        id: number;
        name: string;
        image: string;
        description: string;
    };
    onSelect: (id: number) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia component="img" height="140" image={car.image} alt={car.name} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {car.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => onSelect(car.id)} sx={{ marginTop: 2 }}>
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
};

export default CarCard;
