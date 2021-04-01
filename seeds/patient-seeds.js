const {Patient} = require('../models');

const patientData = [
    {
        first_name: 'Kris',
        last_name: 'Jenner',
        dob: '11/05/1955'
    },
    {
        first_name: 'Kourtney',
        last_name: 'Kardashian',
        dob: '04/18/1979'
    },
    {
        first_name: 'Kim',
        last_name: 'Kardashian',
        dob: '08/21/1980'
    },
    {
        first_name: 'Khloe',
        last_name: 'Kardashian',
        dob: '06/27/1984'
    },
    {
        first_name: 'Robert',
        last_name: 'Kardashian',
        dob: '03/17/1987'
    },
    {
        first_name: 'Kendall',
        last_name: 'Jenner',
        dob: '11/03/1995'
    },
    {
        first_name: 'Kylie',
        last_name: 'Jenner',
        dob: '08/10/1997'
    },
    {
        first_name: 'Scott',
        last_name: 'Disick',
        dob: '05/26/1983'
    },
    {
        first_name: 'Mason',
        last_name: 'Disick',
        dob: '12/14/2009'
    },
    {
        first_name: 'Penelope',
        last_name: 'Disick',
        dob: '07/08/2012'
    },
    {
        first_name: 'North',
        last_name: 'West',
        dob: '06/13/2013'
    },
    {
        first_name: 'Reign',
        last_name: 'Disick',
        dob: '12/14/2014'
    },
    {
        first_name: 'Saint',
        last_name: 'West',
        dob: '12/05/2015'
    },
    {
        first_name: 'Stormi',
        last_name: 'Webster',
        dob: '02/01/2018'
    },
    {
        first_name: 'True',
        last_name: 'Thompson',
        dob: '04/12/2018'
    },
    {
        first_name: 'Chicago',
        last_name: 'West',
        dob: '01/15/2018'
    }
];

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;