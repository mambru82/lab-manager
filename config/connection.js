//connection settings, including setting environment variables

const Sequelize = require('sequelize');

require('dotenv').config();


const sequelize = process.env.JAWSDB_URL
//using JAWSDB application for the remote deployment
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;