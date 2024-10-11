// src/components/RightFrame.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

interface Car {
    id: number;
    name: string;
    image: string;
    description: string;
}

interface RightFrameProps {
    cars: Car[];
    onSelect: (id: number) => void;
}

const RightFrame: React.FC<RightFrameProps> = ({ cars, onSelect }) => {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
                padding: '16px',
                bgcolor: 'rgba(255, 255, 255, 0.8)', // Light background for visibility
                borderRadius: '8px',
                boxShadow: 2,
            }}
        >
            {cars.map(car => (
                <Card key={car.id} sx={{ maxWidth: 200 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={car.image}
                        alt={car.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {car.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {car.description}
                        </Typography>
                    </CardContent>
                    <Button
                        variant="contained"
                        onClick={() => onSelect(car.id)}
                        sx={{ bgcolor: 'primary.main', color: 'white' }}
                    >
                        View Details
                    </Button>
                </Card>
            ))}
        </Box>
    );
};

export default RightFrame;
