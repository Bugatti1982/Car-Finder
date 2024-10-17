//Connects to Car.ts file and Work.ts file
import sequelize from '../config/connection.js';
import { CarFactory } from './car.js';
import { WorkFactory } from './work.js';
const Car = CarFactory(sequelize);
const Work = WorkFactory(sequelize);
Car.hasMany(Work, { foreignKey: 'assignedCarId' });
Work.belongsTo(Car, { foreignKey: 'assignedCarId', as: 'assignedCar' });
export { Car, Work };
