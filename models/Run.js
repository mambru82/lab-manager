const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Run extends Model {}

Run.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        assay_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'assay',
                key: 'id'
            }
        },
        tech_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tech',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "run"
    }
);


module.exports = Run;