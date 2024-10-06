import express from 'express';
import type { Request, Response } from 'express';
import { Work } from '../../models/work.js';
import { Car } from '../../models/index.js';
const router = express.Router();

//  GET /works - Get all Works
router.get('/', async (_req: Request, res: Response) => {
  try {
    const works = await Work.findAll({
      include: [
        {
          model: Car,
          as: 'assignedCar', // This should match the alias defined in the association
          attributes: ['CarName'], //Include only the CarName attribute
        },
      ],
    });
    res.json(works);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
})

// GET /works/:id - Get work by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const work = await Work.findByPk(id, {
      include: [
        {
          model: Car,
          as: 'assignedCar', // This should match the alias defined in the association
          attributes: ['CarName'], //Include only the CarName attribute
        },
      ],
    });
    if (work) {
      res.json(work);
    } else {
      res.status(404).json({
        message: 'Work not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /works - Create new work
router.post('/', async (req: Request, res: Response) => {
  const { name, status, description, assignedCarId } = req.body;
  try {
    const newWork = await Work.create({
      name, status, description, assignedCarId
    });
    res.status(201).json(newWork);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// PUT /works/:id - Update work by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, status, description, assignedCarId } = req.body;
  try {
    const work = await Work.findByPk(id);
    if (work) {
      work.name = name;
      work.status = status;
      work.description = description;
      work.assignedCarId = assignedCarId;
      await work.save();
      res.json(work);
    } else {
      res.status(404).json({
        message: 'Work not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE /works/:id - Delete work by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const work = await Work.findByPk(id);
    if (work) {
      await work.destroy();
      res.json({ message: 'Work deleted' });
    } else {
      res.status(404).json({
        message: 'Work not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as workRouter };
