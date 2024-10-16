import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Box } from '@mui/material';
import theme from '../theme';
import { retrieveWorks } from '../api/workAPI'; // Import the API function

// Define the type for the car data
interface Car {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CardListProps {
  onViewDetails: (id: number) => void; // Explicitly type onViewDetails as a function that takes a number
}

const CardList: React.FC<CardListProps> = ({ onViewDetails }) => {
  const [cars, setCars] = useState<Car[]>([]);  // Set the state type to an array of Car

  // Fetch data from the backend when the component is mounted
  useEffect(() => {
    retrieveWorks()
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  return (
    <Box sx={theme.rightFrame.container}>
      {cars.map((car) => (
        <Card
          key={car.id}
          title={car.name}
          description={car.description}
          image={car.image} // Dynamically load image from backend
          onViewDetails={() => onViewDetails(car.id)} // Handle view details
        />
      ))}
    </Box>
  );
};

export default CardList;