import { Model, Sequelize, DataTypes } from 'sequelize';

export class WorkOrderStatus extends Model{
    public id?: number;
    public name!: string;
}

export const WorkOrderStatusMap = (sequelize: Sequelize) => {
    WorkOrderStatus.init(
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
            tableName: 'work-order-status',
            timestamps: false
        }
    );
    WorkOrderStatus.sync();
}