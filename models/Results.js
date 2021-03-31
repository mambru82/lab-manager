const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model {}

Results.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        patient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'patient',
                key:'id'
            }
        },
        run_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'run',
                key: 'id'
            }
        },
        seq_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_primer_changes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        clade: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        qc_missing_data: {
            score: {
                type: DataTypes.INTEGER,
                allowNull: true    
            },
            total_missing: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            missing_data_threshold: {
                defaultValue: 3000,
                type: DataTypes.INTEGER,
                allowNull: true
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },
        qc_overall_score: {
            overall_score: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            overall_status: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "results"
    }
);


module.exports = Results;