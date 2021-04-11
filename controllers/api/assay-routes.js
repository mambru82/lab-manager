const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models');

//GET /api/assays
router.get('/', (req, res) => {
    // Access our assay model and run .findAll() method
    Assay.findAll({})
    .then(dbAssayData => res.json(dbAssayData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// GET /api/assays/1
router.get('/:id', (req, res) => {

    Assay.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbAssayData => {
        if (!dbAssayData) {
            res.status(404).json({ message: 'No assay found with this id'});
            return;
        }
        res.json(dbAssayData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// POST /api/assays
router.post('/', (req, res) => {
    // expects {assay: 'COVIDSeq', analyte: 'Sars-Cov2' }
    Assay.create({
        assay_name: req.body.assay,
        analyte: req.body.analyte
    })
    .then(dbAssayData => res.json(dbAssayData))
    .catch(err => {
      if (err.name === 'SequelizeValidationError') {
        var message = err.errors.map(e => e.message).toString();
          res.status(422).json({ 
          success: false,
          msg: message
        })
      } else {
        console.log(err);
        res.status(500).json(err);
      }
    })
});

module.exports = router