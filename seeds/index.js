const seedPatients = require('./patient-seeds');
const seedAssay = require('./assay-seeds');
const seedTech = require('./tech-seeds');
const seedRun = require('./run-seeds');
const seedResults = require('./results-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log ('\n----- DATABASE SYNCED -----\n');

    await seedPatients();
    console.log('\n----- PATIENTS SEEDED -----\n');

    await seedAssay();
    console.log('\n----- ASSAY SEEDED -----\n');

    await seedTech();
    console.log('\n----- TECH SEEDED -----\n');

    await seedRun();
    console.log('\n----- RUN SEEDED -----\n');

    await seedResults();
    console.log('\n----- RESULTS SEEDED -----\n');

    process.exit(0);
};

seedAll();