import {Model, Sequelize, DataTypes} from 'sequelize';

export class TankType extends Model{
    public id?: number;
    public name!: string;
}

export const TankTypeMap = (sequelize: Sequelize) => {
    TankType.init(
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
            tableName: 'tank-type',
            timestamps: false
        }
    );
    TankType.sync();
}