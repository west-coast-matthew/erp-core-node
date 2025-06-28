"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TankMap = exports.Tank = void 0;
const sequelize_1 = require("sequelize");
// https://medium.com/@mghextreme/api-setup-using-nodejs-typescript-postgres-and-sequelize-48a0af72dda6
class Tank extends sequelize_1.Model {
}
exports.Tank = Tank;
const TankMap = (sequelize) => {
    Tank.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255)
        },
    }, {
        sequelize,
        tableName: 'tank',
        timestamps: false
    });
    Tank.sync();
};
exports.TankMap = TankMap;
