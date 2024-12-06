import {Model, Sequelize, DataTypes, CreationOptional} from 'sequelize';

export class OperationCode extends Model{
    public id?: number;
    public name!: string;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
}

export const OperationCodeMap = (sequelize: Sequelize) => {
    OperationCode.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(255)
            },
            createdAt: {
                field: 'created_at',
                type:DataTypes.DATE
            },
            updatedAt: {
                field: 'updated_at',
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            tableName: 'operation-code',
            timestamps: false
        }
    );
    OperationCode.sync();
}