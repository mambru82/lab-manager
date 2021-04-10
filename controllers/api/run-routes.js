const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models')

//pull a run list for all runs (only available through Insomnia)
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
            },
            {
                model: Results,
                attriburtes: ['clade']
            }
        ]
    })
    .then(dbRunData => res.json(dbRunData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })

})

//creates a single run
router.post('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
    Run.create({
        assay_id: req.body.assay_id,
        tech_id: req.body.tech_id,
    })
    .then(dbRunData => res.json(dbRunData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

//deletes a run (only available through Insomnia)
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