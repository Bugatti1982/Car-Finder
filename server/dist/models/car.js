// imports the react-dom/client library
import { DataTypes, Model } from 'sequelize';
// The properties are marked with the !.  This operator will be assigned a value at runtime.
// By extending the carr class gains all the methods of the model class & enforces the structure defined by CarAttributes and 
// CarCreationAttributes.  This setup insures type safety and consistency when working with Car instances in the app.
export class Car extends Model {
}
// CarFactory function that takes in sequelize and returns the Car model
// This allows for the interaction of the car table in the database
export function CarFactory(sequelize) {
    Car.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        tableName: 'Car',
        sequelize,
    });
    return Car;
}
