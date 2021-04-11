const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class AssayTech extends Model {}

AssayTech.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tech_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tech',
                key: 'id'
            }
        },
        assay_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'assay',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'assay_tech',
    }
);

module.exports = AssayTech;