var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { Car } from '../../models/car.js';
const router = express.Router();
// GET /Cars - Get all Cars
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Cars = yield Car.findAll();
        res.json(Cars);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}));
// GET /Cars/:id - Get a Car by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const car = yield Car.findByPk(id);
        if (car) {
            res.json(car);
        }
        else {
            res.status(404).json({
                message: 'Car not found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}));
// POST /Cars - Create a new Car
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCar = yield Car.create(req.body);
        res.status(201).json(newCar);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}));
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
