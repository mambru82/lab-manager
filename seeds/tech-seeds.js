const {Tech} = require('../models');

const techData = [
    {
        first_name: 'Meridith',
        last_name: 'Grey',
        supervisor: 'Derek Shepherd',
        username: 'elegante',
        password: '1234',
        assay_id: '1'
    },
    {
        first_name: 'Christina',
        last_name: 'Yang',
        supervisor: 'Derek Shepherd',
        username: 'elegante2',
        password: '1234',
        assay_id: '1'
    }
];

const seedTech = () => Tech.bulkCreate(techData);

module.exports = seedTech;