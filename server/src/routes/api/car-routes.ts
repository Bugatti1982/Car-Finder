import express from 'express';
import type { Request, Response } from 'express';
import { Car } from '../../models/car.js';

const router = express.Router();

// GET /Cars - Get all Cars
router.get('/', async (_req: Request, res: Response) => {
  try {
    const Cars = await Car.findAll();
    res.json(Cars);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /Cars/:id - Get a Car by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const car = await Car.findByPk(id);
    if(car) {
      res.json(car);
    } else {
      res.status(404).json({
        message: 'Car not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /Cars - Create a new Car
router.post('/', async (req: Request, res: Response) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// PUT /Cars/:id - Update a Car by ID
// router.put('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { CarName } = req.body;
//   try {
//     const Car = await Car.findByPk(id);
//     if(Car) {
//       Car.CarName = CarName;
//       await Car.save();
//       res.json(Car);
//     } else {
//       res.status(404).json({
//         message: 'Car not found'
//       });
//     }
//   } catch (error: any) {
//     res.status(400).json({
//       message: error.message
//     });
//   }
// });

// // DELETE /Cars/:id - Delete a Car by ID
// router.delete('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const Car = await Car.findByPk(id);
//     if(Car) {
//       await Car.destroy();
//       res.json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({
//         message: 'User not found'
//       });
//     }
//   } catch (error: any) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// });

export { router as CarRouter };
