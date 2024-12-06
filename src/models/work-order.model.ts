import { Model, Sequelize, DataTypes } from 'sequelize';

export class WorkOrder extends Model{
    public id?: number;
    public name!: string;
}

export const WorkOrderMap = (sequelize: Sequelize) => {
    WorkOrder.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
        },
        {
            sequelize,
            tableName: 'work-order',
            timestamps: false
        }
    );
    WorkOrder.sync();
}