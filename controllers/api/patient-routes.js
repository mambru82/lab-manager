const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models')

//pull a patient list for all patients
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
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

//create a patient

router.post('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
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

//delete a given patient (only available through Insomnia)
router.delete('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
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