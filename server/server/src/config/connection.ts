import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';


const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || 'car',
      process.env.DB_USER || 'cars',
      process.env.DB_PASSWORD || 'password',
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export default sequelize;