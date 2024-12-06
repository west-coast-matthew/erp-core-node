import { Model, Sequelize, DataTypes } from 'sequelize';

// https://medium.com/@mghextreme/api-setup-using-nodejs-typescript-postgres-and-sequelize-48a0af72dda6

export class Tank extends Model{
    public id?: number;
    public name!: string;
}

export const TankMap = (sequelize: Sequelize) => {
    Tank.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
              name: {
                type: DataTypes.STRING(255)
              },
        },
        {
            sequelize,
            tableName: 'tank',
            timestamps: false
        }
    );
    Tank.sync();
}