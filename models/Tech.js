const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Tech extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

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
            defaultValue: 1,
            references: {
                model: "assay",
                key: "id"
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 32],
                    msg: 'Password must be between 8-32 characters in length'
                }
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newTechData) {
                newTechData.password = await bcrypt.hash(newTechData.password, 10)
                return newTechData;
            },

            async beforeUpdate(updatedTechData) {
                updatedTechData.password = await bcrypt.hash(updatedTechData.password, 10);
                return updatedTechData;
            }
        },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tech"
    }
);


module.exports = Tech;