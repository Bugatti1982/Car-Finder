import { Car } from '../models/index.js';

export const seedCars = async () => {
  await Car.bulkCreate([
    {
      make: 'Lambo',
      model: 'Murci SV',
      year: 2010,
      price: 1000000
    },
    {
      make: 'Lincoln',
      model: 'Continnental MKV',
      year: 1972,
      price: 1
    },
    {
      make: 'Cadillac',
      model: 'El Dorado',
      year: 1980,
      price: 10000
    },
    {
      make: 'Pontiac',
      model: 'GTO Judge',
      year: 1968,
      price: 10000
    }
    
  ], { individualHooks: true})
}

