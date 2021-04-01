const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models')

//pull a patient list for all patients
router.get('/', (req, res) => {
    Results.findAll({

        order: [['id']],
        include: [
            {
                model: Patient,
                attributes: ['first_name', 'last_name']
            }
        ]
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })

})

router.post('/', (req, res) => {
    Results.create({
        patient_id: req.body.patient_id,
        run_id: req.body.run_id,
        seq_name: req.body.seq_name,
        clade: req.body.clade,
        qc_missing_data_score: req.body.qc_missing_data_score,
        total_missing: req.body.total_missing,
        missing_data_threshold: req.body.missing_data_threshold,
        status: req.body.status,
        overall_score: req.body.overall_score,
        overall_status: req.body.overall_status,
        nearest_tree_node_id: req.body.nearest_tree_node_id,
        errors: req.body.errors
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.delete('/:id', (req, res) => {
    Results.destroy({
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