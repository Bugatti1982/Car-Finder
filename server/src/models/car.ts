import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface CarAttributes {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
}

interface CarCreationAttributes extends Optional<CarAttributes, 'id'> {}

export class Car extends Model<CarAttributes, CarCreationAttributes> implements CarAttributes {
  public id!: number;
  public make!: string;
  public model!: string;
  public year!: number;
  public price!: number;
}

export function CarFactory(sequelize: Sequelize): typeof Car {
  Car.init(
    {
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
    },
    {
      tableName: 'Car',
      sequelize,
    }
  );


  return Car;
}
