const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Tech extends Model {}

Tech.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supervisor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assay_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "assay",
                key: "id"
            }
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


module.exports = Tech;