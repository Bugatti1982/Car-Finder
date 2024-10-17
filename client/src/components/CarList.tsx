import { useState, useEffect} from 'react';
import Card from './Card';
import { Box } from '@mui/material';
import theme from '../theme';
// Define the type for the car data
const CarList = () => {
  const [cars, setCars] = useState<any>(null);

  useEffect(() => {
      try {
        fetch('/api/cars').then((result) => {
          return result.json()
        })
        .then((data) => {
          setCars(data);
          console.log(data)
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }, []);

  if (!cars) {
    return <div>Loading...</div>;
  }


  function onViewDetails(_id: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Box sx={theme.rightFrame.container}>
      {cars.map((Car: any) => (
        <Card
          key={Car.id}
          title={Car.name}
          description={Car.description}
          onViewDetails={() => onViewDetails(Car.id)} // Handle view details
        />
      ))}
    </Box>
  );
};

export default CarList;