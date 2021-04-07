const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models')

//pull a patient list for all patients
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
    Run.findAll({

        order: [['id']],
        include: [
            {
                model: Tech,
                attributes: ['first_name', 'last_name']
            }, 
            {
                model: Assay,
                attributes: ['assay_name']
            }
        ]
    })
    .then(dbRunData => res.json(dbRunData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })

})

router.post('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
    Run.create({
        assay_id: req.body.patient_id,
        tech_id: req.body.run_id,
    })
    .then(dbRunData => res.json(dbRunData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.delete('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
    Results.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbRunData => {
        if (!dbRunData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbRunData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;