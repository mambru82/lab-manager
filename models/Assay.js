const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Assay extends Model {}

Assay.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        assay_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        analyte: {
            type: DataTypes.ARRAY,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tech"
    }
);


module.exports = Assay;