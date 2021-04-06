const {Run} = require('../models');

const runData = [
    {
        tech_id: '1',
        assay_id: '1'
    },
    {
        tech_id: '2',
        assay_id: '1'
    }
];

const seedRun = () => Run.bulkCreate(runData);

module.exports = seedRun;