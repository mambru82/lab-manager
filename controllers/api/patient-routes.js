const router = require('express').Router();
const sequelize = require('../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models')

//pull a patient list for all patients
router.get('/', (req, res) => {
    Patient.findAll({

        attributes: [
            'id',
            'first_name',
            'last_name',
            'dob'
        ],
        order: [['last_name', 'DESC']]
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })

})

module.exports = router;