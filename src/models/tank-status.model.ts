import {Model, Sequelize, DataTypes} from 'sequelize';

export class TankStatus extends Model{
    public id?: number;
    public name!: string;
}

export const TankStatusMap = (sequelize: Sequelize) => {
    TankStatus.init(
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
            tableName: 'tank-status',
            timestamps: false
        }
    );
    TankStatus.sync();
}