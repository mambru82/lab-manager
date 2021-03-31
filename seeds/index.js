const seedAssay = require('./assay-seeds');
const seedPatient = require('./patient-seeds');
const seedResults = require('./results-seeds');
const seedRun = require('./run-seeds');
const seedTech = require('./tech-seeds'); 

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedAssay();
  console.log('\n----- Techs seeded -----\n');

  await seedPatient();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTech();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedRun();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  await seedResults();
  console.log('\n----- RESULTS SEEDED-----\n')

  process.exit(0);
};

seedAll();
