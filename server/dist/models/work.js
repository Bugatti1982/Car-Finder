//must install required packages
//npm install react-router-dom
//npm install @types/react-router-dom
//npm install @types/react
import { DataTypes, Model } from 'sequelize';
export class Work extends Model {
}
// WorkFactory function that takes in sequelize and returns the Work model
//The sequelize instance is passed to associate the model with a specific database connection
// the function returns the initialized Work model
export function WorkFactory(sequelize) {
    Work.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignedCarId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'work',
        sequelize,
    });
    return Work;
}
