const router = require('express').Router();
const sequelize = require('../../config/connection');
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
        order: [['last_name', 'DESC']],
        include: 
            {
                model: Results,
                attributes: ['clade']
            }
        
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })

})

router.post('/', (req, res) => {
    Patient.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.delete('/:id', (req, res) => {
    Patient.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPatientData => {
        if (!dbPatientData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPatientData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;