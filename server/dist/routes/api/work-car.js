var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Initialize express router
import express from 'express';
// Import work model
import { Work } from '../../models/work.js';
// Import car model
import { Car } from '../../models/index.js';
// Create a new router to handle /works routes
const router = express.Router();
//  GET /works - Get all Works
// This route will return all works and include the assigned car
// The assigned car will only include the CarName attribute
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const works = yield Work.findAll({
            include: [
                {
                    model: Car,
                    as: 'assignedCar', // This should match the alias defined in the association
                    attributes: ['CarName'], //Include only the CarName attribute
                },
            ],
        });
        res.json(works); // Return the works as JSON
    }
    // If there is an error, return the error message
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}));
// GET /works/:id - Get work by ID
// This makes sure the client recieves the work with the assigned car or error message if not found
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const work = yield Work.findByPk(id, {
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
        }
        else {
            res.status(404).json({
                message: 'Work not found' // sends meaage work not found
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}));
// POST /works - Create new work
// sets up a POST request to the endpoint at root path
// when requested the callback fuction will be executed
// this includes details of the work item to be created
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, status, description, assignedCarId } = req.body;
    //contains main logic to create a new work item
    // if successful will be stored in the newWork variable
    try {
        const newWork = yield Work.create({
            name, status, description, assignedCarId
        });
        // if successful, the new work item will be returned as JSON to the client
        res.status(201).json(newWork);
        // otherwise error message will be returned
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}));
// PUT /works/:id - Update work by ID
// Same as above, but this time we are updating the id
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, status, description, assignedCarId } = req.body;
    try {
        const work = yield Work.findByPk(id);
        if (work) {
            work.name = name;
            work.status = status;
            work.description = description;
            work.assignedCarId = assignedCarId;
            yield work.save();
            res.json(work);
        }
        else {
            res.status(404).json({
                message: 'Work not found'
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}));
// DELETE /works/:id - Delete work by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const work = yield Work.findByPk(id);
        if (work) {
            yield work.destroy();
            res.json({ message: 'Work deleted' });
        }
        else {
            res.status(404).json({
                message: 'Work not found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}));
export { router as workRouter };
